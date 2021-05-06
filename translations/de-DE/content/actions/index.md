---
title: Dokumentation zu GitHub Actions
shortTitle: GitHub Actions
intro: 'Mit {% data variables.product.prodname_actions %} kannst Du Deine Softwareentwicklungs-Workflows direkt in Ihrem Repository automatisieren, anpassen und ausführen. Du kannst Actions entdecken, erstellen und weitergeben, um beliebige Aufträge (einschließlich CI/CD) auszuführen. Du kannst auch Actions in einem vollständig angepassten Workflow kombinieren.'
introLinks:
  quickstart: /actions/quickstart
  reference: /actions/reference
featuredLinks:
  guides:
    - /actions/learn-github-actions
    - /actions/guides/about-continuous-integration
    - /actions/guides/about-packaging-with-github-actions
  guideCards:
    - /actions/guides/setting-up-continuous-integration-using-workflow-templates
    - /actions/guides/publishing-nodejs-packages
    - /actions/guides/building-and-testing-powershell
  popular:
    - /actions/reference/workflow-syntax-for-github-actions
    - /actions/learn-github-actions
    - /actions/reference/events-that-trigger-workflows
    - /actions/reference/context-and-expression-syntax-for-github-actions
    - /actions/reference/environment-variables
    - /actions/reference/encrypted-secrets
changelog:
  label: actions
  prefix: 'GitHub Actions: '
product_video: 'https://www.youtube-nocookie.com/embed/cP0I9w2coGU'
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
  github-ae: '*'
---

<!-- {% link_with_intro /quickstart %} -->
<!-- {% link_with_intro /guides %} -->
<!-- {% link_with_intro /learn-github-actions %} -->
<!-- {% link_with_intro /managing-workflow-runs %} -->
<!-- {% link_with_intro /creating-actions %} -->
<!-- {% link_with_intro /using-github-hosted-runners %} -->
<!-- {% link_with_intro /hosting-your-own-runners %} -->
<!-- {% link_with_intro /reference %} -->

<!-- Code examples -->
{% assign actionsCodeExamples = site.data.variables.action_code_examples %}
{% if actionsCodeExamples %}
<div class="my-6 pt-6">
  <h2 class="mb-2 font-mktg h1">Code examples</h2>

  <div class="pr-lg-3 mb-5 mt-3">
    <input class="js-filter-card-filter input-lg py-2 px-3 col-12 col-lg-8 form-control" placeholder="Search code examples" type="search" autocomplete="off" aria-label="Search code examples"/>
  </div>

  <div class="d-flex flex-wrap gutter">
    {% render code-example-card for actionsCodeExamples as example %}
  </div>

  <button class="js-filter-card-show-more btn btn-outline float-right" data-js-filter-card-max="6">Show more {% octicon "arrow-right" %}</button>

  <div class="js-filter-card-no-results d-none py-4 text-center text-gray font-mktg">
    <div class="mb-3">{% octicon "search" width="24" %}</div>
    <h3 class="text-normal">Sorry, there is no result for <strong class="js-filter-card-value"></strong></h3>
    <p class="my-3 f4">It looks like we don't have an example that fits your filter.<br>Try another filter or add your code example</p>
    <a href="https://github.com/github/docs/blob/main/data/variables/action_code_examples.yml">Learn how to add a code example {% octicon "arrow-right" %}</a>
  </div>
</div>
{% endif %}
