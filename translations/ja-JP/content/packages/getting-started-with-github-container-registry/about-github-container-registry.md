---
title: GitHub Container Registry について
intro: '{% data variables.product.prodname_github_container_registry %} を利用すると、{% data variables.product.prodname_dotcom %} の Organization または個人ユーザアカウントにシームレスに Docker コンテナイメージをホストして管理できるようになります。 {% data variables.product.prodname_github_container_registry %} を利用すれば、パッケージを管理できるユーザやパッケージにアクセスできるユーザを、きめ細かく設定できます。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% note %}

**注釈:** {% data variables.product.prodname_github_container_registry %} は現在パブリックベータであり、変更されることがあります。 現在のところ、{% data variables.product.prodname_github_container_registry %} がサポートしているのは Docker イメージフォーマットのみです。 ベータ期間中は、ストレージおよび帯域幅の制限はありません。

{% endnote %}


{% data reusables.package_registry.container-registry-feature-highlights %}

パッケージの使用についてのコンテキストを共有するには、{% data variables.product.prodname_dotcom %} でコンテナイメージをリポジトリにリンクできます。 詳しい情報については、「[リポジトリをコンテナイメージに接続する](/packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image)」を参照してください。

### サポートされているフォーマット

{% data variables.product.prodname_container_registry %} は、現在のところ Docker イメージのみをサポートしています。


### コンテナイメージの可視性とアクセス権限

コンテナイメージへのアクセス権限がある場合、コンテナイメージをプライべートまたはパブリックに設定できます。 パブリックイメージは匿名でアクセスでき、認証や CLI 経由でサインインすることなくプルできます。

あなたが管理者であれば、Organization レベルおよびリポジトリレベルに設定した権限とは別に、コンテナイメージに対してアクセス権限を付与することもできます。

ユーザアカウントが所有し公開しているコンテナイメージには、任意のユーザにアクセスロールを付与できます。 Organization が所有し公開しているコンテナイメージには、Organization 内の任意の Team にアクセスロールを付与できます。

| 権限ロール | アクセス権の内容                                                                                             |
| ----- | ---------------------------------------------------------------------------------------------------- |
| Read  | パッケージをダウンロードできます。 <br>メタデータの読み取りができます。                                                         |
| Write | このパッケージをアップロードおよびダウンロードできます。 <br>パッケージのメタデータの読み取りおよび書き込みができます。                                 |
| Admin | このパッケージのアップロード、ダウンロード、削除、管理ができます。 <br>パッケージのメタデータの読み取りおよび書き込みができます。 <br>パッケージに権限を付与できます。 |

詳しい情報については、「[コンテナイメージにアクセス制御と可視性を設定する](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)」を参照してください。

### {% data variables.product.prodname_github_container_registry %}の支払いについて

{% data reusables.package_registry.billing-for-container-registry %}

### サポートへの連絡

{% data variables.product.prodname_github_container_registry %} に関するフィードバックや機能のリクエストがある場合は、[フィードバックフォーム](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages)でご連絡ください。

[連絡フォーム](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)を使い、{% data variables.product.prodname_github_container_registry %}について{% data variables.contact.github_support %}に連絡してください。

* ドキュメンテーションに反する何らかの体験をした時.
* 漠然とした、あるいは不明確なエラーを体験した時.
* GDPR 違反、API キー、個人を識別できる情報といったセンシティブなデータを含むパッケージを公開した時。
