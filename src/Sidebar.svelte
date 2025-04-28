<script>
    import Theme from "./util/Theme.svelte";
    // import close_menu from "./assets/close_menu.svg";

</script>

<div class="sidebar global_border">

    <div class="top_bar">
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
        background: var(--sec-background-color);
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        row-gap: 20px;

    }

    .bar {
        width: 300px;
        height: 50px;
        background: var(--background-color);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text-color);
        cursor: pointer;
    }

    .top_bar {
        display: flex;
        justify-content: space-between;
    }

    /* Apply container queries to the resizable panel */
    @container (min-width: 100px) {
        .sidebar {
            background-color: #45ab30; /* Light background when width >= 400px */
        }
    }

    @container (min-width: 200px) {
        .sidebar {
            background-color: #123872; /* Change color when width >= 600px */
        }
    }

    @container (min-width: 300px) {
        .sidebar {
            background-color: #f25757; /* Darker background when width >= 800px */
        }
    }
</style>
