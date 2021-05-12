---
title: Documentación de GitHub Actions
shortTitle: GitHub Actions
intro: 'Automatiza, personaliza y ejecuta tus flujos de trabajo de desarrollo de software directamente en tu repositorio con {% data variables.product.prodname_actions %}. Puedes descubrir, crear y compartir acciones para realizar cualquier trabajo que quieras, incluido CI/CD, y combinar acciones en un flujo de trabajo completamente personalizado.'
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
introLinks:
  quickstart: /actions/quickstart
  reference: /actions/reference
changelog:
  label: actions
  prefix: 'GitHub Actions: '
product_video: 'https://www.youtube-nocookie.com/embed/cP0I9w2coGU'
---

<!-- {% link_with_intro /quickstart %} -->
<!-- {% link_with_intro /guides %} -->
<!-- {% link_with_intro /learn-github-actions %} -->
<!-- {% link_with_intro /managing-workflow-runs %} -->
<!-- {% link_with_intro /creating-actions %} -->
<!-- {% link_with_intro /hosting-your-own-runners %} -->
<!-- {% link_with_intro /reference %} -->

<!-- Article links -->
<div class="d-flex gutter my-6 py-6">
  <div class="col-4">
    <div class="featured-links-heading pb-4">
      <h3 class="f5 text-normal text-mono underline-dashed color-gray-5">{% data ui.toc.getting_started %}</h3>
    </div>
    <ul class="list-style-none">
      {% for link in featuredLinks.gettingStarted %}
        <li>{% include featured-link %}</li>
      {% endfor %}
    </ul>
  </div>

  <div class="col-4">
    <div class="featured-links-heading pb-4">
      <h3 class="f5 text-normal text-mono underline-dashed color-gray-5">{% data ui.toc.popular_articles %}</h3>
    </div>
    <ul class="list-style-none">
      {% for link in featuredLinks.popular %}
        <li>{% include featured-link %}</li>
      {% endfor %}
    </ul>
  </div>

  <div class="col-4">
    <div class="featured-links-heading pb-4">
      <h3 class="f5 text-normal text-mono underline-dashed color-gray-5">Administrar flujos de trabajo</h3>
    </div>
    <ul class="list-style-none">
      {% for link in featuredLinks.guide %}
        <li>{% include featured-link %}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<!-- Featured resources -->
<div class="d-flex gutter my-6 py-6 text-center flex-items-stretch">
  <a href="/actions/creating-actions" class="col-4 mx-3 d-block text-gray-dark no-underline hover-grow Box p-5 bg-gray-light">
    <div class="mb-4 d-flex flex-justify-center"><div class="circle p-3 bg-blue text-white">{% octicon "bookmark" width="24" %}</div></div>
    <h4>Crear acciones</h4>
    <p class="mb-0">Una guía completa para crear y compartir acciones con la comunidad.</p>
  </a>
  <a href="https://github.com/actions/starter-workflows" class="col-4 mx-3 d-block text-gray-dark no-underline hover-grow Box p-5 bg-gray-light">
    <div class="mb-4 d-flex flex-justify-center"><div class="circle p-3 bg-purple text-white">{% octicon "rocket" width="24" %}</div></div>
    <h4>Flujos de trabajo de inicio</h4>
    <p class="mb-0">Una colección de archivos de flujo de trabajo que te ayudan a iniciar con GitHub Actions.</p>
  </a>
  <a href="https://github.com/marketplace?type=actions" class="col-4 mx-3 d-block text-gray-dark no-underline hover-grow Box p-5 bg-gray-light">
    <div class="mb-4 d-flex flex-justify-center"><div class="circle p-3 bg-orange text-white">{% octicon "light-bulb" width="24" %}</div></div>
    <h4>GitHub Actions Marketplace</h4>
    <p class="mb-0">Explora las acciones de la comunidad y supercarga tu flujo de trabajo.</p>
  </a>
</div>

<!-- Code examples -->
<div class="mt-6 pt-6">
  <h2 class="mb-2">Guías</h2>

  <div class="d-flex flex-wrap gutter">
    <div class="col-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-nodejs">
        <div class="p-4">
          <h4>Crear y hacer pruebas en Node.js</h4>
          <p class="mt-2 mb-4">Utiliza GitHub Actions para impulsar la IC en tu aplicación de Node.js.</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">JavaScript/TypeScript</span>
            <span class="IssueLabel text-white bg-blue mr-2">IC</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/building-and-testing-nodejs</span>
        </footer>
      </a>
    </div>
    <div class="col-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-python">
        <div class="p-4">
          <h4>Crear y hacer pruebas en Python</h4>
          <p class="mt-2 mb-4">Utiliza GitHub Actions parai mpulsar la IC en tu aplicación de Python..</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">Python</span>
            <span class="IssueLabel text-white bg-blue mr-2">IC</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/building-and-testing-python</span>
        </footer>
      </a>
    </div>
    <div class="col-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-java-with-maven">
        <div class="p-4">
          <h4>Crear y hacer pruebas en Java con Mavern</h4>
          <p class="mt-2 mb-4">Utiliza GitHub Actions para impulsar la IC en tu proyecto de Java con Mavern.</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">Java</span>
            <span class="IssueLabel text-white bg-blue mr-2">IC</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/building-and-testing-java-with-maven</span>
        </footer>
      </a>
    </div>
    <div class="col-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-java-with-gradle">
        <div class="p-4">
          <h4>Crear y hacer pruebas en Java con Gradle</h4>
          <p class="mt-2 mb-4">Utiliza GitHub Actions para impulsar la IC en tu proyecto de Java con Gradle.</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">Java</span>
            <span class="IssueLabel text-white bg-blue mr-2">IC</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/building-and-testing-java-with-gradle</span>
        </footer>
      </a>
    </div>
    <div class="col-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/building-and-testing-java-with-ant">
        <div class="p-4">
          <h4>Crear y hacer pruebas en Java con Ant</h4>
          <p class="mt-2 mb-4">Utiliza GitHub Actions para impulsar la IC en tu proyecto de Java con Ant.</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">Java</span>
            <span class="IssueLabel text-white bg-blue mr-2">IC</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/building-and-testing-java-with-ant</span>
        </footer>
      </a>
    </div>
    <div class="col-4 mb-4">
      <a class="Box d-block hover-grow no-underline text-gray-dark" href="/actions/guides/publishing-nodejs-packages">
        <div class="p-4">
          <h4>Publicar paquetes de Node.js</h4>
          <p class="mt-2 mb-4">Utiliza GitHub Actions para subir tu paquete de Node.js a GitHub Packages o a npm.</p>
          <div class="d-flex">
            <span class="IssueLabel text-white bg-blue mr-2">Java</span>
            <span class="IssueLabel text-white bg-blue mr-2">IC</span>
          </div>
        </div>
        <footer class="border-top p-4 text-gray d-flex flex-items-center">
          {% octicon "workflow" class="flex-shrink-0" %}
          <span class="ml-2">/guides/publishing-nodejs-packages</span>
        </footer>
      </a>
    </div>
  </div>

  <a href="/actions/guides" class="btn btn-outline mt-4">Más guías {% octicon "arrow-right" %}</a>
</div>
