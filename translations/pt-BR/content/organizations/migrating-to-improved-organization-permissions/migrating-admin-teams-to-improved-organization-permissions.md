---
title: Migrar uma equipe de administradores para permissões de organização aprimoradas
intro: 'Se sua organização foi criada depois de setembro de 2015, tem permissões de organização aprimoradas por padrão. Organizações criadas antes de setembro de 2015 podem precisar migrar proprietários e equipes de administradores antigos para o modelo de permissões aprimoradas. Integrantes de equipes de administradores legadas mantêm automaticamente a capacidade de criar repositórios até que as equipes sejam migradas para o modelo de permissões de organização aprimoradas.'
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Migrate admin team
ms.openlocfilehash: 32a3bd684d2ed81d1ba492b4e343af3e03390364
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145097235'
---
Por padrão, todos os integrantes da organização podem criar repositórios. Se você restringir as [permissões de criação de repositórios](/articles/restricting-repository-creation-in-your-organization) aos proprietários da organização e sua organização tiver sido criada sob a estrutura herdada de permissões da organização, os membros das equipes de administração herdadas ainda poderão criar repositórios.

Equipes de administradores legadas são equipes que foram criadas com o nível de permissão de administrador na estrutura de permissões de organização legadas. Integrantes dessas equipes conseguiam criar repositórios para a organização, e essa capacidade foi preservada na estrutura de permissões de organização aprimoradas.

Você pode remover essa capacidade migrando suas equipes de administradores legadas para as permissões de organização aprimoradas.

Para obter mais informações, confira "[Funções de repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

{% warning %}

**Aviso:** se a sua organização tiver [desabilitado as permissões de criação de repositórios](/articles/restricting-repository-creation-in-your-organization) para todos os membros, alguns membros das equipes de administração herdadas poderão perder as permissões de criação de repositórios. Se a organização habilitou a criação de repositórios pelos integrantes, migrar as equipes de administradores legadas para permissões de organização aprimoradas não afetará a capacidade de criação de repositórios pelos integrantes de equipes.

{% endwarning %}

## Migrar todas as equipes de administradores legadas da organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.teams_sidebar %}
1. Revise as equipes de administração herdadas da sua organização e clique em **Migrar todas as equipes**.
  ![Botão Migrar todas as equipes](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. Leia as informações sobre possíveis alterações de permissões para membros dessas equipes e clique em **Migrar todas as equipes.** 
  ![Botão Confirmar migração](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

## Migrar uma única equipe de administradores

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. Na caixa de descrição da equipe, clique em **Migrar equipe**.
  ![Botão Migrar equipe](/assets/images/help/teams/migrate-a-legacy-admin-team.png)
