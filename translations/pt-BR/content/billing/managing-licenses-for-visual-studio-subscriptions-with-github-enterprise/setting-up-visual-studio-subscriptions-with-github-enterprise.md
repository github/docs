---
title: Configurando as assinaturas do Visual Studio com o GitHub Enterprise
intro: 'A assinatura da sua equipe para {% data variables.product.prodname_vs %} também pode fornecer acesso a {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Configurar
---

## Sobre a configuração de {% data variables.product.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_vss_ghe %}de](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise)."

Este guia mostra como a sua equipe pode obter assinantes licenciados de {% data variables.product.prodname_vs %} e dar os primeiros passos com {% data variables.product.prodname_enterprise %}.

Se você preferir vídeo, você pode assistir [Configurando suas licenças de {% data variables.product.prodname_enterprise %} com {% data variables.product.prodname_vs %} assinaturas](https://www.youtube.com/watch?v=P_zBgp_BE_I) no canal do YouTube do Microsoft Visual Studio.

## Funções para {% data variables.product.prodname_vss_ghe %}

Antes de configurar {% data variables.product.prodname_vss_ghe %}, é importante entender as funções para esta oferta combinada.

| Função                           | Serviço                                                | Descrição                                                                                                                                        | Mais informações                                                                                                                                                      |
|:-------------------------------- |:------------------------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------------ |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Administrador de assinaturas** | Assinatura de {% data variables.product.prodname_vs %} | Pessoa que atribui licenças para a assinatura de {% data variables.product.prodname_vs %}                                                        | [Visão geral das responsabilidades do administrador](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) na documentação da Microsoft |
| **Assinante**                    | Assinatura de {% data variables.product.prodname_vs %} | Pessoa que usa uma licença para assinatura de {% data variables.product.prodname_vs %}                                                           | [Assinaturas do Visual Studio](https://docs.microsoft.com/en-us/visualstudio/subscriptions/) na documentação da Microsoft                                             |
| **Proprietário corporativo**     | {% data variables.product.prodname_dotcom %}           | Pessoa que tem uma conta pessoal que é administrador de uma empresa em {% data variables.product.product_location %}                             | "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)"                                          |
| **Proprietário da organização**  | {% data variables.product.prodname_dotcom %}           | Pessoa que tem uma conta pessoal que é proprietário de uma organização na empresa da sua equipe em {% data variables.product.product_location %} | "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)"                   |
| **Integrante da empresa**        | {% data variables.product.prodname_dotcom %}           | Pessoa que tem uma conta pessoal que é integrante de uma empresa em {% data variables.product.product_location %}                                | "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)"                                        |

## Pré-requisitos

- A assinatura da sua equipe de {% data variables.product.prodname_vs %} deve incluir {% data variables.product.prodname_enterprise %}. Para obter mais informações, consulte [{% data variables.product.prodname_vs %} Assinaturas e benefícios](https://visualstudio.microsoft.com/subscriptions/) no site de {% data variables.product.prodname_vs %} e [Visão geral das responsabilidades do administrador](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) na documentação da Microsoft.

 - A sua equipe deve ter uma empresa em {% data variables.product.product_location %}. Se você não tiver certeza se sua equipe tem uma empresa, entre em contato com o administrador de {% data variables.product.prodname_dotcom %}. Se você não iver certeza de quem na sua equipe é responsável por {% data variables.product.prodname_dotcom %}, entre em contato com {% data variables.contact.contact_enterprise_sales %}. Para obter mais informações, consulte "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)".

## Configurar o {% data variables.product.prodname_vss_ghe %}

Para configurar {% data variables.product.prodname_vss_ghe %}, os integrantes da sua equipe deverão concluir as tarefas a seguir.

Uma pessoa pode ser capaz de concluir as tarefas porque a pessoa tem todas as funções, mas você pode precisar coordenar as tarefas com várias pessoas. Para obter mais informações, consulte "[Funções para {% data variables.product.prodname_vss_ghe %}](#roles-for-visual-studio-subscriptions-with-github-enterprise)".

1. O proprietário de uma empresa deve criar pelo menos uma organização na sua empresa em {% data variables.product.product_location %}. Para obter mais informações, consulte "[Adicionando organizações à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)".

1. O administrador da assinatura deve atribuir uma licença para {% data variables.product.prodname_vs %} para um assinante em {% data variables.product.prodname_vss_admin_portal_with_url %}. Para obter mais informações, consulte [Visão geral do Portal do Administrador de Assinaturas de {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal) e [Atribuir licenças de {% data variables.product.prodname_vs %} no Portal de Administração de Assinaturas de {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license) na documentação da Microsoft.

1. Opcionalmente, se o administrador da assinatura atribuiu licenças aos assinantes em {% data variables.product.prodname_vs %} antes de adicionar {% data variables.product.prodname_enterprise %} à assinatura, o administrador da assinatura poderá mover os assinantes para as ofertas combinadas no portal de administração de {% data variables.product.prodname_vs %}. Para obter mais informações, consulte [Gerenciar assinaturas de {% data variables.product.prodname_vs %} com {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise) na documentação da Microsoft.

1. Se o administrador da assinatura não tiver desabilitado as notificações por e-mail, o assinante receberá dois e-mails de confirmação. Para obter mais informações, consulte [Assinaturas de {% data variables.product.prodname_vs %} com {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process) na documentação da Microsoft.

1. O proprietário de uma organização deve convidar o integrante para a organização no {% data variables.product.product_location %} a partir da etapa 1. O assinante pode aceitar o convite com uma conta pessoal existente em {% data variables.product.prodname_dotcom_the_website %} ou criar uma nova conta. Depois que o assinante aderir à organização, o assinante torna-se um integrante da empresa. Para obter mais informações, consulte "[Convidar usuários para participar da sua organização](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)".

   {% tip %}

   **Dicas**:

   - Embora não seja necessário, recomendamos que o proprietário da organização envie um convite para o mesmo endereço de e-mail usado para o nome primário do usuário do assinante (UPN). Quando o endereço de e-mail em {% data variables.product.product_location %} corresponder ao UPN do assinante, você poderá garantir que outra empresa não reivindique a licença do assinante.
   - Se o assinante aceitar o convite para a organização com uma conta pessoal existente em {% data variables.product.product_location %}, recomendamos que o assinante adicione o endereço de e-mail que ele usa para {% data variables.product.prodname_vs %} à sua conta pessoal em {% data variables.product.product_location %}. Para obter mais informações, consulte "[Adicionar um endereço de e-mail à sua conta de {% data variables.product.prodname_dotcom %}](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account)".
   - Se o proprietário da organização tiver de convidar um grande número de assinantes, um script poderá agilizar o processo. Para obter mais informações, consulte [a amostra de script do PowerShell](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1) no repositório `github/platform-samples`.

    {% endtip %}

Depois de {% data variables.product.prodname_vss_ghe %} ser definido para assinantes da sua equipe, os proprietários da empresa poderão revisar as informações de licenciamento em {% data variables.product.product_location %}. Para obter mais informações, consulte "[Exibir a assinatura e o uso de sua conta corporativa](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

## Leia mais

- "[Primeiros passos com {% data variables.product.prodname_ghe_cloud %}](/get-started/onboarding/getting-started-with-github-enterprise-cloud)"
