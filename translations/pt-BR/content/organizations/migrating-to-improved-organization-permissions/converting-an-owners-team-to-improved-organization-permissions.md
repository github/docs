---
title: Migrar uma equipe de proprietários para permissões de organização aprimoradas
intro: 'Se sua organização foi criada depois de setembro de 2015, tem permissões de organização aprimoradas por padrão. Organizações criadas antes de setembro de 2015 podem precisar migrar proprietários e equipes de administradores antigos para o modelo de permissões aprimoradas. O "proprietário" é agora uma função administrativa fornecida a integrantes individuais da sua organização. Os integrantes da equipe de proprietários legada recebem automaticamente privilégios de proprietário.'
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions
  - /articles/converting-an-owners-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-owners-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert Owners team
ms.openlocfilehash: ff4845a8d36ecc757a989ef669b645543addff2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880377'
---
Você tem algumas opções para converter sua equipe de proprietários legada:

- Dê à organização um novo nome que denote que os integrantes têm um status especial na organização.
- Exclua a equipe após garantir que todos os integrantes foram adicionados às equipes que concedem acesso necessário aos repositórios da organização.

## Dar à equipe de proprietários um novo nome

{% tip %}

   **Observação:** como "administrador" é um termo para membros da organização com [acesso específico em determinados repositórios](/articles/repository-permission-levels-for-an-organization) na organização, recomendamos evitar esse termo em qualquer nome de equipe escolhido.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. No campo de nome da equipe, escolha um novo nome para a equipe de proprietários. Por exemplo:
    - Se apenas alguns integrantes da organização forem integrantes da equipe de proprietários, você poderá dar à equipe o nome de "Principal".
    - Se todos os membros da sua organização forem membros da equipe Proprietários para que eles possam [@mention equipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), você poderá chamar a equipe de "Funcionários".
  ![O campo de nome da equipe, com a equipe Proprietários renomeada como Principal](/assets/images/help/teams/owners-team-new-name.png)
6. Na descrição da equipe, clique em **Salvar e continuar**.
![O botão Salvar e continuar](/assets/images/help/teams/owners-team-save-and-continue.png)
7. Opcionalmente, [torne a equipe *pública*](/articles/changing-team-visibility).

## Excluir a equipe de proprietários legada

{% warning %}

**Aviso:** se houver membros da equipe Proprietários que não sejam membros de outras equipes, a exclusão da equipe removerá esses membros da organização. Antes de excluir a equipe, certifique-se de que os integrantes já sejam integrantes diretos da organização ou que tenham acesso de colaborador aos repositórios necessários.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. Na parte inferior da página, leia o aviso e clique em **Excluir a equipe Proprietários**.
  ![Link para excluir a equipe Proprietários](/assets/images/help/teams/owners-team-delete.png)
