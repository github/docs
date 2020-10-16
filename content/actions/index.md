---
title: GitHub Actions Documentation
shortTitle: GitHub Actions
intro: 'Automate, customize, and execute your software development workflows right in your repository with {% data variables.product.prodname_actions %}. You can discover, create, and share actions to perform any job you''d like, including CI/CD, and combine actions in a completely customized workflow.'
introLinks:
  quickstart: /actions/quickstart
  learn: /actions/learn-github-actions
gettingStartedLinks:
  - /actions/managing-workflow-runs
  - /actions/hosting-your-own-runners
guideLinks:
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/guides/about-packaging-with-github-actions
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
      <h3 class="f5 text-normal text-mono underline-dashed color-gray-5">{% data ui.toc.guides %}</h3>
    </div>
    <ul class="list-style-none">
      {% for link in guideLinks %}
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
      <h3 class="f5 text-normal text-mono underline-dashed color-gray-5">Manage workflows</h3>
    </div>
    <ul class="list-style-none">
      {% for link in gettingStartedLinks %}
        <li>{% include featured-link %}</li>
      {% endfor %}
    </ul>
  </div>
</div>

<!-- Code examples -->
<div class="mt-6 pt-6">
  <h2 class="mb-2">More guides</h2>

  <div class="d-flex flex-wrap gutter">
    <div class="col-12 col-lg-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-nodejs">
        <div class="p-4">
          <h4>Building and testing Node.js</h4>
          <p class="mt-2 mb-4">Use GitHub Actions to power CI in your Node.js application.</p>
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
          <h4>Building and testing Python</h4>
          <p class="mt-2 mb-4">Use GitHub Actions to power CI in your Python application.</p>
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
          <h4>Building and testing Java with Maven</h4>
          <p class="mt-2 mb-4">Use GitHub Actions to power CI in your Java project with Maven.</p>
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
          <h4>Building and testing Java with Gradle</h4>
          <p class="mt-2 mb-4">Use GitHub Actions to power CI in your Java project with Gradle.</p>
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
          <h4>Building and testing Java with Ant</h4>
          <p class="mt-2 mb-4">Use GitHub Actions to power CI in your Java project with Ant.</p>
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
          <h4>Publishing Node.js packages</h4>
          <p class="mt-2 mb-4">Use GitHub Actions to push your Node.js package to GitHub Packages or npm.</p>
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

  <a href="/actions/guides" class="btn btn-outline mt-4">Show all guides {% octicon "arrow-right" %}</a>
</div>
