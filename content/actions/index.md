---
title: GitHub Actions Documentation
shortTitle: GitHub Actions
intro: 'Automate, customize, and execute your software development workflows right in your repository with {% data variables.product.prodname_actions %}. You can discover, create, and share actions to perform any job you''d like, including CI/CD, and combine actions in a completely customized workflow.'
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
  - title: Removing set-env and add-path commands on November 16
    date: '2020-11-09'
    href: https://github.blog/changelog/2020-10-01-github-actions-deprecating-set-env-and-add-path-commands/
  - title: Ubuntu-latest workflows will use Ubuntu-20.04
    date: '2020-10-29'
    href: https://github.blog/changelog/2020-10-29-github-actions-ubuntu-latest-workflows-will-use-ubuntu-20-04
  - title: MacOS Big Sur Preview
    date: '2020-10-29'
    href: https://github.blog/changelog/2020-10-29-github-actions-macos-big-sur-preview
  - title: Self-Hosted Runner Group Access Changes
    date: '2020-10-16'
    href: https://github.blog/changelog/2020-10-16-github-actions-self-hosted-runner-group-access-changes/
  
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
  <h2 class="mb-2 font-mktg h1">Code examples</h2>

  <div class="pr-lg-3 mb-5 mt-3">
    <input class="js-code-example-filter input-lg py-2 px-3 col-12 col-lg-8 form-control" placeholder="Search code examples" type="text" autocomplete="off" />
  </div>

  <div class="d-flex flex-wrap gutter">
    {% render 'code-example-card' for actionsCodeExamples as example %}
  </div>

  <button class="js-code-example-show-more btn btn-outline float-right">Show more {% octicon "arrow-right" %}</button>

  <div class="js-code-example-no-results d-none py-4 text-center text-gray font-mktg">
    <div class="mb-3">{% octicon "search" width="24" %}</div>
    <h3 class="text-normal">Sorry, there is no result for <strong class="js-code-example-filter-value"></strong></h3>
    <p class="my-3 f4">It looks like we don't have an example that fits your filter.<br>Try another filter or add your code example</p>
    <a href="https://github.com/github/docs/blob/HEAD/data/variables/action_code_examples.yml">Learn how to add a code example {% octicon "arrow-right" %}</a>
  </div>
</div>
{% endif %}
