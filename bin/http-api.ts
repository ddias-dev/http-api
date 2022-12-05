#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { HttpApiStack } from '../lib/http-api-stack';

// Initializes a CDK application.
const app = new App();

// Initializes HTTP API.
new HttpApiStack(app, 'HttpApiStack');
