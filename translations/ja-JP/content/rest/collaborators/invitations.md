---
title: リポジトリへの招待
allowTitleToDifferFromFilename: true
shortTitle: Invitations
intro: Repository invitations API を使用すると、リポジトリで共同作業するための招待を表示および管理できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8096f49ce586f3f56a686b99a688a6894653d9b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065795'
---
## Repository invitations API について

Repository invitations API を使用すると、リポジトリで共同作業するための招待を表示および管理できます。 招待されたユーザ (または招待されたユーザを代行する外部サービス) は、招待を受諾または拒否できます。

コラボレーターとしてユーザーを追加するには、代わりに Collaborators API を使用します。 詳細については、「[リポジトリ コラボレーターの追加](/rest/collaborators/collaborators#add-a-repository-collaborator)」を参照してください。

`repo:invite` [OAuth スコープ](/developers/apps/scopes-for-oauth-apps)では、リポジトリ コードへのアクセスを許可 **しない** で、招待への対象アクセスを許可しますが、一方で、`repo` スコープでは、招待に加えてコードへのアクセス許可も許可していることに注意してください。
