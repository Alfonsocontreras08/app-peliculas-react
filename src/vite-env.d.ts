/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_MARVEL_PRIVATE_KEY: string
  readonly VITE_MARVEL_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}