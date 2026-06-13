---
title: Common security incident investigation areas
shortTitle: Investigation areas
allowTitleToDifferFromFilename: true
intro: 'Reference for investigating security incidents across multiple attack vectors, including the key surfaces and tools to check on {% data variables.product.github %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: reference
---

This reference article shows you which {% data variables.product.github %} tools to use and which {% data variables.product.github %} surfaces to check when you're responding to a security incident. Use this article to guide your investigation across major threat categories.

For full guidance on how to respond to a security incident, including **containment strategies**, see [AUTOTITLE](/code-security/tutorials/secure-your-organization/responding-to-security-incidents).

> [!IMPORTANT]
> The availability of each tool (and the data it provides) varies by {% data variables.product.github %} plan, role, permissions, feature enablement, and pre-incident configuration (for example, audit log streaming and IP address disclosure require prior set up). For more information, see [AUTOTITLE](/code-security/reference/security-incident-response/investigation-tools).
>
> Be aware that real-world security incidents rarely involve a single attack vector. A credential compromise may lead to malicious code injection, which may enable data exfiltration. As you investigate a threat signal, be prepared to move into other investigation areas, and to loop through containment, deeper investigation and remediation as you uncover new indicators of compromise and as your understanding of the threat model evolves.

## Exposed or compromised credentials

This section may apply when:

You suspect a token or key has been stolen or exploited, received a {% data variables.product.prodname_secret_scanning %} alert, or found credentials exposed in code, logs or a public repository.

### What to check

* Search the audit log for:
  * Actions taken by the compromised token, by searching for all events associated with that token. See [AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).
  * Actions taken by unexpected actors or unknown IP addresses (if IP address disclosure is enabled).
* Review {% data variables.product.prodname_secret_scanning %} alerts for relevant findings to assess a leaked secret's location, exposure and validity.
* Use security overview for your enterprise or organization to identify trends or activity across repositories.
* Use {% data variables.product.github %} code search to check for secrets exposed in code, `.env` files, or configuration files across repositories.

### Key tools

