<script lang="ts">
    import Moon from '../assets/moon.svg';
    import Sun from '../assets/sun.svg';
    import {theme} from "./store.js";

    function toggleTheme(pref: string) {
        theme.set(pref);
    }
</script>

<div class="theme_main global_center_div">

    <div class="theme_slide_background">

        <button class="moon_btn" on:click={() => toggleTheme("dark")}>
            <img src={Moon} alt="Moon Icon" class="logo"/>
        </button>

        <button class="sun_btn" on:click={() => toggleTheme("light")}>
            <img src={Sun} alt="Sun Icon" class="logo"/>
        </button>
    </div>

</div>


<style>

    .theme_main {
        width: 200px;
        height: 100px;
    }
    /* Root variables for easy control */
    :root {
        --switch-width: 150px;
        --switch-height: 50px;
        --slider-size: 40px;
        --icon-size: 1.8rem;
        --bg-night: #4a4c68;
        --bg-day: #f2df9c;
        --slider-color-night: #ffffff;
        --slider-color-day: #4a4c68;
        --transition-speed: 0.3s;
        --icon-transition-speed: 0.3s;
    }

    .theme_slide_background {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        gap: 5rem;
        background: var(--themeBg);
        padding: 0.6rem;
        border-radius: 30px;
    }

    /* Button styling */
    button {
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: none;
    }

    .logo {
        width: var(--icon-size);
        height: var(--icon-size);
        object-fit: contain;
        transition: filter var(--icon-transition-speed) ease, opacity var(--icon-transition-speed) ease;
    }

    /* Transition effects for icons */
    .moon_btn .logo {
        opacity: 0.5;
    }

    .sun_btn .logo {
        opacity: 0.5;
    }

    /* Button interactions when toggled */
    .theme_slide_background .moon_btn:hover .logo {
        opacity: 1;
        filter: brightness(1);
    }

    .theme_slide_background .sun_btn:hover .logo {
        opacity: 1;
        filter: brightness(1);
    }

    /* Styling for light and dark themes based on `theme` store */
    :global(body) {
        transition: background-color var(--transition-speed) ease;
    }

    /* Light mode styles */
    :global(body.light) {
        background-color: var(--bg-day);
    }

    /* Dark mode styles */
    :global(body.dark) {
        background-color: var(--bg-night);
    }
</style>
