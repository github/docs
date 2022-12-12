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
ms.openlocfilehash: a6fed36ccd70557b8d88904f83840a7afacdfacb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109150'
---
## インターフェースについて

[インターフェイス](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces)は、他のオブジェクトが継承できる親オブジェクトとして機能します。

たとえば、[`Lockable`](/graphql/reference/interfaces#lockable) は [`Issue`](/graphql/reference/objects#issue) および [`PullRequest`](/graphql/reference/objects#pullrequest) オブジェクトの両方をロックできるため、インターフェイスです。 インターフェースは、実装オブジェクトが共有する名前付きフィールドのリストを独自に持ちます。

詳細については、「[実装](/graphql/guides/introduction-to-graphql#implementation)」を参照してください。

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
