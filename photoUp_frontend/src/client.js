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





// real code!

// import { createClient } from "@sanity/client";
// import imageUrlBuilder from '@sanity/image-url';

// const a = createClient({
//   projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
//   dataset: 'production',
//   apiVersion: '2023-05-03',
//   useCdn: true,
//   token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN ,
//   ignoreBrowserTokenWarning: true
// });


// export const client = createClient({
//   projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
//   dataset: 'production',
//   apiVersion: '2023-05-03',
//   useCdn: true,
//   token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN ,
//   ignoreBrowserTokenWarning: true
// });

// const builder = imageUrlBuilder(createClient);

// export const urlFor = (source) => builder.image(source); 


import { createClient } from '@sanity/client'; 
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN ,
  ignoreBrowserTokenWarning: true
});

export default client;
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);