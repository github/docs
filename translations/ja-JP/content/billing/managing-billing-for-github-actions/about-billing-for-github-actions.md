---
title: GitHub Actionsの支払いについて
intro: 'アカウントに含まれるストレージや利用時間 (分) を超えて{% data variables.product.prodname_actions %}を使用したい場合は、追加の使用分が請求されます。'
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
shortTitle: GitHub Actionsの支払い
---

## {% data variables.product.prodname_actions %}の支払いについて

{% data reusables.github-actions.actions-billing %}

{% data reusables.github-actions.actions-spending-limit-brief %} 詳しい情報については、「[利用上限について](#about-spending-limits)」を参照してください。

{% ifversion ghec %}
Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合、Azure サブスクリプション ID を Enterprise アカウントに接続して、アカウントを含む金額を超える {% data variables.product.prodname_actions %} の使用を有効にして支払うことができます。 詳しい情報については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

利用時間 (分) は毎月リセットされますが、ストレージはリセットされません。

### Included storage and minutes

| 製品                                                               | ストレージ  | 分 (月あたり) |
| ---------------------------------------------------------------- | ------ | -------- |
| {% data variables.product.prodname_free_user %}                | 500 MB | 2,000    |
| {% data variables.product.prodname_pro %}                        | 1 GB   | 3,000    |
| Organization の {% data variables.product.prodname_free_team %} | 500 MB | 2,000    |
| {% data variables.product.prodname_team %}                       | 2 GB   | 3,000    |
| {% data variables.product.prodname_ghe_cloud %}                | 50 GB  | 50,000   |

{% data variables.product.prodname_dotcom %}がホストするWindows及びmacOSのランナー上で実行されるジョブは、Linuxのランナー上のジョブの消費に対して2倍及び10倍の分を消費します。 たとえば、Windowsでの1,000分はアカウントに含まれる分のうちの2,000分を消費します。 1,000 macOS分を使用すると、アカウントに含まれる10,000分を消費します。

### Minute multipliers

| オペレーティングシステム | 分の倍率 |
| ------------ | ---- |
| Linux        | 1    |
| macOS        | 10   |
| Windows      | 2    |

リポジトリが使用するストレージは、{% data variables.product.prodname_actions %}の成果物と{% data variables.product.prodname_registry %}の消費の合計のストレージです。 ストレージのコストは、アカウントが所有するすべてのリポジトリの合計の使用量です。 {% data variables.product.prodname_registry %}の価格に関する詳細な情報については、「[{% data variables.product.prodname_registry %}の支払いについて](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)」を参照してください。

 If your account's usage surpasses these limits and you have set a spending limit above $0 USD, you will pay $0.25 USD per GB of storage per month and per-minute usage depending on the operating system used by the {% data variables.product.prodname_dotcom %}-hosted runner. {% data variables.product.prodname_dotcom %}は、各ジョブが使用する分をもっとも近い分に丸めます。

{% note %}

**注釈:** 分の倍率は、以下に示す分あたりの料金には適用されません。

{% endnote %}

### Per-minute rates

| オペレーティングシステム | Per-minute rate (USD) |
| ------------ | --------------------- |
| Linux        | $0.008                |
| macOS        | $0.08                 |
| Windows      | $0.016                |

アカウントもしくはOrganization内のすべてのリポジトリにわたって同時に実行できるジョブ数は、あなたのGitHubのプランによります。 詳細については、{% data variables.product.prodname_dotcom %} ホストランナーの「[使用制限と支払い](/actions/reference/usage-limits-billing-and-administration)」、およびセルフホストランナーの使用制限については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。

{% data reusables.user_settings.context_switcher %}

## 利用時間 (分) とストレージ消費量の計算

{% data reusables.dotcom_billing.pricing_cal %}

月末に、{% data variables.product.prodname_dotcom %}はアカウントに含まれている量に対して使用された分とストレージのコストを計算します。

### Sample minutes cost calculation

For example, if your organization uses {% data variables.product.prodname_team %} and allows unlimited spending, using 15,000 minutes could have a total storage and minute overage cost of $56 USD, depending on the operating systems used to run jobs.

- 5,000 (3,000 Linux and 2,000 Windows) minutes = $56 USD ($24 USD + $32 USD).
  - 3,000 Linux minutes at $0.008 USD per minute = $24 USD.
  - 2,000 Windows minutes at $0.016 USD per minute = $32 USD.

{% data variables.product.prodname_dotcom %}は、毎月の利用状況をその月の時間の利用状況に基づいて計算します。

### Sample storage cost calculation

たとえば、3月の10日間にストレージを3 GB使用し、3月の21日間に12GBを使用した場合、ストレージの利用状況は次のようになります。

- 3 GB x 10日 x (1日24 時間) = 720 GB時間
- 12 GB x 21日 x (1日24 時間) = 6,048 GB時間
- 720 GB時間 + 6,048 GB時間 = 6,768 GB時間
- 6,768 GB時間 / (月あたり744時間) = 9.0967 GB月

月末に、{% data variables.product.prodname_dotcom %}はストレージ使用量を最も近いGBに丸めます。 したがって、この3月のストレージ使用量は9.097 GBになります。

{% data variables.product.prodname_actions %} の利用については、アカウントの既存の請求日、支払い方法、領収書が共有されます。 {% data reusables.dotcom_billing.view-all-subscriptions %}

## 利用上限について

{% data reusables.github-actions.actions-spending-limit-detailed %}

アカウントの利用上限の管理と変更については、「[{% data variables.product.prodname_actions %} の利用上限の管理](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)」を参照してください。

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
