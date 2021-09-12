---
title: Organization の GitHub Pages サイトの公開を管理する
intro: 'Organization のメンバーが Organization 内のリポジトリから {% data variables.product.prodname_pages %} サイトを公開できるかどうかを制御し{% if currentVersion == "free-pro-team@latest" %}、メンバーがサイトに対して選択できる可視性を制限できます{% endif %}。'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
---

{% if currentVersion == "free-pro-team@latest" %}
Organizationが{% data variables.product.prodname_ghe_cloud %} を使用している場合は、Organization のメンバーが公開サイト、非公開サイト、またはその両方を作成できるようにするか、どちらも作成できないようにするかを選択できます。 それ以外の場合は、公開を許可するか禁止するかを選択できます。 {% data variables.product.prodname_pages %} サイトのアクセス制御の詳細については、「[{% data variables.product.prodname_pages %} サイトの可視性を変更する](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)」を参照してください。
{% endif %}

{% data variables.product.prodname_pages %} サイトの公開を許可しない場合、すでに公開されているサイトはすべて公開されたままになります。 そのサイトは手動で取り下げることができます。 詳細は「[{% data variables.product.prodname_pages %}サイトの取り下げ](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)」を参照してください。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}{% if currentVersion == "free-pro-team@latest" %}
1. [Pages creation] で、許可する可視性を選択し、禁止する可視性を選択解除します。 ![Checkboxes to allow or disallow creation of {% data variables.product.prodname_pages %} sites](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. [Pages creation] で、[**Allow members to publish sites**] を選択または選択解除します。 ![Unselected checkbox for "Allow members to publish sites" option](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}
1. [**Save**] をクリックします。

### 参考リンク

- 「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages)」
