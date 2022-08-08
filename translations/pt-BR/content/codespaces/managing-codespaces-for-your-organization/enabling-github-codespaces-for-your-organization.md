---
title: Enabling GitHub Codespaces for your organization
shortTitle: Habilitar codespaces
intro: 'Você pode controlar quais usuários da sua organização podem usar {% data variables.product.prodname_github_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage user permissions for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---


## Sobre habilitar {% data variables.product.prodname_github_codespaces %} para a sua organização

Os proprietários da organização podem controlar quais usuários da sua organização podem criar e usar cdespaces.

Para usar codespaces na sua organização, você deve fazer o seguinte:

- Certifique-se de que os usuários tenham [pelo menos acesso de gravação](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) nos repositórios onde desejam usar um codespace.
- [Habilitar {% data variables.product.prodname_github_codespaces %} para os usuários da sua organização](#enable-codespaces-for-users-in-your-organization). Você pode escolher permitir {% data variables.product.prodname_codespaces %} para usuários selecionados ou apenas para usuários específicos.
- [Definir um limite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- Certifique-se de que a sua organização não tem um endereço IP permitir a lista habilitada. Para obter mais informações, consulte "[Gerenciar endereços IP permitidos para sua organização](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}"{% endif %}

Por padrão, um codespace só pode acessar o repositório no qual ele foi criado. Se você quiser que os codespaces na sua organização possam acessar outros repositórios da organização que o criador do codespace possa acessar, consulte "[Gerenciar acesso e segurança para {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

## Habilitar {% data variables.product.prodname_codespaces %} para os usuários na sua organização

{% ifversion fpt %}
{% note %}

**Nota:** Se você for um educador ou professor verificado, você deverá habilitar {% data variables.product.prodname_codespaces %} a partir de um {% data variables.product.prodname_classroom %} para usar o seu benefício de educação de {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Usando os codespaces do GitHub com GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)".

{% endnote %}
{% endif %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Em "Permissões de usuário", selecione uma das seguintes opções:

   * **Usuários selecionados** para selecionar integrantes específicos da organização para usar {% data variables.product.prodname_codespaces %}.
   * **Permitir para todos os integrantes** para permitir todos os integrantes da organização usem {% data variables.product.prodname_codespaces %}.
   * **Permitir para todos os integrantes e colaboradores externos** para permitir que todos os integrantes da sua organização, bem como os colaboradores externos, usem {% data variables.product.prodname_codespaces %}.

   ![Botões de opção para "Permissões do usuário"](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **Observação:** Ao selecionar **Permitir para todos os integrantes e colaboradores externos**, todos os colaboradores externos que foram adicionados aos repositórios específicos poderão criar e usar {% data variables.product.prodname_codespaces %}. Sua organização será cobrada pelo uso de todos os colaboradores externos. Para obter mais informações sobre como gerenciar colaboradores externos, consulte "[Sobre colaboradores externos](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)".

   {% endnote %}

1. Clique em **Salvar**.

## Desabilitando {% data variables.product.prodname_codespaces %} para sua organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Em "Permissões de usuário", selecione **Desabilitado**.

## Definindo um limite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, consulte "[Gerenciar seu limite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
