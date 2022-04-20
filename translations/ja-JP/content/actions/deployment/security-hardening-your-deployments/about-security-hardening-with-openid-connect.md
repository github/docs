---
title: About security hardening with OpenID Connect
shortTitle: About security hardening with OpenID Connect
intro: OpenID Connect allows your workflows to exchange short-lived tokens directly from your cloud provider.
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview of OpenID Connect

{% data variables.product.prodname_actions %} workflows are often designed to access a cloud provider (such as AWS, Azure, GCP, or HashiCorp Vault) in order to deploy software or use the cloud's services. Before the workflow can access these resources, it will supply credentials, such as a password or token, to the cloud provider. These credentials are usually stored as a secret in {% data variables.product.prodname_dotcom %}, and the workflow presents this secret to the cloud provider every time it runs.

However, using hardcoded secrets requires you to create credentials in the cloud provider and then duplicate them in {% data variables.product.prodname_dotcom %} as a secret.

With OpenID Connect (OIDC), you can take a different approach by configuring your workflow to request a short-lived access token directly from the cloud provider. Your cloud provider also needs to support OIDC on their end, and you must configure a trust relationship that controls which workflows are able to request the access tokens. Providers that currently support OIDC include Amazon Web Services, Azure, Google Cloud Platform, and HashiCorp Vault, among others.

### Benefits of using OIDC

By updating your workflows to use OIDC tokens, you can adopt the following good security practices:

- **No cloud secrets**: You won't need to duplicate your cloud credentials as long-lived {% data variables.product.prodname_dotcom %} secrets. Instead, you can configure the OIDC trust on your cloud provider, and then update your workflows to request a short-lived access token from the cloud provider through OIDC.
- **Authentication and authorization management**: You have more granular control over how workflows can use credentials, using your cloud provider's authentication (authN) and authorization (authZ) tools to control access to cloud resources.
- **Rotating credentials**: With OIDC, your cloud provider issues a short-lived access token that is only valid for a single job, and then automatically expires.

### Getting started with OIDC

The following diagram gives an overview of how {% data variables.product.prodname_dotcom %}'s OIDC provider integrates with your workflows and cloud provider:

![OIDC diagram](/assets/images/help/images/oidc-architecture.png)

1. In your cloud provider, create an OIDC trust between your cloud role and your {% data variables.product.prodname_dotcom %} workflow(s) that need access to the cloud.
2. Every time your job runs, {% data variables.product.prodname_dotcom %}'s OIDC Provider auto-generates an OIDC token. This token contains multiple claims to establish a security-hardened and verifiable identity about the specific workflow that is trying to authenticate.
3. You could include a step or action in your job to request this token from {% data variables.product.prodname_dotcom %}'s OIDC provider, and present it to the cloud provider.
4. Once the cloud provider successfully validates the claims presented in the token, it then provides a short-lived cloud access token that is available only for the duration of the job.

## Configuring the OIDC trust with the cloud

When you configure your cloud to trust {% data variables.product.prodname_dotcom %}'s OIDC provider, you **must** add conditions that filter incoming requests, so that untrusted repositories or workflows can’t request access tokens for your cloud resources:

- Before granting an access token, your cloud provider checks that the [`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) and other claims used to set conditions in its trust settings match those in the request's JSON Web Token (JWT). As a result, you must take care to correctly define the _subject_ and other conditions in your cloud provider.
- The OIDC trust configuration steps and the syntax to set conditions for cloud roles (using _Subject_ and other claims) will vary depending on which cloud provider you're using. For some examples, see "[Example subject claims](#example-subject-claims)."

### Understanding the OIDC token

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
  "aud": "https://github.com/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "https://token.actions.githubusercontent.com",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

To see all the claims supported by {% data variables.product.prodname_dotcom %}'s OIDC provider, review the `claims_supported` entries at https://token.actions.githubusercontent.com/.well-known/openid-configuration.

The token includes the standard audience, issuer, and subject claims:

| Claim | 説明                                                                                                                                                                                                                                                                                                           |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `aud` | _(Audience)_ By default, this is the URL of the repository owner, such as the organization that owns the repository. This is the only claim that can be customized. You can set a custom audience with a toolkit command: [`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0) |
| `iss` | _(Issuer)_ The issuer of the OIDC token: `https://token.actions.githubusercontent.com`                                                                                                                                                                                                                       |
| `sub` | _(Subject)_ Defines the subject claim that is to be validated by the cloud provider. This setting is essential for making sure that access tokens are only allocated in a predictable way.                                                                                                                   |

