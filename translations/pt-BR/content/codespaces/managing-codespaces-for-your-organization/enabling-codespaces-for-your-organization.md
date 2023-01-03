---
title: Habilitando codespaces para a sua organização
shortTitle: Enable Codespaces
intro: Você pode controlar quais usuários da sua organização podem usar {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Permissions
- Administrator
ms.openlocfilehash: bd4518ef6db3887e504b13459abb5c6a682c8659
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145095780"
---
## <a name="about-enabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Sobre habilitar {% data variables.product.prodname_codespaces %} para a sua organização

Os proprietários da organização podem controlar quais usuários da sua organização podem criar e usar cdespaces.

Para usar codespaces na sua organização, você deve fazer o seguinte:

- Verifique se os usuários têm, [no mínimo, acesso de gravação](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) nos repositórios em que desejam usar um codespace. 
- [Habilite o {% data variables.product.prodname_codespaces %} para os usuários na sua organização](#enable-codespaces-for-users-in-your-organization). Você pode escolher permitir {% data variables.product.prodname_codespaces %} para usuários selecionados ou apenas para usuários específicos.
- [Definir um limite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- Certifique-se de que a sua organização não tem um endereço IP permitir a lista habilitada. Para obter mais informações, confira "[Como gerenciar endereços IP permitidos para sua organização](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

Por padrão, um codespace só pode acessar o repositório no qual ele foi criado. Se você quiser que os codespaces na sua organização possam acessar outros repositórios da organização que o criador do codespace pode acessar, confira "[Como gerenciar o acesso e a segurança do {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

## <a name="enable--data-variablesproductprodname_codespaces--for-users-in-your-organization"></a>Habilitar {% data variables.product.prodname_codespaces %} para os usuários na sua organização

{% ifversion fpt %} {% note %}

**Observação:** se você for um educador verificado ou um professor, deverá habilitar o {% data variables.product.prodname_codespaces %} de um {% data variables.product.prodname_classroom %} para usar o Benefício educacional do {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Usando GitHub Codespaces com GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)".

{% endnote %} {% endif %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Em "Permissões de usuário", selecione uma das seguintes opções:

   * **Usuários selecionados**, para escolher membros específicos da organização para usar o {% data variables.product.prodname_codespaces %}.
   * **Permitir para todos os membros**, para permitir que todos os membros da sua organização usem o {% data variables.product.prodname_codespaces %}.
   * **Permitir para todos os membros e colaboradores externos**, para permitir que todos os membros da sua organização, bem como colaboradores externos, usem o {% data variables.product.prodname_codespaces %}.

   ![Botões de opção para "Permissões do usuário"](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **Observação:** quando você seleciona **Permitir para todos os membros e colaboradores externos**, todos os colaboradores externos que foram adicionados a repositórios específicos podem criar e usar o {% data variables.product.prodname_codespaces %}. Sua organização será cobrada pelo uso de todos os colaboradores externos. Para obter mais informações sobre como gerenciar colaboradores externos, confira "[Sobre os colaboradores externos](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)".

   {% endnote %}

1. Clique em **Salvar**.

## <a name="disabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Desabilitando {% data variables.product.prodname_codespaces %} para sua organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Em "Permissões do usuário", selecione **Desabilitado**.

## <a name="setting-a-spending-limit"></a>Definindo um limite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, confira "[Como gerenciar seu limite de gastos do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
