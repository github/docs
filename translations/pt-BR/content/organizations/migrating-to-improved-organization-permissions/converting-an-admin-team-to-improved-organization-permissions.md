---
title: Migrar uma equipe de administradores para permissões de organização aprimoradas
intro: 'Se sua organização foi criada depois de setembro de 2015, tem permissões de organização aprimoradas por padrão. Organizações criadas antes de setembro de 2015 podem precisar migrar proprietários e equipes de administradores antigos para o modelo de permissões aprimoradas. Integrantes de equipes de administradores legadas mantêm automaticamente a capacidade de criar repositórios até que as equipes sejam migradas para o modelo de permissões de organização aprimoradas.'
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions
  - /articles/converting-an-admin-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-admin-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert admin team
ms.openlocfilehash: 183ccd5d1252265ed6ac94924703ceb75ed8adad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145097238'
---
Você pode impedir os integrantes das equipes de administradores legadas de criar repositórios criando uma equipe para esses integrantes, garantindo que a equipe tenha acesso necessário aos repositórios da organização e, em seguida, excluindo a equipe de administradores legada.

Para obter mais informações, confira "[Funções de repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% warning %}

**Avisos:**
- Se houver integrantes da equipe de administradores legada que não sejam integrantes de outras equipes, excluir a equipe removerá esses integrantes da organização. Antes de excluir a equipe, certifique-se de que os integrantes já sejam integrantes diretos da organização ou que tenham acesso de colaborador aos repositórios necessários.
- Para evitar a perda de bifurcações privadas feitas pelos integrantes da equipe de administradores legada, você deve seguir as etapas de 1 a 3 abaixo antes de excluir a equipe de administradores legada.
- Como "administrador" é um termo para membros da organização com [acesso específico em determinados repositórios](/articles/repository-permission-levels-for-an-organization) na organização, recomendamos evitar esse termo em qualquer nome de equipe escolhido.

{% endwarning %}

1. [Crie uma equipe](/articles/creating-a-team).
2. [Adicione cada um dos membros](/articles/adding-organization-members-to-a-team) da sua equipe de administração herdada à nova equipe.
3. [Dê à nova equipe acesso equivalente](/articles/managing-team-access-to-an-organization-repository) a cada um dos repositórios que a equipe herdada podia acessar.
4. [Exclua a equipe de administração herdada](/articles/deleting-a-team).
