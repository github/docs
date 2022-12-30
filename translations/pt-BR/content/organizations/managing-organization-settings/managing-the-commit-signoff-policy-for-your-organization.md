---
title: Como gerenciar a política de aprovação de confirmação para sua organização
intro: 'Você pode exigir que os usuários aprovem automaticamente todos os commits que fizerem na interface da Web de {% data variables.product.product_name %} para repositórios de propriedade da sua organização.'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 3d567d9f592758a2a9998df07556c4f2a04a852c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107957'
---
## Sobre as aprovações de commit

Para afirmar que um commit está em conformidade com as regras e o licenciamento que regem um repositório, muitas organizações exigem que os desenvolvedores aprovem cada commit. Se sua organização exigir aprovações de commit, você poderá tornar a aprovação uma parte contínua do processo de commit habilitando as aprovações de commit obrigatórias para usuários que fazem commit por meio da interface da Web de {% data variables.product.product_name %}. Depois de habilitar as aprovações de commit obrigatórias para uma organização, cada commit feito em repositórios nessa organização por meio da interface da Web de {% data variables.product.product_name %} será automaticamente aprovada pelo autor do commit.

Pessoas com acesso de administrador a um repositório também podem habilitar as aprovações de commit obrigatórias no nível do repositório. Para obter mais informações, confira "[Como gerenciar a política de aprovação de commit para seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)".

{% data reusables.repositories.commit-signoffs %}

## Como gerenciar aprovações de commit obrigatórias para sua organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
1. Selecione ou cancele a seleção de **Exigir que os colaboradores aprovem commits baseados na Web**.
  ![Captura de tela da opção Exigir que os colaboradores aprovem commits baseados na Web](/assets/images/help/organizations/require-signoffs.png)
