---
title: Unions
redirect_from:
  - /v4/union
  - /v4/reference/union
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 550085d5cf8d9e3f9918b0e8e9c837a2ff85d9d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496488'
---
## ユニオンについて

[ユニオン](https://graphql.github.io/graphql-spec/June2018/#sec-Unions)は、多くのオブジェクトを表すオブジェクトの型です。

たとえば、プロジェクト カード内にはそれらの各オブジェクトを含めることができるので、[`ProjectCardItem`](/graphql/reference/unions#projectcarditem) としてマークされるフィールドは、[`Issue`](/graphql/reference/objects#issue) または [`PullRequest`](/graphql/reference/objects#pullrequest) となる可能性があります。 オブジェクトの代わりにユニオンを使うことで柔軟性が得られます。

詳しい情報については、「[GraphQL の概要](/graphql/guides/introduction-to-graphql)」を参照してください。

<!-- Content after this section is automatically generated -->
