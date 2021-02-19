---
title: Configurar o GitLarge File Storage
intro: 'Assim que o [{% data variables.large_files.product_name_short %} estiver instalado](/articles/installing-git-large-file-storage/), você precisará associá-lo a um arquivo grande no seu repositório.'
redirect_from:
  - /articles/configuring-large-file-storage/
  - /articles/configuring-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Se houver arquivos no seu repositório com os quais deseja usar o {% data variables.product.product_name %}, você precisará primeiramente removê-los do repositório e, em seguida, adicioná-los ao {% data variables.large_files.product_name_short %} no local. Para obter mais informações, consulte "[Mover um arquivo do repositório para o {% data variables.large_files.product_name_short %}](/articles/moving-a-file-in-your-repository-to-git-large-file-storage)".

{% data reusables.large_files.resolving-upload-failures %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

{% tip %}

**Observação:** antes de tentar fazer push de um arquivo grande no {% data variables.product.product_name %}, certifique-se de que habilitou o {% data variables.large_files.product_name_short %} no seu aplicativo. Para obter mais informações, consulte "[Configurar o Git Large File Storage no GitHub Enterprise Server](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/)".

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual para um repositório existente que deseja usar com o {% data variables.large_files.product_name_short %}.
3. Para associar um tipo de arquivo no repositório ao {% data variables.large_files.product_name_short %}, digite `git {% data variables.large_files.command_name %} track` seguido pelo nome da extensão do arquivo do qual deseja fazer upload automaticamente no {% data variables.large_files.product_name_short %}.

  Por exemplo, para associar um arquivo _.psd_, digite o seguinte comando:
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  Cada tipo de arquivo que desejar associar ao {% data variables.large_files.product_name_short %} precisará ser adicionado com `git {% data variables.large_files.command_name %} track`. Esse comando corrige o arquivo *.gitattributes* do repositório e associa arquivos grandes ao {% data variables.large_files.product_name_short %}.

  {% tip %}

  **Dica:** sugerimos enfaticamente que você faça commit do arquivo *.gitattributes* local no repositório. Depender de um arquivo *.gitattributes* global associado ao {% data variables.large_files.product_name_short %} pode causar conflitos durante a contribuição com outros projetos do Git.

  {% endtip %}

4. Adicione um arquivo ao repositório correspondente à extensão associada:
  ```shell
  $ git add path/to/file.psd
  ```
5. Faça commit do arquivo e faça push dele no {% data variables.product.product_name %}:
  ```shell
  $ git commit -m "add file.psd"
  $ git push origin master
  ```
  Você deve ver algumas informações de diagnóstico sobre o upload do arquivo:
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

### Leia mais

- "[Colaboração com {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
- "[Gerenciando {% data variables.large_files.product_name_short %} objetos nos arquivos de seu repositório](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)"{% endif %}
