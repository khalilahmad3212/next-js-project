import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '3bgi76ao',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;