import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/projects/nuxt-3-sdk-demo-pmmax8/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}