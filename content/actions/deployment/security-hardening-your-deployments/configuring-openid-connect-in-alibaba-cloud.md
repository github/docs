---
title: Configuring OpenID Connect in Alibaba Cloud
shortTitle: OpenID Connect in Alibaba Cloud
intro: Use OpenID Connect within your workflows to authenticate with Alibaba Cloud.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

OpenID Connect (OIDC) allows your {% data variables.product.prodname_actions %} workflows to access resources in Alibaba Cloud, without needing to store the Alibaba Cloud credentials as long-lived {% data variables.product.prodname_dotcom %} secrets.

This guide explains how to configure Alibaba Cloud to trust {% data variables.product.prodname_dotcom %}'s OIDC as a federated identity, and includes a routine that uses tokens to authenticate to Alibaba Cloud and access resources.

## Prerequisites

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

{% ifversion ghes %}
{% data reusables.actions.oidc-endpoints %}
{% endif %}

## Adding the OIDC provider to Alibaba Cloud

To add the {% data variables.product.prodname_dotcom %} OIDC provider to RAM, see the [Alibaba Cloud documentation](https://www.alibabacloud.com/help/en/ram/user-guide/manage-an-oidc-idp).

- For the provider URL: Use  {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}.
- For the client ID: Any value is allowed, we recommend using `sts.aliyuncs.com` or `sts.${REGION_ID}.aliyuncs.com`.

### Configuring the role and trust policy

To configure the role and trust in RAM, see step 2 and step 3 in the Alibaba Cloud documentation "[Implement OIDC-based SSO from Okta](https://www.alibabacloud.com/help/en/ram/user-guide/implement-oidc-based-sso-from-okta)".

{% note %}

We recommend users to configure`oidc:sub` condition key to restrict the subject of the ID Token, with this condition key in the role trust policy, you can limit which {% data variables.product.prodname_dotcom %} actions are trusted to assume the role. Although it's optional, reducing authorization granularity can make your access more secure and controllable.

{% endnote %}

If you configure the role with Alibaba Cloud RAM console, `oidc:sub` condition key is added in the form by default, you can configure its value directly. Or if you need more advanced access control capabilities, you can edit the trust policy yourself.

Here is a basic example of allowing access to only specified branch.

```json
"Condition": {
    "StringEquals": {
        "oidc:aud": [
            "sts.aliyuncs.com"
        ],
        "oidc:iss": "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}",
        "oidc:sub": "repo:example/example-repo:ref:refs/heads/main"
    }
}
```

If you use a workflow with an environment, the `oidc:sub` field must reference the environment name: `repo:example/example-repo:environment:NAME`. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token)."

For example, the following condition only allows access when the environment is set to `Production`.

```json
"Condition": {
    "StringEquals": {
        "oidc:aud": [
            "sts.aliyuncs.com"
        ],
        "oidc:iss": "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}",
        "oidc:sub": "repo:example/example-repo:environment:Production"
    }
}
```

You can also use `StringLike`  and wildcard operator(`*`) for more flexibility. Here is an example to allow any branch, pull request merge branch, or environment from the specific repository to assume a role.

```json
"Condition": {
    "StringLike": {
        "oidc:sub": "repo:example/example-repo:*"
    },
    "StringEquals": {
        "oidc:aud": [
            "sts.aliyuncs.com"
        ],
        "oidc:iss": "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}"
    }
}
```

## Updating your {% data variables.product.prodname_actions %} workflow

To update your workflows for OIDC, you will need to make two changes to your YAML:

1. Add permissions settings for the token.
2. Use the [`aliyun/configure-aliyun-credentials-action`](https://github.com/aliyun/configure-aliyun-credentials-action) action to exchange the OIDC token (JWT) for a cloud access token.

### Adding permissions settings

 {% data reusables.actions.oidc-permissions-token %}

### Requesting the access token

The `aliyun/configure-aliyun-credentials-action` action receives a JWT from the {% data variables.product.prodname_dotcom %} OIDC provider, and then requests an access token from Alibaba Cloud. For more information, see [GitHub - aliyun/configure-aliyun-credentials-action: Configure Alibaba Cloud Credentials for GitHub Actions](https://github.com/aliyun/configure-aliyun-credentials-action).

The following workflow is an example for accessing Alibaba Cloud services. You can replace the following parameters with your own values.

- `<oidc-provider-arn>`: Replace with your Alibaba Cloud provider arn.
- `<role-to-assume>`: Replace with your Alibaba Cloud role arn.

{% raw %}

```yaml copy
name: Alibaba Cloud example workflow
on: [push]

permissions:
  id-token: write   # Required for requesting the JWT
  contents: read    # Required for actions/checkout

env:
  REGION_ID : "cn-hangzhou"

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 'Configure credentials'
        uses: aliyun/configure-aliyun-credentials-action@v1
        with:
          role-to-assume: 'acs:ram::1464366*********:role/github-actions'
          oidc-provider-arn: 'acs:ram::1464366*********:oidc-provider/github'
      - name: 'Set up aliyun CLI'
        uses: aliyun/setup-aliyun-cli-action@v1
      - name: 'Run aliyun CLI'
        run: |
          aliyun sts GetCallerIdentity --region cn-hangzhou
```

{% endraw %}

## Further reading

{% data reusables.actions.oidc-further-reading %}
