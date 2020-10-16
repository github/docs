---
title: Disabling publication of GitHub Pages sites for your organization
intro: 'You can prevent members of your organization from publishing {% data variables.product.prodname_pages %} sites from repositories in the organization.'
permissions: 'Organization owners can disable publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>2.22'
---

### About restrictions on publication of {% data variables.product.prodname_pages %} sites

You can control whether members of your organization can publish websites from repositories in your organization using {% data variables.product.prodname_pages %}. For more information about {% data variables.product.prodname_pages %}, see "[About {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages)."

{% if currentVersion != "free-pro-team@latest" %}If your site administrator has enabled Public Pages, {% endif %}{% data variables.product.prodname_pages %} sites are publicly available on the internet, even if the repository for the site is private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %}. For more information, see{% if currentVersion != "free-pro-team@latest" %} "[Configuring {% data variables.product.prodname_pages %} on your appliance](/enterprise/admin/installation/configuring-github-pages-on-your-appliance#making-github-pages-publicly-accessible)" and{% endif %} "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

### Disabling publication of {% data variables.product.prodname_pages %} sites

After you disable publication of {% data variables.product.prodname_pages %} sites, any published site will remain published. You can manually unpublish the site. For more information, see "[Unpublishing a {% data variables.product.prodname_pages %} site](/github/working-with-github-pages/unpublishing-a-github-pages-site)."

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Pages creation", unselect **Allow members to publish sites**.
  ![Unselected checkbox for "Allow members to publish sites" option](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png)
1. Click **Save**.
  !["Save" button for "Allow members to publish sites" option](/assets/images/help/organizations/org-settings-pages-disable-publication-save-button.png)
