---
title: Vinculando uma pull request a um problema
intro: 'Você pode vincular uma solicitação de pull {% ifversion link-existing-branches-to-issue %} ou um branch {% endif %} a um problema para mostrar que uma correção está em andamento e fechar automaticamente o problema quando a solicitação de pull {% ifversion link-existing-branches-to-issue %} ou branch {% endif %} for mesclada.'
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
shortTitle: Link PR to issue
ms.openlocfilehash: 8c3ec2b778029c91d0e97783ced873e6b9b28a9b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107939'
---
{% note %}

**Observação:** as palavras-chave especiais em uma descrição de solicitação de pull são interpretadas quando a solicitação de pull tem como destino o branch *padrão* do repositório. No entanto, se a base da PR for *qualquer outro branch*, essas palavras-chave serão ignoradas, nenhum vínculo será criado e a mesclagem da PR não terá nenhum efeito sobre os problemas. **Caso você deseje vincular uma solicitação de pull a um problema usando uma palavra-chave, a PR precisa estar no branch padrão.**

{% endnote %}

## Sobre problemas e pull requests vinculados

Você pode vincular um problema a uma solicitação de pull manualmente ou usando uma palavra-chave com suporte na descrição da solicitação de pull.

Quando você vincula uma pull request ao problema que a pull request tem de lidar, os colaboradores poderão ver que alguém está trabalhando no problema.

Quando você mescla uma pull request vinculada no branch padrão de um repositório, o problema vinculado será fechado automaticamente. Para obter mais informações sobre o branch padrão, confira "[Como alterar o branch padrão](/github/administering-a-repository/changing-the-default-branch)".

## Vinculando uma pull request a um problema usando uma palavra-chave

Você pode vincular uma solicitação de pull a um problema usando uma palavra-chave com suporte na descrição da solicitação de pull ou em uma mensagem de commit. A solicitação de pull **deve estar** no branch padrão.

* close
* closes
* closed
* fix
* fixes
* fixo
* resolve
* resolves
* resolvido

Se você usar uma palavra-chave para fazer referência a um comentário de um pull request em outr pull request, os pull requests serão vinculados. O merge da solicitação de pull de referência também fechará a solicitação de pull referenciada.

A sintaxe para fechar palavras-chave depende se o problema está no mesmo repositório que a pull request.

Problemas vinculado | Sintaxe | Exemplo
--------------- | ------ | ------
Problema no mesmo repositório | *KEYWORD* #*ISSUE-NUMBER* | `Closes #10`
Problema em um repositório diferente | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`
Múltiplos problemas | Usar sintaxe completa para cada problema | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

Somente as solicitações de pull vinculadas manualmente podem ser desvinculadas manualmente. Para desvincular um problema que você vinculou usando uma palavra-chave, você deve editar a descrição da solicitação de pull para remover a palavra-chave.

Você também pode usar palavras-chave de fechamento em uma mensagem de commit. O problema será encerrado quando você mesclar o commit no branch padrão, mas o pull request que contém o commit não será listado como um pull request vinculado.

## Como vincular manualmente uma solicitação de pull a um problema usando a barra lateral de solicitação de pull

Qualquer pessoa com permissões de gravação em um repositório pode vincular manualmente uma solicitação de pull a um problema usando a barra lateral de solicitação de pull.

Você pode vincular manualmente até dez problemas para cada pull request. O problema e a pull request devem estar no mesmo repositório.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. Na lista de pull requests, clique na pull request que você gostaria de vincular a um problema.
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
4. Na barra lateral direita, na seção "Desenvolvimento" clique em {% octicon "gear" aria-label="The Gear icon" %}.
{% else %}
4. Na barra lateral direita, clique em **Problemas vinculados**.
  ![Problemas vinculados na barra lateral direita](/assets/images/help/pull_requests/linked-issues.png) {% endif %}
5. Clique no problema que você deseja associar à pull request.
  ![Menu suspenso para vincular problema](/assets/images/help/pull_requests/link-issue-drop-down.png)

{% ifversion link-existing-branches-to-issue %}

## Como vincular manualmente uma solicitação de pull ou um branch a um problema usando a barra lateral de problema

Qualquer pessoa com permissões de gravação em um repositório pode vincular manualmente uma solicitação de pull ou um branch a um problema usando a barra lateral de problema.

Você pode vincular manualmente até dez problemas para cada pull request. O problema pode estar em um repositório diferente da solicitação de pull ou do branch vinculado. Seu último repositório selecionado será lembrado 

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. Na lista de problemas, clique no problema ao qual deseja vincular uma solicitação de pull ou um branch.
4. Na barra lateral direita, clique em **Desenvolvimento**.
  ![Menu desenvolvimento na barra lateral direita](/assets/images/help/issues/development-menu.png)
5. Clique no repositório que contém a solicitação de pull ou o branch que você deseja vincular ao problema.
  ![Lista suspensa para selecionar o repositório](/assets/images/help/issues/development-menu-select-repository.png)
6. Clique na solicitação de pull ou no branch que você deseja vincular ao problema.
  ![Lista suspensa para vincular a solicitação de pull ou o branch](/assets/images/help/issues/development-menu-select-pr-or-branch.png)
7. Clique em **Aplicar**.
  ![Aplicar](/assets/images/help/issues/development-menu-apply.png)

{% endif %}

## Leitura adicional

* "[URLs e referências vinculadas automaticamente](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
