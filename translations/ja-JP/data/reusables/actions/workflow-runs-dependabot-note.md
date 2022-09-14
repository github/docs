---
ms.openlocfilehash: 6d101895af1ae0e202ebfb49119c83a14682de09
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145091251"
---
{% ifversion fpt or ghec %} {% note %}

**注:** {% data variables.product.prodname_dependabot %} pull request によってトリガーされるワークフロー実行は、フォークされたリポジトリからのものであるかのように実行されるため、読み取り専用の `GITHUB_TOKEN` を使用します。 それらのワークフローの実行は、シークレットにはアクセスできません。 これらのワークフローを安全に保つための戦略については、「[GitHub Actions とワークフローを安全に保つ: pwn 要求の防止](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)」を参照してください。

{% endnote %} {% endif %}
