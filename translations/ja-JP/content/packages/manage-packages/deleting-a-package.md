---
title: パッケージを削除する
intro: 'GraphQLを使って、あるいは{% data variables.product.product_name %}上でプライベートパッケージのバージョンを削除できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% if currentVersion == "free-pro-team@latest" %}
### プライベートパッケージの削除について

To delete a container image package on {% data variables.product.product_name %}, see "[Deleting a container image](/packages/guides/deleting-a-container-image)."

{% endif %}

### プライベートパッケージの削除について

{% data variables.product.product_name %}上で、あるいはGraphQL APIで、プライベートパッケージの指定したバージョンだけが削除できます。 {% data variables.product.product_name %}上でプラベートパッケージが完全に表示されないよう削除するには、まずそのパッケージのすべてのバージョンを削除しなければなりません。

{% if currentVersion == "free-pro-team@latest" %}
### パブリックパッケージの削除について

パッケージに依存しているかもしれないプロジェクトが壊れることを避けるために、パブリックなパッケージ全体、あるいはパブリックなパッケージの特定バージョンを削除する事はできません。

法的な理由、あるいはGDPR標準への準拠のような特別な状況下では、{% data variables.contact.github_support %}に対してパブリックパッケージを削除してもらうよう、[連絡フォーム](https://github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Package%20Registry)を使って頼むことができます。

{% else %}

At this time, {% data variables.product.prodname_registry %} on {% data variables.product.product_location %} does not support deleting public packages.

{% endif %}

### {% data variables.product.product_name %}上でのプライベートパッケージのバージョンの削除

プライベートパッケージのバージョンを削除するには、そのリポジトリの管理権限が必要です。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
3. 削除したいパッケージの名前をクリックしてください。 ![パッケージ名](/assets/images/help/package-registry/select-pkg-cloud.png)
4. 右側で**Edit package（パッケージの編集）**ドロップダウンを使い、"Manage versions（バージョンの管理）"を選択してください。 ![パッケージ名](/assets/images/help/package-registry/manage-versions.png)
5. 削除したいバージョンの右で**Delete（削除）**をクリックしてください。 ![パッケージの削除ボタン](/assets/images/help/package-registry/delete-package-button.png)
6. 削除を確認するために、パッケージ名を入力して**I understand the consequences, delete this version（生じることを理解したので、このバージョンを削除してください）**をクリックしてください。 ![パッケージの削除の確認ボタン](/assets/images/help/package-registry/confirm-package-deletion.png)

### GraphQLでのプライベートパッケージのバージョンの削除

GraphQL APIの`deletePackageVersion`ミューテーションを使ってください。 `read:packages`、`delete:packages`、`repo`スコープを持つトークンを使わなければなりません。 トークンに関する詳しい情報については「[{% data variables.product.prodname_registry %}について](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)」を参照してください。

以下は、個人アクセストークンを使って`MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`というパッケージバージョンIDを持つパッケージのバージョンを削除するcURLコマンドの例です。

{% if currentVersion == "free-pro-team@latest" %}
```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
https://api.github.com/graphql
```

{% else %}

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

{% endif %}

パッケージのバージョンIDと併せて{% data variables.product.prodname_registry %}に公開したすべてプライベートパッケージを見つけるには、`registryPackagesForQuery`コネクションが利用できます。 `read:packages`及び`repo`のスコープを持つトークンが必要です。 For more information, see "[`registryPackagesForQuery`](/v4/object/registrypackageconnection/)."

`deletePackageVersion`ミューテーションの詳しい情報については、「[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)」を参照してください。

削除したいパッケージの名前をクリックしてください。
