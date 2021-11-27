---
title: Organization の GitHub Pages サイトの公開を無効化する
intro: 'Organization のメンバーが Organization のリポジトリから {% data variables.product.prodname_pages %} サイトを公開できないようにすることができます。'
permissions: 'Organization のオーナーは、Organization のリポジトリからの {% data variables.product.prodname_pages %} サイトの公開を無効化できます。'
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>2.22'
  github-ae: '*'
---

### {% data variables.product.prodname_pages %} サイトの公開に関する制限について

{% data variables.product.prodname_pages %} を使用して Organization のメンバーが Organization のリポジトリから Web サイトを公開できるかどうかを制御できます。 {% data variables.product.prodname_pages %} の詳細については、「[{% data variables.product.prodname_pages %} について](/github/working-with-github-pages/about-github-pages)」を参照してください。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}If your site administrator has enabled Public Pages, {% endif %}{% data variables.product.prodname_pages %} sites are publicly available on the internet, even if the repository for the site is private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} or internal{% endif %}. For more information, see{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} "[Configuring {% data variables.product.prodname_pages %} for your enterprise](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)" and{% endif %} "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

### {% data variables.product.prodname_pages %} サイトの公開を無効化する

{% data variables.product.prodname_pages %} サイトの公開を無効化した後でも、すでに公開されているサイトは公開されたままになります。 そのサイトは手動で取り下げることができます。 詳細は「[{% data variables.product.prodname_pages %}サイトの取り下げ](/github/working-with-github-pages/unpublishing-a-github-pages-site)」を参照してください。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
1. [Pages creation] で、[**Allow members to publish sites**] の選択を解除します。 ![[Allow members to publish sites] オプションの [Unselected] チェックボックス](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png)
1. [**Save**] をクリックします。 ![[Allow members to publish sites] オプションの [Save] ボタン](/assets/images/help/organizations/org-settings-pages-disable-publication-save-button.png)
