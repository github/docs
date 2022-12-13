---
title: GitHub Enterpriseのライセンスのダウンロード
intro: '{% data variables.product.prodname_ghe_server %}のライセンスファイルのコピーをダウンロードできます。'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Download your license
ms.openlocfilehash: eed588e2580558280e2e11639f0904b5f9fcf118
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145087809'
---
## {% data variables.product.prodname_enterprise %}のライセンスファイルについて

{% data variables.contact.contact_enterprise_sales %}から{% data variables.product.prodname_enterprise %}のライセンスを購入あるいはアップグレードした後は、新しいライセンスファイルをダウンロードしなければなりません。 {% data variables.product.prodname_enterprise %} のライセンスの詳細については、「[{% data variables.product.prodname_enterprise %} のライセンスについて](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)」を参照してください。

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## {% data variables.product.prodname_dotcom_the_website %}からのライセンスのダウンロード

{% data variables.product.prodname_dotcom_the_website %}からライセンスをダウンロードするには、{% data variables.product.prodname_dotcom_the_website %}上でEnterpriseアカウントを持っていなければなりません。 詳細については、{% ifversion ghes %}{% data variables.product.prodname_ghe_cloud %} ドキュメントの{% elsif ghec %}「[Enterprise アカウントについて](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)」を参照してください。{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. 左側のサイドバーで、 **[Enterprise ライセンス]** をクリックします。
  ![[Enterprise アカウント設定] サイドバーの [Enterprise ライセンス] タブ](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. [Enterprise Server Instances] で、{% octicon "download" aria-label="The download icon" %} をクリックしてライセンスファイルをダウンロードします。
  ![GitHub Enterprise Server ライセンスをダウンロードする](/assets/images/help/business-accounts/download-ghes-license.png)

ライセンスファイルをダウンロードしたら、そのファイルを{% data variables.product.product_location_enterprise %}にアップロードして、アプリケーションを検証できます。 詳細については、{% ifversion ghec %}{% data variables.product.prodname_ghe_server %} documentation ドキュメントで「[{% data variables.product.prodname_ghe_server %} への新しいライセンスのアップロード](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)」{% elsif ghes %}「[{% data variables.product.prodname_ghe_server %} への新しいライセンスのアップロード](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)」{% endif %}を参照してください。

## {% data variables.product.prodname_dotcom_the_website %}上にEnterpriseアカウントを持っていない場合のライセンスのダウンロード

{% data variables.product.prodname_dotcom_the_website %} 上に Enterprise アカウントをお持ちでない場合、または不明な場合は、[{% data variables.product.prodname_enterprise %} Web サイト](https://enterprise.github.com/download)から {% data variables.product.prodname_ghe_server %} ライセンスをダウンロードできる場合があります。

ライセンスのダウンロードに関する質問がある場合は、{% data variables.contact.contact_enterprise_sales %}にお問い合わせください。
