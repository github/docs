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
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## Sobre a visualização de pacotes

A sua capacidade de visualizar um pacote depende de vários fatores. Por padrão, você pode visualizar todos os pacotes que você publicou.

Pacotes com escopo de repositórios herdam suas permissões e visibilidade do repositório que possui o pacote. Os registros abaixo usam este tipo de permissões:{% ifversion not fpt or ghec %}
- Registro Docker (`docker.pkg.github.com`){% endif %}
- Registro de npm
- Registro do Rubygems
- Registro do Apache Maven
- Registro do NuGet

{% ifversion fpt or ghec %}
O registro do contêiner oferece a opção de permissões e configurações de visibilidade granulares que podem ser personalizadas para cada pacote de propriedade de um usuário pessoal ou de uma conta de organização. Você pode optar por usar permissões granulares ou conectar o pacote a um repositório e herdar suas permissões. Para obter mais informações, consulte "[Conectar um repositório a um pacote](/packages/learn-github-packages/connecting-a-repository-to-a-package)".
{% endif %}

Para obter mais informações consulte "[Sobre permissões para o GitHub Packages](/packages/learn-github-packages/about-permissions-for-github-packages){% ifversion fpt or ghec %}" e[Configurando controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility){% endif %}."

{% data reusables.package_registry.package-page-info %}

## Visualizar pacotes de um repositório

Você pode encontrar e visualizar um pacote localizado em um repositório específico.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

## Visualizar pacotes de uma organização

Você pode encontrar e visualizar um pacote localizado nos repositórios de uma organização a que pertence.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
3. No nome da sua organização, clique em {% octicon "package" aria-label="The package icon" %} **Pacotes**.
{% data reusables.package_registry.navigate-to-packages %}

## Visualizar seus pacotes

Você pode encontrar e visualizar qualquer pacote que você publicou em todas as organizações e repositórios.

{% data reusables.profile.access_profile %}
2. No topo da página de perfil, na navegação principal, clique em **Pacotes**. ![Aba Project (Projeto)](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

## Leia mais

- "[Procurar pacotes](/search-github/searching-on-github/searching-for-packages)"
