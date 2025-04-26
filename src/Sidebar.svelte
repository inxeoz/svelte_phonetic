<script>
    import Theme from "./util/Theme.svelte";
</script>

<div class="sidebar global_border">

    <div class="theme_sel">
        <Theme/>

    </div>
    <div id="stories_bar" class="bar global_border global_font">
        <h2>
            Stories

        </h2>

    </div>
    <div id="stories_bar" class="bar global_border global_font">

        <h2>
            Converter

        </h2>
    </div>

</div>

<style>

    .sidebar {
        width: auto;
        height: 90vh;
        background: #ddb892;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        row-gap: 10px;

    }

    .bar {
        width: 300px;
        height: 50px;
        background: #4a4c68;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

    }
</style>
