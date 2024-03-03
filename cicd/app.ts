#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { MyPipelineStack } from './lib/pipeline-stack';

const app = new App();

new MyPipelineStack(app, 'MyPipelineStack', {
  env: {
    account: '445153447256',
    region: 'us-west-1'
  }
});
