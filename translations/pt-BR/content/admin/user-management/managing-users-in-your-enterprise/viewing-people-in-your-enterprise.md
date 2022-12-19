---
title: Visualizar pessoas na sua empresa
intro: 'Para auditar o acesso à utilização de licença de usuário ou de recursos pertencentes à empresa, os proprietários corporativos podem exibir todos os administradores e integrantes da empresa.'
permissions: Enterprise owners can view the people in an enterprise.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
ms.openlocfilehash: 1c9b8402a0924c799f4747cf5a6cdae051aa4a49
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120590'
---
## Sobre a lista de pessoas em sua empresa

Para auditar o acesso aos recursos da sua empresa e gerenciar o uso da licença, você pode ver uma lista de todas as pessoas que têm acesso à sua empresa. 

Você pode ver todos os membros corporativos atuais e administradores corporativos{% ifversion ghec %}, bem como convites pendentes para se tornarem membros e administradores{% endif %}. Para facilitar o consumo dessas informações, você pode pesquisar e filtrar as listas.

{% ifversion ghec %}

Se {% data variables.product.prodname_github_connect %} estiver configurado para sua empresa, quando você filtrar uma lista de pessoas em sua empresa, as limitações a seguir serão aplicadas.

- O filtro para o status de 2FA (autenticação de dois fatores) não mostra as pessoas que têm apenas uma conta em uma instância {% data variables.product.prodname_ghe_server %}.
- Se você combinar o filtro para contas em instâncias {% data variables.product.prodname_ghe_server %} com o filtro para organizações ou status 2FA, não verá nenhum resultado.

Para obter mais informações sobre {% data variables.product.prodname_github_connect %}, confira os artigos a seguir.

- "[Sobre o {% data variables.product.prodname_github_connect %}](/enterprise-server/admin/configuration/configuring-github-connect/about-github-connect)" na documentação do {% data variables.product.prodname_ghe_server %}
- "[Sobre o {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)" na documentação {% data variables.product.prodname_ghe_managed %}

{% endif %}

{% ifversion enterprise-member-csv %} Você também pode exportar as informações de associação da empresa. Para obter mais informações, confira "[Como exportar informações de associação da empresa](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise)".
{% endif %}

## Exibir administradores corporativos

Você pode ver todos os proprietários empresariais{% ifversion ghec %} e gerentes de cobrança{% endif %} atuais da empresa.{% ifversion enterprise-membership-view-improvements %} Você pode ver informações úteis sobre cada administrador{% ifversion ghec %} e filtrar a lista por função{% endif %}. {% endif %} Você pode encontrar uma pessoa específica procurando o nome de usuário ou o nome de exibição.

{% ifversion ghes > 3.5 %} Os proprietários de empresas cujas contas estão suspensas estão incluídos na lista de administradores de empresa e são identificados como suspensos. Você deve considerar rebaixar todos os proprietários suspensos que vir. Para obter mais informações, confira "[Como promover ou rebaixar um administrador do site](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#demoting-a-site-administrator-from-the-enterprise-settings)".
{% endif %}

{% ifversion not ghae %} Você também pode remover um administrador. Para obter mais informações. confira "[Convidar pessoas para gerenciar sua empresa](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account)".
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}

## Como ver membros {% ifversion enterprise-membership-view-improvements %}{% else %}e colaboradores externos{% endif %}

Você pode ver todos os membros {% ifversion enterprise-membership-view-improvements %}{% else %}ou colaboradores externos{% endif %} atuais da empresa. Você pode ver informações úteis sobre cada conta e filtrar a lista de maneiras úteis, como por função. Ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome de exibição dela.

Você pode exibir mais informações sobre o acesso da pessoa à sua empresa, como as organizações às quais a pessoa pertence, clicando no nome da pessoa.

{% ifversion remove-enterprise-members %} Você também pode remover membros empresariais de todas as organizações pertencentes à empresa. Para obter mais informações, confira "[Remover um membro da sua empresa](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)".
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}{% else %}
1. Opcionalmente, para ver uma lista de colaboradores externos em vez da lista de membros, clique em **Colaboradores externos**.

   ![Guia Colaboradores externos na página dos membros da empresa](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% ifversion enterprise-membership-view-improvements %}
## Exibir colaboradores externos

Você pode ver todos os colaboradores externos atuais para sua empresa. Você pode ver informações úteis sobre cada colaborador e filtrar a lista de maneiras úteis, como por organização. Você pode encontrar um colaborador específico pesquisando seu nome de usuário ou nome de exibição.

Você pode exibir mais informações sobre o acesso da pessoa à sua empresa, como uma lista de todos os repositórios aos quais o colaborador tem acesso, clicando no nome da pessoa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Em "Pessoas", clique em **Colaboradores externos**.

  ![Guia Colaboradores externos na barra lateral de configurações da empresa]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}
  
{% endif %}

{% ifversion ghec %}
## Exibir convites pendentes

