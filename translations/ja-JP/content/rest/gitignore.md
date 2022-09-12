---
title: Gitignore
intro: Gitignore API では、ファイルやディレクトリを無視するために利用できる `.gitignore` テンプレートをフェッチします。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/gitignore
ms.openlocfilehash: 082b626aac4af8dcdf435761447caeb015a608db
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147092887'
---
## Gitignore API について

この API を使用して {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} に新しいリポジトリを作成する場合、作成されたリポジトリに適用する [.gitignore テンプレート](/github/getting-started-with-github/ignoring-files)を指定できます。 .gitignore テンプレート API では、{% data variables.product.product_name %} [.gitignore リポジトリ](https://github.com/github/gitignore)からテンプレートを列挙およびフェッチします。

### gitignore のカスタムメディアタイプ

gitignore テンプレートを取得するときに、このカスタムメディアタイプを使用できます。

    application/vnd.github.VERSION.raw

詳細については、「[メディア タイプ](/rest/overview/media-types)」を参照してください。
