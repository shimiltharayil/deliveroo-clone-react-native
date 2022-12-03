import createImageUrlBuilder from '@sanity/image-url'
import  sanityClient  from "@sanity/client";

const client = sanityClient({
  projectId: "42o88wyl",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
