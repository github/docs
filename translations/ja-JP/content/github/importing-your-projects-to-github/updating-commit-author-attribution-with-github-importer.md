---
title: GitHub Importer でコミット作者属性を更新する
intro: インポートの間、コミット作者の GitHub アカウントのリポジトリのコミットにマッチングできます。
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
versions:
  free-pro-team: '*'
---

GitHub Importer は、インポートしているリポジトリのコミット作者のメールアドレスにマッチする GitHub ユーザを探します。 次に、お客様は、そのメールアドレスまたは作者の GitHub ユーザ名を使って、コミットをその作者に接続することができます。

### コミット作者を更新する

1. リポジトリをインポートした後、インポートステータスページで [**Match authors**] をクリックします。 ![[Match authors] ボタン](/assets/images/help/importer/match-authors-button.png)
2. 更新したい情報のある作者の横にある [**Connect**] をクリックします。 ![コミット作者のリスト](/assets/images/help/importer/connect-commit-author.png)
3. 作者のメールアドレスまたは GitHub ユーザ名を入力し、**Enter** を押します。

### パブリックメールアドレスのある GitHub ユーザにコミットを属させる

あなたがインポートしたリポジトリのコミット作者が、コミットを作成するのに使用したメールアドレスと関連する GitHub アカウントを持っている場合、かつ、[そのコミットメールアドレスをプライベートに設定](/articles/setting-your-commit-email-address)していない場合、GitHub Importer は、GitHub アカウントに関連付けられているパブリックメールアドレスを、コミットに関連付けられているメールアドレスにマッチングし、そのコミットを GitHub アカウントに属性付けします。

### パブリックメールアドレスのない GitHub ユーザにコミットを属させる

あなたがインポートしたリポジトリのコミット作者が、GitHub プロフィールでパブリックメールアドレスを設定しておらず、かつ、[コミットメールアドレスをプライベートに設定](/articles/setting-your-commit-email-address)していない場合、GitHub Importer は、GitHub アカウントを、コミットに関連付けられているメールアドレスにマッチングできない場合があります。

このことを、コミット作者はメールアドレスをプライベートに設定することで解決できます。 コミットは、 `<username>@users.noreply.github.com`に属するものとなり、インポートされたコミットは、GitHub アカウントに関連付けられます。

### メールアドレスを使ったコミットの属性付け

作者のメールアドレスが GitHub アカウントに関連付けられていない場合、インポート後、[アカウントにアドレスを追加](/articles/adding-an-email-address-to-your-github-account)し、コミットを正しく属性付けできます。

作者が GitHub アカウントを所有していない場合、GitHub Importer は、コミットをコミットに関連するメールアドレスに属性付けできます。

### 参考リンク

- 「[GitHub Importer について](/articles/about-github-importer)」
- [GitHub Importerでのリポジトリのインポート](/articles/importing-a-repository-with-github-importer)
- 「[アカウントにメールアドレスを追加する](/articles/adding-an-email-address-to-your-github-account/)」
- [コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)
