---
title: Gerenciar o nome de branch-padrão para repositórios na sua organização
intro: É possível definir o nome do branch-padrão para repositórios que os integrantes criam na sua organização.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
---

### Sobre o nome do branch-padrão

Quando um membro da sua organização cria um novo repositório, o {% data variables.product.prodname_dotcom %} criará um único branch e o irá defini-lo como branch-padrão do repositório. {% data variables.product.prodname_dotcom %} atualmente nomeia o branch-padrão `mestre`, mas você pode definir o branch-padrão com qualquer nome que faça sentido para o seu ambiente de desenvolvimento.

{% data reusables.branches.set-default-branch %}

{% data reusables.branches.rename-existing-branch %}

### Definir o nome do branch-padrão

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.repository-defaults %}
3. Em "Branch padrão do repositório", clique em **Alterar o nome do branch-padrão agora**. ![Botão de sobrescrever](/assets/images/help/organizations/repo-default-name-button.png)
    {% note %}

    **Observação:** Se o proprietário da empresa já aplicou uma política para o nome-padrão, você não conseguirá alterá-la aqui. Você conseguirá definir o branch-padrão em repositórios individuais. Para obter mais informações, consulte "[Exigir uma política com o nome do branch-padrão](/github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)" e "[Definir o branch-padrão](/github/administering-a-repository/setting-the-default-branch)".

    {% endnote %}
4. Digite o nome-padrão que você gostaria de usar para novos branches. ![Caixa de texto para digitar o nome-padrão](/assets/images/help/organizations/repo-default-name-text.png)
5. Clique em **Atualizar**. ![Botão de atualizar](/assets/images/help/organizations/repo-default-name-update.png)

### Leia mais

- [Gerenciar o nome do branch-padrão para seus repositórios](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)
