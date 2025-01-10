import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {nextAppSanityProjectId, nextAppSanityDataset, nextAppSanityApiVersion} from '../environment'

export const sanityClient = createClient({
  projectId: nextAppSanityProjectId,
  dataset: nextAppSanityDataset,
  apiVersion: nextAppSanityApiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)
