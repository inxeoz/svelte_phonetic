<script lang="ts">

    import {list_of_sentences, currentSentIndex, total_index_of_sentences, local_list_of_sentences, max_visible_sentence} from "./store.js"
    let neutral_color = ["#dda15e", "#ddbea9", "#b8b8ff", "#83c5be", "#a3b18a", "#f4acb7", "#ffcb69", "#cebebe"];

        //slice($currentSentIndex, $currentSentIndex + $max_visible_sentence) imp <---
        $: {
            local_list_of_sentences.set($list_of_sentences.slice($currentSentIndex, $currentSentIndex + $max_visible_sentence));

            console.log("local -list", $local_list_of_sentences)
        }
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
        padding: 40px 0;
        flex-direction: column;
        justify-content: space-around;
    }

    .display_sent {
        width: 100%;
        height: 60px;
        flex-direction: row;
        justify-content: space-around;
    }

    .display_word {
        width: auto;
        height: 100%;
        background-color: var(--neutral-color);
        padding: 0 20px;
        cursor: pointer;
    }

</style>
