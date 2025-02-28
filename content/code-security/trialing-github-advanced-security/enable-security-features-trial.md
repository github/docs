---
title: Enabling security features in your trial enterprise
shortTitle: Enable security features in trial
allowTitleToDifferFromFilename: true
intro: 'Quickly create an enterprise-level configuration and apply security features across all repositories in your trial enterprise.'
type: quick_start
permissions: '{% data reusables.permissions.security-configuration-enterprise-enable %}'
topics:
  - Advanced Security
versions:
  fpt: '*'
  ghec: '*'
---

This article assumes that you have planned and then started a trial of {% data variables.product.prodname_GH_advanced_security %}. For more information, see [AUTOTITLE](/code-security/trialing-github-advanced-security/planning-a-trial-of-ghas).

The aim is to enable all the security features you want to trial quickly, as a starting point for deeper exploration. You should start getting results soon on the repositories in your trial enterprise and you can fine-tune the configuration later.

## Step 1: Create an enterprise security configuration for your trial goals

When you planned your trial, you identified the features that you want to test and any enforcement needs. You should create one or more security configurations for your enterprise that enable these features and set any enforcement levels you require.

1. In the top-right corner of {% data variables.product.prodname_dotcom %}, click your profile photo.
1. Depending on your environment, click **Your enterprise**, or click **Your enterprises** then click your trial enterprise.
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Code security** to display the security configurations page.
1. Click **New configuration** to create a new configuration.
1. Give the configuration a meaningful name and description.
1. You will see that most features are already enabled. Review the features that are **Not set** and enable any that you want to trial, for example: "Automatic dependency submission."
1. In the "Policy" area, set the "Use as default for newly created repositories" option as needed to define whether or not to apply the configuration to new repositories created in the enterprise.
1. In the "Policy" area, notice that the "Enforce configuration" option is set to **Enforce** so that applying the configuration to a repository enforces all settings apart from any left as "Not set".
   > [!TIP] While you are testing {% data variables.product.prodname_GH_advanced_security %}, you may want to change this to **Don't enforce** to allow you to optimize repository settings as needed without modifying security configurations.
1. When you have finished defining the configuration, click **Save configuration**.

The new enterprise security configuration is now available for use at the enterprise level and also within every organization in the enterprise.

## Step 2: Apply your enterprise security configuration to repositories

You can apply an enterprise security configuration either at the enterprise level or at the organization level. The best option for you will depend on whether or not you want to apply the configuration to all repositories in the enterprise, or to a subset of repositories.

> [!NOTE] Although {% data variables.product.prodname_GH_advanced_security %} is free of charge during trials, you will be charged for any actions minutes that you use. This includes actions minutes used by the default {% data variables.product.prodname_code_scanning %} setup or by any other workflows you run.

* Enterprise-level application:
   * Add an enterprise configuration to all repositories in the enterprise, or all repositories without an existing configuration in the enterprise.
* Organization-level application:
   * Add an enterprise or an organization configuration to all repositories in the organization, or all repositories without an existing configuration in the organization.
   * Add an enterprise or an organization configuration to a subset of repositories in the organization.

You may find it helpful to apply an enterprise security configuration to all repositories in your enterprise, and then work at the organization-level to select a subset of repositories and apply an alternative security configuration.

### Enterprise-level application

1. Open your trial enterprise.
1. In the sidebar, click **Settings** and then **Code security** to display the security configurations page.
1. For the configuration you want to apply, click **Apply to** and choose whether to apply the configuration to all repositories in the enterprise or just to the repositories without an existing security configuration.

### Organization-level application

1. Open an organization in your trial enterprise.
1. Click the **Settings** tab to display the organization settings.
1. In the sidebar, click **Code security** and then **Configurations** to display the security configurations page.
1. Optionally, select the **Apply to** dropdown menu and click either **All repositories**, to apply any configuration to all repositories in the organization, or **All repositories without configurations**, to configure just the repositories in the organization without an existing security configuration.
1. Optionally, in the "Apply configurations" section use the "Search repositories" field or **Filter** button to filter repositories. Then select one or more repositories and use the **Apply configuration** button to choose a configuration to apply to those repositories.

For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

## Next steps

Now that you have enabled the security features you want to test, you are ready to look more deeply into how {% data variables.product.prodname_secret_scanning %} and {% data variables.product.prodname_code_scanning %} protect your code.

1. [AUTOTITLE](/code-security/trialing-github-advanced-security/explore-trial-secret-scanning)
1. [AUTOTITLE](/code-security/trialing-github-advanced-security/explore-trial-code-scanning)
