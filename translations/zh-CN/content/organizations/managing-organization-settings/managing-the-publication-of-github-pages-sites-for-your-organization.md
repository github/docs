---
title: Managing the publication of GitHub Pages sites for your organization
intro: 'You can control whether organization members can publish {% data variables.product.prodname_pages %} sites from repositories in the organization{% ifversion ghec %} and restrict the visibilities that members can choose for the sites{% endif %}.'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: Manage Pages site publication
---

{% ifversion fpt %}
You can choose to allow or disallow organization members from publishing {% data variables.product.prodname_pages %} sites. Organizations that use {% data variables.product.prodname_ghe_cloud %} can also choose to allow publicly published sites, privately published sites, both, or neither. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
{% elsif ghec %}
You can choose to allow organization members to create publicly published sites, privately published sites, both, or neither. For more information about access control for {% data variables.product.prodname_pages %} sites, see "[Changing the visibility of your {% data variables.product.prodname_pages %} site](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)."
{% endif %}

If you disallow publication of {% data variables.product.prodname_pages %} sites, any sites that are already published will remain published. You can manually unpublish the site. For more information, see "[Unpublishing a {% data variables.product.prodname_pages %} site](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. Under "Pages creation, select or deselect **Public**.

   ![Checkboxes to allow or disallow creation of {% data variables.product.prodname_pages %} sites](/assets/images/help/organizations/github-pages-creation-checkboxes-fpt.png){% elsif ghec %}
1. Under "Pages creation", select the visibilities you want to allow and deselect the visibilities you want to disallow.

   ![Checkboxes to allow or disallow creation of {% data variables.product.prodname_pages %} sites](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. Under "Pages creation", select or deselect **Allow members to publish sites**.

   ![Unselected checkbox for "Allow members to publish sites" option](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}{% ifversion fpt or ghec %}

   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3%}{% endif %}

1. Click **Save**.

## Further reading

- "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)"
