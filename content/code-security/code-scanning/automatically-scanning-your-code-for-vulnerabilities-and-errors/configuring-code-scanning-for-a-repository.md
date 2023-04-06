---
title: Configuring code scanning for a repository
shortTitle: Configure code scanning
intro: 'You can configure {% data variables.product.prodname_code_scanning %} for a repository to find security vulnerabilities in your code.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with admin permissions to a repository, or the security manager role for the repository, can configure {% data variables.product.prodname_code_scanning %} for that repository.  People with write permissions to a repository can also configure {% data variables.product.prodname_code_scanning %}, but only by creating a workflow file or manually uploading a SARIF file.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/configuring-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
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
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Options for configuring {% data variables.product.prodname_code_scanning %}

You decide how to generate {% data variables.product.prodname_code_scanning %} alerts, and which tools to use, at a repository level. {% data variables.product.product_name %} provides fully integrated support for {% data variables.product.prodname_codeql %} analysis, and also supports analysis using third-party tools. For more information, see the following bullets and "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning#about-tools-for-code-scanning)."

{% data reusables.code-scanning.enabling-options %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %}
{% data reusables.code-scanning.about-multiple-configurations-link %}
{% endif %}

{% data reusables.code-scanning.codeql-action-version-ghes %}

{% ifversion code-scanning-tool-status-page %}

The {% data variables.code-scanning.tool_status_page %} shows useful information about all of your code scanning tools. If code scanning is not working as you'd expect, the {% data variables.code-scanning.tool_status_page %} is a good starting point for debugging problems. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-the-tool-status-page)".

{% endif %}

{% ifversion ghae %}
## Prerequisites

Before configuring {% data variables.product.prodname_code_scanning %} for a repository, you must ensure that there is at least one self-hosted {% data variables.product.prodname_actions %} runner available to the repository.

Enterprise owners, organization and repository administrators can add self-hosted runners. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/adding-self-hosted-runners)."
{% endif %}

{% ifversion code-scanning-without-workflow %}

## Configuring {% data variables.product.prodname_code_scanning %} automatically

The default setup for {% data variables.product.prodname_code_scanning %} will automatically configure {% data variables.product.prodname_code_scanning %} with the best settings for your repository. Default setup uses {% data variables.product.prodname_actions %} to run {% data variables.product.prodname_codeql %} analysis without requiring you to commit a workflow file your repository.

Your repository is eligible for default setup if it uses {% data variables.product.prodname_actions %} and contains only the following {% data variables.product.prodname_codeql %}-supported languages: JavaScript/TypeScript, Python, or Ruby. While you can use default setup if your repository includes languages that aren't supported by CodeQL, such as R, you must use the advanced setup if you include {% data variables.product.prodname_codeql %}-supported languages other than those previously listed. For more information on {% data variables.product.prodname_codeql %}-supported languages, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)."{% ifversion org-enable-code-scanning %} For information on bulk enablement, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-at-scale)."{% endif %}

Enabling default setup is the quickest way to configure {% data variables.product.prodname_code_scanning %} for your repository. Additionally, default setup requires none of the maintenance necessary with a {% data variables.product.prodname_codeql %} workflow file. Before you enable default setup, you'll see the languages it will analyze, the query suites it will run, and the events that will trigger a new scan.

Try default setup if you don't need to run extra queries, change the scan schedule, or scan a language that is currently unsupported by default setup.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. In the "{% data variables.product.prodname_code_scanning_caps %}" section, select **Set up** {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %}, then click **Default**.

  ![Screenshot of the "{% data variables.product.prodname_code_scanning_caps %}" section of "Code security and analysis" settings. The "Default setup" button is highlighted with an orange outline.](/assets/images/help/security/default-code-scanning-setup.png)
