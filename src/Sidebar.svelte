<script>
    import Theme from "./util/Theme.svelte";
    import close_menu from "./assets/close_menu.svg";

</script>

<div class="sidebar global_border">


    <div class="top_bar">
        <Theme/>

        <div class="menu_bar">
            <img src={close_menu} alt="Sun Icon" class="logo" />
        </div>

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
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        row-gap: 20px;

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

    .top_bar {
        display: flex;
        justify-content: space-between;
    }
</style>
