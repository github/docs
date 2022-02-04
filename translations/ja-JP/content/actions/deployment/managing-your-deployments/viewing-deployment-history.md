---
title: デプロイメント履歴の表示
intro: リポジトリの現在と過去のデプロイメントの表示。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: デプロイメント履歴の表示
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
---


{% ifversion fpt or ghae or ghes > 3.0 or ghec %}{% data variables.product.prodname_actions %}及び環境、もしくは{% endif %}REST APIとサードパーティのアプリケーションを通じて、デプロイメントを配信できます。 {% ifversion fpt or ghae ghes > 3.0 or ghec %}For more information about using environments to deploy with {% data variables.product.prodname_actions %}, see "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)." {% endif %} REST APIでのデプロイメントに関する詳しい情報については、「[リポジトリ](/rest/reference/repos#deployments)」を参照してください。

現在及び過去のデプロイメントを表示するには、リポジトリのホームページの** Environments（環境）**をクリックしてください。
{% ifversion ghae %}
![環境](/assets/images/enterprise/2.22/environments-sidebar.png){% else %}
![Environments](/assets/images/environments-sidebar.png){% endif %}

デプロイメントページは、リポジトリの各環境の最新のアクティブなデプロイメントを表示します。 If the deployment includes an environment URL, a **View deployment** button that links to the URL is shown next to the deployment.

アクティビティログは、環境のデプロイメントの履歴を表示します。 デフォルトでは、環境の最新のデプロイメントだけが`Active`ステータスを持ち、すべての過去にアクティブだったデプロイメントは`Inactive`ステータスを持ちます。 デプロイメントの自動的な非アクティブ化に関する詳しい情報については「[デプロイメントの非アクティブ化](/rest/reference/deployments#inactive-deployments)」を参照してください。

また、REST APIを使ってデプロイメントに関する情報を取得することもできます。 詳しい情報については「[リポジトリ](/rest/reference/repos#deployments)」を参照してください。
