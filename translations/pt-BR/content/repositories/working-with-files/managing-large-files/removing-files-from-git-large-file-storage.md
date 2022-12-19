---
title: Remover arquivos do Git Large File Storage
intro: 'Se o {% data variables.large_files.product_name_short %} estiver configurado no repositório, você poderá remover todos os arquivos ou um subconjunto de arquivos do {% data variables.large_files.product_name_short %}.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
  - /github/managing-large-files/removing-files-from-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/removing-files-from-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove files
ms.openlocfilehash: 4aa8b6789a916616b43b2b995174e64e25856ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126955'
---
## Remover um único arquivo

1.  Remova o arquivo do histórico Git do repositório usando o comando `filter-branch` ou o BFG Repo-Cleaner. Para obter informações detalhadas sobre como usá-los, confira "[Como remover dados confidenciais de um repositório](/articles/removing-sensitive-data-from-a-repository)".
2. Procure o arquivo *.gitattributes*.

  {% note %}

  **Observação:** o arquivo *.gitattributes* costuma ser salvo no repositório local. Em alguns casos, talvez você tenha criado um arquivo *.gitattributes* global que contém todas as associações do {% data variables.large_files.product_name_short %}.

  {% endnote %}
3. Encontre e remova a regra de acompanhamento associada do {% data variables.large_files.product_name_short %} no arquivo *.gitattributes*.
4. Salve e saia do arquivo *.gitattributes*.

## Remover todos os arquivos de um repositório do {% data variables.large_files.product_name_short %}

1. Remova os arquivos do histórico do Git do repositório usando o comando `filter-branch` ou o BFG Repo-Cleaner. Para obter informações detalhadas sobre como usá-los, confira "[Como remover dados confidenciais de um repositório](/articles/removing-sensitive-data-from-a-repository)".
2. Como opção, para desinstalar o {% data variables.large_files.product_name_short %} do repositório, execute:
  ```shell
  $ git lfs uninstall
  ```
  Para versões do {% data variables.large_files.product_name_short %} inferiores à 1.1.0, execute:
  ```shell
  $ git lfs uninit
  ```

## Objetos do {% data variables.large_files.product_name_short %} no repositório

Quando você remove arquivos do {% data variables.large_files.product_name_short %}, os objetos do {% data variables.large_files.product_name_short %} permanecem no armazenamento remoto{% ifversion fpt or ghec %} e são considerados na cota de armazenamento do {% data variables.large_files.product_name_short %}{% endif %}.

Para remover objetos do {% data variables.large_files.product_name_short %} de um repositório, {% ifversion fpt or ghec %}exclua e recrie o repositório. Ao excluir um repositório, todos os problemas associados, estrelas e bifurcações também serão excluídos. Para obter mais informações, confira "[Como excluir um repositório](/github/administering-a-repository/deleting-a-repository)". Caso precise limpar um objeto removido e não consegua excluir o repositório, [entre em contato com o suporte](/github/working-with-github-support) para obter ajuda.{% else %}entre em contato com o administrador do {% data variables.product.prodname_enterprise %} para arquivar os objetos. Os objetos arquivados são excluídos após três meses.{% endif %}

{% note %}

**Observação:** se você removeu um só arquivo e deseja manter outros objetos do {% data variables.large_files.product_name_short %} no repositório, reconfigure os arquivos associados do {% data variables.large_files.product_name_short %} depois de excluir e recriar o repositório. Para obter mais informações, confira "[Como remover um arquivo individual](#removing-a-single-file)" e "[Como configurar o {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)".

{% endnote %}

## Leitura adicional

- "[Sobre o {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)"
- "[Colaboração com o {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"
- "[Como instalar o {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)"
