import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath:'/studio',
  name: 'BLOG_Content_Studio',
  title: 'BLOG Content Studio',

  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode:
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      // logo: Logo,
      navbar: StudioNavbar,
    }
  },
  theme: myTheme,
});
