---
title: GitHubパッケージの支払いについて
intro: 'アカウントに含まれるストレージやデータ転送を超えて{% data variables.product.prodname_registry %}を使用したい場合は、追加の使用分が請求されます。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - 支払い
---

### {% data variables.product.prodname_registry %}の支払いについて

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} For more information, see "[About spending limits](#about-spending-limits)."

{% data reusables.package_registry.container-registry-beta-billing-note %}

If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_registry %} usage beyond the amounts including with your account. For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

データ転送は毎月リセットされますが、ストレージはリセットされません。

| 製品                                                               | ストレージ | データ転送 (月あたり) |
| ---------------------------------------------------------------- | ----- | ------------ |
| {% data variables.product.prodname_free_user %}                | 500MB | 1GB          |
| {% data variables.product.prodname_pro %}                        | 2GB   | 10GB         |
| Organization の {% data variables.product.prodname_free_team %} | 500MB | 1GB          |
| {% data variables.product.prodname_team %}                       | 2GB   | 10GB         |
| {% data variables.product.prodname_ghe_cloud %}                | 50GB  | 100GB        |

{% data variables.product.prodname_actions %}によってトリガーされる送信時のデータ転送と、ソースを問わず着信時のデータ転送は無料です。 `GITHUB_TOKEN`を使用して{% data variables.product.prodname_registry %}にログインしているときは、{% data variables.product.prodname_actions %}を使用してパッケージをダウンロードしていると想定します。

|                         | ホスト利用 | セルフホスト |
| ----------------------- | ----- | ------ |
| `GITHUB_TOKEN`を使用するアクセス | 無料    | 無料     |
| パーソナルアクセストークンを使用するアクセス  | 無料    | $      |

ストレージの使用量は、ユーザ自身のアカウントで所有されているリポジトリの{% data variables.product.prodname_actions %}によって生成されるビルドアーチファクトと共有されます。 詳しい情報については、[{% data variables.product.prodname_actions %}の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)を参照してください。

{% data variables.product.prodname_dotcom %}は、パッケージが公開されているリポジトリを所有するアカウントの利用状況に課金をします。 アカウントの利用状況がこれらの制限を超え、使用制限を$0より上に設定している場合は、ストレージ1 GBあたり0.25 USD、データ転送GBあたり0.50 USDを請求されます。

たとえば、Organizationが{% data variables.product.prodname_team %}を使用し、無制限の利用を許可しており、1か月あたりのストレージ使用量が150 GB、データ転送が50GBだった場合、そのOrganizationの当月の超過分はストレージが148GB、データ転送が40GBということです。 ストレージの超過分は、GBあたり$0.25または$37です。 データ転送の超過分は、GBあたり$0.50または$20です。

月末に、{% data variables.product.prodname_dotcom %}はデータ転送を最も近いGBに丸めます。

{% data variables.product.prodname_dotcom %}は、毎月の利用状況をその月の時間の利用状況に基づいて計算します。 たとえば、3月の10日間にストレージを3 GB使用し、3月の21日間に12GBを使用した場合、ストレージの利用状況は次のようになります。

- 3 GB x 10日 x (1日24 時間) = 720 GB時間
- 12 GB x 21日 x (1日24 時間) = 6,048 GB時間
- 720 GB時間 + 6,048 GB時間 = 6,768 GB時間
- 6,768 GB時間 / (月あたり744時間) = 9.0967 GB月

月末に、{% data variables.product.prodname_dotcom %}はストレージ使用量を最も近いGBに丸めます。 したがって、この3月のストレージ使用量は9.097 GBになります。

あなたの{% data variables.product.prodname_registry %} 利用状況は、アカウントの既存の請求日、支払い方法、領収書を共有します。 {% data reusables.dotcom_billing.view-all-subscriptions %}

### 利用上限について

{% data reusables.package_registry.packages-spending-limit-detailed %}

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages)."

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
