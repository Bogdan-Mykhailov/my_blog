/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        db_username: 'bogdan',
        db_pass: '38VkDgpeclNwvQK8',
        db_clustername: 'cluster0',
        db_key: 'my-site-dev'
      }
    };
  }

  return {
    env: {
      db_username: 'bogdan',
      db_pass: '38VkDgpeclNwvQK8',
      db_clustername: 'cluster0',
      db_key: 'my-site'
    }
  };
};

module.exports = nextConfig
