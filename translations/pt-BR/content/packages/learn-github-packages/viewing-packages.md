---
title: Visualizar pacotes
intro: É possível ver informações sobre pacotes publicados em um repositório e limitar os resultados por organização ou usuário.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### Sobre a visualização de pacotes

Your ability to view a package depends on several factors. By default, you can view all packages you have published.

{% data reusables.package_registry.repo-scoped-and-granular-permissions-packages %}

{% data reusables.package_registry.package-page-info %}

### Visualizar pacotes de um repositório

You can find and view a package located in a particular repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Visualizar pacotes de uma organização

You can find and view a package located in the repositories of an organization you belong to.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. No nome da sua organização, clique em {% octicon "package" aria-label="The package icon" %} **Pacotes**.
{% data reusables.package_registry.navigate-to-packages %}

### Visualizar seus pacotes

You can find and view any package you've published across all organizations and repositories.

{% data reusables.profile.access_profile %}
2. No topo da página de perfil, na navegação principal, clique em **Pacotes**. ![Aba Project (Projeto)](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### Leia mais

- "[Procurar pacotes](/github/searching-for-information-on-github/searching-for-packages)"
