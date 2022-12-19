---
title: Criar arquivos
intro: 'Você pode criar arquivos diretamente no {% data variables.product.product_name %} em qualquer repositório no qual tenha acesso de gravação.'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
  - /github/managing-files-in-a-repository/managing-files-on-github/creating-new-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 1acc03b74e037db35a612cd9173e995bbf9e5271
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126980'
---
Ao criar um arquivo no {% data variables.product.product_name %}, lembre-se do seguinte:

- Se você tentar criar um arquivo em um repositório ao qual não tem acesso, criaremos uma bifurcação do projeto para sua conta pessoal e ajudaremos você a enviar [uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) para o repositório original depois que você fizer commit da alteração.
- Os nomes de arquivos criados por meio da interface da Web só podem conter caracteres alfanuméricos e hifens (`-`). Para usar outros caracteres, [crie os arquivos localmente e faça commit deles e, em seguida, efetue push deles para o repositório do {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository-using-the-command-line).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. No seu repositório, navegue até a pasta em que deseja criar um arquivo.
{% data reusables.files.add-file %}
4. No campo do nome de arquivo, digite o nome e a extensão do arquivo. Para criar subdiretórios, digite o separador de diretório `/`.
![Nome do novo arquivo](/assets/images/help/repository/new-file-name.png)
5. Na guia **Editar novo arquivo**, adicione um conteúdo ao arquivo.
![Conteúdo no novo arquivo](/assets/images/help/repository/new-file-content.png)
6. Para revisar o novo conteúdo, clique em **Visualizar**.
![Botão de visualização de novo arquivo](/assets/images/help/repository/new-file-preview.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