1. In the {% data variables.product.prodname_codeql %} default configuration window that is displayed, review the settings for your repository, then click **Enable {% data variables.product.prodname_codeql %}**.

  {% note %}

  **Notes:**
     - The {% data variables.product.prodname_codeql %} default configuration window displays the details of the default setup, including the languages to analyze, the query suites to run, and the events that trigger a new scan. If you would like to change which query suites will run, what events will trigger a new scan, or other {% data variables.product.prodname_code_scanning %} features, you need to use the advanced setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#creating-an-advanced-setup)."
     - If you are switching to the default setup from the advanced setup, you will see a warning informing you that the default setup will override existing configurations. {% data variables.product.prodname_codeql %} default setup will disable the existing workflow file, and block any {% data variables.product.prodname_codeql %} analysis API uploads.
     - If you would like to see your default {% data variables.product.prodname_codeql %} setup after configuration, select {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click {% octicon "gear" aria-label="The gear icon" %} **View {% data variables.product.prodname_codeql %} configuration**.

  {% endnote %}

{% endif %}

{% ifversion code-scanning-without-workflow %}
## Creating an advanced setup

The advanced setup for {% data variables.product.prodname_code_scanning %} is helpful when you need to customize your {% data variables.product.prodname_code_scanning %}. By creating and editing a workflow file, you can choose which queries to run, change the scan schedule, scan any {% data variables.product.prodname_codeql %}-supported language, use a matrix build, and more.

{% ifversion fpt or ghec %}
### Configuring {% data variables.product.prodname_code_scanning %} using starter workflows

{% data reusables.advanced-security.starter-workflows-beta %}

{% data reusables.advanced-security.starter-workflow-overview %} {% data variables.product.prodname_code_scanning_caps %} starter workflows are only available for your repository if {% data variables.product.prodname_code_scanning %} is enabled.

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. If the repository has already at least one workflow configured and running, click **New workflow** to display starter workflows. If there are currently no workflows configured for the repository, go to the next step.
   ![Screenshot of the Actions tab for a repository. The "New workflow" button is highlighted with an orange outline](/assets/images/help/security/actions-new-workflow-button.png)
2. In the "Choose a workflow" or "Get started with {% data variables.product.prodname_actions %}" view, scroll down to the "Security" category and click **Configure** under the workflow you want to configure. You may need to click **View all** to find the security workflow you want to configure.
   ![Screenshot of the Security category of starter workflows. The Configure button and "View all" link are highlighted with an orange outline.](/assets/images/help/security/actions-workflows-security-section.png)
3. Follow any instructions in the workflow to customize it to your needs. For more general assistance about workflows, click **Documentation** on the right pane of the workflow page.
   ![Screenshot showing a starter workflow file open for editing. The "Documentation" button is highlighted with an orange outline.](/assets/images/help/security/actions-workflows-documentation.png)
   For more information, see "[AUTOTITLE](/actions/using-workflows/using-starter-workflows#using-starter-workflows)" and "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning)."

{% endif %}

### Configuring {% data variables.product.prodname_code_scanning %} manually

You can customize your {% data variables.product.prodname_code_scanning %} by creating and editing a workflow file. The advanced setup generates a basic workflow file for you to customize.

{% data reusables.code-scanning.billing %}

{% ifversion fpt %}
  {% note %}

  **Note:** You can configure {% data variables.product.prodname_code_scanning %} for any public repository where you have write access.

  {% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.user-settings.security-analysis %}
1. Scroll down to the "{% data variables.product.prodname_code_scanning_caps %}" section, select **Set up** {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %}, then click **Advanced**.

  {% note %}

  **Note:** If you are switching to the advanced {% data variables.product.prodname_code_scanning %} setup from the default setup, in the "{% data variables.product.prodname_code_scanning_caps %}" section, select {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click {% octicon "workflow" aria-label="The workflow icon" %} **Switch to advanced**. In the pop-up window that appears, click **Disable {% data variables.product.prodname_codeql %}**.

  {% endnote %}

  ![Screenshot of the "{% data variables.product.prodname_code_scanning_caps %}" section of "Code security and analysis" settings. The "Advanced setup" button is highlighted with an orange outline.](/assets/images/help/security/advanced-code-scanning-setup.png)

1. To customize how {% data variables.product.prodname_code_scanning %} scans your code, edit the workflow.

   Generally, you can commit the {% data variables.code-scanning.codeql_workflow %} without making any changes to it. However, many of the third-party workflows require additional configuration, so read the comments in the workflow before committing.

   For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning)."
1. Click **Commit changes...**

   ![Screenshot of the form to create a new file. To the right of the file name, a green button, labeled "Commit changes...", is outlined in dark orange.](/assets/images/help/repository/start-commit-commit-new-file.png)
1. In the commit message field, type a commit message.
1. Select whether you'd like to commit directly to the default branch, or create a new branch and start a pull request.
1. Click **Commit new file** or **Propose new file**.

In the suggested {% data variables.code-scanning.codeql_workflow %}, {% data variables.product.prodname_code_scanning %} is configured to analyze your code each time you either push a change to the default branch or any protected branches, or raise a pull request against the default branch. As a result, {% data variables.product.prodname_code_scanning %} will now commence.

The `on:pull_request` and `on:push` triggers for code scanning are each useful for different purposes. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning#configuring-frequency)."

{% else %}
## Configuring {% data variables.product.prodname_code_scanning %} manually

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. To the right of "{% data variables.product.prodname_code_scanning_caps %} alerts", click **Set up {% data variables.product.prodname_code_scanning %}**.{% ifversion ghec or ghes or ghae %} If "{% data variables.product.prodname_code_scanning %} alerts" is missing, you need to ask an organization owner or repository administrator to enable {% data variables.product.prodname_GH_advanced_security %}.{% endif %} For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)" or "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."
1. Under "Get started with {% data variables.product.prodname_code_scanning %}", click **Set up this workflow** on the {% data variables.code-scanning.codeql_workflow %} or on a third-party workflow.
 !["Set up this workflow" button under "Get started with {% data variables.product.prodname_code_scanning %}" heading](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)Workflows are only displayed if they are relevant for the programming languages detected in the repository. The {% data variables.code-scanning.codeql_workflow %} is always displayed, but the "Set up this workflow" button is only enabled if {% data variables.product.prodname_codeql %} analysis supports the languages present in the repository.
