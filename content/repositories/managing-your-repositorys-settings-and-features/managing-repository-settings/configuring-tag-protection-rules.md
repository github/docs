---
title: Configuring tag protection rules
shortTitle: Tag protection rules
intro: You can configure tag protection rules for your repository to prevent contributors from creating or deleting tags.
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: issue-6337
  ghec: '*'
  ghes: '>3.4'
---

{% note %}

**Note:** Tag protection rules are currently in beta and subject to change.

{% endnote %}

When you add a tag protection rule, all tags that match the pattern provided will be protected. Only users with admin or maintain permissions in the repository will be able to create protected tags, and only users with admin permissions in the repository will be able to delete protected tags. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role)." {% data variables.product.prodname_github_apps %} require the `Repository administration: write` permission to modify a protected tag.

{% ifversion custom-repository-roles %}
Additionally, you can create custom repository roles to allow other groups of users to create or delete tags that match tag protection rules. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code and automation" section of the sidebar, click **{% octicon "tag" aria-label="The tag icon" %} Tags**.
1. Click **New rule**.
![New tag protection rule](/assets/images/help/repository/new-tag-protection-rule.png)
1. Under "Tag name pattern", type the pattern of the tags you want to protect. In this example, typing "\*" protects all tags. 
![Set tag protection pattern](/assets/images/help/repository/set-tag-protection-pattern.png)
1. Click **Add rule**.
![Add tag protection rule](/assets/images/help/repository/add-tag-protection-rule.png)
