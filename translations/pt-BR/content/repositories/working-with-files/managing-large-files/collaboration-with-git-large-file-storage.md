---
title: Colaboração com o Git Large File Storage
intro: 'Com o {% data variables.large_files.product_name_short %} habilitado, você poderá fazer fetch, modificar e fazer push de arquivos grandes, assim como em qualquer arquivo gerenciado pelo Git. No entanto, um usuário que não tem o {% data variables.large_files.product_name_short %} verá um fluxo de trabalho diferente.'
redirect_from:
  - /articles/collaboration-with-large-file-storage
  - /articles/collaboration-with-git-large-file-storage
  - /github/managing-large-files/collaboration-with-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/collaboration-with-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Collaboration
ms.openlocfilehash: 4589487059e2949da64ebf40e8a602703fed2c01
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126960'
---
Se os colaboradores no seu repositório não tiverem o {% data variables.large_files.product_name_short %} instalado, eles não terão acesso ao arquivo grande original. Se tentarem clonar o repositório, eles farão fetch apenas dos arquivos de ponteiro e não terão acesso aos dados reais.

{% tip %}

**Dica:** para ajudar os usuários sem o {% data variables.large_files.product_name_short %} habilitado, recomendamos definir diretrizes para colaboradores do repositório que descrevam como trabalhar com arquivos grandes. Por exemplo, você pode pedir aos colaboradores que não modifiquem arquivos grandes nem carreguem alterações em um serviço de compartilhamento de arquivos, como o [Dropbox](http://www.dropbox.com/) ou o <a href="https://drive.google.com/" data-proofer-ignore>Google Drive</a>. Para obter mais informações, confira "[Como definir diretrizes para colaboradores do repositório](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".

{% endtip %}

## Exibir arquivos grandes em pull requests

O {% data variables.product.product_name %} não renderiza objetos do {% data variables.large_files.product_name_short %} em pull requests. Apenas o arquivo de ponteiro é mostrado:

![Amostra de PR para arquivos grandes](/assets/images/help/large_files/large_files_pr.png)

Para obter mais informações sobre arquivos de ponteiro, confira "[Sobre o {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)".

Para ver as alterações feitas em arquivos grandes, confira o pull request localmente para revisar a diferença. Para obter mais informações, confira "[Como verificar as solicitações de pull localmente](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)".

{% ifversion fpt or ghec %}

## Fazer push de arquivos grandes em bifurcações

Fazer push de arquivos grandes em bifurcações de um repositório conta nas cotas de armazenamento e na largura de banda do repositório principal, e não nas cotas do proprietário da bifurcação.

É possível fazer push de objetos do {% data variables.large_files.product_name_short %} em bifurcações públicas se a rede do repositório já tiver objetos do {% data variables.large_files.product_name_short %} ou se você tiver acesso de gravação à raiz da rede do repositório.

{% endif %}

## Leitura adicional

- "[Como duplicar um repositório com objetos do Git Large File Storage](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)"
