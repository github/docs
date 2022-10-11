---
title: パッケージを削除する
intro: 'GraphQLを使って、あるいは{% data variables.product.product_name %}上で{% if currentVersion != "github-ae@latest" %}プライベート{% endif %}パッケージのバージョンを削除できます。'
product: '{% data reusables.gated-features.packages %}'
versions:
  enterprise-server: '>=2.22 <3.1'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% if currentVersion != "github-ae@latest" %}現時点では、{% data variables.product.product_location %}の{% data variables.product.prodname_registry %} ではパブリックパッケージの削除をサポートしていません。{% endif %}

{% data variables.product.product_name %}上、またはGraphQL APIで、{% if currentVersion != "github-ae@latest" %}プライベート{% endif %}パッケージの指定したバージョンだけを削除できます。 {% data variables.product.product_name %}上で{% if currentVersion != "github-ae@latest" %}プライベート{% endif %}パッケージが完全に表示されないように削除するには、まずそのパッケージのすべてのバージョンを削除しなければなりません。

### {% data variables.product.product_name %}上で{% if currentVersion != "github-ae@latest" %}プライベート{% endif %}パッケージのバージョンを削除する

{% if currentVersion != "github-ae@latest" %}プライベート{% endif %}パッケージのバージョンを削除するには、そのリポジトリの管理権限が必要です。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
3. 削除したいパッケージの名前をクリックしてください。 ![パッケージ名](/assets/images/help/package-registry/select-pkg-cloud.png)
4. 右側で**Edit package（パッケージの編集）**ドロップダウンを使い、"Manage versions（バージョンの管理）"を選択してください。 ![パッケージ名](/assets/images/help/package-registry/manage-versions.png)
5. 削除したいバージョンの右で**Delete（削除）**をクリックしてください。 ![パッケージの削除ボタン](/assets/images/help/package-registry/delete-package-button.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-package-deletion.png)

### GraphQLでリポジトリの{% if currentVersion != "github-ae@latest" %}プライベート{% endif %}パッケージのバージョンを削除する

GraphQL APIの`deletePackageVersion`ミューテーションを使ってください。 `read:packages`、`delete:packages`、`repo`スコープを持つトークンを使わなければなりません。 トークンに関する詳しい情報については「[{% data variables.product.prodname_registry %}について](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)」を参照してください。

以下は、個人アクセストークンを使って`MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`というパッケージバージョンIDを持つパッケージのバージョンを削除するcURLコマンドの例です。

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

パッケージのバージョンIDと併せて{% data variables.product.prodname_registry %}に公開したすべての{% if currentVersion != "github-ae@latest" %}プライベート{% endif %}パッケージを見つけるには、`repository`オブジェクトを通じて`registryPackagesForQuery`コネクションが利用できます。 `read:packages`及び`repo`のスコープを持つトークンが必要です。 For more information, see "[`registryPackagesForQuery`](/v4/object/registrypackageconnection/)."

`deletePackageVersion`ミューテーションの詳しい情報については、「[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)」を参照してください。

パッケージ全体を削除することはできませんが、パッケージのすべてのバージョンを削除すれば、パッケージは{% data variables.product.product_name %}上に表示されなくなります。
