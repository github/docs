---
title: Investigation tools for security incidents
shortTitle: Investigation tools
allowTitleToDifferFromFilename: true
intro: 'The core {% data variables.product.github %} tools you can use to investigate security incidents, what each tool is best used for, and common considerations that affect what data is available.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: reference
---

Use this reference to decide which {% data variables.product.github %} tools to use during a security investigation, what questions each tool can answer, and what factors may affect the data you can see.

> [!NOTE]
> The availability of each tool (and the data it provides) varies by {% data variables.product.github %} plan, your role and permissions, feature enablement, and pre-incident configuration (for example, audit log streaming and IP address disclosure require prior set up).

## Activity view

### Use

* Get an **overview of activity** in a specific repository, including merges, pushes, force pushes, branch creations and deletions, attributed to specific actors over a defined period.
* Correlate suspicious code appearances with **related pushes or merges**.
* Answer questions about **when** a change was made, **who** made it, **in which branch**, and explore the diff or commit history.

#### Permissions

Read access to the repository.

### Key resources

* [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/using-the-activity-view-to-see-changes-to-a-repository)

### Notes and limitations

* Activity view is best used as an initial navigation and correlation surface; it doesn't have the same completeness or query power as raw audit log exports.
* Some incidents require correlation across repositories or organizations, which may be easier in the audit log.

## Audit logs

### Use

* Answer questions about **what's changed**, **when**, and **by whom** across an enterprise or organization.
* Investigate events that may have enabled compromise, or indicate it, such as changes to membership, roles, permissions, or the generation or use of access tokens, etc.
* Attribute security-relevant actions to an actor (user or integration) and build an investigation timeline.
* Filter by actor, action, IP address (if enabled), or token, to identify suspicious activity or trace token usage.
* Correlate activity across multiple repositories or organizations.

#### Permissions

* To view the organization audit log, you need to be an organization owner.
* To view the enterprise audit log, you need to be an enterprise administrator.
* To view the security log (personal account), you need to be the account owner.
* To view audit log data exported to an external Security Information and Event Management (SIEM) system, log management system or other tools and services, you need access to that system.

### Key resources

* [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)
* [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization)
* [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/security-log-events){% ifversion ghec %}
* [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/identifying-audit-log-events-performed-by-an-access-token){% endif %}

### Notes and limitations

* {% data variables.product.github %} provides three audit logs: **enterprise**, **organization**, and user **security logs**.
* The {% data variables.product.github %} audit log UI has **limited filtering and search** capabilities. For this reason, we recommend that enterprises **stream** the enterprise audit log to an external SIEM or log management system for more advanced querying.
  * Audit log streaming to an external SIEM or log management system requires prior configuration. See [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).
   * Without audit log streaming, you won't be able to run more complex queries, such as correlating events across organizations or repositories, or pivoting from a specific token to all related events.
   * Git events data are included in the stream.
