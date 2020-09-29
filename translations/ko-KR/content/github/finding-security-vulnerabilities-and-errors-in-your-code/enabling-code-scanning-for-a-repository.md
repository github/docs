---
title: Enabling code scanning for a repository
shortTitle: Enabling code scanning
intro: 'You can enable {% data variables.product.prodname_code_scanning %} for your project''s repository.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can enable {% data variables.product.prodname_code_scanning %} for the repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### Options for enabling {% data variables.product.prodname_code_scanning %}

You decide how you generate {% data variables.product.prodname_code_scanning %} alerts, and which tools you use, at a repository level. {% data variables.product.product_name %} provides fully integrated support for {% data variables.product.prodname_codeql %} analysis, and also supports analysis using third-party tools. For more information, see "[About {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)."

{% data reusables.code-scanning.enabling-options %}

### Enabling {% data variables.product.prodname_code_scanning %} using actions

{% if currentVersion == "free-pro-team@latest" %}Using actions to run {% data variables.product.prodname_code_scanning %} will use minutes. For more information, see "[About billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. To the right of "Code scanning", click **Set up code scanning**. !["Set up code scanning" button to the right of "Code scanning" in the Security Overview](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Under "Get started with code scanning", click **Set up this workflow** on the {% data variables.product.prodname_codeql_workflow %} or on a third-party workflow. !["Set up this workflow" button under "Get started with code scanning" heading](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)
5. Optionally, to customize how {% data variables.product.prodname_code_scanning %} scans your code, edit the workflow. For more information, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."
6. Use the **Start commit** drop-down, and type a commit message. ![Start commit](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Choose whether you'd like to commit directly to the default branch, or create a new branch and start a pull request. ![Choose where to commit](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Click **Commit new file** or **Propose new file**.

After you commit the workflow file or create a pull request, {% data variables.product.prodname_code_scanning %} will analyze your code according to the frequency you specified in your workflow file. If you created a pull request, {% data variables.product.prodname_code_scanning %} will only analyze the code on the pull request's topic branch until you merge the pull request into the default branch of the repository.

### 다음 단계

After you enable {% data variables.product.prodname_code_scanning %}, you can monitor analysis, view results, and further customize how you scan your code.

- You can view the run status of {% data variables.product.prodname_code_scanning %} and get notifications for completed runs. For more information, see "[Managing a workflow run](/actions/configuring-and-managing-workflows/managing-a-workflow-run)" and "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)."
- After a scan completes, you can view alerts from a completed scan. For more information, see "[Managing alerts from {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)."
- You can customize how {% data variables.product.prodname_code_scanning %} scans the code in your repository. For more information, see "[Configuring code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."
