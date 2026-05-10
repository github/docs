---
title: Responding to a security incident
shortTitle: Respond to a security incident
allowTitleToDifferFromFilename: true
intro: Respond strategically to a security incident affecting organizations or repositories in your {% data variables.product.github %} enterprise.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: tutorials
---

The guidance in this article is aimed at enterprise owners, organization owners, security managers and security teams. However, you will need to have the enterprise owner role to perform several of the actions outlined in this article. Some steps may require coordination with organization owners or repository administrators.

## Introduction

This guide walks you through how to respond to a security incident, outlining the {% data variables.product.github %} surfaces you can use to validate and investigate a threat, and the tools you can use to contain and remediate it.

> [!IMPORTANT] The steps here are general guidelines. Every incident is unique and may require different approaches based on the specific circumstances.
>
> While {% data variables.contact.github_support %} can assist with platform-specific questions, you are best placed to investigate and respond to a security incident affecting your systems and resources.

### Prerequisites

Ideally, you have **audit log streaming** and **source IP address visibility** already enabled for the enterprise (streaming the data to a security information and event management (SIEM) system) and you have access to that data. See [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

### Throughout your response

As you progress through your response, make sure that you:
* **Preserve evidence**: Take screenshots of suspicious activity, export logs or query results, and save copies of affected files or code before cleanup.
* **Keep a record**: Document your findings (for example, times, dates, Indicators of Compromise (IoCs), repositories affected) and record each decision you take.
* **Communicate**: Notify relevant stakeholders (such as security leads and engineering managers, as well as legal and privacy teams if sensitive data is at risk) and keep them updated.

## Step 1: Assess the signal and validate quickly

The goal is to quickly determine whether the signal you're seeing is likely to be a real and active threat.

### 1. Identify

Try to identify the nature of the signal you're seeing. For example, does the signal show indications of:

* **Credential compromise** (alert for a leaked secret, reports of credentials found on an external site)
* **Unauthorized access or account compromise** (reports of suspicious logins, unfamiliar commits or changes)
* **Data exfiltration** (reports of suspicious file changes or additions, unexpected workflow runs, unusual API activity, unknown repository creations, or unexpected repository visibility changes)
* **Malicious code injection** (reports of suspicious code changes, unexpected workflow runs, new files added)
* **Supply chain attack** (reports of suspicious package versions, alerts for vulnerable dependencies)

For help identifying these threat signals across your organization or enterprise, consult [AUTOTITLE](/code-security/reference/security-incident-response/investigation-areas).

We suggest you don't spend too much time on deep inspection in the earlier stages of your investigation, since the initial goal is to **identify** the threat signal in order to **validate** it and strategize your response.

### 2. Validate

Check for evidence to validate that the potential threat is real, and whether or not it's currently active.

The following {% data variables.product.github %} tools and surfaces can help.

| Tool / surface | Purpose |
| --- | --- |
| [Security overview and security alerts](/code-security/reference/security-incident-response/investigation-tools#security-overview-and-security-alerts) | Review security alerts across your organization or enterprise |
| [Audit logs](/code-security/reference/security-incident-response/investigation-tools#audit-logs) | Search for events related to the signal you're investigating, such as token creation, permission changes, or repository visibility changes |
| [Activity view](/code-security/reference/security-incident-response/investigation-tools#activity-view) | View a timeline of pushes, commits, and branch activity for a specific repository |
| [{% data variables.product.github %} code search](/code-security/reference/security-incident-response/investigation-tools#github-code-search) | Search for known indicators of compromise, such as specific filenames or code patterns, across repositories |
| [Dependency graph](/code-security/reference/security-incident-response/investigation-tools#dependency-graph) | Check whether repositories depend on a specific package or package version |
| [Workflow runs and logs](/code-security/reference/security-incident-response/investigation-tools#workflow-runs-and-logs) | Review workflow execution history and inspect log output for suspicious activity |

For details on each tool, see [AUTOTITLE](/code-security/reference/security-incident-response/investigation-tools).

The validation phase can be **quick**:
* Aim to gather enough evidence to determine whether the signal is likely to be a **real** and **active** threat.
* If you can't quickly rule out the signal as a false positive, assume it's real.
* Deep investigation can be performed later.

### 3. Decide

Based on the evidence gathered, determine three things:

1. **Is this a real threat?** If you cannot quickly and confidently rule the signal out as a false positive, treat it as real and proceed to containment.
1. **Is the threat still active?** If the attacker appears to still have access or activity is ongoing, prioritize immediate containment actions first. If the compromise appears historical, you still need to investigate and remediate, but you may have more time to plan your response.
1. **What is the potential scope?** Consider how far the compromise could reach—a single credential, a repository, an organization, or the entire enterprise. This will help you scale your response appropriately.

If in doubt, treat the threat as real, and scale back your response as evidence allows.

## Step 2: Contain the threat

The next step assumes you are dealing with a real and active threat. The goal now is to **immediately reduce ongoing risk** using what you know so far.

There are several containment actions you can choose to perform to limit the attacker's access and capabilities.

>[!IMPORTANT]
> You should base your choice of actions on the nature of the threat, the potential scope, and the evidence you have at this point. We don't recommend taking all of these actions for every incident. Some actions are more disruptive or destructive than others, so you must weigh the risks and benefits of each action based on your assessment of the nature of the threat above.

### Revoke compromised credentials

For exposed or exploited credentials, the most immediate action you can take is to revoke the affected credentials to prevent further misuse.

{% ifversion fpt or ghec or ghes > 3.17 %}
* **Revoke via the API**
  
  If the token is one of the following types, and the literal value of the token is known, you (or anybody) can revoke it by **submitting a request via the REST API**. See [AUTOTITLE](/rest/credentials/revoke?apiVersion=2022-11-28#revoke-a-list-of-credentials).
  
  * {% data variables.product.pat_v1_caps %}
  * {% data variables.product.pat_v2_caps %}{% ifversion fpt or ghec or ghes > 3.20 %}
  * {% data variables.product.prodname_oauth_app %} access token
  * {% data variables.product.prodname_github_app %} user access token
  * {% data variables.product.prodname_github_app %} refresh token{% endif %}
{% endif %}

* **Revocation and containment options**

  There are additional options for blocking credential access. For a full list by credential type, see [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/github-credential-types).

* **Emergency actions (major incident)**

  Enterprise owners on {% data variables.product.prodname_ghe_cloud %} can take bulk emergency actions to lock down access across their enterprise. For enterprises with {% data variables.product.prodname_emus %}, this includes **deleting all user tokens and keys**. These are high-impact actions that will break automations and should be reserved for major incidents. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents).

### Restrict access

To restrict access to the enterprise, organization or repository, there are several immediate actions you can take.

* **Configure IP allowlists**

  Block unknown or suspicious IP addresses from accessing the organization or enterprise. See [AUTOTITLE](/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) (enterprise admins) and [AUTOTITLE](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) (organization owners).

* **Remove compromised or suspicious users**

  Remove the user or suspend the account. See {% ifversion remove-enterprise-members %}[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise) (enterprise admins) and {% endif %}[AUTOTITLE](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization) (organization owners).

* **Change repository visibility to private** 

  Change the affected repository's visibility to private, and restrict the ability of others to make further changes. For example, if sensitive code was exposed in a public repository belonging to the organization, or if a malicious actor changed the repository's visibility setting from private to public, you can change the visibility of the repository. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility) (repository administrators and organization owners) and [AUTOTITLE](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization) (organization owners).

* **Emergency actions (major incident)** 
  
  Enterprise owners on {% data variables.product.prodname_ghe_cloud %} can take bulk emergency actions to lock down access across their enterprise. These include **locking down SSO** to block all non-owner access and **revoking all user SSO authorizations across organizations**. These are high-impact actions that will break automations and should be reserved for major incidents. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents).

### Disable malicious artifacts and activity

* **Stop malicious workflow runs**

  If you suspect that a {% data variables.product.prodname_actions %} workflow or runner is being used as part of an active attack, you can take the following actions:
   * Cancel in-progress workflow runs for an affected repository. See [AUTOTITLE](/actions/how-tos/manage-workflow-runs/cancel-a-workflow-run).
   * Disable {% data variables.product.prodname_actions %} for an affected repository in an organization, or for a specific organization. See [AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization) (organization owners) and [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise) (enterprise administrators).
   * Remove self-hosted runners. See [AUTOTITLE](/actions/how-tos/manage-runners/self-hosted-runners/remove-runners).

* **Disable webhooks**
  
  If you suspect that a compromised repository or organization webhook is being used as a live data exfiltration channel, you can disable it. See [AUTOTITLE](/webhooks/using-webhooks/disabling-webhooks).

* **Delete malicious branches**
  
  If you've identified branches that contain malicious code or workflows, delete them immediately to prevent execution. See [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch).

## Step 3: Investigate fully

After immediate containment, the goal now is to understand the full scope and impact of the incident, identify all IoCs and persistence mechanisms, and gather the evidence you need to contain and fully remediate the threat.

> [!IMPORTANT] Incident response is not a linear process. You may need to iterate between investigation, containment, and remediation as you discover new IoCs or understand more about the attack.

1. Based on the signals you've seen and the evidence gathered so far, develop a **working hypothesis** of what has happened and decide what additional evidence you will need to prove or disprove that hypothesis.
1. Consider the different **investigation areas** outlined in [AUTOTITLE](/code-security/reference/security-incident-response/investigation-areas) to help guide your investigation.
   
   Don't limit your investigation to a single line of inquiry. Many attacks use a combination of techniques, such as malicious package installation combined with credential exploitation, workflow file injections, and data exfiltration. Ensure that you are investigating all potential attack vectors.
1. **Document** all known IoCs so far, searching for traces across all surfaces of {% data variables.product.github %}.
1. **Inventory** all the affected workflows, repositories, and organizations to capture the scope of the incident systematically.
   * Include the repository name, what was affected (code, secrets, workflows), and the timeline of compromise.
   * Create a list of all affected accounts and credentials. Note which tokens, SSH keys, or other credentials may have been exposed or misused.
1. **Validate** your working theory against the evidence.
   * Review the evidence you've gathered. Does it support your initial hypothesis?
   * Consider alternative explanations. Could there be a different cause for the activity you've observed?
   * If your hypothesis is disproved, form a new hypothesis based on the evidence and repeat the investigation steps as needed.
1. **Circle back to containment** if you discover new IoCs or evidence of ongoing activity that requires immediate action.

Once you have high confidence in your understanding of what's happened and the root cause, document your findings and proceed to remediation.

## Step 4: Remediate

The goal now is to remove all traces of compromise, fix the root cause, and restore systems to a secure state. Remediation actions will depend on the exploitation you have faced, but some good practices are as follows.

### Rotate tokens and secrets

Even if you're not certain a credential was compromised, rotate it if there's any possibility of exposure.

* Generate new tokens and secrets to replace any that were revoked or may have been exposed. <!-- Add link here to new credentials reference article (https://github.com/github/docs-internal/pull/59624). "For a full list of credentials to consider, see NEW ARTICLE".-->
* Rotate secrets stored in {% data variables.product.github %} at the repository, environment, and organization levels.
* Update any credentials in external systems that may have been accessed using compromised tokens.
* Consider enabling token expiration policies to encourage regular rotation going forward. See [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).

### Audit for persistence mechanisms

You will need to check for persistence mechanisms that the attacker may have established to maintain access even after your initial containment actions.

This includes, but isn't limited to, checking for things like:
* Suspicious or unfamiliar workflow files that may have been added or modified.
* New webhooks pointing to unfamiliar domains.
* New self-hosted runners.
* Modifications to self-hosted runners.
* Newly installed {% data variables.product.prodname_github_apps %} or {% data variables.product.prodname_oauth_app %} authorizations.
* New deploy keys added to repositories.
* New binary files or executables.

### Audit and reinstall dependencies

Compromised dependencies can serve as an attack vector. Make sure you undertake a full audit of your dependencies and reinstall them from trusted sources.

* Review {% data variables.product.prodname_dependabot %} alerts for vulnerable dependencies and, where available, {% data variables.product.prodname_dependabot_malware_alerts %} for malicious packages. ({% data variables.product.prodname_dependabot_malware_alerts %} are currently available for the npm ecosystem.) To investigate additional malware advisories, search for `type:malware` in the {% data variables.product.prodname_advisory_database %} and audit your dependency graph for matches.
* Pin dependencies to known-good versions or commit SHAs, and reinstall from your package registry.

### Verify remediation

Confirm that your remediation efforts have been successful.

* Review {% data variables.product.prodname_code_scanning %} alerts to confirm that code vulnerabilities have been resolved, and no new vulnerabilities have been introduced.
* Review {% data variables.product.prodname_secret_scanning %} alerts to confirm that no secrets remain exposed in any repositories, and that all alerts have been resolved.
* Continue to review and monitor audit logs and other relevant surfaces in the coming days and weeks post-incident.

## Step 5. Document

Thorough documentation is essential for the remaining phases and for future reference.

* Record all IoCs discovered during the investigation.
* Document all remediation steps taken, including timestamps and who performed each action.
* Maintain inventories of affected repositories, workflows, and accounts.
* Document decisions made and the reasoning behind them.
* Note any compliance, legal, or privacy implications. Consider whether this incident constitutes a data breach that requires notification.

## Step 6: Reflect and harden

The goal now is to learn from the incident and strengthen your security posture to prevent similar incidents.

1. Write an **incident summary**. This should include a timeline of events from first indication to resolution, as well as the root cause analysis, decisions and actions taken, and lessons learned.
1. Track any **outstanding action items** from the security incident as issues, such as remaining remediation tasks and any security improvements that need to be implemented based on lessons learned. {% ifversion copilot %}{% data variables.product.prodname_copilot_short %} can help create these, and you can assign well-scoped issues to {% data variables.product.prodname_copilot_short %} to work on independently. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr#assigning-an-issue-to-copilot).{% endif %}
1. If you don't already have one, ensure your company or team has an up-to-date **Security Incident Response Plan**. This should include defined roles and responsibilities, escalation paths, communication protocols, severity classification criteria, and step-by-step response procedures for common threat types. {% data variables.product.prodname_copilot_short %} can help generate and refine this plan based on your specific needs and resources. For additional guidance, see [What is incident response](https://github.com/resources/articles/what-is-incident-response#what-is-incident-response).

## Next steps

* If you haven't already, consider hardening your security posture to reduce the risk of future incidents. See [AUTOTITLE](/code-security/tutorials/secure-your-organization/protect-against-threats).
