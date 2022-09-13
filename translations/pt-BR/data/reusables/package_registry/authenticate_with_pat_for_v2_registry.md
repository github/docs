---
ms.openlocfilehash: b5c33a751c34b9a3e0e804c6c5153fbcdc96a7f6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147705056"
---
Se o seu fluxo de trabalho estiver usando um PAT (token de acesso pessoal) para se autenticar em um registro, então é altamente recomendável atualizar seu fluxo de trabalho para usar o `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}Para obter diretrizes sobre como atualizar seus fluxos de trabalho que se autenticam em um registro com um token de acesso pessoal, confira "[Como atualizar um fluxo de trabalho que acessa um registro usando PAT](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-pat)."{% endif %}

Para obter mais informações sobre o `GITHUB_TOKEN`, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Para obter mais informações sobre as melhores práticas ao usar um registro em ações, confira "[Proteção de segurança para GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".
