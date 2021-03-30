---
title: Setting up code scanning for a repository
shortTitle: Setting up code scanning
intro: 'You can set up {% data variables.product.prodname_code_scanning %} by adding a workflow to your repository.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
versions:
  enterprise-server: '2.22'
topics:
  - безопасность
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### Options for setting up {% data variables.product.prodname_code_scanning %}

You decide how to generate {% data variables.product.prodname_code_scanning %} alerts, and which tools to use, at a repository level. {% data variables.product.product_name %} provides fully integrated support for {% data variables.product.prodname_codeql %} analysis, and also supports analysis using third-party tools. For more information, see "[About {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)."

{% data reusables.code-scanning.enabling-options %}

### Setting up {% data variables.product.prodname_code_scanning %} using actions

{% if currentVersion == "free-pro-team@latest" %}Using actions to run {% data variables.product.prodname_code_scanning %} will use minutes. For more information, see "[About billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. To the right of "{% data variables.product.prodname_code_scanning_capc %} alerts", click **Set up {% data variables.product.prodname_code_scanning %}**. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}If {% data variables.product.prodname_code_scanning %} is missing, you need to ask an organization owner or repository administrator to enable {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)" or "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."{% endif %} !["Set up code scanning" button to the right of "Code scanning" in the Security Overview](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Under "Get started with {% data variables.product.prodname_code_scanning %}", click **Set up this workflow** on the {% data variables.product.prodname_codeql_workflow %} or on a third-party workflow. !["Set up this workflow" button under "Get started with {% data variables.product.prodname_code_scanning %}" heading](/assets/images/help/repository/code-scanning-set-up-this-workflow.png){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Workflows are only displayed if they are relevant for the programming languages detected in the repository. The {% data variables.product.prodname_codeql_workflow %} is always displayed, but the "Set up this workflow" button is only enabled if {% data variables.product.prodname_codeql %} analysis supports the languages present in the repository.{% endif %}
5. To customize how {% data variables.product.prodname_code_scanning %} scans your code, edit the workflow.

   Generally you can commit the {% data variables.product.prodname_codeql_workflow %} without making any changes to it. However, many of the third-party workflows require additional configuration, so read the comments in the workflow before committing.

   For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."
6. Use the **Start commit** drop-down, and type a commit message. ![Start commit](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Choose whether you'd like to commit directly to the default branch, or create a new branch and start a pull request. ![Choose where to commit](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Click **Commit new file** or **Propose new file**.

In the default {% data variables.product.prodname_codeql_workflow %}, {% data variables.product.prodname_code_scanning %} is configured to analyze your code each time you either push a change to the default branch or any protected branches, or raise a pull request against the default branch. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."

### Bulk set up of {% data variables.product.prodname_code_scanning %}
You can set up {% data variables.product.prodname_code_scanning %} in many repositories at once using a script. For an example of a script that raises pull requests to add a {% data variables.product.prodname_actions %} workflow to multiple repositories, see the [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) repository.

### Дальнейшие шаги

After setting up {% data variables.product.prodname_code_scanning %} for your repository, you can watch the output of the actions as they run.

{% data reusables.repositories.actions-tab %}

  You'll see a list that includes an entry for running the {% data variables.product.prodname_code_scanning %} workflow. The text of the entry is the title you gave your commit message.

  ![Actions list showing {% data variables.product.prodname_code_scanning %} workflow](/assets/images/help/repository/code-scanning-actions-list.png)

1. Click the entry for the {% data variables.product.prodname_code_scanning %} workflow.

1. Click the job name on the left. For example, **Analyze (LANGUAGE)**.

  ![Log output from the {% data variables.product.prodname_code_scanning %} workflow](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Review the logging output from the actions in this workflow as they run.

1. After a scan completes, you can view alerts from a completed scan. For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

{% note %}

After you commit the workflow file or create a pull request, {% data variables.product.prodname_code_scanning %} will analyze your code according to the frequency you specified in your workflow file. If you created a pull request, {% data variables.product.prodname_code_scanning %} will only analyze the code on the pull request's topic branch until you merge the pull request into the default branch of the repository.

  ![Click the "n alerts found" link](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

### Understanding the pull request checks

Each {% data variables.product.prodname_code_scanning %} workflow you set to run on pull requests always has at least two entries listed in the checks section of a pull request. There is one entry for each of the analysis jobs in the workflow, and a final one for the results of the analysis.

The names of the {% data variables.product.prodname_code_scanning %} analysis checks take the form: "TOOL NAME / JOB NAME (TRIGGER)." For example, for {% data variables.product.prodname_codeql %}, analysis of C++ code has the entry "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)." You can click **Details** on a {% data variables.product.prodname_code_scanning %} analysis entry to see logging data. This allows you to debug a problem if the analysis job failed. For example, for {% data variables.product.prodname_code_scanning %} analysis of compiled languages, this can happen if the action can't build the code.

  ![{% data variables.product.prodname_code_scanning %} pull request checks](/assets/images/help/repository/code-scanning-pr-checks.png)

When the {% data variables.product.prodname_code_scanning %} jobs complete, {% data variables.product.prodname_dotcom %} works out whether any alerts were added by the pull request and adds the "{% data variables.product.prodname_code_scanning_capc %} results / TOOL NAME" entry to the list of checks. After {% data variables.product.prodname_code_scanning %} has been performed at least once, you can click **Details** to view the results of the analysis. If you used a pull request to add {% data variables.product.prodname_code_scanning %} to the repository, you will initially see a "Missing analysis" message when you click **Details** on the "{% data variables.product.prodname_code_scanning_capc %} results / TOOL NAME" check.

  ![Missing analysis for commit message](/assets/images/help/repository/code-scanning-missing-analysis.png)

#### Reasons for the "missing analysis" message

After {% data variables.product.prodname_code_scanning %} has analyzed the code in a pull request, it needs to compare the analysis of the topic branch (the branch you used to create the pull request) with the analysis of the base branch (the branch into which you want to merge the pull request). This allows {% data variables.product.prodname_code_scanning %} to compute which alerts are newly introduced by the pull request, which alerts were already present in the base branch, and whether any existing alerts are fixed by the changes in the pull request. Initially, if you use a pull request to add {% data variables.product.prodname_code_scanning %} to a repository, the base branch has not yet been analyzed, so it's not possible to compute these details. In this case, when you click through from the results check on the pull request you will see the "Missing analysis for base commit SHA-HASH" message.

There are other situations where there may be no analysis for the latest commit to the base branch for a pull request. These include:

* The pull request has been raised against a branch other than the default branch, and this branch hasn't been analyzed.

  To the right of "Code scanning", click **Set up code scanning**.

  ![Choose a branch from the Branch drop-down menu](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  The solution in this situation is to add the name of the base branch to the `on:push` and `on:pull_request` specification in the {% data variables.product.prodname_code_scanning %} workflow on that branch and then make a change that updates the open pull request that you want to scan.

* The latest commit on the base branch for the pull request is currently being analyzed and analysis is not yet available.

  Wait a few minutes and then push a change to the pull request to retrigger {% data variables.product.prodname_code_scanning %}.

* An error occurred while analyzing the latest commit on the base branch and analysis for that commit isn't available.

  Merge a trivial change into the base branch to trigger {% data variables.product.prodname_code_scanning %} on this latest commit, then push a change to the pull request to retrigger {% data variables.product.prodname_code_scanning %}.

### Дальнейшие шаги

After setting up {% data variables.product.prodname_code_scanning %}, and allowing its actions to complete, you can:

- You can customize how {% data variables.product.prodname_code_scanning %} scans the code in your repository. For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)."
- View any alerts generated for a pull request submitted after you set up {% data variables.product.prodname_code_scanning %}. For more information, see "[Managing a workflow run](/actions/configuring-and-managing-workflows/managing-a-workflow-run)" and "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)."
- Set up notifications for completed runs. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)."
- Investigate any problems that occur with the initial setup of {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. For more information, see "[Troubleshooting the {% data variables.product.prodname_codeql %} workflow](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)."
- Customize how {% data variables.product.prodname_code_scanning %} scans the code in your repository. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."
