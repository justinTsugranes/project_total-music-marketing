/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_PROJECT_ID: string
  readonly SANITY_STUDIO_DATASET: string
  readonly SANITY_STUDIO_TITLE: string
  readonly NEXT_PUBLIC_SANITY_PROJECT_ID: string
  readonly NEXT_PUBLIC_SANITY_DATASET: string
  readonly NEXT_PUBLIC_SANITY_TOKEN: string
  readonly NEXT_PUBLIC_SANITY_API_VERSION: string
  readonly NEXT_PUBLIC_VERCEL_URL: string
  // more env variables...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
