---
title: GitHub Actions文档
shortTitle: GitHub Actions
intro: '在 {% data variables.product.prodname_actions %} 的仓库中自动化、自定义和执行软件开发工作流程。 您可以发现、创建和共享操作以执行您喜欢的任何作业（包括 CI/CD），并将操作合并到完全自定义的工作流程中。'
gettingStartedLinks:
  - /actions/quickstart
  - /actions/learn-github-actions
guideLinks:
  - /actions/managing-workflow-runs
  - /actions/hosting-your-own-runners
popularLinks:
  - /actions/reference/workflow-syntax-for-github-actions
  - /actions/reference/events-that-trigger-workflows
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

<!-- Article links -->
<div class="d-lg-flex gutter my-6 py-6">
  <div class="col-12 col-lg-4 mb-4 mb-lg-0">
    <div class="featured-links-heading pb-4">
      <h3 class="f5 text-normal text-mono underline-dashed color-gray-5">{% data ui.toc.getting_started %}</h3>
    </div>
    <ul class="list-style-none">
      {% for link in gettingStartedLinks %}
        <li>{% include featured-link %}</li>
      {% endfor %}
    </ul>
  </div>

  <div class="col-12 col-lg-4 mb-4 mb-lg-0">
    <div class="featured-links-heading pb-4">
      <h3 class="f5 text-normal text-mono underline-dashed color-gray-5">{% data ui.toc.popular_articles %}</h3>
    </div>
    <ul class="list-style-none">
      {% for link in popularLinks %}
        <li>{% include featured-link %}</li>
      {% endfor %}
    </ul>
  </div>

  <div class="col-12 col-lg-4 mb-4 mb-lg-0">
    <div class="featured-links-heading pb-4">
      <h3 class="f5 text-normal text-mono underline-dashed color-gray-5">管理工作流程</h3>
    </div>
    <ul class="list-style-none">
      {% for link in guideLinks %}
        <li>{% include featured-link %}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<!-- Featured resources -->
<div class="d-lg-flex gutter-lg my-6 py-6 text-center flex-items-stretch">
  <div class="col-12 col-lg-4 mb-2 mb-lg-0">
    <a href="/actions/creating-actions" class="d-block text-gray-dark no-underline hover-grow Box p-5 bg-gray-light">
      <div class="mb-4 d-flex flex-justify-center"><div class="circle p-3 bg-blue text-white">{% octicon "bookmark" width="24" %}</div></div>
      <h4>创建操作</h4>
      <p class="mb-0">创建操作并与社区分享的完整指南</p>
    </a>
  </div>
  <div class="col-12 col-lg-4 mb-2 mb-lg-0">
    <a href="https://github.com/actions/starter-workflows" class="d-block text-gray-dark no-underline hover-grow Box p-5 bg-gray-light">
      <div class="mb-4 d-flex flex-justify-center"><div class="circle p-3 bg-purple text-white">{% octicon "rocket" width="24" %}</div></div>
      <h4>初学者工作流程</h4>
      <p class="mb-0">工作流程文件的集合，以帮助您开始使用 GitHub Actions。</p>
    </a>
  </div>
  <div class="col-12 col-lg-4 mb-2 mb-lg-0">
    <a href="https://github.com/marketplace?type=actions" class="d-block text-gray-dark no-underline hover-grow Box p-5 bg-gray-light">
      <div class="mb-4 d-flex flex-justify-center"><div class="circle p-3 bg-orange text-white">{% octicon "light-bulb" width="24" %}</div></div>
      <h4>GitHub Actions Marketplace</h4>
      <p class="mb-0">探索社区操作并增强您的工作流程。</p>
    </a>
  </div>
</div>

<!-- Code examples -->
<div class="mt-6 pt-6">
  <h2 class="mb-2">指南</h2>

  <div class="d-flex flex-wrap gutter">
    <div class="col-12 col-lg-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-nodejs">
        <div class="p-4">
          <h4>构建和测试 Node.js</h4>
          <p class="mt-2 mb-4">使用 GitHub Actions 在 Node.js 应用程序中支持 CI。</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">JavaScript/TypeScript</span>
            <span class="IssueLabel text-white bg-blue mr-2">CI</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/building-and-testing-nodejs</span>
        </footer>
      </a>
    </div>
    <div class="col-12 col-lg-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-python">
        <div class="p-4">
          <h4>构建和测试 Python</h4>
          <p class="mt-2 mb-4">使用 GitHub Actions 在 Python 应用程序中支持 CI。</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">Python</span>
            <span class="IssueLabel text-white bg-blue mr-2">CI</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/building-and-testing-python</span>
        </footer>
      </a>
    </div>
    <div class="col-12 col-lg-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-java-with-maven">
        <div class="p-4">
          <h4>使用 Maven 构建和测试 Java</h4>
          <p class="mt-2 mb-4">使用 GitHub Actions 在包含 Maven 的 Java 项目中支持 CI。</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">Java</span>
            <span class="IssueLabel text-white bg-blue mr-2">CI</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/building-and-testing-java-with-maven</span>
        </footer>
      </a>
    </div>
    <div class="col-12 col-lg-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-java-with-gradle">
        <div class="p-4">
          <h4>使用 Gradle 构建和测试 Java</h4>
          <p class="mt-2 mb-4">使用 GitHub Actions 在包含 Gradle 的 Java 项目中支持 CI。</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">Java</span>
            <span class="IssueLabel text-white bg-blue mr-2">CI</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/building-and-testing-java-with-gradle</span>
        </footer>
      </a>
    </div>
    <div class="col-12 col-lg-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-java-with-ant">
        <div class="p-4">
          <h4>使用 Ant 构建和测试 Java</h4>
          <p class="mt-2 mb-4">使用 GitHub Actions 在包含 Ant 的 Java 项目中支持 CI。</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">Java</span>
            <span class="IssueLabel text-white bg-blue mr-2">CI</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/building-and-testing-java-with-ant</span>
        </footer>
      </a>
    </div>
    <div class="col-12 col-lg-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/publishing-nodejs-packages">
        <div class="p-4">
          <h4>发布 Node.js 包</h4>
          <p class="mt-2 mb-4">使用 GitHub Actions 将 Node.js 包发布到 GitHub Packages 或 npm。</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">Java</span>
            <span class="IssueLabel text-white bg-blue mr-2">CI</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/publishing-nodejs-packages</span>
        </footer>
      </a>
    </div>
  </div>

  <a href="/actions/guides" class="btn btn-outline mt-4">更多指南 {% octicon "arrow-right" %}</a>
</div>
