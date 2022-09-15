---
title: Como gerenciar a política de aprovação de confirmação para seu repositório
intro: 'Você pode exigir que os usuários aprovem automaticamente os commits que fazem no seu repositório usando a interface da Web de {% data variables.product.product_name %}.'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 4002f0767497cb2b0db9e43c9783e0c2982c8d33
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410686'
---
## Sobre as aprovações de commit

As aprovações de commit permitem que os usuários afirmem que um commit está em conformidade com as regras e o licenciamento que regem um repositório. Você pode habilitar as aprovações de commit obrigatórias em repositórios individuais para usuários que fazem commit por meio de {% data variables.product.product_location %}, tornando a aprovação de um commit uma parte tranquila do processo de commit. Depois que as aprovações de commit obrigatórias forem habilitadas para um repositório, cada commit feito nesse repositório por meio da interface da Web de {% data variables.product.product_location %} serão aprovadas automaticamente pelo autor do commit.

Os proprietários da organização também podem habilitar as aprovações de commit obrigatórias no nível da organização. Para obter mais informações, confira "[Como gerenciar a política de aprovação de confirmação para sua organização](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)".

{% data reusables.repositories.commit-signoffs %}

## Habilitar ou desabilitar as aprovações de commit obrigatórias para seu repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Selecione **Exigir que os colaboradores aprovem commits baseados na Web**.
  ![Captura de tela da opção Exigir que os colaboradores aprovem commits baseados na Web](/assets/images/help/repository/require-signoffs.png)
