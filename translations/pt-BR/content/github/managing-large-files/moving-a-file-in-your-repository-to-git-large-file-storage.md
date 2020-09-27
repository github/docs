---
title: Mover um arquivo do repositório para o Git Large File Storage
intro: 'Se você configurou o {{ site.data.variables.large_files.product_name_short }} e tem um arquivo em seu repositório que precisa ser rastreado no {{ site.data.variables.large_files.product_name_short }}, primeiramente você precisa removê-lo do repositório.'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Depois de instalar o {{ site.data.variables.large_files.product_name_short }} e configurar o rastreamento do {{ site.data.variables.large_files.product_name_short }}, você pode mover arquivos do rastreamento regular do Git para o {{ site.data.variables.large_files.product_name_short }}. Para obter mais informações, consulte "[Instalando {{ site.data.variables.large_files.product_name_long }}](/github/managing-large-files/installing-git-large-file-storage)" e "[Configurando o {{ site.data.variables.large_files.product_name_long }}](/github/managing-large-files/configuring-git-large-file-storage)".

{{ site.data.reusables.large_files.resolving-upload-failures }}

{% tip %}

**Dica:** se você receber um erro informando que "o tamanho do arquivo {{ site.data.variables.large_files.product_name_short }} excede o limite de {{ site.data.variables.large_files.max_github_size }}" quando você tentar fazer push de arquivos para o Git, é possível usar `git lfs migrate` (migração git lfs) em vez de `filter branch` (filtrar branch) ou o BFG Repo Cleaner para mover o arquivo grande para o {{ site.data.variables.large_files.product_name_long }}. Para obter mais informações sobre o comando `git lfs migrate` (migração git lfs), consulte o comunicado da versão [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released).

{% endtip %}

1.  Remova o arquivo do histórico do repositório do Git usando o comando `filter-branch` ou o BFG Repo Cleaner. Para obter mais informações, consulte "[Remover dados confidenciais do repositório](/articles/removing-sensitive-data-from-a-repository)".
2. Configure o rastreamento do arquivo e faça push dele para o {{ site.data.variables.large_files.product_name_short }}. Para obter mais informações sobre esse procedimento, consulte "[Configurar o {{ site.data.variables.large_files.product_name_long }}](/articles/configuring-git-large-file-storage)".

### Leia mais

- "[Sobre o {{ site.data.variables.large_files.product_name_long }}](/articles/about-git-large-file-storage)"
- "[Colaboração com o {{ site.data.variables.large_files.product_name_long }}](/articles/collaboration-with-git-large-file-storage/)"
- "[Instalar o {{ site.data.variables.large_files.product_name_long }}](/articles/installing-git-large-file-storage)"
