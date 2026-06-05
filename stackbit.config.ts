import { ContentstackContentSource } from '@stackbit/cms-contentstack';

import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "nextjs",
    "contentSources": [
        new ContentstackContentSource({
            apiKey: process.env.CONTENTSTACK_API_KEY!,
            managementToken: process.env.CONTENTSTACK_MANAGEMENT_TOKEN!,
            authtoken: process.env.CONTENTSTACK_AUTHTOKEN,
            branch: process.env.CONTENTSTACK_BRANCH!,
            publishEnvironmentName: process.env.CONTENTSTACK_PUBLISH_ENV || 'production',
            skipFetchOnStartIfCache: true
        }),
        ],
    "postInstallCommand": "npm i --no-save @stackbit/types @stackbit/cms-contentstack"
})