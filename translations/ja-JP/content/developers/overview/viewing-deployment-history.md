---
title: デプロイメント履歴の表示
intro: リポジトリの現在と過去のデプロイメントの表示。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: View deployment history
---


{% ifversion fpt or ghes > 3.0 %}{% data variables.product.prodname_actions %}及び環境、もしくは{% endif %}REST APIとサードパーティのアプリケーションを通じて、デプロイメントを配信できます。 {% ifversion fpt or ghes > 3.0 %}{% data variables.product.prodname_actions %}に関する詳しい情報については「[{% data variables.product.prodname_actions %}](/actions)」を参照してください。 {% endif %} REST APIでのデプロイメントに関する詳しい情報については、「[リポジトリ](/rest/reference/repos#deployments)」を参照してください。

現在及び過去のデプロイメントを表示するには、リポジトリのホームページの** Environments（環境）**をクリックしてください。
{% ifversion ghae or ghes < 3.0 %}
![環境](/assets/images/enterprise/2.22/environments-sidebar.png){% else %}
![Environments](/assets/images/environments-sidebar.png){% endif %}

デプロイメントページは、リポジトリの各環境の最新のアクティブなデプロイメントを表示します。 デプロイメントに環境のURLが含まれるなら、そのURLにリンクする"View deployment（環境の表示）"ボタンがデプロイメントの隣に表示されます。

アクティビティログは、環境のデプロイメントの履歴を表示します。 デフォルトでは、環境の最新のデプロイメントだけが`Active`ステータスを持ち、すべての過去にアクティブだったデプロイメントは`Inactive`ステータスを持ちます。 デプロイメントの自動的な非アクティブ化に関する詳しい情報については「[デプロイメントの非アクティブ化](/rest/reference/repos#inactive-deployments)」を参照してください。

また、REST APIを使ってデプロイメントに関する情報を取得することもできます。 詳しい情報については「[リポジトリ](/rest/reference/repos#deployments)」を参照してください。
