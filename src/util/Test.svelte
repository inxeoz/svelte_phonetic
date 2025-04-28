<script>
    import Resizable from './Resizable.svelte';
    import ResizablePanel from './ResizablePanel.svelte';
</script>

<div style="height: 100vh; width: 100%;">
    <Resizable direction="horizontal">
        <ResizablePanel defaultSize={250}>
            <div style="padding: 20px;">
                Sidebar Content
            </div>
        </ResizablePanel>

        <div style="flex: 1; background: white; padding: 20px;">
            Main Content Area
        </div>
    </Resizable>
</div>
