---
title: Sobre commits
intro: Você pode salvar pequenos grupos de mudanças significativas como commits.
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6847b0a2e69fb17e648b7841a9ae250eaa9b38fa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410520'
---
## Sobre commits

{% data reusables.commits.about-commits %}

{% ifversion commit-signoffs %} Se o repositório de que você está fazendo commit tiver aprovações de commit obrigatórias habilitadas, e você estiver fazendo commit pela interface da Web, você aprovará automaticamente o commit como parte do processo de commit. Para obter mais informações, confira "[Como gerenciar a política de aprovação de commit para seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)". {% endif %}

Você pode adicionar um coautor em qualquer commit em que colaborar. Para obter mais informações, confira "[Como criar um commit com vários autores](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)".

{% ifversion fpt or ghec %} Você também pode criar um commit em nome de uma organização. Para obter mais informações, confira "[Como criar um commit em nome de uma organização](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)".{% endif %}

O rebase permite que você altere uma série de commits e pode modificar a ordem dos commits na sua linha do tempo. Para obter mais informações, confira "[Sobre a troca de base do Git](/github/getting-started-with-github/about-git-rebase)".

## Sobre branches de commit e etiquetas de tags

Você pode ver em qual branch um commit está ao ver as etiquetas abaixo do commit na página de commit.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. Navegue até o commit clicando no link da mensagem do commit.
   ![Captura de tela do commit com o link da mensagem do commit em destaque](/assets/images/help/commits/commit-message-link.png)
2. Para ver em qual branch o commit está, verifique a etiqueta abaixo da mensagem de commit.
   ![Captura de tela do commit com o indicador de branch do commit em destaque](/assets/images/help/commits/commit-branch-indicator.png)

Se o commit não estiver no branch padrão (`main`), o rótulo mostrará os branches que contêm o commit. Se o commit fizer parte de um pull request não mesclado, clique no link para ir para o pull request.

Assim que o commit estiver no branch padrão, todas as tags que contêm o commit serão mostradas e o branch padrão será o único branch listado. Para obter mais informações sobre tags, confira "[Noções básicas sobre o Git – Marcação](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" na documentação do Git.

![Captura de tela do commit com a tag do commit destacado](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## Usando a árvore de arquivos

Você pode usar a árvore de arquivos para navegar entre os arquivos em um commit.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. Navegue até o commit clicando no link da mensagem do commit.
   ![Captura de tela do commit com o link da mensagem do commit em destaque](/assets/images/help/commits/commit-message-link.png)
1. Clique em um arquivo na árvore de arquivos para ver o diff do arquivo correspondente. Se a árvore de arquivos estiver oculta, clique em {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} para que ela seja exibida.

  {% note %}

  **Observação**: a árvore de arquivos não será exibida se a largura da tela for muito estreita ou se o commit incluir apenas um arquivo.

  {% endnote %}
  
  ![Captura de tela da caixa de pesquisa de arquivos alterados do filtro e da árvore de arquivos enfatizada](/assets/images/help/repository/file-tree.png)
1. Para filtrar o conteúdo por caminho do arquivo, insira uma parte ou todo o caminho do arquivo na caixa de pesquisa **Filtrar arquivos alterados**.

{% endif %}

## Leitura adicional
- "[Como fazer commit das alterações no seu projeto e revisá-las](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)" no {% data variables.product.prodname_desktop %}
