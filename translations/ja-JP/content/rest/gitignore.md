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
ms.openlocfilehash: e830b0f00d60f3eb121fa2a99a910b073780700e
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181269'
---
## Gitignore API について

この API を使って {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} に新しいリポジトリを作成する場合、作成時にリポジトリに適用する [.gitignore テンプレート](/github/getting-started-with-github/ignoring-files)を指定できます。 .gitignore テンプレート API では、{% data variables.product.product_name %} [.gitignore リポジトリ](https://github.com/github/gitignore)からテンプレートを列挙およびフェッチします。

### gitignore のカスタムメディアタイプ

gitignore テンプレートを取得するときに、このカスタムメディアタイプを使用できます。

    application/vnd.github.raw

詳細については、「[メディア タイプ](/rest/overview/media-types)」を参照してください。
