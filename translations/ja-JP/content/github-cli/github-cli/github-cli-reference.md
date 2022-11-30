---
title: GitHub CLI リファレンス
intro: 'ターミナルまたは {% data variables.product.prodname_cli %} マニュアルで、すべての {% data variables.product.prodname_cli %} コマンドを表示できます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: reference
ms.openlocfilehash: 1da9b2ffe79af2c432a4dfc79f944f8656663733
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068543'
---
すべての最上位 {% data variables.product.prodname_cli %} コマンドを表示するには、「[{% data variables.product.prodname_cli %} マニュアル](https://cli.github.com/manual/gh)」を参照するか、引数なしで `gh` を呼び出します。

```shell
gh
```

特定のグループのすべてのコマンドを一覧表示するには、引数を指定せずに最上位コマンドを使用します。 たとえば、[リポジトリを管理するためのコマンド](https://cli.github.com/manual/gh_repo)を一覧表示するには、次のようにします。

```shell
gh repo
```

{% data variables.product.prodname_cli %} で使用できる環境変数を表示するには、「[{% data variables.product.prodname_cli %} マニュアル](https://cli.github.com/manual/gh_help_environment)」を参照するか、`environment` コマンドを使用します。

```shell
gh environment
```

{% data variables.product.prodname_cli %} で使用できる構成設定を表示するには、「[{% data variables.product.prodname_cli %} マニュアル](https://cli.github.com/manual/gh_config)」を参照するか、`config` コマンドを使用します。

```shell
gh config
```
