---
title: GitHub Importer でリポジトリをインポートする
intro: 他のバージョン管理システムにホストされているプロジェクトがある場合は、GitHub Importer ツールを使って自動的に GitHub にインポートすることができます。
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Use GitHub Importer
---

{% tip %}

**ヒント:** GitHub Importer は、すべてのインポートに適しているわけではありません。 たとえば、既存のコードがプライベート ネットワークにホストされている場合、GitHub Importer はそれにアクセスできません。 このような場合、Git リポジトリであれば[コマンドラインを使用したインポート](/articles/importing-a-git-repository-using-the-command-line)、他のバージョン管理システムからインポートするプロジェクトであれば外部の[ソース コード移行ツール](/articles/source-code-migration-tools)をおすすめします。

{% endtip %}

If you'd like to match the commits in your repository to the authors' GitHub personal accounts during the import, make sure every contributor to your repository has a GitHub account before you begin the import.

{% data reusables.repositories.repo-size-limit %}

1. ページの右上角で {% octicon "plus" aria-label="Plus symbol" %} をクリックし、[**Import repository**] を選択します。 ![[New repository] メニューの [Import repository] オプション](/assets/images/help/importer/import-repository.png)
2. [Your old repository's clone URL] に、インポートするプロジェクトの URL を入力します。 ![インポートするリポジトリの URL を入力するテキスト フィールド](/assets/images/help/importer/import-url.png)
3. Choose your personal account or an organization to own the repository, then type a name for the repository on GitHub. ![リポジトリの [Owner] メニューと、リポジトリ名フィールド](/assets/images/help/importer/import-repo-owner-name.png)
4. 新しいリポジトリを*パブリック*にするか*プライベート*にするかを指定します。 詳細は「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」を参照してください。 ![リポジトリの [Public] と [Private] を選択するラジオ ボタン](/assets/images/help/importer/import-public-or-private.png)
5. 入力した情報を確認し、[**Begin import**] をクリックします。 ![[Begin import] ボタン](/assets/images/help/importer/begin-import-button.png)
6. If your old project requires credentials, type your login information for that project, then click **Submit**. If SAML SSO or 2FA are enabled for your user account on the old project, enter a personal access token with repository read permissions in the "Password" field instead of your password. ![パスワード保護されているプロジェクトのパスワード入力フォームと [Submit] ボタン](/assets/images/help/importer/submit-old-credentials-importer.png)
7. 既存のプロジェクトのクローン URL で複数のプロジェクトがホストされいる場合は、インポートしたいプロジェクトを選択して [**Submit**] をクリックします。 ![インポートするプロジェクトのリストと [Submit] ボタン](/assets/images/help/importer/choose-project-importer.png)
8. プロジェクトに 100 MB を超えるファイルがある場合は、[Git Large File Storage](/articles/versioning-large-files) を使用して大きいファイルをインポートするかどうかを選択し、[**Continue**] をクリックします。 ![[Git Large File Storage] メニューと [Continue] ボタン](/assets/images/help/importer/select-gitlfs-importer.png)

リポジトリのインポートが完了すると、メールが届きます。

## 参考リンク

- [GitHub Importerでのコミット作者の属性の更新](/articles/updating-commit-author-attribution-with-github-importer)
