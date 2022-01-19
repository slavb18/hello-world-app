import withTmInitializer from 'next-transpile-modules';
import fs from 'fs';


const withTM = withTmInitializer([
  'next-auth',
]);


const nextConfig = {
  trailingSlash: false,
};


const tmConfig=withTM(nextConfig);
export default tmConfig;
