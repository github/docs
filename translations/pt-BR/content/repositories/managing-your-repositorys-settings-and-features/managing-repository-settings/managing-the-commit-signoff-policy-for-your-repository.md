---
title: Como gerenciar a política de aprovação de confirmação para seu repositório
intro: 'Você pode exigir que os usuários aprovem automaticamente os commits que fazem no seu repositório usando a interface da Web de {% data variables.product.product_name %}.'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 078e80ed9f2b916c2c82b522eaad709fae5dc46c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107690'
---
## Sobre as aprovações de commit

As aprovações de commit permitem que os usuários afirmem que um commit está em conformidade com as regras e o licenciamento que regem um repositório. Você pode habilitar as aprovações de commit obrigatórias em repositórios individuais para usuários que fazem commit por meio da interface Web para {% data variables.location.product_location %}, facilitando a etapa de aprovação no processo de commit. Depois que as aprovações de commit obrigatórias forem habilitadas para um repositório, cada commit feito nesse repositório por meio da interface Web para {% data variables.location.product_location %} serão aprovadas automaticamente pelo autor do commit.

Os proprietários da organização também podem habilitar as aprovações de commit obrigatórias no nível da organização. Para obter mais informações, confira "[Como gerenciar a política de aprovação de confirmação para sua organização](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)".

{% data reusables.repositories.commit-signoffs %}

## Habilitar ou desabilitar as aprovações de commit obrigatórias para seu repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Selecione **Exigir que os colaboradores aprovem commits baseados na Web**.
  ![Captura de tela da opção Exigir que os colaboradores aprovem commits baseados na Web](/assets/images/help/repository/require-signoffs.png)
