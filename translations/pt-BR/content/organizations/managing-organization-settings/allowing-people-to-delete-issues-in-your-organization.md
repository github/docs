---
title: Permitir que as pessoas excluam problemas em sua organização
intro: Os proprietários da organização podem permitir que determinadas pessoas excluam problemas em repositórios que pertencem à sua organização.
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Allow issue deletion
ms.openlocfilehash: 6396b54d7a6e7113344935e4229843f580c246b6
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875495'
---
Por padrão, os problemas não podem ser excluídos dos repositórios de uma organização. Um proprietário da organização deve habilitar esse recurso primeiro para todos os repositórios da organização.

Uma vez habilitado, os proprietários da organização e as pessoas com acesso de administrador em um repositório pertencente à organização podem excluir os problemas. As pessoas com acesso de administrador em um repositório incluem integrantes da organização e colaboradores externos aos quais foi dado acesso de administrador. Para obter mais informações, confira "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)" e "[Como excluir um problema](/articles/deleting-an-issue)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Em "Exclusão de problema", selecione **Permitir que os membros excluam problemas desta organização**.
![Caixa de seleção usada para permitir que as pessoas excluam problemas](/assets/images/help/settings/issue-deletion.png)
6. Clique em **Save** (Salvar).
