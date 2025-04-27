<script lang="ts">
    import Sidebar from "./Sidebar.svelte";
    import MainContent from "./MainContent.svelte";
    import "./global.css";
    import Overlay from "./util/Overlay.svelte";

    import {
        dark_text_color,
        dark_background_color,
        dark_second_background_color,
        light_text_color,
        light_background_color,
        light_second_background_color,
        theme
    } from "./util/store.js";


    //dynamic theme
    $: {
        if ($theme === "dark") {
            document.documentElement.style.setProperty('--background-color', $dark_background_color);
            document.documentElement.style.setProperty('--sec-background-color', $dark_second_background_color);
            document.documentElement.style.setProperty('--text-color', $dark_text_color);
        } else {
            document.documentElement.style.setProperty('--background-color', $light_background_color);
            document.documentElement.style.setProperty('--sec-background-color', $light_second_background_color);
            document.documentElement.style.setProperty('--text-color', $light_text_color);
        }
    }
</script>

<div class="main global_border">
    <Sidebar/>
    <MainContent/>
</div>
<Overlay/>
<style>
    .main {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: row;
        padding: 10px;

    }

</style>
