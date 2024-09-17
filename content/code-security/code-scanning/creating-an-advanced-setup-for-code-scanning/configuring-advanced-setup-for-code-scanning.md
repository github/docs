---
title: Configuring advanced setup for code scanning
shortTitle: Configure advanced setup
intro: 'You can configure advanced setup for a repository to find security vulnerabilities in your code using a highly customizable {% data variables.product.prodname_code_scanning %} configuration.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with admin permissions to a repository, or the security manager role for the repository, can enable {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
   - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
allowTitleToDifferFromFilename: true
---

{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## About advanced setup for {% data variables.product.prodname_code_scanning %}

Advanced setup for {% data variables.product.prodname_code_scanning %} is helpful when you need to customize your {% data variables.product.prodname_code_scanning %}. By creating and editing a workflow file, you can define how to build compiled languages, choose which queries to run, select the languages to scan, use a matrix build, and more. You also have access to all the options for controlling workflows, for example: changing the scan schedule, defining workflow triggers, specifying specialist runners to use. For more information about {% data variables.product.prodname_actions %} workflows, see "[AUTOTITLE](/actions/using-workflows/about-workflows)."

{% ifversion fpt or ghec %}
You can also configure {% data variables.product.prodname_code_scanning %} with third-party tools. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %} using third-party actions](#configuring-code-scanning-using-third-party-actions)."

{% else %}
Your site administrator can also make third-party actions available to users for {% data variables.product.prodname_code_scanning %}, by setting up {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)."
{% endif %}

{% data reusables.code-scanning.about-multiple-configurations-link %}
{% data reusables.code-scanning.codeql-action-version-ghes %}

If you do not need a highly customizable {% data variables.product.prodname_code_scanning %} configuration, consider using default setup for {% data variables.product.prodname_code_scanning %}. For more information on eligibility for default setup, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#requirements-for-using-default-setup)."

### Prerequisites

Your repository is eligible for advanced setup if it meets these requirements.
* It uses {% data variables.product.prodname_codeql %}-supported languages or you plan to generate code scanning results with a third-party tool.
* {% data variables.product.prodname_actions %} are enabled.{% ifversion fpt %}
* It is publicly visible.{%- elsif ghec %}
* It is publicly visible, or {% data variables.product.prodname_GH_advanced_security %} is enabled.{%- elsif ghes %}
* {% data variables.product.prodname_GH_advanced_security %} is enabled.{% endif %}

{% ifversion ghes %}
If the server on which you are running {% data variables.product.prodname_ghe_server %} is not connected to the internet, your site administrator can enable {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} by making the {% data variables.product.prodname_codeql %} analysis bundle available on the server. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)."
{% endif %}

## Configuring advanced setup for {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}

You can customize your {% data variables.product.prodname_codeql %} analysis by creating and editing a workflow file. Selecting advanced setup generates a basic workflow file for you to customize using standard workflow syntax and specifying options for the {% data variables.product.prodname_codeql %} action. See "[AUTOTITLE](/actions/using-workflows/about-workflows)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."

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

The `on:pull_request` and `on:push` triggers for code scanning are each useful for different purposes. See "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#configuring-frequency)" and "[AUTOTITLE](/actions/using-workflows/triggering-a-workflow)."

For information on bulk enablement, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning-with-codeql-at-scale)."

{% ifversion fpt or ghec %}

## Configuring {% data variables.product.prodname_code_scanning %} using third-party actions

{% data variables.product.product_name %} includes workflow templates for third-party actions, as well as the {% data variables.product.prodname_codeql %} action. Using a workflow template is much easier than writing a workflow unaided.

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. If the repository has already at least one workflow configured and running, click **New workflow** to display workflow templates. If there are currently no workflows configured for the repository, go to the next step.

   ![Screenshot of the Actions tab for a repository. The "New workflow" button is outlined in dark orange.](/assets/images/help/security/actions-new-workflow-button.png)

1. In the "Choose a workflow" or "Get started with {% data variables.product.prodname_actions %}" view, scroll down to the "Security" category and click **Configure** under the workflow you want to configure. You may need to click **View all** to find the security workflow you want to configure.

   ![Screenshot of the Security category of workflow templates. The Configure button and "View all" link are highlighted with an orange outline.](/assets/images/help/security/actions-workflows-security-section.png)

1. Follow any instructions in the workflow to customize it to your needs. For more general assistance about workflows, click **Documentation** on the right pane of the workflow page.

   ![Screenshot showing a workflow template file open for editing. The "Documentation" button is highlighted with an orange outline.](/assets/images/help/security/actions-workflows-documentation.png)

   For more information, see "[AUTOTITLE](/actions/learn-github-actions/using-starter-workflows#choosing-and-using-a-starter-workflow)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."

{% endif %}

## Next steps

After your workflow runs successfully at least once, you are ready to start examining and resolving {% data variables.product.prodname_code_scanning %} alerts. For more information on {% data variables.product.prodname_code_scanning %} alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)" and "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)."

Learn how {% data variables.product.prodname_code_scanning %} runs behave as checks on pull requests, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#about-code-scanning-as-a-pull-request-check)."

You can find detailed information about your {% data variables.product.prodname_code_scanning %} configuration, including timestamps for each scan and the percentage of files scanned, on the tool status page. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page)."

### Further reading

* "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."
* "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#github-actions-notification-options)."
* "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."
* "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/viewing-code-scanning-logs)."
