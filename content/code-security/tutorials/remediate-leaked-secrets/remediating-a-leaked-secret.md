---
title: Remediating a leaked secret in your repository
shortTitle: Remediate a leaked secret
allowTitleToDifferFromFilename: true
intro: Learn how to respond effectively to a leaked secret in your {% data variables.product.github %} repository.
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /code-security/secret-scanning/working-with-secret-scanning-and-push-protection/remediating-a-leaked-secret
contentType: tutorials
---

## Introduction

Secrets, such as API keys, tokens and credentials, can pose significant security risks to your team and organization if inadvertently exposed in your codebase or stored improperly.

You should consider any leaked secret to be immediately compromised and it is essential that you undertake proper remediation steps, such as revoking the secret. Simply removing the secret from the codebase, pushing a new commit, or deleting and recreating the repository do not prevent the secret from being exploited.

This tutorial walks you through what to do if you've accidentally committed a secret to your repository, or if you've been alerted to a secret leak in your repository.

### Prerequisites

* You have at least write access to the repository.
* Optional: {% data variables.product.prodname_secret_scanning_caps %} is enabled for the repository.
  > [!NOTE]
  > {% data variables.product.prodname_secret_scanning_caps %} is **free** for public repositories. It is available as part of [{% data variables.product.prodname_GH_secret_protection %}](/get-started/learning-about-github/about-github-advanced-security) for private repositories on {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %} plans.

## Step 1. Identify the secret and gather context

Gather as much information as you can about the leaked secret. This will help you assess the risk and determine the best course of action for remediation.

1. Determine the secret type and its provider.
   * For example, is the secret a {% data variables.product.github %} {% data variables.product.pat_generic %} (PAT), an OpenAI API key, an SSH private key?
1. Locate the repository, file and line that contains the leaked secret.
1. Identify the secret owner. This is the person or team who created, or is responsible for, the secret.
   * Check the `CODEOWNERS` file of the repository to determine the responsible team.
   * Use `git log -S` to help search the commit history of your repository to identify who committed the secret.

> [!TIP]
> If you have {% data variables.product.prodname_secret_scanning %} enabled for your repository, the {% data variables.product.prodname_secret_scanning %} alert can provide you with most of these details.

## Step 2. Assess risk

How you approach remediation will be determined by the risk factors associated with the secret leak.

{% data variables.product.prodname_secret_scanning_caps %} can help you assess the risk associated with an alert, but if you don't yet have {% data variables.product.prodname_secret_scanning %} enabled, you can still perform a risk assessment based on the information available to you.

### Option 1. {% data variables.product.prodname_secret_scanning_caps %} is enabled

Review the {% data variables.product.prodname_secret_scanning %} alert associated with the leak, checking the alert labels and any available metadata:

1. Check the secret's **validity status** to determine if the secret is still active. The alert will include a status that describes whether the secret is active, inactive, or if its validity is unknown.
   > [!NOTE]
   > * Validity checks are only available for certain secret types. To check if your secret type is supported, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#default-patterns).
   > * The secret provider is always the most reliable source of truth for determining the validity of a secret.
1. Check for the `public exposure` label to determine if the secret was leaked in a public repository.
1. Check for the `multiple leaks` label to determine if the secret is exposed in multiple locations.
1. If the secret is a {% data variables.product.github %} PAT, check the **alert metadata** for any information on when the secret was last used and its access scope.
1. Assess which services or applications depend on the secret, and consider the potential for downtime or disruption if you were to immediately revoke the secret.

### Option 2. {% data variables.product.prodname_secret_scanning_caps %} is not enabled

If you don't yet have {% data variables.product.prodname_secret_scanning %} enabled for the repository, perform a risk assessment based on the following:

1. Check the repository's **visibility**. Is the repository public?
1. Look for indications that the secret **has been used recently**. Are there any recent commits or pull requests that reference the secret? Are there any logs or audit trails that show the secret being used?
1. Assess the **file** containing the secret and the **surrounding context**. Is the secret used in a production deployment script (higher risk) or a test file (lower risk)? Is the secret associated with a database credential or admin key (higher risk)?
1. Assess which services or applications depend on the secret, and consider the potential for downtime or disruption if you were to immediately revoke the secret.

{% ifversion secret-risk-assessment %}

> [!TIP]
> Organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} plans can perform a **free** secret risk assessment (an on-demand, point-in-time scan) that evaluates their exposure to leaked secrets. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/about-secret-risk-assessment).

{% endif %}

## Step 3. Strategize remediation

The next step depends on the risk assessment you performed in the previous step.

### Act quickly for high-risk secrets

Automated scanners can locate publicly exposed secrets in minutes. They can be exploited by malicious actors within hours. The longer that an active secret is left exposed, the greater the potential for serious breaches.

If the secret is high risk (that is, the secret is still active, is exposed in a public repository, or is a production credential), we would recommend that you:

