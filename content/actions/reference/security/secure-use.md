---
title: Secure use reference
shortTitle: Secure use
intro: 'Security practices for writing workflows and using {% data variables.product.prodname_actions %} features.'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
  - /actions/learn-github-actions/security-hardening-for-github-actions
  - /actions/security-guides/security-hardening-for-github-actions
  - /actions/security-for-github-actions/security-guides/security-hardening-for-github-actions
  - /actions/how-tos/security-for-github-actions/security-guides/security-hardening-for-github-actions
  - /actions/security-guides/using-githubs-security-features-to-secure-your-use-of-github-actions
  - /actions/security-for-github-actions/security-guides/using-githubs-security-features-to-secure-your-use-of-github-actions
  - /actions/how-tos/security-for-github-actions/security-guides/using-githubs-security-features-to-secure-your-use-of-github-actions
  - /actions/reference/secure-use-reference
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Security
---

Find information about security best practices when you are writing workflows and using {% data variables.product.prodname_actions %} security features.

## Writing workflows

### Use secrets for sensitive information

Because there are multiple ways a secret value can be transformed, automatic redaction is not guaranteed. Adhere to the following best practices to limit risks associated with secrets.

* **Principle of least privilege**
  * Any user with write access to your repository has read access to all secrets configured in your repository. Therefore, you should ensure that the credentials being used within workflows have the least privileges required.
  * Actions can use the `GITHUB_TOKEN` by accessing it from the `github.token` context. For more information, see [AUTOTITLE](/actions/learn-github-actions/contexts#github-context). You should therefore make sure that the `GITHUB_TOKEN` is granted the minimum required permissions. It's good security practice to set the default permission for the `GITHUB_TOKEN` to read access only for repository contents. The permissions can then be increased, as required, for individual jobs within the workflow file. For more information, see [AUTOTITLE](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token).
* **Mask sensitive data**
  * Sensitive data should **never** be stored as plaintext in workflow files. Mask all sensitive information that is not a {% data variables.product.prodname_dotcom %} secret by using `::add-mask::VALUE`. This causes the value to be treated as a secret and redacted from logs. For more information about masking data, see [AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#masking-a-value-in-a-log).
* **Delete and rotate exposed secrets**
  * Redacting of secrets is performed by your workflow runners. This means a secret will only be redacted if it was used within a job and is accessible by the runner. If an unredacted secret is sent to a workflow run log, you should delete the log and rotate the secret. For information on deleting logs, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#deleting-logs).
* **Never use structured data as a secret**
  * Structured data can cause secret redaction within logs to fail, because redaction largely relies on finding an exact match for the specific secret value. For example, do not use a blob of JSON, XML, or YAML (or similar) to encapsulate a secret value, as this significantly reduces the probability the secrets will be properly redacted. Instead, create individual secrets for each sensitive value.
* **Register all secrets used within workflows**
  * If a secret is used to generate another sensitive value within a workflow, that generated value should be formally [registered as a secret](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret), so that it will be redacted if it ever appears in the logs. For example, if using a private key to generate a signed JWT to access a web API, be sure to register that JWT as a secret or else it won’t be redacted if it ever enters the log output.
  * Registering secrets applies to any sort of transformation/encoding as well. If your secret is transformed in some way (such as Base64 or URL-encoded), be sure to register the new value as a secret too.
* **Audit how secrets are handled**
  * Audit how secrets are used, to help ensure they’re being handled as expected. You can do this by reviewing the source code of the repository executing the workflow, and checking any actions used in the workflow. For example, check that they’re not sent to unintended hosts, or explicitly being printed to log output.
  * View the run logs for your workflow after testing valid/invalid inputs, and check that secrets are properly redacted, or not shown. It's not always obvious how a command or tool you’re invoking will send errors to `STDOUT` and `STDERR`, and secrets might subsequently end up in error logs. As a result, it is good practice to manually review the workflow logs after testing valid and invalid inputs. For information on how to clean up workflow logs that may unintentionally contain sensitive data, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#deleting-logs).
* **Audit and rotate registered secrets**
  * Periodically review the registered secrets to confirm they are still required. Remove those that are no longer needed.
  * Rotate secrets periodically to reduce the window of time during which a compromised secret is valid.
* **Consider requiring review for access to secrets**
  * You can use required reviewers to protect environment secrets. A workflow job cannot access environment secrets until approval is granted by a reviewer. For more information about storing secrets in environments or requiring reviews for environments, see [AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions) and [AUTOTITLE](/actions/deployment/targeting-different-environments/managing-environments-for-deployment).

### Good practices for mitigating script injection attacks

Recommended approaches for mitigating the risk of script injection in your workflows:

#### Use an action instead of an inline script

The recommended approach is to create a JavaScript action that processes the context value as an argument. This approach is not vulnerable to the injection attack, since the context value is not used to generate a shell script, but is instead passed to the action as an argument:

```yaml
uses: fakeaction/checktitle@v3
with:
  title: {% raw %}${{ github.event.pull_request.title }}{% endraw %}
```

#### Use an intermediate environment variable

For inline scripts, the preferred approach to handling untrusted input is to set the value of the expression to an intermediate environment variable. The following example uses Bash to process the `github.event.pull_request.title` value as an environment variable:

```yaml
      - name: Check PR title
        env:
          TITLE: {% raw %}${{ github.event.pull_request.title }}{% endraw %}
        run: |
          if [[ "$TITLE" =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```

In this example, the attempted script injection is unsuccessful, which is reflected by the following lines in the log:

```shell
   env:
     TITLE: a"; ls $GITHUB_WORKSPACE"
PR title did not start with 'octocat'
```

With this approach, the value of the {% raw %}`${{ github.event.pull_request.title }}`{% endraw %} expression is stored in memory and used as a variable, and doesn't interact with the script generation process. In addition, consider using double quote shell variables to avoid [word splitting](https://github.com/koalaman/shellcheck/wiki/SC2086), but this is [one of many](https://mywiki.wooledge.org/BashPitfalls) general recommendations for writing shell scripts, and is not specific to {% data variables.product.prodname_actions %}.

{% ifversion fpt or ghec %}

#### Using workflow templates for {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_caps %} allows you to find security vulnerabilities before they reach production. {% data variables.product.github %} provides workflow templates for {% data variables.product.prodname_code_scanning %}. You can use these suggested workflows to construct your {% data variables.product.prodname_code_scanning %} workflows, instead of starting from scratch. {% data variables.product.company_short %}'s workflow, the {% data variables.code-scanning.codeql_workflow %}, is powered by {% data variables.product.prodname_codeql %}. There are also third-party workflow templates available.

For more information, see [AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning) and [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-third-party-actions).

{% endif %}

#### Restricting permissions for tokens

To help mitigate the risk of an exposed token, consider restricting the assigned permissions. For more information, see [AUTOTITLE](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token).

### Using third-party actions

The individual jobs in a workflow can interact with (and compromise) other jobs. For example, a job querying the environment variables used by a later job, writing files to a shared directory that a later job processes, or even more directly by interacting with the Docker socket and inspecting other running containers and executing commands in them.

This means that a compromise of a single action within a workflow can be very significant, as that compromised action would have access to all secrets configured on your repository, and may be able to use the `GITHUB_TOKEN` to write to the repository. Consequently, there is significant risk in sourcing actions from third-party repositories on {% data variables.product.prodname_dotcom %}. For information on some of the steps an attacker could take, see [AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner).

You can help mitigate this risk by following these good practices:

* **Pin actions to a full-length commit SHA**

  Pinning an action to a full-length commit SHA is currently the only way to use an action as an immutable release. Pinning to a particular SHA helps mitigate the risk of a bad actor adding a backdoor to the action's repository, as they would need to generate a SHA-1 collision for a valid Git object payload. {% data reusables.actions.actions-pin-commit-sha %}

  For an example of using a full-length commit SHA in a workflow, see [AUTOTITLE](/actions/how-tos/write-workflows/choose-what-workflows-do/find-and-customize-actions#using-shas).
  
  {%- ifversion actions-blocklist-sha-pinning %}
  
  {% data variables.product.github %} offers policies at the {% ifversion ghec or ghes %}repository, organization, and enterprise{% else %}repository and organization{% endif %} level to require actions to be pinned to a full-length commit SHA:
    * To configure the policy at the repository level, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository).
    * To configure the policy at the organization level, see [AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization).
    {%- ifversion ghec or ghes %}
    * To configure the policy at the enterprise level, see [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#policies).
    {%- endif %}
  {%- endif %}

* **Audit the source code of the action**

  Ensure that the action is handling the content of your repository and secrets as expected. For example, check that secrets are not sent to unintended hosts, or are not inadvertently logged.

* **Pin actions to a tag only if you trust the creator**

  Although pinning to a commit SHA is the most secure option, specifying a tag is more convenient and is widely used. If you’d like to specify a tag, then be sure that you trust the action's creators. The ‘Verified creator’ badge on {% data variables.product.prodname_marketplace %} is a useful signal, as it indicates that the action was written by a team whose identity has been verified by {% data variables.product.prodname_dotcom %}. Note that there is risk to this approach even if you trust the author, because a tag can be moved or deleted if a bad actor gains access to the repository storing the action.

### Reusing third-party workflows

The same principles described above for using third-party actions also apply to using third-party workflows. You can help mitigate the risks associated with reusing workflows by following the same good practices outlined above. For more information, see [AUTOTITLE](/actions/using-workflows/reusing-workflows).

## {% data variables.product.github %}'s security features

{% data variables.product.prodname_dotcom %} provides many features to make your code more secure. You can use {% data variables.product.prodname_dotcom %}'s built-in features to understand the actions your workflows depend on, ensure you are notified about vulnerabilities in the actions you consume, or automate the process of keeping the actions in your workflows up to date. If you publish and maintain actions, you can use {% data variables.product.prodname_dotcom %} to communicate with your community about vulnerabilities and how to fix them. For more information about security features that {% data variables.product.prodname_dotcom %} offers, see [AUTOTITLE](/code-security/getting-started/github-security-features#about-githubs-security-features).

### Using `CODEOWNERS` to monitor changes

You can use the `CODEOWNERS` feature to control how changes are made to your workflow files. For example, if all your workflow files are stored  `.github/workflows`, you can add this directory to the code owners list, so that any proposed changes to these files will first require approval from a designated reviewer.

For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

{% ifversion custom-org-roles %}

### Managing permissions for {% data variables.product.prodname_actions %} settings in your organization

You can practice the principle of least privilege for your organization's CI/CD pipeline with {% data variables.product.prodname_actions %} by administering custom organization roles. A custom organization role is a way to grant an individual or team in your organization the ability to control certain subsets of settings without granting full administrative control of the organization and its repositories.

{% data reusables.actions.org-roles-for-gh-actions %}

For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles).

{% endif %}

### Using OpenID Connect to access cloud resources

{% data reusables.actions.about-oidc-short-overview %}

{% data reusables.actions.oidc-custom-claims-aws-restriction %}

### Using {% data variables.product.prodname_dependabot_version_updates %} to keep actions up to date

{% data reusables.actions.dependabot-version-updates-for-actions %}

{% ifversion ghec or ghes %}

### Allowing workflows to access internal and private repositories

{% data reusables.actions.outside-collaborators-actions %} For more information, see [AUTOTITLE](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise).

{% data reusables.actions.scoped-token-note %}

{% endif %}

### Preventing {% data variables.product.prodname_actions %} from creating or approving pull requests

{% data reusables.actions.workflow-pr-approval-permissions-intro %} Allowing workflows, or any other automation, to create or approve pull requests could be a security risk if the pull request is merged without proper oversight.

For more information on how to configure this setting, see {% ifversion ghes or ghec %}[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#preventing-github-actions-from-creating-or-approving-pull-requests),{% endif %} [Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#preventing-github-actions-from-creating-or-approving-pull-requests), and [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests).

{% ifversion code-scanning-actions-language %}

### Using {% data variables.product.prodname_code_scanning %} to secure workflows

{% data variables.product.prodname_code_scanning_caps %} can automatically detect and suggest improvements for common vulnerable patterns used in {% data variables.product.prodname_actions %} workflows.
For more information on how to enable {% data variables.product.prodname_code_scanning %}, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning).

{% endif %}

### Using OpenSSF Scorecards to secure workflow dependencies

[Scorecards](https://github.com/ossf/scorecard) is an automated security tool that flags risky supply chain practices. You can use the [Scorecards action](https://github.com/marketplace/actions/ossf-scorecard-action) and [workflow template](https://github.com/actions/starter-workflows) to follow best security practices. Once configured, the Scorecards action runs automatically on repository changes, and alerts developers about risky supply chain practices using the built-in {% data variables.product.prodname_code_scanning %} experience. The Scorecards project runs a number of checks, including script injection attacks, token permissions, and pinned actions.

### Hardening for {% data variables.product.prodname_dotcom %}-hosted runners

{% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %}-hosted runners take measures to help you mitigate security risks.

{% ifversion actions-sbom %}

#### Reviewing the supply chain for {% data variables.product.prodname_dotcom %}-hosted runners

For {% data variables.product.prodname_dotcom %}-hosted runners created from images maintained by {% data variables.product.company_short %}, you can view a software bill of materials (SBOM) to see what software was pre-installed on the runner. You can provide your users with the SBOM which they can run through a vulnerability scanner to validate if there are any vulnerabilities in the product. If you are building artifacts, you can include this SBOM in your bill of materials for a comprehensive list of everything that went into creating your software.

SBOMs are available for Ubuntu, Windows, and macOS runner images maintained by {% data variables.product.company_short %}. You can locate the SBOM for your build in the release assets at https://github.com/actions/runner-images/releases. An SBOM with a filename in the format of `sbom.IMAGE-NAME.json.zip` can be found in the attachments of each release.

For third-party images, such as the images for ARM-powered runners, you can find details of the software that's included in the image in the [`actions/partner-runner-images` repository](https://github.com/actions/partner-runner-images).

{% endif %}

#### Denying access to hosts

{% data reusables.actions.runners-etc-hosts-file %} For more information, see [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners).

{% endif %}

### Hardening for self-hosted runners

{% ifversion fpt or ghec %}
**{% data variables.product.prodname_dotcom %}-hosted** runners execute code within ephemeral and clean isolated virtual machines, meaning there is no way to persistently compromise this environment, or otherwise gain access to more information than was placed in this environment during the bootstrap process.
{% endif %}

{% ifversion fpt or ghec %}**Self-hosted**{% elsif ghes %}Self-hosted{% endif %} runners for {% data variables.product.github %} do not have guarantees around running in ephemeral clean virtual machines, and can be persistently compromised by untrusted code in a workflow.

{% ifversion fpt or ghec %}As a result, self-hosted runners should almost [never be used for public repositories](/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions) on {% data variables.product.github %}, because any user can open pull requests against the repository and compromise the environment. Similarly, be{% elsif ghes %}Be{% endif %} cautious when using self-hosted runners on private or internal repositories, as anyone who can fork the repository and open a pull request (generally those with read access to the repository) are able to compromise the self-hosted runner environment, including gaining access to secrets and the `GITHUB_TOKEN` which, depending on its settings, can grant write access to the repository. Although workflows can control access to environment secrets by using environments and required reviews, these workflows are not run in an isolated environment and are still susceptible to the same risks when run on a self-hosted runner.

{% data reusables.actions.disable-selfhosted-runners-crossrefs %}

When a self-hosted runner is defined at the organization or enterprise level, {% data variables.product.github %} can schedule workflows from multiple repositories onto the same runner. Consequently, a security compromise of these environments can result in a wide impact. To help reduce the scope of a compromise, you can create boundaries by organizing your self-hosted runners into separate groups. You can restrict what {% ifversion ghec or ghes %}workflows, {% endif %}organizations and repositories can access runner groups. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups).

You should also consider the environment of the self-hosted runner machines:

* What sensitive information resides on the machine configured as a self-hosted runner? For example, private SSH keys, API access tokens, among others.
* Does the machine have network access to sensitive services? For example, Azure or AWS metadata services. The amount of sensitive information in this environment should be kept to a minimum, and you should always be mindful that any user capable of invoking workflows has access to this environment.

Some customers might attempt to partially mitigate these risks by implementing systems that automatically destroy the self-hosted runner after each job execution. However, this approach might not be as effective as intended, as there is no way to guarantee that a self-hosted runner only runs one job. Some jobs will use secrets as command-line arguments which can be seen by another job running on the same runner, such as `ps x -w`. This can lead to secret leaks.

#### Using just-in-time runners

To improve runner registration security, you can use the REST API to create ephemeral, just-in-time (JIT) runners. These self-hosted runners perform at most one job before being automatically removed from the repository, organization, or enterprise. For more information about configuring JIT runners, see [AUTOTITLE](/rest/actions/self-hosted-runners#create-configuration-for-a-just-in-time-runner-for-an-organization).

> [!NOTE]
> Re-using hardware to host JIT runners can risk exposing information from the environment. Use automation to ensure the JIT runner uses a clean environment. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners#using-ephemeral-runners-for-autoscaling).

Once you have the config file from the REST API response, you can pass it to the runner at startup.

```shell
./run.sh --jitconfig ${encoded_jit_config}
```

#### Planning your management strategy for self-hosted runners

A self-hosted runner can be added to various levels in your {% data variables.product.prodname_dotcom %} hierarchy: the enterprise, organization, or repository level. This placement determines who will be able to manage the runner:

**Centralized management:**

* If you plan to have a centralized team own the self-hosted runners, then the recommendation is to add your runners at the highest mutual organization or enterprise level. This gives your team a single location to view and manage your runners.
* If you only have a single organization, then adding your runners at the organization level is effectively the same approach, but you might encounter difficulties if you add another organization in the future.

**Decentralized management:**

* If each team will manage their own self-hosted runners, then the recommendation is to add the runners at the highest level of team ownership. For example, if each team owns their own organization, then it will be simplest if the runners are added at the organization level too.
* You could also add runners at the repository level, but this will add management overhead and also increases the numbers of runners you need, since you cannot share runners between repositories.

#### Authenticating to your cloud provider

If you are using {% data variables.product.prodname_actions %} to deploy to a cloud provider, or intend to use HashiCorp Vault for secret management, then it's recommended that you consider using OpenID Connect to create short-lived, well-scoped access tokens for your workflow runs. For more information, see [AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect).

### Auditing {% data variables.product.prodname_actions %} events

You can use the security log to monitor activity for your user account and the audit log to monitor activity in your organization{% ifversion ghec or ghes %} or enterprise{% endif %}. The security and audit log records the type of action, when it was run, and which personal account performed the action.

For example, you can use the audit log to track the `org.update_actions_secret` event, which tracks changes to organization secrets.

![Screenshot showing a search for "action:org.update_actions_secret" in the audit log for an organization. Two results are shown.](/assets/images/help/repository/audit-log-entries.png)

For the full list of events that you can find in the audit log for each account type, see the following articles:

* [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/security-log-events)
* [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization)
{%- ifversion ghec or ghes %}
* [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)
{%- endif %}

### Understanding dependencies in your workflows

You can use the dependency graph to explore the actions that the workflows in your repository use. The dependency graph is a summary of the manifest and lock files stored in a repository. It also recognizes files in `./github/workflows/` as manifests, which means that any actions or workflows referenced using the syntax `jobs[*].steps[*].uses` or `jobs.<job_id>.uses` will be parsed as dependencies.

The dependency graph shows the following information about actions used in workflows:

* The account or organization that owns the action.
* The workflow file that references the action.
* The version or SHA the action is pinned to.

In the dependency graph, dependencies are automatically sorted by vulnerability severity. If any of the actions you use have security advisories, they will display at the top of the list. You can navigate to the advisory from the dependency graph and access instructions for resolving the vulnerability.

{% ifversion fpt or ghec %}The dependency graph is enabled for public repositories, and you can choose to enable it on private repositories. For more information about using the dependency graph, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository).{% else %}Enterprise owners can configure the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for an enterprise. For more information, see [AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise).{% endif %}

### Being aware of security vulnerabilities in actions you use

For actions available on the marketplace, {% data variables.product.prodname_dotcom %} reviews related security advisories and then adds those advisories to the {% data variables.product.prodname_advisory_database %}. You can search the database for actions that you use to find information about existing vulnerabilities and instructions for how to fix them. To streamline your search, use the {% data variables.product.prodname_actions %} filter in the [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories?query=type%3Areviewed+ecosystem%3Aactions).

You can set up your repositories so that you:

* Receive alerts when actions used in your workflows receive a vulnerability report. For more information, see [Monitoring the actions in your workflows](#monitoring-the-actions-in-your-workflows).
* Are warned about existing advisories when you add or update an action in a workflow. For more information, see [Screening actions for vulnerabilities in new or updated workflows](#screening-actions-for-vulnerabilities-in-new-or-updated-workflows).

#### Monitoring the actions in your workflows

You can use {% data variables.product.prodname_dependabot %} to monitor the actions in your workflows and enable {% data variables.product.prodname_dependabot_alerts %} to notify you when an action you use has a reported vulnerability. {% data variables.product.prodname_dependabot %} performs a scan of the default branch of the repositories where it is enabled to detect insecure dependencies. {% data variables.product.prodname_dependabot %} generates {% data variables.product.prodname_dependabot_alerts %} when a new advisory is added to the {% data variables.product.prodname_advisory_database %} or when an action you use is updated.

> [!NOTE]
> {% data variables.product.prodname_dependabot %} only creates alerts for vulnerable actions that use semantic versioning and will not create alerts for actions pinned to SHA values.

{% ifversion fpt or ghec %}You can enable {% data variables.product.prodname_dependabot_alerts %} for your personal account, for a repository, or for an organization. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts).{% else %}An enterprise owner must first set up {% data variables.product.prodname_dependabot %} for your enterprise before you can manage {% data variables.product.prodname_dependabot_alerts %} for your repository. For more information, see [AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).{% endif %}

{% data reusables.dependabot.where-to-view-dependabot-alerts %} For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts).

#### Screening actions for vulnerabilities in new or updated workflows

When you open pull requests to update your workflows, it is good practice to use dependency review to understand the security impact of changes you've made to the actions you use. {% data reusables.dependency-review.feature-overview %}

If any of the changes you made to your workflows are flagged as vulnerable, you can avoid adding them to your project or update them to a secure version.

For more information about dependency review, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

{% data reusables.dependency-review.about-dependency-review-action %} For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#about-the-dependency-review-action).

### Keeping the actions in your workflows secure and up to date

{% data reusables.actions.dependabot-version-updates-for-actions %}

The following features can automatically update the actions in your workflows.

* **{% data variables.product.prodname_dependabot_version_updates %}** open pull requests to update actions to the latest version when a new version is released.
* **{% data variables.product.prodname_dependabot_security_updates %}** open pull requests to update actions with reported vulnerabilities to the minimum patched version.

> [!NOTE]
> {% data reusables.actions.dependabot-version-updates-actions-caveats %}

For information on how to configure {% data variables.product.prodname_dependabot_version_updates %}, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates).

For information on how to configure {% data variables.product.prodname_dependabot_security_updates %}, see [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates).

{% ifversion fpt or ghec %}

### Protecting actions you've created

{% data variables.product.prodname_dotcom %} enables collaboration between people who publish and maintain actions and vulnerability reporters in order to promote secure coding. {% data reusables.security-advisory.security-advisory-overview %}

If you are someone who maintains an action that is used in other projects, you can use the following {% data variables.product.prodname_dotcom %} features to enhance the security of the actions you've published.

* Use the dependants view in the Dependency graph to see which projects depend on your code. If you receive a vulnerability report, this will give you an idea of who you need to communicate with about the vulnerability and how to fix it. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#dependents-view).
* Use repository security advisories to create a security advisory, privately collaborate to fix the vulnerability in a temporary private fork, and publish a security advisory to alert your community of the vulnerability once a patch is released. For more information, see [AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/configuring-private-vulnerability-reporting-for-a-repository) and [AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory).

{% endif %}
