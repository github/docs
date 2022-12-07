---
title: Práticas recomendadas para repositórios
shortTitle: Best practices
intro: Saiba como usar os repositórios de maneira mais eficaz.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f14bef158431c8251f26a4d917f4207d8e7dbc8a
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163433'
---
## Criar um arquivo LEIAME

Para que as pessoas possam entender e navegar mais facilmente por seu trabalho, crie um arquivo LEIAME para cada repositório. 

{% data reusables.repositories.about-READMEs %} Para saber mais, confira "[Sobre LEIAMEs](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)".

## Preferir branches a forks

Para simplificar a colaboração, recomenda-se que os colaboradores regulares trabalhem em um único repositório, criando solicitações de pull entre branches em vez de entre repositórios. O uso de fork é mais adequado para aceitar contribuições de pessoas não afiliadas a um projeto, como colaboradores de código aberto.

Para manter a qualidade de branches importantes, como `main`, ao usar um fluxo de trabalho de branch, é possível usar branches protegidos com verificações de status obrigatórias e revisões de solicitação de pull. Para obter mais informações, confira "[Sobre os branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)".

## Usar o {% data variables.large_files.product_name_long %}

Para otimizar o desempenho, o {% data variables.location.product_location %} limita os tamanhos de arquivo permitidos nos repositórios. Para saber mais, confira "[Sobre arquivos grandes no {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github)".

Para rastrear arquivos grandes em um repositório Git, recomenda-se usar o {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Para obter mais informações, confira "[Sobre o {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)".
