<script lang="ts">
    export let icon: string | undefined = '';
    export let direction = 'horizontal';
    export let defaultSize = undefined; // Percentage (0-100)
    export let minSize = 10; // Percentage
    export let maxSize = 90; // Percentage

    let sizePercent = defaultSize;
    let isDragging = false;
    let startPosition = 0;
    let startSize = 0;
    let containerSize = 0;
    let panelEl;

    function updateContainerSize() {
        if (!panelEl?.parentElement) return;
        const parent = panelEl.parentElement;
        containerSize = direction === 'horizontal'
            ? parent.clientWidth
            : parent.clientHeight;
    }

    function onMouseDown(event) {
        if (sizePercent == null) {
            updateContainerSize();
            const rect = panelEl.getBoundingClientRect();
            sizePercent = (direction === 'horizontal'
                ? rect.width
                : rect.height) / containerSize * 100;
        }

        isDragging = true;
        startPosition = direction === 'horizontal'
            ? event.clientX
            : event.clientY;
        startSize = sizePercent;

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }

    function onMouseMove(event) {
        if (!isDragging) return;
        const currentPosition = direction === 'horizontal'
            ? event.clientX
            : event.clientY;
        const delta = currentPosition - startPosition;
        const deltaPercent = (delta / containerSize) * 100;
        sizePercent = Math.min(Math.max(startSize + deltaPercent, minSize), maxSize);
    }

    function onMouseUp() {
        isDragging = false;
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    }

    import { afterUpdate, onMount } from 'svelte';

    let resizeObserver: ResizeObserver;

    onMount(() => {
        resizeObserver = new ResizeObserver(() => {
            updateContainerSize();
        });

        if (panelEl?.parentElement) {
            resizeObserver.observe(panelEl.parentElement);
        }

        return () => {
            resizeObserver?.disconnect();
        };
    });

    afterUpdate(() => {
        updateContainerSize();
    });
</script>

<div
        bind:this={panelEl}
        class="resizable-panel"
        style:width={direction === 'horizontal' && sizePercent !== undefined
        ? `${sizePercent}%`
        : undefined}
        style:height={direction === 'vertical' && sizePercent !== undefined
        ? `${sizePercent}%`
        : undefined}
>
    <slot />

    <button
            class="resize-handle {direction}"
            on:mousedown={onMouseDown}
            aria-label="Resize panel"
    >
        <div class="handle-icon">
            {#if icon}
                <img src={icon} alt="Resize handle icon" class="custom-icon" />
            {:else}
                {#if direction === 'horizontal'}
                    <svg width="32px" height="96px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                              fill="#000000"/>
                    </svg>
                {:else}
                    <svg width="96px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                              fill="#000000"/>
                    </svg>
                {/if}
            {/if}
        </div>
    </button>
</div>

<style>
    .resizable-panel {
        position: relative;
        background: #f2f2f2;
        overflow: hidden;
        height: 100%;
        width: 100%;
    }

    .resize-handle {
        all: unset;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        cursor: grab;
        padding: 10px;
    }

    .resize-handle.horizontal {
        top: 0;
        right: 0;
        width: 12px;
        height: 100%;
        cursor: ew-resize;
    }

    .resize-handle.vertical {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 12px;
        cursor: ns-resize;
    }

    .handle-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px;
    }

    .custom-icon {
        width: 16px;
        height: 16px;
        pointer-events: none;
    }
</style>
