---
title: Enabling security features in your trial
shortTitle: Enable security features in trial
allowTitleToDifferFromFilename: true
intro: Apply {% data variables.product.prodname_cs_and_sp %} to a sample of repositories so your team can evaluate the features during your trial.
permissions: '{% ifversion fpt %}{% data reusables.permissions.security-org-enable %}{% else %}{% data reusables.permissions.security-configuration-enterprise-enable %}{% endif %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /code-security/trialing-github-advanced-security/enable-security-features-trial
contentType: tutorials
category:
  - Plan your security strategy
---

This article assumes that you have planned and started a trial of {% data variables.product.prodname_GHAS %}. For more information, see [AUTOTITLE](/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas).

Use this article to quickly enable the security features you want to trial as a starting point for deeper exploration. Results should appear soon for your trial repositories, and you can fine-tune the configuration later.

{% ifversion fpt %}

## Enable security features with quick setup

Use quick setup to enable security features for a sample of repositories that your team understands well. This makes it easier to judge whether the results and developer experience meet the goals you defined for the trial.

1. In the upper-right corner of {% data variables.product.prodname_dotcom %}, click your profile picture, then click **Your organizations**.
1. Next to the organization, click **Settings**.
1. In the "Security" section of the sidebar, select **{% data variables.product.UI_advanced_security %}**, then click **Configurations**.
1. Click **New configuration**.
1. In the setup dialog, review the default settings and the repositories selected for the trial, and make any necessary adjustments.
1. Click **Review** to see a summary of your configuration, then click **Save and enable** to apply it.

{% else %}

## Step 1: Create an enterprise security configuration for your trial goals

When you planned your trial, you identified the features you want to test and any enforcement needs. Create one or more enterprise security configurations that enable these features and set the required enforcement levels.

1. In the top-right corner of {% data variables.product.prodname_dotcom %}, click your profile picture.
1. Depending on your environment, click **Your enterprise**, or click **Your enterprises** then click your trial enterprise.
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.advanced-security-tab %}
1. Click **New configuration**.
1. In the setup dialog, review the default settings and the repositories selected for the trial, and make any necessary adjustments.
1. Click **Review** to see a summary of your configuration, then click **Save and enable** to apply it.

The new enterprise security configuration is now available for use at the enterprise level and also within every organization in the enterprise.

## Step 2: Apply your enterprise security configuration to repositories

You can apply an enterprise security configuration either at the enterprise level or at the organization level. Choose a level based on whether you want to apply the configuration to all enterprise repositories or to a subset.

> [!NOTE] {% data variables.product.prodname_cs_and_sp %} are free of charge during trials. However, you will be charged for {% data variables.product.prodname_actions %} minutes used by the default {% data variables.product.prodname_code_scanning %} setup if you have exhausted your allocation of {% data variables.product.prodname_actions %} minutes.

* Enterprise-level application:
   * Add an enterprise configuration to all repositories in the enterprise, or all repositories without an existing configuration in the enterprise.
* Organization-level application:
   * Add an enterprise or an organization configuration to all repositories in the organization, or all repositories without an existing configuration in the organization.
   * Add an enterprise or an organization configuration to a subset of repositories in the organization.

You may find it helpful to apply an enterprise security configuration to all enterprise repositories. Then, at the organization level, select a subset of repositories and apply an alternative configuration.

### Enterprise-level application

1. Open your trial enterprise.
1. In the sidebar, click **Settings** and then **{% data variables.product.UI_advanced_security %}** to display the security configurations page.
1. For the configuration you want to apply, click **Apply to** and choose whether to apply the configuration to all repositories in the enterprise or just to the repositories without an existing security configuration.

### Organization-level application

1. Open an organization in your trial enterprise.
1. Click the **Settings** tab to display the organization settings.
1. In the sidebar, click **{% data variables.product.UI_advanced_security %}** and then **Configurations** to display the security configurations page.
1. Choose how to apply the configuration:
   * To apply a configuration across the organization, select the **Apply to** dropdown menu. Click **All repositories** or **All repositories without configurations**.
   * To apply a configuration to a subset of repositories, click the **Repositories** tab. In the "Apply configurations" section, find and select the repositories, then click **Apply configuration** and choose a configuration.

For more information, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration).

After you apply a configuration, each repository's configuration status reflects the result. For example, a repository may show as `attached`, `attaching`, or `failed`. For a full list of statuses and recommended actions, see [AUTOTITLE](/code-security/reference/security-at-scale/configuration-statuses).

{% endif %}

## Next steps

Now that you have enabled the security features you want to test, you are ready to look more deeply into how {% data variables.product.prodname_GH_secret_protection %} and {% data variables.product.prodname_GH_code_security %} protect your code.

{% ifversion fpt %}

1. Review and assess secret scanning alerts. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/viewing-alerts).
1. Review and assess code scanning alerts. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts).

{% else %}

1. [AUTOTITLE](/code-security/tutorials/trialing-github-advanced-security/explore-trial-secret-scanning)
1. [AUTOTITLE](/code-security/tutorials/trialing-github-advanced-security/explore-trial-code-scanning)

{% endif %}
