<script>
    import Input from "./util/Input.svelte";
    import Navigation from "./util/Navigation.svelte";
    import Display from "./util/Display.svelte";
</script>

<div class="main_content">

    <Input/>
    <Display/>
    <Navigation/>
</div>

<style>

    .main_content {
        width: 100%;
        height: auto;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }


</style>
