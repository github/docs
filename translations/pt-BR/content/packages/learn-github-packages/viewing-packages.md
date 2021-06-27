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

A sua capacidade de visualizar um pacote depende de vários fatores. Por padrão, você pode visualizar todos os pacotes que você publicou.

{% data reusables.package_registry.repo-scoped-and-granular-permissions-packages %}

{% data reusables.package_registry.package-page-info %}

### Visualizar pacotes de um repositório

Você pode encontrar e visualizar um pacote localizado em um repositório específico.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Visualizar pacotes de uma organização

Você pode encontrar e visualizar um pacote localizado nos repositórios de uma organização a que pertence.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
3. No nome da sua organização, clique em {% octicon "package" aria-label="The package icon" %} **Pacotes**.
{% data reusables.package_registry.navigate-to-packages %}

### Visualizar seus pacotes

Você pode encontrar e visualizar qualquer pacote que você publicou em todas as organizações e repositórios.

{% data reusables.profile.access_profile %}
2. No topo da página de perfil, na navegação principal, clique em **Pacotes**. ![Aba Project (Projeto)](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### Leia mais

- "[Procurar pacotes](/github/searching-for-information-on-github/searching-for-packages)"
