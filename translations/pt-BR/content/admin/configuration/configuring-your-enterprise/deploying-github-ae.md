---
title: Implantação do GitHub AE
intro: 'Você pode implantar {% data variables.product.product_name %} para uma região disponível do Azure.'
versions:
  ghae: '*'
topics:
  - Accounts
  - Enterprise
type: how_to
shortTitle: Implantar o GitHub AE
redirect_from:
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-ae
---

## Sobre a implantação de {% data variables.product.product_name %}

{% data reusables.github-ae.github-ae-enables-you %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_ghe_managed %}de](/admin/overview/about-github-ae)."

Após comprar ou começar um teste de {% data variables.product.product_name %}, você pode fazer a implantação de {% data variables.product.product_name %} para uma região do Azure disponível. Este guia refere-se ao recurso do Azure que contém a implantação de {% data variables.product.product_name %} como a conta de {% data variables.product.product_name %}. Você usará o portal do Azure em [https://portal.azure.com](https://portal.azure.com) para implantar a conta de {% data variables.product.product_name %}.

## Pré-requisitos

- Antes de poder implantar {% data variables.product.product_name %}, você deve solicitar o acesso da sua equipe de conta de {% data variables.product.company_short %}. {% data variables.product.company_short %} irá habilitar a implantação de {% data variables.product.product_name %} para sua assinatura do Azure. Se você ainda não comprou {% data variables.product.product_name %}, você pode entrar em contato com {% data variables.contact.contact_enterprise_sales %} para verificar sua elegibilidade para um teste.

- Você deve ter permissão para executar a operação `/register/action` para o provedor de recursos no Azure. A permissão está incluída nas funções de `Colaborador` e `Proprietário`. Para obter mais informações, consulte [Provedores de recursos e tipos do Azure](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider) na documentação da Microsoft.

## Implantando {% data variables.product.product_name %} com o {% data variables.actions.azure_portal %}

O {% data variables.actions.azure_portal %} permite que você faça a implementação da conta do {% data variables.product.product_name %} no seu grupo de recursos do Azure.

1. Clique em um dos seguintes dois links para começar a implantação de {% data variables.product.product_name %}. O link que você deve clicar depende da nuvem Azure onde você planeja implantar {% data variables.product.product_name %}. Para obter mais informações sobre o Governo do Azure, consulte [O que é o Azure? Government](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome) na documentação Microsoft.

   - [Implantar {% data variables.product.product_name %} no Azure Commercial](https://aka.ms/create-github-ae-instance)
   - [Implantar {% data variables.product.product_name %} no Azure Government](https://aka.ms/create-github-ae-instance-gov)
1. Para começar o processo de adicionar uma nova conta de {% data variables.product.product_name %}, clique em **Criar conta do GitHub AE**.
1. Insira as informações nos campos "Detalhes do projeto" e "Detalhes da instância".![Resultado da pesquisa de {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-form.png)
    - **Nome da conta:** O nome do host da sua empresa
    - **Nome de usuário administrador:** Um nome de usuário para o proprietário corporativo inicial que será criado em {% data variables.product.product_name %}
    - E-mail do administrador **:** O endereço de e-mail que receberá as informações de login
1. Para revisar um resumo das alterações propostas, clique em **Revisão + criar**.
1. Após a conclusão do processo de validação, clique em **Criar**.

O endereço de e-mail que você digitou acima receberá instruções sobre como acessar a sua empresa. Após ter acesso, você poderá começar seguindo os passos das configuração iniciais. Para obter mais informações, consulte "[Inicializar {% data variables.product.product_name %}](/admin/configuration/initializing-github-ae)".

{% note %}

**Observação:** As atualizações de software para a sua implantação de {% data variables.product.product_name %} são executadas por {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte[Sobre atualizações para novas versões de](/admin/overview/about-upgrades-to-new-releases)."

{% endnote %}

## Acessando a sua empresa

Você pode usar o {% data variables.actions.azure_portal %} para navegar para a sua implantação de {% data variables.product.product_name %}. A lista resultante inclui todas as suas implantações de {% data variables.product.product_name %} na sua região do Azure.

1. No {% data variables.actions.azure_portal %}, no painel esquerdo, clique em **Todos os recursos**.
1. Nos filtros disponíveis, clique em **Todos os tipos** e, em seguida, desmarque **Selecionar todos** e selecione **GitHub AE**: ![Resultado da pesquisa de {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-type-filter.png)

## Próximas etapas

- Uma vez fornecida a sua implantação, o próximo passo é inicializar {% data variables.product.product_name %}. Para obter mais informações, consulte "[Inicializar {% data variables.product.product_name %}](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae)".
- Se você está estiver testando {% data variables.product.product_name %}, você poderá fazer a atualização para uma licença completa a qualquer momento durante o período de avaliação, entrando em contato com {% data variables.contact.contact_enterprise_sales %}. Se você não atualizou até o último dia de seu teste, a implantação será excluída automaticamente. Se precisar de mais tempo para avaliar o {% data variables.product.product_name %}, entre em contato com {% data variables.contact.contact_enterprise_sales %} para solicitar uma extensão.

## Leia mais

- "[Habilitando as funcionalidades de {% data variables.product.prodname_advanced_security %} em {% data variables.product.product_name %}](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)"
- "[Notas de versão de {% data variables.product.product_name %}](/github-ae@latest/admin/overview/github-ae-release-notes)" 
