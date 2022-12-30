---
ms.openlocfilehash: 0957d7c909250bfccb51681eac05e3f3196bb6d5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145096299"
---
{% ifversion fpt or ghec or ghes > 3.4 %}

Para se autenticar no {% data variables.product.prodname_container_registry %} em um fluxo de trabalho do {% data variables.product.prodname_actions %}, use o `GITHUB_TOKEN` para ter a melhor segurança e experiência. Se o seu fluxo de trabalho estiver usando um PAT (token de acesso pessoal) para se autenticar em `{% data reusables.package_registry.container-registry-hostname %}`, recomendamos expressamente atualizar seu fluxo de trabalho para usar o `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}Para obter diretrizes sobre como atualizar seus fluxos de trabalho que se autenticam no `{% data reusables.package_registry.container-registry-hostname %}` com um token de acesso pessoal, confira "[Como atualizar um fluxo de trabalho que acessa o `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)"."{% endif %}

Para obter mais informações sobre o `GITHUB_TOKEN`, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Se você estiver usando o {% data variables.product.prodname_container_registry %} nas ações, siga nossas melhores práticas de segurança em "[Proteção de segurança para o GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

{% endif %}
