// Documentation: https://sdk.netlify.com
import { NetlifyIntegration } from '@netlify/sdk';

const integration = new NetlifyIntegration();

integration.addFunctions('./src/functions', {
  prefix: 'sf_prefix',
});

export { integration };
