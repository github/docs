---
title: プロジェクトへの行動規範の追加
intro: コミュニティの標準を定義し、参加を歓迎する開放的なプロジェクトであることを発信し、侵害への対処手順の概要を示すために、行動規範を採用してください。
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
  - /github/building-a-strong-community/adding-a-code-of-conduct-to-your-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a code of conduct
ms.openlocfilehash: dcf1e589ae4f803017752f9e919aad304c570fbc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090214'
---
*行動規範* は、コミュニティへの参加方法の標準を定義するものです。 それは、すべてのコントリビューションを尊重する開放的な環境であることを発信します。 また、プロジェクトのコミュニティのメンバー間の問題に対処するための手順の概要も示します。 行動規範がコミュニティに参加する方法に対する標準と期待を定義する理由の詳細については、「[Open Source Guide](https://opensource.guide/code-of-conduct/)」を参照してください。

プロジェクトで行動規範を採択する前に:

* オープンソースプロジェクト用に策定されたさまざまな行動規範をリサーチする。 自分のコミュニティの標準を反映しているものを選択してください。
* それを適用したいか、そして適用できるのかを注意深く検討してください。

テンプレートを使用するか、手動でカスタムの行動規範を作成して、プロジェクトに行動規範を追加できます。 行動規範はどちらの方法でも利用できますが、「行動規範」はテンプレートを使用する場合にのみ、リポジトリのコミュニティプロフィールで完了としてマークされます。 他者または Organization が作成した行動規範を使用する場合は、必ずソースからの帰属ガイドラインに従ってください。 コミュニティ プロファイルの詳細については、「[パブリック リポジトリのコミュニティ プロファイルについて](//communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)」を参照してください。

組織または個人アカウント用に既定の行動規範を作成できます。 詳細については、「[Creating a default community health file](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」 (既定のコミュニティ正常性ファイルの作成) を参照してください。

## テンプレートを使用して行動規範を追加する

プロジェクトに素早く行動規範を追加できるよう、{% data variables.product.product_name %}では一般的な行動規範のテンプレートが用意されています。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. ファイル名のフィールドに「*CODE_OF_CONDUCT.md*」と入力します。
4. **[行動規範テンプレートの選択]** をクリックします。
  ![行動規範テンプレートを選択するボタン](/assets/images/help/repository/code-of-conduct-tool.png)
5. ページの左側でプレビューしたい行動規範を選択し、プロジェクトに追加してください。
  ![行動規範テンプレートの選択](/assets/images/help/repository/code-of-conduct-tool-picker.png)
6. ページの右側でフィールドに記入し、適切な情報と共に選択した行動規範を作成してください。
7. **[確認して送信]** をクリックします。
  ![行動規範を確認してプロジェクトに送信する](/assets/images/help/repository/code-of-conduct-tool-review.png)
8. テキスト領域内にある行動規範の内容をレビューしてください。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 行動規範を手動で追加する

提供されているテンプレートで必要な行動規範が利用できない場合は、行動規範を手動で追加できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. ファイル名フィールドに、ファイルの名前と拡張子を入力します。
  ![新しい行動規範ファイル名](/assets/images/help/repository/new-code-of-conduct-file-name.png)
    - 行動規範をリポジトリのルート ディレクトリに表示するには、ファイル名フィールドに「*CODE_OF_CONDUCT*」と入力します。
    - 行動規範をリポジトリの `docs` のディレクトリに表示するには、「*docs/CODE_OF_CONDUCT*」と入力します。
    - 行動規範をリポジトリの `.github` のディレクトリに表示するには、「 *.github/CODE_OF_CONDUCT*」と入力します。
4. 新しいファイルに、カスタムの行動規範を追加します。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
