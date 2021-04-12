---
title: Visual Studio で Codespaces を使用する
intro: '{% data variables.product.product_name %} のアカウントに接続することにより、{% data variables.product.prodname_vs %} の Codespaces で直接開発できます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% note %}

**注釈:** {% data variables.product.prodname_codespaces %} は現在限定パブリックベータであり、変更されることがあります。 ベータ期間中、{% data variables.product.prodname_dotcom %}は{% data variables.product.prodname_codespaces %}の可用性について保証しません。 [限定パブリックベータにサインアップする](https://github.com/features/codespaces/signup-vs) を参照してください。 ベータへの参加に関する詳しい情報については「[{% data variables.product.prodname_codespaces %}について](/github/developing-online-with-codespaces/about-codespaces#joining-the-beta)」を参照してください。

{% endnote %}

### About codespaces in {% data variables.product.prodname_vs %}

{% data variables.product.prodname_vs %} で Codespaces を作成して、Windows 環境でアプリケーションを開発できます。 {% data variables.product.prodname_vs %} で Codespaces を使用すると、ソースコードの参照、ソリューションの構築、リポジトリへの変更をコミットできます。

アプリケーションで使用するには、{% data variables.product.prodname_vs %} で Codespaces を作成する必要があります。 {% data variables.product.prodname_vs %} 外で作成された Codespaces は、現在 {% data variables.product.prodname_vs %} では使用できません。

### 必要な環境

{% data variables.product.prodname_vs %} で Codespaces を設定する前に、最新バージョンの [{% data variables.product.prodname_vs %} Preview](https://aka.ms/vspreview) をダウンロードする必要があります。

#### {% data variables.product.prodname_vs %} と {% data variables.product.prodname_github_codespaces %} 間の接続を有効にする

{% data variables.product.prodname_vs %} Preview を使用した {% data variables.product.prodname_github_codespaces %} への接続はデフォルトでは有効になっていないため、最初に [Preview Features] オプションを有効にする必要があります。

1. {% data variables.product.prodname_vs %} Preview で、[Tools] ドロップダウンメニューを使用し、[**Options**] をクリックします。
2. [**Environment**] で、[**Preview Features**] を選択し、[**Connect to {% data variables.product.prodname_github_codespaces %}**] プレビュー機能を確認します。 ![[Connect to {% data variables.product.prodname_github_codespaces %}] プレビュー機能を確認](/assets/images/help/codespaces/connect-to-github-codespaces-preview-feature.png)
3. この機能を利用するには、{% data variables.product.prodname_vs %} を再起動する必要があります。

### {% data variables.product.prodname_vs %} で Codespaces を作成する

1. {% data variables.product.prodname_vs %} を起動すると、スタートウィンドウの「Get started」の下に [**Connect to a codespace**] ボタンが表示されます。 ![Codespaces に接続する Visual Studio の開始ウィンドウ](/assets/images/help/codespaces/visual-studio-start-window.png)
2. [**Connect to a codespace**] をクリックします。
3. [**Sign in to {% data variables.product.prodname_dotcom %}**] をクリックしてプロンプトに従うか、[**Create one!**] をクリックして新しい {% data variables.product.prodname_dotcom %} アカウントを作成し、アカウントにサインインします。 ![{% data variables.product.prodname_dotcom %} への Visual Studio サインイン](/assets/images/help/codespaces/visual-studio-sign-in-to-github.png)
4. 「Codespace details」の下に、{% data variables.product.prodname_github_codespaces %} が Codespaces にクローンするリポジトリの URL を入力します。
5. 必要に応じて、ドロップダウンメニューの後にインスタンスタイプと中断を使用して、Codespaces の詳細を設定します。 ![Visual Studio Codespaces の詳細](/assets/images/help/codespaces/visual-studio-codespace-details.png)
6. [**Create and Connect**] をクリックします。 {% data variables.product.prodname_github_codespaces %} は Codespaces の準備を開始し、Codespaces の準備ができたら {% data variables.product.prodname_vs %} を開きます。 Codespaces 名は、メニューのリモートインジケーターに表示されます。 ![eShopOnWeb リポジトリ Codespaces に接続された Visual Studio](/assets/images/help/codespaces/visual-studio-eshoponweb-codespace.png)

### {% data variables.product.prodname_vs %} で codespace を開く

1. [File] ドロップダウンメニューを使用して、[**Connect to a Codespace**] をクリックします。 ![Codespaces メニュー項目への Visual Studio ファイル接続](/assets/images/help/codespaces/visual-studio-file-connect-to-codespace.png)
2. [{% data variables.product.prodname_github_codespaces %}] の下で、接続する Codespaces をクリックしてから、[**Connect**] をクリックします。 ![Visual Studio で利用可能な Codespacesと詳細を表示](/assets/images/help/codespaces/visual-studio-connect-codespace.png)

### {% data variables.product.prodname_vs %} の Codespaces を設定する

{% data variables.product.prodname_vs %} で作成された Codespaces は、{% data variables.product.prodname_vs %} に含まれているコマンドラインツールの devinit という新しいツールを使用してカスタマイズできます。

#### devinit

[devinit](https://docs.microsoft.com/visualstudio/devinit/getting-started-with-devinit) を使用すると、Windows の開発 Codespaces への追加のフレームワークとツールのインストールや環境変数の変更などができます。

devinit は、[devinit.json](https://docs.microsoft.com/visualstudio/devinit/devinit-json) という設定ファイルをサポートしています。 カスタマイズされた繰り返し可能な開発環境を作成する場合は、このファイルをプロジェクトに追加します。 [devcontainer.json](https://docs.microsoft.com/visualstudio/ide/codespaces/customize-codespaces#running-devinit-when-creating-a-codespace) ファイルで devinit を使用すると、Codespaces は作成時に自動的に設定されます。

Windows の Codespaces の設定と devinit の詳細については、{% data variables.product.prodname_vs %} ドキュメントの「[Codespaces のカスタマイズ](https://docs.microsoft.com/visualstudio/ide/codespaces/customize-codespaces)」を参照してください。 devinit の詳細については、「[devinit 入門](https://docs.microsoft.com/visualstudio/devinit/getting-started-with-devinit)」を参照してください。