The OIDC token also includes additional standard claims:

| Claim | 説明                                                                    |
| ----- | --------------------------------------------------------------------- |
| `alg` | _(Algorithm)_ The algorithm used by the OIDC provider.                |
| `exp` | _(Expires at)_ Identifies the expiry time of the JWT.                 |
| `iat` | _(Issued at)_ The time when the JWT was issued.                       |
| `jti` | _(JWT token identifier)_ Unique identifier for the OIDC token.        |
| `kid` | _(Key identifier)_ Unique key for the OIDC token.                     |
| `nbf` | _(Not before)_ JWT is not valid for use before this time.             |
| `typ` | _(Type)_ Describes the type of token. This is a JSON Web Token (JWT). |

The token also includes custom claims provided by {% data variables.product.prodname_dotcom %}:

| Claim              | 説明                                                                                                                                                                                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actor`            | The personal account that initiated the workflow run.                                                                                                                                                                                               |
| `base_ref`         | The target branch of the pull request in a workflow run.                                                                                                                                                                                            |
| `environment`      | The name of the environment used by the job.                                                                                                                                                                                                        |
| `event_name`       | ワークフローの実行をトリガーしたイベントの名前。                                                                                                                                                                                                                            |
| `head_ref`         | The source branch of the pull request in a workflow run.                                                                                                                                                                                            |
| `job_workflow_ref` | This is the ref path to the reusable workflow used by this job. For more information, see "["Using OpenID Connect with reusable workflows"](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)." |
| `ref`              | _(Reference)_ The git ref that triggered the workflow run.                                                                                                                                                                                          |
| `ref_type`         | The type of `ref`, for example: "branch".                                                                                                                                                                                                           |
| `リポジトリ`            | The repository from where the workflow is running.                                                                                                                                                                                                  |
| `repository_owner` | The name of the organization in which the `repository` is stored.                                                                                                                                                                                   |
| `run_id`           | The ID of the workflow run that triggered the workflow.                                                                                                                                                                                             |
| `run_number`       | The number of times this workflow has been run.                                                                                                                                                                                                     |
| `run_attempt`      | The number of times this workflow run has been retried.                                                                                                                                                                                             |
| `ワークフロー`           | ワークフローの名前。                                                                                                                                                                                                                                          |

### Defining trust conditions on cloud roles using OIDC claims

With OIDC, a {% data variables.product.prodname_actions %} workflow requires a token in order to access resources in your cloud provider. The workflow requests an access token from your cloud provider, which checks the details presented by the JWT. If the trust configuration in the JWT is a match, your cloud provider responds by issuing a temporary token to the workflow, which can then be used to access resources in your cloud provider. You can configure your cloud provider to only respond to requests that originate from a specific organization's repository; you can also specify additional conditions, described below.

Audience and Subject claims are typically used in combination while setting conditions on the cloud role/resources to scope its access to the GitHub workflows.
- **Audience**: By default, this value uses the URL of the organization or repository owner. This can be used to set a condition that only the workflows in the specific organization can access the cloud role.
- **Subject**: Has a predefined format and is a concatenation of some of the key metadata about the workflow, such as the {% data variables.product.prodname_dotcom %} organization, repository, branch, or associated [`job`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment) environment. See "[Example subject claims](#example-subject-claims)" to see how the subject claim is assembled from concatenated metadata.

There are also many additional claims supported in the OIDC token that can also be used for setting these conditions.

In addition, your cloud provider could allow you to assign a role to the access tokens, letting you specify even more granular permissions.

{% note %}

**Note**: To control how your cloud provider issues access tokens, you **must** define at least one condition, so that untrusted repositories can’t request access tokens for your cloud resources.

{% endnote %}

### Example subject claims

The following examples demonstrate how to use "Subject" as a condition, and explain how the "Subject" is assembled from concatenated metadata. The [subject](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) uses information from the [`job` context](/actions/learn-github-actions/contexts#job-context), and instructs your cloud provider that access token requests may only be granted for requests from workflows running in specific branches, environments. The following sections describe some common subjects you can use.

#### Filtering for a specific environment

The subject claim includes the environment name when the job references an environment.

You can configure a subject that filters for a specific [environment](/actions/deployment/using-environments-for-deployment) name. In this example, the workflow run must have originated from a job that has an environment named `Production`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

|       |                                                                     |
| ----- | ------------------------------------------------------------------- |
| 構文:   | `repo:<orgName/repoName>:environment:<environmentName>` |
| サンプル: | `repo:octo-org/octo-repo:environment:Production`                    |

#### Filtering for `pull_request` events

The subject claim includes the `pull_request` string when the workflow is triggered by a pull request event, but only if the job doesn't reference an environment.

You can configure a subject that filters for the [`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request) event. In this example, the workflow run must have been triggered by a `pull_request` event in a repository named `octo-repo` that is owned by the `octo-org` organization:

