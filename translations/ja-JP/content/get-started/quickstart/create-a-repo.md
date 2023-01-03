---
title: リポジトリを作成する
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'プロジェクトを {% data variables.product.prodname_dotcom %} に保存するには、それを保存するためのリポジトリを作成する必要があります。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: 66db99def4463929236197fdc4903f82bfc1cbe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682294'
---
## リポジトリを作成する

{% ifversion fpt or ghec %}

オープンソース プロジェクトを含むさまざまなプロジェクトを {% data variables.product.prodname_dotcom %} リポジトリに保存できます。 オープンソース プロジェクトでは、コードを共有することで、より優れた信頼性の高いソフトウェアを作成できます。 リポジトリを使用すると、他のユーザーと共同作業を行い、作業を管理できます。 詳細については、[リポジトリ](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)に関する説明を参照してください。 オープンソース プロジェクトについて詳しくは、[OpenSource.org](https://opensource.org/about) をご覧ください。

{% elsif ghes or ghae %}

インナーソースプロジェクトを含め、さまざまなプロジェクトを {% data variables.product.product_name %} リポジトリに保存できます。 インナーソースを使用すると、コードを共有して、より優れた、より信頼性の高いソフトウェアを作成できます。 InnerSource の詳細については、{% data variables.product.company_short %} のホワイト ペーパー「[InnerSource の概要](https://resources.github.com/whitepapers/introduction-to-innersource/)」を参照してください。

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**注:** 
- オープンソース プロジェクトのパブリック リポジトリを作成できます。 パブリック リポジトリを作成するときは、プロジェクトを他のユーザーと共有する方法を決定する[ライセンス ファイル](https://choosealicense.com/)を必ず含めてください。 {% data reusables.open-source.open-source-guide-repositories %} 
- {% data reusables.open-source.open-source-learning %} 
- また、リポジトリにコミュニティ正常性ファイルを追加し、投稿方法やリポジトリを守る方法などに関するガイドラインを設定できます。 詳細については、「[既定のコミュニティ正常性ファイルの作成](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。 

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. 短くて覚えやすいリポジトリ名を入力します。 たとえば、"hello-world" といった名前です。
  ![リポジトリ名を入力するフィールド](/assets/images/help/repository/create-repository-name.png)
3. 必要に応じて、リポジトリの説明を追加します。 たとえば、「{% data variables.product.product_name %} の最初のリポジトリ」などです。
  ![リポジトリの説明を入力するためのフィールド](/assets/images/help/repository/create-repository-desc.png) {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

おめでとうございます。 最初のリポジトリの作成に成功し、*README* ファイルで初期化しました。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. コマンド ラインで、新しいプロジェクトのローカル クローンを作成するディレクトリに移動します。
2. プロジェクトのリポジトリを作成するには、`gh repo create` サブコマンドを使用します。 メッセージが表示されたら、 **[GitHub に新しいリポジトリを最初から作成する]** を選択し、新しいプロジェクトの名前を入力します。 プロジェクトが個人アカウントではなく Organization に属するようにしたい場合は、`organization-name/project-name` を使って Organization の名前とプロジェクト名を指定します。 
3. 対話型のプロンプトに従います。 リポジトリをローカルに複製するには、リモート プロジェクト ディレクトリを複製するかどうかを確認するメッセージが表示されたら [はい] を選択します。  
4. または、プロンプトをスキップするには、リポジトリ名と可視性フラグ (`--public`、`--private`、または `--internal`) を指定します。 たとえば、`gh repo create project-name --public` のようにします。 リポジトリをローカルに複製するには、`--clone` フラグを渡します。  使用できる引数の詳細については、[GitHub CLI のマニュアル](https://cli.github.com/manual/gh_repo_create)を参照してください。

{% endcli %}

## 最初の変更をコミットする

{% webui %}

" *[コミット](/articles/github-glossary#commit)* " とは、特定の時点におけるプロジェクト内のすべてのファイルのスナップショットのようなものです。

新しいリポジトリを作成したので、*README* ファイルを使って初期化します。 *README* ファイルは、プロジェクトの詳細を説明し、プロジェクトのインストール方法や使い方などのドキュメントを追加するために適した場所です。 *README* ファイルの内容は、リポジトリのフロント ページに自動的に表示されます。

*README* ファイルに変更をコミットしてみましょう。

1. リポジトリのファイルの一覧で、***[README.md]*** をクリックします。
  ![ファイル一覧にある README ファイル](/assets/images/help/repository/create-commit-open-readme.png)
2. ファイルの内容の上にある {% octicon "pencil" aria-label="The edit icon" %} をクリックします。
3. **[ファイルの編集]** タブで自分に関する情報を入力します。
  ![ファイルの新しい内容](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %}
5. ファイルに加えた変更を確認します。 新しい内容は緑色で表示されます。
  ![ファイルのプレビュー ビュー](/assets/images/help/repository/create-commit-review.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

プロジェクトを作成したら、変更のコミットを開始できます。

*README* ファイルは、プロジェクトの詳細を説明し、プロジェクトのインストール方法や使い方などのドキュメントを追加するために適した場所です。 *README* ファイルの内容は、リポジトリのフロント ページに自動的に表示されます。 *README* ファイルを追加するには、次の手順に従います。

1. コマンド ラインで新しいプロジェクトのルート ディレクトリに移動します。 (このディレクトリは、`gh repo create` コマンドを実行したときに作成されました。)
1. プロジェクトに関する情報を含む *README* ファイルを作成します。

    ```shell
    echo "info about this project" >> README.md
    ```

1. 「`git status`」と入力します。 追跡されていない `README.md` ファイルが表示されます。

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. ファイルをステージングしてコミットします。

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. ブランチに変更をプッシュします。

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## 次の手順

*README* ファイルを含む新しいリポジトリを作成し、{% data variables.product.product_location %} に最初のコミットを作成しました。

{% webui %}

* これで、{% data variables.product.prodname_dotcom %} リポジトリを複製して、コンピューター上にローカル コピーを作成できるようになりました。 ローカル リポジトリからコミットし、pull request を作成して上流リポジトリで変更を更新できます。 詳細については、「[リポジトリをクローンする](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)」と「[Git のセットアップ](/articles/set-up-git)」を参照してください。

{% endwebui %}

* {% data variables.product.prodname_dotcom %} で興味深いプロジェクトとリポジトリを見つけ、リポジトリのフォークを作成して変更を加えることができます。 {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
