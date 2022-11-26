---
title: GitHub でのコミュニケーション
intro: '{% data variables.product.product_name %} 上でさまざまな種類のディスカッションを用い、特定のプロジェクトや変更について、そしてもっと幅広くアイデアや Team のゴールについて話し合うことができます。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/quickstart-for-communicating-on-github
  - /articles/about-discussions-in-issues-and-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-conversations-on-github
  - /github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github
  - /github/getting-started-with-github/quickstart/communicating-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Discussions
  - Fundamentals
ms.openlocfilehash: 18321069abd4fb48956f4d61653b8bbe592c648b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106790'
---
## はじめに

{% data variables.product.product_name %} には、コミュニティと密接にやり取りできる、コラボレーション可能なコミュニケーション ツールが組み込まれています。 このクイックスタート ガイドでは、ニーズに適したツールの選択方法について説明します。

{% ifversion discussions %}行いたい会話の種類に応じて、issue、pull request、{% data variables.product.prodname_discussions %}、チーム ディスカッションを作成して参加できます。
{% else %}行いたい会話の種類に応じて、issue、pull request、チーム ディスカッションを作成して参加できます。
{% endif %}

### {% data variables.product.prodname_github_issues %}
- バグ報告や改善計画、フィードバックなど、プロジェクトの特定の詳細についてのディスカッションに役立ちます。 
- リポジトリに固有であり、通常は明確なオーナーがいます。 
- 多くの場合、{% data variables.product.prodname_dotcom %} のバグ追跡システムと呼ばれます。
  
### Pull Request
- 特定の変更を提案できます。
- 他のユーザーが提案した変更について直接コメントできます。 
- リポジトリに固有です。 
 
{% ifversion fpt or ghec %}
### {% data variables.product.prodname_discussions %}
-  フォーラムのようなもので、コラボレーションが重要なオープン形式のアイデアやディスカッションに最適です。 
-  多数のリポジトリにまたがる場合があります。 
-  コードベースの外部でコラボレーション エクスペリエンスを提供し、アイデアのブレーンストーミングとコミュニティのナレッジ ベースの作成を可能にします。
-  多くの場合、明確なオーナーはいません。
-  多くの場合、操作可能なタスクは発生しません。
{% endif %}

### Team ディスカッション
- プロジェクトをまたぎ、特定の issue または pull request に属していない会話に対して、チームのページで開始できます。 アイデアについてディスカッションするためにリポジトリでIssueを開く代わりに、Teamディスカッションで会話することでTeam全体を巻き込めます。
- 計画、分析、設計、ユーザー調査、一般的なプロジェクトの意思決定に関するチームのディスカッションを 1 か所で行うことができます。{% ifversion ghes or ghae %} 
- コードベースの外部でコラボレーション エクスペリエンスを提供し、アイデアのブレーンストーミングを可能にします。
- 多くの場合、明確なオーナーはいません。
- 多くの場合、操作可能なタスクは発生しません。{% endif %}

## どのディスカッション ツールを使用すべきか

### issue のシナリオ

- タスク、機能強化、バグを追跡したい。
- バグ報告を提出したい。
- 特定の機能に関するフィードバックを共有したい。
- リポジトリ内のファイルについて質問したい。

#### 問題の例

この例では、{% data variables.product.prodname_dotcom %} ユーザーがどのようにしてドキュメント オープン ソース リポジトリに issue を作成してバグを認識させ、修正プログラムについて話し合うかを示しています。 

![issue の例](/assets/images/help/issues/issue-example.png)

- あるユーザーが、中国語版の {% data variables.product.prodname_dotcom %} Docs のページ上部にあるバナーの青い色で、バナー内のテキストが読めなくなることに気付きました。 
- そのユーザーはリポジトリに issue を作成し、問題について述べ、修正プログラム (バナーに別の背景色を使用する) を提案しました。
- ディスカッションが続き、最終的には、修正プログラムの適用に関する合意に達します。
- これで、共同作成者が修正プログラムを含む pull request を作成できます。

### pull request のシナリオ

- リポジトリの入力ミスを修正したい。
- リポジトリに変更を加えたい。
- 変更を加えて issue を修正したい。
- 他の人によって提案された変更についてコメントしたい。

#### プル要求の例

この例では、{% data variables.product.prodname_dotcom %} ユーザーがどのようにしてドキュメント オープン ソース リポジトリに pull request を作成して入力ミスを修正するかを示します。 

pull request の **[会話]** タブで、作成者が pull request を作成した理由を説明します。

