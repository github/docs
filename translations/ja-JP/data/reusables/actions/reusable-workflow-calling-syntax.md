---
ms.openlocfilehash: 9b1f61261d2e59fe30703a3bebfdaed7a25667e6
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089272"
---
* `{owner}/{repo}/.github/workflows/{filename}@{ref}`{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} は、パブリック {% ifversion ghes or ghec or ghae %}または内部{% endif %}リポジトリの再利用可能なワークフローの場合。
* `./.github/workflows/{filename}` は同じリポジトリ内の再利用可能なワークフローの場合。{% endif %}

`{ref}` には、SHA、リリース タグ、またはブランチ名を指定できます。 コミット SHA を使用することが、安定性とセキュリティにとって最も安全です。 詳細については、「[GitHub Actions のセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows)」を参照してください。 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}2 番目の構文オプションを (`{owner}/{repo}` および `@{ref}` なしで) 使用する場合、呼び出されたワークフローは呼び出し元ワークフローと同じコミットから取得されます。{% endif %}
