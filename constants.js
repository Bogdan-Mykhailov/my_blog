export const CONNECTION_STRING = `mongodb+srv://${process.env.db_username}:${process.env.db_pass}@${process.env.db_clustername}.nsvvfdc.mongodb.net/?retryWrites=true&w=majority`;
export const STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
  NULL: null,
};
export const PATH = {
  MAIN: '/',
  POSTS: '/posts',
  CONTACT: '/contact',
  IMAGES: '/images',
  API: '/api',
}
