---
title: Dokumentation zu GitHub Actions
shortTitle: GitHub Actions
intro: 'Mit {% data variables.product.prodname_actions %} kannst Du Deine Softwareentwicklungs-Workflows direkt in Ihrem Repository automatisieren, anpassen und ausführen. Du kannst Actions entdecken, erstellen und weitergeben, um beliebige Aufträge (einschließlich CI/CD) auszuführen. Du kannst auch Actions in einem vollständig angepassten Workflow kombinieren.'
introLinks:
  quickstart: /actions/quickstart
  reference: /actions/reference
featuredLinks:
  guides:
    - /actions/guides/setting-up-continuous-integration-using-workflow-templates
    - /actions/guides/about-packaging-with-github-actions
  gettingStarted:
    - /actions/managing-workflow-runs
    - /actions/hosting-your-own-runners
  popular:
    - /actions/reference/workflow-syntax-for-github-actions
    - /actions/reference/events-that-trigger-workflows
changelog:
  - 
    title: Self-Hosted Runner Group Access Changes
    date: '2020-10-16'
    href: https://github.blog/changelog/2020-10-16-github-actions-self-hosted-runner-group-access-changes/
  - 
    title: Ability to change retention days for artifacts and logs
    date: '2020-10-08'
    href: https://github.blog/changelog/2020-10-08-github-actions-ability-to-change-retention-days-for-artifacts-and-logs
  - 
    title: Deprecating set-env and add-path commands
    date: '2020-10-01'
    href: https://github.blog/changelog/2020-10-01-github-actions-deprecating-set-env-and-add-path-commands
  - 
    title: Fine-tune access to external actions
    date: '2020-10-01'
    href: https://github.blog/changelog/2020-10-01-github-actions-fine-tune-access-to-external-actions
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
<div class="my-6 pt-6">
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
            <span class="IssueLabel text-white bg-blue mr-2">JavaScript/TypeScript</span>
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
