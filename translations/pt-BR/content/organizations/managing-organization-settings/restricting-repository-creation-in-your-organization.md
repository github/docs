---
title: Restringir a criação de repositórios na organização
intro: 'Para proteger os dados da organização, você pode configurar as permissões de criação de repositórios na organização.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
ms.openlocfilehash: da5d32962c52b752dff9dd9012f8cc8e5494d8c6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145065458'
---
Você pode escolher se os integrantes podem criar repositórios na sua organização. {% ifversion ghec or ghes or ghae %}Se você permitir que os integrantes criem repositórios, você poderá escolher quais tipos de repositórios os integrantes poderão criar.{% elsif fpt %}Se você permitir que os integrantes criem repositórios, você poderá escolher se os integrantes poderão criar repositórios públicos e privados ou apenas repositórios públicos.{% endif %}Os proprietários da organização sempre podem criar qualquer tipo de repositório.

{% ifversion fpt %} As organizações que usam o {% data variables.product.prodname_ghe_cloud %} também podem restringir os membros a criar apenas repositórios privados. Para obter mais informações, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %} Os proprietários da empresa podem restringir as opções disponíveis para a política de criação de repositórios da sua organização. Para obter mais informações, confira "[Como impor políticas de gerenciamento de repositório na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)".
{% endif %}

{% warning %}

**Aviso**: essa configuração só restringe as opções de visibilidade disponíveis quando os repositórios são criados, não restringindo a capacidade de alterar a visibilidade do repositório posteriormente. Para obter mais informações sobre como restringir as alterações à visibilidade dos repositórios existentes, confira "[Como restringir as alterações de visibilidade do repositório na sua organização](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)".

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Em "Criação do repositório", selecione uma ou mais opções.

   {%- ifversion ghes or ghec or ghae %} ![Opções para criação de repositórios](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png) {%- elsif fpt %} ![Opções para criação de repositórios](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png) {%- endif %}
   
   {% ifversion fpt or ghec %} {% note %}

   **Observação:** para restringir os membros apenas à criação de repositórios privados, sua organização precisa usar o {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %} {%- endif %}

6. Clique em **Save** (Salvar).
