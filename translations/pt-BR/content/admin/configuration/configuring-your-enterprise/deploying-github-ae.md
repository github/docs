---
title: Implantação do GitHub AE
intro: 'Você pode implantar {% data variables.product.product_name %} para uma região disponível do Azure.'
versions:
  ghae: '*'
topics:
  - Accounts
  - Enterprise
type: how_to
shortTitle: Deploy GitHub AE
redirect_from:
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-ae
ms.openlocfilehash: af6def26a15a1ccad2625677d9db57b2a1907850
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147614364'
---
## Sobre a implantação de {% data variables.product.product_name %}

{% data reusables.github-ae.github-ae-enables-you %} Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae)".

Após comprar ou começar um teste de {% data variables.product.product_name %}, você pode fazer a implantação de {% data variables.product.product_name %} para uma região do Azure disponível. Este guia refere-se ao recurso do Azure que contém a implantação de {% data variables.product.product_name %} como a conta de {% data variables.product.product_name %}. Você usará o portal do Azure em [https://portal.azure.com](https://portal.azure.com) para implantar a conta do {% data variables.product.product_name %}.

## Pré-requisitos

Você precisa ter permissão para realizar a operação `/register/action` para o provedor de recursos no Azure. A permissão está incluída nas funções `Contributor` e `Owner`. Para obter mais informações, confira [Provedores e tipos de recursos do Azure](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider) na documentação da Microsoft.

## Como implantar o {% data variables.product.product_name %} com o {% data variables.actions.azure_portal %}

O {% data variables.actions.azure_portal %} permite implantar a conta do {% data variables.product.product_name %} no seu grupo de recursos do Azure.

1. Clique em um dos seguintes dois links para começar a implantação de {% data variables.product.product_name %}. O link que você deve clicar depende da nuvem Azure onde você planeja implantar {% data variables.product.product_name %}. Para obter mais informações sobre o Azure Government, confira [O que é o Azure Government?](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome) na documentação da Microsoft.
   
   - [Implantar o {% data variables.product.product_name %} no Azure Commercial](https://aka.ms/create-github-ae-instance)
   - [Implantar o {% data variables.product.product_name %} no Azure Government](https://aka.ms/create-github-ae-instance-gov)
1. Para iniciar o processo de adição de uma nova conta do {% data variables.product.product_name %}, clique em **Criar conta do GitHub AE**.
1. Insira as informações nos campos "Detalhes do projeto" e "Detalhes da instância".
    ![Resultado da pesquisa do {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-form.png)
    - **Nome da conta:** o nome do host da sua empresa
    - **Nome de usuário administrador:** um nome de usuário para o proprietário da empresa inicial que será criado no {% data variables.product.product_name %}
    - **Email do administrador:** o endereço de email que receberá as informações de logon
1. Para revisar um resumo das alterações propostas, clique em **Revisar + criar**.
1. Depois que o processo de validação for concluído, clique em **Criar**.

O endereço de e-mail que você digitou acima receberá instruções sobre como acessar a sua empresa. Após ter acesso, você poderá começar seguindo os passos das configuração iniciais. Para obter mais informações, confira "[Como inicializar o {% data variables.product.product_name %}](/admin/configuration/initializing-github-ae)".

{% note %}

**Observação:** as atualizações de software para a implantação do {% data variables.product.product_name %} são executadas pelo {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Sobre os upgrades para novas versões](/admin/overview/about-upgrades-to-new-releases)".

{% endnote %}

## Acessando a sua empresa

Use o {% data variables.actions.azure_portal %} para procurar a implantação do {% data variables.product.product_name %}. A lista resultante inclui todas as implantações do {% data variables.product.product_name %} na sua região do Azure.

1. No painel esquerdo do {% data variables.actions.azure_portal %}, clique em **Todos os recursos**.
1. Nos filtros disponíveis, clique em **Todos os tipos** e desmarque **Selecionar todos** e selecione **GitHub AE**: ![Resultado da pesquisa do {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-type-filter.png)

## Próximas etapas

- Depois que a implantação for provisionada, a próxima etapa será inicializar o {% data variables.product.product_name %}. Para obter mais informações, confira "[Como inicializar o {% data variables.product.product_name %}](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae)".
- Se você está estiver testando {% data variables.product.product_name %}, você poderá fazer a atualização para uma licença completa a qualquer momento durante o período de avaliação, entrando em contato com {% data variables.contact.contact_enterprise_sales %}. Se você não atualizou até o último dia de seu teste, a implantação será excluída automaticamente. Caso você precise de mais tempo para avaliar o {% data variables.product.product_name %}, entre em contato com a equipe de {% data variables.contact.contact_enterprise_sales %} para solicitar uma extensão.

## Leitura adicional 

- "[Como habilitar os recursos do {% data variables.product.prodname_advanced_security %} no {% data variables.product.product_name %}](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)"
- "[Notas sobre a versão do {% data variables.product.product_name %}](/github-ae@latest/admin/overview/github-ae-release-notes)" 
