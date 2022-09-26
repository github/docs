---
title: 新しいファイルの作成
intro: '{% data variables.product.product_name %}上で書き込みアクセスを持つリポジトリであればどこにでも直接、新しいファイルを作成できます。'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
  - /github/managing-files-in-a-repository/managing-files-on-github/creating-new-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 1acc03b74e037db35a612cd9173e995bbf9e5271
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131994'
---
{% data variables.product.product_name %}上でファイルを作成するときは、以下にご注意ください:

- アクセス権のないリポジトリで新しいファイルを作成しようとすると、プロジェクトが個人アカウントにフォークされ、変更をコミットした後で、元のリポジトリに [pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) を送信できるようになります。
- Web インターフェイスを介して作成されるファイル名では英数字とハイフン (`-`) しか使用できません。 他の文字を使うには、[ローカル環境でファイルを作成してコミットした後、それらを {% data variables.product.product_name %} 上のリポジトリにプッシュします](/articles/adding-a-file-to-a-repository-using-the-command-line)。

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. 自分のリポジトリで、ファイルを作成するフォルダへ移動します。
{% data reusables.files.add-file %}
4. ファイル名フィールドに、ファイルの名前と拡張子を入力します。 サブディレクトリを作るには、ディレクトリの区切り文字 `/` を入力します。
![新しいファイル名](/assets/images/help/repository/new-file-name.png)
5. **[新しいファイルの編集]** タブで、ファイルに内容を追加します。
![新しいファイルの内容](/assets/images/help/repository/new-file-content.png)
6. 新しい内容を確認するには、 **[プレビュー]** をクリックします。
![新しいファイルのプレビュー ボタン](/assets/images/help/repository/new-file-preview.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
