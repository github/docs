---
title: Gerenciar a exibição dos nomes de integrantes na organização
intro: Você pode permitir que integrantes da organização vejam o nome de perfil do autor de um comentário nos repositórios privados da organização.
product: '{% data reusables.gated-features.display-names %}'
redirect_from:
  - /articles/managing-the-display-of-member-names-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-display-of-member-names-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage display of member names
ms.openlocfilehash: a990098874393e17f992ffac7b04bcef1b1bcfc4
ms.sourcegitcommit: 9e0d21122ddfcf3f0dbba9b365ba902a2f779493
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163140'
---
Proprietários de organização podem gerenciar a exibição do nome de integrantes na organização.

![Nome de perfil do autor do comentário exibido no comentário](/assets/images/help/issues/commenter-full-name.png)

As alterações na exibição de nomes de usuário em uma organização afetarão a exibição dos nomes de usuário de outras pessoas, não os seus. Cada integrante da organização escolhe o próprio nome de perfil nas configurações. Para obter mais informações, confira "[Como personalizar seu perfil](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#changing-your-profile-name)".

{% ifversion profile-name-enterprise-setting %} Talvez você não possa definir essa configuração para a sua organização se um proprietário da empresa tiver definido uma política no nível empresarial. Para obter mais informações, confira "[Como impor políticas de gerenciamento de repositório na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)".{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Em "Permissões de repositório de administrador", marque ou desmarque **Permitir que os membros vejam o nome do perfil do autor do comentário em repositórios privados**.
![Caixa de seleção usada para permitir que os membros vejam o nome completo do autor do comentário em repositórios privados](/assets/images/help/organizations/allow-members-to-view-full-names.png)
6. Clique em **Save** (Salvar).
