---
title: 自動採点
intro: 課題リポジトリで実行するテストを構成することで、学生から提出されたコードに対するフィードバックを自動的に提供できます。
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/adding-tests-for-auto-grading
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-teachers
---

### 自動採点について

{% data reusables.classroom.about-autograding %}

学生が課題を受け入れた後、{% data variables.product.prodname_actions %}は、自動採点テストを行うコマンドを、課題リポジトリへの各プッシュに対して学生の最新コードを含むLinux環境で実行します。 {% data variables.product.prodname_classroom %}は、 {% data variables.product.prodname_actions %}に必要なワークフローを作成します。 自動採点の使用にあたり、{% data variables.product.prodname_actions %}の経験は不要です。

テストフレームワークを使用したり、カスタムコマンドを実行したり、入出力テストを記述したり、さまざまなテスト方法を組み合わせたりすることができます。 自動採点用のLinux環境には、一般的なソフトウェアツールが数多く含まれています。 詳しい情報については、「[{% data variables.product.company_short %}ホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners#supported-software)」に記載された、Ubuntu最新バージョンの詳細を参照してください。

{% data variables.product.prodname_classroom %}の課題に移動して、自動採点テストでどの学生が合格したかの概要を表示できます。 緑色のチェックマークは、その学生がすべてのテストに合格したことを意味します。赤色のXは、その学生が一部またはすべてのテストで不合格だったことを意味します。 1つ以上のテストに得点を与えている場合、課題で獲得できる最高得点が吹き出しに表示されます。

![自動採点結果を含む課題の概要](/assets/images/help/classroom/autograding-hero.png)

### 採点方法

採点方法には、入出力テストと実行コマンドテストの2つがあります。

#### 入出力テスト

入出力テストは必要に応じてセットアップコマンドを実行してから、テストコマンドに標準出力を渡します。 {% data variables.product.prodname_classroom %}は、テストコマンドの出力を期待する結果と照らし合わせて評価します。

| 設定                  | 説明                                                                     |
|:------------------- |:---------------------------------------------------------------------- |
| **Test name**       | テストの名前。ログでテストを識別するためのものです。                                             |
| **Setup command**   | *（オプション）* コンパイルやインストールなど、テストを実行する前のコマンド。                               |
| **Run command**     | テストを実行し、評価用の標準出力を生成するコマンド。                                             |
| **Inputs**          | 実行コマンドの標準入力。                                                           |
| **Expected output** | 実行コマンドによる標準出力として期待する出力結果。                                              |
| **Comparison**      | 実行コマンドの出力と期待する出力との比較方法。<br/><br/><ul><li>**Included**: 期待する出力が、実行コマンドによる標準出力の<br/>任意の場所に現れたら合格。</li><li>**Exact**: 期待する出力と、実行コマンドによる標準出力が<br/>完全に一致したら合格。</li><li>**Regex**: 期待する出力の正規表現が、実行コマンドによる<br/>標準出力に一致したら合格。</li></ul> |
| **Timeout**         | 失敗の結果が出るまでにテストを実行する時間（分単位）。                                            |
| **Points**          | *（オプション）* テストの合計点に占める点数。                                               |

#### 実行コマンドテスト

実行コマンドテストはセットアップコマンドを実行してから、テストコマンドを実行します。 {% data variables.product.prodname_classroom %}は、テストコマンドの終了ステータスをチェックします。 終了コードが`0`の場合は成功、その他の場合は失敗です。

{% data variables.product.prodname_classroom %}は、さまざまなプログラミング言語に対し、言語特有の実行コマンド用プリセットを提供しています。 たとえば、**Run node**テストではセットアップコマンドに`npm install`が、テストコマンドに`npm test`が事前に設定されています。

| 設定                | 説明                                       |
|:----------------- |:---------------------------------------- |
| **Test name**     | テストの名前。ログでテストを識別するためのものです。               |
| **Setup command** | *（オプション）* コンパイルやインストールなど、テストを実行する前のコマンド。 |
| **Run command**   | テストを実行し、評価用の終了コードを生成するためのコマンド。           |
| **Timeout**       | 失敗の結果が出るまでにテストを実行する時間（分単位）。              |
| **Points**        | *（オプション）* テストの合計点に占める点数。                 |

### アシスタントのために自動採点テストを設定する

新課題の作成時に、自動採点テストを追加できます。 {% data reusables.classroom.for-more-information-about-assignment-creation %}

既存の課題用の自動採点テストを追加、編集、削除できます。 既存の課題用の自動採点テストを変更した場合、既存の課題リポジトリは影響を受けません。 新しいテストを使用するには、学生またはチームが課題を受け入れ、新しい課題リポジトリを作成する必要があります。

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.assignments-click-pencil %}
1. 左サイトバーで、[**Grading and feedback**] をクリックします。 ![課題の基本情報の右側にある [Grading and feedback]](/assets/images/help/classroom/assignments-click-grading-and-feedback.png)
1. 自動採点テストを追加、編集、または削除します。
    - テストを追加するには、[Add autograding tests] の下にある [**Add test**] ドロップダウンメニューを選択し、使用する採点方法をクリックします。 ![Using the "Add test" drop-down menu to click a grading method](/assets/images/help/classroom/autograding-click-grading-method.png) テストを設定し、[**Save test case**] をクリックします。 ![自動採点テストの [Save test case] ボタン](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - テストを編集するには、テスト名の右側にある {% octicon "pencil" aria-label="The pencil icon" %} をクリックします。 ![Pencil icon for editing an autograding test](/assets/images/help/classroom/autograding-click-pencil.png) テストを設定し、[**Save test case**] をクリックします。 ![自動採点テストの [Save test case] ボタン](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - テストを削除するには、テスト名の右側にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。  ![自動採点テストを削除するためのゴミ箱アイコン](/assets/images/help/classroom/autograding-click-trash.png)
1. ページの下部で、[**Update assignment**] をクリックします。 ![ページカブの [Update assignment] ボタン](/assets/images/help/classroom/assignments-click-update-assignment.png)

### 自動採点テストによるログを表示する

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-assignment-in-list %}
1. 提出物の右側にある、[**View text**] をクリックします。 ![課題提出物の [View test] ボタン](/assets/images/help/classroom/assignments-click-view-test.png)
1. テストの出力結果をレビューします。 詳しい情報については、「[ワークフロー実行ログを使用する](/actions/managing-workflow-runs/using-workflow-run-logs)」を参照してください。

### 参考リンク

- [{% data variables.product.prodname_actions %}ドキュメント](/actions)
