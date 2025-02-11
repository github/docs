---
title: Restricting deploy keys in your organization
intro: To protect your organization's data, you can configure permissions for creating deploy keys in your organization.
permissions: Organization owners.
versions:
  feature: deploy-keys-enterprise-org-policy
topics:
  - Organizations
  - Policies
shortTitle: Restrict deploy keys
---

You can choose whether members can create deploy keys for repositories in your organization.

By default, new organizations are configured to disallow the creation of deploy keys in repositories.

Organization owners can restrict the creation of deploy keys to help prevent sensitive information from being exposed. For more information, see [AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization) and [AUTOTITLE](/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys). If you want more fine-grained control over permissions, consider using a {% data variables.product.prodname_github_app %} instead. See [AUTOTITLE](/apps/overview).

If your organization is owned by an enterprise account, you may not be able to configure this setting for your organization, if an enterprise owner has set a policy at the enterprise level. For more information, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deploy-keys).

> [!WARNING]
> Changing this setting to disabled will result in **existing deploy keys being disabled** in all repositories in the organization. Scripts, apps, or workflows that create, use, or delete deploy keys will no longer work.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.profile.org_member_privileges %}
1. Under "Deploy keys", review the information about changing the setting, click **Enabled** or **Disabled**.
1. Click **Save**.
