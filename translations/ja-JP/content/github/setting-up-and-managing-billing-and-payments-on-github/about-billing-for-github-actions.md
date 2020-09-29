---
title: GitHub Actionsの支払いについて
intro: 'アカウントに含まれるストレージや利用時間 (分) を超えて{% data variables.product.prodname_actions %}を使用したい場合は、追加の使用分が請求されます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_actions %}の支払いについて

{% data reusables.github-actions.actions-billing %} {% data reusables.github-actions.actions-spending-limit %}

利用時間 (分) は毎月リセットされますが、ストレージはリセットされません。

| 製品                                                                    | ストレージ  | 分 (月あたり) |
| --------------------------------------------------------------------- | ------ | -------- |
| {% data variables.product.prodname_free_user %}                | 500 MB | 2,000    |
| {% data variables.product.prodname_pro %}                        | 1 GB   | 3,000    |
| Organization の {% data variables.product.prodname_free_team %} | 500 MB | 2,000    |
| {% data variables.product.prodname_team %}                       | 2 GB   | 3,000    |
| {% data variables.product.prodname_ghe_cloud %}                | 50 GB  | 50,000   |

{% data variables.product.prodname_dotcom %}がホストするWindows及びmacOSのランナー上で実行されるジョブは、Linuxのランナー上のジョブの消費に対して2倍及び10倍の分を消費します。 たとえば、Windowsでの1,000分はアカウントに含まれる分のうちの2,000分を消費します。 1,000 macOS分を使用すると、アカウントに含まれる10,000分を消費します。

| オペレーティングシステム | 分の倍率 |
| ------------ | ---- |
| Linux        | 1    |
| macOS        | 10   |
| Windows      | 2    |

リポジトリが使用するストレージは、{% data variables.product.prodname_actions %}の成果物と{% data variables.product.prodname_registry %}の消費の合計のストレージです。 ストレージのコストは、アカウントが所有するすべてのリポジトリの合計の使用量です。 {% data variables.product.prodname_registry %}の価格に関する詳細な情報については、「[{% data variables.product.prodname_registry %}の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)」を参照してください。

 アカウントによる利用がこれらの制限を超え、消費の限度を0ドル以上に設定しているなら、月あたりストレージのGBごとに0.25米ドル、そして{% data variables.product.prodname_dotcom %}ホストランナーが使用するオペレーティングシステムに応じた分の使用量ごとに支払うことになります。 {% data variables.product.prodname_dotcom %}は、各ジョブが使用する分をもっとも近い分に丸めます。

{% note %}

**注釈:** 分の倍率は、以下に示す分あたりの料金には適用されません。

{% endnote %}

| オペレーティングシステム | 分あたりの料金 |
| ------------ | ------- |
| Linux        | $0.008  |
| macOS        | $0.08   |
| Windows      | $0.016  |

アカウントもしくはOrganization内のすべてのリポジトリにわたって同時に実行できるジョブ数は、あなたのGitHubのプランによります。 詳細については、「[{% data variables.product.prodname_actions %}について](/actions/automating-your-workflow-with-github-actions/about-github-actions/#usage-limits)」を参照してください。

### 利用時間 (分) とストレージ消費量の計算

月末に、{% data variables.product.prodname_dotcom %}はアカウントに含まれている量に対して使用された分とストレージのコストを計算します。 たとえば、Organizationが{% data variables.product.prodname_team %}を使用しており、使用量に制限をしていない場合、15,000分を使用すればジョブを実行しているオペレーティングシステムによって、合計でストレージと分は56ドルの超過コストになるかもしれません。

- 5,000 (3,000 Linux と 2,000 Windows) 分 = $56 ($24 + $32)。
  - 単価$0.008で3,000 Linux分 = $24。
  - 単価$0.016で2,000 Windows分 = $32。

月末に、{% data variables.product.prodname_dotcom %}はデータ転送を最も近いGBに丸めます。

{% data variables.product.prodname_dotcom %}は、毎月の利用状況をその月の時間の利用状況に基づいて計算します。 たとえば、3月の10日間にストレージを3 GB使用し、3月の21日間に12GBを使用した場合、ストレージの利用状況は次のようになります。

- 3 GB x 10日 x (1日24 時間) = 720 GB時間
- 12 GB x 21日 x (1日24 時間) = 6,048 GB時間
- 720 GB時間 + 6,048 GB時間 = 6,768 GB時間
- 6,768 GB時間 / (月あたり744時間) = 9.0967 GB月

月末に、{% data variables.product.prodname_dotcom %}はストレージ使用量を最も近いGBに丸めます。 したがって、この3月のストレージ使用量は9.097 GBになります。

{% data variables.product.prodname_actions %} の利用については、アカウントの既存の請求日、支払い方法、領収書が共有されます。 {% data reusables.dotcom_billing.view-all-subscriptions %}

### 利用上限について

デフォルトでは、アカウントで{% data variables.product.prodname_actions %}を使用する際の利用上限は$0です。 アカウントに含まれる金額を超えたプライベートリポジトリの分とストレージの利用を有効にしたい場合は、利用上限を増やすか、利用を無制限にすることができます。 詳しい情報については「[{% data variables.product.prodname_actions %}の利用上限の管理](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions)」を参照してください。

{% data reusables.github-actions.spending-limit-enterprise-account %}

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
