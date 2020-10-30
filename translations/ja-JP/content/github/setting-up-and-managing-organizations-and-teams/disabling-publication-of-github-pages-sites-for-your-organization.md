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

You can control whether members of your organization can publish websites from repositories in your organization using {% data variables.product.prodname_pages %}. {% data variables.product.prodname_pages %} に関する詳しい情報については、「[{% data variables.product.prodname_pages %} について](/github/working-with-github-pages/about-github-pages)」を参照してください。

{% if currentVersion != "free-pro-team@latest" %}If your site administrator has enabled Public Pages, {% endif %}{% data variables.product.prodname_pages %} sites are publicly available on the internet, even if the repository for the site is private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %}. 詳しい情報については{% if currentVersion != "free-pro-team@latest" %}「[アプライアンス上での{% data variables.product.prodname_pages %}の設定](/enterprise/admin/installation/configuring-github-pages-on-your-appliance#making-github-pages-publicly-accessible)」及び{% endif %}「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」を参照してください。

### Disabling publication of {% data variables.product.prodname_pages %} sites

After you disable publication of {% data variables.product.prodname_pages %} sites, any published site will remain published. You can manually unpublish the site. For more information, see "[Unpublishing a {% data variables.product.prodname_pages %} site](/github/working-with-github-pages/unpublishing-a-github-pages-site)."

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
1. Under "Pages creation", unselect **Allow members to publish sites**. ![Unselected checkbox for "Allow members to publish sites" option](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png)
1. [**Save**] をクリックします。 !["Save" button for "Allow members to publish sites" option](/assets/images/help/organizations/org-settings-pages-disable-publication-save-button.png)
