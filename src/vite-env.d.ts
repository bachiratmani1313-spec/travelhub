/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRAVELPAYOUTS_MARKER: string;
  readonly VITE_TRAVELPAYOUTS_TRS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
