---
ms.openlocfilehash: 902af6bdbe3c48fe8b5930bdf1041151f343b60b
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113862"
---
Se o seu fluxo de trabalho estiver usando um {% data variables.product.pat_generic %} para se autenticar em um registro, então é altamente recomendável atualizar seu fluxo de trabalho para usar o `GITHUB_TOKEN`.

{% ifversion fpt or ghec %} Para obter diretrizes sobre como atualizar seus fluxos de trabalho que se autenticam em um registro com um {% data variables.product.pat_generic %}, confira "[Atualizar um fluxo de trabalho que acessa um registro usando um {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token)".{% endif %}

Para obter mais informações sobre o `GITHUB_TOKEN`, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Para obter mais informações sobre as melhores práticas ao usar um registro em ações, confira "[Proteção de segurança para GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".
