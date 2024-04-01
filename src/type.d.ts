declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}
declare module 'nuxt/schema' {
  interface AppConfig {
    appName?: string;
    /** 主题配置 */
    theme?: {
      /** 主要应用颜色 */
      primaryColor?: string;
    };
  }
}

export {};
