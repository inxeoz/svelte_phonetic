<script lang="ts">

    let normal_text = "";
    import {fetchPhonetic} from "./fetchPhonetic";
    import {
        overlay,
        phoneticSent,
        endWordIndex,
        list_of_sentences,
        total_index_of_sentences, currentSentIndex,
    } from "./store.js";


    export async function convert_to_display_sentences() {
        // Reset and initialize
        list_of_sentences.set([]);
        let currentSent: string[] = [];
        let currentSentLength = 0;
        const SENTENCE_LENGTH = 15;

        for (const word of $phoneticSent.slice(0, $endWordIndex)) {
            const wordLength = word.length;

            // Check if adding this word would exceed the limit
            if (currentSentLength + wordLength > SENTENCE_LENGTH) {
                list_of_sentences.update(current => [...current, currentSent]);
                currentSent = [];
                currentSentLength = 0;
            }

            // Add the word to current sentence
            currentSent.push(word);
            currentSentLength += wordLength;

            // Handle exact length match
            if (currentSentLength === SENTENCE_LENGTH) {
                list_of_sentences.update(current => [...current, currentSent]);
                currentSent = [];
                currentSentLength = 0;
            }
        }

        // Add remaining words if any
        if (currentSent.length > 0) {
            list_of_sentences.update(current => [...current, currentSent]);
        }

        total_index_of_sentences.set($list_of_sentences.length);
        console.log($list_of_sentences);
    }


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
            endWordIndex.set(
                phonetic.phonetic.SentRes ? phonetic.phonetic.SentRes.length : 0
            )
            list_of_sentences.set([]);
            total_index_of_sentences.set(0);
            currentSentIndex.set(0);


            console.log("end index", $endWordIndex)
            await convert_to_display_sentences();

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
