---
title: Habilitar o GitHub Container Registry para a sua organização
intro: 'Em uma organização, os administradores da organização podem permitir que os membros da organização publiquem imagens de contêineres públicos ou privados no {% data variables.product.prodname_github_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

Antes que os integrantes da organização possam publicar imagens de contêiner para {% data variables.product.prodname_github_container_registry %}, um administrador de organização deve habilitar a criação de pacotes.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Criação de pacote", escolha se deseja habilitar a criação de imagens públicas ou privadas de contêiner.
    - Para permitir que os integrantes da organização criem uma imagem de contêiner público, clique em **Público**.
    - Para permitir que os integrantes da organização criem uma imagem de contêiner privado, visível apenas para os outros integrantes da organização, clique em **Privado**. É possível personalizar ainda mais a visibilidade de uma imagem privada de contêiner. Para obter mais informações, consulte "[Configurar controle de acesso e visibilidade para imagens de contêiner](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)".

    ![Opções para habilitar pacotes públicos ou privados ](/assets/images/help/package-registry/package-creation-org-settings.png)
