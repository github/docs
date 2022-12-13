---
title: Gerenciar categorias para discussões
intro: Você pode categorizar as discussões para organizar conversas para integrantes da sua comunidade e você pode escolher um formato para cada categoria.
permissions: Repository administrators and people with write or greater access to a repository can manage categories for discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage categories for discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage categories
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
ms.openlocfilehash: e16d25ad2bb72f4aea9b441529cb8e9a7a0fee48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410464'
---
## Sobre categorias para discussões

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

{% data reusables.discussions.about-announcement-format %}

Cada categoria deve ter um nome e um pareamento de emojis únicos e pode ser acompanhada de uma descrição detalhada que informa o seu propósito. As categorias ajudam os mantenedores a organizar como as conversas são arquivadas e podem ser personalizadas para ajudar a distinguir as categorias que são perguntas e respostas ou conversas mais abertas. {% data reusables.discussions.repository-category-limit %} Para obter mais informações, confira "[Sobre as discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)".

## Categorias-padrão

| Categoria | Finalidade | Formatar |
| :- | :- | :- |
| 📣 Comunicados | Atualizações e notícias de mantenedores do projeto | Anúncio |
| #️⃣ Geral | Tudo que for relevante para o projeto | Discussão aberta |
|💡 Ideias | Ideias para alterar ou melhorar o projeto | Discussão aberta |
| 🗳 Pesquisas | Pesquisas com várias opções para a comunidade votar e discutir | Pesquisas |
| 🙏 Perguntas e respostas | Perguntas para a comunidade responder, com um formato de pergunta/resposta | Pergunta e resposta |
| 🙌 Mostrar e contar | Criações, experimentos ou testes relevantes para o projeto | Discussão aberta |

## Criar categoria

1. Em {% data variables.product.product_location %}, navegue até a página principal do repositório ou organização em que você deseja criar uma categoria.
{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.edit-categories %}
1. Clique em **Nova categoria**.
  ![Botão "Nova categoria" acima da lista de categorias de discussão de um repositório](/assets/images/help/discussions/click-new-category-button.png)
1. Edite o emoji, título, descrição e formato de discussão para a categoria. Para obter mais informações sobre os formatos de discussão, confira "[Sobre as discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)".
  ![Emoji, título, descrição e formato de discussão para a nova categoria](/assets/images/help/discussions/edit-category-details.png)
1. Clique em **Criar**.
  ![Botão "Criar" para nova categoria](/assets/images/help/discussions/new-category-click-create-button.png)

## Editar uma categoria

Você pode editar uma categoria para alterar o emoji, título, descrição e formato da discussão.

1. Em {% data variables.product.product_location %}, navegue até a página principal do repositório ou organização em que você deseja editar uma categoria.
{% data reusables.discussions.discussions-tab %}
1. À direita de uma categoria na lista, clique em {% octicon "pencil" aria-label="The pencil icon" %}.
  ![Botão Editar à direita da categoria na lista de categorias de um repositório](/assets/images/help/discussions/click-edit-for-category.png)
1. {% data reusables.discussions.edit-category-details %} ![Edição de emoji, título, descrição e formato de discussão para a categoria existente](/assets/images/help/discussions/edit-existing-category-details.png)
1. Clique em **Salvar alterações**.
  ![Botão "Salvar alterações" para a categoria existente](/assets/images/help/discussions/existing-category-click-save-changes-button.png)

## Excluir uma categoria

Ao você excluir uma categoria, {% data variables.product.product_name %} moverá todas as discussões da categoria excluída para uma categoria existente que você escolher.

1. Em {% data variables.product.product_location %}, navegue até a página principal do repositório ou organização em que você deseja excluir uma categoria.
{% data reusables.discussions.discussions-tab %}
1. À direita de uma categoria na lista, clique em {% octicon "trash" aria-label="The trash icon" %}.
  ![Botão da lixeira à direita da categoria na lista de categorias de um repositório](/assets/images/help/discussions/click-delete-for-category.png)
1. Use o menu suspenso e escolha uma nova categoria para qualquer discussão na categoria que você está excluindo.
  ![Menu suspenso usado para escolher uma nova categoria ao excluir uma categoria existente](/assets/images/help/discussions/choose-new-category.png)
1. Clique em **Excluir e Mover**.
  ![Menu suspenso usado para escolher uma nova categoria ao excluir uma categoria existente](/assets/images/help/discussions/click-delete-and-move-button.png)
