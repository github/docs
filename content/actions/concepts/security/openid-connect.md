---
title: OpenID Connect
intro: OpenID Connect allows your workflows to exchange short-lived tokens directly from your cloud provider.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Security
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect
  - /actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect
  - /actions/concepts/security/about-security-hardening-with-openid-connect
---

## Overview of OpenID Connect (OIDC)

{% data variables.product.prodname_actions %} workflows are often designed to access a cloud provider (such as AWS, Azure, GCP, HashiCorp Vault, and others) in order to deploy software or use the cloud's services. Before the workflow can access these resources, it will supply credentials, such as a password or token, to the cloud provider. These credentials are usually stored as a secret in {% data variables.product.prodname_dotcom %}, and the workflow presents this secret to the cloud provider every time it runs.

However, using hardcoded secrets requires you to create credentials in the cloud provider and then duplicate them in {% data variables.product.prodname_dotcom %} as a secret.

After you have established a trust connection with a cloud provider that supports OIDC, you can configure your workflow to request a short-lived access token directly from the cloud provider.

## Benefits of using OIDC

By updating your workflows to use OIDC tokens, you can adopt the following good security practices:

* **No cloud secrets:** You won't need to duplicate your cloud credentials as long-lived {% data variables.product.github %} secrets. Instead, you can configure the OIDC trust on your cloud provider, and then update your workflows to request a short-lived access token from the cloud provider through OIDC.
* **Authentication and authorization management:** You have more granular control over how workflows can use credentials, using your cloud provider's authentication (authN) and authorization (authZ) tools to control access to cloud resources.
* **Rotating credentials:** With OIDC, your cloud provider issues a short-lived access token that is only valid for a single job, and then automatically expires.

## How OIDC integrates with {% data variables.product.prodname_actions %}

The following diagram gives an overview of how {% data variables.product.github %}'s OIDC provider integrates with your workflows and cloud provider:

![Diagram of how a cloud provider integrates with {% data variables.product.prodname_actions %} through access tokens and JSON web token cloud role IDs.](/assets/images/help/actions/oidc-architecture.png)

1. You establish an OIDC trust relationship in the cloud provider, allowing specific {% data variables.product.github %} workflows to request cloud access tokens on behalf of a defined cloud role.
1. Every time your job runs, {% data variables.product.prodname_dotcom %}'s OIDC provider auto-generates an OIDC token. This token contains multiple claims to establish a security-hardened and verifiable identity about the specific workflow that is trying to authenticate.
1. A step or action in the workflow job can request a token from {% data variables.product.github %}’s OIDC provider, which can then be presented to the cloud provider as proof of the workflow’s identity.
1. Once the cloud provider successfully validates the claims presented in the token, it then provides a short-lived cloud access token that is available only for the duration of the job.

## Understanding the OIDC token

Each job requests an OIDC token from {% data variables.product.prodname_dotcom %}'s OIDC provider, which responds with an automatically generated JSON web token (JWT) that is unique for each workflow job where it is generated. When the job runs, the OIDC token is presented to the cloud provider. To validate the token, the cloud provider checks if the OIDC token's subject and other claims are a match for the conditions that were preconfigured on the cloud role's OIDC trust definition.

The following example OIDC token uses a subject (`sub`) that references a job environment named `prod` in the `octo-org/octo-repo` repository.

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_visibility": "private",
  "repository_id": "74",
  "repository_owner_id": "65",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "runner_environment": "github-hosted",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",{% ifversion actions-OIDC-custom-claim-enterprise %}
  "enterprise": "avocado-corp",{% endif %}{% ifversion actions-OIDC-enterprise_id-claim %}
  "enterprise_id": "2",{% endif %}
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

{% ifversion ghec %}

## Establishing OIDC trust with your cloud provider

To use OIDC in your workflows, you must establish a trust relationship between {% data variables.product.github %} and your cloud provider. This trust relationship ensures that only authorized workflows can request access tokens for your cloud resources.

Before granting an access token, your cloud provider checks that the [`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) and any other claims used to set conditions in its trust settings match those in the request's JSON Web Token (JWT). If the trust configuration matches, your cloud provider issues a temporary access token to the workflow.

For steps and syntax for configuring OIDC trust and setting conditions for cloud providers, see [AUTOTITLE](/actions/reference/openid-connect-reference#oidc-claims-used-to-define-trust-conditions-on-cloud-roles).

## Configuring OIDC on {% data variables.enterprise.data_residency_site %}

If you are part of an enterprise that uses {% data variables.enterprise.data_residency %} and you're setting up OIDC on {% data variables.enterprise.data_residency_site %}, you must **substitute certain values** while configuring OIDC.

For more information, see [AUTOTITLE](/enterprise-cloud@latest/actions/reference/openid-connect-reference#substituted-values-on-ghecom).

{% endif %}

## Authenticating custom actions using OIDC

Custom actions use the `getIDToken()` method from the Actions toolkit or a `curl` command to authenticate using OIDC.

For more information, see [AUTOTITLE](/actions/reference/openid-connect-reference#methods-for-requesting-the-oidc-token).

## Updating your workflows for OIDC

{% data variables.product.prodname_actions %} workflows can use OIDC tokens instead of secrets to authenticate with cloud providers. Many popular cloud providers offer official login actions that simplify the process of using OIDC in your workflows. For more information about updating your workflows with specific cloud providers, see [AUTOTITLE](/actions/how-tos/security-for-github-actions/security-hardening-your-deployments).

## Next steps

For more information about configuring OIDC, see [AUTOTITLE](/actions/how-tos/security-for-github-actions/security-hardening-your-deployments).

For reference information about OIDC, see [AUTOTITLE](/actions/reference/openid-connect-reference).
