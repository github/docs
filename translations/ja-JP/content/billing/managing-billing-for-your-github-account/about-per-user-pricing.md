---
title: ユーザごとの価格付けについて
intro: '{% ifversion fpt or ghec %}Organization{% ifversion ghec %} と Enterprise{% endif %} の場合、{% else %}{% endif %}課金はお客様が選んだライセンス シートの数から始まります。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
ms.openlocfilehash: 037e0e0cfbb04552a370cf8fd0f3e05c2e09423f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910839'
---
## ユーザごとの価格付けについて

{% ifversion fpt %}{% data variables.product.prodname_dotcom_the_website %} 上の新しい Organization は、{% data variables.product.prodname_free_team %} でパブリックのオープンソース プロジェクトを構築するか、ユーザーごとに料金がかかる有料製品にアップグレードすることができます。 詳細については、「[{% data variables.product.company_short %} の製品](/get-started/learning-about-github/githubs-products)」および「[{% data variables.product.prodname_dotcom %} サブスクリプションのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」を参照してください。

2016 年 5 月 11 日以前に有料プランを使っていた Organization は、既存のリポジトリ単位のプランに留まるか、ユーザごとの価格付けに切り替えることができます。 {% data variables.product.company_short %}は、プランへの強制的な変更の前に12ヶ月間通知します。 サブスクリプションの切り替えに関する詳細については、「[{% data variables.product.prodname_dotcom %} サブスクリプションのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」を参照してください。

{% else %}

課金の基になるのは、お客様が{% ifversion ghec %} Organization または{% endif %} Enterprise に対して選んだ標準ライセンス シートの数です。

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

同じユーザーが複数の Enterprise デプロイで複数のライセンスを使わないようにするには、{% data variables.product.prodname_ghe_server %} 環境と {% data variables.product.prodname_ghe_cloud %} 環境の間でライセンスの使用状況を同期できます。 詳しくは、「[GitHub Enterprise のライセンスについて](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)」をご覧ください。

ライセンス シートに加えて、課金には {% data variables.product.prodname_GH_advanced_security %} などの他の料金が含まれる場合があります。 詳しくは、「[Enterprise の支払いについて](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)」をご覧ください。
{% endif %}

## ライセンスを使用するユーザー

各ユーザーは 1 つのライセンスを使い、{% data variables.product.company_short %} はプライマリ メール アドレスによって個人を識別します。

{% data variables.product.company_short %} は、次のユーザーに課金します。

{%- ifversion ghec %}
- エンタープライズ内の少なくとも 1 つの組織のメンバーまたは所有者である Enterprise 所有者 {%- endif %}
- 所有者を含む組織のメンバー
- フォークを除く、組織が所有するプライベート{% ifversion ghec %}または内部{% endif %}のリポジトリでの外部コラボレーター
- 組織の所有者かメンバーになるための保留中の招待があるユーザー
- フォークを除く、組織が所有するプライベート{% ifversion ghec %}または内部{% endif %}のリポジトリで、外部コラボレーターになるための保留中の招待があるユーザー{%- ifversion ghec %}
- デプロイした {% data variables.product.prodname_ghe_server %} インスタンス上の各ユーザー{%- endif %}
- 休眠ユーザ

{% data variables.product.company_short %} は、次のどのユーザーに対しても課金しません。

{%- ifversion ghec %}
- エンタープライズ内の少なくとも 1 つの組織のメンバーまたは所有者でない Enterprise 所有者
- Enterprise 課金マネージャー{%- endif %}
- {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %} 上の個々の{% endif %}組織の課金マネージャー
- {% ifversion ghec %}エンタープライズまたは{% endif %}組織の課金マネージャーになるための保留中の招待があるユーザー
- Organization が所有するパブリック リポジトリの外部コラボレーターになるための保留中の招待があるユーザー {%- ifversion ghes %}
- 停止されたユーザー {%- endif %}

{% note %}

**注**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}

詳しくは、{% ifversion not fpt %}「[Enterprise でのロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」または{% endif %}「[Organization でのロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」をご覧ください。

ユーザー アカウントが {% ifversion not fpt %}Enterprise 内の複数の Organization のメンバーになっているか、または {% endif %}Organization によって所有される複数のリポジトリにアクセスできる場合であっても、{% data variables.product.company_short %} では、各{% ifversion not fpt %}メンバーまたは{% endif %}外部コラボレーターが課金のためにカウントされるのは 1 回だけです。 外部コラボレーターの詳細については、「[外部のコラボレータを Organization のリポジトリに追加する](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)」を参照してください。

{% ifversion ghes %}停止されているユーザーは、シートを使用しているライセンス ユーザーの数を計算するときにカウントされません。 詳しくは、「[ユーザーの一時停止と一時停止解除](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users)」をご覧ください。{% endif %}

休眠ユーザーは、シート ライセンスを占有します。{% ifversion ghes %}そのため、休眠ユーザーを停止してユーザー ライセンスを解放することができます。{% endif %}詳しくは、「[休眠ユーザーの管理](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)」をご覧ください。

## プランの変更について

{% ifversion fpt %}

{% data variables.product.prodname_dotcom %}プランは、いつでも変更できます。

### ユーザごとのプランのOrganizationでの変更について

{% endif %}

いつでも、{% ifversion fpt or ghec %}Organization{% endif %}{% ifversion ghec %} または {% endif %}{% ifversion ghec or ghes %}Enterprise{% endif %} にライセンス シートを追加できます。 使われている数より多くのシートに支払っている場合は、シートの数を減らすこともできます。{% ifversion fpt %}詳しくは、「[{% data variables.product.prodname_dotcom %} サブスクリプションのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」と「[{% data variables.product.prodname_dotcom %} サブスクリプションのダウングレード](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)」をご覧ください。

プランに関する質問がある場合は、{% data variables.contact.contact_support %}にお問い合わせください。

チームのコラボレーション機能をさらにサポートするために、SAML シングル サインオンや高度な監査のような機能を含む {% data variables.product.prodname_ghe_cloud %} にアップグレードできます。 {% data reusables.enterprise.link-to-ghec-trial %}

ユーザー 1 人あたりの {% data variables.product.prodname_ghe_cloud %} の支払い関する詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)を参照してください。

{% else %}

{% data variables.product.prodname_dotcom_the_website %}でEnterpriseアカウントを使用しており、プランの変更に関する疑問がある場合は、{% data variables.contact.contact_enterprise_sales %}にお問い合わせください。

{% endif %} {% ifversion ghec %}

{% data variables.product.prodname_ghe_cloud %}上の個々のOrganizationを使っている場合は、プランをアップグレードもしくはダウングレードできます。 詳細については、「[{% data variables.product.prodname_dotcom %} サブスクリプションのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」または「[{% data variables.product.prodname_dotcom %} サブスクリプションのダウングレード](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)」を参照してください。 プランに関する質問がある場合は、{% data variables.contact.contact_support %}にお問い合わせください。

{% endif %}

{% ifversion fpt %}

### リポジトリごとのプランのOrganizationの変更について

レガシーの有料プラン間でのアップグレード及びダウングレードは、Organizationの支払い設定から行えます。 より多くのプライベートリポジトリを持つプランにアップグレードするなら、{% data variables.product.company_short %}は即座にアカウントを新しいプランに移行し、支払いサイクル中に残っている日数に比例した価格の差異を課金します。

プライベートリポジトリ数が少ないレガシーの有料プランにダウングレードする場合、新しいプランは次の支払日に有効になります。 新しいプランで利用できる以上のプライベートリポジトリを持っている場合、新しいプランが有効になった時点でプライベートリポジトリはロックされます。 プライベートリポジトリの数を減らすには、プライベートリポジトリの一部をパブリックにするか、プライベートリポジトリをローカルにクローンして {% data variables.product.prodname_dotcom %} 上のコピーを削除します。

{% endif %}

## 参考資料

{%- ifversion not fpt %}
- 「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」 {%- endif %}
- 「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」
