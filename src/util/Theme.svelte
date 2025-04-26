<div class="container">
    <!-- Toggle Switch -->
    <input type="checkbox" id="checkboxInput">
    <label for="checkboxInput" class="toggleSwitch">
    <span class="icons">
      <span class="icon moon">🌙</span>
      <span class="icon sun">☀️</span>
    </span>
        <span class="slider"></span>
    </label>
</div>

<style>
    /* Root variables for easy control */
    :root {
        --switch-width: 125px;
        --switch-height: 45px;
        --padding-horizontal: 10px;
        --slider-size: 40px;
        --icon-size: 1.2rem;

        --bg-night: #4a4c68;
        --bg-day: #f4cd5c;

        --icon-moon-color: #b3b3cc;
        --icon-sun-color: #000000;

        --icon-sun-color-active: #ffffff;
        --slider-color-night: #45ab30;
        --slider-color-day: #4a4c68;
        --transition-speed: 0.3s;
    }

    /* Container (optional) */
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Hide the checkbox */
    #checkboxInput {
        display: none;
    }

    /* Toggle Switch Base */
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

    /* Icons wrapper */
    .icons {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        z-index: 2;
    }

    /* Individual icons */
    .icon {
        font-size: var(--icon-size);
        transition: color var(--transition-speed) ease, opacity var(--transition-speed) ease;
    }

    .moon {
        color: var(--icon-moon-color);
    }

    .sun {
        color: var(--icon-sun-color);
    }

    /* The moving slider circle */
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

    /* When checkbox is checked (day mode) */
    #checkboxInput:checked + .toggleSwitch {
        background-color: var(--bg-day);
    }

    #checkboxInput:checked + .toggleSwitch .slider {
        transform: translateX(calc(var(--switch-width) - var(--slider-size) - var(--padding-horizontal)));
        background-color: var(--slider-color-day);
    }

    #checkboxInput:not(:checked) + .toggleSwitch .sun {
        opacity: 0.5;
    }

    #checkboxInput:checked + .toggleSwitch .moon {
        opacity: 0.5;
    }

    #checkboxInput:checked + .toggleSwitch .sun {
        color: var(--icon-sun-color-active);
        opacity: 1;
    }
</style>
