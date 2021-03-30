---
title: GitHub Actions文档
shortTitle: GitHub Actions
intro: '在 {% data variables.product.prodname_actions %} 的仓库中自动化、自定义和执行软件开发工作流程。 您可以发现、创建和共享操作以执行您喜欢的任何作业（包括 CI/CD），并将操作合并到完全自定义的工作流程中。'
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
  - 
    title: 环境、环境保护规则和环境密码（测试版）
    date: '2020-12-15'
    href: https://github.blog/changelog/2020-12-15-github-actions-environments-environment-protection-rules-and-environment-secrets-beta/
  - 
    title: 工作流程可视化
    date: '2020-12-08'
    href: https://github.blog/changelog/2020-12-08-github-actions-workflow-visualization/
  - 
    title: 11 月 16 日删除 set-env 和 add-path 命令
    date: '2020-11-09'
    href: https://github.blog/changelog/2020-10-01-github-actions-deprecating-set-env-and-add-path-commands/
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
  <h2 class="mb-2 font-mktg h1">代码示例</h2>

  <div class="pr-lg-3 mb-5 mt-3">
    <input class="js-filter-card-filter input-lg py-2 px-3 col-12 col-lg-8 form-control" placeholder="搜索代码示例" type="search" autocomplete="off" aria-label="Search code examples"/>
  </div>

  <div class="d-flex flex-wrap gutter">
    {% render code-example-card for actionsCodeExamples as example %}
  </div>

  <button class="js-filter-card-show-more btn btn-outline float-right" data-js-filter-card-max="6">显示更多 {% octicon "arrow-right" %}</button>

  <div class="js-filter-card-no-results d-none py-4 text-center text-gray font-mktg">
    <div class="mb-3">{% octicon "search" width="24" %}</div>
    <h3 class="text-normal">抱歉，找不到结果 <strong class="js-filter-card-value"></strong></h3>
    <p class="my-3 f4">似乎没有适合您的过滤条件的示例。<br>请尝试其他过滤条件或添加代码示例</p>
    <a href="https://github.com/github/docs/blob/main/data/variables/action_code_examples.yml">了解如何添加代码示例 {% octicon "arrow-right" %}</a>
  </div>
</div>
{% endif %}