* We recommend streaming **API request events**; this requires prior configuration. See [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#enabling-audit-log-streaming-of-api-requests).
* For enterprises on {% data variables.product.prodname_ghe_cloud %}, we recommend displaying **IP addresses** in the audit logs; this requires prior configuration. See [AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise).
* Different {% data variables.product.github %} plans have different data availability and data retention offerings:
   * {% data variables.product.prodname_free_team %} and {% data variables.product.prodname_team %} plans can't view API activity or Git events at all.
   * Standalone organizations (organizations that are not part of an enterprise) can't stream the audit logs, can't view API request events, and are limited to 7 days for Git event data.
   * For enterprises on {% data variables.product.prodname_ghe_cloud %}:
      * If your enterprise uses **{% data variables.product.prodname_emus %}**, then the audit log also includes user **security logs** (events related to user accounts, such as login activity and token usage).
      * If your enterprise _doesn't use_ {% data variables.product.prodname_emus %}, then the {% data variables.product.github %} audit log only includes events related to the enterprise account and the organizations within it.
* The audit logs **don't** include page view or repository browsing telemetry.

## Dependency graph

### Use

* Check whether a repository depends on a **vulnerable or compromised package** (or version).
* Review for **new or suspicious dependencies** that may have been introduced during an incident.
* Filter and explore dependencies by ecosystem or relationship (direct or transitive).
* Export a software bill of materials (SBOM) for auditing purposes, or to preserve evidence.

#### Permissions

* Write or maintain access to the repository.

### Key resources

* [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/exploring-the-dependencies-of-a-repository)
* [AUTOTITLE](/code-security/reference/supply-chain-security/dependency-graph-supported-package-ecosystems)
* [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/exporting-a-software-bill-of-materials-for-your-repository)

### Notes and limitations

* The dependency graph is generated from supported manifest/lock files (and optional build-time submissions), so it can be incomplete or differ from what was actually built and deployed. To get the most accurate view, especially for dependencies resolved during CI/build, you should be supplementing the dependency graph with build-time dependency submission (or other build provenance such as SBOMs).

## {% data variables.product.github %} code search

### Use

* Search for Indicators of Compromise (IoCs) across repositories, such as known malicious workflows or package names.
* Quickly scope the potential blast radius by checking if suspicious code patterns, such as a leaked secret or malicious code snippet, appear in other repositories across the organization or enterprise.
* Scope the search by various different qualifiers that may be useful during an incident, for example:
   * Search within a specific repository, organization, or enterprise (using the `repo:`, `org:`, `enterprise:` qualifiers).
   * Search within specific file paths (`path:.github/workflows repo:ORG-NAME/REPO-NAME`).

#### Permissions required

* To search across public repositories, you must be signed into your {% data variables.product.github %} account.
* To search across private repositories, you must have read access to those repositories.

### Key resources

{% ifversion fpt or ghec %}
* [AUTOTITLE](/search-github/github-code-search/using-github-code-search)
* [AUTOTITLE](/search-github/github-code-search/understanding-github-code-search-syntax){% elsif ghes %}
* [AUTOTITLE](/search-github/searching-on-github/searching-code){% endif %}

### Notes and limitations

* Supports regex search.
* Searches across the default branch of a repository only. If the suspicious code was introduced in a non-default branch and hasn't been merged, it won't be found by code search.
* You can use code search to determine if a pattern or IoC is present, but it doesn't provide context such as when the code was added or by whom. You should use code search in conjunction with other tools, such as audit logs, activity view, or checking the blame view, commit history and pull request history of a repository.

## Security overview and security alerts

### Use

* See a high-level view of all security alerts ({% data variables.product.prodname_secret_scanning %}, {% data variables.product.prodname_code_scanning %}, and {% data variables.product.prodname_dependabot %} alerts) across repositories in an organization or enterprise.
* Triage what {% data variables.product.github %} has already detected and identify which repositories are affected.
* Track new alerts created during an incident (which can indicate active exploitation or spread).

#### Permissions required

* To see data for organizations at the enterprise-level, an enterprise administrator must have the organization owner or security manager role in the relevant organizations.
* To see data for repositories at the organization-level, the organization owner or security manager role is required.

### Key resources

* [AUTOTITLE](/code-security/concepts/security-at-scale/about-security-overview)
* [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-security-insights#viewing-the-security-overview-dashboard-for-your-organization)

### Notes and limitations

* Alerts for leaked secrets, vulnerable code, vulnerable dependencies and malware are only visible if the relevant features were enabled and configured prior to the incident.

## Workflow runs and logs

### Use

* Confirm what executed in CI/CD at a given time (such as the commands executed, or the dependency installed).
* Investigate suspicious workflow runs, such as those triggered by an unfamiliar user or at an unusual time, to see what actions were performed, which secrets were accessed, and what code was executed.
* Determine whether a workflow had access to any secrets.

#### Permissions required

* Read access to the repository.

### Key resources

* [AUTOTITLE](/actions/how-tos/monitor-workflows/view-workflow-run-history)
* [AUTOTITLE](/actions/how-tos/monitor-workflows/use-workflow-run-logs)

### Notes and limitations

* {% data variables.product.github %} automatically redacts secrets from workflow logs.
* By default, workflow logs are retained by {% data variables.product.github %} for 90 days, but you can configure this retention period to be longer (up to 400 days for private repositories).
