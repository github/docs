---
title: Configuring OpenID Connect in Amazon Web Services
shortTitle: Configuring OpenID Connect in Amazon Web Services
intro: 'Use OpenID Connect within your workflows to authenticate with Amazon Web Services.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: 'issue-4856'
  ghec: '*'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to access resources in Amazon Web Services (AWS), without needing to store the AWS credentials as long-lived {% data variables.product.prodname_dotcom %} secrets. 

This guide explains how to configure AWS to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and includes a workflow example for the [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) that uses tokens to authenticate to AWS and access resources.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Adding the identity provider to AWS

To add the {% data variables.product.prodname_dotcom %} OIDC provider to IAM, see the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html).

- For the provider URL: Use `https://token.actions.githubusercontent.com`
- For the "Audience": Use `sts.amazonaws.com` if you are using the [official action](https://github.com/aws-actions/configure-aws-credentials).

### Configuring the role and trust policy

To configure the role and trust in IAM, see the AWS documentation for ["Assuming a Role"](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role) and ["Creating a role for web identity or OpenID connect federation"](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html).

By default, the validation only includes the audience (`aud`) condition, so you must manually add a subject (`sub`) condition. Edit the trust relationship to add the `sub` field to the validation conditions. For example:

```yaml{:copy}
"Condition": {
  "StringEquals": {
    "token.actions.githubusercontent.com:aud": "https://github.com/octo-org",
    "token.actions.githubusercontent.com:sub": "token.actions.githubusercontent.com:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
```

## Updating your {% data variables.product.prodname_actions %} workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
2. Use the [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) action to exchange the OIDC token (JWT) for a cloud access token.

### Adding permissions settings

The workflow will require a `permissions` setting with a defined [`id-token`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) value. If you only need to fetch an OIDC token for a single job, then this permission can be set within that job. For example:

```yaml{:copy}
permissions:
  id-token: write
```

You may need to specify additional permissions here, depending on your workflow's requirements. 

### Requesting the access token

The `aws-actions/configure-aws-credentials` action receives a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and then requests an access token from AWS. For more information, see the AWS [documentation](https://github.com/aws-actions/configure-aws-credentials).

- `<example-bucket-name>`: Add the name of your S3 bucket here.
- `<role-to-assume>`: Replace the example with your AWS role.
- `<example-aws-region>`: Add the name of your AWs region here.

```yaml{:copy}
# Sample workflow to access AWS resources when workflow is tied to branch
# The workflow Creates static website using aws s3
name: AWS example workflow
on:
  push
env:
  BUCKET_NAME : "<example-bucket-name>"
  AWS_REGION : "<example-aws-region>"
# permission can be added at job level or workflow level    
permissions:
      id-token: write
      contents: write    # This is required for actions/checkout@v1
jobs:
  S3PackageUpload:
    runs-on: ubuntu-latest
    steps:
      - name: Git clone the repository
        uses: actions/checkout@v1
      - name: configure aws credentials
        uses: aws-actions/configure-aws-credentials@master
        with:
          role-to-assume: arn:aws:iam::1234567890:role/example-role
          role-session-name: samplerolesession
          aws-region: ${{ env.AWS_REGION }}
      # Upload a file to AWS s3
      - name:  Copy index.html to s3
        run: |
          aws s3 cp ./index.html s3://${{ env.BUCKET_NAME }}/
```
