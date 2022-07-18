---
title: Visualizar pessoas na sua empresa
intro: 'Para auditar o acesso à utilização de licença de usuário ou de recursos pertencentes à empresa, os proprietários corporativos podem exibir todos os administradores e integrantes da empresa.'
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
shortTitle: Visualizar as pessoas na sua empresa
---

## Sobre a lista de pessoas da sua empresa

Para controlar o acesso aos recursos da sua empresa e gerenciar o uso da licença, você pode ver uma lista de todas as pessoas que têm acesso à sua empresa.

Você pode ver todos os integrantes atuais da empresa e administradores da empresa{% ifversion ghec %}, bem como convites pendentes para se tornarem integrantes e administradores{% endif %}. Para facilitar o consumo destas informações, você pode pesquisar e filtrar as listas.

## Visualizando os administradores corporativos

Você pode visualizar todos os atuais proprietários da empresa{% ifversion ghec %} e gerentes de cobrança{% endif %} para a sua empresa.{% ifversion enterprise-membership-view-improvements %} Você pode ver informações úteis sobre cada administrador{% ifversion ghec %} e filtrar a lista por função{% endif %}.{% endif %} Você pode encontrar uma pessoa específica pesquisando o nome de usuário ou nome de exibição.

{% ifversion not ghae %}
Você também pode remover um administrador. Para mais informações. consulte "[convidando pessoas para gerenciar sua empresa](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account)".
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}

## Visualizando integrantes {% ifversion enterprise-membership-view-improvements %}{% else %}e colaboradores externos{% endif %}

Você pode visualizar todos os integrantes atuais {% ifversion enterprise-membership-view-improvements %}{% else %}ou colaboradores externos{% endif %} para a sua empresa. Você pode visualizar as informações úteis sobre cada conta e filtrar a lista de formas úteis, como por função. Ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome de exibição dela.

Você pode ver mais informações sobre o acesso da pessoa à sua empresa como, por exemplo, as organizações às quais a pessoa pertence, clicando no nome da pessoa.

{% ifversion remove-enterprise-members %}
Você também pode remover qualquer integrante da empresa de todas as organizações pertencentes à empresa. Para obter mais informações, consulte "[Removendo um integrante da sua empresa](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)."
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}{% else %}
1. Como alternativa, clique em **Outside collaborators** (Colaboradores externos) para exibir uma lista deles em vez de uma lista de integrantes.

   ![Guia de colaboradores externos na página de integrantes da empresa](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% ifversion enterprise-membership-view-improvements %}
## Visualizando colaboradores externos

Você pode ver todos os colaboradores externos atuais da sua empresa. Você pode ver informações úteis sobre cada colaborador e filtrar a lista de formas úteis, por exemplo, por organização. Você pode encontrar um colaborador específico pesquisando o nome de usuário ou nome de exibição.

Você pode ver mais informações sobre o acesso da pessoa à sua empresa como, por exemplo, uma lista de todos os repositórios aos quais o colaborador tem acesso, clicando no nome da pessoa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Em "Pessoas", clique em **Colaboradores externos**.

  ![Aba de colaboradores na barra lateral de configurações da empresa]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}

{% endif %}

{% ifversion ghec %}
## Visualizando convites pendentes

É possível ver todos os convites pendentes para se tornarem integrantes, administradores ou colaboradores externos na sua empresa. É possível filtrar a lista de forma útil, por exemplo, por organização. Ou localizar uma determinada pessoa procurando pelo nome de usuário ou o nome de exibição dela.

Na lista de integrantes pendentes, para qualquer conta individual, você pode cancelar todos os convites para participar de organizações pertencentes à sua empresa. Isto não cancela nenhum convite para que essa mesma pessoa se torne administrador corporativo ou colaborador externo.

{% note %}

**Observação:** Se um convite foi fornecido via SCIM, você deve cancelar o convite pelo seu provedor de identidade (IdP) em vez de {% data variables.product.prodname_dotcom %}.

{% endnote %}

Se você usar {% data variables.product.prodname_vss_ghe %}, a lista de convites pendentes incluirá todos os assinantes de {% data variables.product.prodname_vs %} que não fizeram parte de nenhuma das suas organizações em {% data variables.product.prodname_dotcom %}, mesmo que o assinante não tenha um convite pendente para participar de uma organização. Para obter mais informações sobre como fazer com que os assinantes de {% data variables.product.prodname_vs %} acessem {% data variables.product.prodname_enterprise %}, consulte "[Configurando {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)"

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Em "Pessoas", clique em **Convites pendentes.**.

   ![Captura de tela da aba "Convites pendentes" na barra lateral](/assets/images/help/enterprises/pending-invitations-tab.png)
1. Opcionalmente, para cancelar todos os convites de uma conta para participar de organizações pertencentes à sua empresa, à direita da conta, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e depois clique em **Cancelar convite**.

   ![Captura de tela do botão "Cancelar convite"](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. Opcionalmente, para visualizar os convites pendentes para administradores corporativos ou colaboradores externos, em "Integrantes pendentes", clique em **Administradores** ou **Colaboradores externos**.

   ![Captura de tela das abas "Membros", "Administradores", e "Colaboradores externos"](/assets/images/help/enterprises/pending-invitations-type-tabs.png)

## Visualizando integrantes suspensos em um {% data variables.product.prodname_emu_enterprise %}

Se sua empresa usa {% data variables.product.prodname_emus %}, você também pode visualizar usuários suspensos. Os usuários suspensos são integrantes que foram desprovisionados depois que o aplicativo de {% data variables.product.prodname_emu_idp_application %} cancelou ou excluiu sua atribuição do provedor de identidade. Para obter mais informações, consulte[Sobre usuários gerenciados pela empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Para ver uma lista de integrantes suspensos, acima da lista de integrantes ativos, clique em **Suspensos**. ![Captura de tela que mostra a opção "Suspenso"](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## Exibir usuários inativos

Você pode ver uma lista de todos os usuários desativados {% ifversion ghes or ghae %} que não foram suspensos e {% endif %}que não são administradores do site. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} Para obter mais informações, consulte "[Gerenciar usuários inativos](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)".

{% ifversion ghec or ghes %}
## Visualizando os integrantes sem um endereço de e-mail de um domínio verificado

Você pode visualizar uma lista de integrantes da sua empresa que não têm um endereço de e-mail a partir de um domínio verificado associado à sua conta de usuário em {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. Em "Preferências de notificação", clique no link {% octicon "eye" aria-label="The github eye icon" %} **Exibir integrantes corporativos sem um e-mail de domínio aprovado ou verificado**.
{% endif %}

## Leia mais

- "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"
