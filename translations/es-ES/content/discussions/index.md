---
title: Documentación sobre los debates de GitHub
beta_product: verdadero
shortTitle: GitHub Discussions
intro: '{% data variables.product.prodname_discussions %} es un foro de comunicación colaborativa para la comunidad que circunda un proyecto de código abierto. Los miembros de la comunidad pueden hacer preguntas y proporcionar respuestas, compartir actualizaciones, tener conversaciones abiertas y dar seguimiento a las decisiones que afectan la forma de trabajar de la misma.'
introLinks:
  quickstart: /discussions/quickstart
featuredLinks:
  guides:
    - /discussions/collaborating-with-your-community-using-discussions/about-discussions
    - /discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion
    - /discussions/managing-discussions-for-your-community/moderating-discussions
  gettingStarted:
    - /discussions/quickstart
  guideCards:
    - /discussions/collaborating-with-your-community-using-discussions/about-discussions
    - /discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion
    - /discussions/managing-discussions-for-your-community/moderating-discussions
  popular:
    - /discussions/guides/granting-higher-permissions-to-top-contributors
    - /discussions/guides/best-practices-for-community-conversations-on-github
    - /discussions/guides/finding-discussions-across-multiple-repositories
    - /discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions
    - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
product_video: https://www.youtube-nocookie.com/embed/DbTWBP3_RbM
layout: product-landing
versions:
  free-pro-team: '*'
---

<!-- {% link_with_intro /quickstart %} -->
<!-- {% link_with_intro /discussions-guides %} -->
<!-- {% link_with_intro /collaborating-with-your-community-using-discussions %} -->
<!-- {% link_with_intro /managing-discussions-for-your-community %} -->

<!-- Community examples -->
{% assign discussionsCommunityExamples = site.data.variables.discussions_community_examples %}
{% if discussionsCommunityExamples %}
<div class="my-6 pt-6">
  <h2 class="mb-2 font-mktg h1">Comunidades que utilizan debates</h2>

  <div class="d-flex flex-wrap gutter">
    {% render 'discussions-community-card' for discussionsCommunityExamples as example %}
  </div>
  {% if discussionsCommunityExamples.length > 6 %}
    <button class="js-filter-card-show-more btn btn-outline float-right">Mostrar más {% octicon "arrow-right" %}</button>
  {% endif %}
  <div class="js-filter-card-no-results d-none py-4 text-center text-gray font-mktg">
    <div class="mb-3">{% octicon "search" width="24" %}</div>
    <h3 class="text-normal">Lo sentimos, no hay respultados para <strong class="js-filter-card-value"></strong></h3>
    <p class="my-3 f4">Parece que no tenemos un ejemplo que se adapte a tu filtro.<br>Intenta con otro filtro o agrega tu ejemplo de código</p>
    <a href="https://github.com/github/docs/blob/main/data/variables/discussions_community_examples.yml">Agrega tu comunidad {% octicon "arrow-right" %}</a>
  </div>
</div>
{% endif %}
