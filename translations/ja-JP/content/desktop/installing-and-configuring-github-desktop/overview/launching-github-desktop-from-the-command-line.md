---
title: コマンドラインからのGitHub Desktopの起動方法
shortTitle: Launching from the command line
intro: GitHub Desktopはコマンドラインで起動できます。
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  fpt: '*'
ms.openlocfilehash: f1624bb5266183d09804d43cf0b04db580231957
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117278'
---
{% mac %}

1. メニュー バーで、 **{% data variables.product.prodname_desktop %}** メニューを選択し、 **[コマンド ライン ツールのインストール]** をクリックします。
![{% data variables.product.prodname_desktop %} ドロップダウン メニューの [コマンド ライン ツールのインストール] オプション](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. ターミナルを開きます。
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  リポジトリ パスに変更してから、`github .` と入力してそのリポジトリを開くこともできます。

  ```shell
  $ cd <em>/path/to/repo</em>
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. コマンド プロンプトを開きます。
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github <em>path\to\repo</em>
  ```

 リポジトリ パスに変更してから、`github .` と入力してそのリポジトリを開くこともできます。

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
