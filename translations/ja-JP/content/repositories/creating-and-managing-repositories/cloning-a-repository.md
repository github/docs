---
title: リポジトリをクローンする
intro: '{% data variables.product.product_location %} にリポジトリを作成した場合、それはリモートリポジトリとなります。 リポジトリのクローンを作成して、コンピューター上にローカルコピーを作成し、これらの 2 つの場所の間で同期することができます。'
redirect_from:
  - /articles/cloning-a-repository
  - /articles/cloning-a-repository-from-github
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## リポジトリのクローンについて

{% data variables.product.product_location %} からローカルコンピューターにリポジトリのクローンを作成して、マージの競合の修正、ファイルの追加または削除、より大きなコミットのプッシュを簡単に行うことができます。 リポジトリのクローンを作成する場合は、リポジトリを {% data variables.product.product_location %} からローカルマシンにコピーします。

リポジトリをクローンすると、その時点で {% data variables.product.product_location %} にあるすべてのリポジトリデータの完全なコピーがプルダウンされます。これには、プロジェクトのすべてのファイルとフォルダのすべてのバージョンも含まれます。 変更を {% data variables.product.product_location %} のリモートリポジトリにプッシュするか、他のユーザの変更を {% data variables.product.product_location %} からプルすることができます。 For more information, see "[Using Git](/github/getting-started-with-github/using-git)".

既存のリポジトリのクローンを作成することも、他のユーザの既存のリポジトリのクローンを作成してプロジェクトに貢献することもできます。

## リポジトリをクローンする

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To clone a repository locally, use the `repo clone` subcommand. Replace the `repository` parameter with the repository name. For example, `octo-org/octo-repo`, `monalisa/octo-repo`, or `octo-repo`. If the `OWNER/` portion of the `OWNER/REPO` repository argument is omitted, it defaults to the name of the authenticating user.

```shell
gh repo clone <em>repository</em>
```

You can also use the GitHub URL to clone a repository.

```shell
gh repo clone <em>https://github.com/cli/cli</em>
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
4. {% data variables.product.prodname_desktop %} のプロンプトに従い、クローンを完了させてください。

詳しい情報については、「[{% data variables.product.prodname_dotcom %} から {% data variables.product.prodname_desktop %} にリポジトリをクローンする](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)」を参照してください。

{% enddesktop %}

## 空のリポジトリをクローンする

空のリポジトリにはファイルが含まれていません。 リポジトリを作成するときに README でリポジトリを初期化しない場合に多くあります。

{% data reusables.repositories.navigate-to-repo %}
2. HTTPS でコマンドラインを使用してリポジトリをクローンするには、[Quick setup] で {% octicon "clippy" aria-label="The clipboard icon" %} をクリックします。 Organization の SSH 認証局から発行された証明書を含む SSH キーを使用してリポジトリのクローンを作成するには、[**SSH**]、{% octicon "clippy" aria-label="The clipboard icon" %} の順にクリックします。 ![[Empty repository clone URL] ボタン](/assets/images/help/repository/empty-https-url-clone-button.png)

   または、リポジトリをデスクトップにクローンするには、{% octicon "desktop-download" aria-label="The desktop download button" %} [**Set up in Desktop**] をクリックし、プロンプトに従ってクローンを完了します。 ![[Empty repository clone desktop] ボタン](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
{% data reusables.command_line.git-clone-url %}
{% data reusables.command_line.local-clone-created %}

## クローンエラーのトラブルシューティング

リポジトリのクローンを作成するときに、エラーが発生する可能性があります。

リポジトリをクローンできない場合は、以下を確認してください。

- HTTPS を使用して接続できる。 詳しい情報については、「[HTTPS クローンエラー](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)」を参照してください。
- クローンするリポジトリへのアクセス権を持っている。 詳しい情報については、「[Error: Repository not found](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)」を参照してください。
- クローンするデフォルトブランチが存在する。 詳細については、「[Error: Remote HEAD refers to nonexistent ref, unable to checkout](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout) 」を参照してください。

{% ifversion fpt or ghec %}

## 参考リンク

- [接続の問題のトラブルシューティング](/articles/troubleshooting-connectivity-problems)
{% endif %}
