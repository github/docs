---
title: インターフェイス
redirect_from:
  - /v4/interface
  - /v4/reference/interface
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: de0a12e638a7f98f34b1704e272b040a6178eaeb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496613'
---
## インターフェースについて

[インターフェイス](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces)は、他のオブジェクトが継承できる親オブジェクトとして機能します。

たとえば、[`Lockable`](/graphql/reference/interfaces#lockable) は [`Issue`](/graphql/reference/objects#issue) および [`PullRequest`](/graphql/reference/objects#pullrequest) オブジェクトの両方をロックできるため、インターフェイスです。 インターフェースは、実装オブジェクトが共有する名前付きフィールドのリストを独自に持ちます。

詳細については、「[実装](/graphql/guides/introduction-to-graphql#implementation)」を参照してください。

<!-- Content after this section is automatically generated -->
