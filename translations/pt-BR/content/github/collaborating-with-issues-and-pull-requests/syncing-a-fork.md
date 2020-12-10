---
title: Sincronizar uma bifurcação
intro: Sincronize uma bifurcação de um repositório para mantê-la atualizada com o repositório upstream.
redirect_from:
  - /articles/syncing-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Para poder sincronizar a bifurcação com o repositório upstream, você deve [configurar um remote que aponte para o repositório upstream](/articles/configuring-a-remote-for-a-fork) no Git.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual referente ao seu projeto local.
3. Obtenha os branches e os respectivos commits do repositório upstream. Os commits para `BRANCHNAME` serão armazenados no branch local `upstream/BRANCHNAME`.
  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compactação de objetos: 100% (53/53), concluída.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>
  >  * [new branch]      main     -> upstream/main
  ```
4. Faça o checkout do branch padrão local da sua bifurcação - neste caso, nós usamos o `principal`.
  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```
5. Faça merge das alterações do branch padrão upstream - nesse caso, `upstream/main` - no seu branch padrão local. Isso coloca o branch padrão da bifurcação em sincronia com o repositório upstream, sem perder as alterações locais.
  ```shell
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ``` If your local branch didn't have any unique commits, Git will instead perform a "fast-forward":
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ```

{% tip %}

**Dica**: a sincronização da bifurcação só atualiza a cópia local do repositório. Para atualizar a bifurcação no {% data variables.product.product_location %}, você precisa [fazer push das alterações](/articles/pushing-commits-to-a-remote-repository/).

{% endtip %}
