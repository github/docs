---
title: Fazer checkout de pull requests no local
intro: 'Quando alguém envia a você uma pull request de uma bifurcação ou um branch do seu repositório, talvez você queira fazer merge dela no local para resolver um conflito de merge ou para testar e verificar as alterações antes de fazer merge no {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Check out a PR locally
ms.openlocfilehash: bdb63d3951c92996ca4d6dc393bdc49b8d37acce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128036'
---
{% note %}

  **Observação:** os autores de solicitações de pull podem conceder aos mantenedores do repositório upstream ou àqueles com acesso de push no repositório upstream a permissão para fazer commits para o branch de comparação da solicitação de pull em um fork pertencente ao usuário. Para obter mais informações, confira "[Como permitir alterações em um branch de solicitação de pull criado com base em um fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)".

  {% endnote %}

## Modificar uma pull request ativa no local

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista de solicitações de pull, clique na solicitação de pull que deseja modificar.{% ifversion fpt or ghec %}
3. Para escolher o local em que deseja abrir a solicitação de pull, selecione o menu suspenso **Abrir com {% octicon "triangle-down" aria-label="The down triangle icon" %}** e clique em uma das guias.
  ![Link para acessar as instruções da solicitação de pull na linha de comando](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. Na caixa de mesclagem, clique em **Instruções da linha de comando**. Siga a sequência de etapas para rebaixar a pull request proposta.
  ![Link para acessar as instruções de solicitação de pull na linha de comando](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. Opcionalmente, para ver as alterações propostas no {% data variables.product.prodname_desktop %}, clique em **Abrir isto no {% data variables.product.prodname_desktop %}** .
  ![Link para abrir uma solicitação de pull localmente no Desktop](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para fazer check-out de uma solicitação de pull localmente, use o subcomando `gh pr checkout`. Substitua `pull-request` pelo número, pela URL ou pelo branch principal da solicitação de pull.

```shell
gh pr checkout <em>pull-request</em>
```

{% endcli %}

## Modificar uma pull request inativa no local

Se o autor de uma pull request não responde às solicitações ou excluiu sua bifurcação, a pull request ainda poderá ser mesclada. No entanto, se quiser fazer alterações em uma pull request e o autor não estiver respondendo, será preciso executar algumas etapas adicionais para atualizar a pull request.

Depois que uma pull request for aberta, {% data variables.product.product_name %} armazena todas as alterações remotamente. Em outras palavras, os commits em uma pull request estão disponíveis em um repositório mesmo antes da pull request sofrer merge. Isso significa que é possível fazer fetch de uma pull request aberta e recriá-la como sua própria.

Qualquer pessoa pode abrir uma pull request anteriormente aberta para continuar trabalhando nela, testá-la ou, até mesmo, abrir uma nova pull request com alterações adicionais. No entanto, somente colaboradores com acesso push podem fazer merge de pull requests.

{% data reusables.repositories.sidebar-issue-pr %}
2. Na lista "Pull Requests", clique na pull request que deseja fazer merge.
3. Encontre o número da ID da pull request inativa. Essa é a sequência de dígitos certa após o título da pull request.
  ![Número da ID das Solicitações de Pull](/assets/images/help/pull_requests/pull_request_id_number.png) {% data reusables.command_line.open_the_multi_os_terminal %}
5. Faça fetch da referência à pull request com base no número da ID, criando um branch no processo.
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. Alterne para o novo branch que se baseia nesta pull request:
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
7. Nesse ponto, você pode fazer qualquer coisa que desejar com este branch. É possível executar alguns testes locais ou fazer merge de outros branches no branch.
8. Quando estiver pronto, você poderá fazer push do novo branch:
  ```shell
  [pull-inactive-pull-request] $ git push origin <em>BRANCHNAME</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repository</em>.git
  >  * [new branch]      <em>BRANCHNAME</em> -> <em>BRANCHNAME</em>
  ```
9. [Crie uma solicitação de pull](/articles/creating-a-pull-request) com seu novo branch.

## Erro: falha ao fazer push de algumas refs

O namespace `refs/pull/` remoto é *somente leitura*. Se você tentar fazer push de qualquer commit nele, este erro será exibido:
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**Dica:** quando você remover ou renomear uma referência remota, o namespace `refs/pull/origin/` local não será afetado por chamadas a `git-remote`.

{% endtip %}
