---
title: 組織内の codespace を一覧表示する
shortTitle: List organization codespaces
intro: 組織に対して現在アクティブになっているまたは停止している codespace をすべて一覧表示できます。
permissions: 'To list all of the current codespaces for your organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Administrator
ms.openlocfilehash: e3d475560c76449ed20b70fbce29ef6273f788fc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158630'
---
## 概要

組織の所有者は、組織に対して現在アクティブになっているまたは停止している codespace をすべて一覧表示できます。 これを行って、ユーザーが作成している codespace の数を確認し、不要なコストが発生していないことを確認することをお勧めします。 価格について詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」をご覧ください。

組織用の codespace を一覧表示する最も簡単な方法は、{% data variables.product.prodname_cli %} を使用することです。 REST API を使用することもできます。これにより、各 codespace に関する詳しい情報を確認できます。

Organization または Enterprise の現在の合計 {% data variables.product.prodname_codespaces %} 使用量を確認し、詳細なレポートを生成する方法については、「[{% data variables.product.prodname_github_codespaces %} の使用量を表示する](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)」をご覧ください。

### {% data variables.product.prodname_cli %} を使用して codespace を一覧表示する

指定した組織に対する現在の codespace をすべて一覧表示するには、次のコマンドを使用します。

```shell{:copy}
gh codespace list --org ORGANIZATION 
```

このコマンドを実行すると、codespace ごとに次の情報を含むリストが返されます。 
    - 名前と表示名 
    - codespace を作成したユーザー
    - リポジトリとブランチ
    - codespace の現在の状態

特定のユーザーによって作成された、組織向けの現在の codespace をすべて一覧表示するには、次のコマンドを使用します。

```shell{:copy}
gh codespace list --org ORGANIZATION --user USER
```

{% note %}

**注**: 上記のコマンドでは、`ORGANIZATION` を、クエリを実行する組織の名前に置き換えます。 組織の所有者でなければなりません。

{% endnote %}

### REST API を使用して codespace を一覧表示する

組織に対する現在の codespace を一覧表示する別の方法として、`/orgs/{org}/codespaces` API エンドポイントを使用することもできます。 これを使用すると、{% data variables.product.prodname_cli %} よりも多くの情報が返されます。たとえば、マシンの種類に関する詳しい情報などです。

このエンドポイントについて詳しくは、「[Codespaces Organizations](/rest/codespaces/organizations#list-codespaces-for-the-organization)」を参照してください。
