---
title: アカウントの Codespaces をパーソナライズする
intro: 'You can personalize {% data variables.product.prodname_codespaces %} by using a `dotfiles` repository on {% data variables.product.product_name %} or by using Settings Sync.'
permissions: 'Anyone can personalize {% data variables.product.prodname_codespaces %} for their user account.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
---

{% data reusables.codespaces.release-stage %}

### About personalizing {% data variables.product.prodname_codespaces %}

When using any development environment, customizing the settings and tools to your preferences and workflows is an important step. {% data variables.product.prodname_codespaces %} allows for two main ways of personalizing your codespaces.

- [Settings Sync](#settings-sync) - You can use and share {% data variables.product.prodname_vscode %} settings between {% data variables.product.prodname_codespaces %} and other instances of {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) – You can use a public `dotfiles` repository to specify scripts, shell preferences, and other configurations.

{% data variables.product.prodname_codespaces %} personalization applies to any codespace you create.

プロジェクトのメンテナは、ユーザが作成したリポジトリのすべての codespace に適用されるデフォルト設定を定義することもできます。 詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)」を参照してください。

### Settings Sync

Settings Sync allows you to share configurations such as settings, keyboard shortcuts, snippets, extensions, and UI state across machines and instances of {% data variables.product.prodname_vscode %}.

Settings Sync is on by default. To configure any settings, in the bottom-left corner of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Settings Sync is on**. From the dialog, you can choose to configure, show settings and data, or turn off Settings Sync.

![Setting Sync option in manage menu](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

For more information, see the [Settings Sync guide](https://code.visualstudio.com/docs/editor/settings-sync) in the {% data variables.product.prodname_vscode %} documentation.

### Dotfiles

ドットファイルは、`.` で始まる Unix ライクなシステム上のファイルとフォルダであり、システム上のアプリケーションとシェルの設定を制御します。 ドットファイルは、{% data variables.product.prodname_dotcom %} のリポジトリに保存して管理できます。 `dotfiles` リポジトリに含める内容に関するアドバイスとチュートリアルについては、「[GitHub does dotfiles](https://dotfiles.github.io/)」をご覧ください。

{% data variables.product.prodname_dotcom %} のユーザアカウントが `dotfiles` というパブリックリポジトリを所有している場合、{% data variables.product.prodname_dotcom %} は自動的にこのリポジトリを使用して、codespace 環境をパーソナライズします。 プライベート `dotfiles` リポジトリは現在サポートされていません。

`dotfiles` リポジトリには、シェルのエイリアスと設定、インストールするツール、またはその他の codespace パーソナライゼーションを含めることができます。

新しいコードスペースを作成すると、{% data variables.product.prodname_dotcom %} は `dotfiles` リポジトリを codespace 環境にクローンし、次のいずれかのファイルを探して環境をセットアップします。

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _setup.sh_
* _setup_

これらのファイルがいずれも見つからない場合、`.` で始まる `dotfiles` 内のファイルまたはフォルダは、codespace の `~` または `$HOME` ディレクトリにシンボリックリンクされます。

`dotfiles` リポジトリへの変更は、新しい codespace ごとにのみ適用され、既存の codespace には影響しません。

{% note %}

**注釈:** 現在、{% data variables.product.prodname_codespaces %} は、`dotfiles` リポジトリを使用した {% data variables.product.prodname_vscode %} エディタの_ユーザ_設定のパーソナライズをサポートしていません。 プロジェクトのリポジトリ内の特定のプロジェクトに対して、デフォルトの _ワークスペース_および_リモート [Codespaces]_ を設定できます。 詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)」を参照してください。

{% endnote %}

ユーザアカウントに対し、暗号化されたシークレットを追加したり、GPG 検証を有効にしたり、Codespaces が他のリポジトリアクセスできたりするように設定することもできます。 詳しい情報については、「[{% data variables.product.prodname_codespaces %} の暗号化されたシークレットを管理する](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)」、「[{% data variables.product.prodname_codespaces %} の GPG 検証を管理する](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)」、および「[{% data variables.product.prodname_codespaces %} のアクセス権限およびセキュリティを管理する](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)」を参照してください。 "

### 参考リンク

* 「[新しいリポジトリを作成する](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)」
