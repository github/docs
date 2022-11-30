---
title: プルリクエストで変更されたメソッドや機能を見つける
intro: '*.go*、 *.js*、 *.ts*、 *.py*、 *.php*、 *.rb* ファイル内の pull request でメソッドや関数に対して提案された変更を素早く検索できます。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Methods & functions
ms.openlocfilehash: be891fe01166ee0eccf9ba7c824a1017c9d8fc11
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139195'
---
リポジトリへの読み取りアクセスがあるユーザなら誰でも、プルリクエストの特定のファイル内の機能とメソッドの変更の概要リストを確認できます。

メソッドと機能の概要リストは、以下のサポートされたファイルタイプから作成されます:
  - Go
  - JavaScript (Typescript、Flow、およびその他の種類の JavaScript)
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、変更された機能とメソッドを検索したいプルリクエストをクリックします。
{% data reusables.repositories.changed-files %}
4. 変更された関数とメソッドの概要一覧を確認するには、 **[移動...]** をクリックします。![[移動] ドロップダウン メニュー](/assets/images/help/pull_requests/jump-to-menu.png)
5. ドロップダウンメニューから、変更された機能やメソッドを選択します。 機能やメソッドの名前を入力して結果をフィルタリングすることもできます。
  ![関数とメソッドのフィルタリング](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **注:** 予期した関数やメソッドが表示されない場合は、コードがコンパイルされており、エラーが含まれていないことを確認してください。 この pull request で変更され、 *.go*、 *.js*、 *.ts*、 *.py*、 *.php*、 *.rb* の各ファイルにある関数とメソッドのみがドロップダウン メニューに表示されます。

 {% endnote %}

6. 選択した機能やメソッドの最初の行にリダイレクトされます。
 ![変更されたファイル内の関数とメソッドの表示](/assets/images/help/pull_requests/view-selected-function-or-method.png)

## 参考資料

- 「[About comparing branches in a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)」 (pull request 内のブランチの比較について)
- [pull request 内のファイルをファイルの種類でフィルタリングする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)
