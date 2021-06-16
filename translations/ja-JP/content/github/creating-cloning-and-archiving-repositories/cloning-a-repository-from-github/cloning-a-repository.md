---
title: リポジトリをクローンする
intro: '{% data variables.product.product_location %} にリポジトリを作成した場合、それはリモートリポジトリとなります。 リポジトリのクローンを作成して、コンピューター上にローカルコピーを作成し、これらの 2 つの場所の間で同期することができます。'
redirect_from:
  - /articles/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### リポジトリのクローンについて

{% data variables.product.product_location %} からローカルコンピューターにリポジトリのクローンを作成して、マージの競合の修正、ファイルの追加または削除、より大きなコミットのプッシュを簡単に行うことができます。 リポジトリのクローンを作成する場合は、リポジトリを {% data variables.product.product_location %} からローカルマシンにコピーします。

リポジトリをクローンすると、その時点で {% data variables.product.product_location %} にあるすべてのリポジトリデータの完全なコピーがプルダウンされます。これには、プロジェクトのすべてのファイルとフォルダのすべてのバージョンも含まれます。 変更を {% data variables.product.product_location %} のリモートリポジトリにプッシュするか、他のユーザの変更を {% data variables.product.product_location %} からプルすることができます。 For more information, see "[Using Git](/github/getting-started-with-github/using-git)".

既存のリポジトリのクローンを作成することも、他のユーザの既存のリポジトリのクローンを作成してプロジェクトに貢献することもできます。

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**ヒント**: {% data variables.product.prodname_cli %} を使用してリポジトリのクローンを作成することもできます。 詳しい情報については、{% data variables.product.prodname_cli %} ドキュメントの「[`gh repo clone`](https://cli.github.com/manual/gh_repo_clone)」を参照してください。

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
2. HTTPS でコマンドラインを使用してリポジトリをクローンするには、[Quick setup] で {% octicon "clippy" aria-label="The clipboard icon" %} をクリックします。 Organization の SSH 認証局から発行された証明書を含む SSH キーを使用してリポジトリのクローンを作成するには、[**SSH**]、{% octicon "clippy" aria-label="The clipboard icon" %} の順にクリックします。 ![[Empty repository clone URL] ボタン](/assets/images/help/repository/empty-https-url-clone-button.png)

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
