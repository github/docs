---
title: Obter links permanentes em arquivos
intro: 'Ao visualizar um arquivo em {% data variables.product.product_location %}, é possível pressionar a tecla "y" para atualizar a URL para um permalink com a versão exata do arquivo visualizado.'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url
  - /articles/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/managing-files-on-github/getting-permanent-links-to-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Permanent links to files
ms.openlocfilehash: 4e3d5ec282f7f7ba820094240698c88e298cdb69
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126944'
---
{% tip %}

**Dica**: pressione "?" em qualquer página do {% data variables.product.product_name %} para ver todos os atalhos de teclado disponíveis.

{% endtip %}

## As visualizações de arquivos mostram a versão mais recente de um branch

Ao visualizar um arquivo em {% data variables.product.product_location %}, normalmente você vê a versão do head atual de um branch.  Por exemplo:

* [https://github.com/github/codeql/blob/**main**/LEIAME.md](https://github.com/github/codeql/blob/main/README.md)

refere-se ao repositório `codeql` do GitHub e mostra a versão atual do branch `main` do arquivo `README.md`.

A versão de um arquivo no head de um branch pode ser modificada assim que novos commits são feitos. Desta forma, caso você copie a URL normal, os conteúdos dos arquivos podem não ser os mesmos quando outra pessoa olhá-los posteriormente.

## Pressione <kbd>Y</kbd> para criar um link permanente para um arquivo em um commit específico

Para obter um link permanente para a versão específica de um arquivo exibido, em vez de usar um nome de branch na URL (ou seja, a parte `main` no exemplo acima), coloque uma ID de commit. Isso será vinculado permanentemente à versão exata do arquivo nesse commit.  Por exemplo:

* [https://github.com/github/codeql/blob/**b212af08a6cffbb434f3c8a2795a579e092792fd**/LEIAME.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

substitui `main` por uma ID de commit específica e o conteúdo do arquivo não será alterado.

No entanto, pesquisar o SHA de commit manualmente é inconveniente. Portanto, como um atalho, você pode digitar <kbd>y</kbd> para atualizar automaticamente a URL para a versão de link permanente.  Em seguida, você pode copiar a URL sabendo que qualquer pessoa com quem você compartilhá-la verá exatamente o que você vê.

{% tip %}

**Dica**: você pode colocar qualquer identificador que possa ser resolvido para um commit na URL, incluindo nomes de branches, SHAs de commits específicos ou tags.

{% endtip %}

## Criar um link permanente em um trecho de código

É possível criar um link permanente em uma linha específica ou conjunto de linhas de código de uma determinada versão de arquivo ou pull request. Para obter mais informações, confira "[Como criar um link permanente para um snippet de código](/articles/creating-a-permanent-link-to-a-code-snippet/)".

## Leitura adicional

- "[Como arquivar um repositório do GitHub](/articles/archiving-a-github-repository)"
