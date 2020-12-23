---
title: アカウントの Codespaces をパーソナライズする
intro: '{% data variables.product.prodname_codespaces %} は {% data variables.product.product_name %} の「dotfiles」リポジトリを使用して、作成したすべての新しい codespace をパーソナライズします。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'ユーザは「dotfiles」リポジトリを作成して、ユーザアカウント用に {% data variables.product.prodname_codespaces %} をパーソナライズできます。'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

ドットファイルは、`.` で始まる Unix ライクなシステム上のファイルとフォルダであり、システム上のアプリケーションとシェルの設定を制御します。 ドットファイルは、{% data variables.product.prodname_dotcom %} のリポジトリに保存して管理できます。 `dotfiles` リポジトリに含める内容に関するアドバイスとチュートリアルについては、「[GitHub does dotfiles](https://dotfiles.github.io/)」をご覧ください。

{% data variables.product.prodname_dotcom %} のユーザアカウントが `dotfiles` というパブリックリポジトリを所有している場合、{% data variables.product.prodname_dotcom %} は自動的にこのリポジトリを使用して、codespace 環境をパーソナライズします。 プライベート `dotfiles` リポジトリは現在サポートされていません。

`dotfiles` リポジトリには、シェルのエイリアスと設定、インストールするツール、またはその他の codespace パーソナライゼーションを含めることができます。

`dotfiles` リポジトリを使用した codespace パーソナライゼーションは、作成したすべての codespace に適用されます。 プロジェクトのメンテナは、ユーザが作成したリポジトリのすべての codespace に適用されるデフォルト設定を定義することもできます。 {% data reusables.codespaces.codespace-config-order %}詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)」を参照してください。

新しいコードスペースを作成すると、{% data variables.product.prodname_dotcom %} は `dotfiles` リポジトリを codespace 環境にクローンし、次のいずれかのファイルを探して環境をセットアップします。

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _setup.sh_
* _setup_

これらのファイルがいずれも見つからない場合、`.` で始まる `dotfiles` 内のファイルまたはフォルダは、codespace の `~` または `$HOME` ディレクトリにシンボリックリンクされます。

`dotfiles` リポジトリへの変更は、新しい codespace ごとにのみ適用され、既存の codespace には影響しません。

詳しい情報については、{% data variables.product.prodname_vscode %} ドキュメントの「[パーソナライズする](https://docs.microsoft.com/visualstudio/online/reference/personalizing)」を参照してください。

{% note %}

**注釈:** 現在、{% data variables.product.prodname_codespaces %} は、`dotfiles` リポジトリを使用した {% data variables.product.prodname_vscode %} エディタの_ユーザ_設定のパーソナライズをサポートしていません。 プロジェクトのリポジトリ内の特定のプロジェクトに対して、デフォルトの _ワークスペース_および_リモート [Codespaces]_ を設定できます。 詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)」を参照してください。

{% endnote %}


### 参考リンク

* 「[新しいリポジトリを作成する](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)」
