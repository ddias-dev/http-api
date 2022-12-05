import { APIGatewayProxyResultV2 } from 'aws-lambda';

// Get Time -  Lambda Function Handler
export const main = async (): Promise<APIGatewayProxyResultV2> => ({
  body: JSON.stringify({
    timestamp: new Date().toISOString(),
    region: process.env.AWS_REGION
  }),
  statusCode: 200
});
