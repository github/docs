---
title: Configuring {% ifversion code-scanning-without-workflow %}advanced setup for {% endif %}code scanning
shortTitle: Configure {% ifversion code-scanning-without-workflow %}advanced setup{% else %}{% data variables.product.prodname_code_scanning %}{% endif %}
intro: 'You can configure {% ifversion code-scanning-without-workflow %}advanced setup{% else %}{% data variables.product.prodname_code_scanning %}{% endif %} for a repository to find security vulnerabilities in your code{% ifversion code-scanning-without-workflow %} using a highly customizable {% data variables.product.prodname_code_scanning %} configuration{% endif %}.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with admin permissions to a repository, or the security manager role for the repository, can configure {% data variables.product.prodname_code_scanning %} for that repository. People with write permissions to a repository can also configure {% data variables.product.prodname_code_scanning %}, but only by creating a workflow file or manually uploading a SARIF file.'
redirect_from:
   - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
allowTitleToDifferFromFilename: true
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## About {% ifversion code-scanning-without-workflow %}advanced setup for {% endif %}{% data variables.product.prodname_code_scanning %}

{% ifversion code-scanning-without-workflow %}
Advanced setup for {% data variables.product.prodname_code_scanning %} is helpful when you need more granular control over your {% data variables.product.prodname_code_scanning %} configuration. By creating and editing a {% data variables.product.prodname_codeql %} workflow file, you can change the scan schedule, scan any {% data variables.product.prodname_codeql %}-supported language, use a matrix build, and more.

{% else %}
{% data variables.product.prodname_code_scanning_caps %} helps you catch vulnerabilities in the code in your repository. With {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, you can select custom or built-in query suites for use in your analysis, set a specific scan schedule, choose which events trigger a scan, and more.
{% endif %}

You can also configure {% data variables.product.prodname_code_scanning %} with third-party tools. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %} using third-party actions](#configuring-code-scanning-using-third-party-actions)."

{% data reusables.code-scanning.about-multiple-configurations-link %}
{% data reusables.code-scanning.codeql-action-version-ghes %}

{% ifversion code-scanning-without-workflow %}
If you do not need a highly customizable {% data variables.product.prodname_code_scanning %} configuration, consider using default setup for {% data variables.product.prodname_code_scanning %}. For more information on eligibility for default setup, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#requirements-for-using-default-setup)."
{% endif %}

### Prerequisites

Your repository is eligible for {% ifversion code-scanning-without-workflow %}advanced setup{% else %}{% data variables.product.prodname_code_scanning %}{% endif %} if:
- it uses {% data variables.product.prodname_codeql %}-supported languages or you plan to generate code scanning results with a third-party tool.
- {% data variables.product.prodname_actions %} are enabled.{% ifversion fpt %}
- it is publicly visible.{%- elsif ghec %}
- it is publicly visible, or {% data variables.product.prodname_GH_advanced_security %} is enabled.{%- elsif ghes or ghae %}
- {% data variables.product.prodname_GH_advanced_security %} is enabled.{% endif %}

{% ifversion ghae %}
Before configuring {% data variables.product.prodname_code_scanning %} for a repository, you must ensure that there is at least one self-hosted {% data variables.product.prodname_actions %} runner available to the repository.

Enterprise owners, organization and repository administrators can add self-hosted runners. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."
{% endif %}

{% ifversion ghes %}
If the server on which you are running {% data variables.product.prodname_ghe_server %} is not connected to the internet, your site administrator can enable {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} by making the {% data variables.product.prodname_codeql %} analysis bundle available on the server. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)."
{% endif %}

{% ifversion code-scanning-without-workflow %}

## Configuring advanced setup for a repository

Advanced setup for {% data variables.product.prodname_code_scanning %} is helpful when you need to customize your {% data variables.product.prodname_code_scanning %}. By creating and editing a workflow file, you can choose which queries to run, change the scan schedule, select the languages to scan, use a matrix build, and more.

### Configuring advanced setup for {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}

You can customize your {% data variables.product.prodname_code_scanning %} by creating and editing a workflow file. Selecting advanced setup generates a basic workflow file for you to customize.

{% data reusables.code-scanning.billing %}

{% ifversion fpt %}
  {% note %}

  **Note:** You can configure {% data variables.product.prodname_code_scanning %} for any public repository where you have write access.

  {% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. Scroll down to the "{% data variables.product.prodname_code_scanning_caps %}" section, select **Set up** {% octicon "triangle-down" aria-hidden="true" %}, then click **Advanced**.

   {% note %}

   **Note:** If you are switching from default setup to advanced setup, in the "{% data variables.product.prodname_code_scanning_caps %}" section, select {% octicon "kebab-horizontal" aria-label="Menu" %}, then click {% octicon "workflow" aria-hidden="true" %} **Switch to advanced**. In the pop-up window that appears, click **Disable {% data variables.product.prodname_codeql %}**.

   {% endnote %}

   ![Screenshot of the "{% data variables.product.prodname_code_scanning_caps %}" section of "Code security and analysis" settings. The "Advanced setup" button is highlighted with an orange outline.](/assets/images/help/security/advanced-code-scanning-setup.png)

1. To customize how {% data variables.product.prodname_code_scanning %} scans your code, edit the workflow.

   Generally, you can commit the {% data variables.code-scanning.codeql_workflow %} without making any changes to it. However, many of the third-party workflows require additional configuration, so read the comments in the workflow before committing.

   For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages)."

