---
title: Organization の GitHub Pages サイトの公開を無効化する
intro: 'Organization のメンバーが Organization のリポジトリから {% data variables.product.prodname_pages %} サイトを公開できないようにすることができます。'
permissions: 'Organization のオーナーは、Organization のリポジトリからの {% data variables.product.prodname_pages %} サイトの公開を無効化できます。'
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>2.22'
---

### {% data variables.product.prodname_pages %} サイトの公開に関する制限について

{% data variables.product.prodname_pages %} を使用して Organization のメンバーが Organization のリポジトリから Web サイトを公開できるかどうかを制御できます。 {% data variables.product.prodname_pages %} の詳細については、「[{% data variables.product.prodname_pages %} について](/github/working-with-github-pages/about-github-pages)」を参照してください。

{% if enterpriseServerVersions contains currentVersion %}サイト管理者がPublic Pagesを有効化している場合、{% endif %}サイトのリポジトリがプライベート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}または内部{% endif %}の場合でも、{% data variables.product.prodname_pages %}サイトはインターネット上でパブリックにアクセスできるようになります。 詳しい情報については{% if enterpriseServerVersions contains currentVersion %}「[アプライアンス上での{% data variables.product.prodname_pages %}の設定](/enterprise/admin/installation/configuring-github-pages-on-your-appliance#making-github-pages-publicly-accessible)」及び{% endif %}「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」を参照してください。

### {% data variables.product.prodname_pages %} サイトの公開を無効化する

{% data variables.product.prodname_pages %} サイトの公開を無効化した後でも、すでに公開されているサイトは公開されたままになります。 そのサイトは手動で取り下げることができます。 詳細は「[{% data variables.product.prodname_pages %}サイトの取り下げ](/github/working-with-github-pages/unpublishing-a-github-pages-site)」を参照してください。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
1. [Pages creation] で、[**Allow members to publish sites**] の選択を解除します。 ![[Allow members to publish sites] オプションの [Unselected] チェックボックス](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png)
1. [**Save**] をクリックします。 ![[Allow members to publish sites] オプションの [Save] ボタン](/assets/images/help/organizations/org-settings-pages-disable-publication-save-button.png)
