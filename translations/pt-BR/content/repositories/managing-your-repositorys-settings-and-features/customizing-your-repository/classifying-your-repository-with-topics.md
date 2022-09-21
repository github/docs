---
title: Classificar repositório com tópicos
intro: 'Para ajudar outras pessoas a encontrar seu projeto e a contribuir com ele, você pode adicionar tópicos ao repositório relacionados à intenção do projeto, área de assunto, grupos de afinidade ou outras características importantes.'
redirect_from:
  - /articles/about-topics
  - /articles/classifying-your-repository-with-topics
  - /github/administering-a-repository/classifying-your-repository-with-topics
  - /github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Classify with topics
ms.openlocfilehash: 68bd754ac6c50968961c61e533cb6b9de26e4cc4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127061'
---
## Sobre tópicos

Com tópicos, você pode explorar repositórios em uma área de assunto específica, encontrar projetos com os quais contribuir e descobrir novas soluções para um problema específico. Os tópicos aparecem na página principal de um repositório. Clique no nome de um tópico para {% ifversion fpt or ghec %}ver tópicos relacionados e uma lista de outros repositórios classificados com esse tópico{% else %}pesquisar outros repositórios com esse tópico{% endif %}.

![Página principal do repositório de teste mostrando tópicos](/assets/images/help/repository/os-repo-with-topics.png)

Para procurar os tópicos mais usados, acesse https://github.com/topics/.

{% ifversion fpt or ghec %}Você pode contribuir para o conjunto de tópicos em destaque do {% data variables.product.product_name %} no repositório [github/explore](https://github.com/github/explore). {% endif %}

Os administradores de repositório podem adicionar qualquer tópico que desejarem a um repositório. Os tópicos úteis para classificar um repositório incluem a finalidade pretendida do repositório, a área de assunto, a comunidade ou a linguagem.{% ifversion fpt or ghec %} Além disso, o {% data variables.product.product_name %} analisa o conteúdo do repositório público e gera tópicos sugeridos que os administradores do repositório podem aceitar ou rejeitar. O conteúdo do repositório privado não é analisado e não recebe sugestões de tópico.{% endif %}

Os repositórios {% ifversion fpt %}público e privado{% elsif ghec or ghes %}público, privado e interno{% elsif ghae %}privado e interno{% endif %} podem ter tópicos, embora você veja apenas repositórios privados aos quais você tem acesso nos resultados de pesquisa de tópicos.

Você pode pesquisar repositórios que são associados a um tópico específico. Para obter mais informações, confira "[Pesquisa em repositórios](/search-github/searching-on-github/searching-for-repositories#search-by-topic)". Também é possível pesquisar uma lista de tópicos no {% data variables.product.product_name %}. Para obter mais informações, confira "[Pesquisa de tópicos](/search-github/searching-on-github/searching-topics)".

## Adicionar tópicos ao repositório

{% data reusables.repositories.navigate-to-repo %}
2. À direita de "Sobre", clique em {% octicon "gear" aria-label="The Gear icon" %}.
  ![Ícone de engrenagem na página principal de um repositório](/assets/images/help/repository/edit-repository-details-gear.png)
3. Em "Tópicos", digite o tópico que você deseja adicionar ao seu repositório e, em seguida, digite um espaço.
  ![Formulário usado para inserir tópicos](/assets/images/help/repository/add-topic-form.png)
4. Depois de concluir a adição de tópicos, clique em **Salvar alterações**.
  ![Botão "Salvar alterações" em "Editar detalhes do repositório"](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
