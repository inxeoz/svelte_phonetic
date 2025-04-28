<script lang="ts">
    export let icon: string | undefined = ''; // SVG string or image URL
    export let direction = 'horizontal';
    export let defaultSize = undefined;
    export let minSize = 100;
    export let maxSize = 800;

    let size = defaultSize;
    let isDragging = false;
    let startPosition = 0;
    let startSize = 0;

    let panelEl;

    function onMouseDown(event) {
        if (size == null) {
            const rect = panelEl.getBoundingClientRect();
            size = direction === 'horizontal' ? rect.width : rect.height;
        }

        isDragging = true;
        startPosition = direction === 'horizontal' ? event.clientX : event.clientY;
        startSize = size;

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }

    function onMouseMove(event) {
        if (!isDragging) return;
        const currentPosition = direction === 'horizontal' ? event.clientX : event.clientY;
        const delta = currentPosition - startPosition;
        size = Math.min(Math.max(startSize + delta, minSize), maxSize);
    }

    function onMouseUp() {
        isDragging = false;
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    }
</script>

<div
        bind:this={panelEl}
        class="resizable-panel"
        style="{size !== undefined ? (direction === 'horizontal' ? `width: ${size}px` : `height: ${size}px`) : ''}"
>
    <slot/>

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
        container-type: inline-size;
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
        width: 16px; /* You can customize the size of the custom SVG */
        height: 16px;
        pointer-events: none; /* Ensure that the icon doesn't block mouse events */
    }
</style>
