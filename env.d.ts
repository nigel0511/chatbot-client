/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHATBOT_SERVER_URL: string;
  readonly VITE_COOKIE_DOMAIN: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
