---
title: Deploying to AWS Elastic Beanstalk service
shortTitle: AWS Elastic Beanstalk service
intro: Learn how to deploy a project to AWS Elastic Beanstalk as part of a continuous deployment (CD) workflow.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - CD
  - AWS Elastic Beanstalk
---

## Prerequisites

Before creating your {% data variables.product.prodname_actions %} workflow, you will first need to complete the following setup steps for AWS Elastic Beanstalk:

1. **Configure AWS Authentication**. You can use either OpenID Connect (OIDC) or static credentials:

   **Option A: OpenID Connect (OIDC) - Recommended**
   
   Create an OIDC identity provider and IAM role in your AWS account. For detailed instructions, see the [AWS Elastic Beanstalk Deploy Action documentation](https://github.com/aws-actions/aws-elasticbeanstalk-deploy#step-1-configure-aws-authentication).

   **Option B: Static Credentials**
   
   Create an IAM user with programmatic access and note the access key ID and secret access key.

1. **Attach Required Permissions**. Your IAM role or user needs:
   - Elastic Beanstalk permissions (use the AWS managed policy `AdministratorAccess-AWSElasticBeanstalk` or create a custom policy)
   - S3 permissions for the deployment bucket. The action uses `elasticbeanstalk-{region}-{accountId}` by default, or you can specify a custom bucket name using the `s3-bucket-name` input

1. **Create IAM Roles for Elastic Beanstalk**:
   - **Instance Profile** (`aws-elasticbeanstalk-ec2-role`): Allows EC2 instances to upload logs and download application versions
   - **Service Role** (`aws-elasticbeanstalk-service-role`): Allows Elastic Beanstalk to manage AWS resources

   For detailed instructions on creating these roles, see [Managing Elastic Beanstalk Instance Profiles](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-instanceprofile.html) and [Managing Elastic Beanstalk Service Roles](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-servicerole.html).

1. **Create {% data variables.product.prodname_actions %} secrets**:
   - For OIDC: `AWS_ROLE_TO_ASSUME` (ARN of your IAM role)
   - For static credentials: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

   For more information on creating secrets for {% data variables.product.prodname_actions %}, see [AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).

## Creating the workflow

Once you've completed the prerequisites, you can proceed with creating the workflow.

The following example workflow demonstrates how to deploy an application to AWS Elastic Beanstalk. The action automatically creates the application and environment if they don't exist, uploads your deployment package to S3, and deploys it to Elastic Beanstalk.

Ensure that you provide your own values for all the variables in the `env` key of the workflow.

{% data reusables.actions.delete-env-key %}

```yaml copy
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Deploy to AWS Elastic Beanstalk

on:
  push:
    branches: [ main ]

env:
  AWS_REGION: MY_AWS_REGION                   # set this to your preferred AWS region, e.g. us-west-1
  APPLICATION_NAME: MY_APPLICATION_NAME       # set this to your Elastic Beanstalk application name
  ENVIRONMENT_NAME: MY_ENVIRONMENT_NAME       # set this to your Elastic Beanstalk environment name
  SOLUTION_STACK_NAME: MY_SOLUTION_STACK_NAME # set this to your platform version, e.g. "64bit Amazon Linux 2023 v4.9.2 running Python 3.14"

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    environment: production
    permissions:
      id-token: write
      contents: read

    steps:
    - name: Checkout
      uses: {% data reusables.actions.action-checkout %}

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: {% raw %}${{ secrets.AWS_ROLE_TO_ASSUME }}{% endraw %}
        aws-region: {% raw %}${{ env.AWS_REGION }}{% endraw %}

    - name: Deploy to Elastic Beanstalk
      uses: aws-actions/aws-elasticbeanstalk-deploy@v1.0.0
      with:
        aws-region: {% raw %}${{ env.AWS_REGION }}{% endraw %}
        application-name: {% raw %}${{ env.APPLICATION_NAME }}{% endraw %}
        environment-name: {% raw %}${{ env.ENVIRONMENT_NAME }}{% endraw %}
        solution-stack-name: {% raw %}${{ env.SOLUTION_STACK_NAME }}{% endraw %}
        option-settings: |
          [
            {
              "Namespace": "aws:autoscaling:launchconfiguration",
              "OptionName": "IamInstanceProfile",
              "Value": "aws-elasticbeanstalk-ec2-role"
            },
            {
              "Namespace": "aws:elasticbeanstalk:environment",
              "OptionName": "ServiceRole",
              "Value": "aws-elasticbeanstalk-service-role"
            }
          ]
```

## Further reading

For more information on the services used in these examples, see the following documentation:

* [Security best practices in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) in the Amazon AWS documentation.
* Official AWS [Configure AWS Credentials](https://github.com/aws-actions/configure-aws-credentials) action.
* Official AWS [Elastic Beanstalk Deploy](https://github.com/aws-actions/aws-elasticbeanstalk-deploy) action.
* [AWS Elastic Beanstalk Developer Guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/) in the Amazon AWS documentation.
* [Elastic Beanstalk supported platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html) in the Amazon AWS documentation.
