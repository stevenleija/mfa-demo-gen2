import { env } from '$amplify/env/my-first-function'; // the import is '$amplify/env/<function name>'

export const handler = async (event: any) => {
    console.log(`Hello, ${ env.NAME }!`);
    return 'Hello from my first function!';
};
