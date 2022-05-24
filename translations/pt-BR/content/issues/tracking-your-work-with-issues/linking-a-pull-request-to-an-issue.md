---
title: Vinculando uma pull request a um problema
intro: Você pode vincular um pull request a um problema para mostrar que uma correção está em andamento e para fechar automaticamente o problema quando o pull request for mesclado.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message
  - /articles/closing-issues-via-commit-messages
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Vincular PR a um problema
---

{% note %}

**Observação:** As palavras-chave especiais na descrição de um pull request são interpretadas quando o pull request aponta para o branch-padrão do *repositório*. No entanto, se a base do PR's for *qualquer outro branch*, essas palavras-chave serão ignoradas, nenhum link será criado e o merge do PR não terá efeito sobre os problemas. **Se você deseja vincular um pull request a um problema usando uma palavra-chave, o PR deverá estar no branch-padrão.**

{% endnote %}

## Sobre problemas e pull requests vinculados

Você pode vincular um problema a um pull request manualmente ou usar uma palavra-chave compatível na descrição do pull request.

Quando você vincula uma pull request ao problema que a pull request tem de lidar, os colaboradores poderão ver que alguém está trabalhando no problema.

Quando você mescla uma pull request vinculada no branch padrão de um repositório, o problema vinculado será fechado automaticamente. Para obter mais informações sobre o branch padrão, consulte "[Configurado o branch padrão](/github/administering-a-repository/setting-the-default-branch). "

## Vinculando uma pull request a um problema usando uma palavra-chave

Você pode vincular um pull request a um problema, usando uma palavra-chave suportada na descrição do pull request ou em uma mensagem de commit. O pull request **deve estar** no branch padrão.

* close
* closes
* closed
* fix
* fixes
* fixed
* resolver
* resolve
* resolved

Se você usar uma palavra-chave para fazer referência a um comentário de um pull request em outr pull request, os pull requests serão vinculados. O merge da solicitação do pull request de referência também fecha o pull request referenciado.

A sintaxe para fechar palavras-chave depende se o problema está no mesmo repositório que a pull request.

| Problemas vinculado                  | Sintaxe                                       | Exemplo                                                        |
| ------------------------------------ | --------------------------------------------- | -------------------------------------------------------------- |
| Problema no mesmo repositório        | *KEYWORD* #*ISSUE-NUMBER*                     | `Closes #10`                                                   |
| Problema em um repositório diferente | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`                                 |
| Múltiplos problemas                  | Usar sintaxe completa para cada problema      | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

Somente pull requests vinculados manualmente podem ser desvinculados. Para desvincular um problema que você vinculou usando uma palavra-chave, você deve editar a descrição da pull request para remover a palavra-chave.

Você também pode usar palavras-chave de fechamento em uma mensagem de commit. O problema será encerrado quando você mesclar o commit no branch padrão, mas o pull request que contém o commit não será listado como um pull request vinculado.

## Vinculando manualmente uma pull request a um problema

Qualquer pessoa com permissões de gravação em um repositório pode vincular manualmente uma pull request a um problema.

Você pode vincular manualmente até dez problemas para cada pull request. O problema e a pull request devem estar no mesmo repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. Na lista de pull requests, clique na pull request que você gostaria de vincular a um problema.
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6234 %}
4. Na barra lateral direita, na seção "Desenvolvimento" clique em {% octicon "gear" aria-label="The Gear icon" %}.
{% else %}
4. Na barra lateral direita, clique em **Linked issues** (Problemas vinculados) ![Problemas vinculados na barra lateral direita](/assets/images/help/pull_requests/linked-issues.png)
{% endif %}
5. Clique no problema que você deseja associar à pull request. ![Menu suspenso para problemas vinculados](/assets/images/help/pull_requests/link-issue-drop-down.png)

## Leia mais

- "[Referências autovinculadas e URLs](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
