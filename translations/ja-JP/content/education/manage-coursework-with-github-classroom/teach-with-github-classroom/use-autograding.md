---
title: 自動採点
intro: 課題リポジトリで実行するテストを構成することで、学生から提出されたコードに対するフィードバックを自動的に提供できます。
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can set up and use autograding on assignments in a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/adding-tests-for-auto-grading
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-teachers
  - /education/manage-coursework-with-github-classroom/use-autograding
ms.openlocfilehash: b3e9b44da93d799972b93a9f6e822b767099fdba
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112149'
---
## 自動採点について

{% data reusables.classroom.about-autograding %}

学生が課題を受け入れた後、{% data variables.product.prodname_actions %}は、自動採点テストを行うコマンドを、課題リポジトリへの各プッシュに対して学生の最新コードを含むLinux環境で実行します。 {% data variables.product.prodname_classroom %}は、 {% data variables.product.prodname_actions %}に必要なワークフローを作成します。 自動採点の使用にあたり、{% data variables.product.prodname_actions %}の経験は不要です。

テストフレームワークを使用したり、カスタムコマンドを実行したり、入出力テストを記述したり、さまざまなテスト方法を組み合わせたりすることができます。 自動採点用のLinux環境には、一般的なソフトウェアツールが数多く含まれています。 詳しくは、[{% data variables.product.company_short %} ホステッド ランナーの仕様](/actions/reference/specifications-for-github-hosted-runners#supported-software)に関する記事で Ubuntu の最新バージョンの詳細を参照してください。

{% data variables.product.prodname_classroom %}の課題に移動して、自動採点テストでどの学生が合格したかの概要を表示できます。 緑色のチェックマークは、その学生がすべてのテストに合格したことを意味します。赤色のXは、その学生が一部またはすべてのテストで不合格だったことを意味します。 1つ以上のテストに得点を与えている場合、課題で獲得できる最高得点が吹き出しに表示されます。

![自動採点結果を含む課題の概要](/assets/images/help/classroom/assignment-individual-hero.png)

## 採点方法

採点方法には、入出力テストと実行コマンドテストの2つがあります。

### 入出力テスト

入出力テストは必要に応じてセットアップコマンドを実行してから、テストコマンドに標準出力を渡します。 {% data variables.product.prodname_classroom %}は、テストコマンドの出力を期待する結果と照らし合わせて評価します。

| 設定 | 説明 |
| :- | :- |
| **テスト名** | テストの名前。ログでテストを識別するためのものです。 |
| **セットアップ コマンド** | _オプション_。 コンパイルやインストールなど、テストを実行する前のコマンド。 |
| **実行コマンド** | テストを実行し、評価用の標準出力を生成するコマンド。 |
| **入力** | 実行コマンドの標準入力。 |
| **想定される出力** | 実行コマンドによる標準出力として期待する出力結果。 |
| **比較** | 実行コマンドの出力と期待する出力との比較方法。<br/><br/><ul><li>**含まれる**: 予想される出力が<br/>実行コマンドからの標準出力のどこかに含まれていれば合格にします</li><li>**正確**: 予想される出力が<br/>実行コマンドからの標準出力と完全に同じであれば合格にします</li><li>**正規表現**: 予想される出力の正規表現が<br/>実行コマンドからの標準出力と一致していれば合格にします</li></ul> |
| **タイムアウト** | 失敗の結果が出るまでにテストを実行する時間（分単位）。 |
| **Points** | _オプション_。 テストの合計点に占める点数。 |

### 実行コマンドテスト

実行コマンドテストはセットアップコマンドを実行してから、テストコマンドを実行します。 {% data variables.product.prodname_classroom %}は、テストコマンドの終了ステータスをチェックします。 終了コードが `0` の場合は成功、その他の場合は失敗です。

{% data variables.product.prodname_classroom %}は、さまざまなプログラミング言語に対し、言語特有の実行コマンド用プリセットを提供しています。 たとえば、**ノードの実行** テストでは、セットアップ コマンドには `npm install` が事前に入力され、テスト コマンドには `npm test` が事前に入力されます。

| 設定 | 説明 |
| :- | :- |
| **テスト名** | テストの名前。ログでテストを識別するためのものです。 |
| **セットアップ コマンド** | _オプション_。 コンパイルやインストールなど、テストを実行する前のコマンド。 |
| **実行コマンド** | テストを実行し、評価用の終了コードを生成するためのコマンド。 |
| **タイムアウト** | 失敗の結果が出るまでにテストを実行する時間（分単位）。 |
| **Points** | _オプション_。 テストの合計点に占める点数。 |

## アシスタントのために自動採点テストを設定する

新課題の作成時に、自動採点テストを追加できます。 {% data reusables.classroom.for-more-information-about-assignment-creation %}

既存の課題用の自動採点テストを追加、編集、削除できます。 Classroom UI を介して行われたすべての変更は、既存の学生リポジトリにプッシュされるため、テストを編集するときは注意が必要です。

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.assignments-click-pencil %}
1. 左側のサイドバーで、 **[採点とフィードバック]** をクリックします。
  ![課題の基本の左側にある [採点とフィードバック]](/assets/images/help/classroom/assignments-click-grading-and-feedback.png)
1. 自動採点テストを追加、編集、または削除します。
    - テストを追加するには、[自動採点テストの追加] で **[テストの追加]** ドロップダウン メニューを選択し、使用する採点方法をクリックします。
       ![[テストの追加] ドロップダウン メニューを使用して、採点方法をクリックします](/assets/images/help/classroom/autograding-click-grading-method.png) テストを構成した後、 **[テスト ケースの保存]** をクリックします。
       ![自動採点テストの [テスト ケースの保存] ボタン](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - テストを編集するには、テスト名の右側にある {% octicon "pencil" aria-label="The pencil icon" %} をクリックします。
        ![自動採点テストを編集するための鉛筆アイコン](/assets/images/help/classroom/autograding-click-pencil.png) テストを構成した後、 **[テスト ケースの保存]** をクリックします。
       ![自動採点テストの [テスト ケースの保存] ボタン](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - テストを削除するには、テスト名の右側にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。
        ![自動採点テストを削除するためのゴミ箱アイコン](/assets/images/help/classroom/autograding-click-trash.png)
1. ページの下部にある **[課題の更新]** をクリックします。
  ![ページの下部にある [課題の更新] ボタン](/assets/images/help/classroom/assignments-click-update-assignment.png)

## 自動採点テストの結果の表示とダウンロード

### 自動採点の結果をダウンロードする

[ダウンロード] ボタンを使用して、学生の自動採点スコアの CSV をダウンロードすることもできます。 これにより、学生のリポジトリへのリンク、学生の {% data variables.product.prodname_dotcom %} ハンドル、名簿識別子、提出タイムスタンプ、自動採点スコアを含む CSV が生成されてダウンロードされます。

![[ダウンロード] ボタンが選択され、強調表示された [成績のダウンロード] と [リポジトリのダウンロード] の追加オプションが表示されています](/assets/images/help/classroom/download-grades.png)

### 個人のログを表示する
{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-assignment-in-list %}
1. 提出の右側にある **[テストの表示]** をクリックします。
  ![課題の提出の [テストの表示] ボタン](/assets/images/help/classroom/assignments-click-view-test.png)
1. テストの出力結果をレビューします。 詳細については、「[ワークフロー実行ログを使用する](/actions/managing-workflow-runs/using-workflow-run-logs)」を参照してください。

## 参考資料

- [{% data variables.product.prodname_actions %} ドキュメント](/actions)
