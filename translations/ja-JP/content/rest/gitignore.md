---
title: Gitignore
intro: REST API を使用して、ファイルとディレクトリを無視するために使用できる `.gitignore` テンプレートを取得します。
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
ms.openlocfilehash: a3d6d35014a0c6bc46102fa7abfa11659fff6fbf
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193042'
---
## gitignore について

この API を使って {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} に新しいリポジトリを作成する場合、作成時にリポジトリに適用する [.gitignore テンプレート](/github/getting-started-with-github/ignoring-files)を指定できます。 REST API を使って、{% data variables.product.product_name %} [.gitignore リポジトリ](https://github.com/github/gitignore)から .gitignore テンプレートを取得できます。

gitignore テンプレートを取得するときに、この `application/vnd.github.raw` カスタム メディア タイプを使用できます。 詳細については、「[メディア タイプ](/rest/overview/media-types)」を参照してください。