|       |                                              |
| ----- | -------------------------------------------- |
| 構文:   | `repo:<orgName/repoName>:pull_request` |
| サンプル: | `repo:octo-org/octo-repo:pull_request`       |

#### Filtering for a specific branch

The subject claim includes the branch name of the workflow, but only if the job doesn't reference an environment, and if the workflow is not triggered by a pull request event.

You can configure a subject that filters for a specific branch name. In this example, the workflow run must have originated from a branch named `demo-branch`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

|       |                                                           |
| ----- | --------------------------------------------------------- |
| 構文:   | `repo:<orgName/repoName>:ref:refs/heads/branchName` |
| サンプル: | `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### Filtering for a specific tag

The subject claim includes the tag name of the workflow, but only if the job doesn't reference an environment, and if the workflow is not triggered by a pull request event.

You can create a subject that filters for specific tag. In this example, the workflow run must have originated with a tag named `demo-tag`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

|       |                                                               |
| ----- | ------------------------------------------------------------- |
| 構文:   | `repo:<orgName/repoName>:ref:refs/tags/<tagName>` |
| サンプル: | `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`              |

### Configuring the subject in your cloud provider

To configure the subject in your cloud provider's trust relationship, you must add the subject string to its trust configuration. The following examples demonstrate how various cloud providers can accept the same `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` subject in different ways:

|                       |                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| Amazon Web Services   | `"token.actions.githubusercontent.com:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"` |
| Azure                 | `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`                                              |
| Google Cloud Plafform | `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`                           |
| HashiCorp Vault       | `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`                              |

For more information, see the guides listed in "[Enabling OpenID Connect for your cloud provider](#enabling-openid-connect-for-your-cloud-provider)."

## Updating your actions for OIDC

To update your custom actions to authenticate using OIDC, you can use `getIDToken()` from the Actions toolkit to request a JWT from {% data variables.product.prodname_dotcom %}'s OIDC provider. For more information, see "OIDC Token" in the [npm package documentation](https://www.npmjs.com/package/@actions/core/v/1.6.0).

You could also use a `curl` command to request the JWT, using the following environment variables:

|                                  |                                                                           |
| -------------------------------- | ------------------------------------------------------------------------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL`   | The URL for {% data variables.product.prodname_dotcom %}'s OIDC provider. |
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | Bearer token for the request to the OIDC provider.                        |


例:

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### Adding permissions settings

{% data reusables.actions.oidc-permissions-token %}

## Updating your workflows for OIDC

You can now update your YAML workflows to use OIDC access tokens instead of secrets. Popular cloud providers have published their official login actions that make it easy for you to get started with OIDC. For more information about updating your workflows, see the cloud-specific guides listed below in "[Enabling OpenID Connect for your cloud provider](#enabling-openid-connect-for-your-cloud-provider)."


## Enabling OpenID Connect for your cloud provider

To enable and configure OIDC for your specific cloud provider, see the following guides:

- ["Configuring OpenID Connect in Amazon Web Services"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- ["Configuring OpenID Connect in Azure"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- ["Configuring OpenID Connect in Google Cloud Platform"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- ["Configuring OpenID Connect in Hashicorp Vault"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)

To enable and configure OIDC for another cloud provider, see the following guide:

- ["Configuring OpenID Connect in cloud providers"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)
