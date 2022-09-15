---
title: GitHub ClassroomとIDEの統合
shortTitle: Integrate with an IDE
intro: '{% data variables.product.prodname_classroom %} で作成した課題のために、サポートされている統合開発環境 (IDE) を事前に構成できます。'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
ms.openlocfilehash: 25c4c1fba1cb0f082049a461e03bfdf009e208c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110507'
---
## IDE との統合について

{% data reusables.classroom.about-online-ides %} 

学生が IDE で課題を受け入れると、学生の課題リポジトリにある README ファイルには、IDE で課題を開くためのボタンが表示されます。 学生はただちに作業を開始でき、追加の設定は必要ありません。

## サポートされている IDE

{% data variables.product.prodname_classroom %} では、次の IDE がサポートされています。 各IDEについて、学生としての使い方を詳しく知ることができます。

| IDE | 詳細情報 |
| :- | :- |
| {% data variables.product.prodname_github_codespaces %} | 「[{% data variables.product.prodname_github_codespaces %} を {% data variables.product.prodname_classroom %} で使う](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)」 |
| Microsoft MakeCode Arcade | 「[{% data variables.product.prodname_classroom %} で MakeCode Arcade を使用する](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)」 |
| {% data variables.product.prodname_vscode %} | Visual Studio Marketplace の [{% data variables.product.prodname_classroom %} 拡張機能](http://aka.ms/classroom-vscode-ext) |

クラウド IDE の統合は Classroom にとって重要であるため、より多くのオプションを提供できるように努力しています。 

## 課題用の IDE を構成する

課題の作成時に、課題で使用する IDE を選択できます。 IDE を使用する新しい課題を作成する方法については、「[個人課題の作成](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)」または「[グループ課題の作成](/education/manage-coursework-with-github-classroom/create-a-group-assignment)」を参照してください。

## 新しい IDE で割り当てを設定する

別の IDE を使って割り当てを初めて構成するとき、設定が正しいことを確認する必要があります。

{% data variables.product.prodname_codespaces %} を使う場合を除き、Organization の IDE 用に OAuth アプリを承認する必要があります。 すべてのリポジトリについて、メタデータ、管理、コードへの **読み取り** アクセス権と、管理とコードへの **書き込み** アクセス権をアプリに付与します。 詳細については、「[Authorizing OAuth Apps (OAuth アプリの認可)](/github/authenticating-to-github/authorizing-oauth-apps)」を参照してください。

{% data variables.product.prodname_codespaces %} には OAuth アプリは必要ありませんが、{% data variables.product.prodname_codespaces %} で Organization が割り当てを構成できるよう、{% data variables.product.prodname_codespaces %} を有効にする必要があります。 詳細については、「[{% data variables.product.prodname_codespaces %} と {% data variables.product.prodname_classroom %} の使用](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization)」を参照してください。

## 参考資料

- 「[README について](/github/creating-cloning-and-archiving-repositories/about-readmes)」
