---
title: Metrics
intro: 'The repository metrics API allows you to retrieve community profile, statistics, and traffic for your repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /rest/reference/repository-metrics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt or ghec %}
## Comunidade

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'community' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Estatísticas

A API de Estatísticas do Repositório permite que você recupere os dados que o {% data variables.product.product_name %} usa para visualizar diferentes tipos de atividade do repositório.

### Umas palavras sobre o armazenamento em cache

Computar as estatísticas do repositório é uma operação cara. Por esse motivo, tentamos retornar dados armazenados em cache sempre que possível.  Se os dados não forem armazenados em cache nas estatísticas de um repositório, você receberá uma resposta de `202`; um trabalho em segundo plano também é acionado para começar a compilar estas estatísticas. Dê ao trabalho alguns instantes para que seja concluído e, em seguida, envie a solicitação novamente. Se o trabalho foi concluído, essa solicitação receberá uma resposta de `200` com as estatísticas no texto da resposta.

As estatísticas do repositório são armazenadas em cache pelo SHA do branch-padrão do repositório; fazer push para o branch-padrão redefine o armazenamento em cache de estatísticas.

### As estatísticas excluem alguns tipos de commits

As estatísticas expostas pela API correspondem às estatísticas mostradas pelos [diferentes gráficos de repositórios](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

Resumo:
- Todas as estatísticas excluem commits de merge.
- As estatísticas do contribuidor também excluem commits vazios.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statistics' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt or ghec %}
## Tráfego

Para repositórios aos quais você tem acesso de push, a API de tráfego fornece acesso às informações fornecidas no seu gráfico de repositório. Para obter mais informações, consulte "<a href="/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository" class="dotcom-only">Visualizar tráfego para um repositório</a>. "

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'traffic' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}
