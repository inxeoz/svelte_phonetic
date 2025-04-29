<script>
    import Theme from "./util/Theme.svelte";
    // import close_menu from "./assets/close_menu.svg";

    import box from './assets/box.svg'

</script>

<div class="sidebar global_border">

    <div class="top_bar">
        <Theme/>
        <h3 class="service_name">
            Phonetic
        </h3>
    </div>

    <div id="stories_bar" class="bar global_border global_font">

        <img src={box} alt="dfd" class="icons">
        <h2 class="service_name global_font">
            Stories
        </h2>
    </div>

    <div id="stories_bar" class="bar global_border global_font">

        <img src={box} alt="dfd" class="icons">
        <h2 class="service_name">
            Converter
        </h2>
    </div>



</div>

<style>



    .sidebar {
        width: auto;
        height: 100%;
        background: var(--sec-background-color);
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        row-gap: 20px;

    }

    .bar {
        width: auto;
        height: 50px;
        background: var(--background-color);
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: var(--text-color);
        cursor: pointer;
        column-gap: 10px;
    }
    .icons {
        min-width: auto;
    }

    .top_bar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        column-gap: 10px;
    }

    .service_name {
        display: none;
    }

    /* Apply container queries to the resizable panel */
    @container (min-width: 100px) {
        .service_name {
            display: none;
        }
    }

    @container (min-width: 200px) {
        .service_name {
            display: contents;
        }
    }

    @container (min-width: 300px) {

    }
</style>
