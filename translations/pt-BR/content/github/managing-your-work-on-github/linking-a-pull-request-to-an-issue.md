---
title: Vinculando uma pull request a um problema
intro: 'Você pode vincular uma pull request a um problema {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} para mostrar que uma correção está em andamento e para{% endif %} fechar automaticamente o problema quando a pull request for mesclada.'
redirect_from:
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre problemas e pull requests vinculados

Você pode vincular um problema a uma pull request {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}manualmente ou {% endif %}usando uma palavra-chave suportada na descrição da pull request.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
Quando você vincula uma pull request ao problema que a pull request tem de lidar, os colaboradores poderão ver que alguém está trabalhando no problema.
{% if currentVersion ver_lt "enterprise-server@2.21" %}Se a pull request e o problema estiverem em repositórios diferentes, {% data variables.product.product_name %} exibirá o link depois que a pull request sofrer merge, se a pessoa que faz o merge da pull request também tiver permissão para encerrar o problema.{% endif %}{% endif %}

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

Você pode vincular uma pull request a um problema usando uma palavra-chave suportada na descrição da pull request.

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}Somente pull requests vinculadas manualmente podem ser desvinculadas. Para desvincular um problema que você vinculou usando uma palavra-chave, você deve editar a descrição da pull request para remover a palavra-chave.{% endif %}

Você também pode usar palavras-chave de fechamento em uma mensagem de commit. O problema será encerrado quando você mesclar o commit no branch padrão{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, mas a pull request que contém o commit não será listada como uma pull request vinculada{% endif %}.

### Leia mais

- "[Referências autovinculadas e URLs](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
