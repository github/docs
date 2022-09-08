---
title: Configurar o GitLarge File Storage
intro: 'Assim que o [{% data variables.large_files.product_name_short %} for instalado](/articles/installing-git-large-file-storage/), você precisará associá-lo a um arquivo grande no seu repositório.'
redirect_from:
  - /articles/configuring-large-file-storage
  - /articles/configuring-git-large-file-storage
  - /github/managing-large-files/configuring-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/configuring-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Configure Git LFS
ms.openlocfilehash: 363e89be0c729b8ea6d5313cec0c7ce61654f229
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331757'
---
Se houver arquivos no seu repositório com os quais deseja usar o {% data variables.product.product_name %}, você precisará primeiramente removê-los do repositório e, em seguida, adicioná-los ao {% data variables.large_files.product_name_short %} no local. Para obter mais informações, confira "[Como mover um arquivo do seu repositório para o {% data variables.large_files.product_name_short %}](/articles/moving-a-file-in-your-repository-to-git-large-file-storage)".

{% data reusables.large_files.resolving-upload-failures %}

{% ifversion ghes or ghae %}

{% tip %}

**Observação:** antes de tentar efetuar push de um arquivo grande no {% data variables.product.product_name %}, verifique se você habilitou o {% data variables.large_files.product_name_short %} no seu aplicativo. Para obter mais informações, confira "[Como configurar o Git Large File Storage no GitHub Enterprise Server](/enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/)".

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual para um repositório existente que deseja usar com o {% data variables.large_files.product_name_short %}.
3. Para associar um tipo de arquivo no seu repositório ao {% data variables.large_files.product_name_short %}, insira `git {% data variables.large_files.command_name %} track` seguido do nome da extensão de arquivo que deseja carregar automaticamente no {% data variables.large_files.product_name_short %}.

  Por exemplo, para associar um arquivo _.psd_, insira o seguinte comando:
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  Todos os tipos de arquivos que você deseja associar ao {% data variables.large_files.product_name_short %} precisarão ser adicionados com `git {% data variables.large_files.command_name %} track`. Esse comando corrige o arquivo *.gitattributes* do repositório e associa arquivos grandes ao {% data variables.large_files.product_name_short %}.

  {% note %}

  **Observação:** sugerimos fortemente que você faça commit do arquivo *.gitattributes* local no seu repositório.

    - Depender de um arquivo *.gitattributes* global associado ao {% data variables.large_files.product_name_short %} pode causar conflitos durante a contribuição com outros projetos do Git.
    - A inclusão do arquivo *.gitattributes* no repositório permite que as pessoas que criam bifurcações ou clones novos colaborem com mais facilidade usando o {% data variables.large_files.product_name_short %}.
    - A inclusão do arquivo *.gitattributes* no repositório permite que objetos do {% data variables.large_files.product_name_short %} sejam incluídos opcionalmente em arquivos ZIP e arquivos tarball.

  {% endnote %}

4. Adicione um arquivo ao repositório correspondente à extensão associada:
  ```shell
  $ git add path/to/file.psd
  ```
5. Faça commit do arquivo e faça push dele no {% data variables.product.product_name %}:
  ```shell
  $ git commit -m "add file.psd"
  $ git push
  ```
  Você deve ver algumas informações de diagnóstico sobre o upload do arquivo:
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

## Leitura adicional

- "[Colaboração com o {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"{% ifversion fpt or ghec %}
- "[Como gerenciar objetos do {% data variables.large_files.product_name_short %} nos arquivos do repositório](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)"{% endif %}
