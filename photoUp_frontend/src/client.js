// import SanityClient  from "@sanity/client";
// import imageUrlBuilder from '@sanity/image-url';
// import { createClient } from "@sanity/client";


// export default createClient({
//     projectId: "qf4rxxvk",
//     dataset: 'production',
//     apiVersion: '2021-11-16',
//     useCdn: true,
//     token: "skX2Ho1t7vj3aOIJmbz8HP9lkgCmJFiBdY0hdjv3dzGZwefbHHunbv65nDL10qA9yInaLSopzKnZM2cXKL1SfKrkKVPymhLLvGqiuG6jODVK7FalVpStCgOCCyzZikz4RoIn9O7GpAelVV9oBWaVrTiPjww21WRE3JDssy5vPwZMLejGVNqg" ,
//     ignoreBrowserTokenWarning: true

// })

// const builder = imageUrlBuilder(createClient)

// export const urlFor=(source)=>builder.image(source)

import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export default createClient({
  projectId: "2tj0xr54",
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: "skcdpUCsW0YKBZqFnYl9lmb8s8mnp41vUhSdWQhr0aR5Dunl9FN33M9kLYc1Q0DoKh7NkV3p7c1VC6md43nbCS7V68rLLKqapSDoE7hCuhGqW6TL5pkuKpC6v4uvvL4XfgxJDMWwZ33dkkxOAPsn0xuSNxfewUQm6gjDxxTUC75noX9OTSgr" ,
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(createClient);

export const urlFor = (source) => builder.image(source);