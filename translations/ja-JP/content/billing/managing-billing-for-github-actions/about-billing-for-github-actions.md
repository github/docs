---
title: GitHub Actions の課金について
intro: 'アカウントに含まれるストレージや利用時間 (分) を超えて{% data variables.product.prodname_actions %}を使用したい場合は、追加の使用分が請求されます。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Billing for GitHub Actions
ms.openlocfilehash: fcc8f84b8a11b214ca66e8a3851a1afc9df6213a
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191887'
---
## {% data variables.product.prodname_actions %} の課金について

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %}詳細については、「[使用制限について](#about-spending-limits)」を参照してください。

{% ifversion ghec %}Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合は、ご自身の Azure サブスクリプション ID をエンタープライズ アカウントに接続して、ご自身のアカウントに含まれている金額を超える {% data variables.product.prodname_actions %} の使用を有効にして支払うことができます。 詳細については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

時間 (分) は毎月リセットされますが、ストレージはリセットされません。

### 含まれるストレージと分

{% ifversion actions-hosted-runners %} {% note %}

**注**: 2 コアを超える Windows ランナーおよび Ubuntu ランナーには、エンタイトルメント (分) を使用できません。 これらのランナーは、パブリック リポジトリを含め、常に課金されます。 詳しくは、[ランナーの 1 分あたりの料金](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)に関するページを参照してください。

{% endnote %} {% endif %}

|製品 | Storage | 分 (月あたり)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 MB | 2,000 |
| {% data variables.product.prodname_pro %} | 1 GB | 3,000 |
| 組織の {% data variables.product.prodname_free_team %} | 500 MB | 2,000 |
| {% data variables.product.prodname_team %} | 2 GB | 3,000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 GB | 50,000 |

{% data variables.product.prodname_dotcom %}がホストするWindows及びmacOSのランナー上で実行されるジョブは、Linuxのランナー上のジョブの消費に対して2倍及び10倍の分を消費します。 たとえば、Windows で 1,000 分使用すると、アカウントに含まれている 2,000 分が消費されます。 macOS で 1,000 分使用すると、アカウントに含まれている 10,000 分が消費されます。

### 分の倍率

| オペレーティング システム | 分の倍率 |
|------- | ---------|
| Linux | 1 |
| macOS| 10 |
| Windows | 2 |

リポジトリが使用するストレージは、{% data variables.product.prodname_actions %}の成果物と{% data variables.product.prodname_registry %}の消費の合計のストレージです。 ストレージのコストは、お客様のアカウントで所有しているすべてのリポジトリの合計使用量です。 {% data variables.product.prodname_registry %} の価格について詳しくは、「[{% data variables.product.prodname_registry %} の課金について](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)」を参照してください。

 アカウントによる使用がこれらの制限を超え、使用制限を 0 米国ドルより上に設定している場合、日ごとにストレージの GB あたり 0.008 米国ドル、そして {% data variables.product.prodname_dotcom %} ホステッド ランナーで使用されるオペレーティング システムに応じた使用量を分単位で支払うことになります。 {% data variables.product.prodname_dotcom %} は、各ジョブが使った分と分未満をもっとも近い分に切り上げます。

{% note %}

**注:** 分の乗数は、以下に示す分あたりの料金には適用されません。

{% endnote %}

### 分あたりの料金

{% data reusables.billing.billing-standard-runners %} {%- ifversion actions-hosted-runners %} {% data reusables.billing.billing-hosted-runners %} {%- endif %}

- アカウントもしくはOrganization内のすべてのリポジトリにわたって同時に実行できるジョブ数は、あなたのGitHubのプランによります。 詳細について、{% data variables.product.prodname_dotcom %} ホステッド ランナーに関しては「[使用制限と課金](/actions/reference/usage-limits-billing-and-administration)」を、セルフホステッド ランナーの使用制限に関しては「[セルフホステッド ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。
- {% data reusables.user-settings.context_switcher %} {% ifversion actions-hosted-runners %} 
- {% data variables.actions.hosted_runner %} の場合、パブリック静的 IP アドレスを {% data variables.actions.hosted_runner %} に割り当てる構成に追加のコストは発生しません。 {% data variables.actions.hosted_runner %} について詳しくは、「[{% data variables.actions.hosted_runner %} の使用](/actions/using-github-hosted-runners/using-larger-runners)」を参照してください。
- {% data variables.actions.hosted_runner %} にはエンタイトルメント (分) を使用できません。
- {% data variables.actions.hosted_runner %} は、パブリック リポジトリについては無料ではありません。
{% endif %}

## 利用時間 (分) とストレージ消費量の計算

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_actions %}

月末に、{% data variables.product.prodname_dotcom %}はアカウントに含まれている量に対して使用された分とストレージのコストを計算します。

### 分のコスト計算例

たとえば、Organizationが{% data variables.product.prodname_team %}を使用しており、使用量に制限をしていない場合、5,000分を使用すればジョブを実行しているオペレーティングシステムによって、合計でストレージと分は56米ドルの超過コストになるかもしれません。

- 5,000 (3,000 Linux と 2,000 Windows) 分 = 56米ドル (24米ドル + 32米ドル)。
  - 単価 0.008米ドル で 3,000 Linux 分 = 24米ドル。
  - 単価 0.016米ドル で 2,000 Windows 分 = 32米ドル。

{% data variables.product.prodname_dotcom %} 毎月の利用状況は、その月の時間あたりの利用状況に基づいて計算されます。

### ストレージのコスト計算例

たとえば、3 月の 10 日間に 3 GB のストレージを使用し、3 月の 21 日間に 12 GB 使用した場合、ストレージの使用量は次のようになります。

- 3 GB x 10日 x (1日24 時間) = 720 GB時間
- 12 GB x 21日 x (1日24 時間) = 6,048 GB時間
- 720 GB時間 + 6,048 GB時間 = 6,768 GB時間
- 6,768 GB時間 / (月あたり744時間) = 9.0967 GB月

月末に、{% data variables.product.prodname_dotcom %}はストレージ使用量を最も近いGBに丸めます。 そのため、3 月のストレージ使用量は 9.097 GB になります。

{% data variables.product.prodname_actions %} の利用については、アカウントの既存の請求日、支払い方法、領収書が共有されます。 {% data reusables.dotcom_billing.view-all-subscriptions %}

## 利用上限について

{% data reusables.actions.actions-spending-limit-detailed %}

アカウントの使用制限の管理と変更については、「[{% data variables.product.prodname_actions %} の使用制限の管理](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)」を参照してください。

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
