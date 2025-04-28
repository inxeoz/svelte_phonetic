<script>

    let sents = new Array(5).fill("value")
    let words =["typesetting,"," remaining"," essentially"," unchanged."," It ","was"," popularised"," in"] ;

    let neutral_color = ["#dda15e", "#ddbea9", "#b8b8ff", "#83c5be", "#a3b18a", "#f4acb7", "#ffcb69", "#cebebe"];
</script>

<div class="display_main global_center_div">


    {#each sents as value, index}
        <div class="display_sent global_center_div">
            {#each words as value, index}
                <div class="display_word global_center_div global_font" style="--neutral-color: {neutral_color[index % neutral_color.length]};">
                    <h3>
                        {value}
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
