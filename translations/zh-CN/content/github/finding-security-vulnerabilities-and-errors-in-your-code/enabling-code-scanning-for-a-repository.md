---
title: 为仓库启用代码扫描
shortTitle: 启用代码扫描
intro: '您可以对项目的仓库启用 {% data variables.product.prodname_code_scanning %}。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can enable {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### 启用 {% data variables.product.prodname_code_scanning %} 的选项

在仓库级别决定如何生成 {% data variables.product.prodname_code_scanning %} 警报，以及使用哪些工具。 {% data variables.product.product_name %} 对 {% data variables.product.prodname_codeql %} 分析提供完全集成的支持，还支持使用第三方工具进行分析。 更多信息请参阅“[关于 {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)”。

{% data reusables.code-scanning.enabling-options %}

### 使用操作启用 {% data variables.product.prodname_code_scanning %}

{% if currentVersion == "free-pro-team@latest" %}Using actions to run {% data variables.product.prodname_code_scanning %} will use minutes. 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions).”{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. To the right of "Code scanning", click **Set up code scanning**. !["Set up code scanning" button to the right of "Code scanning" in the Security Overview](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Under "Get started with code scanning", click **Set up this workflow** on the {% data variables.product.prodname_codeql_workflow %} or on a third-party workflow. !["Set up this workflow" button under "Get started with code scanning" heading](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)
5. Optionally, to customize how {% data variables.product.prodname_code_scanning %} scans your code, edit the workflow. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."

   Generally you can commit the {% data variables.product.prodname_codeql_workflow %} without making any changes to it. However, many of the third-party workflows require additional configuration, so read the comments in the workflow before committing.

   更多信息请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)。”
6. 使用 **Start commit（开始提交）**下拉菜单，并键入提交消息。 ![开始提交](/assets/images/help/repository/start-commit-commit-new-file.png)
7. 选择您是想直接提交到默认分支，还是创建新分支并启动拉取请求。 ![选择提交位置](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. 单击 **Commit new file（提交新文件）**或 **Propose new file（提议新文件）**。

In the default {% data variables.product.prodname_codeql_workflow %}, {% data variables.product.prodname_code_scanning %} is configured to analyze your code each time you either push a change to the default branch or any protected branches, or raise a pull request against the default branch. As a result, {% data variables.product.prodname_code_scanning %} will now commence.

### You decide how you generate {% data variables.product.prodname_code_scanning %} alerts, and which tools you use, at a repository level. {% data variables.product.product_name %} provides fully integrated support for {% data variables.product.prodname_codeql %} analysis, and also supports analysis using third-party tools. For more information, see "[About {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)."

After you enable {% data variables.product.prodname_code_scanning %}, you can monitor analysis, view results, and further customize how you scan your code.

{% data reusables.repositories.actions-tab %}

  You can view the run status of {% data variables.product.prodname_code_scanning %} and get notifications for completed runs. For more information, see "[Managing a workflow run](/actions/configuring-and-managing-workflows/managing-a-workflow-run)" and "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)."

  ![After you commit the workflow file or create a pull request, {% data variables.product.prodname_code_scanning %} will analyze your code according to the frequency you specified in your workflow file. If you created a pull request, {% data variables.product.prodname_code_scanning %} will only analyze the code on the pull request's topic branch until you merge the pull request into the default branch of the repository.](/assets/images/help/repository/code-scanning-actions-list.png)

1. Click the entry for the {% data variables.product.prodname_code_scanning %} workflow.

1. Click the job name on the left. For example, **Analyze (LANGUAGE)**.

  ![Log output from the {% data variables.product.prodname_code_scanning %} workflow](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Review the logging output from the actions in this workflow as they run.

1. Once all jobs are complete, you can view the details of any {% data variables.product.prodname_code_scanning %} alerts that were identified. For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

{% note %}

**Note:** If you raised a pull request to add the {% data variables.product.prodname_code_scanning %} workflow to the repository, alerts from that pull request aren't displayed directly on the {% data variables.product.prodname_code_scanning_capc %} page until the pull request is merged. If any alerts were found you can view these, before the pull request is merged, by clicking the **_n_ alerts found** link in the banner on the {% data variables.product.prodname_code_scanning_capc %} page.

  ![Click the "n alerts found" link](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

### Understanding the pull request checks

Each {% data variables.product.prodname_code_scanning %} workflow you enable to run on pull requests always has at least two entries listed in the checks section of a pull request. There is one entry for each of the analysis jobs in the workflow, and a final one for the results of the analysis.

The names of the {% data variables.product.prodname_code_scanning %} analysis checks take the form: "TOOL NAME / JOB NAME (TRIGGER)." For example, for {% data variables.product.prodname_codeql %}, analysis of C++ code has the entry "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)." You can click **Details** on a {% data variables.product.prodname_code_scanning %} analysis entry to see logging data. This allows you to debug a problem if the analysis job failed. For example, for {% data variables.product.prodname_code_scanning %} analysis of compiled languages, this can happen if the action can't build the code.

  ![After a scan completes, you can view alerts from a completed scan. For more information, see "<a href="/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning">Managing alerts from {% data variables.product.prodname_code_scanning %}</a>."](/assets/images/help/repository/code-scanning-pr-checks.png)

When the {% data variables.product.prodname_code_scanning %} jobs complete, {% data variables.product.prodname_dotcom %} works out whether any alerts were added by the pull request and adds the "{% data variables.product.prodname_code_scanning_capc %} results / TOOL NAME" entry to the list of checks. After {% data variables.product.prodname_code_scanning %} has been performed at least once, you can click **Details** to view the results of the analysis. If you used a pull request to add {% data variables.product.prodname_code_scanning %} to the repository, you will initially see a "Missing analysis" message when you click **Details** on the "{% data variables.product.prodname_code_scanning_capc %} results / TOOL NAME" check.

  ![Missing analysis for commit message](/assets/images/help/repository/code-scanning-missing-analysis.png)

#### Reasons for the "missing analysis" message

After {% data variables.product.prodname_code_scanning %} has analyzed the code in a pull request, it needs to compare the analysis of the topic branch (the branch you used to create the pull request) with the analysis of the base branch (the branch into which you want to merge the pull request). This allows {% data variables.product.prodname_code_scanning %} to compute which alerts are newly introduced by the pull request, which alerts were already present in the base branch, and whether any existing alerts are fixed by the changes in the pull request. Initially, if you use a pull request to add {% data variables.product.prodname_code_scanning %} to a repository, the base branch has not yet been analyzed, so it's not possible to compute these details. In this case, when you click through from the results check on the pull request you will see the "Missing analysis for base commit SHA-HASH" message.

There are other situations where there may be no analysis for the latest commit to the base branch for a pull request. These include:

* The pull request has been raised against a branch other than the default branch, and this branch hasn't been analyzed.

  To check whether a branch has been scanned, go to the {% data variables.product.prodname_code_scanning_capc %} page, click the **Branch** drop-down and select the relevant branch.

  ![Choose a branch from the Branch drop-down menu](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  {% if currentVersion == "free-pro-team@latest" %}Using actions to run {% data variables.product.prodname_code_scanning %} will use minutes. For more information, see "[About billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."{% endif %}

* The latest commit on the base branch for the pull request is currently being analyzed and analysis is not yet available.

  Wait a few minutes and then push a change to the pull request to retrigger {% data variables.product.prodname_code_scanning %}.

* An error occurred while analyzing the latest commit on the base branch and analysis for that commit isn't available.

  Merge a trivial change into the base branch to trigger {% data variables.product.prodname_code_scanning %} on this latest commit, then push a change to the pull request to retrigger {% data variables.product.prodname_code_scanning %}.

### 后续步骤

After enabling {% data variables.product.prodname_code_scanning %}, and allowing its actions to complete, you can:

- View all of the {% data variables.product.prodname_code_scanning %} alerts generated for this repository. 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)”。
- View any alerts generated for a pull request submitted after you enabled {% data variables.product.prodname_code_scanning %}. For more information, see "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)."
- Set up notifications for completed runs. 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)”。
- Investigate any problems that occur with the initial setup of {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. For more information, see "[Troubleshooting the {% data variables.product.prodname_codeql %} workflow](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)."
- Customize how {% data variables.product.prodname_code_scanning %} scans the code in your repository. 更多信息请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)。”
