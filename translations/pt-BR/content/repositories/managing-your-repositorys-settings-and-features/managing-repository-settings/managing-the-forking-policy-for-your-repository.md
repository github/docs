---
title: Gerenciando a política de bifurcação para seu repositório
intro: 'Você pode permitir ou impedir a criação de fork de um repositório particular{% ifversion ghae or ghes or ghec %} ou interno{% endif %} pertencente a uma organização.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage the forking policy
ms.openlocfilehash: 18355227ad40567de3824f3cc286763cd081e153
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127022'
---
Um proprietário da organização precisa permitir forks de repositórios privados{% ifversion ghae or ghes or ghec %} e internos{% endif %} no nível da organização antes de permitir ou desabilitar os forks para um repositório específico. Para obter mais informações, confira "[Como gerenciar a política de criação de forks para sua organização](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Em "Recursos", selecione **Permitir a criação de forks**.
  ![Caixa de seleção usada para permitir ou não permitir a criação de forks de um repositório privado](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## Leitura adicional

- "[Sobre os forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
