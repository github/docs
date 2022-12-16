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
ms.openlocfilehash: 10a84ad425b0c8b871b1c64f09bef4d8cf33d007
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109151'
---
## 入力オブジェクトについて

[入力オブジェクト](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects)は、オブジェクトを定義する一連の入力フィールドが含まれているため、"構成可能なオブジェクト" ということができます。

たとえば、[`CommitAuthor`](/graphql/reference/input-objects#commitauthor) では `emails` というフィールドを受け取ります。 `emails` に値を指定すると、そのメール アドレスを含む `User` オブジェクトのリストに `CommitAuthor` が変換されます。 [オブジェクト](/graphql/reference/objects)には入力オブジェクトがある **場合がある** のに対して、[ミューテーション](/graphql/reference/mutations)には入力オブジェクトが **必要** であることに注意してください。

詳細については、「[ミューテーションについて](/graphql/guides/forming-calls-with-graphql#about-mutations)」を参照してください。

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
