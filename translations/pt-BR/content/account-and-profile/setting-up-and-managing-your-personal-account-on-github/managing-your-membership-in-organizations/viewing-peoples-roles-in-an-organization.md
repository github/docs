---
title: Exibir as funções das pessoas em uma organização
intro: 'Você pode exibir uma lista das pessoas na sua organização e filtrar pela função delas. Para obter mais informações sobre as funções da organização, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".'
permissions: Organization members can see people's roles in the organization.
redirect_from:
  - /articles/viewing-people-s-roles-in-an-organization
  - /articles/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: View people in an organization
ms.openlocfilehash: e0632ffeb394615b7b64ad55673b69fc738bca27
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '146179628'
---
## Ver funções da organização

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Você verá uma lista das pessoas na organização. Para filtrar a lista por função, clique em **Função** e selecione a função que está procurando.
  ![click-role](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

Se sua organização usar o {% data variables.product.prodname_ghe_cloud %}, você também poderá visualizar os proprietários da empresa que gerenciam as configurações de cobrança e políticas para todas as organizações da sua empresa. Para obter mais informações, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization).

{% endif %}

{% ifversion enterprise-owners-visible-for-org-members %}
## Veja os proprietários das empresas e as suas funções em uma organização

Se a sua organização é gerenciada por uma conta corporativa, você poderá ver os proprietários da empresa que gerenciam as configurações de cobrança e políticas para todas as organizações da sua empresa. Para obter mais informações sobre contas corporativas, confira "[Tipos de contas do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Também é possível ver se o proprietário da empresa tem uma função específica na organização. Os proprietários da empresa também podem ser membros da organização, ter qualquer outra função na organização ou não estar afiliados à organização.

{% note %}

**Observação:** se você for um proprietário da organização, também poderá convidar um proprietário da empresa para ter uma função na organização. Se um proprietário corporativo aceitar o convite, uma estação ou licença na organização será usada nas licenças disponíveis para a sua empresa. Para obter mais informações sobre como funciona o licenciamento, confira "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)".

{% endnote %}

| **Função corporativa** | **Função da organização** | **Acesso à organização ou impacto** |
|----|----|----|----|
| Proprietário corporativo | Não afiliado ou nenhuma função oficial na organização | Não é possível acessar o conteúdo ou repositórios da organização, mas gerencia as configurações e políticas corporativas que afetam a sua organização. |
| Proprietário corporativo | Proprietário da organização | Capaz de configurar as configurações da organização e gerenciar o acesso aos recursos da organização por meio de equipes, etc. | 
| Proprietário corporativo | Integrante da organização | Capaz de acessar recursos e conteúdos da organização, como repositórios, sem acesso às configurações da organização. |

Para revisar todas as funções em uma organização, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)". {% ifversion custom-repository-roles %} O membro de uma organização também pode ter uma função personalizada para um repositório específico. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".{% endif %}

Para obter mais informações sobre a função de proprietário da empresa, confira "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)". 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Na barra lateral esquerda, em "Permissões da empresa", clique em **Proprietários da empresa**.
  ![Captura de tela da opção "Proprietários da empresa" no menu da barra lateral](/assets/images/help/organizations/enterprise-owners-sidebar.png)
5. Veja a lista de proprietários corporativos para a sua empresa. Se o proprietário da empresa também for membro da sua organização, você poderá ver a sua função na organização.

  ![Captura de tela da lista de proprietários corporativos e sua função na organização](/assets/images/help/organizations/enterprise-owners-list-on-org-page.png)

{% endif %}
