---
title: Deploying GitHub AE
intro: 'You can deploy {% data variables.product.product_name %} to an available Azure region.'
versions:
  ghae: '*'
topics:
  - Accounts
  - Enterprise
type: how_to
shortTitle: Deploy GitHub AE
redirect_from:
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-ae
---

## About deployment of {% data variables.product.product_name %}

{% data reusables.github-ae.github-ae-enables-you %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_ghe_managed %}de](/admin/overview/about-github-ae)."

After you purchase or start a trial of {% data variables.product.product_name %}, you can deploy {% data variables.product.product_name %} to an available Azure region. This guide refers to the Azure resource that contains the deployment of {% data variables.product.product_name %} as the {% data variables.product.product_name %} account. You'll use the Azure portal at [https://portal.azure.com](https://portal.azure.com) to deploy the {% data variables.product.product_name %} account.

## Pré-requisitos

- Before you can deploy {% data variables.product.product_name %}, you must request access from your {% data variables.product.company_short %} account team. {% data variables.product.company_short %} will enable deployment of {% data variables.product.product_name %} for your Azure subscription. If you haven't already purchased {% data variables.product.product_name %}, you can contact {% data variables.contact.contact_enterprise_sales %} to check your eligibility for a trial.

- You must have permission to perform the `/register/action` operation for the resource provider in Azure. The permission is included in the `Contributor` and `Owner` roles. For more information, see [Azure resource providers and types](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider) in the Microsoft documentation.

## Implantando {% data variables.product.product_name %} com o {% data variables.actions.azure_portal %}

O {% data variables.actions.azure_portal %} permite que você faça a implementação da conta do {% data variables.product.product_name %} no seu grupo de recursos do Azure.

1. Click one of the following two links to begin deployment of {% data variables.product.product_name %}. The link you should click depends on the Azure cloud where you plan to deploy {% data variables.product.product_name %}. For more information about Azure Government, see [What is Azure Government?](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome) in the Microsoft documentation.

   - [Deploy {% data variables.product.product_name %} to Azure Commercial](https://aka.ms/create-github-ae-instance)
   - [Deploy {% data variables.product.product_name %} to Azure Government](https://aka.ms/create-github-ae-instance-gov)
1. Para começar o processo de adicionar uma nova conta de {% data variables.product.product_name %}, clique em **Criar conta do GitHub AE**.
1. Complete the "Project details" and "Instance details" fields. ![Resultado da pesquisa de {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-form.png)
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
- If you're trying {% data variables.product.product_name %}, you can upgrade to a full license at any time during the trial period by contacting contact {% data variables.contact.contact_enterprise_sales %}. Se você não atualizou até o último dia de seu teste, a implantação será excluída automaticamente. Se precisar de mais tempo para avaliar o {% data variables.product.product_name %}, entre em contato com {% data variables.contact.contact_enterprise_sales %} para solicitar uma extensão.

## Leia mais

- "[Habilitando as funcionalidades de {% data variables.product.prodname_advanced_security %} em {% data variables.product.product_name %}](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)"
- "[Notas de versão de {% data variables.product.product_name %}](/github-ae@latest/admin/overview/github-ae-release-notes)" 
