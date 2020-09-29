---
title: Alterar a mensagem do commit
redirect_from:
  - /articles/can-i-delete-a-commit-message/
  - /articles/changing-a-commit-message
intro: 'Se uma mensagem do commit contiver informações imprecisas, incorretas ou confidenciais, você poderá corrigi-las localmente e fazer push de um novo commit com uma nova mensagem para o {% data variables.product.product_name %}. Também é possível alterar uma mensagem do commit para adicionar informações ausentes.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Reescrever a mensagem do commit mais recente

Você pode alterar a mensagem do commit mais recente usando o comando `git commit --amend`.

{% warning %}

No Git, o texto da mensagem do commit faz parte do commit. Alterar a mensagem do commit mudará a ID do commit, isto é, a soma de verificação SHA1 que nomeia o commit. Efetivamente, você está criando um commit que substitui o antigo.

{% endwarning %}

#### Não foi feito push online do commit

Se o commit existir em seu repositório local e não tiver sido publicado no {% data variables.product.product_location %}, você poderá corrigir a mensagem do commit com o comando `git commit --amend`.

1. Na linha de comando, navegue até o repositório que contém o commit que você deseja corrigir.
2. Digite `git commit --amend` e pressione **Enter**.
3. No editor de texto, edite a mensagem do commit e salve o commit.
    - Você pode adicionar um coautor incluindo um trailer no commit. Para obter mais informações, consulte "[Criar um commit com vários autores](/articles/creating-a-commit-with-multiple-authors)".
{% if currentVersion == "free-pro-team@latest" %}
    - É possível criar commits em nome da sua organização adicionando um trailer ao commit. Para obter mais informações, consulte "[Criar um commit em nome de uma organização](/articles/creating-a-commit-on-behalf-of-an-organization)"
{% endif %}

O novo commit e a mensagem aparecerão no {% data variables.product.product_location %} na próxima vez que você fizer push.

{% tip %}

Você pode alterar o editor de texto padrão do Git mudando a configuração `core.editor`. Para obter mais informações, consulte a seção sobre a "[configuração básica de cliente](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)" no manual do Git.

{% endtip %}

#### Corrigir mensagens do commit antigas ou em grandes quantidades

Se você já tiver feito push do commit no {% data variables.product.product_location %}, será necessário forçar o push de um commit com uma mensagem corrigida.

{% warning %}

O recomendável é evitar tanto quanto possível o push forçado, uma vez que isso altera o histórico do repositório. No caso de push forçado, as pessoas que já clonaram o repositório terão que corrigir manualmente o respectivo histórico local. Para obter mais informações, consulte a seção sobre como "[recuperar usando rebase upstream](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)" no manual do Git.

{% endwarning %}

**Corrigir a mensagem do commit com push mais recente**

1. Siga as [etapas acima](/articles/changing-a-commit-message#commit-has-not-been-pushed-online) para corrigir a mensagem do commit.
2. Use o comando `push --force` para forçar o push sobre o commit antigo.
  ```shell
  $ git push --force <em>example-branch</em>
  ```

**Corrigir mensagens do commit antigas ou em grandes quantidades**

Se precisar corrigir a mensagem de vários commits ou de um commit antigo, você pode usar o rebase interativo e, em seguida, forçar o push para alterar o histórico do commit.

1. Na linha de comando, navegue até o repositório que contém o commit que você deseja corrigir.
2. Use o comando `git rebase -i HEAD~n` para exibir uma lista dos `n` últimos commits no seu editor de texto padrão.

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
    # Comandos:
    # p, pick = usar commit
    # r, reword = usar commit, mas editar a mensagem do commit
    # e, edit = usar commit, mas interromper para correção
    # s, squash = usar commit, mas combinar com commit anterior
    # f, fixup = como "squash", mas descartar a mensagem de log do commit
    # x, exec = executar o comando (o restante da linha) usando shell
    #
    # Essas linhas podem ser reordenadas; elas são executadas de cima para baixo.
    #
    # Se você remover uma linha aqui ESSE COMMIT SERÁ PERDIDO.
    #
    # No entanto, se você remover tudo, o rebase será anulado.
    #
    # Observe que commits vazios são comentados
    ```

3. Substitua `pick` por `reword` antes de cada mensagem do commit que deseja alterar.
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. Salve e feche o arquivo da lista de commits.
5. Em cada arquivo de commit resultante, digite a nova mensagem do commit, salve o arquivo e feche-o.
6. Force o push dos commits corrigidos.
  ```shell
  $ git push --force
  ```

Para obter mais informações sobre rebase interativo, consulte a seção sobre o "[modo interativo](https://git-scm.com/docs/git-rebase#_interactive_mode)" no manual do Git.

{% tip %}

Tal como antes, corrigir a mensagem do commit resultará em um novo commit com uma nova ID. No entanto, nesse caso, cada commit que segue o commit corrigido também obterá uma nova ID, pois cada commit também contém a id de seu principal.

{% endtip %}

{% warning %}

Se você incluiu informações confidenciais em uma mensagem do commit, forçar o push de um commit com um commit corrigido pode não remover o commit original do {% data variables.product.product_name %}. O commit antigo não fará parte de um clone subsequente. No entanto, ele ainda poderá ser armazenado no cache do {% data variables.product.product_name %} e ser acessado por meio da ID do commit. Você deve contatar o {% data variables.contact.contact_support %} com a ID do commit antigo para que ele seja apagado do repositório remoto.

{% endwarning %}

### Leia mais

* "[Assinar commits](/articles/signing-commits)"
