---
title: About security hardening with OpenID Connect
shortTitle: About security hardening with OpenID Connect
intro: OpenID Connect allows your workflows to exchange short-lived tokens directly from your cloud provider.
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
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
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_visibility": private,
  "repository_id": "74",
  "repository_owner_id": "65",
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
  "iss": "{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

To see all the claims supported by {% data variables.product.prodname_dotcom %}'s OIDC provider, review the `claims_supported` entries at 
{% ifversion ghes %}`https://HOSTNAME/_services/token/.well-known/openid-configuration`{% else %}https://token.actions.githubusercontent.com/.well-known/openid-configuration{% endif %}.

The token includes the standard audience, issuer, and subject claims:

|    Claim    | Description            |
| ----------- | ---------------------- |
| `aud`| _(Audience)_ By default, this is the URL of the repository owner, such as the organization that owns the repository. This is the only claim that can be customized. You can set a custom audience with a toolkit command: [`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0)          | 
| `iss`| _(Issuer)_ The issuer of the OIDC token: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}                   | 
| `sub`| _(Subject)_ Defines the subject claim that is to be validated by the cloud provider. This setting is essential for making sure that access tokens are only allocated in a predictable way.|

The OIDC token also includes additional standard claims:

|    Claim    | Description            |
| ----------- | ---------------------- |
| `alg`| _(Algorithm)_ The algorithm used by the OIDC provider.                    | 
| `exp`| _(Expires at)_ Identifies the expiry time of the JWT.                    | 
| `iat`| _(Issued at)_ The time when the JWT was issued.                   | 
| `jti`| _(JWT token identifier)_ Unique identifier for the OIDC token.                   | 
| `kid`| _(Key identifier)_ Unique key for the OIDC token.                   | 
| `nbf`| _(Not before)_ JWT is not valid for use before this time.                   | 
| `typ`| _(Type)_ Describes the type of token. This is a JSON Web Token (JWT).                   | 

The token also includes custom claims provided by {% data variables.product.prodname_dotcom %}:

|    Claim    | Description            |
| ----------- | ---------------------- |
| `actor`| The personal account that initiated the workflow run.                   | 
| `actor_id`| The ID of personal account that initiated the workflow run.             |
| `base_ref`| The target branch of the pull request in a workflow run.                   | 
| `environment`| The name of the environment used by the job.                    | 
| `event_name`| The name of the event that triggered the workflow run.                    | 
| `head_ref`| The source branch of the pull request in a workflow run.                   | 
| `job_workflow_ref`| This is the ref path to the reusable workflow used by this job. For more information, see "["Using OpenID Connect with reusable workflows"](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)."                  | 
| `ref`| _(Reference)_ The git ref that triggered the workflow run.                   | 
| `ref_type`| The type of `ref`, for example: "branch".                  | 
| `repository_visibility` | The visibility of the repository where the workflow is running. Accepts the following values: `internal`, `private`, or `public`.                   | 
| `repository`| The repository from where the workflow is running.                   | 
| `repository_id`| The ID of the repository from where the workflow is running.  |
| `repository_owner`| The name of the organization in which the `repository` is stored.                   | 
| `repository_owner_id`| The ID of the organization in which the `repository` is stored.            |
| `run_id`| The ID of the workflow run that triggered the workflow.                   | 
| `run_number`| The number of times this workflow has been run.                   | 
| `run_attempt`| The number of times this workflow run has been retried.                    | 
| `workflow`| The name of the workflow.                   | 

### Defining trust conditions on cloud roles using OIDC claims

With OIDC, a {% data variables.product.prodname_actions %} workflow requires a token in order to access resources in your cloud provider. The workflow requests an access token from your cloud provider, which checks the details presented by the JWT. If the trust configuration in the JWT is a match, your cloud provider responds by issuing a temporary token to the workflow, which can then be used to access resources in your cloud provider. You can configure your cloud provider to only respond to requests that originate from a specific organization's repository; you can also specify additional conditions, described below.

Audience and Subject claims are typically used in combination while setting conditions on the cloud role/resources to scope its access to the GitHub workflows.
- **Audience**: By default, this value uses the URL of the organization or repository owner. This can be used to set a condition that only the workflows in the specific organization can access the cloud role.
- **Subject**: By default, has a predefined format and is a concatenation of some of the key metadata about the workflow, such as the {% data variables.product.prodname_dotcom %} organization, repository, branch, or associated [`job`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment) environment. See "[Example subject claims](#example-subject-claims)" to see how the subject claim is assembled from concatenated metadata.

If you need more granular trust conditions, you can customize the issuer (`iss`) and subject (`sub`) claims that are included with the JWT. For more information, see "[Customizing the token claims](#customizing-the-token-claims)".

There are also many additional claims supported in the OIDC token that can be used for setting these conditions. In addition, your cloud provider could allow you to assign a role to the access tokens, letting you specify even more granular permissions.

{% note %}

**Note**: To control how your cloud provider issues access tokens, you **must** define at least one condition, so that untrusted repositories can’t request access tokens for your cloud resources.

{% endnote %}

### Example subject claims

The following examples demonstrate how to use "Subject" as a condition, and explain how the "Subject" is assembled from concatenated metadata. The [subject](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) uses information from the [`job` context](/actions/learn-github-actions/contexts#job-context), and instructs your cloud provider that access token requests may only be granted for requests from workflows running in specific branches, environments. The following sections describe some common subjects you can use.

#### Filtering for a specific environment

The subject claim includes the environment name when the job references an environment.

You can configure a subject that filters for a specific [environment](/actions/deployment/using-environments-for-deployment) name. In this example, the workflow run must have originated from a job that has an environment named `Production`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

|        |             |
| ------ | ----------- |
| Syntax: | `repo:<orgName/repoName>:environment:<environmentName>`      | 
| Example:| `repo:octo-org/octo-repo:environment:Production`       |

#### Filtering for `pull_request` events

The subject claim includes the `pull_request` string when the workflow is triggered by a pull request event, but only if the job doesn't reference an environment.

You can configure a subject that filters for the [`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request) event. In this example, the workflow run must have been triggered by a `pull_request` event in a repository named `octo-repo` that is owned by the `octo-org` organization:

