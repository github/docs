---
title: Sincronizar uma bifurcação
intro: Sincronize uma bifurcação de um repositório para mantê-la atualizada com o repositório upstream.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /articles/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
permissions: People with write access for a forked repository can sync the fork to the upstream repository.
ms.openlocfilehash: 85b149e26cb65a428d7e9b66aea99d6b62430ae0
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188325'
---
## Sincronizar um branch de fork usando a interface do usuário da Web

{% ifversion syncing-fork-web-ui %}
1. Em {% data variables.product.product_name %}, acesse a página principal do repositório bifurcado que você deseja sincronizar com o repositório upstream.
2. Selecione a lista suspensa **Sincronizar fork**.
    ![Menu suspenso "Sincronizar fork" enfatizado](/assets/images/help/repository/sync-fork-dropdown.png)
3. Revise os detalhes sobre os commits do repositório upstream e clique em **Atualizar branch**.
    ![Sincronizar o modal do fork com o botão "Atualizar branch" enfatizado](/assets/images/help/repository/update-branch-button.png) {% else %}
1. Em {% data variables.product.product_name %}, acesse a página principal do repositório bifurcado que você deseja sincronizar com o repositório upstream.
2. Selecione o menu suspenso **Buscar upstream**.
    ![Menu suspenso "Buscar upstream"](/assets/images/help/repository/fetch-upstream-drop-down.png)
3. Revise os detalhes sobre os commits do repositório upstream e clique em **Buscar e mesclar**.
    ![Botão "Buscar e mesclar"](/assets/images/help/repository/fetch-and-merge-button.png){% endif %}

Se as alterações do repositório a upstream gerarem conflitos, {% data variables.product.company_short %} solicitará a criação de um pull request para resolver os conflitos.

## Sincronizar um branch de fork com a {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Para saber mais sobre a {% data variables.product.prodname_cli %}, confira "[Sobre a {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Para atualizar o fork remoto por meio do próprio pai, use o subcomando `gh repo sync -b BRANCHNAME` e forneça o nome do fork como argumento.

```shell
$ gh repo sync owner/cli-fork -b BRANCH_NAME
```

Se as alterações do repositório upstream causarem conflito, a s {% data variables.product.prodname_cli %} não poderá sincronizá-las. Defina o sinalizador `-force` para substituir o branch de destino.

## Sincronizar um branch de fork usando a linha de comando

Para sincronizar o fork com um repositório upstream, você precisa configurar um controle remoto que aponte para o repositório upstream no Git. Para obter mais informações, confira "[Como configurar um repositório remoto para um fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork)".

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual para seu projeto local.
3. Obtenha os branches e os respectivos commits do repositório upstream. Os commits em `BRANCHNAME` serão armazenados no branch `upstream/BRANCHNAME` local.

  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
  >  * [new branch]      main     -> upstream/main
  ```

4. Faça check-out do branch padrão local do fork, neste caso, usamos o `main`.

  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```

5. Mescle as alterações do branch padrão upstream, neste caso, `upstream/main`, no branch padrão local. Isso coloca o branch padrão da bifurcação em sincronia com o repositório upstream, sem perder as alterações locais.

  ```shell
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ```
  
  Se o branch local não tiver commits exclusivos, o Git executará um avanço. Para obter mais informações, confira [Conceitos básicos de branch e mesclagem](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) na documentação do Git.
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ``` 
  Se o branch local tiver commits exclusivos, poderá ser necessário resolver conflitos. Para obter mais informações, confira "[Como resolver conflitos de mesclagem](/github/collaborating-with-pull-requests/addressing-merge-conflicts)".

{% tip %}

**Dica**: a sincronização do fork atualiza apenas a cópia local do repositório. Para atualizar o fork no {% data variables.location.product_location %}, você precisa [efetuar push das alterações](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}
