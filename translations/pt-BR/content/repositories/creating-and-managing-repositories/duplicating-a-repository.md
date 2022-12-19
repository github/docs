---
title: Duplicar um repositório
intro: 'Para manter um espelho de um repositório sem a bifurcação, é possível executar um comando especial de clone e, em seguida, fazer push do espelho para o novo repositório.'
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 4c893597918cb4837e88d13aa6a51b769ab13dd1
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135483'
---
{% ifversion fpt or ghec %}

{% note %}

**Observação:** se você tem um projeto hospedado em outro sistema de controle de versão, importe automaticamente seu projeto para o {% data variables.product.prodname_dotcom %} usando a ferramenta Importador do {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Sobre o Importador do {% data variables.product.prodname_dotcom %}](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)".

{% endnote %}

{% endif %}

Antes de efetuar push do repositório original para a nova cópia ou _espelho_ do repositório, você precisa [criar o repositório](/articles/creating-a-new-repository) no {% data variables.location.product_location %}. Nesses exemplos, `exampleuser/new-repository` ou `exampleuser/mirrored` são os espelhos.

## Espelhar um repositório

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crie um clone bare do repositório.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. Faça espelhamento/push no novo repositório.
  ```shell
  $ cd OLD-REPOSITORY.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
4. Remova o repositório local temporário que você criou anteriormente.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## Espelhar um repositório que contém objetos do {% data variables.large_files.product_name_long %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crie um clone bare do repositório. Substitua o exemplo de nome de usuário pelo nome da pessoa ou da organização a quem pertence o repositório e substitua o exemplo de nome de repositório pelo nome do repositório que você deseja duplicar.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. Navegue até o repositório que você acabou de clonar.
  ```shell
  $ cd OLD-REPOSITORY.git
  ```
4. Extraia os objetos do {% data variables.large_files.product_name_long %} do repositório.
  ```shell
  $ git lfs fetch --all
  ```
5. Faça espelhamento/push no novo repositório.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
6. Faça push nos objetos do {% data variables.large_files.product_name_long %} do repositório no seu espelho.
  ```shell
  $ git lfs push --all https://github.com/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
7. Remova o repositório local temporário que você criou anteriormente.
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## Espelhar um repositório em outro local

Se você deseja espelhar um repositório em outro local e ainda obter atualizações do original, é possível clonar um espelho e fazer push das alterações periodicamente.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crie um clone bare espelhado do repositório.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/REPOSITORY-TO-MIRROR.git
  ```
3. Defina o local de push no espelho.
  ```shell
  $ cd REPOSITORY-TO-MIRROR
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/MIRRORED
  ```
Assim como um clone bare, um clone espelhado inclui todos os branches remotes e tags, mas todas as referências locais serão substituídas todas as vezes que você fizer fetch, assim ele sempre será o mesmo do repositório original. O push no espelho é simplificado pela configuração da URL para pushes.

4. Para atualizar o espelho, obtenha atualizações e faça push.
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %}
## Leitura adicional

* "[Como efetuar push das alterações para o GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)"
* "[Sobre o Git Large File Storage e o GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)"
* "[Sobre o Importador do GitHub](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)"

{% endif %}
