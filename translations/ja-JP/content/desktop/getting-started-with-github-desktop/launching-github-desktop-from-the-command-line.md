---
title: コマンドラインからのGitHub Desktopの起動方法
shortTitle: Launching from the command line
intro: GitHub Desktopはコマンドラインで起動できます。
versions:
  free-pro-team: '*'
---

{% mac %}

1. In the menu bar, select the **{% data variables.product.prodname_desktop %}** menu, then click **Install Command Line Tool**. ![Install Command Line Tool option in the {% data variables.product.prodname_desktop %} drop-down menu](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. ターミナルを開きます。
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  You can also change to your repository path and then type `github .` to open that repository.

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

 You can also change to your repository path and then type `github .` to open that repository.

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
