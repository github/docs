---
title: OpenID Connect reference
shortTitle: OIDC
intro: 'Find information about using OpenID Connect (OIDC) to authenticate {% data variables.product.prodname_actions %} workflows with cloud providers.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Security
redirect_from:
  - /actions/reference/openid-connect-reference
---

## OIDC token claims

To see all the claims supported by {% data variables.product.prodname_dotcom %}'s OIDC provider, review the `claims_supported` entries at
{% ifversion ghes %}`https://HOSTNAME/_services/token/.well-known/openid-configuration`{% else %}https://token.actions.githubusercontent.com/.well-known/openid-configuration{% endif %}.

The OIDC token includes the following claims.

### Standard audience, issuer, and subject claims

|    Claim    | Claim type | Description            |
| ----------- | -----| ---------------------- |
| `aud`| Audience | By default, this is the URL of the repository owner, such as the organization that owns the repository. You can set a custom audience with a toolkit command: [`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0) |
| `iss`| Issuer | The issuer of the OIDC token: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %} |
| `sub`| Subject | Defines the subject claim that is to be validated by the cloud provider. This setting is essential for making sure that access tokens are only allocated in a predictable way. |

### Additional standard JOSE header parameters and claims

|    Header Parameter    | Parameter type | Description            |
| ----------- | -----| ---------------------- |
| `alg`| Algorithm | The algorithm used by the OIDC provider. |
| `kid`| Key identifier | Unique key for the OIDC token. |
| `typ`| Type | Describes the type of token. This is a JSON Web Token (JWT). |

|    Claim    | Claim type | Description            |
| ----------- | -----| ---------------------- |
| `exp`| Expires at | Identifies the expiry time of the JWT. |
| `iat`| Issued at | The time when the JWT was issued. |
| `jti`| JWT token identifier | Unique identifier for the OIDC token. |
| `nbf`| Not before | JWT is not valid for use before this time. |

### Custom claims provided by {% data variables.product.prodname_dotcom %}

|    Claim    | Description            |
| ----------- | ---------------------- |
| `actor`| The personal account that initiated the workflow run.                   |
| `actor_id`| The ID of personal account that initiated the workflow run.             |
| `base_ref`| The target branch of the pull request in a workflow run.                   |
| {% ifversion actions-OIDC-custom-claim-enterprise %} |
| `enterprise`| The name of the enterprise that contains the repository from where the workflow is running.                  |
| {% endif %} |
| {% ifversion actions-OIDC-enterprise_id-claim %} |
| `enterprise_id`| The ID of the enterprise that contains the repository from where the workflow is running.                  |
| {% endif %} |
| `environment`| The name of the environment used by the job. If the `environment` claim is included (also via `include_claim_keys`), an environment is required and must be provided.                   |
| `event_name`| The name of the event that triggered the workflow run.                    |
| `head_ref`| The source branch of the pull request in a workflow run.                   |
| `job_workflow_ref`| For jobs using a reusable workflow, the ref path to the reusable workflow. For more information, see [AUTOTITLE](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows).                  |
| `job_workflow_sha`| For jobs using a reusable workflow, the commit SHA for the reusable workflow file.                   |
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
| `runner_environment`| The type of runner used by the job. Accepts the following values: `github-hosted` or `self-hosted`.                  |
| `workflow`| The name of the workflow.                   |
| `workflow_ref`| {% data reusables.actions.workflow-ref-description %}                   |
| `workflow_sha`| {% data reusables.actions.workflow-sha-description %}                   |

{% ifversion ghec %}

## Substituted values on {% data variables.enterprise.data_residency_site %}

* Your provider's expected claim must substitute `githubusercontent.com` with `{% data variables.enterprise.data_residency_domain %}`, where SUBDOMAIN is your enterprise's subdomain on {% data variables.enterprise.data_residency_site %}.
* For any URLs that include a route with your enterprise's name or slug, you must substitute your enterprise's subdomain on {% data variables.enterprise.data_residency_site %}.

For example, if your subdomain is `octocorp`, the following substitutions apply:

* The URL for seeing all the claims supported by {% data variables.product.company_short %}'s OIDC provider would be `https://token.actions.octocorp.ghe.com/.well-known/openid-configuration`.
* The value of `iss` in your OIDC token would be `https://token.actions.octocorp.ghe.com`.
* The enterprise can receive tokens at `https://token.actions.octocorp.ghe.com/octocorp`, and the REST API endpoint for customizing the `issuer` value would be `/enterprises/octocorp/actions/oidc/customization/issuer`.

{% endif %}

## OIDC claims used to define trust conditions on cloud roles

Audience and subject claims are typically used in combination while setting conditions on the cloud role/resources to scope its access to the {% data variables.product.github %} workflows.
* **Audience:** By default, this value uses the URL of the organization or repository owner. This can be used to set a condition that only the workflows in the specific organization can access the cloud role.
* **Subject:** By default, has a predefined format and is a concatenation of some of the key metadata about the workflow, such as the {% data variables.product.prodname_dotcom %} organization, repository, branch, or associated [`job`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenvironment) environment. See [Example subject claims](#example-subject-claims) to see how the subject claim is assembled from concatenated metadata.

If you need more granular trust conditions, you can customize the {% ifversion ghec %}issuer (`iss`) and {% endif %}subject (`sub`) claim{% ifversion ghec %}s that are{% else %} that's{% endif %} included with the JWT. For more information, see [Customizing the token claims](#customizing-the-token-claims).

There are also many additional claims supported in the OIDC token that can be used for setting these conditions. In addition, your cloud provider could allow you to assign a role to the access tokens, letting you specify even more granular permissions.

> [!NOTE]
> To control how your cloud provider issues access tokens, you **must** define at least one condition, so that untrusted repositories can’t request access tokens for your cloud resources.

## Example subject claims

The following examples demonstrate how to use "Subject" as a condition, and explain how the "Subject" is assembled from concatenated metadata. The [subject](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) uses information from the [`job` context](/actions/learn-github-actions/contexts#job-context), and instructs your cloud provider that access token requests may only be granted for requests from workflows running in specific branches, environments. The following sections describe some common subjects you can use.

### Filtering for a specific environment

The subject claim includes the environment name when the job references an environment.

You can configure a subject that filters for a specific [environment](/actions/deployment/targeting-different-environments/managing-environments-for-deployment) name. In this example, the workflow run must have originated from a job that has an environment named `Production`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

* Syntax: `repo:ORG-NAME/REPO-NAME:environment:ENVIRONMENT-NAME`
* Example: `repo:octo-org/octo-repo:environment:Production`

### Filtering for `pull_request` events

The subject claim includes the `pull_request` string when the workflow is triggered by a pull request event, but only if the job doesn't reference an environment.

You can configure a subject that filters for the [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request) event. In this example, the workflow run must have been triggered by a `pull_request` event in a repository named `octo-repo` that is owned by the `octo-org` organization:

* Syntax: `repo:ORG-NAME/REPO-NAME:pull_request`
* Example: `repo:octo-org/octo-repo:pull_request`

### Filtering for a specific branch

The subject claim includes the branch name of the workflow, but only if the job doesn't reference an environment, and if the workflow is not triggered by a pull request event.

You can configure a subject that filters for a specific branch name. In this example, the workflow run must have originated from a branch named `demo-branch`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

* Syntax:  `repo:ORG-NAME/REPO-NAME:ref:refs/heads/BRANCH-NAME`
* Example: `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`

### Filtering for a specific tag

The subject claim includes the tag name of the workflow, but only if the job doesn't reference an environment, and if the workflow is not triggered by a pull request event.

You can create a subject that filters for specific tag. In this example, the workflow run must have originated with a tag named `demo-tag`, in a repository named `octo-repo` that is owned by the `octo-org` organization:

* Syntax: `repo:ORG-NAME/REPO-NAME:ref:refs/tags/TAG-NAME`
* Example: `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`

## Configuring the subject in your cloud provider

To configure the subject in your cloud provider's trust relationship, you must add the subject string to its trust configuration. The following examples demonstrate how various cloud providers can accept the same `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` subject in different ways:

| Cloud provider | Example |
| ------ | ----------- |
| Amazon Web Services | `"{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"` |
| Azure| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` |
| Google Cloud Platform| `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')` |
| HashiCorp Vault| `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch"` |

For more information about configuring specific cloud providers, see the guides listed in [AUTOTITLE](/actions/how-tos/security-for-github-actions/security-hardening-your-deployments).

## Customizing the token claims

You can security harden your OIDC configuration by customizing the claims that are included with the JWT. These customizations allow you to define more granular trust conditions on your cloud roles when allowing your workflows to access resources hosted in the cloud:

* You can customize values for {% ifversion ghec %}`issuer` or {% endif %}`audience` claims. See {% ifversion ghec %}[Customizing the `issuer` value for an enterprise](#customizing-the-issuer-value-for-an-enterprise) and {% endif %}[Customizing the `audience` value](#customizing-the-audience-value).
* You can customize the format of your OIDC configuration by setting conditions on the subject (`sub`) claim that require JWT tokens to originate from a specific repository, reusable workflow, or other source.
* You can define granular OIDC policies by using additional OIDC token claims, such as `repository_id` and `repository_visibility`. See [AUTOTITLE](/actions/concepts/security/openid-connect#understanding-the-oidc-token).

### Customizing the `audience` value

When you use custom actions in your workflows, those actions may use the {% data variables.product.prodname_actions %} Toolkit to enable you to supply a custom value for the `audience` claim. Some cloud providers also use this in their official login actions to enforce a default value for the `audience` claim. For example, the [GitHub Action for Azure Login](https://github.com/Azure/login/blob/master/action.yml) provides a default `aud` value of `api://AzureADTokenExchange`, or it allows you to set a custom `aud` value in your workflows. For more information on the {% data variables.product.prodname_actions %} Toolkit, see the [OIDC token](https://github.com/actions/toolkit/tree/main/packages/core#oidc-token) section in the documentation.

If you do not want to use the default `aud` value offered by an action, you can provide a custom value for the `audience` claim. This allows you to set a condition that only workflows in a specific repository or organization can access the cloud role. If the action you are using supports this, you can use the `with` keyword in your workflow to pass a custom `aud` value to the action. For more information, see [AUTOTITLE](/actions/creating-actions/metadata-syntax-for-github-actions#inputs).

{% ifversion ghec %}

### Customizing the `issuer` value for an enterprise

By default, the JWT is issued by {% data variables.product.prodname_dotcom %}'s OIDC provider at `https://token.actions.githubusercontent.com`. This path is presented to your cloud provider using the `iss` value in the JWT.

To security harden their OIDC configuration, enterprise administrators can configure their enterprise to receive tokens from a unique URL at `https://token.actions.githubusercontent.com/<enterpriseSlug>`, replacing `<enterpriseSlug>` with the slug value of the enterprise.

This configuration means that your enterprise will receive the OIDC token from a unique URL, and you can then configure your cloud provider to only accept tokens from that URL. This helps ensure that only the enterprise's repositories can access your cloud resources using OIDC.

To activate this setting for your enterprise, an enterprise administrator must use the `/enterprises/{enterprise}/actions/oidc/customization/issuer` endpoint and specify `"include_enterprise_slug": true` in the request body. For more information, see [AUTOTITLE](/rest/actions/oidc#set-the-github-actions-oidc-custom-issuer-policy-for-an-enterprise).

After this setting is applied, the JWT will contain the updated `iss` value. In the following example, the `iss` key uses `octocat-inc` as its `enterpriseSlug` value:

```json
{
  "jti": "6f4762ed-0758-4ccb-808d-ee3af5d723a8",
  "sub": "repo:octocat-inc/private-server:ref:refs/heads/main",
  "aud": "http://octocat-inc.example/octocat-inc",
  "enterprise": "octocat-inc",
  "enterprise_id": "123",
  "iss": "https://token.actions.githubusercontent.com/octocat-inc",
  "bf": 1755350653,
  "exp": 1755351553,
  "iat": 1755351253
}
```

{% endif %}

### Customizing the subject claims for an organization or repository

To help improve security, compliance, and standardization, you can customize the standard claims to suit your required access conditions. If your cloud provider supports conditions on subject claims, you can create a condition that checks whether the `sub` value matches the path of the reusable workflow, such as `"job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`. The exact format will vary depending on your cloud provider's OIDC configuration. To configure the matching condition on {% data variables.product.prodname_dotcom %}, you can use the REST API to require that the `sub` claim must always include a specific custom claim, such as `job_workflow_ref`. You can use the REST API to apply a customization template for the OIDC subject claim; for example, you can require that the `sub` claim within the OIDC token must always include a specific custom claim, such as `job_workflow_ref`. For more information, see [AUTOTITLE](/rest/actions/oidc).

> [!NOTE]
> When the organization template is applied, it will not affect any workflows already using OIDC unless their repository has opted in to custom organization templates. For all repositories, existing and new, the repository owner will need to use the repository-level REST API to opt in to receive this configuration by setting `use_default` to `false`. Alternatively, the repository owner could use the REST API to apply a different configuration specific to the repository. For more information, see [AUTOTITLE](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository).

Customizing the claims results in a new format for the entire `sub` claim, which replaces the default predefined `sub` format in the token described in [Example subject claims](#example-subject-claims).

> [!NOTE]
> The `sub` claim uses the shortened form `repo` (for example, `repo:ORG-NAME/REPO-NAME`) instead of `repository` to reference the repository. {% ifversion fpt or ghec or ghes > 3.15 %}
> Any `:` within the context value will be replaced with `%3A`. {% endif %}

The following example templates demonstrate various ways to customize the subject claim. To configure these settings on {% data variables.product.prodname_dotcom %}, admins use the REST API to specify a list of claims that must be included in the subject (`sub`) claim.

{% data reusables.actions.use-request-body-api %}

To customize your subject claims, you should first create a matching condition in your cloud provider's OIDC configuration, before customizing the configuration using the REST API. Once the configuration is completed, each time a new job runs, the OIDC token generated during that job will follow the new customization template. If the matching condition doesn't exist in the cloud provider's OIDC configuration before the job runs, the generated token might not be accepted by the cloud provider, since the cloud conditions may not be synchronized.

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

In your cloud provider's OIDC configuration, configure the `sub` condition to require that claims must include specific values for `repository_owner` and `repository_visibility`. For example: `"sub": "repository_owner:monalisa:repository_visibility:private"`. The approach lets you restrict cloud role access to only private repositories within an organization or enterprise.

#### Example: Allowing access to all repositories with a specific owner

This example template enables the `sub` claim to have a new format with only the value of `repository_owner`.

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repository_owner"
   ]
}

```

In your cloud provider's OIDC configuration, configure the `sub` condition to require that claims must include a specific value for `repository_owner`. For example: `"sub": "repository_owner:monalisa"`

#### Example: Requiring a reusable workflow

This example template allows the `sub` claim to have a new format that contains the value of the `job_workflow_ref` claim. This enables an enterprise to use reusable workflows to enforce consistent deployments across its organizations and repositories.

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "job_workflow_ref"
     ]
  }
```

In your cloud provider's OIDC configuration, configure the `sub` condition to require that claims must include a specific value for `job_workflow_ref`. For example: `"sub": "job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`.

#### Example: Requiring a reusable workflow and other claims

The following example template combines the requirement of a specific reusable workflow with additional claims.

{% data reusables.actions.use-request-body-api %}

This example also demonstrates how to use `"context"` to define your conditions. This is the part that follows the repository in the default `sub` format. For example, when the job references an environment, the context contains: `environment:ENVIRONMENT-NAME`.

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

This customization template requires that the `sub` uses the following format: `repo:ORG-NAME/REPO-NAME:environment:ENVIRONMENT-NAME:job_workflow_ref:REUSABLE-WORKFLOW-PATH`.
For example: `"sub": "repo:octo-org/octo-repo:environment:prod:job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`

#### Example: Granting access to a specific repository

This example template lets you grant cloud access to all the workflows in a specific repository, across all branches/tags and environments. {% ifversion ghec %}To further improve security, you can combine this template with a unique issuer URL for your enterprise, as described in [Customizing the `issuer` value for an enterprise](#customizing-the-issuer-value-for-an-enterprise).{% endif %}

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

This example template enables predictable OIDC claims with system-generated GUIDs that do not change between renames of entities (such as renaming a repository).

{% data reusables.actions.use-request-body-api %}

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

{% ifversion fpt or ghec or ghes > 3.15 %}

#### Example: Context value with `:`

This example demonstrates how to handle context value with `:`. For example, when the job references an environment named `production:eastus`.

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "environment",
       "repository_owner"
   ]
}
```

In your cloud provider's OIDC configuration, configure the `sub` condition to require that claims must include a specific value for `environment` and `repository_owner`. For example: `"sub": "environment:production%3Aeastus:repository_owner:octo-org"`.
{% endif %}

#### Resetting organization template customizations

This example template resets the subject claims to the default format. This template effectively opts out of any organization-level customization policy.

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo",
       "context"
   ]
}
```

In your cloud provider's OIDC configuration, configure the `sub` condition to require that claims must include specific values for `repo` and `context`.

#### Resetting repository template customizations

All repositories in an organization have the ability to opt in or opt out of (organization and repository-level) customized `sub` claim templates.

To opt out a repository and reset back to the default `sub` claim format, a repository administrator must use the REST API endpoint at [AUTOTITLE](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository).

To configure repositories to use the default `sub` claim format, use the `PUT /repos/{owner}/{repo}/actions/oidc/customization/sub` REST API endpoint at with the following request body.

```json
{
   "use_default": true
}
```

#### Example: Configuring a repository to use an organization template

Once an organization has created a customized `sub` claim template, the REST API can be used to programmatically apply the template to repositories within the organization. A repository administrator can configure their repository to use the template created by the administrator of their organization.

To configure the repository to use the organization's template, a repository admin must use the `PUT /repos/{owner}/{repo}/actions/oidc/customization/sub` REST API endpoint at with the following request body. For more information, see [AUTOTITLE](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository).

```json
{
   "use_default": false
}
```

## Debugging your OIDC claims

You can use the [`github/actions-oidc-debugger`](https://github.com/github/actions-oidc-debugger) action to visualize the claims that would be sent, before integrating with a cloud provider. This action requests a JWT and prints the claims included within the JWT that were received from {% data variables.product.prodname_actions %}.

## Workflow permissions for the requesting the OIDC token

### Required permission

* The job or workflow must grant the [`id-token: write`](/actions/reference/workflow-syntax-for-github-actions#permissions) permission to allow {% data variables.product.github %}'s OIDC provider to create a JSON Web Token (JWT):

  ```yaml
  permissions:
    id-token: write
  ```

* Without `id-token: write`, the OIDC JWT ID token cannot be requested. This setting only enables fetching and setting the OIDC token; it does not grant write access to other resources.

### Setting permissions

* To fetch an OIDC token for a workflow, set the permission at the workflow level:

  ```yaml
  permissions:
    id-token: write # This is required for requesting the JWT
    contents: read # This is required for actions/checkout
  ```

* To fetch an OIDC token for a single job, set the permission within that job:

  ```yaml
  permissions:
    id-token: write # This is required for requesting the JWT
  ```

* Additional permissions may be required depending on workflow needs.

### Reusable workflows

* For reusable workflows owned by the same user, organization, or enterprise as the caller, the OIDC token generated in the reusable workflow is accessible from the caller's context.
* For reusable workflows outside your enterprise or organization, set the `permissions` setting for `id-token` to `write` explicitly at the caller workflow or job level. This ensures the OIDC token is only available to intended caller workflows.

## Methods for requesting the OIDC token

Custom actions can request the OIDC token using:

* The `getIDToken()` method from the Actions toolkit. For more information, see [OIDC Token](https://www.npmjs.com/package/@actions/core/v/1.6.0#oidc-token) in the npm package documentation.
* The following environment variables on the runner.

  | Variable | Description |
  | ------ | ----------- |
  | `ACTIONS_ID_TOKEN_REQUEST_URL` | The URL for {% data variables.product.prodname_dotcom %}'s OIDC provider. |
  | `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | Bearer token for the request to the OIDC provider. |

  For example:

  ```shell copy
  curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
  ```
