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
ms.openlocfilehash: 09b03d2c2c62cf5812f35a3d5b3379c2d0c8e33e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145911200'
---
{% tip %}

**参考:** GitHub Importer は、すべてのインポートに適しているわけではありません。 たとえば、既存のコードがプライベート ネットワークにホストされている場合、GitHub Importer はそれにアクセスできません。 このような場合、Git リポジトリであれば[コマンドラインを使用したインポート](/articles/importing-a-git-repository-using-the-command-line)、他のバージョン管理システムからインポートするプロジェクトであれば外部の[ソース コード移行ツール](/articles/source-code-migration-tools)をお勧めします。

{% endtip %}

インポート中に、自分のリポジトリでのコミットを作者の GitHub 個人アカウントに一致させたい場合は、インポートを始める前に、リポジトリのコントリビューター全員が GitHub アカウントを持っていることを確認してください。

{% data reusables.repositories.repo-size-limit %}

1. ページの右上角で {% octicon "plus" aria-label="Plus symbol" %} をクリックし、 **[リポジトリのインポート]** をクリックします。
![[新しいレポジトリ] メニューの [リポジトリのインポート] オプション](/assets/images/help/importer/import-repository.png)
2. [Your old repository's clone URL] に、インポートするプロジェクトの URL を入力します。
![インポートするリポジトリの URL を入力するテキスト フィールド](/assets/images/help/importer/import-url.png)
3. 自分の個人アカウント、またはリポジトリを所有する Organization を選択し、GitHub 上のリポジトリの名前を入力します。
![リポジトリの [所有者] メニューと、リポジトリ名フィールド](/assets/images/help/importer/import-repo-owner-name.png)
4. 新しいリポジトリを *パブリック* にするか *プライベート* にするかを指定します。 詳細については、「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」を参照してください。
![リポジトリのパブリックとプライベートを選択するラジオ ボタン](/assets/images/help/importer/import-public-or-private.png)
5. 入力した情報を確認してから、 **[インポートの開始]** をクリックします。
![[インポートの開始] ボタン](/assets/images/help/importer/begin-import-button.png)
6. 古いプロジェクトで資格情報が要求される場合は、そのプロジェクトのログイン情報を入力してから、 **[Submit]\(送信\)** をクリックします。 古いプロジェクトでユーザー アカウントに対して SAML SSO または 2FA が有効になっている場合は、[Password]\(パスワード\) フィールドに、パスワードではなく、リポジトリの読み取りアクセス許可を持つ個人用アクセス トークンを入力します。
![パスワード保護されているプロジェクトのパスワード入力フォームと [送信] ボタン](/assets/images/help/importer/submit-old-credentials-importer.png)
7. 既存のプロジェクトのクローン URL で複数のプロジェクトがホストされている場合は、インポートするプロジェクトを選択してから **[送信]** をクリックします。
![インポートするプロジェクトのリストと [送信] ボタン](/assets/images/help/importer/choose-project-importer.png)
8. プロジェクトに 100 MB を超えるファイルがある場合は、[Git Large File Storage](/articles/versioning-large-files) を使用して大きいファイルをインポートするかどうかを選択してから、 **[続行]** をクリックします。
![[Git Large File Storage] メニューと [続行] ボタン](/assets/images/help/importer/select-gitlfs-importer.png)

リポジトリのインポートが完了すると、メールが届きます。

## 参考資料

- 「[GitHub Importer でコミット作者属性を更新する](/articles/updating-commit-author-attribution-with-github-importer)」
