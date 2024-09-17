---
title: Configuring tag protection rules
shortTitle: Tag protection rules
intro: You can configure tag protection rules for your repository to prevent contributors from creating or deleting tags.
versions:
  ghes: '<3.16'
---

>[!NOTE] Tag protection rules will be deprecated on August 30, 2024, and in {% data variables.product.prodname_ghe_server %} version 3.16 and later, in favor of rulesets. Any tag protection rules still in use after the deprecation date will be auto-migrated, but you can also migrate them manually before the deprecation date. You can read more about this deprecation on the [{% data variables.product.prodname_blog %}](https://github.blog/changelog/2024-05-29-sunset-notice-tag-protections).

When you add a tag protection rule, all tags that match the pattern provided will be protected. Only users with admin or maintain permissions, or custom roles with the "edit repository rules" permission in the repository will be able to create protected tags, and only users with admin permissions or custom roles with the "edit repository rules" permission in the repository will be able to delete protected tags. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role)." {% data variables.product.prodname_github_apps %} require the `Repository administration: write` permission to modify a protected tag.

{% ifversion custom-repository-roles %}
Additionally, you can create custom repository roles to allow other groups of users to create or delete tags that match tag protection rules. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization)."{% endif %}

{% ifversion tag-protection-rules-import %}

### About importing tag protection rules to repository rulesets

You can import existing tag protection rules into repository rulesets. This will implement the same tag protections you currently have in place for your repository. For more information, see "[Importing tag protection rules to repository rulesets](#importing-tag-protection-rules-to-repository-rulesets)."

Rulesets have the following advantages over tag protection rules.

* Unlike protection rules, multiple rulesets can apply at the same time, so you can be confident that every rule targeting a tag in your repository will be evaluated when someone interacts with that tag. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#about-rule-layering)."
* Rulesets have statuses, so you can easily manage which rulesets are active in a repository without needing to delete rulesets.
* Anyone with read access to a repository can view the active rulesets for the repository. This means a developer can understand why they have hit a rule, or an auditor can check the security constraints for the repository, without requiring admin access to the repository.
* With rulesets, you can restrict tag names on an organization-wide basis.

{% endif %}

## Adding tag protection rules

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-tags %}
1. Click **New rule**.
1. Under "Tag name pattern", type the pattern of the tags you want to protect. Tag protection rules use `fnmatch` syntax. For information about syntax options, see the [fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch). In this example, typing "\*" protects all tags.

   ![Screenshot of the "Protected tags / New rule" page. The example pattern `*` is shown with the "Add rule" button. ](/assets/images/help/repository/tag-protection-rule.png)

1. Click **Add rule**.

{% ifversion tag-protection-rules-import %}

## Importing tag protection rules to repository rulesets

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-tags %}
1. Click **Import to rulesets** in the upper right corner.
1. Select **Create separate rulesets for creating and deleting protected tags** or **Create one ruleset for all protected tag operations**. Once created, the rulesets can be edited to further refine their behavior.
1. Click **Import**.

{% endif %}
