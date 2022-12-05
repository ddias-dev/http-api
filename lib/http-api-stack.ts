import {
  CorsHttpMethod,
  HttpApi,
  HttpMethod
} from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { join } from 'path';

export class HttpApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define HTTP API
    const httpApi = new HttpApi(this, 'http-api-demo', {
      description: 'HTTP API Platform Exercise',
      corsPreflight: {
        allowHeaders: ['Content-Type'],
        allowMethods: [CorsHttpMethod.GET],
        allowOrigins: ['*']
      }
    });

    // Create Node.js v16 Lambda Function to handler GET /time route.
    const getTimeFn = new NodejsFunction(this, 'get-time-fn', {
      functionName: 'getTimeFn',
      runtime: Runtime.NODEJS_16_X,
      handler: 'main',
      entry: join(__dirname, '/../handlers/get-time.ts'),
      bundling: {
        minify: true,
        externalModules: ['aws-sdk']
      }
    });

    // Add Route for GET /time
    httpApi.addRoutes({
      path: '/time',
      methods: [HttpMethod.GET],
      integration: new HttpLambdaIntegration('get-time-integration', getTimeFn)
    });

    // Output the API Url
    if (httpApi.url) new CfnOutput(this, 'apiUrl', { value: httpApi.url });
  }
}