|        |             |
| ------ | ----------- |
| Syntax: | `repo:<orgName/repoName>:pull_request`      | 
| Example:| `repo:octo-org/octo-repo:pull_request`      |

#### Filtering for a specific branch

The subject claim includes the branch name of the workflow, but only if the job doesn't reference an environment, and if the workflow is not triggered by a pull request event.

You can configure a subject that filters for a specific branch name. In this example, the workflow run must have originated from a branch named `demo-branch`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

|        |             |
| ------ | ----------- |
| Syntax: | `repo:<orgName/repoName>:ref:refs/heads/branchName`      | 
| Example:| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### Filtering for a specific tag

The subject claim includes the tag name of the workflow, but only if the job doesn't reference an environment, and if the workflow is not triggered by a pull request event.

You can create a subject that filters for specific tag. In this example, the workflow run must have originated with a tag named `demo-tag`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

|        |             |
| ------ | ----------- |
| Syntax: | `repo:<orgName/repoName>:ref:refs/tags/<tagName>`      | 
| Example:| `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`      |

### Configuring the subject in your cloud provider

To configure the subject in your cloud provider's trust relationship, you must add the subject string to its trust configuration. The following examples demonstrate how various cloud providers can accept the same `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` subject in different ways:

|        |             |
| ------ | ----------- |
| Amazon Web Services | `"{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`      | 
| Azure| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |
| Google Cloud Platform| `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`      |
| HashiCorp Vault| `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch" `      |

For more information, see the guides listed in "[Enabling OpenID Connect for your cloud provider](#enabling-openid-connect-for-your-cloud-provider)."

## Updating your actions for OIDC

To update your custom actions to authenticate using OIDC, you can use `getIDToken()` from the Actions toolkit to request a JWT from {% data variables.product.prodname_dotcom %}'s OIDC provider. For more information, see "OIDC Token" in the [npm package documentation](https://www.npmjs.com/package/@actions/core/v/1.6.0).

You could also use a `curl` command to request the JWT, using the following environment variables:

