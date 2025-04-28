<script>
    export let direction = 'horizontal'; // 'horizontal' or 'vertical'
</script>

<div
        class="resizable-container {direction}"
>
    <slot />
</div>

<style>
    .resizable-container.horizontal {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .resizable-container.vertical {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
