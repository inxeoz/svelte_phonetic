<script lang="ts">

    let neutral_color = ["#b8b8ff", "#83c5be", "#a3b18a", "#f4acb7", "#ffcb69", "#cebebe"];

    let arr1 = new Array(4).fill("the lion and the mouse and dog");
</script>

<div class="display_main global_center_div">
            {#each arr1 as word, index}
                <div class="display_word global_center_div global_font global_border"
                     style="--neutral-color: {neutral_color[index % neutral_color.length]};">
                    <h3>
                        {word}
                    </h3>

                </div>
            {/each}
</div>

<style>

    .display_main {
        width:auto;
        height: auto;
        padding: 2.5rem 0;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction: row;
        row-gap: 2.5rem;
    }


    .display_word {
        width: 18.75rem;
        height: 12.5rem;
        background-color: var(--neutral-color);
        padding: 0 1.25rem;
        cursor: pointer;
        color: #4a4e69;
    }

</style>
