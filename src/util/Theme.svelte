<script>
    import Moon from '../assets/moon.svg';
    import Sun from '../assets/sun.svg';
</script>

<div class="theme_main global_center_div">
    <!-- Toggle Switch -->
    <input type="checkbox" id="checkboxInput">
    <label for="checkboxInput" class="toggleSwitch">
    <span class="icons">
      <span class="icon moon">
        <img src={Moon} alt="Moon Icon" class="logo" />
      </span>
      <span class="icon sun">
        <img src={Sun} alt="Sun Icon" class="logo" />
      </span>
    </span>
        <span class="slider"></span>
    </label>
</div>

<style>
    /* Root variables for easy control */
    :root {
        --switch-width: 150px;
        --switch-height: 50px;
        --padding-horizontal: 10px;
        --slider-size: 40px;
        --icon-size: 1.8rem;

        --bg-night: #4a4c68;
        --bg-day: #f2df9c;

        --slider-color-night: #ffffff;
        --slider-color-day: #4a4c68;

        --transition-speed: 0.3s;
    }


    #checkboxInput {
        display: none;
    }

    .toggleSwitch {
        position: relative;
        width: var(--switch-width);
        height: var(--switch-height);
        background-color: var(--bg-night);
        border-radius: calc(var(--switch-height) / 2);
        cursor: pointer;
        padding: 0 var(--padding-horizontal);
        box-sizing: border-box;
        overflow: hidden;
        transition: background-color var(--transition-speed) ease;
    }

    .icons {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        z-index: 2;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity var(--transition-speed) ease;
    }

    .logo {
        width: var(--icon-size);
        height: var(--icon-size);
        object-fit: contain;
        transition: filter var(--transition-speed) ease, opacity var(--transition-speed) ease;
    }

    .slider {
        position: absolute;
        top: calc((var(--switch-height) - var(--slider-size)) / 2);
        left: calc(var(--padding-horizontal) / 2);
        height: var(--slider-size);
        width: var(--slider-size);
        background-color: var(--slider-color-night);
        border-radius: 50%;
        z-index: 1;
        transition: transform var(--transition-speed) ease, background-color var(--transition-speed) ease;
    }

    /* Active state */
    #checkboxInput:checked + .toggleSwitch {
        background-color: var(--bg-day);
    }

    #checkboxInput:checked + .toggleSwitch .slider {
        transform: translateX(calc(var(--switch-width) - var(--slider-size) - var(--padding-horizontal)));
        background-color: var(--slider-color-day);
    }

    #checkboxInput:not(:checked) + .toggleSwitch .sun .logo {
        opacity: 0.5;
        filter: brightness(0.7);
    }

    #checkboxInput:checked + .toggleSwitch .moon .logo {
        opacity: 0.5;
        filter: brightness(0.7);
    }

    #checkboxInput:checked + .toggleSwitch .sun .logo {
        opacity: 1;
        filter: brightness(1);
    }
</style>
