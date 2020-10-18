---
title: Vinculando uma pull request a um problema
intro: 'Você pode vincular um pull request a um problema {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 8" %} mostra que uma correção está em andamento e{% endif %} fecha automaticamente o problema quando o pull request é mesclado.'
redirect_from:
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Note:** The special keywords in a pull request description are interpreted when the pull request targets the repository's *default* branch. However, if the PR's base is *any other branch*, then these keywords are ignored, no links are created and merging the PR has no effect on the issues. **If you want to link a pull request to an issue using a keyword, the PR must be on the default branch.**

{% endnote %}

### Sobre problemas e pull requests vinculados

Você pode vincular um problema a um pull request {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 0" %}manualmente ou {% endif %}usando uma palavra-chave compatível na descrição do pull request.

Quando você vincula uma pull request ao problema que a pull request tem de lidar, os colaboradores poderão ver que alguém está trabalhando no problema. {% if currentVersion ver_lt "enterprise-server@2. 1" %}Se o pull request e o problema estiverem em repositórios diferentes, {% data variables.product.product_name %} mostrará o link após o merge do pull request, se a pessoa que mescla o pull request também tiver permissão para fechar o problema.{% endif %}

Quando você mescla uma pull request vinculada no branch padrão de um repositório, o problema vinculado será fechado automaticamente. Para obter mais informações sobre o branch padrão, consulte "[Configurado o branch padrão](/github/administering-a-repository/setting-the-default-branch). "

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
### Vinculando manualmente uma pull request a um problema

Qualquer pessoa com permissões de gravação em um repositório pode vincular manualmente uma pull request a um problema.

Você pode vincular manualmente até dez problemas para cada pull request. O problema e a pull request devem estar no mesmo repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. Na lista de pull requests, clique na pull request que você gostaria de vincular a um problema.
4. Na barra lateral direita, clique em **Linked issues** (Problemas vinculados) ![Problemas vinculados na barra lateral direita](/assets/images/help/pull_requests/linked-issues.png)
5. Clique no problema que você deseja associar à pull request. ![Menu suspenso para problemas vinculados](/assets/images/help/pull_requests/link-issue-drop-down.png)
{% endif %}

### Vinculando uma pull request a um problema usando uma palavra-chave

You can link a pull request to an issue by using a supported keyword in the pull request's description or in a commit message (please note that the pull request must be on the default branch).

* close
* closes
* closed
* fix
* fixes
* fixed
* resolver
* resolve
* resolved

A sintaxe para fechar palavras-chave depende se o problema está no mesmo repositório que a pull request.

| Problemas vinculado                  | Sintaxe                                       | Exemplo                                                        |
| ------------------------------------ | --------------------------------------------- | -------------------------------------------------------------- |
| Problema no mesmo repositório        | *KEYWORD* #*ISSUE-NUMBER*                     | `Closes #10`                                                   |
| Problema em um repositório diferente | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`                                 |
| Múltiplos problemas                  | Usar sintaxe completa para cada problema      | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}Apenas pull requests vinculados manualmente podem ser desvinculados. Para desvincular um problema que você vinculou usando uma palavra-chave, você deve editar a descrição da pull request para remover a palavra-chave.{% endif %}

Você também pode usar palavras-chave de fechamento em uma mensagem de commit. O problema será encerrado quando você mesclar o commit no branch padrão, mas o pull request que contém o commit não será listado como um pull request vinculado.

### Leia mais

- "[Referências autovinculadas e URLs](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
