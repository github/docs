---
title: プルリクエストで変更されたメソッドや機能を見つける
intro: '*.go*、*.js*、*.ts*、*.py*、*.php*、および *.rb* ファイル内のプルリクエストのメソッドまたは機能の、提案された変更を素早く検索できます。'
redirect_from:
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
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
4. 変更された機能とメソッドのサマリーリストを確認するには、[**Jump to...**] をクリックします。 ![[Jump to] ドロップダウンメニュー](/assets/images/help/pull_requests/jump-to-menu.png)
5. ドロップダウンメニューから、変更された機能やメソッドを選択します。 機能やメソッドの名前を入力して結果をフィルタリングすることもできます。 ![機能とメソッドのフィルタリング](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **注釈:** 確認したい機能やメソッドが表示されない場合は、コードがコンパイルされており、エラーが含まれていないことを確認してください。 このプルリクエストで変更され、*.go*、*.js*、*.ts*、*.py*、*.php*、および *.rb* ファイルで見つかる機能とメソッドのみが、ドロップダウンメニューに表示されます。

 {% endnote %}

6. 選択した機能やメソッドの最初の行にリダイレクトされます。 ![変更されたファイル内の機能とメソッドの表示](/assets/images/help/pull_requests/view-selected-function-or-method.png)

### 参考リンク

- 「[プルリクエスト内のブランチの比較について](/articles/about-comparing-branches-in-pull-requests)」
- 「[プルリクエストをファイルタイプでフィルタリングする](/articles/filtering-files-in-a-pull-request)」
