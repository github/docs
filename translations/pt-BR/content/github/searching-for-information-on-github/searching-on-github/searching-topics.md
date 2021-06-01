---
title: Pesquisar tópicos
intro: 'Você pode pesquisar tópicos associados a repositórios no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/searching-topics
  - /github/searching-for-information-on-github/searching-topics
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
### Pesquisar tópicos no {% data variables.product.product_name %}

Você pode pesquisar tópicos no {% data variables.product.product_name %}, explorar tópicos relacionados e ver quantos repositórios estão associados a um tópico específico.

1. Navegue até https://github.com/search.
2. Insira uma palavra-chave de tópico. ![campo de pesquisa](/assets/images/help/search/search-field.png)
3. Na barra lateral esquerda, para limitar a pesquisa aos tópicos, clique em **Topics** (Tópicos).
{% if currentVersion == "free-pro-team@latest" %}
  ![Página de resultados da pequisa do repositório Jekyll com opção de tópico do menu lateral em destaque](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %}
![Jekyll repository search results page on dotcom with topics side-menu option highlighted](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

### Limitar a pesquisa com qualificadores de pesquisa

Se quiser explorar repositórios sobre um tópico específico, encontrar projetos para contribuição ou saber quais são os tópicos mais populares no {% data variables.product.product_name %}, pesquise tópicos com os qualificadores de pesquisa `is:featured`, `is:curated`, `repositories:n` e `created:YYYY-MM-DD`.

O qualificador de pesquisa `is:featured` limita os resultados da pequisa aos tópicos com mais repositórios no {% data variables.product.product_name %}. Esses tópicos também são apresentados em https://github.com/topics/.

O qualificador de pesquisa `is:curated` limita os resultados da pequisa aos tópicos que os integrantes da comunidade adicionaram informações adicionais. Para obter mais informações, consulte o [explorar o repositório](https://github.com/github/explore).

Você pode filtrar os tópicos com base na data de criação usando parâmetro de data e `created:` ou com base em quantos repositórios estão associados ao tópico usando `repositories:n`. Esses dois qualificadores podem usar os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax).

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                 | Exemplo                                                                                                                                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:curated`              | [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) identifica os tópicos com curadoria que contêm a palavra "javascript".                                                           |
| `is:featured`             | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) identifica os tópicos apresentados em https://github.com/topics/ que contêm a palavra "javascript".                            |
| `is:not-curated`          | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) identifica os tópicos que não têm informações adicionais, como descrições ou logotipos, e contêm a palavra "javascript". |
| `is:not-featured`         | [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) identifica os tópicos que não são apresentados em https://github.com/topics/ e contêm a palavra "javascript".          |
| `repositories:n`          | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) identifica os tópicos com mais de 5.000 repositórios.                                                                                                  |
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) identifica os tópicos com a palavra "serverless" que foram criados depois de 2018.                                 |

### Pesquisar repositórios por tópico

Você pode usar o qualificador `topic:` para encontrar os repositórios conectados a um tópico específico. Para obter mais informações, consulte "[Pesquisar repositórios](/articles/searching-for-repositories/#search-by-topic)".

### Leia mais
- "[Classificar seu repositório com tópicos](/articles/classifying-your-repository-with-topics)"
