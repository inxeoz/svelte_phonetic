<script>
    import Sidebar from "./Sidebar.svelte";
    import MainContent from "./MainContent.svelte";
    import "./global.css"
</script>

<div class="main global_border" >
    <Sidebar/>
    <MainContent/>
</div>

<style>
    .main {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: row;
        padding: 10px;


    }

</style>
