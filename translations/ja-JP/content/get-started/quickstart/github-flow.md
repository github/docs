---
title: GitHub フロー
intro: '{% data variables.product.prodname_dotcom %} フローに従って、プロジェクトで共同作業を行います。'
redirect_from:
  - /articles/creating-and-editing-files-in-your-repository
  - /articles/github-flow-in-the-browser
  - /articles/github-flow
  - /github/collaborating-with-issues-and-pull-requests/github-flow
  - /github/getting-started-with-github/github-flow
  - /github/getting-started-with-github/quickstart/github-flow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5458d7b14ff59bf7059f093ee47ee92034b9319f
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878687'
---
## はじめに

{% data variables.product.prodname_dotcom %} フローは、軽量のブランチ ベースのワークフローです。 {% data variables.product.prodname_dotcom %} フローは、開発者だけでなくすべてのユーザーに役立ちます。 たとえば、ここ {% data variables.product.prodname_dotcom %} では、[サイト ポリシー](https://github.com/github/site-policy)、[ドキュメント](https://github.com/github/docs)、[ロードマップ](https://github.com/github/roadmap)に {% data variables.product.prodname_dotcom %} フローを使用します。

## 前提条件

{% data variables.product.prodname_dotcom %} フローに従うには、{% data variables.product.prodname_dotcom %} アカウントとリポジトリが必要です。 アカウントを作成する方法については、「[{% data variables.product.prodname_dotcom %} へのサインアップ](/github/getting-started-with-github/signing-up-for-github)」を参照してください。 リポジトリを作成する方法については、「[リポジトリの作成](/github/getting-started-with-github/create-a-repo)」を参照してください。{% ifversion fpt or ghec %}投稿する既存のリポジトリを検索する方法については、「[{% data variables.product.prodname_dotcom %} でオープンソースに投稿する方法を見つける](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)」を参照してください。{% endif %}

## {% data variables.product.prodname_dotcom %} フローに従う

{% tip %}

{% ifversion fpt or ghec %} **ヒント：** {% data variables.product.prodname_dotcom %} フローのすべての手順は、{% data variables.product.prodname_dotcom %} Web インターフェイス、コマンド ラインと [{% data variables.product.prodname_cli %}](https://cli.github.com)、または [{% data variables.product.prodname_desktop %}](/free-pro-team@latest/desktop) を介して実行できます。
{% else %} **ヒント:** {% data variables.product.prodname_dotcom %} フローのすべての手順は、{% data variables.product.prodname_dotcom %} Web インターフェイスか、コマンド ラインと [{% data variables.product.prodname_cli %}](https://cli.github.com) を介して実行できます。
{% endif %}

{% endtip %}

### 分岐を作成する

  リポジトリにブランチを作成します。 短くわかりやすいブランチ名を使用すると、コラボレーターは進行中の作業を一目で確認できます。 たとえば、`increase-test-timeout` または `add-code-of-conduct` です。 詳細については、「[リポジトリ内でブランチを作成および削除する](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)」を参照してください。

  ブランチを作成することで、既定のブランチに影響を与えずに作業するスペースを作成します。 さらに、コラボレーターに作業をレビューする機会を与えます。

### 変更を加える

ブランチで、リポジトリに必要な変更を加えます。 詳細については、「[新しいファイルの作成](/articles/creating-new-files)」、「[ファイルの編集](/articles/editing-files)」、「[ファイルの名前変更](/articles/renaming-a-file)」、「[新しい場所へのファイルの移動](/articles/moving-a-file-to-a-new-location)」、「[リポジトリ内のファイルの削除](/github/managing-files-in-a-repository/deleting-files-in-a-repository)」を参照してください。

ブランチは、変更を加えるのに安全な場所です。 間違えた場合は、変更を元に戻すか、追加の変更をプッシュして間違いを修正できます。 ブランチをマージするまで、変更は既定のブランチに反映されません。

変更をブランチにコミットしてプッシュします。 コミットに含まれる変更について、自分と今後の共同作成者が理解できるように、各コミットにわかりやすいメッセージを付けます。 たとえば、`fix typo` または `increase rate limit` です。

理想的には、各コミットには分離された完全な変更が含まれます。 これにより、別の方法を使用する場合に変更を簡単に元に戻せます。 たとえば、変数の名前を変更し、いくつかのテストを追加する場合は、変数の名前変更をあるコミットに配置し、テストを別のコミットに配置します。 後でテストを保持し、変数の名前を元に戻す場合は、変数の名前変更を含む特定のコミットを元に戻すことができます。 変数の名前変更とテストを同じコミットに配置したり、変数の名前変更を複数のコミットに分散させたりすると、変更を元に戻す労力が増えます。

変更をコミットしてプッシュすることで、作業をリモート ストレージにバックアップします。 つまり、任意のデバイスから作業にアクセスできます。 また、コラボレーターが作業を確認したり、質問に回答したり、提案や投稿を行ったりすることもできます。

フィードバックを求める準備ができるまで、引き続きブランチに変更を加え、コミットし、プッシュします。

{% tip %}

**ヒント：** 一連の関連のない変更ごとに個別のブランチを作成します。 これにより、レビュー担当者がフィードバックを提供しやすくなります。 また、ユーザーと将来のコラボレーターが変更を理解し、変更を元に戻し、変更をさらに加えることもできます。 さらに、ある一連の変更に遅延があっても、他の変更には遅延が発生しません。

{% endtip %}

### pull request を作成する

変更に関するフィードバックをコラボレーターに依頼する pull request を作成します。 pull request のレビューは非常に重要なため、一部のリポジトリでは、pull request をマージする前に承認レビューが必要になります。 変更を完了する前に早期のフィードバックやアドバイスが必要な場合は、pull request を下書きとして表示できます。 詳細については、「[プルリクエストの作成方法](/articles/creating-a-pull-request)」を参照してください。

pull request を作成する場合は、変更の概要と変更が解決する問題を含めます。 この情報を伝えるために役立つ画像、リンク、テーブルを含めることができます。 pull request が問題に対応するは、問題へのリンクを表示し、問題の関係者が pull request を認識できるようにします。また、このリンクを表示することで、pull request への問題の対応ができるようになります。 キーワードを使用してリンクを表示すると、pull request がマージされると問題は自動的に終了します。 詳細については、「[基本的な書き込みと書式の構文](/github/writing-on-github/basic-writing-and-formatting-syntax)」および「[pull request を問題にリンクする](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)」を参照してください。

![pul request の本文](/assets/images/help/pull_requests/pull-request-body.png)

pull request の本文を入力するだけでなく、pull request の特定の行にコメントを追加して、レビュー担当者に何かを明示的に指摘することができます。

![pull request のコメント](/assets/images/help/pull_requests/pull-request-comment.png)

pull request の作成時に特定のチームまたはユーザーからレビューを自動的に要求するようにリポジトリを構成できます。 手動で @mention を入力し、特定のユーザーまたはチームに対してレビューを要求することもできます。

リポジトリに pull request で実行するように構成されたチェックがある場合は、pull request で失敗したチェックが表示されます。 これにより、ブランチをマージする前にエラーを把握できます。 詳細については、「[ステータスチェックについて](/github/collaborating-with-issues-and-pull-requests/about-status-checks)」を参照してください。

### レビュー コメントに対応する

レビュー担当者は質問、コメント、提案を残す必要があります。 レビュー担当者は、pull request 全体にコメントしたり、特定の行にコメントを追加したりできます。 ユーザーとレビュー担当者は画像やコード提案を挿入して、コメントを明確にすることができます。 詳細については、「[pull request での変更のレビュー](/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests)」を参照してください。

レビューに応じて、引き続き変更をコミットしプッシュすることができます。 プルリクエストは自動的に更新されます。

### pull request をマージする

pull request が承認されたら、pull request をマージします。 これにより、ブランチが自動的にマージされ、変更が既定のブランチに表示されます。 {% data variables.product.prodname_dotcom %} は、コメントとコミットの履歴を pull request に保持し、今後の共同作成者が変更を理解できるようにします。 詳細については、「[プル リクエストをマージする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)」を参照してください。

{% data variables.product.prodname_dotcom %} は、pull request にマージ前に解決する必要がある競合があるかどうかを示します。 詳細については、「[マージ コンフリクトに対処する](/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts)」を参照してください。

pull request が特定の要件を満たしていない場合、ブランチ保護設定によってマージがブロックされる可能性があります。 たとえば、特定の数の承認レビューや特定のチームからの承認レビューが必要です。 詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)」を参照してください。

### ブランチを削除する

pull request をマージした後、ブランチを削除します。 これは、ブランチでの作業が完了したことを示し、ユーザーや他のユーザーが誤って古いブランチを使用するのを防ぎます。 詳細については、「[pull request 内のブランチの削除と復元](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)」を参照してください。

情報が失われる心配はありません。 pull request とコミットの履歴は削除されません。 必要に応じて、いつでも削除したブランチを復元し、pull request を元に戻すことができます。
