---
ms.openlocfilehash: 6d101895af1ae0e202ebfb49119c83a14682de09
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091251"
---
{% ifversion fpt or ghec %} {% note %}

**注:** {% data variables.product.prodname_dependabot %} pull request によってトリガーされるワークフロー実行は、フォークされたリポジトリからのものであるかのように実行されるため、読み取り専用の `GITHUB_TOKEN` を使用します。 それらのワークフローの実行は、シークレットにはアクセスできません。 これらのワークフローを安全に保つための戦略については、「[GitHub Actions とワークフローを安全に保つ: pwn 要求の防止](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)」を参照してください。

{% endnote %} {% endif %}
