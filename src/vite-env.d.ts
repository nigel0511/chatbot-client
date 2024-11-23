/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare global {
  interface Window {
    VITE_APP_VERSION: any;
  }
}

export {};
