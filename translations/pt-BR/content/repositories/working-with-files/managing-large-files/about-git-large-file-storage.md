---
title: Sobre armazenamento de arquivo grande do Git
intro: '{% data variables.product.product_name %} limita o tamanho dos arquivos permitidos nos repositórios. Para rastrear arquivos além desse limite, você pode usar {% data variables.large_files.product_name_long %}.'
redirect_from:
  - /articles/about-large-file-storage
  - /articles/about-git-large-file-storage
  - /github/managing-large-files/about-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/about-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git Large File Storage
ms.openlocfilehash: f0ab54791645dc5c36cce2880ba3ae5c9b705f35
ms.sourcegitcommit: 06726d24e73f1175f10749d6fdcf143d6094c9a5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118740'
---
## Sobre o {% data variables.large_files.product_name_long %}

O {% data variables.large_files.product_name_short %} manipula arquivos grandes armazenando referências ao arquivo no repositório, mas não no próprio arquivo. Para explorar a arquitetura do Git, o {% data variables.large_files.product_name_short %} cria um arquivo de ponteiro que funciona como uma referência ao arquivo real (que é armazenado em outro lugar). O {% data variables.product.product_name %} gerencia esse arquivo de ponteiro no seu repositório. Quando você clona o repositório, o {% data variables.product.product_name %} usa o arquivo de ponteiro como um mapa para encontrar o arquivo grande para você.

{% ifversion fpt or ghec %} Usando o {% data variables.large_files.product_name_short %}, você pode armazenar arquivos até:

| Produto | Tamanho máximo do arquivo |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 2 GB |
| {% data variables.product.prodname_pro %} | 2 GB |
| {% data variables.product.prodname_team %} | 4 GB |
| {% data variables.product.prodname_ghe_cloud %} | 5 GB |{% else %}
Ao usar {% data variables.large_files.product_name_short %}, você pode armazenar arquivos de até 5 GB no seu repositório.
{% endif %} 

{% data reusables.repositories.git-lfs %}

Também é possível usar o {% data variables.large_files.product_name_short %} com o {% data variables.product.prodname_desktop %}. Para obter mais informações sobre como clonar repositórios do Git LFS no {% data variables.product.prodname_desktop %}, confira "[Como clonar um repositório do GitHub para o GitHub Desktop](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)".

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Formato do arquivo de ponteiro

O arquivo de ponteiro do {% data variables.large_files.product_name_short %} tem esta aparência:

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

Ele rastreia a `version` do {% data variables.large_files.product_name_short %} que está sendo usada, seguido de um identificador exclusivo para o arquivo (`oid`). Além disso, armazena o `size` do arquivo final.

{% note %}

**Observações**:
- {% data variables.large_files.product_name_short %} não pode ser usado com sites de {% data variables.product.prodname_pages %}.
- {% data variables.large_files.product_name_short %} não pode ser usado com repositórios de modelos.
  
{% endnote %}

## Leitura adicional

- "[Colaboração com o {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage)"
