<script lang="ts">
    import Moon from '../assets/moon.svg';
    import Sun from '../assets/sun.svg';
    import { theme } from "./store.js";

    let moon_cir_color = "";
    let sun_cir_color = "";
    let sun_opacity =  0.5;
    let moon_opacity =   0.5;

    //calling for first time , initial
    toggleTheme($theme);

    function toggleTheme(pref: string) {
        if (pref === "dark") {
            moon_cir_color = "#ebe1e1";
            sun_cir_color = "";
            sun_opacity = 0.5;
            moon_opacity = 1;
        } else {
            moon_cir_color = "";
            sun_cir_color = "#123872";
            sun_opacity = 1;
            moon_opacity = 0.5;
        }

        theme.set(pref);
    }
</script>

<div
        class="theme_main global_center_div"
        style="--moon-cir-color: {moon_cir_color}; --sun-cir-color: {sun_cir_color}; --sun-opacity: {sun_opacity}; --moon-opacity: {moon_opacity}"
>
    <div class="theme_slide_background">
        <button class="moon_btn" on:click={() => toggleTheme("dark")}>
            <img src={Moon} alt="Moon Icon" class="logo" />
        </button>

        <button class="sun_btn" on:click={() => toggleTheme("light")}>
            <img src={Sun} alt="Sun Icon" class="logo" />
        </button>
    </div>
</div>

<style>
    .theme_main {
        width: 150px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Root variables for easy control */
    :root {
        --switch-width: 150px;
        --switch-height: 50px;
        --slider-size: 40px;
        --bg-night: #4a4c68;
        --bg-day: #f2df9c;
        --slider-color-night: #ffffff;
        --slider-color-day: #4a4c68;
        --transition-speed: 0.3s;
        --icon-transition-speed: 0.3s;
        --icon-size: 2rem;
    }

    .theme_slide_background {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        gap: 1rem;
        background: var(--background-color);
        padding: 0.6rem;
        border-radius: 30px;
        transition: background-color var(--transition-speed) ease;
    }

    /* Button styling */
    button {
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        transition: background-color var(--transition-speed) ease, transform var(--transition-speed) ease;
    }

    /* Styling for the icon */
    .logo {
        width: var(--icon-size);
        height: var(--icon-size);
        object-fit: contain;
        transition: filter var(--icon-transition-speed) ease, opacity var(--icon-transition-speed) ease;
    }

    /* Button background styling and transitions for moon icon */
    .moon_btn {
        opacity: var(--moon-opacity);
        background: var(--moon-cir-color);
        transition: background-color var(--transition-speed) ease;
    }


    /* Button background styling and transitions for sun icon */
    .sun_btn {
        opacity: var(--sun-opacity);
        background: var(--sun-cir-color);
        transition: background-color var(--transition-speed) ease;
    }


    /* Hover effect for icons */
    .theme_slide_background .moon_btn:hover .logo,
    .theme_slide_background .sun_btn:hover .logo {
        opacity: 1;
        filter: brightness(1);
    }

    /* Button clicked effect */
    .theme_slide_background .moon_btn:active,
    .theme_slide_background .sun_btn:active {
        transform: scale(0.95);

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
