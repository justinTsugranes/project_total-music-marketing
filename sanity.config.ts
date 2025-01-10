import {defineConfig} from 'sanity'
import {RobotIcon, RocketIcon} from '@sanity/icons'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {cloudinaryAssetSourcePlugin} from 'sanity-plugin-cloudinary'
import {schemaTypes} from './schemas'

import {myTheme} from './theme'

import StudioNavbar from './src/components/StudioNavbar'
import StudioLogo from './src/components/StudioLogo'
import {getDefaultDocumentNode} from './structure'

export default defineConfig([
  {
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
    dataset: import.meta.env.SANITY_STUDIO_DATASET,
    name: 'the_Lightning_Realm',
    basePath: '/studio',
    title: 'theLightningRealm',
    icon: RobotIcon,

    plugins: [
      deskTool({
        defaultDocumentNode: getDefaultDocumentNode,
      }),
      visionTool(),
      cloudinaryAssetSourcePlugin(),
    ],

    schema: {
      types: schemaTypes,
    },

    studio: {
      components: {
        logo: StudioLogo,
        navbar: StudioNavbar,
      },
    },

    theme: myTheme,
  },

  {
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
    dataset: import.meta.env.SANITY_STUDIO_DATASET,
    name: 'staging-workspace',
    basePath: '/staging',
    title: 'Staging Workspace!',
    icon: RocketIcon,

    plugins: [deskTool(), visionTool(), cloudinaryAssetSourcePlugin()],

    schema: {
      types: schemaTypes,
    },
  },
])
