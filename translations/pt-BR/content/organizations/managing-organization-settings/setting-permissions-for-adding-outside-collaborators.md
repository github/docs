---
title: Configurar permissões para adicionar colaboradores externos
intro: 'Para proteger os dados da sua organização e o número de licenças pagas usadas em sua organização, você poderá configurar quem pode adicionar colaboradores externos aos repositórios da organização.'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
ms.openlocfilehash: ec9133f5a4be38999d1b2051d538dadff4923abf
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107883'
---
Por padrão, qualquer pessoa com acesso de administrador a um repositório pode convidar colaboradores externos para trabalhar no repositório. Você pode optar por restringir a capacidade de adicionar colaboradores externos apenas para os proprietários da organização.

{% ifversion ghec %} {% note %}

**Observação:** somente as organizações que usam o {% data variables.product.prodname_ghe_cloud %} podem restringir a capacidade de convidar colaboradores externos aos proprietários da organização. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% ifversion ghec %}Se sua organização pertence a uma conta corporativa, você{% else %}Você{% endif %} poderá não ser capaz de definir essa configuração para sua organização, se um proprietário da empresa tiver definido uma política no nível empresarial. Para obter mais informações, consulte "[Imposição de políticas de gerenciamento de repositório em sua empresa]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories)"{% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise #enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}".

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Em "Colaboradores de fora do repositório", desmarque **Permitir que administradores de repositório convidem colaboradores externos para repositórios desta organização**.
  ![Caixa de seleção para permitir que os administradores de repositório convidem colaboradores externos para repositórios da organização](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. Clique em **Save** (Salvar).
