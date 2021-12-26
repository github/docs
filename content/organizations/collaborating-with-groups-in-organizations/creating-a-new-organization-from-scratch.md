---
title: Creating a new organization from scratch
intro: Create an organization to apply fine-grained access permissions to repositories.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /articles/creating-a-new-organization-from-scratch
  - /admin/user-management/creating-organizations
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch
topics:
  - Organizations
  - Teams
shortTitle: Create new organization
---

When you create a new organization from scratch, it doesn't have any repositories associated with it. For more information on adding repositories to your organization, see "[Creating a new repository](/articles/creating-a-new-repository)" and "[Transferring a repository](/articles/transferring-a-repository)."

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
4. Follow the prompts to create your organization. {% ifversion fpt %}For more information about the plans available for your team, see "[{% data variables.product.prodname_dotcom %}'s products](/articles/githubs-products)."{% endif %}

## Further reading

{% ifversion fpt %}
- "[Setting your billing email](/articles/setting-your-billing-email)"{% endif %}
- "[About organizations](/articles/about-organizations)"
