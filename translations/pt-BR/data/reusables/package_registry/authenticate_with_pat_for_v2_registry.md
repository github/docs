---
ms.openlocfilehash: 4cf4347384a6be2cadb240a15bc78efea0097799
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192750"
---
Alguns registros do {% data variables.product.prodname_registry %} dão suporte a permissões granulares. Isso significa que você pode optar por permitir que os pacotes sejam de propriedade de um usuário ou organização ou vinculados a um repositório. Para obter a lista de registros que oferecem suporte a permissões granulares, consulte "[Sobre permissões para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

Para registros que oferecem suporte a permissões granulares, se seu fluxo de trabalho estiver usando um {% data variables.product.pat_generic %} para autenticar em um registro, recomendamos que você atualize seu fluxo de trabalho para usar o `GITHUB_TOKEN`.

Para obter diretrizes sobre como atualizar seus fluxos de trabalho que se autenticam em um registro com um {% data variables.product.pat_generic %}, confira "[Como fazer upgrade de um fluxo de trabalho que acessa um registro usando um {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token)".

Para obter mais informações sobre o `GITHUB_TOKEN`, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Para obter mais informações sobre as melhores práticas ao usar um registro em ações, confira "[Proteção de segurança para GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".
