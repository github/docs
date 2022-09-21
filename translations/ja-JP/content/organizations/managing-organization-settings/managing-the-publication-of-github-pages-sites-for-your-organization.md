---
title: Organization の GitHub Pages サイトの公開を管理する
intro: 'Organization のメンバーによる Organization 内のリポジトリからの {% data variables.product.prodname_pages %} サイトの公開の可否を制御して{% ifversion ghec %}、メンバーがサイトで表示できる内容を制限できます{% endif %}。'
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
ms.openlocfilehash: cce086c19dd6f20de28dde599c13074c48851753
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878535'
---
{% ifversion fpt %} Organization のメンバーが、{% data variables.product.prodname_pages %} サイトを公開することを許可または禁止することができます。 Organization で {% data variables.product.prodname_ghe_cloud %} を使っている場合、パブリックに公開するサイト、プライベートに公開するサイト、またはその両方を許可するかどうかを選べます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)を参照してください。
{% elsif ghec %} Organization のメンバーがパブリックに公開するサイト、プライベートに公開するサイト、またはその両方を作成できるようにするか、どちらも作成できないようにするかを選ぶことができます。 {% data variables.product.prodname_pages %} サイトのアクセス制御の詳しい情報については、「[{% data variables.product.prodname_pages %} サイトの可視性の変更](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)」を参照してください。
{% endif %}

{% data variables.product.prodname_pages %} サイトの公開を許可しない場合、すでに公開されているサイトはすべて公開されたままになります。 そのサイトは手動で取り下げることができます。 詳しい情報については、「[{% data variables.product.prodname_pages %} サイトを取り下げる](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)」を参照してください。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. [ページの作成] で、 **[公開]** をオンまたはオフにします。

   ![{% data variables.product.prodname_pages %} サイトの作成を許可または禁止するチェックボックス](/assets/images/help/organizations/github-pages-creation-checkboxes-fpt.png){% elsif ghec %}
1. [Pages creation] で、許可する可視性を選択し、禁止する可視性を選択解除します。

   ![{% data variables.product.prodname_pages %} サイトの作成を許可または禁止するチェックボックス](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. [ページの作成] で、 **[メンバーにサイトの公開を許可する]** をオンまたはオフにします。

   ![[メンバーにサイトの公開を許可する] オプションのオフのチェックボックス](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}{% ifversion fpt or ghec %}

   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3%}{% endif %}

1. **[保存]** をクリックします。

## 参考資料

- 「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages)」
