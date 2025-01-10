const sanityStudioProjectId = process.env.SANITY_STUDIO_PROJECT_ID
const sanityStudioDataset = process.env.SANITY_STUDIO_DATASET
const SanityStudioApiVersion = process.env.SANITY_STUDIO_API_VERSION
const SanityStudioToken = process.env.SANITY_STUDIO_TOKEN

const nextAppSanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const nextAppSanityToken = process.env.NEXT_PUBLIC_SANITY_TOKEN
const nextAppSanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const nextAppSanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const nextAppVercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL

export {
  sanityStudioProjectId,
  sanityStudioDataset,
  SanityStudioToken,
  SanityStudioApiVersion,
  nextAppSanityProjectId,
  nextAppSanityToken,
  nextAppSanityDataset,
  nextAppSanityApiVersion,
  nextAppVercelUrl,
}
