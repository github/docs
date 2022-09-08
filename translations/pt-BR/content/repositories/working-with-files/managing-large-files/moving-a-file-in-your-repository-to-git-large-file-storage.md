---
title: Mover um arquivo do repositório para o Git Large File Storage
intro: 'Se você configurou o {% data variables.large_files.product_name_short %} e tem um arquivo em seu repositório que precisa ser rastreado no {% data variables.large_files.product_name_short %}, primeiramente você precisa removê-lo do repositório.'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Move a file to Git LFS
ms.openlocfilehash: fc03edc2ef82be8d7edb106a8c4a2a0b8efbeedb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126956'
---
Depois de instalar o {% data variables.large_files.product_name_short %} e configurar o rastreamento do {% data variables.large_files.product_name_short %}, você pode mover arquivos do rastreamento regular do Git para o {% data variables.large_files.product_name_short %}. Para obter mais informações, confira "[Como instalar o {% data variables.large_files.product_name_long %}](/github/managing-large-files/installing-git-large-file-storage)" e "[Como configurar o {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)".

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**Dica:** se você receber um erro indicando que "isso excede o limite de tamanho de arquivo do {% data variables.large_files.product_name_short %} de {% data variables.large_files.max_github_size %}" ao tentar efetuar push de arquivos para o Git, use `git lfs migrate` em vez de `filter branch` ou o BFG Repo Cleaner, para mover o arquivo grande para o {% data variables.large_files.product_name_long %}. Para obter mais informações sobre o comando `git lfs migrate`, confira o comunicado sobre a versão [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released).

{% endtip %}

1.  Remova o arquivo do histórico Git do repositório usando o comando `filter-branch` ou o BFG Repo-Cleaner. Para obter informações detalhadas sobre como usá-los, confira "[Como remover dados confidenciais de um repositório](/articles/removing-sensitive-data-from-a-repository)".
2. Configure o rastreamento do arquivo e faça push dele para o {% data variables.large_files.product_name_short %}. Para obter mais informações sobre esse procedimento, confira "[Como configurar o {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)".

## Leitura adicional

- "[Sobre o {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)"
- "[Colaboração com o {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"
- "[Como instalar o {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)"
