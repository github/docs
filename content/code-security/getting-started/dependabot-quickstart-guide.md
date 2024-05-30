---
title: Dependabot quickstart guide
intro: 'You can use {% data variables.product.prodname_dependabot %} to alert you when your repository is using a software dependency with a known vulnerability. This guide will help get you started on enabling {% data variables.product.prodname_dependabot %} for a repository, and exploring reported alerts.'
product: '{% data reusables.gated-features.dependabot-alerts %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: quick_start
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabot quickstart
---

## About {% data variables.product.prodname_dependabot %}

This quickstart guide walks you through setting up and enabling {% data variables.product.prodname_dependabot %}  and viewing {% data variables.product.prodname_dependabot_alerts %} and updates for a repository.

{% data reusables.dependabot.dependabot-overview %}

## Prerequisites

{% ifversion ghes %}
Before you can use the {% data variables.product.prodname_dependabot_alerts %} feature in {% data variables.product.product_name %}, you must ensure that your enterprise administrator enables {% data variables.product.prodname_dependabot %} for the instance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise#enabling-dependabot-alerts)."
{% endif %}

For the purpose of this guide, we're going to use a demo repository to illustrate how {% data variables.product.prodname_dependabot %} finds vulnerabilities in dependencies, where you can see {% data variables.product.prodname_dependabot_alerts %} on {% data variables.product.prodname_dotcom %}, and how you can explore, fix, or dismiss these alerts.

You need to start by forking the demo repository.

1. Navigate to [https://github.com/dependabot/demo](https://github.com/dependabot/demo).
1. At the top of the page, on the right, click **{% octicon "repo-forked" aria-hidden="true" %} Fork**.
1. Select an owner (you can select your {% data variables.product.prodname_dotcom %} personal account) and type a  repository name. For more information about forking repositories, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)."
1. Click **Create fork**.

## Enabling {% data variables.product.prodname_dependabot %} for your repository

You need to follow the steps below on the repository you forked in "[Prerequisites](#prerequisites)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", to the right of {% data variables.product.prodname_dependabot_alerts %}, click **Enable** for {% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dependabot_security_updates %}, and {% data variables.product.prodname_dependabot_version_updates %}.
1. Optionally, if you are interested in experimenting with {% data variables.product.prodname_dependabot_version_updates %}, click **.github/dependabot.yml**. This will create a default `dependabot.yml` configuration file in the `/.github` directory of your repository. To enable {% data variables.product.prodname_dependabot_version_updates %} for your repository, you typically configure this file to suit your needs by editing the default file, and committing your changes. You can refer to the snippet provided in "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#example-dependabotyml-file)" for an example.

{% note %}

**Note:** If the dependency graph is not already enabled for the repository, {% data variables.product.prodname_dotcom %} will enable it automatically when you enable {% data variables.product.prodname_dependabot %}.

{% endnote %}

For more information about configuring each of these {% data variables.product.prodname_dependabot %} features, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)," "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)," and "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."

## Viewing {% data variables.product.prodname_dependabot_alerts %} for your repository

