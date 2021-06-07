---
title: Resolver falhas de upload do Git Large File Storage
intro: 'Se não conseguir fazer upload dos seus arquivos do {% data variables.large_files.product_name_short %}, siga as etapas para tentar resolver o erro de upload.'
redirect_from:
  - /articles/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/resolving-git-large-file-storage-upload-failures
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
A verificação de integridade do {% data variables.large_files.product_name_short %} verifica se todos os arquivos referenciados do {% data variables.large_files.product_name_short %} em um push foram transferidos corretamente. Se a verificação identificar arquivos referenciados que não foram transferidos, você receberá uma mensagem de erro e o push será bloqueado.

Para resolver a mensagem de erro, você deve reinstalar o cliente local do {% data variables.large_files.product_name_short %} para garantir que os arquivos do {% data variables.large_files.product_name_short %} referenciados possam ser carregados corretamente no futuro.

1. Abra o terminal.
2. Reinstale o {% data variables.large_files.product_name_short %}.
  ```shell
  $ git lfs install
  ```
3. Faça o push de todos os arquivos do {% data variables.large_files.product_name_short %} referenciados.
  ```shell
  $ git lfs push --all origin
  ```
