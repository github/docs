---
title: Enterprise アカウントの作成
intro: '現在、1 つの組織で {% data variables.product.prodname_ghe_cloud %} を使っている場合、エンタープライズ アカウントを作成して複数の組織を一元管理することができます。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: Create enterprise account
ms.openlocfilehash: a264a5a1ca3e7461c8e05fc02e93064737d79940
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573402'
---
## Enterprise アカウントの作成について

{% data variables.product.prodname_ghe_cloud %} には、Enterprise アカウントを作成するオプションが含まれています。これにより、複数の Organizations 間でのコラボレーションが可能になり、管理者は単一の可視性と管理のポイントが得られます。 詳細については、「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」を参照してください。

{% data reusables.enterprise.create-an-enterprise-account %} 請求書でお支払いになる場合は、{% data variables.product.prodname_dotcom %} に Enterprise アカウントをご自分で作成できます。 そうでない場合は、[営業チームに連絡](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards)して、エンタープライズ アカウントを作成してください。

Enterprise アカウントは、{% data variables.product.prodname_ghe_cloud %} に含まれます。 Enterprise アカウントを作成しても、追加料金が請求されることはありません。

{% data variables.product.product_name %} で既存の Organization を所有する Enterprise アカウントを作成しても、同じ URL のメンバーは、その Organization のリソースを引き続き利用できます。 Organization を Enterprise アカウントに追加すると、次の変更がその Organization に適用されます。

- 既存の Organization は自動的に Enterprise アカウントの所有になります。
- {% data variables.product.company_short %} によって、Enterprise が所有するすべての Organization 内の利用に対して、Enterprise への請求が行われます。 Organization の支払いのメール アドレスを含む Organization の現在の支払いの詳細は、新しい Enterprise アカウントの支払いの詳細になります。 詳しくは、「[Enterprise の支払いについて](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)」をご覧ください。
- Organization の現在のすべての所有者は、Enterprise アカウントの所有者になります。また、Organization の現在のすべての支払いマネージャーは、新しい Enterprise アカウントの支払いマネージャーになります。 詳細については、「[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」を参照してください。

Organization を Enterprise に追加した後で変更をその Organization に適用することについて詳しくは、「[Enterprise への Organization の追加](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account)」を参照してください。

## {% data variables.product.prodname_dotcom %} に Enterprise アカウントを作成する

エンタープライズ アカウントを作成するには、組織で {% data variables.product.prodname_ghe_cloud %} を使っている必要があります。

請求書による支払いの場合、{% data variables.product.prodname_dotcom %} で直接エンタープライズ アカウントを作成できます。 現在請求書による支払いがない場合は、[営業チームに連絡](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards)してエンタープライズ アカウントを作成してください。


{% data reusables.organizations.billing-settings %}
1. **[Upgrade to enterprise account]** をクリックします。

   ![[Upgrade to enterprise account] ボタンのスクリーンショット](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. [Enterprise name] に、エンタープライズ アカウントの名前を入力します。

   ![[Enterprise name] フィールドのスクリーンショット](/assets/images/help/business-accounts/enterprise-name-field.png)
1. [Enterprise URL slug] の下に、Enterprise アカウントのスラッグを入力します。 このスラッグは、Enterprise の URL で使用されます。 たとえば、`octo-enterprise` を選択した場合、Enterprise の URL は `https://github.com/enterprises/octo-enterprise` になります。

   ![[Enterprise URL slug] フィールドのスクリーンショット](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. **[Confirm and upgrade]** をクリックします。

   ![[Confirm and upgrade] ボタンのスクリーンショット](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. 警告を読み、 **[Create enterprise account]** をクリックします。

   ![[Create enterprise account] ボタンのスクリーンショット](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## 次のステップ

Enterprise アカウントを作成したら、Enterprise アカウントの動作と設定とポリシーの構成の詳細について学習することをお勧めします。 詳細については、「[Enterprise アカウントの使用を開始する](/admin/guides#get-started-with-your-enterprise-account)」ラーニング パスに従ってください。
