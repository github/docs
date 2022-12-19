---
title: リポジトリへのライセンスの追加
intro: 他の人がコントリビュートしやすくなるように、リポジトリにオープンソースライセンスを含めておくことができます。
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a license to a repo
ms.openlocfilehash: 7961f690678d2bfe53726a33d02a54e95b9cfe78
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117638'
---
リポジトリに見つけやすいライセンスを含めておくと、リポジトリにアクセスした人はリポジトリページの先頭ですぐに見つけることができます。 ライセンスファイル全体を読むには、ライセンスの名前をクリックします。

![MIT ライセンスを持つリポジトリヘッダ](/assets/images/help/repository/repo-license-indicator.png)

オープンソースライセンスによって、他者が自由にリポジトリ中のプロジェクトを利用、変更、配布できるようになります。 リポジトリ ライセンスの詳細については、「[リポジトリのライセンス](/articles/licensing-a-repository)」を参照してください。

## リポジトリにオープンソースライセンスを含める

<!--Dotcom version uses the license tool-->
{% ifversion fpt or ghec %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. ファイル名フィールドに、「*LICENSE*」または「*LICENSE.md*」 (すべて大文字) と入力します。
4. [ファイル名] フィールドの右側にある **[ライセンス テンプレートの選択]** をクリックします。
  ![[ライセンス テンプレートの選択] ボタン](/assets/images/help/repository/license-tool.png)
5. ページの左側、[Add a license to your project] の下で、利用可能なライセンスをレビューして、リストからライセンスを選択してください。
  ![利用可能なライセンスのリスト](/assets/images/help/repository/license-tool-picker.png)
6. **[確認して送信]** をクリックします。
  ![[確認して送信] ボタン](/assets/images/help/repository/license-review-tool.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.choose-commit-email %}
10. **[新しいファイルのコミット]** をクリックします。
  ![ブランチへのライセンスのコミット](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% ifversion ghes %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. ファイル名フィールドに、「*LICENSE*」または「*LICENSE.md*」 (すべて大文字) と入力します。
4. **[新しいファイルの編集]** タブで、使用するライセンスの全文を貼り付けます。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
7. コミットメッセージフィールドの下で、コミットの追加先を現在のブランチか新しいブランチから選択してください。 現在のブランチが `main` の場合、コミット先として新しいブランチを作成してから pull request を作成する必要があります。 詳細については、「[pull request の作成](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)」を参照してください。
![コミット ブランチのオプション](/assets/images/help/repository/choose-commit-branch.png)
8. **[新しいファイルのコミット]** をクリックします。
  ![ブランチへのライセンスのコミット](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

## 参考資料

- 「[リポジトリ共同作成者のガイドラインの設定](/articles/setting-guidelines-for-repository-contributors)」
