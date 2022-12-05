# HTTP API Platform Exercise

A HTTP GET API that returns the current timestamp in a ISO8601 string, and also
the region the server is running is as a JSON payload.

![HTTP API Diagram](/docs/http-api-diagram.jpg)

```bash
curl https://API_ID.execute-api.ap-southeast-2.amazonaws.com/time
```

## The Stack Choice

Developed using AWS CDK in TypeScript, a complete development kit tools for AWS
environment, to define the cloud infrastructure in code and provisioning it
through AWS CloudFormation.

### Consideration

The AWS CDK puts the infrastructure, application code, and configuration all in
one place and together with TypeScript can avoid incorrect assumptions about
runtime behavior, or other errors.

### Assumption

The AWS CloudFormation is one of the requirements, and because of it I decided
not to go with third-party tools (Pulumi or Terraform) to define the cloud
infrastructre as code. Otherwise, I would have choosen tools that use AWS API to
provising the code, as they can be faster with less requiremnts.

## Requirements

- [AWS CLI](https://aws.amazon.com/cli/) - To configure the AWS Credetials.
- [AWS CDK](https://aws.amazon.com/getting-started/guides/setup-cdk/) - To run
  the local commands and deploy the application.
- [Docker](https://docs.docker.com/get-docker/) - To run the local commands and
  deploy the application.
- [nmv](https://github.com/nvm-sh/nvm#installing-and-updating) - to set up
  Node.js v16

## Commands

- `aws configure` configure AWS CLI options
- `yarn install` install package.json dependencies
- `yarn build` compile typescript to js
- `yarn watch` watch for changes and compile
- `yarn test` perform the jest unit tests
- `yarn format` run a code formatter for entire application
- `yarn cdk bootstrap` provisions a CloudFormation stack called CDKToolkit
  (Required to deploy)
- `yarn cdk deploy` deploy this stack to your default AWS account/region
- `yarn cdk diff` compare deployed stack with current state
- `yarn cdk synth` emits the synthesized CloudFormation template

## Success and Reliability

This application is serverless microservice, it is a cloud-based service that
uses serverless functions to perform highly specific roles, executes small
segments of code in response to events, are modular and easily scalable, making
them well-suited for microservice-based architectures. Also, it can be easily
integrated with a range of managed services, which minimizes the overhead that
is often associated with other microservice implementations.
