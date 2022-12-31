---
title: Alterar a mensagem do commit
redirect_from:
  - /articles/can-i-delete-a-commit-message
  - /articles/changing-a-commit-message
  - /github/committing-changes-to-your-project/changing-a-commit-message
  - /github/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message
intro: 'Se uma mensagem do commit contiver informações imprecisas, incorretas ou confidenciais, você poderá corrigi-las localmente e fazer push de um novo commit com uma nova mensagem para o {% data variables.product.product_name %}. Também é possível alterar uma mensagem do commit para adicionar informações ausentes.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fa4966da0fe443e6635b43fc9b3b11108d57cf6e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127173'
---
## Reescrever a mensagem do commit mais recente

Você pode alterar a mensagem de commit mais recente usando o comando `git commit --amend`.

No Git, o texto da mensagem do commit faz parte do commit. Alterar a mensagem do commit mudará o ID do commit, isto é, a soma de verificação SHA1 que nomeia o commit. Efetivamente, você está criando um commit que substitui o antigo.

## Não foi feito push on-line do commit

Se o commit existir no repositório local e não tiver sido publicado no {% data variables.product.product_location %}, você poderá corrigir a mensagem de commit com o comando `git commit --amend`.

1. Na linha de comando, navegue até o repositório que contém o commit que você deseja corrigir.
2. Digite `git commit --amend` e pressione **Enter**.
3. No editor de texto, edite a mensagem do commit e salve o commit.
    - Você pode adicionar um coautor incluindo um trailer no commit. Para obter mais informações, confira "[Como criar um commit com vários autores](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)".
{% ifversion fpt or ghec %}
    - É possível criar commits em nome da sua organização adicionando um trailer ao commit. Para obter mais informações, confira "[Como criar um commit em nome de uma organização](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)" {% endif %}

O novo commit e a mensagem aparecerão no {% data variables.product.product_location %} na próxima vez que você fizer push.

{% tip %}

Altere o editor de texto padrão do Git alterando a configuração `core.editor`. Para obter mais informações, confira "[Configuração básica do cliente](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)" no manual do Git.

{% endtip %}

## Corrigir mensagens do commit antigas ou em grandes quantidades

Se você já tiver feito push do commit no {% data variables.product.product_location %}, será necessário forçar o push de um commit com uma mensagem corrigida.

{% warning %}

O recomendável é evitar tanto quanto possível o push forçado, uma vez que isso altera o histórico do repositório. No caso de push forçado, as pessoas que já clonaram o repositório terão que corrigir manualmente o respectivo histórico local. Para obter mais informações, confira "[Como se recuperar da troca de base upstream](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)" no manual do Git.

{% endwarning %}

**Alteração da mensagem de commit enviada por psuh mais recentemente**

1. Siga as [etapas descritas acima](/articles/changing-a-commit-message#commit-has-not-been-pushed-online) para alterar a mensagem de commit.
2. Use o comando `push --force-with-lease` para forçar o push sobre o commit antigo.
  ```shell
  $ git push --force-with-lease origin <em>example-branch</em>
  ```

**Alteração das mensagens de commit mais antigo ou múltiplo**

Se precisar corrigir a mensagem de vários commits ou de um commit antigo, você pode usar o rebase interativo e, em seguida, forçar o push para alterar o histórico do commit.

1. Na linha de comando, navegue até o repositório que contém o commit que você deseja corrigir.
2. Use o comando `git rebase -i HEAD~n` para ver a lista dos últimos commits `n` no editor de texto padrão.

    ```shell
    # Displays a list of the last 3 commits on the current branch
    $ git rebase -i HEAD~3
    ```
    A lista ficará parecida com o seguinte:

    ```shell
    pick e499d89 Delete CNAME
    pick 0c39034 Better README
    pick f7fde4a Change the commit message but push the same commit.

    # Rebase 9fdb3bd..f7fde4a onto 9fdb3bd
    #
    # Commands:
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out
    ```
3. Substitua `pick` por `reword` antes de cada mensagem de commit que deseja alterar.
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. Salve e feche o arquivo da lista de commits.
5. Em cada arquivo de commit resultante, digite a nova mensagem do commit, salve o arquivo e feche-o.
6. Quando estiver pronto para fazer push das suas alterações para o GitHub, use o comando push --force para fazer push forçado sobre o commit antigo.
```shell
$ git push --force origin <em>example-branch</em>
```

Para obter mais informações sobre a troca de base interativa, confira "[Modo interativo](https://git-scm.com/docs/git-rebase#_interactive_mode)" no manual do Git.

{% tip %}

Tal como antes, corrigir a mensagem do commit resultará em um novo commit com um novo ID. No entanto, nesse caso, cada commit que segue o commit corrigido também obterá um novo ID, pois cada commit também contém o id de seu principal.

{% endtip %}

{% warning %}

Se você incluiu informações confidenciais em uma mensagem do commit, forçar o push de um commit com um commit corrigido pode não remover o commit original do {% data variables.product.product_name %}. O commit antigo não fará parte de um clone subsequente. No entanto, ele ainda poderá ser armazenado no cache do {% data variables.product.product_name %} e ser acessado por meio do ID do commit. Você deve contatar o {% data variables.contact.contact_support %} com o ID do commit antigo para que ele seja apagado do repositório remoto.

{% endwarning %}

## Leitura adicional

* "[Como assinar commits](/articles/signing-commits)"
