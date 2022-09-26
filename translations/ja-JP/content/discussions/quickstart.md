---
title: GitHub Discussions のクイックスタート
intro: '既存のリポジトリまたは Organization で {% data variables.product.prodname_discussions %} を有効にして、コミュニティとの会話を開始します。'
allowTitleToDifferFromFilename: true
versions:
  feature: discussions
shortTitle: Quickstart
ms.openlocfilehash: 0b43d9ce559e31c93002cc8cccef51b8284672c1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410212'
---
## はじめに

{% data variables.product.prodname_discussions %} は、オープン ソースまたは内部プロジェクトに関するコミュニティ向けの共同コミュニケーション フォーラムです。 Discussions は、{% data variables.product.prodname_github_issues %} とは異なり、透過的でアクセス可能である必要がありますが、プロジェクト ボードで追跡する必要がなく、コードに関連しない会話を対象としています。 Discussions により、公開フォーラムで流動的でオープンな会話ができるようになります。

Discussions では、より協力的な会話ができるように、情報に接続して検索するためのより一元的なエリアを提供しています。

## リポジトリの {% data variables.product.prodname_discussions %} を有効化する

リポジトリの所有者と書き込みアクセス権を持つユーザーは、パブリック{% ifversion ghes > 3.5 %}、内部、{% endif %}非公開のリポジトリのコミュニティで {% data variables.product.prodname_discussions %} を有効にできます。 ディスカッションの可視性は、ディスカッションが作成されたリポジトリから継承されます。

{% data variables.product.prodname_discussions %} を初めて有効化すると、ウェルカム投稿を設定するように求められます。

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下の [{% octicon "gear" aria-label="The gear icon" %} **設定]** をクリックします。
![パブリックの [設定] ボタン](/assets/images/help/discussions/public-repo-settings.png)
1. [機能] で **[Discussions の設定]** をクリックします。
  ![リポジトリの GitHub Discussions を有効または無効にするための [機能] の下の [Discussions の設定] ボタン](/assets/images/help/discussions/setup-discussions-button.png)
1. [Start a new discussion] で、テンプレートを編集してコミュニティに設定するリソースと方向性を合わせます。
1. **[ディスカッションの開始]** をクリックします。
  ![[ディスカッションの開始] ボタン](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## 組織の {% data variables.product.prodname_discussions %} を有効化する

組織の所有者は、組織の {% data variables.product.prodname_discussions %} を有効にすることができます。

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## ディスカッションへのコントリビューションを歓迎する

ウェルカム投稿を作成して、その投稿を {% data variables.product.prodname_discussions %} ページにピン留めすることで、コミュニティを歓迎し、リポジトリまたは組織で通信するための新しい方法を紹介できます。 ディスカッションをピン留めしてロックすると、投稿がお知らせであることを周知するのに役立ちます。 お知らせを使用すると、ユーザをより多くのリソースにリンクし、コミュニティでディスカッションをオープンするためのガイダンスを提供できます。 ディスカッションのピン留めの詳細については、[ディスカッションの管理](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)に関するページを参照してください。


## コントリビューター向けのコミュニティガイドラインを設定する

リポジトリのディスカッションでは、コントリビューションガイドラインを設定して、コラボレータがリポジトリについて有意義で有用な会話を行うよう促すことができます。 リポジトリの README を更新して、コラボレータが Issue やディスカッションをオープンするタイミングを伝えることもできます。 プロジェクトのガイドラインを提供する方法について詳しくは、{% ifversion fpt or ghec %}「[プロジェクトへの行動規範の追加](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)」および{% endif %}「[健全なコントリビューションを促すプロジェクトをセットアップする](/communities/setting-up-your-project-for-healthy-contributions)」を参照してください。

組織のディスカッションでは、組織のプロフィールの README を作成することで、組織との関わり方に関する情報を共有できます。 詳細については、「[組織のプロファイルのカスタマイズ](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)」を参照してください。

## 新しいディスカッションを作成する

リポジトリを表示できる認証されたユーザーが、そのリポジトリでディスカッションを作成できます。 同様に、組織のディスカッションはソース リポジトリに基づいているため、ソース リポジトリを表示できる認証されたユーザーは、その組織でディスカッションを作成できます。

{% data reusables.discussions.starting-a-discussion %}

## 新しいポーリングの作成

リポジトリを表示できる認証されたユーザーが、ポーリングを作成できます。 同様に、組織のディスカッションはソース リポジトリに基づいているため、ソース リポジトリを表示できる認証されたユーザーは、その組織でポーリングを作成できます。

{% data reusables.discussions.starting-a-poll %}

## ディスカッションを整理する

リポジトリの所有者とリポジトリへの書き込みアクセス権を持つユーザーは、ディスカッションを整理するための新しいカテゴリを作成できます。 同様に、組織のディスカッションはソース リポジトリに基づいているため、リポジトリの所有者とソース リポジトリへの書き込みアクセス権を持つユーザーは、組織のディスカッション用の新しいカテゴリを作成できます。

参加しているコラボレータが新しいディスカッションを作成する場合、ディスカッションを最も関連性の高い既存のカテゴリにグループ化できます。 ディスカッションは、作成後に再分類することもできます。 詳細については、「[ディスカッションのカテゴリを管理する](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)」に関するページを参照してください。

{% data reusables.discussions.you-can-label-discussions %}

## 健全な会話を促進する

リポジトリへの書き込み権限を持つユーザー、または組織のディスカッションのためのソース リポジトリの書き込み権限を持つユーザーは、ディスカッションをピン留めし、役に立たなくなった、またはコミュニティに害を与えているディスカッションを削除し、組織が所有するより関連性の高いリポジトリにディスカッションを移譲することで、重要な会話を明示できます。 詳しくは、「[ディスカッションの管理](/discussions/managing-discussions-for-your-community/managing-discussions)」を参照してください。

リポジトリのトリアージ権限を持つユーザー、または組織のディスカッションのためのソース リポジトリのトリアージ権限を持つユーザーは、コメントを回答としてマークし、役に立たなくなった、またはコミュニティに損害を与えているディスカッションをロックし、アイデアがまだ開発の初期段階にあるときに Issue をディスカッションに変換することで、プロジェクトのディスカッションをモデレートするのに役立ちます。 詳細については、「[ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions)」を参照してください。

## 次の手順

作業を確認してアイデアをコンセプトから現実に移すための明確な道筋ができたら、Issue を作成して進捗状況の追跡を開始できます。 ディスカッションから Issue を作成する方法の詳細については、「[ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions)」を参照してください。
