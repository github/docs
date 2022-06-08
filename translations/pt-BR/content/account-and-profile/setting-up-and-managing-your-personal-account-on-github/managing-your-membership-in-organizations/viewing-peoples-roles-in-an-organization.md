---
title: Exibir as funções das pessoas em uma organização
intro: 'Você pode exibir uma lista das pessoas na sua organização e filtrar pela função delas. Para obter mais informações sobre as funções da organização, consulte "[Funções em uma organização](/organizations/managing-peopleles-access-to-your-organization-with-roles/roles-in-an-organization)".'
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
shortTitle: Visualizar pessoas em uma organização
---

## Ver funções da organização

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Você verá uma lista das pessoas na organização. Para filtrar a lista por função, clique em **Role** (Função) e selecione aquela que está procurando. ![click-role](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

Se sua organização usar o {% data variables.product.prodname_ghe_cloud %}, você também poderá visualizar os proprietários da empresa que gerenciam as configurações de cobrança e políticas para todas as organizações da sua empresa. Para obter mais informações, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization).

{% endif %}

{% ifversion enterprise-owners-visible-for-org-members %}
## Veja os proprietários das empresas e as suas funções em uma organização

Se a sua organização é gerenciada por uma conta corporativa, você poderá ver os proprietários da empresa que gerenciam as configurações de cobrança e políticas para todas as organizações da sua empresa. Para obter mais informações sobre contas corporativas, consulte "[Tipos de contas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Também é possível ver se o proprietário da empresa tem uma função específica na organização. Os proprietários de empresas também podem ser integrantes da organização, ter qualquer outra função na organização ou ser não afiliados à organização.

{% note %}

**Observação:** Se você é proprietário de uma organização, você também pode convidar um proprietário corporativo para ter uma função na organização. Se um proprietário corporativo aceitar o convite, uma estação ou licença na organização será usada nas licenças disponíveis para a sua empresa. Para obter mais informações sobre como o licenciamento funciona, consulte "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)".

{% endnote %}

| **Função corporativa**   | **Função da organização**                             | **Acesso à organização ou impacto**                                                                                                                    |
| ------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Proprietário corporativo | Não afiliado ou nenhuma função oficial da organização | Não é possível acessar o conteúdo ou repositórios da organização, mas gerencia as configurações e políticas corporativas que afetam a sua organização. |
| Proprietário corporativo | Proprietário da organização                           | Capaz de configurar as configurações da organização e gerenciar o acesso aos recursos da organização por meio de equipes, etc.                         |
| Proprietário corporativo | Integrante da organização                             | Capaz de acessar recursos e conteúdos da organização, como repositórios, sem acesso às configurações da organização.                                   |

Para revisar todas as funções de uma organização, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)". {% ifversion custom-repository-roles %} Um membro da organização também pode ter uma função personalizada para um repositório específico. Para obter mais informações, consulte "[Gerenciando funções de repositórios personalizados para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".{% endif %}

Para obter mais informações sobre a função de proprietário da empresa, consulte "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)".

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Na barra lateral esquerda, em "Permissões crporativas", clique em **Proprietários corporativos**. ![Captura de tela da opção "proprietários corporativos" no menu da barra lateral](/assets/images/help/organizations/enterprise-owners-sidebar.png)
5. Veja a lista de proprietários corporativos para a sua empresa. Se o proprietário da empresa também for membro da sua organização, você poderá ver a sua função na organização.

  ![Captura de tela da lista de proprietários corporativos e sua função na organização](/assets/images/help/organizations/enterprise-owners-list-on-org-page.png)

{% endif %}
