---
title: Documentação do GitHub Actions
shortTitle: GitHub Actions
intro: 'Automatize, personalize e execute seus fluxos de trabalho de desenvolvimento do software diretamente no seu repositório com o {% data variables.product.prodname_actions %}. Você pode descobrir, criar e compartilhar ações para realizar qualquer trabalho que desejar, incluindo CI/CD, bem como combinar ações em um fluxo de trabalho completamente personalizado.'
introLinks:
  quickstart: /actions/quickstart
  reference: /actions/reference
featuredLinks:
  guides:
    - /actions/learn-github-actions
    - /actions/guides/about-continuous-integration
    - /actions/guides/about-packaging-with-github-actions
  gettingStarted:
    - /actions/managing-workflow-runs
    - /actions/hosting-your-own-runners
  guideCards:
    - /actions/guides/setting-up-continuous-integration-using-workflow-templates
    - /actions/guides/publishing-nodejs-packages
    - /actions/guides/building-and-testing-powershell
  popular:
    - /actions/reference/workflow-syntax-for-github-actions
    - /actions/reference/events-that-trigger-workflows
    - /actions/learn-github-actions
    - /actions/reference/context-and-expression-syntax-for-github-actions
    - /actions/reference/workflow-commands-for-github-actions
    - /actions/reference/environment-variables
changelog:
  - 
    title: Visualização do fluxo de trabalho
    date: '2020-12-08'
    href: https://github.blog/changelog/2020-12-08-github-actions-workflow-visualization/
  - 
    title: Remover comandos set-env e add-path em 16 de novembro
    date: '2020-11-09'
    href: https://github.blog/changelog/2020-10-01-github-actions-deprecating-set-env-and-add-path-commands/
  - 
    title: Os últimos fluxos de trabalho do Ubuntu-20.04
    date: '2020-10-29'
    href: https://github.blog/changelog/2020-10-29-github-actions-ubuntu-latest-workflows-will-use-ubuntu-20-04
product_video: https://www.youtube-nocookie.com/embed/cP0I9w2coGU
redirect_from:
  - /articles/automating-your-workflow-with-github-actions/
  - /articles/customizing-your-project-with-github-actions/
  - /github/automating-your-workflow-with-github-actions
  - /actions/automating-your-workflow-with-github-actions/
  - /categories/automating-your-workflow-with-github-actions
  - /marketplace/actions
layout: product-landing
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

<!-- {% link_with_intro /quickstart %} -->
<!-- {% link_with_intro /guides %} -->
<!-- {% link_with_intro /learn-github-actions %} -->
<!-- {% link_with_intro /managing-workflow-runs %} -->
<!-- {% link_with_intro /creating-actions %} -->
<!-- {% link_with_intro /hosting-your-own-runners %} -->
<!-- {% link_with_intro /reference %} -->

<!-- Code examples -->
{% assign actionsCodeExamples = site.data.variables.action_code_examples %}
{% if actionsCodeExamples %}
<div class="my-6 pt-6">
  <h2 class="mb-2 font-mktg h1">Exemplos de códigos</h2>

  <div class="pr-lg-3 mb-5 mt-3">
    <input class="js-filter-card-filter input-lg py-2 px-3 col-12 col-lg-8 form-control" placeholder="Exemplos de código de pesquisa" type="search" autocomplete="off" aria-label="Search code examples"/>
  </div>

  <div class="d-flex flex-wrap gutter">
    {% render 'code-example-card' for actionsCodeExamples as example %}
  </div>

  <button class="js-filter-card-show-more btn btn-outline float-right">Mostrar mais {% octicon "arrow-right" %}</button>

  <div class="js-filter-card-no-results d-none py-4 text-center text-gray font-mktg">
    <div class="mb-3">{% octicon "search" width="24" %}</div>
    <h3 class="text-normal">Desculpe, não há resultados para <strong class="js-filter-card-value"></strong></h3>
    <p class="my-3 f4">Parece que não temos um exemplo que se encaixa no seu filtro.<br>Tente outro filtro ou adicione seu exemplo de código</p>
    <a href="https://github.com/github/docs/blob/main/data/variables/action_code_examples.yml">Saiba como adicionar um exemplo de código {% octicon "arrow-right" %}</a>
  </div>
</div>
{% endif %}