| Tool | Purpose |
| --- | --- |
| [Audit log](/code-security/reference/security-incident-response/investigation-tools#audit-logs) | Trace token usage |
| [Security overview](/code-security/reference/security-incident-response/investigation-tools#security-overview) | View organization- or enterprise-level security alerts and activity, particularly {% data variables.product.prodname_secret_scanning %} alerts |
| [{% data variables.product.github %} code search](/code-security/reference/security-incident-response/investigation-tools#github-code-search) | Search for exposed credentials in code |

### Key resources

* [Containment actions](/code-security/tutorials/secure-your-organization/responding-to-security-incidents#step-2-contain-the-threat){% ifversion ghec %}
* [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/identifying-audit-log-events-performed-by-an-access-token) (organizations)
* [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token) (enterprises){% endif %}
* [AUTOTITLE](/code-security/tutorials/remediate-leaked-secrets/remediating-a-leaked-secret)

## Unauthorized access and account compromise

This section may apply when:

You noticed unusual login activity, saw unexpected commits or changes, or detected suspicious account behavior.

### What to check

* Search the audit log for **member access, permissions, or role changes**. For example, look for events such as `org.add_member`, `repo.add_member`, `org.add_outside_collaborator`, `org.update_member`, `repo.update_member`, `role.create`, `role.update`.
* For any suspicious events in the audit log, **identify the actor**. Check if the actor is an unknown user, a potentially compromised account, or an unrecognized app.
* If you have IP address visibility enabled, **check if the IP address** associated with unusual events or suspicious activity is recognized.
* Search the audit log for events relating to **newly created deploy keys or apps,** for example `public_key.create`, `integration_installation.create`.
* Review the audit log for **unexpected repository changes**, such as new public repositories or repository visibility changes (private to public), for example `repo.create`, `repo.access`.
* Use the activity view (repository-level) to **build a timeline of recent pushes**. Look for pushes from unexpected actors, force pushes, or unusual branch names.

### Key tools

| Tool | Purpose |
| --- | --- |
| [Audit logs](/code-security/reference/security-incident-response/investigation-tools#audit-logs) | Search and cross-check actions, actors and IP addresses |
| [Activity view](/code-security/reference/security-incident-response/investigation-tools#activity-view) | Review activity for specific repositories |

### Key resources

* [Containment actions](/code-security/tutorials/secure-your-organization/responding-to-security-incidents#step-2-contain-the-threat)

## Data exfiltration

This section may apply when:

You detected large downloads, unusual API activity, or received reports of your data appearing externally.

### What to check

* Search audit logs for high-volume git operations (`git.clone`, `git.fetch`) or API requests, particularly from an unfamiliar actor (`actor`) or IP address (if IP address visibility is enabled), that indicate bulk data collection.
  * Note that Git events in the audit log have special access requirements and retention policies that differ from other audit log events. For {% data variables.product.prodname_ghe_cloud %}, you can access Git events via the REST API and data is retained for seven days, unless you are streaming the audit log. For {% data variables.product.prodname_ghe_server %}, Git events must be enabled in the audit log configuration and are not included in search results.
  * Similarly, capturing API activity in the audit logs requires prior configuration and is not available by default.
* Check the audit logs for repository replication or exposure events, for example, repository visibility changes (from private to public), unexpected new repositories being created (such as new public repositories) or repositories being renamed or transferred (`repo.create`, `repo.access` (visibility changes), `repo.rename`, `repo.transfer`).
* Check for outbound mechanisms, for example webhooks being created or updated (`hook.create` or similar events in the audit logs), and check if any webhook points to an unrecognized domain.

### Key tools

| Tool | Purpose |
| --- | --- |
| [Audit logs](/code-security/reference/security-incident-response/investigation-tools#audit-logs) | Search for relevant actions |

### Key resources

* [Containment actions](/code-security/tutorials/secure-your-organization/responding-to-security-incidents#step-2-contain-the-threat)

## Malicious code and workflow changes

This section may apply when:

You found suspicious code in your repository, a security researcher reported an issue, or you noticed unexpected workflow behavior.

### What to check

* Review the **Actions** tab for unexpected workflow runs, especially those triggered by unfamiliar users or at unusual times.
* Inspect workflow run logs for suspicious output.
* Use {% data variables.product.github %} code search to find suspicious files or code additions, particularly in workflow files (`.github/workflows/`), shell scripts, or configuration files.
* Use the Activity view to check for pushes to unusual branch names, force pushes, pushes from unexpected actors.
* Check the audit logs for changes to security settings or disablement actions (look for events like `repository_ruleset.destroy`, `repository_secret_scanning_push_protection.disable`, or other `.delete`, `.disable`, `.destroy` events).
* Check the audit logs for events relating to new self-hosted runners being added (for example, `org.register_self_hosted_runner`, `repo.register_self_hosted_runner` events).
* Check for {% data variables.product.prodname_dependabot_alerts %} or the [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories) for advisories related to {% data variables.product.prodname_actions %} used in your workflows.

### Key tools

| Tool | Purpose |
| --- | --- |
| [Workflow runs and logs](/code-security/reference/security-incident-response/investigation-tools#workflow-runs-and-logs) | Review workflow execution and inspect log output |
| [Activity view](/code-security/reference/security-incident-response/investigation-tools#activity-view) | Identify unexpected pushes, force pushes, or pushes from unfamiliar actors |
| [{% data variables.product.github %} code search](/code-security/reference/security-incident-response/investigation-tools#github-code-search) | Search for suspicious code patterns |
| [Audit logs](/code-security/reference/security-incident-response/investigation-tools#audit-logs) | Filter by action to find security setting changes |

### Key resources

* [Containment actions](/code-security/tutorials/secure-your-organization/responding-to-security-incidents#step-2-contain-the-threat)

## Malware and supply chain attacks

This section may apply when:

You received a malware or dependency alert, suspect a malicious package, or noticed unexpected dependencies in your projects.

### What to check

* Check for a {% data variables.product.prodname_dependabot %} malware alert, which can tell you details about the malicious package (such package name, affected versions, and the patched version), as well as remediation steps. Currently supported for packages in the `npm` ecosystem only.
* Search the [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories) to see if {% data variables.product.github %} is reporting advisories for dependencies (or dependency versions) that your projects are using. For malware specifically, search `type:malware` in the advisory database.
* Use {% data variables.product.github %} code search to search for references to the suspected package or action across your organization.
* Review the dependency graph for your repositories to identify any new or unexpected dependencies.
* Use activity view and check commit history to review recent changes to dependency manifests or lockfiles (for example, `package.json`, `package-lock.json`, `Gemfile.lock`). Check blame views and pull requests to identify who introduced the changes and whether they were reviewed.
* Review recently created security alerts in your organization's security overview.

### Key tools

| Tool | Purpose |
| --- | --- |
| [{% data variables.product.github %} code search](/code-security/reference/security-incident-response/investigation-tools#github-code-search)| Search for references to the suspected package or Action |
| [Dependency graph](/code-security/reference/security-incident-response/investigation-tools#dependency-graph) | Visualize and review dependencies |
| [{% data variables.product.prodname_dependabot %} alerts](/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/viewing-and-updating-dependabot-alerts) | Review for alerts relating to vulnerable dependencies |
| [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories)| Search for `type:malware` |
| [Activity view](/code-security/reference/security-incident-response/investigation-tools#activity-view) | Review recent pushes to repositories |
| [Security overview](/code-security/reference/security-incident-response/investigation-tools#security-overview) | Review recent security alerts across an organization or enterprise |

### Key resources

* [Containment actions](/code-security/tutorials/secure-your-organization/responding-to-security-incidents#step-2-contain-the-threat)

## Further reading

* [AUTOTITLE](/code-security/tutorials/secure-your-organization/responding-to-security-incidents)
* [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)
* [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)