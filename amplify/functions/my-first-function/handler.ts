import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
// import { env } from '$amplify/env/my-first-function';

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(event);
    console.log(context);
    // console.log(`Hello, ${ env.NAME }!`);

    return {
        statusCode: 200,
        body: JSON.stringify('Hello from my first function!')
    };
};
