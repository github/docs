---
title: Definir o branch padrão
intro: 'Se você tiver mais de um branch no seu repositório, você poderá escolher outro branch para ser o branch-padrão.'
redirect_from:
  - /articles/setting-the-default-branch
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre o branch-padrão

{% data reusables.branches.new-repo-default-branch %} {% data reusables.branches.default-branch-automatically-base-branch %} se você tiver mais de um branch no seu repositório, qualquer pessoa com direitos de administrador sobre um repositório pode selecionar um desses branches existentes como branch-padrão no repositório.

### Definir o branch padrão

{% note %}

**Observação:** Para definir o branch-padrão você deve ter mais de um branch no seu repositório.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
4. No menu suspenso do branch-padrão, selecione o novo branch-padrão. ![Seletor suspenso de branch padrão](/assets/images/help/repository/repository-options-defaultbranch.png)
5. Clique em **Atualizar**.

Você pode selecionar somente branches que já existem no {% data variables.product.product_location %}. Para criar um novo branch por meio da UI, consulte "[Criar e excluir branches no repositório](/articles/creating-and-deleting-branches-within-your-repository)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

Também é possível definir o nome do branch-padrão para quaisquer repositórios recém-criados, pertencentes à conta de usuário, organização ou conta corporativa. Para obter mais informações, consulte "[Gerenciar o branch-padrão para seus repositórios](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)", "[Gerenciar o nome do branch-padrão para repositórios na sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization), ou "[Exigir uma política com o nome do branch-padrão](/github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)".

{% endif %}

{% warning %}

**Aviso**: Configurar um branch-padrão diferente afeta o conteúdo de `trunk` no seu branch e na [ponte do Git-Subversion](https://github.com/blog/1178-collaborating-on-github-with-subversion) e no `HEAD` que veria ao fazer `git ls-remote` na [URL crescente do repositório](https://git-scm.com/docs/git-ls-remote.html).

{% endwarning %}
