---
title: Configuring OpenID Connect in Amazon Web Services
shortTitle: OpenID Connect in AWS
intro: Use OpenID Connect within your workflows to authenticate with Amazon Web Services.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Security
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to access resources in Amazon Web Services (AWS), without needing to store the AWS credentials as long-lived {% data variables.product.prodname_dotcom %} secrets.

This guide explains how to configure AWS to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and includes a workflow example for the [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) that uses tokens to authenticate to AWS and access resources.

{% data reusables.actions.oidc-custom-claims-aws-restriction %}

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

{% data reusables.actions.oidc-on-ghecom %}

{% ifversion ghes %}
{% data reusables.actions.oidc-endpoints %}
  <!-- This note is indented to align with the above reusable. -->

  > [!NOTE]
  > You can restrict access to the OIDC endpoints by allowing only [AWS IP address ranges](https://docs.aws.amazon.com/vpc/latest/userguide/aws-ip-ranges.html).

  > [!NOTE]
  > {% data variables.product.prodname_dotcom %} does not natively support AWS session tags.

{% endif %}

## Adding the identity provider to AWS

To add the {% data variables.product.prodname_dotcom %} OIDC provider to IAM, see the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html).

* For the provider URL: Use {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}
* For the "Audience": Use `sts.amazonaws.com` if you are using the [official action](https://github.com/aws-actions/configure-aws-credentials).

### Configuring the role and trust policy

To configure the role and trust in IAM, see the AWS documentation [Configure AWS Credentials for GitHub Actions](https://github.com/aws-actions/configure-aws-credentials#configure-aws-credentials-for-github-actions) and [Configuring a role for GitHub OIDC identity provider](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html#idp_oidc_Create_GitHub).

> [!NOTE]
> AWS Identity and Access Management (IAM) recommends that users evaluate the IAM condition key, `token.actions.githubusercontent.com:sub`, in the trust policy of any role that trusts {% data variables.product.prodname_dotcom %}’s OIDC identity provider (IdP). Evaluating this condition key in the role trust policy limits which {% data variables.product.prodname_dotcom %} actions are able to assume the role.

Edit the trust policy, adding the `sub` field to the validation conditions. For example:

```json copy
"Condition": {
  "StringEquals": {
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:aud": "sts.amazonaws.com",
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
  }
}
```

If you use a workflow with an environment, the `sub` field must reference the environment name: `repo:ORG-NAME/REPO-NAME:environment:ENVIRONMENT-NAME`. For more information, see [AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token).

{% data reusables.actions.oidc-deployment-protection-rules %}

```json copy
"Condition": {
  "StringEquals": {
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:aud": "sts.amazonaws.com",
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:environment:prod"
  }
}
```

In the following example, `StringLike` is used with a wildcard operator (`*`) to allow any branch, pull request merge branch, or environment from the `octo-org/octo-repo` organization and repository to assume a role in AWS.

```json copy
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::123456123456:oidc-provider/token.actions.githubusercontent.com"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringLike": {
                    "token.actions.githubusercontent.com:sub": "repo:octo-org/octo-repo:*"
                },
                "StringEquals": {
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}
```

## Updating your {% data variables.product.prodname_actions %} workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:
1. Add permissions settings for the token.
1. Use the [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) action to exchange the OIDC token (JWT) for a cloud access token.

### Adding permissions settings

{% data reusables.actions.oidc-permissions-token %}

### Requesting the access token

The `aws-actions/configure-aws-credentials` action receives a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and then requests an access token from AWS. For more information, see the AWS [documentation](https://github.com/aws-actions/configure-aws-credentials).

* `BUCKET-NAME`: Replace this with the name of your S3 bucket.
* `AWS-REGION`: Replace this with the name of your AWS region.
* `ROLE-TO-ASSUME`: Replace this with your AWS role. For example, `arn:aws:iam::1234567890:role/example-role`

```yaml copy
# Sample workflow to access AWS resources when workflow is tied to branch
# The workflow Creates static website using aws s3
name: AWS example workflow
on:
  push
env:
  BUCKET_NAME : "BUCKET-NAME"
  AWS_REGION : "AWS-REGION"
# permission can be added at job level or workflow level
permissions:
  id-token: write   # This is required for requesting the JWT
  contents: read    # This is required for actions/checkout
jobs:
  S3PackageUpload:
    runs-on: ubuntu-latest
    steps:
      - name: Git clone the repository
        uses: {% data reusables.actions.action-checkout %}
      - name: configure aws credentials
        uses: aws-actions/configure-aws-credentials@e3dd6a429d7300a6a4c196c26e071d42e0343502
        with:
          role-to-assume: ROLE-TO-ASSUME
          role-session-name: samplerolesession
          aws-region: {% raw %}${{ env.AWS_REGION }}{% endraw %}
      # Upload a file to AWS s3
      - name: Copy index.html to s3
        run: |
          aws s3 cp ./index.html s3://{% raw %}${{ env.BUCKET_NAME }}{% endraw %}/
```

## Further reading

{% data reusables.actions.oidc-further-reading %}
