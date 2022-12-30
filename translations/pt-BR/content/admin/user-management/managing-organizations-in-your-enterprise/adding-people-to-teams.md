---
title: Como adicionar pessoas a equipes
redirect_from:
  - /enterprise/admin/articles/adding-teams
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams
  - /enterprise/admin/user-management/adding-people-to-teams
  - /admin/user-management/adding-people-to-teams
intro: 'Após a criação de uma equipe, os administradores da organização podem adicionar usuários da {% data variables.product.product_location %} e determinar quais repositórios eles poderão acessar.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 1246641db416630d0faed75821078618a4399eb8
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884250'
---
Cada equipe tem suas [permissões de acesso definidas individualmente para repositórios pertencentes à sua organização](/articles/permission-levels-for-an-organization).

- Integrantes com função de Proprietário podem adicionar ou remover os integrantes atuais de todas as equipes da organização.
- Integrantes de equipes que concedem permissões de administrador só podem modificar a participação e as permissões de repositórios de sua própria equipe.

## Configurar uma equipe

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion ghes %}

## Mapear equipes para grupos LDAP (em instâncias com sincronização LDAP para autenticação de usuários)

{% data reusables.enterprise_management_console.badge_indicator %}

Para adicionar um novo integrante a uma equipe sincronizada com um grupo LDAP, adicione o usuário como integrante do grupo LDAP ou entre em contato com o administrador do LDAP.

{% endif %}
