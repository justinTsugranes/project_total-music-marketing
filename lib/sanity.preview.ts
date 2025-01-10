'use client'

import {definePreview} from 'next-sanity/preview'
import {nextAppSanityProjectId as projectId, nextAppSanityDataset as dataset} from '../environment'

function onPublicAccessOnly() {
  throw new Error(`This page is not available in preview mode`)
}

if (!projectId || !dataset) {
  throw new Error(`Missing projectId or dataset. Check your sanity.json or .env`)
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
})
