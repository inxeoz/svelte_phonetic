<script lang="ts">
    // Nothing needed in script
</script>

<style>
    .container {
        container-type: inline-size;
        width: 100%;
        height: 300px;
        background: lightgray;
        padding: 1rem;
        box-sizing: border-box;
        resize: horizontal;
        overflow: auto;

    }

    /* Change .content based on container's width */
    @container (min-width: 500px) {
        .content {
            background-color: lightcoral;
            color: white;
        }
    }

    @container (min-width: 800px) {
        .content {
            background-color: lightseagreen;
        }
    }

    @container (min-width: 1200px) {
        .content {
            background-color: lightgoldenrodyellow;
            color: black;
        }
    }
</style>

<div class="container">
    <div class="content">
        Resize me horizontally!
    </div>
</div>
