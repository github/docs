---
title: サブフォルダを新規リポジトリに分割する
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository
intro: Git リポジトリ内のフォルダを、全く新しいリポジトリに変更できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Splitting a subfolder
ms.openlocfilehash: e99c1c1411b335837b478b32f085596ec4f5fc0f
ms.sourcegitcommit: 46eac8c63f52669996a9c832f2abf04864dc89ba
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172910'
---
リポジトリの新しいクローンを作成した場合でも、フォルダを別のリポジトリに分割したとき、Git の履歴や変更を失うことはありません。

{% data reusables.command_line.open_the_multi_os_terminal %}

2. 現在のワーキングディレクトリを、新しいリポジトリを作成したい場所に変更します。

4. サブフォルダのあるリポジトリをクローンします。
   ```shell
   $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME
   ```

4. ワーキングディレクトリをクローンしたリポジトリに変更します。
   ```shell
   $ cd REPOSITORY-NAME
   ```

5. リポジトリ内の残りのファイルからサブフォルダーを除外するには、[`git-filter-repo`](https://github.com/newren/git-filter-repo) をインストールした後、次の引数を指定して `git filter-repo` を実行します。
   - `FOLDER-NAME`: 別のリポジトリを作成するプロジェクト内のフォルダー。

   {% windows %}

   {% tip %}

   **ヒント:** Windows ユーザーは `/` でフォルダーを区切る必要があります。

   {% endtip %}

   {% endwindows %}
  
   ```shell
   $ git filter-repo --path FOLDER-NAME1/ --path FOLDER-NAME2/
   # Filter the specified branch in your directory and remove empty commits
   > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
   > Ref 'refs/heads/BRANCH-NAME' was rewritten
   ```
   
   これで、リポジトリにはサブフォルダー内にあったファイルだけが含まれるようになります。

6. {% data variables.product.product_name %} に[新しいリポジトリを作成](/articles/creating-a-new-repository/)します。

7. {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} の [Quick Setup]\(クイック セットアップ\) ページにある新しいリポジトリの先頭で、{% octicon "clippy" aria-label="The copy to clipboard icon" %} をクリックしてリモート リポジトリの URL をコピーします。
    
   ![リモートリポジトリの URL フィールドのコピー](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   {% tip %}

   **ヒント:** HTTPS と SSH の URL の違いについては、「[リモート リポジトリについて](/github/getting-started-with-github/about-remote-repositories)」を参照してください。

   {% endtip %}

8. リポジトリの既存のリモート名を確認します。 たとえば、`origin` や `upstream` の 2 つが一般的な選択肢です。
   ```shell
   $ git remote -v
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (fetch)
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (push)
   ```

9. 既存のリモート名およびステップ 7 でコピーしたリモートリポジトリ URL を使って、新しいリポジトリの新しいリモート URL をセットアップします。
   ```shell
   git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git
   ```

10. 新しいリポジトリの名前を使い、リモート URL が変更されたことを確認します。
    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

11. 変更を {% data variables.product.product_name %} の新しいリポジトリにプッシュします。
    ```shell
    git push -u origin BRANCH-NAME
    ```
