import { mount } from 'svelte'
import Main from "./Main.svelte";
import Test from "./util/Test.svelte";
import Test2 from "./util/Test2.svelte";

const app = mount(Test, {
  target: document.getElementById('app'),
})

export default app
