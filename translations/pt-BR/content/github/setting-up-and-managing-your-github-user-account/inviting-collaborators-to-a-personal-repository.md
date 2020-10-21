---
title: Convidar colaboradores para um repositório pessoal
intro: 'Você pode {% if currentVersion == "free-pro-team@latest" %}convidar usuários para se tornarem{% else %}adicionar usuários como{% endif %} colaboradores do seu repositório pessoal.'
redirect_from:
  - /articles/how-do-i-add-a-collaborator/
  - /articles/adding-collaborators-to-a-personal-repository/
  - /articles/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Os repositórios de propriedade de uma organização podem conceder mais acesso granular. Para obter mais informações, consulte "[Permissões de acesso no {% data variables.product.product_name %}](/articles/access-permissions-on-github)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
{% data reusables.organizations.org-invite-expiration %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Observação:** o {% data variables.product.company_short %} limita o número de pessoas que podem ser convidadas para um repositório dentro de um período de 24 horas. Se você exceder esse limite, aguarde 24 horas ou crie uma organização para colaborar com mais pessoas.

{% endnote %}

{% endif %}

1. Pergunte o nome de usuário da pessoa que você está convidando como colaborador.

{% if currentVersion == "free-pro-team@latest" %} Se eles ainda não têm um nome de usuário, eles podem se inscrever em {% data variables.product.prodname_dotcom %} Para obter mais informações, consulte "[Inscrever-se para uma nova conta de {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account)".{% endif %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
1. Clique em **Convidar um colaborador**. ![Botão "Convidar um colaborador"](/assets/images/help/repository/invite-a-collaborator-button.png)
2. No campo de pesquisa, comece a digitar o nome da pessoa que deseja convidar e, em seguida, clique em um nome na lista de correspondências. ![Campo de pesquisa para digitar o nome de uma pessoa para convidar para o repositório](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Clique em **Adicionar NOME ao REPOSITÓRIO**. ![Botão para adicionar um colaborador](/assets/images/help/repository/add-collaborator-user-repo.png)
{% else %}
5. Na barra lateral esquerda, clique em **Collaborators** (Colaboradores). ![Barra lateral Repository settings (Configurações de repositório) com destaque para Collaborators (Colaboradores)](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. Em "Collaborators" (Colaboradores), comece a digitar o nome de usuário do colaborador.
7. Selecione o nome de usuário do colaborador no menu suspenso. ![Menu suspenso lista Collaborator (Colaborador)](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Clique em **Add collaborator** (Adicionar colaborador). ![Botão Add (Adicionar)](/assets/images/help/repository/repo-settings-collab-add.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
9. O usuário receberá um e-mail com o convite para o repositório. Ao aceitar o convite, a pessoa terá acesso de colaborador ao seu repositório.
{% endif %}

### Leia mais

- "[Níveis de permissão para um repositório de uma conta de usuário](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-on-a-repository-owned-by-a-user-account)"
- "[Remover um colaborador de um repositório pessoal](/articles/removing-a-collaborator-from-a-personal-repository)"
- "[Remover a si mesmo de um repositório de colaborador](/articles/removing-yourself-from-a-collaborator-s-repository)"
- "[Organizar integrantes em equipes](/articles/organizing-members-into-teams)"
