---
title: Visualizar pacotes
intro: 'É possível ver informações sobre pacotes publicados em um repositório e limitar os resultados por organização ou usuário.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
permissions: Qualquer pessoa com permissão de leitura em um repositório pode ver os pacotes do repositório.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### Sobre a visualização de pacotes

Os pacotes devem ser instalados no nível do repositório, mas você pode visualizar todos os pacotes em uma organização e todos os pacotes que você publicou. {% data reusables.package_registry.package-page-info %}

### Visualizar pacotes de um repositório

É possível ver todos os pacotes em um repositório e pesquisar um pacote específico no repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Visualizar pacotes de uma organização

Você pode ver todos os pacotes instalados em uma organização e pesquisar um pacote específico instalado nos repositórios de uma organização.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. Abaixo do nome da sua organização, clique em
{% octicon "package" aria-label="The package icon" %} **Pacotes**.
{% data reusables.package_registry.navigate-to-packages %}

### Visualizar seus pacotes

Você pode ver todos os pacotes que você instalou e pesquisar um pacote específico que você instalou em todas as organizações e repositórios.

{% data reusables.profile.access_profile %}
2. No topo da página de perfil, na navegação principal, clique em **Pacotes**. ![Aba Project (Projeto)](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### Leia mais

- "[Procurar pacotes](/github/searching-for-information-on-github/searching-for-packages)"
