/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BOAFO_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}