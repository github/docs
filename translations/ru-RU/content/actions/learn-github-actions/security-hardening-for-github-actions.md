---
title: Security hardening for GitHub Actions
shortTitle: Security hardening
intro: 'Good security practices for using {% data variables.product.prodname_actions %} features.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Обзор

This guide explains how to configure security hardening for certain {% data variables.product.prodname_actions %} features. If the {% data variables.product.prodname_actions %} concepts are unfamiliar, see "[Core concepts for GitHub Actions](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)."

### Using secrets

Sensitive values should never be stored as plaintext in workflow files, but rather as secrets. [Secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) can be configured at the organization or repository level, and allow you to store sensitive information in {% data variables.product.product_name %}.

Secrets use [Libsodium sealed boxes](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes), so that they are encrypted before reaching {% data variables.product.product_name %}. This occurs when the secret is submitted [using the UI](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) or through the [REST API](/rest/reference/actions#secrets). This client-side encryption helps the minimize risks related to accidental logging (for example, exception logs and request logs, among others) within {% data variables.product.product_name %}'s infrastructure. Once the secret is uploaded, {% data variables.product.product_name %} is then able to decrypt it so that it can be injected into the workflow runtime.

To help prevent accidental disclosure, {% data variables.product.product_name %} uses a mechanism that attempts to redact any secrets that appear in run logs. This redaction looks for exact matches of any configured secrets, as well as common encodings of the values, such as Base64. However, because there are multiple ways a secret value can be transformed, this redaction is not guaranteed. As a result, there are certain proactive steps and good practices you should follow to help ensure secrets are redacted, and to limit other risks associated with secrets:

- **Never use structured data as a secret**
    - Structured data can cause secret redaction within logs to fail, because redaction largely relies on finding an exact match for the specific secret value. For example, do not use a blob of JSON, XML, or YAML (or similar) to encapsulate a secret value, as this significantly reduces the probability the secrets will be properly redacted. Instead, create individual secrets for each sensitive value.
- **Register all secrets used within workflows**
    - If a secret is used to generate another sensitive value within a workflow, that generated value should be formally [registered as a secret](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret), so that it will be redacted if it ever appears in the logs. For example, if using a private key to generate a signed JWT to access a web API, be sure to register that JWT as a secret or else it won’t be redacted if it ever enters the log output.
    - Registering secrets applies to any sort of transformation/encoding as well. If your secret is transformed in some way (such as Base64 or URL-encoded), be sure to register the new value as a secret too.
- **Audit how secrets are handled**
    - Audit how secrets are used, to help ensure they’re being handled as expected. You can do this by reviewing the source code of the repository executing the workflow, and checking any actions used in the workflow. For example, check that they’re not sent to unintended hosts, or explicitly being printed to log output.
    - View the run logs for your workflow after testing valid/invalid inputs, and check that secrets are properly redacted, or not shown. It's not always obvious how a command or tool you’re invoking will send errors to `STDOUT` and `STDERR`, and secrets might subsequently end up in error logs. As a result, it is good practice to manually review the workflow logs after testing valid and invalid inputs.
- **Use credentials that are minimally scoped**
    - Make sure the credentials being used within workflows have the least privileges required, and be mindful that any user with write access to your repository has read access to all secrets configured in your repository.
- **Audit and rotate registered secrets**
    - Periodically review the registered secrets to confirm they are still required. Remove those that are no longer needed.
    - Rotate secrets periodically to reduce the window of time during which a compromised secret is valid.

### Using third-party actions

The individual jobs in a workflow can interact with (and compromise) other jobs. For example, a job querying the environment variables used by a later job, writing files to a shared directory that a later job processes, or even more directly by interacting with the Docker socket and inspecting other running containers and executing commands in them.

This means that a compromise of a single action within a workflow can be very significant, as that compromised action would have access to all secrets configured on your repository, and can use the `GITHUB_TOKEN` to write to the repository. Consequently, there is significant risk in sourcing actions from third-party repositories on {% data variables.product.prodname_dotcom %}. You can help mitigate this risk by following these good practices:

* **Pin actions to a full length commit SHA**

  Pinning an action to a full length commit SHA is currently the only way to use an action as an immutable release. Pinning to a particular SHA helps mitigate the risk of a bad actor adding a backdoor to the action's repository, as they would need to generate a SHA-1 collision for a valid Git object payload.

  {% warning %}

  **Warning:** The short version of the commit SHA is insecure and should never be used for specifying an action's Git reference. Because of how repository networks work, any user can fork the repository and push a crafted commit to it that collides with the short SHA. This causes subsequent clones at that SHA to fail because it becomes an ambiguous commit. As a result, any workflows that use the shortened SHA will immediately fail.

  {% endwarning %}
* **Audit the source code of the action**

  Ensure that the action is handling the content of your repository and secrets as expected. For example, check that secrets are not sent to unintended hosts, or are not inadvertently logged.

* **Pin actions to a tag only if you trust the creator**

  Although pinning to a commit SHA is the most secure option, specifying a tag is more convenient and is widely used. If you’d like to specify a tag, then be sure that you trust the action's creators. The ‘Verified creator’ badge on {% data variables.product.prodname_marketplace %} is a useful signal, as it indicates that the action was written by a team whose identity has been verified by {% data variables.product.prodname_dotcom %}. Note that there is risk to this approach even if you trust the author, because a tag can be moved or deleted if a bad actor gains access to the repository storing the action.

### Considering cross-repository access

{% data variables.product.product_name %} is intentionally scoped for a single repository at a time. The `GITHUB_TOKEN` used in the workflow environment grants the same level of access as a write-access user, because any write-access user can access this token by creating or modifying workflow files. Users have specific permissions for each repository, so having the `GITHUB_TOKEN` for one repository grant access to another would impact the {% data variables.product.prodname_dotcom %} permission model if not implemented carefully. Similarly, caution must be taken when adding {% data variables.product.prodname_dotcom %} authentication tokens to the workflow environment, because this can also affect the {% data variables.product.prodname_dotcom %} permission model by inadvertently granting broad access to collaborators.

We have [a plan on the {% data variables.product.prodname_dotcom %} roadmap](https://github.com/github/roadmap/issues/74) to support a flow that allows cross-repository access within {% data variables.product.product_name %}, but this is not yet a supported feature. Currently, the only way to perform privileged cross-repository interactions is to place a {% data variables.product.prodname_dotcom %} authentication token or SSH key as a secret within the workflow environment. Because many authentication token types do not allow for granular access to specific resources, there is significant risk in using the wrong token type, as it can grant much broader access than intended.

This list describes the recommended approaches for accessing repository data within a workflow, in descending order of preference:

1. **The `GITHUB_TOKEN` in the workflow environment**
    -  This token is intentionally scoped to the single repository that invoked the workflow, and has the same level of access as a write-access user on the repository. The token is created before each job begins and expires when the job is finished. For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)."
    - The `GITHUB_TOKEN` should be used whenever possible.
2. **Repository deploy key**
    - Deploy keys are one of the only credential types that grant read or write access to a single repository, and can be used to interact with another repository within a workflow. For more information, see "[Managing deploy keys](/developers/overview/managing-deploy-keys#deploy-keys)."
    - Note that deploy keys can only clone and push to the repository using Git, and cannot be used to interact with the REST or GraphQL API, so they may not be appropriate for your requirements.
3. **{% data variables.product.prodname_github_app %} tokens**
    - {% data variables.product.prodname_github_apps %} can be installed on select repositories, and even have granular permissions on the resources within them. You could create a {% data variables.product.prodname_github_app %} internal to your organization, install it on the repositories you need access to within your workflow, and authenticate as the installation within your workflow to access those repositories.
4. **Personal access tokens**
    - You should never use personal access tokens from your own account. These tokens grant access to all repositories within the organizations that you have access to, as well as all personal repositories in your user account. This indirectly grants broad access to all write-access users of the repository the workflow is in. In addition, if you later leave an organization, workflows using this token will immediately break, and debugging this issue can be challenging.
    - If a personal access token is used, it should be one that was generated for a new account that is only granted access to the specific repositories that are needed for the workflow. Note that this approach is not scalable and should be avoided in favor of alternatives, such as deploy keys.
5. **SSH keys on a user account**
    - Workflows should never use the SSH keys on a user account. Similar to personal access tokens, they grant read/write permissions to all of your personal repositories as well as all the repositories you have access to through organization membership.  This indirectly grants broad access to all write-access users of the repository the workflow is in. If you're intending to use an SSH key because you only need to perform repository clones or pushes, and do not need to interact with public APIs, then you should use individual deploy keys instead.

### Hardening for self-hosted runners

**{% data variables.product.prodname_dotcom %}-hosted** runners execute code within ephemeral and clean isolated virtual machines, meaning there is no way to persistently compromise this environment, or otherwise gain access to more information than was placed in this environment during the bootstrap process.

**Self-hosted** runners on {% data variables.product.product_name %} do not have guarantees around running in ephemeral clean virtual machines, and can be persistently compromised by untrusted code in a workflow.

As a result, self-hosted runners should almost [never be used for public repositories](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories) on {% data variables.product.product_name %}, because any user can open pull requests against the repository and compromise the environment. Similarly, be cautious when using self-hosted runners on private repositories, as anyone who can fork the repository and open a PR (generally those with read-access to the repository) are able to compromise the self-hosted runner environment, including gaining access to secrets and the more privileged `GITHUB_TOKEN` which grants write-access permissions on the repository.

You should also consider the environment of the self-hosted runner machines:
- What sensitive information resides on the machine configured as a self-hosted runner? For example, private SSH keys, API access tokens, among others.
- Does the machine have network access to sensitive services? For example, Azure or AWS metadata services. The amount of sensitive information in this environment should be kept to a minimum, and you should always be mindful that any user capable of invoking workflows has access to this environment.

### Auditing {% data variables.product.prodname_actions %} events

You can use the audit log to monitor administrative tasks in an organization. The audit log records the type of action, when it was run, and which user account performed the action.

For example, you can use the audit log to track the `action:org.update_actions_secret` event, which tracks changes to organization secrets: ![Audit log entries](/assets/images/help/repository/audit-log-entries.png)

The following tables describe the {% data variables.product.prodname_actions %} events that you can find in the audit log. For more information on using the audit log, see "[Reviewing the audit log for your organization](/github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)."

#### Events for secret management
| Действие                            | Description                                                                                                                                                                                |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action:org.create_actions_secret`  | Triggered when a organization admin [creates a {% data variables.product.prodname_actions %} secret](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization). |
| `action:org.remove_actions_secret`  | Triggered when a organization admin removes a {% data variables.product.prodname_actions %} secret.                                                                                        |
| `action:org.update_actions_secret`  | Triggered when a organization admin updates a {% data variables.product.prodname_actions %} secret.                                                                                        |
| `action:repo.create_actions_secret` | Triggered when a repository admin [creates a {% data variables.product.prodname_actions %} secret](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).      |
| `action:repo.remove_actions_secret` | Triggered when a repository admin removes a {% data variables.product.prodname_actions %} secret.                                                                                          |
| `action:repo.update_actions_secret` | Triggered when a repository admin updates a {% data variables.product.prodname_actions %} secret.                                                                                          |

#### Events for self-hosted runners
| Действие                                  | Description                                                                                                                                                                             |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action:org.register_self_hosted_runner`  | Triggered when an organization owner [registers a new self-hosted runner](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization). |
| `action:org.remove_self_hosted_runner`    | Triggered when an organization owner [removes a self-hosted runner](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).             |
| `action:repo.register_self_hosted_runner` | Triggered when a repository admin [registers a new self-hosted runner](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository).       |
| `action:repo.remove_self_hosted_runner`   | Triggered when a repository admin [removes a self-hosted runner](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).                   |

#### Events for self-hosted runner groups
| Действие                                  | Description                                                                                                                                                                                                               |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action:org.runner_group_created`         | Triggered when an organization admin [creates a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization). |
| `action:org.runner_group_removed`         | Triggered when an organization admin removes a self-hosted runner group.                                                                                                                                                  |
| `action:org.runner_group_renamed`         | Triggered when an organization admin renames a self-hosted runner group.                                                                                                                                                  |
| `action:org.runner_group_runners_added`   | Triggered when an organization admin [adds a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).                |
| `action:org.runner_group_runners_removed` | Triggered when an organization admin removes a self-hosted runner from a group.                                                                                                                                           | 