1. Prioritize revoking the secret immediately. See [Step 4](#step-4-revoke-the-secret).

   > [!NOTE] If you are concerned about downtime to services, you may want to first generate a new secret with the same permissions, make the application start using the new token, and _then_ revoke the old secret.

1. Communicate with the secret owner (identified in Step 1), repository administrators, and security leads **during or after** revocation.

### Plan for medium to low-risk secrets

If the secret is medium to low risk (that is, the secret is no longer active, is exposed in a private repository, or is a test or development credential), you can plan the remediation strategy accordingly:

1. Using the information gathered in Step 1, locate the responsible team for the secret and alert them to the secret leak.
1. Explain what was leaked and when. Explain that you'll need to revoke the secret, generate a new secret and that affected services will require updating.
1. Inform the repository administrators and security leads about the leak, explaining any remediation actions needed or already taken.
1. Plan a time for revocation and rotation together with the appropriate team to coordinate a smooth transition.

It is important to remediate even medium- to low-risk secrets, as they can still pose a risk to both security and compliance if left exposed.

## Step 4. Revoke the secret

It is not sufficient to simply remove the secret from your codebase. The most important remediation step is revoking the secret with the secret's provider. By revoking the secret, you drastically reduce the potential for the secret to be exploited.

1. Using the information gathered in Step 1, locate the secret provider's website or documentation.
1. Follow the provider's instructions for revoking the secret. This typically involves logging into the provider's portal and navigating to the section where the secret is managed.

   If you lack access to the provider portal, contact the secret owner or relevant repository administrator to get help with revoking the secret.
1. Generate a new secret, if necessary, to replace the revoked secret. This is often required to restore functionality for services that relied on the original secret.

> [!NOTE]
> {% data variables.product.github %} automatically revokes {% data variables.product.github %} {% data variables.product.pat_generic_plural %} (PATs) leaked in public repositories.
>
> For leaked {% data variables.product.github %} PATs in private repositories, you can report the leak to {% data variables.product.github %} directly from within the {% data variables.product.prodname_secret_scanning %} alert by clicking **Report leak**.
>
> For other secret types, if a secret matching one of {% data variables.product.github %}'s supported partner patterns is leaked in a public repository, {% data variables.product.github %} automatically reports the leak to the secret provider, who may immediately revoke the secret.

## Step 5: Identify and update affected services

Next, you need to coordinate updates to all affected services using the leaked secret and update them with the new secret.

### Identify

1. Use {% data variables.product.github %}'s code search to check all code, issues, and pull requests for the secret.
   * Search across your organization using `org:YOUR-ORG "SECRET-STRING"`.
   * Search your repository using `repo:YOUR-REPO "SECRET-STRING"`.
1. Check the repository's stored deploy keys and secrets and variables.
   * Click "Settings," then under "Security," click **Secrets and variables** or **Deploy keys**.
1. Check for any installed {% data variables.product.prodname_github_apps %} and integrations that may use the secret.

### Coordinate

1. Instruct {% data variables.product.prodname_copilot_short %} to create issues (and sub-issues) for each task involved in updating an affected service. {% ifversion fpt or ghec %} See [AUTOTITLE](/copilot/how-tos/github-flow/using-github-copilot-to-create-issues).{% endif %}
1. If multiple stakeholders are involved, create a project board for the issues to track progress and facilitate communication.

### Update and verify

1. Update your application with the new secret, ensuring that your application properly uses the new credential.
   > [!TIP] A safe way of providing sensitive credentials to your application is through a vault. For example, you can make sensitive credentials available to {% data variables.product.github %} actions and workflows through the "Secrets and variables" store under your repository's settings page.
1. Test affected services to ensure they are functioning correctly with the new secret.

## Step 6. Check for unauthorized access

Once services are back up and running, it's important to check for any unauthorized access that may have occurred while the secret was exposed.

1. Review {% data variables.product.github %}'s audit logs for events relating to the secret and its usage.
   * Security log for your personal account. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log).
   * Audit log for your organization. See [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization).
   * Audit log for your enterprise. See [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).

   For the organization- and enterprise-level audit logs, you can specifically search for events related to an access token. See [AUTOTITLE](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/identifying-audit-log-events-performed-by-an-access-token) (organizations) and [AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token) (enterprises).

   Access to {% data variables.product.github %}'s audit logs depends on your role, so you may need to contact an organization owner or enterprise administrator if you don't have the necessary permissions.
1. Review the secret provider's audit logs.
   * For example, for Amazon Web Services (AWS) secrets, you can check the CloudTrail logs for any unauthorized access attempts using the leaked secret. See [What Is AWS CloudTrail?](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) in the AWS CloudTrail documentation.

## Step 7. Clean the repository

Although you've now revoked and updated the secret in your codebase, the secret may still exist in your repository's commit history. Ideally, you should search for and remove all instances of the secret from your repository.

However, cleaning Git history can be a destructive and disruptive process, as it may involve force pushing changes to the repository.

Together with your repository's security leads, consider carefully the effects of cleaning the repository's history against your compliance or security obligations. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#side-effects-of-rewriting-history).

## Step 8. Resolve the alert

1. Close the {% data variables.product.prodname_secret_scanning %} alert in the repository by selecting **Close as** and marking the alert as "Revoked."
1. Document the incident in your team's knowledge base or incident management system, including the steps taken to remediate the leak and any lessons learned.

## Step 9. Prevent further leaks

Dealing with secret leaks is often disruptive, complicated, and time-consuming. The focus for secret handling should always be on **preventing leaks** at all costs:

1. Ensure that push protection (part of {% data variables.product.prodname_GH_secret_protection %}) is enabled for the repository, if it's not already. Explore implementing strict bypass controls, so that only trusted users can bypass push protection. See [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection).
1. Ensure you have "Push protection for users" enabled on your personal account, which protects you from accidentally pushing supported secrets to _any_ public repository.
1. Advocate for, or implement, best practices for secret management within your team or organization:
   * Use environment variables to store secrets instead of hardcoding them in the codebase.
   * Use secret management tools like {% data variables.product.github %}'s "Secrets and variables" store under your repository's settings page to securely store and manage secrets.
   * Regularly rotate secrets to minimize the impact of any potential leaks.
1. Document incidents and remediation steps to help your team learn from past mistakes and improve future practices.
1. Advocate for, and undertake, regular learning and security training. See, for example, [{% data variables.product.github %} Advanced Security](https://learn.microsoft.com/en-us/training/paths/github-advanced-security/) course from Microsoft Learn.

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)
* [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection)
* [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns)
* [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)
