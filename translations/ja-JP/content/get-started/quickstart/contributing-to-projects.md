---
title: プロジェクトに貢献する
intro: フォークを通じてプロジェクトに貢献する方法について説明します。
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
ms.openlocfilehash: da38c6f5b3ea953fc58bf79080b9fa4eb5a2712d
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191347'
---
## フォークについて

他のユーザーのプロジェクトに投稿したいが、そのリポジトリへの書き込みアクセス権がない場合は、"フォークと pull request" のワークフローを使用できます。 

{% data reusables.repositories.fork-definition-long %}

フォークから上流リポジトリに pull request を送信することで、投稿できます。 詳細については、「[リポジトリのフォーク](/get-started/quickstart/fork-a-repo)」を参照してください。

## リポジトリをフォークする

このチュートリアルでは、[Spoon-Knife プロジェクト](https://github.com/octocat/Spoon-Knife) ({% data variables.product.prodname_dotcom_the_website %} でホストされているテスト リポジトリ)を使用して、フォークと pull request のワークフローをテストします。

1. https://github.com/octocat/Spoon-Knife で `Spoon-Knife` プロジェクトに移動します。
2. **[フォーク]** をクリックします。
   ![[フォーク] ボタン](/assets/images/help/repository/fork_button.png){% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
3. フォークされたリポジトリの所有者を選びます。
   ![[所有者] ドロップダウンが強調された新しいフォーク ページを作成する](/assets/images/help/repository/fork-choose-owner.png)
4. 既定では、フォークの名前はその上流リポジトリと同じです。 フォークの名前を変更して、さらに区別することができます。 
   !["リポジトリ名" フィールドが強調された新しいフォーク ページを作成する](/assets/images/help/repository/fork-choose-repo-name.png)
5. 必要に応じて、リポジトリの説明を追加します。
   !["説明" フィールドが強調された新しいフォーク ページを作成する](/assets/images/help/repository/fork-description.png)
6. 既定のブランチのみをコピーするか、すべてのブランチを新しいフォークにコピーするかを選びます。 オープンソース プロジェクトへのコントリビューションなど、多くのフォーク シナリオでは、既定のブランチのみをコピーする必要があります。 既定では、既定のブランチのみがコピーされます。
   ![既定のブランチのみをコピーするオプション](/assets/images/help/repository/copy-default-branch-only.png)
7. **[フォークの作成]** をクリックします。
   ![強調された [フォークの作成] ボタン](/assets/images/help/repository/fork-create-button.png)

{% note %}

**注:** 上流リポジトリから追加のブランチをコピーする場合は、 **[Branches]** ページから行うことができます。 詳細については、「[リポジトリ内でブランチを作成および削除する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)」を参照してください。

{% endnote %} {% endif %}

## フォークの複製

Spoon-Knife リポジトリのフォークが正常に生成されましたが、現時点では {% data variables.product.product_name %} にのみ存在しています。 プロジェクトで作業できるようにするには、コンピューターに複製する必要があります。

フォークは、コマンド ライン、{% data variables.product.prodname_cli %}、または {% data variables.product.prodname_desktop %} を使用して複製できます。

{% webui %}

1. {% data variables.product.product_name %} で、Spoon-Knife リポジトリの **自分のフォーク** に移動します。
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %}
4. 「`git clone`」と入力し、既にコピーした URL を貼り付けます。 次のようになるはずです。`YOUR-USERNAME` を自分の {% data variables.product.product_name %} のユーザー名に置き換えてください。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  ```

5. **Enter** キーを押します。 これで、ローカルにクローンが作成されます。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

フォークのクローンを作成するには、`--clone` フラグを使用します。

```shell
gh repo fork REPOSITORY --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

{% enddesktop %}

## 作業のためのブランチの作成

プロジェクトに変更を加える前に、新しいブランチを作成してチェックアウトする必要があります。変更を独自のブランチに保持することで、GitHub Flow に従い、今後も同じプロジェクトに貢献しやすくなります。 詳細については、「[GitHub のフロー](/get-started/quickstart/github-flow#following-github-flow)」を参照してください。

{% webui %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endwebui %}

{% cli %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endcli %}

{% desktop %}

{% data variables.product.prodname_desktop %} でブランチを作成および管理する方法の詳細については、「[ブランチの管理](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches)」を参照してください。

{% enddesktop %}

## 変更の作成とプッシュ

[Visual Studio Code](https://code.visualstudio.com) などのお気に入りのテキスト エディターを使用して、プロジェクトにいくつかの変更を加えます。 たとえば、`index.html` のテキストを変更すると、GitHub ユーザー名を追加できます。

変更を送信する準備ができたら、変更をステージングしてコミットします。 `git add .` は、次のコミットにすべての変更を含める必要があることを Git に指示します。 `git commit` は、これらの変更のスナップショットを取得します。

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

{% data variables.product.prodname_desktop %} で変更をステージングおよびコミットする方法の詳細については、「[プロジェクトへの変更のコミットと確認](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)」を参照してください。

{% enddesktop %}

ファイルをステージングしてコミットすると、基本的に Git に「変更のスナップショットを作成してください」と Git に指示したことになります。 引き続き変更を加え、より多くのコミットのスナップショットを作成できます。

現時点では、変更はローカルにのみ存在します。 変更を {% data variables.product.product_name %} にプッシュする準備ができたら、変更をリモートにプッシュします。

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

{% data variables.product.prodname_desktop %} で変更をプッシュする方法の詳細については、「[変更を GitHub にプッシュする](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)」を参照してください。

{% enddesktop %}

## pull request の作成

やっと、メイン プロジェクトに変更を提案する準備ができました。 これは、他の誰かのプロジェクトのフォークを生成する最後のステップであり、間違いなく最も重要です。 コミュニティ全体に利益をもたらすと感じる変更を加えた場合は、ぜひ貢献することを検討してください。

そのためには、プロジェクトが存在する {% data variables.product.product_name %} のリポジトリに進みます。 この例では、`https://github.com/<your_username>/Spoon-Knife` です。 自分のブランチが `octocat:main` よりも 1 コミット分進んでいることを示すバナーが表示されます。 **[貢献]** をクリックし、 **[Open a pull request]\(pull request を開く\)** をクリックします。

{% data variables.product.product_name %} を使用すると、フォークと `octocat/Spoon-Knife` リポジトリの違いを示すページが表示されます。 **[pull request の作成]** をクリックします。

{% data variables.product.product_name %} を使用すると、タイトルと変更の説明を入力できるページが表示されます。 そもそもこの pull request を行う理由について、できるだけ多くの有用な情報と根拠を提供することが重要です。 プロジェクトの所有者は、変更が自分が考えるほどすべてのユーザーにとって役に立つかどうかを判断できる必要があります。 **[pull request の作成]** をクリックします。

## フィードバックの管理

pull request は検討の対象となります。 この場合、Octocat は非常にビジーであり、おそらく変更をマージしません。 他のプロジェクトで、プロジェクト所有者が pull request を拒否した場合や、リクエストが行われた理由の詳細を求めても、気を悪くしないでください。 プロジェクトの所有者が pull request をマージしないことを選択したとしても、まったく問題ありません。 行った変更はフォーク内に存在しています。 会ったことがない人が、この変更が元のプロジェクトよりもはるかに価値のあることを発見するかもしれません。

## プロジェクトの検索

正常にリポジトリをフォークし、リポジトリに貢献しました。 さらに貢献を続けてください。{% ifversion fpt %}詳細については、「[GitHub でオープンソースに貢献する方法を見つける](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)」を参照してください。{% endif %}