If {% data variables.product.prodname_dependabot_alerts %} are enabled for a repository, you can view {% data variables.product.prodname_dependabot_alerts %} on the "Security" tab for the repository. You can use the forked repository that you enabled {% data variables.product.prodname_dependabot_alerts %} on in the previous section.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Review the open alerts on the {% data variables.product.prodname_dependabot_alerts %} page. By default, the page displays the **Open** tab, listing the open alerts. (You'll be able to view any closed alerts by clicking **Closed**.)

   ![Screenshot showing the list of Dependabot alerts for the demo repository.](/assets/images/help/repository/dependabot-alerts-list-demo-repo.png)

   You can filter {% data variables.product.prodname_dependabot_alerts %} in the list, using a variety of filters or labels. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#prioritizing-dependabot-alerts)."{% ifversion dependabot-auto-triage-rules %} You can also use {% data variables.dependabot.auto_triage_rules %} to filter out false positive alerts or alerts you're not interested in. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules)."{% endif %}

1. Click the "Command Injection in lodash" alert on the `javascript/package-lock.json` file. The details page for the alert will show the following information (note that some information may not apply to all alerts):
   - Whether {% data variables.product.prodname_dependabot %} created a pull request that will fix the vulnerability. You can review the suggested security update by clicking **Review security update**.
   - Package involved
   - Affected versions
   - Patched version
   - Brief description of the vulnerability

   ![Screenshot of the detailed page of an alert in the demo repository, showing the main information.](/assets/images/help/repository/alert-details-page-demo-repo.png)

1. Optionally, you can also explore the information on the right-side of the page. Some of the information shown in the screenshot may not apply to every alert.
   - Severity
   - CVSS metrics—we use CVSS levels to assign severity levels. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database#about-cvss-levels)."
   - Tags
   - Weaknesses—list of CWEs related to the vulnerability, if applicable
   - CVE ID—unique CVE identifier for the vulnerability, if applicable
   - GHSA ID—unique identifier of the corresponding advisory on the {% data variables.product.prodname_advisory_database %}. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database#about-ghsa-ids)."
   - Option to navigate to the advisory on the {% data variables.product.prodname_advisory_database %}
   - Option to see all of your repositories that are affected by this vulnerability
   - Option to suggest improvements for this advisory on the {% data variables.product.prodname_advisory_database %}

   ![Screenshot of the detailed page of an alert in the demo repository, showing the information displayed on the right-side of the page.](/assets/images/help/repository/more-alert-details-demo-repo.png)

For more information about viewing, prioritizing, and sorting {% data variables.product.prodname_dependabot_alerts %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

## Fixing or dismissing a {% data variables.product.prodname_dependabot %} alert

You can fix or dismiss {% data variables.product.prodname_dependabot_alerts %} on {% data variables.product.prodname_dotcom %}. Let's continue to use the forked repository as an example, and the "Command Injection in lodash" alert described in the previous section.

1. Navigate to the {% data variables.product.prodname_dependabot_alerts %} tab for the repository. For more information, see the "[Viewing {% data variables.product.prodname_dependabot_alerts %} for your repository](#viewing-dependabot-alerts-for-your-repository)" section above.
1. Click an alert.
1. Click the "Command Injection in lodash" alert on the `javascript/package-lock.json` file.
1. Review the alert. You can:
   - Review the suggested security update by clicking **Review security update**. This will open the pull request generated by {% data variables.product.prodname_dependabot %} with the security fix.

     ![Screenshot of the pull request generated by {% data variables.product.prodname_dependabot %} to fix the security vulnerability highlighted by the selected alert.](/assets/images/help/repository/dependabot-pull-request-demo-repo.png)

     - On the pull request description, you can click **Commits** to explore the commits included in the pull request.
     - You can also click **{% data variables.product.prodname_dependabot %} commands and options** to learn about the commands that you can use to interact with the pull request.
     - When you're ready to update your dependency and resolve the vulnerability, merge the pull request.
   - If you decide that you want to dismiss the alert
     - Go back to the alert details page.
     - On the top-right corner, click **Dismiss alert**.{% ifversion dependabot-alerts-dismissal-comment %}

       ![Screenshot of the alert details page with the **Dismiss alert** button, dropdown menu options, and dismissal comment box highlighted with a dark orange outline.](/assets/images/help/repository/dismiss-alert-demo-repo.png){% else %}

       ![Screenshot of the alert details page with the **Dismiss alert** button highlighted with a dark orange outline.](/assets/images/enterprise/3.4/repository/dismiss-alert-demo-repo.png){% endif %}

     - Select a reason for dismissing the alert. {% ifversion dependabot-alerts-dismissal-comment %}
     - Optionally, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting.{% endif %}
     - Click **Dismiss alert**. The alert won't appear anymore in the **Open** tab of the alert list, and you are able to view it in the **Closed** tab.

For more information about reviewing and updating {% data variables.product.prodname_dependabot_alerts %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#reviewing-and-fixing-alerts)."

## Troubleshooting

You may need to do some troubleshooting if:
- {% data variables.product.prodname_dependabot %} is blocked from creating a pull request to fix an alert, or
- The information reported by {% data variables.product.prodname_dependabot %} is not what you expect.

For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors)" and "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)," respectively.

## Next steps

For more information about configuring {% data variables.product.prodname_dependabot %} updates, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)" and "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."

For more information about configuring {% data variables.product.prodname_dependabot %} for an organization, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts#managing-dependabot-alerts-for-your-organization).

For more information about viewing pull requests opened by {% data variables.product.prodname_dependabot %}, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#viewing-dependabot-pull-requests)."

For more information about the security advisories that contribute to {% data variables.product.prodname_dependabot_alerts %}, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/browsing-security-advisories-in-the-github-advisory-database)."

For more information about configuring notifications about {% data variables.product.prodname_dependabot_alerts %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."
