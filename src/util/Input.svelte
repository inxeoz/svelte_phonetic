<script lang="ts">

    let normal_text = "";
    import {fetchPhonetic} from "./fetchPhonetic";
    import {overlay, phoneticSent, currentPage, pageLength} from "./store.js";

    async function convertText() {


        if (normal_text.trim().length === 0) {
            overlay.set({
                visible: true,
                type: 'warning',
                message: 'Please enter text to convert!'
            });
            return;
        }

        try {

            possible_state = "Converting...";
            const phonetic = await fetchPhonetic(normal_text, "SentRes");
            console.log(phonetic.phonetic.SentRes)

            phoneticSent.set(phonetic.phonetic.SentRes ? phonetic.phonetic.SentRes : [])
            currentPage.set(0);
            pageLength.set(
                phonetic.phonetic.SentRes ? phonetic.phonetic.SentRes.length : 0
            )

        } catch (error) {
            overlay.set({
                visible: true,
                type: 'error',
                message: 'Something went wrong!\n' + error.message
            });
            console.error(error);
        }
        possible_state = "to Phonetic";


    }

    let possible_state = "to Phonetic";

</script>

<div class="input_main global_center_div">

    <textarea class="input_text global_border global_font global_center_div"
              bind:value={normal_text}
              placeholder="Enter text to convert into phonetic">
    </textarea>


    <button class="convert_button global_border global_font global_center_div"
            on:click={() => {convertText()}}
    >
        <h3>
            { possible_state}

        </h3>
    </button>

</div>


<style>
    .input_main {
        height: auto;
        width: 100%;
        flex-direction: row;
        column-gap: 20px;
    }


    .input_text {
        width: 500px;
        height: 60px;
        background: #ddb892;
        color: #8a6060;
        text-decoration: underline;
        text-underline-offset: 10px;
        text-align: center;
        line-height: 60px;

    }


    .convert_button {
        width: 150px;
        height: 60px;
        background: #e26d5c;
        color: white;
        cursor: pointer;
    }
</style>