1. To customize how {% data variables.product.prodname_code_scanning %} scans your code, edit the workflow.

   Generally, you can commit the {% data variables.code-scanning.codeql_workflow %} without making any changes to it. However, many of the third-party workflows require additional configuration, so read the comments in the workflow before committing.

   For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning)."
1. Click **Commit changes...**

   ![Screenshot of the form to create a new file. To the right of the file name, a green button, labeled "Commit changes...", is outlined in dark orange.](/assets/images/help/repository/start-commit-commit-new-file.png)
1. In the text field, type a commit message.
1. Choose whether you'd like to commit directly to the default branch, or create a new branch and start a pull request.
1. Click **Commit new file** or **Propose new file**.

In the suggested {% data variables.code-scanning.codeql_workflow %}, {% data variables.product.prodname_code_scanning %} is configured to analyze your code each time you either push a change to the default branch or any protected branches, or raise a pull request against the default branch. As a result, {% data variables.product.prodname_code_scanning %} will now commence.

The `on:pull_request` and `on:push` triggers for code scanning are each useful for different purposes. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning#configuring-frequency)."

{% endif %}

{% ifversion org-enable-code-scanning %}

For information on bulk enablement, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-at-scale)."

{% else %}

## Bulk configuration of {% data variables.product.prodname_code_scanning %}

You can configure {% data variables.product.prodname_code_scanning %} in many repositories at once using a script. If you'd like to use a script to raise pull requests that add a {% data variables.product.prodname_actions %} workflow to multiple repositories, see the [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) repository for an example using PowerShell, or [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) for teams who do not have PowerShell and instead would like to use NodeJS.

{% endif %}

## Viewing the logging output from {% data variables.product.prodname_code_scanning %}

After configuring {% data variables.product.prodname_code_scanning %} for your repository, you can watch the output of the actions as they run.

{% data reusables.repositories.actions-tab %}

  You'll see a list that includes an entry for running the {% data variables.product.prodname_code_scanning %} workflow. The text of the entry is the title you gave your commit message.

  ![Actions list showing {% data variables.product.prodname_code_scanning %} workflow](/assets/images/help/repository/code-scanning-actions-list.png)

1. Click the entry for the {% data variables.product.prodname_code_scanning %} workflow.

