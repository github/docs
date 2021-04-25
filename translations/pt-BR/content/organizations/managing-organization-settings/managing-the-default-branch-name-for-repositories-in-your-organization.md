---
title: Gerenciar o nome de branch-padrão para repositórios na sua organização
intro: 'Você pode definir o nome do branch-padrão para repositórios que os integrantes criam na sua organização em {% data variables.product.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
permissions: Os proprietários da organização podem gerenciar o nome do branch-padrão para novos repositórios na organização.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - organizations
  - teams
---

### Sobre o gerenciamento do nome do brancc-padrão

Quando um integrante da sua organização cria um novo repositório na sua organização, o repositório contém um branch, que é o branch-padrão. Você pode alterar o nome que {% data variables.product.product_name %} usa para o branch-padrão em novos repositórios que os integrantes da sua organização criam. Para obter mais informações sobre o branch padrão, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% data reusables.branches.change-default-branch %}

Se um proprietário da empresa tiver aplicado uma política para o nome do branch padrão para sua empresa, você não poderá definir um nome do branch padrão para sua organização. Em vez disso, você pode alterar o branch padrão para repositórios individuais. Para mais informações, consulte {% if currentVersion == "free-pro-team@latest" %}"[Aplicar políticas de gerenciamento do repositório na sua empresa](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)"{% else %}[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)"{% endif %} e "[Alterar o branch padrão](/github/administering-a-repository/changing-the-default-branch)".

### Definir o nome do branch-padrão

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.repository-defaults %}
3. Em "Branch padrão do repositório", clique em **Alterar o nome do branch-padrão agora**. ![Botão de sobrescrever](/assets/images/help/organizations/repo-default-name-button.png)
4. Digite o nome-padrão que você gostaria de usar para novos branches. ![Caixa de texto para digitar o nome-padrão](/assets/images/help/organizations/repo-default-name-text.png)
5. Clique em **Atualizar**. ![Botão de atualizar](/assets/images/help/organizations/repo-default-name-update.png)

### Leia mais

- "[Gerenciar o nome do branch-padrão para seus repositórios](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)"
