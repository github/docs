---
title: Remover arquivos do histórico do repositório
intro: 'Para remover um arquivo grande do repositório, você deve removê-lo completamente do repositório local e do {% data variables.product.product_location %}.'
redirect_from:
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% warning %}

**Aviso**: estes procedimentos removem definitivamente os arquivos do repositório no computador e no {% data variables.product.product_location %}. Se o arquivo for importante, faça uma cópia de backup local em um diretório fora do repositório.

{% endwarning %}

### Remover um arquivo adicionado ao commit não processado mais recente

Se o arquivo foi adicionado ao commit mais recente e ainda não foi processado no {% data variables.product.product_location %}, você poderá excluir o arquivo e corrigir o commit:

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. Para remover o arquivo, insira `git rm --cached`:
  ```shell
  $ git rm --cached <em>giant_file</em>
  # Stage our giant file for removal, but leave it on disk
  ```
4. Faça o commit da alteração usando `--amend -CHEAD`:
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. Faça push dos commits para {% data variables.product.product_location %}:
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### Remover um arquivo adicionado em um commit anterior

Se você adicionou um arquivo em um commit anterior, você deverá removê-lo do histórico do repositório. Para remover arquivos do histórico do repositório, você pode usar o comando BFG Repo-Cleaner ou o `git filter-branch`. Para obter mais informações, consulte "[Remover dados confidenciais de um repositório](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)".