1. Click the job name on the left. For example, **Analyze (LANGUAGE)**.

  ![Log output from the {% data variables.product.prodname_code_scanning %} workflow](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Review the logging output from the actions in this workflow as they run.

1. Once all jobs are complete, you can view the details of any {% data variables.product.prodname_code_scanning %} alerts that were identified. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

{% note %}

**Note:** If you raised a pull request to add the {% data variables.product.prodname_code_scanning %} workflow to the repository, alerts from that pull request aren't displayed directly on the {% data variables.product.prodname_code_scanning_caps %} page until the pull request is merged. If any alerts were found you can view these, before the pull request is merged, by clicking the **NUMBER alerts found** link in the banner on the {% data variables.product.prodname_code_scanning_caps %} page.

![Click the "n alerts found" link](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

## Understanding the pull request checks

Each {% data variables.product.prodname_code_scanning %} workflow you set to run on pull requests always has at least two entries listed in the checks section of a pull request. There is one entry for each of the analysis jobs in the workflow, and a final one for the results of the analysis.

The names of the {% data variables.product.prodname_code_scanning %} analysis checks take the form: "TOOL NAME / JOB NAME (TRIGGER)." For example, for {% data variables.product.prodname_codeql %}, analysis of C++ code has the entry "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)." You can click **Details** on a {% data variables.product.prodname_code_scanning %} analysis entry to see logging data. This allows you to debug a problem if the analysis job failed. For example, for {% data variables.product.prodname_code_scanning %} analysis of compiled languages, this can happen if the action can't build the code.

  ![{% data variables.product.prodname_code_scanning %} pull request checks](/assets/images/help/repository/code-scanning-pr-checks.png)

When the {% data variables.product.prodname_code_scanning %} jobs complete, {% data variables.product.prodname_dotcom %} works out whether any alerts were added by the pull request and adds the "{% data variables.product.prodname_code_scanning_caps %} results / TOOL NAME" entry to the list of checks. After {% data variables.product.prodname_code_scanning %} has been performed at least once, you can click **Details** to view the results of the analysis.

{% ifversion ghes < 3.5 or ghae %}
If you used a pull request to add {% data variables.product.prodname_code_scanning %} to the repository, you will initially see an "Analysis not found" message when you click **Details** on the "{% data variables.product.prodname_code_scanning_caps %} results / TOOL NAME" check.

  ![Analysis not found for commit message](/assets/images/enterprise/3.4/repository/code-scanning-analysis-not-found.png)

The table lists one or more categories. Each category relates to specific analyses, for the same tool and commit, performed on a different language or a different part of the code. For each category, the table shows the two analyses that {% data variables.product.prodname_code_scanning %} attempted to compare to determine which alerts were introduced or fixed in the pull request.

For example, in the screenshot above, {% data variables.product.prodname_code_scanning %} found an analysis for the merge commit of the pull request, but no analysis for the head of the main branch.

### Reasons for the "Analysis not found" message


After {% data variables.product.prodname_code_scanning %} has analyzed the code in a pull request, it needs to compare the analysis of the topic branch (the branch you used to create the pull request) with the analysis of the base branch (the branch into which you want to merge the pull request). This allows {% data variables.product.prodname_code_scanning %} to compute which alerts are newly introduced by the pull request, which alerts were already present in the base branch, and whether any existing alerts are fixed by the changes in the pull request. Initially, if you use a pull request to add {% data variables.product.prodname_code_scanning %} to a repository, the base branch has not yet been analyzed, so it's not possible to compute these details. In this case, when you click through from the results check on the pull request you will see the "Analysis not found" message.

There are other situations where there may be no analysis for the latest commit to the base branch for a pull request. These include:

* The pull request has been raised against a branch other than the default branch, and this branch hasn't been analyzed.

  To check whether a branch has been scanned, go to the {% data variables.product.prodname_code_scanning_caps %} page, click the **Branch** drop-down and select the relevant branch.

  ![Choose a branch from the Branch drop-down menu](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  The solution in this situation is to add the name of the base branch to the `on:push` and `on:pull_request` specification in the {% data variables.product.prodname_code_scanning %} workflow on that branch and then make a change that updates the open pull request that you want to scan.

* The latest commit on the base branch for the pull request is currently being analyzed and analysis is not yet available.

  Wait a few minutes and then push a change to the pull request to retrigger {% data variables.product.prodname_code_scanning %}.

* An error occurred while analyzing the latest commit on the base branch and analysis for that commit isn't available.

  Merge a trivial change into the base branch to trigger {% data variables.product.prodname_code_scanning %} on this latest commit, then push a change to the pull request to retrigger {% data variables.product.prodname_code_scanning %}.

{% endif %}

## Next steps

After configuring {% data variables.product.prodname_code_scanning %}, and allowing its actions to complete, you can:

- View all of the {% data variables.product.prodname_code_scanning %} alerts generated for this repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)."
- View any alerts generated for a pull request submitted after you configure {% data variables.product.prodname_code_scanning %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)."
- Configure notifications for completed runs. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#github-actions-notification-options)."
- View the logs generated by the {% data variables.product.prodname_code_scanning %} analysis. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs)."
- Investigate any problems that occur with the initial configuration of {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow)."
- Customize how {% data variables.product.prodname_code_scanning %} scans the code in your repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning)."