Você pode ver todos os convites pendentes para se tornarem membros, administradores ou colaboradores externos em sua empresa. Você pode filtrar a lista de maneiras úteis, como por organização. Ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome de exibição dela.

Na lista de membros pendentes, para qualquer conta individual, você pode cancelar todos os convites para ingressar em organizações pertencentes à sua empresa. Isso não cancela nenhum convite para que essa mesma pessoa se torne um administrador corporativo ou colaborador externo. 

{% note %}

**Observação:** se um convite foi provisionado via SCIM, você deve cancelar o convite por meio do IdP (provedor de identidade) em vez de em {% data variables.product.prodname_dotcom %}.

{% endnote %}

Se você usar {% data variables.visual_studio.prodname_vss_ghe %}, a lista de convites pendentes inclui todos os assinantes do {% data variables.product.prodname_vs %} que não ingressaram em nenhuma de suas organizações no {% data variables.product.prodname_dotcom %}, mesmo que o assinante não tenha um convite pendente para ingressar em uma organização. Para obter mais informações sobre como obter acesso de assinantes do {% data variables.product.prodname_vs %} ao {% data variables.product.prodname_enterprise %}, veja "[Configurar {% data variables.visual_studio.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Em "Pessoas", clique em **Convites pendentes**.

   ![Captura de tela da guia "Convites pendentes" na barra lateral](/assets/images/help/enterprises/pending-invitations-tab.png)
1. Opcionalmente, para cancelar todos os convites de uma conta para ingressar em organizações pertencentes à sua empresa, à direita da conta, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e clique em **Cancelar convite**.

   ![Captura de tela do botão "Cancelar convite"](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. Opcionalmente, para exibir convites pendentes para administradores corporativos ou colaboradores externos, em "Membros pendentes", clique em **Administradores** ou **Colaboradores externos**.

   ![Captura de tela das guias "Membros", "Administradores" e "Colaboradores externos"](/assets/images/help/enterprises/pending-invitations-type-tabs.png)

## Como visualizar membros suspensos em um {% data variables.enterprise.prodname_emu_enterprise %}

Se a empresa usa {% data variables.product.prodname_emus %}, você pode visualizar usuários suspensos. Os usuários suspensos são integrantes que foram desprovisionados depois que o aplicativo de {% data variables.product.prodname_emu_idp_application %} cancelou ou excluiu sua atribuição do provedor de identidade. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Para ver uma lista dos membros suspensos, acima da lista de membros ativos, clique em **Suspensos**.
  ![Captura de tela que mostra a opção "Suspensos"](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## Exibir usuários inativos

Você pode ver uma lista de todos os usuários desativados {% ifversion ghes or ghae %} que não foram suspensos e {% endif %}que não são administradores do site. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} Para obter mais informações, confira "[Como gerenciar usuários inativos](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)".

{% ifversion filter-by-enterprise-member-type %}
## Filtragem por tipo de membro{% ifversion ghec %} em um {% data variables.enterprise.prodname_emu_enterprise %}{% endif %}

{% ifversion ghec %} Se a empresa usa {% data variables.product.prodname_emus %}, você{% elsif ghes or ghae %}Você{% endif %} pode filtrar a lista de membros de uma organização por tipo para determinar se as associações são gerenciadas por meio de um IdP ou diretamente. As associações gerenciadas por meio de um IdP foram adicionadas por meio de um grupo de IdP e o grupo de IdP foi conectado a uma equipe dentro da organização. As associações gerenciadas diretamente foram adicionadas à organização manualmente. A maneira como uma associação é gerenciada em uma organização determina como ela precisa ser removida. Você pode usar esse filtro para determinar como os membros foram adicionados a uma organização, para que você saiba como removê-los.{% ifversion ghec %} Para obter mais informações, confira "[Sobre {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users#about-organization-membership-management)."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Em "Organizações", na barra de pesquisa, comece a digitar o nome da organização até que a organização apareça nos resultados da pesquisa. Depois, clique no nome da organização.
   ![Captura de tela do campo de pesquisa para organizações](/assets/images/help/enterprises/organization-search.png)
1. No nome da organização, clique em {% octicon "person" aria-label="The Person icon" %} **Pessoas**.
   ![Captura de tela da guia Pessoas](/assets/images/help/enterprises/emu-organization-people-tab.png)
1. Acima da lista de membros, clique em **Tipo** e selecione o tipo de membros que deseja exibir.
   ![Captura de tela do botão "Tipo"](/assets/images/help/enterprises/filter-by-member-type.png)

{% endif %}

{% ifversion ghec or ghes %}
## Como ver membros sem um endereço de email de um domínio verificado

Você pode ver uma lista de membros na empresa que não têm um endereço de email de um domínio verificado associado à conta de usuário no {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. Em "Preferências de notificação", clique no link {% octicon "eye" aria-label="The github eye icon" %} **Ver membros empresariais sem um email de domínio aprovado ou verificado**.
{% endif %}

## Leitura adicional

- "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"
