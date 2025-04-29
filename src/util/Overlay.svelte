<script>
    import { overlay } from "./store.js";
    import { fly } from 'svelte/transition';

    // Function to hide the overlay
    function closeOverlay() {
        overlay.set({
            visible: false,
            type: '',
            message: ''
        });
    }
</script>

{#if $overlay.visible}
    <div class="overlay global_center_div" in:fly={{ y: -20, duration: 300 }}>
        <div class="overlay-content {$overlay.type}">
            <button class="close-btn" on:click={closeOverlay}>×</button>
            <h2>{$overlay.type.toUpperCase()}</h2>
            <p>{$overlay.message}</p>
        </div>
    </div>
{/if}

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9999;
    }

    .overlay-content {
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        min-width: 18.75rem;
        text-align: center;
        box-shadow: 0 0 1.25rem rgba(0,0,0,0.3);
        position: relative;
    }

    .overlay-content.error {
        border: 0.125rem solid red;
        color: red;
    }

    .overlay-content.warning {
        border:  0.125rem  solid #123872;
        color: #123872;
    }

    /* Close button styles */
    .close-btn {
        position: absolute;
        top: 0.625rem;
        right: 0.625rem;
        background: transparent;
        border: none;
        font-size: 1.5rem;
        color: gray;
        cursor: pointer;
    }

    .close-btn:hover {
        color: black;
    }
</style>
