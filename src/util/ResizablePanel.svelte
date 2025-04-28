<script>
    export let defaultSize = 300;
    export let minSize = 100;
    export let maxSize = 800;
    export let direction = 'horizontal'; // 'horizontal' or 'vertical'

    let size = defaultSize;
    let isDragging = false;
    let startPosition = 0;
    let startSize = 0;

    function onMouseDown(event) {
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
        class="resizable-panel"
        style="{direction === 'horizontal' ? `width: ${size}px` : `height: ${size}px`}"
>
    <slot/>

    <button
            class="resize-handle {direction}"
            on:mousedown={onMouseDown}
            aria-label="Resize panel"
    >
        <div class="handle-icon">
            {#if direction === 'horizontal'}
                <svg width="8" height="24" viewBox="0 0 8 24" xmlns="http://www.w3.org/2000/svg" fill="gray">
                    <circle cx="4" cy="4" r="2"/>
                    <circle cx="4" cy="12" r="2"/>
                    <circle cx="4" cy="20" r="2"/>
                </svg>
            {:else}
                <svg width="24" height="8" viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg" fill="gray">
                    <circle cx="4" cy="4" r="2"/>
                    <circle cx="12" cy="4" r="2"/>
                    <circle cx="20" cy="4" r="2"/>
                </svg>
            {/if}
        </div>
    </button>
</div>

<style>
    .resizable-panel {
        position: relative;
        background: #f2f2f2;
        overflow: hidden;
    }

    .resize-handle {
        all: unset; /* Reset default button styles */
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        cursor: grab; /* Default cursor */
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
    }

    .handle-icon svg {
        pointer-events: none; /* Let events pass through to the button */
    }
</style>
