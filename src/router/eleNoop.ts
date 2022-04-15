import { defineComponent, VNode } from 'vue';

export default defineComponent({
  name: 'view-node',
  render(createElement: (name: string) => VNode) {
    return createElement('router-view');
  },
});
