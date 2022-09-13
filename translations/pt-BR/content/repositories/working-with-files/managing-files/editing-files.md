---
title: Editando arquivos
intro: 'Com o editor de arquivos, você pode editar arquivos diretamente no {% data variables.product.product_name %} em qualquer dos seus repositórios.'
redirect_from:
  - /articles/editing-files
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
  - /articles/editing-files-in-another-user-s-repository
  - /github/managing-files-in-a-repository/editing-files-in-another-users-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Edit files
ms.openlocfilehash: 515b773aaa9dd2a93d6c0b4b70adb3ef10afe082
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126977'
---
## Editar arquivos no seu repositório

{% tip %}

**Dica**: {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**Observação:** o editor de arquivos do {% data variables.product.product_name %} usa o [CodeMirror](https://codemirror.net/).

{% endnote %}

1. No repositório, navegue até o arquivo que deseja editar.
{% data reusables.repositories.edit-file %}
3. Na guia **Editar arquivo**, faça as alterações necessárias ao arquivo.
![Novo conteúdo no arquivo](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %} {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Editar arquivos no repositório de outro usuário

Quando você editar um arquivo no repositório de outro usuário, [criaremos forks do repositório](/articles/fork-a-repo) automaticamente e [abriremos uma solicitação de pull](/articles/creating-a-pull-request).

1. No repositório de outro usuário, navegue até a pasta que contém o arquivo que deseja editar. Clique no nome do arquivo a ser editado.
2. Acima do conteúdo do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %}. Neste ponto, o GitHub bifurca o repositório para você.
3. Faça as alterações necessárias no arquivo.
![Novo conteúdo no arquivo](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %} {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
6. Clique em **Propor alteração de arquivo**.
![Botão Fazer Commit das Alterações](/assets/images/help/repository/propose_file_change_button.png)
7. Digite um título e uma descrição para a pull request.
![Página Descrição da solicitação de pull](/assets/images/help/pull_requests/pullrequest-description.png)
8. Clique em **Criar solicitação de pull**.
![Botão Solicitação de Pull](/assets/images/help/pull_requests/pullrequest-send.png)
