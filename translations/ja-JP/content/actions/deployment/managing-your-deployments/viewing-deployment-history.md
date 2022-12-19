---
title: デプロイ履歴の表示
intro: リポジトリの現在と過去のデプロイメントの表示。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: View deployment history
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
ms.openlocfilehash: 2941d8de6af3b7505a3c05a6b15436d32becea9b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091389'
---
{% data variables.product.prodname_actions %} と環境を介して、または REST API とサード パーティ アプリを使ってデプロイを配信することができます。 {% ifversion fpt or ghae ghes > 3.0 or ghec %}{% data variables.product.prodname_actions %} と共に環境を使ってデプロイする方法については、「[デプロイに環境を使用する](/actions/deployment/using-environments-for-deployment)」を参照してください。 {% endif %}REST API を使ったデプロイの詳細については、「[リポジトリ](/rest/reference/repos#deployments)」を参照してください。

現在と過去のデプロイを表示するには、リポジトリのホーム ページで **[Environments]\(環境\)** をクリックします。
{% ifversion ghae %} ![環境](/assets/images/enterprise/2.22/environments-sidebar.png){% else %} ![環境](/assets/images/environments-sidebar.png){% endif %}

デプロイメントページは、リポジトリの各環境の最新のアクティブなデプロイメントを表示します。 デプロイに環境の URL が含まれている場合、その URL にリンクする **[View deployment]\(デプロイの表示\)** ボタンがデプロイの横に表示されます。

アクティビティログは、環境のデプロイメントの履歴を表示します。 既定では、環境の最新のデプロイのみが `Active` ステータスになります。以前にアクティブだったデプロイはすべて `Inactive` ステータスになります。 デプロイの自動非アクティブ化の詳細については、「[非アクティブなデプロイ](/rest/reference/deployments#inactive-deployments)」を参照してください。

また、REST APIを使ってデプロイメントに関する情報を取得することもできます。 詳細については、「[リポジトリ](/rest/reference/repos#deployments)」を参照してください。
