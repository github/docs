---
title: 入力オブジェクト
redirect_from:
  - /v4/input_object
  - /v4/reference/input_object
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 1e89d84c895ec4516188b0c42a0147a95d0bb5e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496689'
---
## 入力オブジェクトについて

[入力オブジェクト](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects)は、オブジェクトを定義する一連の入力フィールドが含まれているため、"構成可能なオブジェクト" ということができます。

たとえば、[`CommitAuthor`](/graphql/reference/input-objects#commitauthor) では `emails` というフィールドを受け取ります。 `emails` に値を指定すると、そのメール アドレスを含む `User` オブジェクトのリストに `CommitAuthor` が変換されます。 [オブジェクト](/graphql/reference/objects)には入力オブジェクトがある **場合がある** のに対して、[ミューテーション](/graphql/reference/mutations)には入力オブジェクトが **必要** であることに注意してください。

詳細については、「[ミューテーションについて](/graphql/guides/forming-calls-with-graphql#about-mutations)」を参照してください。

<!-- Content after this section is automatically generated -->
