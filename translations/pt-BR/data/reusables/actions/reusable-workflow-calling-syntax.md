---
ms.openlocfilehash: 9b1f61261d2e59fe30703a3bebfdaed7a25667e6
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145083842"
---
* `{owner}/{repo}/.github/workflows/{filename}@{ref}`{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} Para fluxos de trabalho reutilizáveis em repositórios públicos {% ifversion ghes or ghec or ghae %}ou internos{% endif %}.
* `./.github/workflows/{filename}` para fluxos de trabalho reutilizáveis no mesmo repositório.{% endif %}

`{ref}` pode ser um SHA, uma tag de versão ou um nome de branch. Usar o commit SHA é o mais seguro para a estabilidade e segurança. Para obter mais informações, confira "[Proteção de segurança do GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows)". {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}Se você usar a segunda opção de sintaxe (sem `{owner}/{repo}` e `@{ref}`), o fluxo de trabalho chamado será proveniente do mesmo commit do fluxo de trabalho chamador.{% endif %}
