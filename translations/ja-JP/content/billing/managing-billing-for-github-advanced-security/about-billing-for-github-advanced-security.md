---
title: GitHub Advanced Security の課金について
intro: '{% ifversion fpt or ghec %}プライベートもしくはインターナルリポジトリで{% endif %}{% data variables.product.prodname_GH_advanced_security %}の機能を使いたいなら、{% ifversion fpt %}Enterpriseで{% endif %}ライセンスが必要になります。{% ifversion fpt or ghec %}これらの機能は、{% data variables.product.prodname_dotcom_the_website %}上のパブリックリポジトリでは無料で利用できます。{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
ms.openlocfilehash: 09e7634b5ab0ace00c847f9db9faf229fc8e840e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066931'
---
## {% data variables.product.prodname_GH_advanced_security %} の課金について

{% ifversion fpt %}

{% data variables.product.prodname_dotcom_the_website %}上のパブリックリポジトリ以外のリポジトリで{% data variables.product.prodname_GH_advanced_security %}の機能を使いたいなら、{% data variables.product.prodname_ghe_cloud %}あるいは{% data variables.product.prodname_ghe_server %}で利用できる{% data variables.product.prodname_GH_advanced_security %}のライセンスが必要になります。 {% data variables.product.prodname_GH_advanced_security %} の詳細については、「[{% data variables.product.prodname_GH_advanced_security %} について](/github/getting-started-with-github/about-github-advanced-security)」を参照してください。

{% data variables.product.prodname_GH_advanced_security %} の課金について詳しくは、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)を参照してください。

{% elsif ghec %}

{% data variables.product.prodname_dotcom_the_website %}上のパブリックリポジトリ以外のリポジトリで{% data variables.product.prodname_GH_advanced_security %}の機能を使いたいなら、{% data variables.product.prodname_GH_advanced_security %}のライセンスが必要になります。 {% data variables.product.prodname_GH_advanced_security %} の詳細については、「[{% data variables.product.prodname_GH_advanced_security %} について](/github/getting-started-with-github/about-github-advanced-security)」を参照してください。

{% elsif ghes %}

{% data variables.product.prodname_GH_advanced_security %}のライセンスを購入してアップロードすれば、ユーザがコードセキュリティの追加機能を使えるようにできます。 {% data variables.product.prodname_GH_advanced_security %} の詳細については、「[{% data variables.product.prodname_GH_advanced_security %} について](/github/getting-started-with-github/about-github-advanced-security)」を参照してください。

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

Enterpriseでの{% data variables.product.prodname_GH_advanced_security %}のライセンスについては、{% data variables.contact.contact_enterprise_sales %}にお問い合わせください。

## {% data variables.product.prodname_GH_advanced_security %} のコミッター番号について

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

Enterprise アカウントが所有する Organization による {% data variables.product.prodname_advanced_security %} の使用を許可または禁止するポリシーを適用できます。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[エンタープライズに {% data variables.product.prodname_advanced_security %} のポリシーを適用する]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %}」を参照してください。{% else %}."{% endif %}

{% ifversion fpt or ghes or ghec %}

ライセンス使用の表示について詳しくは、「[{% data variables.product.prodname_GH_advanced_security %} 使用の表示](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)」を参照してください。

{% endif %}

## アクティブなコミッターの使用状況を理解する

以下のタイムラインの例は、{% data variables.product.prodname_GH_advanced_security %}のアクティブなコミッター数がEnterprise内で時間と共にどのように変化しうるかを示しています。 月ごとに、イベントと合わせてその結果のコミッター数があります。

| Date | その月のイベント | コミッター総数 | 
| :- | :- | -: | 
| <nobr>4 月 15 日</nobr> | エンタープライズのメンバーが、リポジトリ **X** に対して {% data variables.product.prodname_GH_advanced_security %} を有効化。リポジトリ **X** には、過去 90 日間に 50 個のコミッターがあります。 | **50** | 
| <nobr>5 月 1 日</nobr> | 開発者 **A** が、リポジトリ **X** で作業しているチームを離れる。開発者 **A** のコントリビューションは、引き続き 90 日間カウントされます。 | **50** | **50** |
| <nobr>8 月 1 日</nobr> | 90 日が経過したので、開発者 **A** のコントリビューションは必要なライセンスに対してカウントされなくなる。 | <sub>_50 - 1_</sub></br>**49** | 
| <nobr>8 月 15 日</nobr> | エンタープライズのメンバーが、2 つ目のリポジトリであるリポジトリ **Y** に対して {% data variables.product.prodname_GH_advanced_security %} を有効化。過去 90 日間に、合計 20 人の開発者がそのリポジトリに貢献しました。 この 20 人の開発者のうち、10 人が最近リポジトリ **X** でも作業しており、追加のライセンスは必要ありません。 | <sub>_49 + 10_</sub><br/>**59** | 
| <nobr>8 月 16 日</nobr> | エンタープライズのメンバーが、リポジトリ **X** に対して {% data variables.product.prodname_GH_advanced_security %} を無効化。リポジトリ **X** で作業していた 49 人の開発者のうち、10 人はリポジトリ **Y** でも作業を続けており、このリポジトリでは過去 90 日間に合計 20 人の開発者が貢献しています。 | <sub>_49 - 29_</sub><br/>**20** |

{% note %}

**注:** ユーザーは、コミットが 90 日以上前に作成されていたとしても、リポジトリのいずれかのブランチにコミットをプッシュしていればアクティブと見なされます。

{% endnote %}

## {% data variables.product.prodname_GH_advanced_security %}の最大限の活用

{% data reusables.advanced-security.getting-the-most-from-your-license %}

{% endif %}
