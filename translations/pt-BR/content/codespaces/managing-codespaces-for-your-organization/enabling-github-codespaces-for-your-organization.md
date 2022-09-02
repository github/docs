---
title: Habilitando o GitHub Codespaces para sua organização
shortTitle: 'Habilite {% data variables.product.prodname_codespaces %}'
intro: 'Você pode controlar quais usuários da sua organização podem usar o {% data variables.product.prodname_github_codespaces %} às custas da organização.'
product: '{% data reusables.gated-features.codespaces %}'
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
---

## Sobre habilitar {% data variables.product.prodname_github_codespaces %} para a sua organização

Os proprietários da organização podem controlar quais usuários da sua organização podem criar e usar códigos às custas da organização.

Somente as pessoas que podem clonar um repositório podem criar um codespace para esse repositório. Para permitir que as pessoas criem codespaces para repositórios pertencentes a sua organização, você deve:

- Certificar-se de que os usuários tenham pelo menos acesso de gravação aos repositórios onde querem usar um codespace. Para obter mais informações, consulte "[Gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository). "
- Certifique-se de que a sua organização não tem um endereço IP permitir a lista habilitada. Para obter mais informações, consulte "[Gerenciar endereços IP permitidos para sua organização](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}"{% endif %}

Para permitir que as pessoas criem codespaces para os quais sua organização será cobrada, você deve:

- [Definir um limite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [Escolher quem pode criar codespaces que são cobrados da sua organização](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %}
{% note %}

**Nota:** Se você for um educador ou professor verificado, você deverá habilitar {% data variables.product.prodname_codespaces %} a partir de um {% data variables.product.prodname_classroom %} para usar o seu benefício de educação de {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Usando os codespaces do GitHub com GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)".

{% endnote %}
{% endif %}

Por padrão, um codespace só pode acessar o repositório no qual ele foi criado. Se você quiser que os codespaces na sua organização possam acessar outros repositórios de organização que o criador do codespace possa acessar, consulte "[Gerenciar acesso do repositório aos codespaces da sua organização](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)".

## Escolher quem pode criar codespaces que são cobrados da sua organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Em "cobrança", selecione uma das seguintes opções:

   * **Desabilitado** - Sua organização não será cobrada pelo uso de codespaces. {% data variables.product.prodname_codespaces %} criado para os repositórios da organização que serão cobrados pelos usuários que os criarem.
   * **Integrantes selecionados** - {% data variables.product.prodname_codespaces %} criado para os repositórios da sua organização por integrantes selecionados e será cobradoo da organização.
   * **Todos os integrantes** - {% data variables.product.prodname_codespaces %} criados para os repositórios da sua organização por integrantes da sua organização e será cobrado da organização.
   * **Todos os integrantes e colaboradores externos** - {% data variables.product.prodname_codespaces %} criado para os repositórios da organização por integrantes da organização e colaboradores externos e será cobrado da organização.

   ![Botão de opção para "cobrança"](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   **Observação:** Ao selecionar **Todos os integrantes e colaboradores externos**, todos os colaboradores externos que foram adicionados em repositórios específicos podem criar e usar {% data variables.product.prodname_codespaces %} para esses repositórios e sua organização será cobrada por esse uso. Para obter mais informações sobre como gerenciar colaboradores externos, consulte "[Sobre colaboradores externos](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)".

   {% endnote %}

1. Clique em **Salvar**.
1. Se você selecionou **integrantes selecionados**, uma caixa de entrada será exibida para você inserir os nomes de usuários que deseja selecionar.

   ![Caixa de entrada para selecionar usuários](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## Desabilitando {% data variables.product.prodname_codespaces %} para sua organização

É possível impedir a criação e o uso de codespaces faturáveis na sua organização.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Em "cobrança", selecione **Desabilitado**.

## Definindo um limite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, consulte "[Gerenciar seu limite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
