---
title: Gerenciar o nome de branch-padrão para repositórios na sua organização
intro: 'Você pode definir o nome do branch-padrão para repositórios que os integrantes criam na sua organização em {% data variables.product.product_location %}.'
permissions: Os proprietários da organização podem gerenciar o nome do branch-padrão para novos repositórios na organização.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
---

### Sobre o gerenciamento do nome do brancc-padrão

Quando um integrante da sua organização cria um novo repositório na sua organização, o repositório contém um branch, que é o branch-padrão. Você pode alterar o nome que {% data variables.product.product_name %} usa para o branch-padrão em novos repositórios que os integrantes da sua organização criam. Para obter mais informações sobre o branch padrão, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% data reusables.branches.change-default-branch %}

If an enterprise owner has enforced a policy for the default branch name for your enterprise, you cannot set a default branch name for your organization. Instead, you can change the default branch for individual repositories. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Enforcing repository management policies in your enterprise](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)"{% else %}"[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)"{% endif %} and "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

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
