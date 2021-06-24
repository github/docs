---
title: Setting up continuous integration using workflow templates
shortTitle: Setting up CI using templates
intro: You can set up continuous integration for your project using a workflow template that matches the language and tooling you want to use.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
versions:
  fpt: '*'
  ghes: '>=2.22'
  ghae: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Anyone with write permission to a repository can set up continuous integration (CI) using {% data variables.product.prodname_actions %}.

After you set up CI, you can customize the workflow to meet your needs.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Find the template that matches the language and tooling you want to use, then click **Set up this workflow**.
  ![Setup workflow button](/assets/images/help/repository/setup-workflow-button.png)
5. Click **Start commit**.
  ![Start commit button](/assets/images/help/repository/start-commit.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

Once a push is made to your repository, you can follow the status and detailed logs of your continuous integration workflow run on {% data variables.product.prodname_dotcom %} and receive customized notifications. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)" and "[Managing a workflow run](/articles/managing-a-workflow-run)."

{% data reusables.repositories.actions-workflow-status-badge-intro %}

For more information, see "[Adding a workflow status badge](/actions/managing-workflow-runs/adding-a-workflow-status-badge)."

## Further reading

- "[About continuous integration](/articles/about-continuous-integration)"
- "[Managing a workflow run](/articles/managing-a-workflow-run)"
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
{% ifversion fpt %}
- "[Managing billing for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"
{% endif %}
