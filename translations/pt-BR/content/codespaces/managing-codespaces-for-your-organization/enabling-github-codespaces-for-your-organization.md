---
title: Como habilitar o GitHub Codespaces em sua organização
shortTitle: 'Enable {% data variables.product.prodname_codespaces %}'
intro: 'Você pode controlar quais usuários da sua organização podem usar {% data variables.product.prodname_github_codespaces %} às custas da organização.'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
ms.openlocfilehash: 992d744e04ae00db4d760b59a9d08d1700846998
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158898'
---
## Sobre habilitar {% data variables.product.prodname_github_codespaces %} para a sua organização

Os proprietários da organização podem controlar quais usuários da sua organização podem criar e usar codespaces. Para ver mais informações sobre preços, confira "[Sobre a cobrança dos {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

Somente as pessoas que podem enviar alterações por push para um repositório ou bifurcar o repositório podem criar um codespace para esse repositório. Para permitir que as pessoas criem codespaces para repositórios pertencentes à sua organização, você deve:

- Verifique se os usuários têm, no mínimo, acesso de gravação nos repositórios em que desejam usar um codespace. Para obter mais informações, confira "[Como gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".
- Certifique-se de que a sua organização não tem um endereço IP permitir a lista habilitada. Para obter mais informações, confira "[Como gerenciar endereços IP permitidos para sua organização](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

Para permitir que as pessoas criem codespaces pelos quais sua organização será cobrada, você deve:

- [Definir um limite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [Escolha quem pode criar codespaces cobrados da sua organização](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %} {% note %}

**Observação:** se você for um educador verificado ou um professor, deverá habilitar o {% data variables.product.prodname_github_codespaces %} de um {% data variables.product.prodname_classroom %} para usar o Benefício educacional do {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Usar o {% data variables.product.prodname_github_codespaces %} com {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)".

{% endnote %} {% endif %}

Por padrão, um codespace só pode acessar o repositório no qual ele foi criado. Se você quiser que os codespaces da sua organização possam acessar outros repositórios da organização que o criador do codespace pode acessar, confira "[Como gerenciar o acesso a repositórios pelos codespaces da sua organização](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)".

## Escolha quem pode criar codespaces que são cobrados da sua organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Em "Cobrança", selecione uma das seguintes opções:

   * **Desabilitado** – Sua organização não será cobrada pelo uso do codespace. {% data variables.product.prodname_codespaces %} criados para os repositórios da sua organização, e serão cobrados dos usuários individuais que os criaram.
   * **Membros selecionados** – {% data variables.product.prodname_codespaces %} criados para os repositórios da sua organização por membros selecionados serão cobrados na organização.
   * **Todos os membros** – {% data variables.product.prodname_codespaces %} criados para os repositórios da sua organização por membros da sua organização serão cobrados da organização.
   * **Todos os membros e colaboradores externos** – {% data variables.product.prodname_codespaces %} criados para os repositórios da sua organização por membros da organização e colaboradores externos serão cobrados da organização.

   ![Botões de opção para "Cobrança"](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   **Observação:** quando você seleciona **Todos os membros e colaboradores externos**, todos os colaboradores externos que foram adicionados a repositórios específicos podem criar e usar o {% data variables.product.prodname_codespaces %} para esses repositórios, e a sua organização será cobrada por esse uso. Para obter mais informações sobre como gerenciar colaboradores externos, confira "[Sobre os colaboradores externos](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)".

   {% endnote %}

1. Clique em **Salvar**.
1. Se você escolheu **Membros selecionados**, uma caixa de entrada será exibida para que você insira os nomes dos usuários que deseja selecionar.

   ![Caixa de entrada para selecionar usuários](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## Desabilitando {% data variables.product.prodname_codespaces %} para sua organização

Você pode impedir a criação e o uso de codespaces faturáveis para sua organização.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Em "Cobrança", selecione **Desabilitado**.

## Definindo um limite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, confira "[Como gerenciar seu limite de gastos do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
