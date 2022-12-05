import { App, assertions } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { HttpApiStack } from '../lib/http-api-stack';

let template: assertions.Template;

beforeAll(() => {
  const app = new App();
  const stack = new HttpApiStack(app, 'MyTestStack');
  template = Template.fromStack(stack);
});

test('HTTP API Created', () => {
  template.hasResourceProperties('AWS::ApiGatewayV2::Api', {
    CorsConfiguration: {
      AllowMethods: ['GET']
    }
  });
});

test('GET /time Route Created', () => {
  template.hasResourceProperties('AWS::ApiGatewayV2::Route', {
    RouteKey: 'GET /time'
  });
});

test('Get Time Lambda Function Created', () => {
  template.hasResourceProperties('AWS::Lambda::Function', {
    FunctionName: 'getTimeFn',
    Handler: 'index.main',
    Runtime: 'nodejs16.x'
  });
});