|        |             |
| ------ | ----------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL` | The URL for {% data variables.product.prodname_dotcom %}'s OIDC provider.      | 
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | Bearer token for the request to the OIDC provider.      |


For example:

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### Adding permissions settings

{% data reusables.actions.oidc-permissions-token %}

{% ifversion actions-oidc-hardening-config %}
## Customizing the token claims

You can security harden your OIDC configuration by customizing the claims that are included with the JWT. These customisations allow you to define more granular trust conditions on your cloud roles when allowing your workflows to access resources hosted in the cloud:

{% ifversion ghec %} - For an additional layer of security, you can append the `issuer` url with your enterprise slug. This lets you set conditions on the issuer (`iss`) claim, configuring it to only accept JWT tokens from a unique `issuer` URL that must include your enterprise slug.{% endif %}
- You can standardize your OIDC configuration by setting conditions on the subject (`sub`) claim that require JWT tokens to originate from a specific repository, reusable workflow, or other source.
- You can define granular OIDC policies by using additional OIDC token claims, such as `repository_id` and `repository_visibility`. For more information, see "[Understanding the OIDC token](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token)".

To customize these claim formats, organization and repository admins can use the REST API endpoints described in the following sections.

{% ifversion ghec %}

### Switching to a unique token URL

By default, the JWT is issued by {% data variables.product.prodname_dotcom %}'s OIDC provider at `https://token.actions.githubusercontent.com`. This path is presented to your cloud provider using the `iss` value in the JWT.

Enterprise admins can security harden their OIDC configuration by configuring their enterprise to receive tokens from a unique URL at `https://api.github.com/enterprises/<enterpriseSlug>/actions/oidc/customization/issuer`. Replace `<enterpriseSlug>` with the slug value of your enterprise. 

This configuration means that your enterprise will receive the OIDC token from a unique URL, and you can then configure your cloud provider to only accept tokens from that URL. This helps ensure that only the enterprise's repositories can access your cloud resources using OIDC.

To activate this setting for your enterprise, an enterprise admin must use the `/enterprises/{enterprise}/actions/oidc/customization/issuer` endpoint and specify `"include_enterprise_slug": true` in the request body. For more information, see "[Set the {% data variables.product.prodname_actions %} OIDC custom issuer policy for an enterprise](/rest/actions/oidc#set-the-github-actions-oidc-custom-issuer-policy-for-an-enterprise)."

After this setting is applied, the JWT will contain the updated `iss` value. In the following example, the `iss` key uses `octocat-inc` as its `enterpriseSlug` value:

```json
{
  "jti": "6f4762ed-0758-4ccb-808d-ee3af5d723a8"
  "sub": "repo:octocat-inc/private-server:ref:refs/heads/main"
  "aud": "http://octocat-inc.example/octocat-inc"
  "enterprise": "octocat-inc"
  "iss": "https://api.github.com/enterprises/octocat-inc/actions/oidc/customization/issuer",
  "bf": 1755350653,
  "exp": 1755351553,
  "iat": 1755351253
}
```

{% endif %}

### Customizing the subject claims for an organization

To configure organization-wide security, compliance, and standardization, you can customize the standard claims to suit your required access conditions. If your cloud provider supports conditions on subject claims, you can create a condition that checks whether the `sub` value matches the path of the reusable workflow, such as `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`. The exact format will vary depending on your cloud provider's OIDC configuration. To configure the matching condition on {% data variables.product.prodname_dotcom %}, you can can use the REST API to require that the `sub` claim must always include a specific custom claim, such as `job_workflow_ref`. For more information, see "[Set the customization template for an OIDC subject claim for an organization](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-an-organization)."

Customizing the claims results in a new format for the entire `sub` claim, which replaces the default predefined `sub` format in the token described in "[Example subject claims](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)."

The following example templates demonstrate various ways to customize the subject claim. To configure these settings on {% data variables.product.prodname_dotcom %}, organization admins use the REST API to specify a list of claims that must be included in the subject (`sub`) claim. {% data reusables.actions.use-request-body-api %}

To customize your subject claims, you should first create a matching condition in your cloud provider's OIDC configuration, before customizing the configuration using the REST API. Once the configuration is completed, each time a new job runs, the OIDC token generated during that job will follow the new customization template. If the matching condition doesn't exist in the cloud provider's OIDC configuration before the job runs, the generated token might not be accepted by the cloud provider, since the cloud conditions may not be synchronized.

{% note %}

