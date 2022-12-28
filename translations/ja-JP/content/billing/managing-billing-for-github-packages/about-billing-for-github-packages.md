---
title: GitHubパッケージの支払いについて
intro: 'アカウントに含まれるストレージやデータ転送を超えて{% data variables.product.prodname_registry %}を使用したい場合は、追加の使用分が請求されます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Packages
  - Spending limits
shortTitle: About billing
ms.openlocfilehash: 809065836c17701003917cb679ffc81cceb1b47f
ms.sourcegitcommit: 9b6371e5d55e4078c717e68536eca1fcd44a45e5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180219'
---
## {% data variables.product.prodname_registry %} の課金について

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}詳細については、「[使用制限について](#about-spending-limits)」を参照してください。

{% note %}

**コンテナー イメージ ストレージに対する課金の更新:** {% data variables.product.prodname_container_registry %} のコンテナー イメージ ストレージと帯域幅の無料使用期間が延長されました。 {% data variables.product.prodname_container_registry %}を使用しているなら、少なくても支払い開始の1ヶ月前に通知され、支払いの予想金額の推定が示されます。 {% data variables.product.prodname_container_registry %} について詳しくは、「[コンテナー レジストリの操作](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)」を参照してください。

{% endnote %}

{% ifversion ghec %}Microsoft Enterprise Agreement を通じて {% data variables.product.prodname_enterprise %} を購入した場合は、ご自身の Azure サブスクリプション ID をエンタープライズ アカウントに接続して、ご自身のアカウントに含まれている金額を超える {% data variables.product.prodname_registry %} の使用を有効にして支払うことができます。 詳細については、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。
{% endif %}

データ転送は毎月リセットされますが、ストレージはリセットされません。

製品 | Storage | データ転送 (月あたり)
------- | ------- | ---------
{% data variables.product.prodname_free_user %} | 500 MB | 1GB
{% data variables.product.prodname_pro %} | 2GB | 10 GB
組織の {% data variables.product.prodname_free_team %} | 500 MB | 1GB |
{% data variables.product.prodname_team %} | 2GB | 10 GB
{% data variables.product.prodname_ghe_cloud %} | 50GB | 100GB

{% data variables.product.prodname_actions %}によってトリガーされる送信時のデータ転送と、ソースを問わず着信時のデータ転送は無料です。 `GITHUB_TOKEN` を使用して {% data variables.product.prodname_registry %} にログインしている場合は、{% data variables.product.prodname_actions %} を使用してパッケージをダウンロードしていると見なされます。

||ホストされている|セルフホスト|
|-|-|-|
|`GITHUB_TOKEN` を使用したアクセス|Free|Free|
|{% data variables.product.pat_generic %} を使用してアクセスする|Free|$|

ストレージの使用量は、ユーザ自身のアカウントで所有されているリポジトリの{% data variables.product.prodname_actions %}によって生成されるビルドアーチファクトと共有されます。 詳細については、「[{% data variables.product.prodname_actions %} の課金について](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。

{% data variables.product.prodname_dotcom %}は、パッケージが公開されているリポジトリを所有するアカウントの利用状況に課金をします。 アカウントによる使用がこれらの制限を超え、使用制限を 0 米国ドルより上に設定している場合、日ごとにストレージの GB あたり 0.008 米国ドル、およびデータ転送の GB ごとに 0.50 米国ドルを支払うことになります。

たとえば、Organizationが{% data variables.product.prodname_team %}を使用し、無制限の利用を許可しており、1か月あたりのストレージ使用量が150 GB、データ転送が50GBだった場合、そのOrganizationの当月の超過分はストレージが148GB、データ転送が40GBということです。 ストレージの超過分には、1 日ごとに GB あたり $0.008 USD、つまり 31 日の月で約 $37 USD かかります。 データ転送の超過分は、GBあたり0.50 USDまたは20 USDです。

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}

月末に、{% data variables.product.prodname_dotcom %}はデータ転送を最も近いGBに丸めます。

{% data variables.product.prodname_dotcom %} 毎月の使用量は、その月の時間あたりの利用状況に基づいて GB で算出されます。 たとえば、3 月の 10 日間に 3 GB のストレージを使用し、3 月の 21 日間に 12 GB 使用した場合、ストレージの使用量は次のようになります。

- 3 GB x 10日 x (1日24 時間) = 720 GB時間
- 12 GB x 21日 x (1日24 時間) = 6,048 GB時間
- 720 GB 時間 + 6,048 GB 時間 = 合計 6,768 GB 時間
- 6,768 GB時間 / (月あたり744時間) = 9.0967 GB月

月末に、{% data variables.product.prodname_dotcom %}はストレージ使用量を最も近いGBに丸めます。 そのため、3 月のストレージ使用量は 9.097 GB になります。

また、請求期間の途中でこの計算を使用して、その月の合計使用量を見積もることもできます。 たとえば、2 GB の空きストレージを提供する {% data variables.product.prodname_team %} があなたの Organization で使用されている場合に、あなたが 4 月の最初の 5 日間に 0 GB を使用し、次の 10 日間に 1.5 GB を使用しており、さらに請求期間の最後の 15 日間に 3 GB を使用する予定であるとすると、その月の予想ストレージ使用量は次のようになります。

- 0 GB x 5 日 x (1 日 24 時間) = 0 GB 時間
- 0.5 GB x 10 日 x (1 日 24 時間) = 120 GB 時間
- 3 GB x 15 日 x (1 日 24 時間) = 1080 GB 時間
- 0 GB 時間 + 120 GB 時間 + 1080 GB 時間 = 合計 1200 GB 時間
- 1200 GB 時間/(月あたり 744 時間) = 1.6 GB 月

実際のストレージ量が一時的に 2 GB を超えたとしても、その月の予想される 1.6 GB のストレージ使用量は 2 GB の制限を超えることはありません。

あなたの{% data variables.product.prodname_registry %} 利用状況は、アカウントの既存の請求日、支払い方法、領収書を共有します。 {% data reusables.dotcom_billing.view-all-subscriptions %}

{% data reusables.user-settings.context_switcher %}

## 利用上限について

{% data reusables.package_registry.packages-spending-limit-detailed %}

あなたの使用量が制限を超えないようにするために、{% data variables.product.prodname_dotcom %} では、1 か月を通してストレージ使用量を継続的にチェックします。その場合は、現在のあなたの使用量を確認し、月末に予想される使用量を、そのときまでに変更が行われなかった場合にどのようになるかを計算します。 請求期間中に月単位の予想使用量が使用制限を超えた場合は、{% data variables.product.prodname_registry %} と {% data variables.product.prodname_actions %} の両方が無効にされ、超過分が発生しないようにします。

請求期間のどの時点においてもストレージの予想される最大使用量に対応する使用制限を設定する必要があります。 たとえば、あなたの Organization が {% data variables.product.prodname_team %} を使用していて、使用制限を 50 米国ドルに設定しているとします。 {% data variables.product.prodname_team %} には、2 GB の空きストレージがあります。 その量を超えて使用するストレージについて、{% data variables.product.prodname_dotcom %} では、1 日あたり 1 GB ごとに 0.008 米国ドル、または 31 日の月で 1 GB ごとに約 0.25 米国ドルを課金します。 つまり、設定した 50 ドルの使用制限は、その期間に追加される 200 GB のストレージに対して支払われることを意味します。 請求期間の 10 日目に 202 GB のストレージに達した場合、パッケージまたは {% data variables.product.prodname_actions %} 成果物の次のプッシュは失敗します。その期間における平均消費量が 202 GB を下回っている場合でも、この請求期間内の使用制限によって支払い可能な最大ストレージ量に達していることがその理由です。

現在の請求期間内で使用制限に達しないようにするには、現在のストレージ使用量の一部を削除して、その月の残りの期間での予想使用量を解放します。 この方法を使用すれば、請求期間をより効果的に開始できます。 請求期間の終わりに近づくほど、この方法が予想される月単位の使用量に与える影響は小さくなります。

アカウントの使用制限の管理と変更について詳しくは、「[{% data variables.product.prodname_registry %} の使用制限の管理](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)」を参照してください。

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
