---
title: Definindo permissões base para uma organização
intro: Você pode definir permissões básicas para repositórios que uma organização possui.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
- /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Set base permissions
ms.openlocfilehash: 734ced023e4a1043634650ff3e4305727397095c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179924"
---
## Sobre as permissões básicas para uma organização

É possível definir as permissões básicas que se aplicam a todos os integrantes da organização ao acessar qualquer um dos repositórios da organização. As permissões básicas não se aplicam a colaboradores externos.

{% ifversion fpt or ghec %}Por padrão, os membros de uma organização terão permissões de **leitura** nos repositórios da organização.{% endif %}

Se alguém com acesso de administrador ao repositório de uma organização conceder a um integrante um nível maior de acesso para o repositório, o nível maior de acesso irá substituir a permissão de base.

{% ifversion custom-repository-roles %} Se você criou uma função de repositório personalizada com uma função herdada com acesso inferior às permissões base da organização, todos os membros atribuídos a essa função terão como padrão as permissões base da organização em vez da função herdada. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas de uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{% endif %}

## Definir permissões básicas

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Em "Permissões básicas", use o menu suspenso para selecionar novas permissões básicas.
  ![Seleção do novo nível de permissão no menu suspenso Permissões base](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Revise as alterações. Para confirmar, clique em **Alterar a permissão padrão para PERMISSION**.
  ![Como revisar e confirmar a alteração das permissões base](/assets/images/help/organizations/base-permissions-confirm.png)

## Leitura adicional

- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Como adicionar colaboradores externos a repositórios na sua organização](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