**Note**: When the organization template is applied, it will not affect any existing repositories that already use OIDC. For existing repositories, as well as any new repositories that are created after the template has been applied, the repository owner will need to opt-in to receive this configuration. For more information, see "[Set the opt-in flag of an OIDC subject claim customization for a repository](/rest/actions/oidc#set-the-opt-in-flag-of-an-oidc-subject-claim-customization-for-a-repository)."

{% endnote %}

#### Example: Allowing repository based on visibility and owner

This example template allows the `sub` claim to have a new format, using `repository_owner` and `repository_visibility`:

```json
{
   "include_claim_keys": [
       "repository_owner",
       "repository_visibility"
   ]
}
```

In your cloud provider's OIDC configuration, configure the `sub` condition to require that claims must include specific values for `repository_owner` and `repository_visibility`. For example: `"repository_owner: "monalisa":repository_visibility:private"`. The approach lets you restrict cloud role access to only private repositories within an organization or enterprise.

#### Example: Allowing access to all repositories with a specific owner

This example template enables the `sub` claim to have a new format with only the value of `repository_owner`. {% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repository_owner"
   ]
}

```

In your cloud provider's OIDC configuration, configure the `sub` condition to require that claims must include a specific value for `repository_owner`. For example: `"repository_owner: "monalisa""`

#### Example: Requiring a reusable workflow

This example template allows the `sub` claim to have a new format that contains the value of the `job_workflow_ref` claim. This enables an enterprise to use [reusable workflows](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims) to enforce consistent deployments across its organizations and repositories.

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "job_workflow_ref"
     ]
  }
```

In your cloud provider's OIDC configuration, configure the `sub` condition to require that claims must include a specific value for `job_workflow_ref`. For example: `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`.

#### Example: Requiring a reusable workflow and other claims

The following example template combines the requirement of a specific reusable workflow with additional claims. {% data reusables.actions.use-request-body-api %}

This example also demonstrates how to use `"context"` to define your conditions. This is the part that follows the repository in the [default `sub` format](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims). For example, when the job references an environment, the context contains: `environment:<environmentName>`.

```json
{
   "include_claim_keys": [
       "repo",
       "context",
       "job_workflow_ref"
   ]
}
```

In your cloud provider's OIDC configuration, configure the `sub` condition to require that claims must include specific values for `repo`, `context`, and `job_workflow_ref`.

This customization template requires that the `sub` uses the following format: `repo:<orgName/repoName>:environment:<environmentName>:job_workflow_ref:<reusableWorkflowPath>`. 
For example: `"sub": "repo:octo-org/octo-repo:environment:prod:job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`

#### Example: Granting access to a specific repository

This example template lets you grant cloud access to all the workflows in a specific repository, across all branches/tags and environments. To help improve security, combine this template with the custom issuer URL described in "[Customizing the token URL for an enterprise](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-url-for-an-enterprise)." 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo"
   ]
}
```

In your cloud provider's OIDC configuration, configure the `sub` condition to require a `repo` claim that matches the required value.

#### Example: Using system-generated GUIDs

This example template enables predictable OIDC claims with system-generated GUIDs that do not change between renames of entities (such as renaming a repository). {% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "repository_id"
     ]
  }
```

In your cloud provider's OIDC configuration, configure the `sub` condition to require a `repository_id` claim that matches the required value.

or:

```json
{
   "include_claim_keys": [
       "repository_owner_id"
   ]
}
```

In your cloud provider's OIDC configuration, configure the `sub` condition to require a `repository_owner_id` claim that matches the required value.

#### Resetting your customizations

This example template resets the subject claims to the default format. {% data reusables.actions.use-request-body-api %} This template effectively opts out of any organization-level customization policy.

```json
{
   "include_claim_keys": [
       "repo",
       "context"
   ]
}
```

In your cloud provider's OIDC configuration, configure the `sub` condition to require that claims must include specific values for `repo` and `context`.

#### Using the default subject claims

For repositories that can receive a subject claim policy from their organization, the repository owner can later choose to opt-out and instead use the default `sub` claim format. To configure this, the repository admin must use the REST API endpoint at "[Set the opt-out flag of an OIDC subject claim customization for a repository](/rest/actions/oidc#set-the-opt-out-flag-of-an-oidc-subject-claim-customization-for-a-repository)" with the following request body:

```json
{
   "use_default": true
}
```

{% endif %}

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
