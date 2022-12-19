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
ms.openlocfilehash: 16de23fa922a593bb03fedcb7f902822cffce7f9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106670'
---
## ユーザごとの価格付けについて

{% ifversion fpt %}

{% data variables.product.prodname_dotcom_the_website %}上の新しいOrganizationは、{% data variables.product.prodname_free_team %}でパブリック及びオープンソースのプロジェクトを構築するか、ユーザごとの価格付けの有料製品にアップグレードすることができます。 詳細については、「[{% data variables.product.company_short %} の製品](/get-started/learning-about-github/githubs-products)」および「[{% data variables.product.prodname_dotcom %} サブスクリプションのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」を参照してください。

2016 年 5 月 11 日以前に有料プランを使っていた Organization は、既存のリポジトリ単位のプランに留まるか、ユーザごとの価格付けに切り替えることができます。 {% data variables.product.company_short %}は、プランへの強制的な変更の前に12ヶ月間通知します。 サブスクリプションの切り替えに関する詳細については、「[{% data variables.product.prodname_dotcom %} サブスクリプションのアップグレード](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)」を参照してください。

{% else %}

課金の基になるのは、お客様が{% ifversion ghec %} Organization または{% endif %} Enterprise に対して選んだ標準ライセンス シートの数です。

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

同じユーザーが複数の Enterprise デプロイで複数のライセンスを使わないようにするには、{% data variables.product.prodname_ghe_server %} 環境と {% data variables.product.prodname_ghe_cloud %} 環境の間でライセンスの使用状況を同期できます。 詳しくは、「[GitHub Enterprise のライセンスについて](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)」をご覧ください。

ライセンス シートに加えて、課金には {% data variables.product.prodname_GH_advanced_security %} などの他の料金が含まれる場合があります。 詳しくは、「[Enterprise の支払いについて](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)」をご覧ください。
{% endif %}

## ライセンスを使用するユーザー

{% ifversion fpt %}

{% data variables.product.company_short %} は、次のユーザーに課金します。

- 所有者を含む組織のメンバー
- フォークを除く、組織が所有するプライベートのリポジトリでの外部コラボレーター
- フォークを除く、組織が所有するプライベートまたは内部のリポジトリで、外部コラボレーターになるための保留中の招待があるユーザー
- 休眠ユーザ

{% note %}

**注:** 
- ユーザー アカウントが Organization によって所有される複数のリポジトリにアクセスできる場合であっても、{% data variables.product.company_short %} では、各外部コラボレーターが課金のためにカウントされるのは 1 回だけです。
- {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %} は、次のユーザーに対して課金しません。

- 支払いマネージャー
- 支払いマネージャーになるための保留中の招待があるユーザー
- 組織が所有するパブリック リポジトリの外部コラボレーターになるための保留中の招待があるユーザー

{% else %}

{% data variables.product.company_short %} は、{% data variables.product.prodname_enterprise %} のデプロイごとに次のアカウントに対して課金します。

### {% data variables.product.prodname_ghe_cloud %} でライセンスを使用するアカウント

{% data variables.product.company_short %} は、{% data variables.product.prodname_ghe_cloud %} の次の各アカウントに対して課金します。

- Enterprise 内の少なくとも 1 つの組織のメンバーまたは所有者である Enterprise 所有者
- 所有者を含む組織のメンバー
- フォークを除く、組織が所有するプライベートまたは内部リポジトリでの外部コラボレーター
- 休眠ユーザ

Enterprise で {% data variables.product.prodname_emus %} を使用していない場合は、次の各アカウントに対しても課金されます。

- 組織の所有者かメンバーになるための保留中の招待があるユーザー
- フォークを除く、組織が所有するプライベートまたは内部のリポジトリで、外部コラボレーターになるための保留中の招待があるユーザー

{% note %}

**注:** 
  - ユーザー アカウントが Enterprise 内の複数の Organization のメンバーになっているか、または Organization によって所有される複数のリポジトリにアクセスできる場合であっても、{% data variables.product.company_short %} では、各メンバーまたは外部コラボレーターが課金のためにカウントされるのは 1 回だけです。
  - {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %} は、次のどのアカウントに対しても課金しません。

- 中断されている {% data variables.enterprise.prodname_managed_users_caps %}
- エンタープライズ内の少なくとも 1 つの組織のメンバーまたは所有者でない Enterprise 所有者
- Enterprise 支払いマネージャー
- 個々の組織の支払いマネージャー
- 支払いマネージャーになるための保留中の招待があるユーザー
- 組織が所有するパブリック リポジトリの外部コラボレーターになるための保留中の招待があるユーザー

### {% data variables.product.prodname_ghe_server %} でライセンスを使用するアカウント

{% data variables.product.prodname_ghe_server %} の各ユーザー アカウントは、シートを使用します。

停止されているユーザーは、シートを使用しているライセンス ユーザーの数を計算するときにカウントされません。 詳しくは、{% data variables.product.prodname_ghe_server %} ドキュメント{% else %}の「[ユーザーの一時停止と一時停止解除]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users){% ifversion not ghes %}」をご覧ください。{% endif %}

休止中のユーザーはシート ライセンスを占有します。 そのため、休止中のユーザーを一時停止してユーザー ライセンスを解放することを選択できます。 詳しくは、{% data variables.product.prodname_ghe_server %} ドキュメント{% else %}の「[休止中のユーザーの管理]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users){% ifversion not ghes %}」をご覧ください。{% endif %}

{% endif %}

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
- "[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)"
- 「[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」 {%- endif %}
- 「[組織のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」
- 「[外部コラボレーターを Organization のリポジトリに追加する](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)」
