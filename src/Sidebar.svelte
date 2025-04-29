<script>
    import Theme from "./util/Theme.svelte";
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
        padding: 0.625rem;
        display: flex;
        flex-direction: column;
        justify-content: start;
        row-gap: 0.625rem;
        container-type: inline-size;

    }

    .bar {
        background: var(--background-color);
        color: var(--text-color);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 0.625rem;
    }
    .icons {
        min-width: auto;
    }

    .top_bar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        column-gap: 0.625rem;
    }
    .service_name {
        display: none;
    }

    @container (width > 12rem) {
        .service_name {
            display: block;
        }

    }

</style>
