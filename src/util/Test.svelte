<script>
    import Resizable from './Resizable.svelte';
    import ResizablePanel from './ResizablePanel.svelte';
</script>

<div style="height: 100vh; width: 100%;">
    <Resizable direction="horizontal">

        <ResizablePanel defaultSize={250}>
            <div class="test" style="padding: 20px;">
                Sidebar Content
            </div>
        </ResizablePanel>

        <div style="flex: 1; background: white; padding: 20px;">
            Main Content Area
        </div>
    </Resizable>
</div>


<style>

    /* Apply container queries to the resizable panel */
    @container (min-width: 100px) {
        .test {
            background-color: #45ab30; /* Light background when width >= 400px */
        }
    }

    @container (min-width: 200px) {
        .test {
            background-color: #123872; /* Change color when width >= 600px */
        }
    }

    @container (min-width: 300px) {
        .test {
            background-color: #f25757; /* Darker background when width >= 800px */
        }
    }

</style>
