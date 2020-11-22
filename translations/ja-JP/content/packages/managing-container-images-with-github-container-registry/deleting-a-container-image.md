---
title: コンテナイメージを削除する
intro: 'GraphQL を使って、あるいは {% data variables.product.prodname_dotcom %} 上でプライベートパッケージのバージョンを削除できます。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### パッケージの削除について

{% data variables.product.prodname_dotcom %} 上のコンテナイメージ全体または特定のバージョンを削除できます。 コンテナイメージを削除するには、UI を使用する必要があります。 GraphQL を使用したコンテナイメージの削除は、現時点ではサポートされていません。

コンテナイメージを削除するには、そのコンテナイメージの管理権限が必要です。

パブリックパッケージを削除する場合、そのパッケージに依存するプロジェクトを破壊する可能性があることに注意してください。

### 予約されているパッケージのバージョンと名前

{% data reusables.package_registry.package-immutability %}

### {% data variables.product.prodname_dotcom %} 上でユーザが所持するコンテナイメージのバージョンを削除する

{% data reusables.package_registry.package-settings-from-user-level %}
5. 左にある [**Manage versions**] をクリックします。
5. 削除したいバージョンの右で**Delete（削除）**をクリックしてください。 ![パッケージの削除ボタン](/assets/images/help/package-registry/delete-package-button.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-package-deletion.png)

### {% data variables.product.prodname_dotcom %} 上で Organization が所持するコンテナイメージのバージョンを削除する

{% data reusables.package_registry.package-settings-from-org-level %}
5. 左にある [**Manage versions**] をクリックします。
5. 削除したいバージョンの右で**Delete（削除）**をクリックしてください。 ![パッケージの削除ボタン](/assets/images/help/package-registry/delete-package-button.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-package-deletion.png)
