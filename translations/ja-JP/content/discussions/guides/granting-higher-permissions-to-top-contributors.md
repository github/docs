---
title: 上位コントリビューターにより高い権限を付与する
intro: リポジトリ管理者は、コミュニティメンバーをモデレータおよびメンテナに昇格させることができます。
versions:
  feature: discussions
shortTitle: Grant higher permissions
ms.openlocfilehash: d672b11df4c984ad0ba272756d1a8a1b713eff78
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409604'
---
## はじめに

過去 30 日間で最も貢献したコントリビューターは、他のコミュニティメンバーによって回答としてマークされたコメントの数に基づいて、{% data variables.product.prodname_discussions %} ダッシュボードで強調表示されます。 貢献度の高いコントリビューターは、健全なコミュニティを推進し、メンテナに加えて、節度のあるコミュニティスペースに導くことができます。

## 手順 1: {% data variables.product.prodname_discussions %} の上位コントリビューターを監査する

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. 共同作成者の一覧を、リポジトリへのアクセス許可と、あるいは Organization ディスカッションの場合、ソースリポジトリへのアクセス許可を比較し、ディスカッションをモデレートできる共同作成者を確認します。
  ![最も役に立つ共同作成者のスクリーンショット](/assets/images/help/discussions/most-helpful.png)

## 手順 2: {% data variables.product.prodname_discussions %} のアクセス許可レベルを確認する

リポジトリのトリアージ権限を持つユーザーは、コメントを回答としてマークし、役に立たなくなった、またはコミュニティに損害を与えているディスカッションをロックし、アイデアがまだ開発の初期段階にあるときに Issue をディスカッションに変換することで、レジストリのディスカッションをモデレートするのに役立つ場合があります。 同様に、Organization ディスカッションのソースリポジトリのトリアージ許可のあるユーザーは、Organization のディスカッションをモデレートできます。 詳細については、「[ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions)」を参照してください。

リポジトリのアクセス許可レベルと {% data variables.product.prodname_discussions %} の詳細については、「[Organization のリポジトリの権限レベル](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)」を参照してください。

## ステップ 3: 上位コントリビューターのアクセス権限レベルを変更する

コントリビューターのアクセス権限レベルを変更して、GitHub ディスカッションをモデレートするために必要なより多くのツールにアクセスできるようになります。 ユーザーまたは Team の権限レベルを変更するには、「[リポジトリへのアクセス権を持つ Team と人を管理する](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)」を参照してください。

## ステップ 4: アクセス権限の昇格をコミュニティメンバーに通知する

コラボレータの権限レベルを変更すると、変更通知がコラボレータに送信されます。
