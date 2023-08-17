/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        db_username: process.env.USERNAME,
        db_pass: process.env.PASSWORD,
        db_clustername: 'cluster0',
        db_key: 'my-site-dev'
      }
    };
  }

  return {
    env: {
      db_username: process.env.USERNAME,
      db_pass: process.env.PASSWORD,
      db_clustername: 'cluster0',
      db_key: 'my-site'
    }
  };
};

module.exports = nextConfig
