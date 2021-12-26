---
title: Habilitar suporte ao contêiner aprimorado
intro: 'Para usar {% data variables.product.prodname_github_container_registry %}, você precisa habilitá-lo para a sua conta de usuário ou organização.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  free-pro-team: '*'
---
{% note %}

**Nota:** {% data variables.product.prodname_github_container_registry %} está atualmente em versão beta público e sujeito a alterações. Durante o beta, o armazenamento e a banda larga são grátis. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)."

{% endnote %}

### Habilitar {% data variables.product.prodname_github_container_registry %} para sua conta pessoal

Uma vez que {% data variables.product.prodname_github_container_registry %} está habilitado para a sua conta pessoal de usuário, você pode publicar contêineres em {% data variables.product.prodname_github_container_registry %} que pertencem à sua conta de usuário.

Para usar {% data variables.product.prodname_github_container_registry %} em uma organização, o dono da organização deve habilitar o recurso para os integrantes da organização.

{% data reusables.feature-preview.feature-preview-setting  %}
2. À esquerda, selecione "Suporte ao contêiner aprimorado" e, em seguida, clique em **Habilitar**. ![Suporte ao contêiner aprimorado](/assets/images/help/settings/improved-container-support.png)

### Habilitar {% data variables.product.prodname_github_container_registry %} para a conta da sua organização

Antes que os proprietários ou integrantes da organização possam publicar imagens do contêiner para {% data variables.product.prodname_github_container_registry %}, um proprietário da organização deve habilitar a pré-visualização do recurso para a organização.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. À esquerda, clique em **Pacotes**.
5. Em "Melhorar suporte ao container", selecione "Suporte ao contêiner aprimorado" e clique em **Salvar**. ![Opção de habilitar suporte de registro do contêiner e botão de salvar](/assets/images/help/package-registry/enable-improved-container-support-for-orgs.png)
6. Under "Container creation", choose whether you want to enable the creation of public, private, or internal container images.
    - Para permitir que os integrantes da organização criem imagens de contêiner público, clique em **Público**.
    - Para permitir que os integrantes da organização criem imagens privadas de contêiner visíveis apenas para outros integrantes da organização, clique em **Privado**. Você pode personalizar ainda mais a visibilidade de imagens de contêiner privado. Para obter mais informações, consulte "[Configurar controle de acesso e visibilidade para imagens de contêiner](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)".
    - **For {% data variables.product.prodname_ghe_cloud %} only:** To enable organization members to create internal container images that are only visible to other organization members, click **Internal**. ![Visibility options for container images published by organization members](/assets/images/help/package-registry/container-creation-org-settings.png)