![pull request の例 - [会話] タブ](/assets/images/help/pull_requests/pr-conversation-example.png)

pull request の **[ファイルの変更]** タブには、実装された修正プログラムが表示されます。

![pull request の例 - [ファイルの変更] タブ](/assets/images/help/pull_requests/pr-files-changed-example.png)

- この共同作成者は、リポジトリの入力ミスに気付きました。
- このユーザーが、修正プログラムを含む pull request を作成します。
- リポジトリの保守担当者は、pull request を確認し、それにコメントを付けてマージします。

{% ifversion discussions %}
### {% data variables.product.prodname_discussions %} のシナリオ

- リポジトリ内の特定のファイルに必ずしも関連していない質問がある。
- コラボレーターやチームとニュースを共有したい。
- 自由回答の会話を開始または参加したい。
- コミュニティで発表を行いたい。

#### {% data variables.product.prodname_discussions %} の例

この例では、{% data variables.product.prodname_dotcom %} Docs オープン ソース リポジトリの {% data variables.product.prodname_discussions %} ウェルカム投稿を示し、チームがコミュニティとどのようなコラボレーションを望んでいるかを示しています。

![{% data variables.product.prodname_discussions %} の例](/assets/images/help/discussions/github-discussions-example.png)

このコミュニティ保守担当者は、コミュニティを歓迎し、メンバーに自己紹介を求めるディスカッションを始めました。 この投稿は、訪問者と共同作成者が参加しやすい雰囲気を生み出します。 この投稿では、チームがリポジトリへの投稿を喜んで支援することも明らかになっています。

{% endif %}
### チーム ディスカッションのシナリオ

- リポジトリ内の特定のファイルに必ずしも関連していない質問がある。
- コラボレーターやチームとニュースを共有したい。
- 自由回答の会話を開始または参加したい。
- チームで発表を行いたい。

{% ifversion fpt or ghec %} ご覧のように、チーム ディスカッションは {% data variables.product.prodname_discussions %} と非常によく似ています。 {% data variables.product.prodname_dotcom_the_website %} の場合、会話の出発点として {% data variables.product.prodname_discussions %} を使用することをお勧めします。 {% data variables.product.prodname_discussions %} を使用して、{% data variables.product.prodname_dotcom %} 上のどのコミュニティともコラボレーションを行うことができます。 あなたが組織の一員であり、組織内または組織のチーム内で会話を開始したい場合は、チーム ディスカッションを使用する必要があります。
{% endif %}

#### チーム ディスカッションの例

この例は、`octo-team` チームのチーム投稿を示しています。

![チーム ディスカッションの例](/assets/images/help/projects/team-discussions-example.png)

`octocat` のチーム メンバーはチーム ディスカッションを投稿し、さまざまなことをチームに通知しました。
- Mona というチーム メンバーがリモート ゲーム イベントを開始しました。
- チームが {% data variables.product.prodname_actions %} を使用してどのようにドキュメントを生成するのかを説明するブログ記事があります。
- April All Hands に関する資料を、すべてのチーム メンバーが閲覧できるようになりました。

## 次の手順

これらの例では、{% data variables.product.product_name %} で会話に最適なツールを決定する方法を示しました。 しかし、これは始まりにすぎません。これらのツールをニーズに合わせて調整するためにできることは、他にもたくさんあります。

たとえば、issue の場合は、より迅速に検索できるように issue にラベルをタグ付けしたり、共同作成者が有意義な issue をオープンできるように issue テンプレートを作成したりできます。 詳細については、「[Issue について](/github/managing-your-work-on-github/about-issues#working-with-issues)」と「[Issue と pull request のテンプレートについて](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)」を参照してください。

pull request の場合、提案された変更がまだ進行中の場合は、下書きの pull request を作成できます。 下書きの pull request は、レビュー準備完了としてマークされるまでマージできません。 詳細については、「[pull request について](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)」を参照してください。

{% ifversion discussions %}{% data variables.product.prodname_discussions %} の場合は、{% ifversion fpt or ghec %}行動規定を設定し、{% endif %}コミュニティの重要な情報を含むディスカッションをピン留めすることができます。 詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。
{% endif %}

チーム ディスカッションの場合は、チームのページでディスカッションを編集または削除したり、チーム ディスカッションの通知を構成したりできます。 詳細については、「[チーム ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)」を参照してください。

通信に役立つ高度な書式設定機能については、「[{% data variables.product.prodname_dotcom %} での記述に関するクイックスタート](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)」をご覧ください。
