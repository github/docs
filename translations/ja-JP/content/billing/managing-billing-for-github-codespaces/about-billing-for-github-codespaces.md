---
title: GitHub Codespaces の請求について
shortTitle: About billing
intro: '価格を見て、Organization での{% data variables.product.prodname_github_codespaces %}の支払いの管理方法を確認してください。'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
ms.openlocfilehash: 51ecb4ca1811419cdaeba16865864c5f303bcc7e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147431585'
---
## {% data variables.product.prodname_github_codespaces %} 価格

{% data variables.product.prodname_github_codespaces %} の使用量は、{% data variables.product.prodname_team %} と {% data variables.product.prodname_enterprise %} 上のすべての組織とエンタープライズのアカウントに対して課金されます。これには、無料の分数とストレージは含まれません。 現在のところ、個人アカウントは {% data variables.product.prodname_codespaces %} の使用量に対して課金されません。 

{% data variables.product.prodname_codespaces %}の利用については、以下の表に示す計測単位に従って課金されます。

| 製品             | SKU      | Unit of measure | 価格 |
| ------------------- | -------- | --------------- | ----- |
| Codespaces Compute  |  2 コア  | 1 時間          | $0.18 |
|                     |  4 コア  | 1 時間          | $0.36 |
|                     |  8 コア  | 1 時間          | $0.72 |
|                     |  16コア | 1 時間          | $1.44 |
|                     |  32コア | 1 時間          | $2.88 |
| Codespaces Storage  |  Storage | 1GB-月      | $0.07 |

## {% data variables.product.prodname_codespaces %} の支払いについて

{% data reusables.codespaces.codespaces-billing %}

{% data variables.product.prodname_github_codespaces %} の使用状況は、アカウントの既存の請求日、支払い方法、領収書を共有します。 {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %}Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプション ID をエンタープライズ アカウントに接続して、{% data variables.product.prodname_codespaces %} の使用を有効にして支払うことができます。 詳細については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### {% data variables.product.prodname_codespaces %}プレビルドに対する支払い

{% data reusables.codespaces.billing-for-prebuilds-default %} 

{% data reusables.codespaces.billing-for-prebuilds-reducing %} 

## 利用限度の設定

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

アカウントの利用制限の管理と変更については、「[{% data variables.product.prodname_codespaces %} の利用制限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。

{% data reusables.codespaces.exporting-changes %}

## マシンタイプの選択の制限

既定では、codespace を作成するときに、有効なリソースが最も少ないマシンの種類が使われます。 ただし、よりリソースの多いマシンの種類をユーザーが選択できる場合があります。 これは、codespace を作成するとき、または既存の codespace のマシンの種類を変更するときに行うことができます。 詳細については、「[codespace の作成](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」と「[codespace のマシンの種類を変更する](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)」を参照してください。

リソースのより多いマシンの種類を選んだ場合、前述のように、その codespace の 1 分あたりの料金に影響します。 

Organizationオーナーは、ユーザが利用できるマシンタイプを制限するポリシーを作成できます。 詳細については、「[コンピューターの種類へのアクセスの制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」を参照してください。

## フォークされたリポジトリでの支払いの扱い

{% data variables.product.prodname_codespaces %}は、支払いできるオーナーが定義されたOrganizationでのみ利用できます。 Organizationに課金をするには、ユーザはメンバーもしくはコラボレータでなければなりません。そうでなければユーザはcodespaceを作成できません。 

たとえば、プライベートなOrganizationのユーザは、そのOrganization内のリポジトリをフォークし、その後Organizationに課金されるcodespaceを使うことができます。これはそのOrganizationが、ユーザのアクセス、フォークされたリポジトリ、codespaceを削除できる親リポジトリのオーナーだからです。
  
## リポジトリが移譲されたときの支払いの扱い

使用量は1時間ごとに課金され、報告されます。 そのため、リポジトリがOrganization内にあれば、あらゆる使用に対して支払いをすることになります。 リポジトリがOrganization外に移譲されると、そのリポジトリ内のすべてのcodespaceは移譲のプロセスの一部として削除されます。

## ユーザが削除されたときに生じること

Organizationもしくはリポジトリからユーザが削除されると、そのユーザのcodespaceは自動的に削除されます。 
