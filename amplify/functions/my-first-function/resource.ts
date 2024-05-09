import { defineFunction } from '@aws-amplify/backend';

const functionProps = {
    name: 'my-first-function',
    entry: './handler.ts',
    // memoryMB: 256,
    // timeoutSeconds: 60,
    // // runtime: 20,
    // environment: {
    //     NAME: 'World',
    //     // 'API_ENDPOINT': process.env.API_ENDPOINT
    // }
};

export const myFirstFunction = defineFunction(functionProps);
