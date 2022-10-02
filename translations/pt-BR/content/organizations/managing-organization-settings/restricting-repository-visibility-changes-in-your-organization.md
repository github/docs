---
title: Restringir as alterações de visibilidade de repositório na organização
intro: 'Para proteger os dados da organização, você pode configurar as permissões de alteração da visibilidade do repositório na organização.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set visibility changes policy
permissions: Organization owners can restrict repository visibility changes for an organization.
ms.openlocfilehash: e404d8dea2e188ff5b0b0a8b15c9767374269436
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095610'
---
Você pode restringir quem tem a capacidade de alterar a visibilidade dos repositórios em sua organização, como alterar um repositório de privado para público. Para obter mais informações sobre a visibilidade do repositório, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)". 

Você pode restringir a capacidade de alterar a visibilidade do repositório apenas para os proprietários da organização, ou permitir que qualquer pessoa com privilégios de administrador de um repositório também altere a visibilidade.

{% warning %}

**Aviso**: se habilitada, essa configuração permite que as pessoas com acesso de administrador escolham qualquer visibilidade para um repositório existente, mesmo que você não permita que esse tipo de repositório seja criado. Para obter mais informações sobre como restringir a visibilidade dos repositórios durante a criação, confira "[Como restringir a criação de repositórios na sua organização](/articles/restricting-repository-creation-in-your-organization)".

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Em "Alteração da visibilidade do repositório", desmarque a opção **Permitir que os membros alterem a visibilidade dos repositórios desta organização**.
![Caixa de seleção usada para permitir que os membros alterem a visibilidade dos repositórios](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Clique em **Save** (Salvar).
