---
title: Codespaces の支払いについて
shortTitle: About billing
intro: 価格を見て、Organizationでの{% data variables.product.prodname_codespaces %}の支払いの管理方法を確認してください。
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Billing
ms.openlocfilehash: bb2b22ce9f34122656134076d4d1e5b49b86e3ce
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381076"
---
## <a name="-data-variablesproductprodname_codespaces--pricing"></a>{% data variables.product.prodname_codespaces %}の価格

{% data variables.product.prodname_codespaces %} の使用量は、{% data variables.product.prodname_team %} と {% data variables.product.prodname_enterprise %} 上のすべての組織とエンタープライズのアカウントに対して課金されます。これには、無料の分数とストレージは含まれません。 現在のところ、個人アカウントは {% data variables.product.prodname_codespaces %} の使用量に対して課金されません。 

{% data variables.product.prodname_codespaces %}の利用については、以下の表に示す計測単位に従って課金されます。

| 製品             | SKU      | Unit of measure | 価格 |
| ------------------- | -------- | --------------- | ----- |
| Codespaces Compute  |  2 コア  | 1 時間          | $0.18 |
|                     |  4 コア  | 1 時間          | $0.36 |
|                     |  8 コア  | 1 時間          | $0.72 |
|                     |  16コア | 1 時間          | $1.44 |
|                     |  32コア | 1 時間          | $2.88 |
| Codespaces Storage  |  Storage | 1GB-月      | $0.07 |

## <a name="about-billing-for--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %} の支払いについて

{% data reusables.codespaces.codespaces-billing %}

{% data variables.product.prodname_codespaces %} の使用状況は、アカウントの既存の請求日、支払い方法、領収書を共有します。 {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %}Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプション ID をエンタープライズ アカウントに接続して、{% data variables.product.prodname_codespaces %} の使用を有効にして支払うことができます。 詳細については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### <a name="billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>{% data variables.product.prodname_codespaces %}プレビルドに対する支払い


{% data reusables.codespaces.billing-for-prebuilds %} 

## <a name="setting-a-spending-limit"></a>利用限度の設定

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

アカウントの利用制限の管理と変更については、「[{% data variables.product.prodname_codespaces %} の利用制限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。

{% data reusables.codespaces.exporting-changes %}

## <a name="limiting-the-choice-of-machine-types"></a>マシンタイプの選択の制限

既定では、codespace を作成するときに、有効なリソースが最も少ないマシンの種類が使われます。 ただし、よりリソースの多いマシンの種類をユーザーが選択できる場合があります。 これは、codespace を作成するとき、または既存の codespace のマシンの種類を変更するときに行うことができます。 詳細については、「[codespace の作成](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」と「[codespace のマシンの種類を変更する](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)」を参照してください。

リソースのより多いマシンの種類を選んだ場合、前述のように、その codespace の 1 分あたりの料金に影響します。 

Organizationオーナーは、ユーザが利用できるマシンタイプを制限するポリシーを作成できます。 詳細については、「[コンピューターの種類へのアクセスの制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」を参照してください。

## <a name="how-billing-is-handled-for-forked-repositories"></a>フォークされたリポジトリでの支払いの扱い

{% data variables.product.prodname_codespaces %}は、支払いできるオーナーが定義されたOrganizationでのみ利用できます。 Organizationに課金をするには、ユーザはメンバーもしくはコラボレータでなければなりません。そうでなければユーザはcodespaceを作成できません。 

たとえば、プライベートなOrganizationのユーザは、そのOrganization内のリポジトリをフォークし、その後Organizationに課金されるcodespaceを使うことができます。これはそのOrganizationが、ユーザのアクセス、フォークされたリポジトリ、codespaceを削除できる親リポジトリのオーナーだからです。
  
## <a name="how-billing-is-handled-when-a-repository-is-transferred"></a>リポジトリが移譲されたときの支払いの扱い

使用量は1時間ごとに課金され、報告されます。 そのため、リポジトリがOrganization内にあれば、あらゆる使用に対して支払いをすることになります。 リポジトリがOrganization外に移譲されると、そのリポジトリ内のすべてのcodespaceは移譲のプロセスの一部として削除されます。

## <a name="what-happens-when-users-are-removed"></a>ユーザが削除されたときに生じること

Organizationもしくはリポジトリからユーザが削除されると、そのユーザのcodespaceは自動的に削除されます。 
