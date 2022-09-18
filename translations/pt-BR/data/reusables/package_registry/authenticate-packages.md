---
ms.openlocfilehash: fd3590bb212b7c9521cb447ca012b19270469a8c
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145096311"
---
Você precisa de um token de acesso para publicar, instalar e excluir pacotes.

Você pode usar um PAT (token de acesso pessoal) para se autenticar no {% data variables.product.prodname_registry %} ou na API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. Ao criar um token de acesso pessoal, você pode atribuir diferentes escopos de token, dependendo da sua necessidade. Para obter mais informações sobre escopos relacionados a pacotes para um PAT, confira "[Sobre as permissões para pacotes do GitHub](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)".

Para efetuar a autenticação em um registro do {% data variables.product.prodname_registry %} dentro de um fluxo de trabalho de {% data variables.product.prodname_actions %}, você pode utilizar:
- `GITHUB_TOKEN` para publicar pacotes associados ao repositório do fluxo de trabalho.
- um PAT para instalar pacotes associados a outros repositórios privados (que não podem ser acessados pelo `GITHUB_TOKEN`).
