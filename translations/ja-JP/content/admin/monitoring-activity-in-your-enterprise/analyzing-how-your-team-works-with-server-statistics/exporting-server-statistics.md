---
title: Server Statistics をエクスポートする
shortTitle: Export Server Statistics
intro: 'ご利用の {% data variables.product.prodname_server_statistics %} のメトリックを CSV または JSON ファイルでダウンロードすることにより、独自のツールを使って {% data variables.product.prodname_ghe_server %} の経時的な使用状況を分析できます。'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
ms.openlocfilehash: 4e8fa1d040303ec569d11a8a41708ede10b3e76e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718166'
---
最大で過去 365 日までの {% data variables.product.prodname_server_statistics %} のデータを、CSV または JSON ファイルでダウンロードできます。 リポジトリ、Issue、pull request に関する集計メトリックが含まれるこのデータは、Organization のニーズを予測し、チームの活動状況を把握し、{% data variables.product.prodname_ghe_server %} から得られた価値を見るのに役立ちます。 

このデータをダウンロードする前に、{% data variables.product.prodname_server_statistics %} を有効にする必要があります。 詳しくは、「[Enterprise で {% data variables.product.prodname_server_statistics %} を有効にする](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)」をご覧ください。 

ダウンロードできるメトリックを確認するには、「[{% data variables.product.prodname_server_statistics %} について](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)」をご覧ください。

これらのメトリックをダウンロードするには、{% data variables.product.prodname_ghe_cloud %} での Enterprise 所有者または Organization 所有者である必要があります。
  - {% data variables.product.product_location %} が {% data variables.product.prodname_ghe_cloud %} の Enterprise アカウントに接続されている場合は、「[Enterprise アカウントからメトリックをダウンロードする](#downloading-metrics-from-your-enterprise-account)」をご覧ください。
  - {% data variables.product.product_location %} が {% data variables.product.prodname_ghe_cloud %} の Organization に接続されている場合は、「[Organization からメトリックをダウンロードする](#downloading-metrics-from-your-organization)」をご覧ください。

{% data variables.product.prodname_github_connect %} について詳しくは、「[{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect)」をご覧ください。

## Enterprise アカウントからメトリックをダウンロードする

1. {% data variables.product.prodname_ghe_cloud %} の右上隅にあるプロファイルの写真をクリックして、 **[自分の Enterprise]** をクリックします。
  ![[自分の Enterprise] オプションを含むドロップダウン メニュー](/assets/images/help/enterprises/enterprise-admin-account-settings.png)

2. 目的の Enterprise アカウントの横にある **[設定]** をクリックします。
  ![Enterprise 管理者アカウントの横にある [設定] ボタン](/assets/images/help/enterprises/enterprise-admin-account-settings-button.png)

3. 左側の **[GitHub Connect]** をクリックします。
  ![Enterprise 管理者アカウントの下の [GitHub Connect] オプション](/assets/images//help/enterprises/enterprise-admin-github-connect.png)

{% data reusables.server-statistics.csv-download %}

## Organization からメトリックをダウンロードする

1. {% data variables.product.prodname_ghe_cloud %} の右上隅にあるプロファイルの写真をクリックして、 **[自分の Organization]** をクリックします。
  ![[自分の Organization] オプションを含むドロップダウン メニュー](/assets/images/help/enterprises/github-enterprise-cloud-organizations.png)

2. Organization の一覧で、{% data variables.product.product_location %} に接続されている Organization の横にある **[設定]** をクリックします。
  ![{% data variables.product.prodname_ghe_cloud %} Organization の横にある [設定] ボタン](/assets/images/help/enterprises/settings-for-ghec-org.png)

3. 左側の **[GitHub Connect]** をクリックします。
  ![Organization アカウント設定の左側のサイドバーの [GitHub Connect] オプション](/assets/images/help/enterprises/github-connect-option-for-ghec-org.png)

{% data reusables.server-statistics.csv-download %}
