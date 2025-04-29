<script lang="ts">

    import { local_list_of_sentences} from "./store.js"
    let neutral_color = ["#dda15e", "#ddbea9", "#b8b8ff", "#83c5be", "#a3b18a", "#f4acb7", "#ffcb69", "#cebebe"];


</script>

<div class="display_main global_center_div">

    {#each $local_list_of_sentences as sent, index}
        <div class="display_sent global_center_div">
            {#each sent as word, index}
                <div class="display_word global_center_div global_font"
                     style="--neutral-color: {neutral_color[index % neutral_color.length]};">
                    <h3>
                        {word}
                    </h3>

                </div>
            {/each}
        </div>
    {/each}

</div>

<style>

    .display_main {
        width: 100%;
        height: 100%;
        padding: 2.5rem 0;
        flex-direction: column;
        justify-content: space-around;
    }

    .display_sent {
        width: 100%;
        height: 3.75rem;
        flex-direction: row;
        justify-content: space-around;
    }

    .display_word {
        width: auto;
        height: 100%;
        background-color: var(--neutral-color);
        padding: 0 1.25rem;
        cursor: pointer;
        color: #4a4e69;
    }

</style>
