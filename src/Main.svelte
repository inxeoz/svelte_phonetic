<script lang="ts">
    import Sidebar from "./Sidebar.svelte";
    import MainContent from "./MainContent.svelte";
    import "./global.css";
    import Overlay from "./util/Overlay.svelte";
    import fish from './assets/fish.svg'
    import moon from './assets/moon.svg'

    import {
        dark_text_color,
        dark_background_color,
        dark_second_background_color,
        light_text_color,
        light_background_color,
        light_second_background_color,
        themeNow, UiTheme,

    } from "./util/store.js";
    import Resizable from "./util/Resizable.svelte";
    import ResizablePanel from "./util/ResizablePanel.svelte";
    import CatlogStories from "./util/CatlogStories.svelte";

    //checking browser setting
    const prefersDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
        console.log("User prefers a dark interface");
        themeNow.set(UiTheme.DarkTheme);
    } else {
        console.log("User prefers a light interface");
        themeNow.set(UiTheme.LightTheme);
    }

    //dynamic theme
    $: {
        if ($themeNow === UiTheme.DarkTheme) {
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

<div class="main global_border global_center_div">
    <Resizable direction="horizontal">
<!--        default size needed-->
        <ResizablePanel defaultSize={300} minSize={100}>
            <Sidebar/>
        </ResizablePanel>

<!--        <CatlogStories/>-->

        <MainContent/>
    </Resizable>

</div>
<Overlay/>
<style>
    .main {
        width: 98vw;
        height: 95vh;
        display: flex;
        flex-direction: row;
        padding: 10px;
        background: var(--background-color);
    }
    :root {
        background: var(--background-color);
    }

</style>
