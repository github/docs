---
title: Exibir contribuidores do projeto
intro: 'Você pode ver quem contribuiu com confirmações para um repositório{% ifversion fpt or ghec %} e suas dependências{% endif %}.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph
  - /articles/viewing-contribution-activity-in-a-repository
  - /articles/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View project contributors
ms.openlocfilehash: a5c3c5e1cb83039003b42a0526a49cb1db039888
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369158'
---
## Sobre contribuidores

Veja os 100 principais colaboradores de um repositório{% ifversion ghes or ghae %}, incluindo os coautores de commits,{% endif %} no grafo de colaboradores. Commits de merge e commits vazios não são contabilizados como contribuições para este gráfico.

{% ifversion fpt or ghec %} Você também pode ver uma lista de pessoas que contribuíram com as dependências do Python do projeto. Para acessar essa lista de colaboradores da comunidade, acesse `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`.
{% endif %}

## Acessar o gráfico de contribuidores

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Colaboradores**.
  ![Guia Colaboradores](/assets/images/help/graphs/contributors_tab.png)
4. Como alternativa, para exibir os contribuidores durante um determinado período, clique no período desejado e arraste-o até que seja selecionado. Os gráficos de contribuidores somam o número de commit semanalmente para cada domingo, de modo que seu período de tempo deve incluir um domingo.
  ![Intervalo de tempo selecionado no grafo de colaboradores](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

## Solucionar problemas com contribuidores

Se você não aparecer no gráfico de contribuidores de um repositório, pode ser que:
- Você não seja um dos 100 principais contribuidores.
- Não tenha sido feito merge dos seus commits no branch padrão.
- O endereço de e-mail que você usou para criar os commits não está conectado à sua conta em {% data variables.product.product_name %}.

{% tip %}

**Dica:** para listar todos os colaboradores de commit em um repositório, veja "[Listar os colaboradores do repositório](/rest/repos/repos#list-repository-contributors)".

{% endtip %}

Se todos os seus commits no repositório estiverem em branches não padrão, você não estará no gráfico de contribuidores. Por exemplo, os commits no branch `gh-pages` não são incluídos no grafo, a menos que `gh-pages` seja o branch padrão do repositório. Para que seja feito merge dos seus commits no branch padrão, você precisa criar uma pull request. Para obter mais informações, confira "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".

Se o endereço de e-mail que você usou para criar os commits não estiver conectado à sua conta em {% data variables.product.product_name %}, seus commits não serão vinculados à sua conta e você não aparecerá no gráfico de contribuidores. Para obter mais informações, confira "[Como definir seu endereço de email de commit](/articles/setting-your-commit-email-address){% ifversion not ghae %}" e "[Como adicionar um endereço de email à sua conta do {% data variables.product.prodname_dotcom %}](/articles/adding-an-email-address-to-your-github-account){% endif %}".
