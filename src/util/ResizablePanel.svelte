<script lang="ts">
    export let icon: string | undefined = '';
    export let direction: 'horizontal' | 'vertical' = 'horizontal';
    export let defaultSize: number | undefined = undefined; // REM value
    export let minSize = 10; // REM
    export let maxSize = 90; // REM

    let sizeRem: number | undefined = defaultSize;
    let isDragging = false;
    let startPosition = 0;
    let startSize = 0;
    let containerSizeRem = 0;
    let panelEl: HTMLDivElement;

    const pxToRem = (px: number): number => px / 16;

    function updateContainerSize(): void {
        if (!panelEl?.parentElement) return;
        const parent = panelEl.parentElement;
        const containerSizePx = direction === 'horizontal'
            ? parent.clientWidth
            : parent.clientHeight;
        containerSizeRem = pxToRem(containerSizePx);
    }

    function onMouseDown(event: MouseEvent): void {
        if (sizeRem == null) {
            updateContainerSize();
            const rect = panelEl.getBoundingClientRect();
            const currentSizePx = direction === 'horizontal'
                ? rect.width
                : rect.height;
            sizeRem = pxToRem(currentSizePx);
        }

        isDragging = true;
        startPosition = direction === 'horizontal'
            ? event.clientX
            : event.clientY;
        startSize = sizeRem;

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }

    function onMouseMove(event: MouseEvent): void {
        if (!isDragging) return;
        const currentPosition = direction === 'horizontal'
            ? event.clientX
            : event.clientY;
        const deltaPx = currentPosition - startPosition;
        const deltaRem = pxToRem(deltaPx);
        sizeRem = Math.min(Math.max(startSize + deltaRem, minSize), maxSize);
    }

    function onMouseUp(): void {
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
        style:width={direction === 'horizontal' && sizeRem !== undefined
        ? `${sizeRem}rem`
        : undefined}
        style:height={direction === 'vertical' && sizeRem !== undefined
        ? `${sizeRem}rem`
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
        padding: 0.625rem; /* 10px → 0.625rem */
    }

    .resize-handle.horizontal {
        top: 0;
        right: 0;
        width: 0.75rem; /* 12px → 0.75rem */
        height: 100%;
        cursor: ew-resize;
    }

    .resize-handle.vertical {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.75rem; /* 12px → 0.75rem */
        cursor: ns-resize;
    }

    .handle-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2.5rem; /* 40px → 2.5rem */
    }

    .custom-icon {
        width: 1rem; /* 16px → 1rem */
        height: 1rem;
        pointer-events: none;
    }
</style>