1. Click **Commit changes...** to display the commit changes form.

   ![Screenshot of the form to create a new file. To the right of the file name, a green button, labeled "Commit changes...", is outlined in dark orange.](/assets/images/help/repository/start-commit-commit-new-file.png)
1. In the commit message field, type a commit message.
1. Choose whether you'd like to commit directly to the default branch, or create a new branch and start a pull request.
1. Click **Commit new file** to commit the workflow file to the default branch or click **Propose new file** to commit the file to a new branch.
1. If you created a new branch, click **Create pull request** and open a pull request to merge your change into the default branch.

In the suggested {% data variables.code-scanning.codeql_workflow %}, {% data variables.product.prodname_code_scanning %} is configured to analyze your code each time you either push a change to the default branch or any protected branches, or raise a pull request against the default branch. As a result, {% data variables.product.prodname_code_scanning %} will now commence.

The `on:pull_request` and `on:push` triggers for code scanning are each useful for different purposes. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#configuring-frequency)."

{% else %}

## Configuring {% data variables.product.prodname_code_scanning %} using the {% data variables.product.prodname_codeql %} action

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. To the right of "{% data variables.product.prodname_code_scanning_caps %} alerts", click **Set up {% data variables.product.prodname_code_scanning %}**.{% ifversion ghec or ghes or ghae %} If "{% data variables.product.prodname_code_scanning %} alerts" is missing, you need to ask an organization owner or repository administrator to enable {% data variables.product.prodname_GH_advanced_security %}.{% endif %} For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)" or "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."
1. Under "Get started with {% data variables.product.prodname_code_scanning %}", click **Set up this workflow** on the {% data variables.code-scanning.codeql_workflow %} or on a third-party workflow.

   Workflows are only displayed if they are relevant for the programming languages detected in the repository. The {% data variables.code-scanning.codeql_workflow %} is always displayed, but the "Set up this workflow" button is only enabled if {% data variables.product.prodname_codeql %} analysis supports the languages present in the repository.

1. To customize how {% data variables.product.prodname_code_scanning %} scans your code, edit the workflow.

   Generally, you can commit the {% data variables.code-scanning.codeql_workflow %} without making any changes to it. However, many of the third-party workflows require additional configuration, so read the comments in the workflow before committing.

   For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages)."

1. Click **Commit changes...** to display the commit changes form.

   ![Screenshot of the form to create a new file. To the right of the file name, a green button, labeled "Commit changes...", is outlined in dark orange.](/assets/images/help/repository/start-commit-commit-new-file.png)
1. In the commit message field, type a commit message.
1. Choose whether you'd like to commit directly to the default branch, or create a new branch and start a pull request.
1. Click **Commit new file** or **Propose new file**.

In the suggested {% data variables.code-scanning.codeql_workflow %}, {% data variables.product.prodname_code_scanning %} is configured to analyze your code each time you either push a change to the default branch or any protected branches, or raise a pull request against the default branch. As a result, {% data variables.product.prodname_code_scanning %} will now commence.

The `on:pull_request` and `on:push` triggers for code scanning are each useful for different purposes. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#configuring-frequency)."

{% endif %}

For information on bulk enablement, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning-with-codeql-at-scale)."

{% ifversion fpt or ghec %}

### Configuring {% data variables.product.prodname_code_scanning %} using third-party actions

{% data reusables.advanced-security.starter-workflows-beta %}

{% data reusables.advanced-security.starter-workflow-overview %}

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. If the repository has already at least one workflow configured and running, click **New workflow** to display starter workflows. If there are currently no workflows configured for the repository, go to the next step.

   ![Screenshot of the Actions tab for a repository. The "New workflow" button is outlined in dark orange.](/assets/images/help/security/actions-new-workflow-button.png)

1. In the "Choose a workflow" or "Get started with {% data variables.product.prodname_actions %}" view, scroll down to the "Security" category and click **Configure** under the workflow you want to configure. You may need to click **View all** to find the security workflow you want to configure.

   ![Screenshot of the Security category of starter workflows. The Configure button and "View all" link are highlighted with an orange outline.](/assets/images/help/security/actions-workflows-security-section.png)

1. Follow any instructions in the workflow to customize it to your needs. For more general assistance about workflows, click **Documentation** on the right pane of the workflow page.

   ![Screenshot showing a starter workflow file open for editing. The "Documentation" button is highlighted with an orange outline.](/assets/images/help/security/actions-workflows-documentation.png)

   For more information, see "[AUTOTITLE](/actions/learn-github-actions/using-starter-workflows#choosing-and-using-a-starter-workflow)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."

{% endif %}

## Next steps

After configuring {% data variables.product.prodname_code_scanning %}, and allowing its actions to complete, you can:

- View all of the {% data variables.product.prodname_code_scanning %} alerts generated for this repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)."
- View any alerts generated for a pull request submitted after you configure {% data variables.product.prodname_code_scanning %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."
- Configure notifications for completed runs. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#github-actions-notification-options)."
- Learn about {% data variables.product.prodname_code_scanning %} checks on pull requests. For more information, "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#about-code-scanning-as-a-pull-request-check)."
- View the logs generated by the {% data variables.product.prodname_code_scanning %} analysis. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/viewing-code-scanning-logs)."
- Investigate any problems that occur with the initial configuration of {% data variables.product.prodname_code_scanning %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning)."
- Customize how {% data variables.product.prodname_code_scanning %} scans the code in your repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."
