
<script lang="ts">
    import {currentSentIndex, total_index_of_sentences} from "./store";

    async function prev() {
        if ($currentSentIndex -1 >= 0) {
            currentSentIndex.update(val => val - 1);
        }
    }

    async function next() {
        if ($currentSentIndex +1  <  $total_index_of_sentences ) {
            currentSentIndex.update(val => val + 1);
        }
    }
</script>
<div class="navigation_main global_center_div">
    <button class="nav_button global_font global_border global_center_div" id="prev_btn" on:click={()=>{prev()}}>
        <h3>
            Previous
        </h3>
    </button>

    <button class="nav_button global_font global_border global_center_div" id="next_btn" on:click={()=>{next()}}>
        <h3>
            Next
        </h3>
    </button>
</div>

<style>

    .navigation_main {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }

    .nav_button {
        width: 150px;
        height: 70px;
        background-color: #735d78;
        color: white;
        cursor: pointer;
    }
</style>
