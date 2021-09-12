---
title: コマンドラインを使った Git リポジトリのインポート
intro: '{% if currentVersion == "free-pro-team@latest" %} 既存のコードがプライベートネットワークでホストされている場合など、[GitHub Importer](/articles/importing-a-repository-with-github-importer) が目的に適さない場合は、コマンドラインを使用してインポートすることをお勧めします。{% else %}コマンドラインを使用して Git プロジェクトをインポートすることは、既存のコードがプライベートネットワークでホストされている場合に適しています。{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

始める前に、以下をご確認ください:

- お使いの {% data variables.product.product_name %}ユーザ名
- 外部リポジトリのクローン URL。`https://external-host.com/user/repo.git`、`git://external-host.com/user/repo.git` など (ドメイン名 `external-host.com` の前に `user@` が付く場合もあります)。

{% tip %}

デモでは、以下の情報を使用します:

- 外部アカウント名 **extuser**
- 外部 Git ホスト `https://external-host.com`
- {% data variables.product.product_name %} の個人ユーザ アカウント **ghuser**
- {% data variables.product.product_name %} のリポジトリ **repo.git**

{% endtip %}

1. [{% data variables.product.product_name %} に新しいリポジトリを作成](/articles/creating-a-new-repository)します。 この新しいリポジトリに、外部 Git リポジトリをインポートします。
2. コマンドラインで、外部クローン URL を使用して、リポジトリの "ベア" クローンを作成します。 これはデータの完全なコピーですが、ファイル編集のためのワーキングディレクトリはコピーされず、古いデータすべてのクリーンな新しいエクスポートが作成されます。
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # ローカル リポジトリに、外部リポジトリのベア クローンを作成
  ```
3. "mirror" オプションを使用して、ローカルにクローンされたリポジトリを {% data variables.product.product_name %} にプッシュします。インポートされたリポジトリには、ブランチやタグなどすべての参照がコピーされます。
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # 新しい {% data variables.product.product_name %} リポジトリにミラーをプッシュ
  ```
4. 一時ローカル リポジトリを削除します。
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
