---
title: リポジトリをクローンする
intro: 'When you create a repository on {% data variables.product.product_location %}, it exists as a remote repository. You can clone your repository to create a local copy on your computer and sync between the two locations.'
redirect_from:
  - /articles/cloning-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### リポジトリのクローンについて

You can clone a repository from {% data variables.product.product_location %} to your local computer to make it easier to fix merge conflicts, add or remove files, and push larger commits. When you clone a repository, you copy the repository from {% data variables.product.product_location %} to your local machine.

リポジトリをクローンすると、その時点で {% data variables.product.product_location %} にあるすべてのリポジトリデータの完全なコピーがプルダウンされます。これには、プロジェクトのすべてのファイルとフォルダのすべてのバージョンも含まれます。 You can push your changes to the remote repository on {% data variables.product.product_location %}, or pull other people's changes from {% data variables.product.product_location %}. 詳しい情報については、「[一般的な Git コマンドを使用する](/github/using-git/using-common-git-commands)」を参照してください。

You can clone your existing repository or clone another person's existing repository to contribute to a project.

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also clone a repository using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo clone`](https://cli.github.com/manual/gh_repo_clone)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### コマンドラインを使用してリポジトリをクローンする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

### {% data variables.product.prodname_desktop %}にリポジトリをクローンする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
4. {% data variables.product.prodname_desktop %} のプロンプトに従い、クローンを完了させてください。

詳しい情報については、「[{% data variables.product.prodname_dotcom %} から {% data variables.product.prodname_desktop %} にリポジトリをクローンする](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)」を参照してください。

### 空のリポジトリをクローンする

空のリポジトリにはファイルが含まれていません。 リポジトリを作成するときに README でリポジトリを初期化しない場合に多くあります。

{% data reusables.repositories.navigate-to-repo %}
2. HTTPS でコマンドラインを使用してリポジトリをクローンするには、[Quick setup] で {% octicon "clippy" aria-label="The clipboard icon" %} をクリックします。 To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **SSH**, then click {% octicon "clippy" aria-label="The clipboard icon" %}. ![[Empty repository clone URL] ボタン](/assets/images/help/repository/empty-https-url-clone-button.png)

   または、リポジトリをデスクトップにクローンするには、{% octicon "desktop-download" aria-label="The desktop download button" %} [**Set up in Desktop**] をクリックし、プロンプトに従ってクローンを完了します。 ![[Empty repository clone desktop] ボタン](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

### クローンエラーのトラブルシューティング

リポジトリのクローンを作成するときに、エラーが発生する可能性があります。

リポジトリをクローンできない場合は、以下を確認してください。

- HTTPS を使用して接続できる。 詳しい情報については、「[HTTPS クローンエラー](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)」を参照してください。
- クローンするリポジトリへのアクセス権を持っている。 詳しい情報については、「[Error: Repository not found](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)」を参照してください。
- クローンするデフォルトブランチが存在する。 詳しい情報については、「クローンするリポジトリへのアクセス権を持っている」を参照してください。 詳細については、「[Error: Remote HEAD refers to nonexistent ref, unable to checkout](/github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout) 」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

### 参考リンク

- [接続の問題のトラブルシューティング](/articles/troubleshooting-connectivity-problems)
{% endif %}
