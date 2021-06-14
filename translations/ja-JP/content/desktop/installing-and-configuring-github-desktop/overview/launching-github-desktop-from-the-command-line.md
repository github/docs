---
title: コマンドラインからのGitHub Desktopの起動方法
shortTitle: コマンドラインから起動する
intro: GitHub Desktopはコマンドラインで起動できます。
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  free-pro-team: '*'
---

{% mac %}

1. メニューバーで、[**{% data variables.product.prodname_desktop %}**] メニューを選択し、[**Install Command Line Tool**] をクリックします。 ![[{% data variables.product.prodname_desktop %}]ドロップダウンメニューの [Install Command Line Tool] オプション](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. ターミナルを開きます。
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  リポジトリパスに変更してから、`github .`と入力してそのリポジトリを開くこともできます。

  ```shell
  $ cd <em>/path/to/repo</em>
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. コマンドラインプロンプトを開きます。
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github <em>path\to\repo</em>
  ```

 リポジトリパスに変更してから、`github .`と入力してそのリポジトリを開くこともできます。

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
