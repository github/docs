---
title: アカウントの Codespaces をパーソナライズする
intro: '{% data variables.product.product_name %} の「dotfiles」リポジトリか Settings Sync を使用して、{% data variables.product.prodname_codespaces %} をパーソナライズできます。'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: アカウントのパーソナライズ
---


## {% data variables.product.prodname_codespaces %} のパーソナライズについて

開発環境を使用する場合、設定とツールを好みやワークフローに合わせてカスタマイズすることが重要です。 {% data variables.product.prodname_codespaces %} では、Codespaces をパーソナライズするときに使用できる方法は主に 2 つあります。

- [Settings Sync](#settings-sync) - {% data variables.product.prodname_codespaces %} と {% data variables.product.prodname_vscode %} の他のインスタンス間で {% data variables.product.prodname_vscode %} 設定を使用および共有できます。
- [Dotfiles](#dotfiles) – パブリックの `dotfiles` リポジトリを使用して、スクリプト、シェルの環境設定、およびその他の設定を指定できます。

{% data variables.product.prodname_codespaces %} で行ったパーソナライズは、作成するすべての codespace に適用されます。

プロジェクトのメンテナは、ユーザが作成したリポジトリのすべての codespace に適用されるデフォルト設定を定義することもできます。 詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)」を参照してください。

## Settings Sync

Settings Sync を使用すると、設定、キーボードショートカット、スニペット、機能拡張、UI の状態などの設定をマシンと {% data variables.product.prodname_vscode %} のインスタンス間で共有できます。

To enable Settings Sync, in the bottom-left corner of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Turn on Settings Sync…**. From the dialog, select which settings you'd like to sync.

![管理メニューの Setting Sync オプション](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

詳しい情報については、{% data variables.product.prodname_vscode %} ドキュメントの [Settings Sync ガイド](https://code.visualstudio.com/docs/editor/settings-sync)を参照してください。

## Dotfiles

ドットファイルは、`.` で始まる Unix ライクなシステム上のファイルとフォルダであり、システム上のアプリケーションとシェルの設定を制御します。 ドットファイルは、{% data variables.product.prodname_dotcom %} のリポジトリに保存して管理できます。 `dotfiles` リポジトリに含める内容に関するアドバイスとチュートリアルについては、「[GitHub does dotfiles](https://dotfiles.github.io/)」をご覧ください。

{% data variables.product.prodname_dotcom %} のユーザアカウントが `dotfiles` という名前のパブリックリポジトリを所有している場合、{% data variables.product.prodname_dotcom %} は、[個人の Codespaces 設定](https://github.com/settings/codespaces)から有効にすると、このリポジトリを自動的に使用して codespace 環境をパーソナライズできます。 プライベート `dotfiles` リポジトリは現在サポートされていません。

`dotfiles` リポジトリには、シェルのエイリアスと設定、インストールするツール、またはその他の codespace パーソナライゼーションを含めることができます。

新しいコードスペースを作成すると、{% data variables.product.prodname_dotcom %} は `dotfiles` リポジトリを codespace 環境にクローンし、次のいずれかのファイルを探して環境をセットアップします。

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

これらのファイルがいずれも見つからない場合、`.` で始まる `dotfiles` 内のファイルまたはフォルダは、codespace の `~` または `$HOME` ディレクトリにシンボリックリンクされます。

`dotfiles` リポジトリへの変更は、新しい codespace ごとにのみ適用され、既存の codespace には影響しません。

{% note %}

**注釈:** 現在、{% data variables.product.prodname_codespaces %} は、`dotfiles` リポジトリを使用した {% data variables.product.prodname_vscode %} エディタの_ユーザ_設定のパーソナライズをサポートしていません。 プロジェクトのリポジトリ内の特定のプロジェクトに対して、デフォルトの _ワークスペース_および_リモート [Codespaces]_ を設定できます。 詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)」を参照してください。

{% endnote %}

### Enabling your dotfiles repository for {% data variables.product.prodname_codespaces %}

You can use your public `dotfiles` repository to personalize your {% data variables.product.prodname_codespaces %} environment. Once you set up that repository, you can add your scripts, preferences, and configurations to it. You then need to enable your dotfiles from your personal {% data variables.product.prodname_codespaces %} settings page.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Under "Dotfiles", select "Automatically install dotfiles" so that {% data variables.product.prodname_codespaces %} automatically installs your dotfiles into every new codespace you create. ![Installing dotfiles](/assets/images/help/codespaces/install-dotfiles.png)

   {% note %}

   **Note:** This option is only available if you've created a public `dotfiles` repository for your user account.

   {% endnote %}

You can add further script, preferences, configuration files to your dotfiles repository or edit existing files whenever you want. Changes to settings will only be picked up by new codespaces.

## Other available settings

You can also personalize {% data variables.product.prodname_codespaces %} using additional [Codespaces settings](https://github.com/settings/codespaces):

- To set your default region, see "[Setting your default region for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)."
- To set your editor, see "[Setting your default editor for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)."
- To add encrypted secrets, see "[Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)."
- To enable GPG verification, see "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)."
- To allow your codespaces to access other repositories, see "[Managing access and security for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)."

## 参考リンク

* 「[新しいリポジトリを作成する](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)」
