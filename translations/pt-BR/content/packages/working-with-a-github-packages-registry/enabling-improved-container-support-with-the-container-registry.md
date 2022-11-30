---
title: Habilitar suporte aprimorado com registro do contêiner
intro: 'Para usar o {% data variables.product.prodname_container_registry %}, você precisa habilitá-lo para a sua conta de usuário ou organização.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  free-pro-team: '*'
---

{% note %}

**Observação:** O {% data variables.product.prodname_container_registry %} está atualmente em beta público e está sujeito a alterações. Durante o beta, o armazenamento e a banda larga são grátis. Para obter mais informações, consulte "[Introdução a {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages)".

{% endnote %}

{% data reusables.package_registry.docker-vs-container-registry %}

### Habilitar {% data variables.product.prodname_container_registry %} para a sua conta pessoal

Uma vez que a {% data variables.product.prodname_container_registry %} esteja habilitado para a sua conta pessoal de usuário, você poderá publicar contêineres para o {% data variables.product.prodname_container_registry %} que é proprietário da sua conta de usuário.

Para usar {% data variables.product.prodname_container_registry %} em uma organização, o proprietário da organização deve habilitar o recurso para os integrantes da organização.

{% data reusables.feature-preview.feature-preview-setting  %}
2. À esquerda, selecione "Suporte ao contêiner aprimorado" e, em seguida, clique em **Habilitar**. ![Suporte ao contêiner aprimorado](/assets/images/help/settings/improved-container-support.png)

### Habilitar {% data variables.product.prodname_container_registry %} para a conta da sua organização

Antes que os proprietários ou integrantes da organização possam publicar imagens do contêiner para {% data variables.product.prodname_container_registry %}, um proprietário da organização deverá habilitar a visualização do recurso para a organização.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. À esquerda, clique em **Pacotes**.
5. Em "Melhorar suporte ao container", selecione "Suporte ao contêiner aprimorado" e clique em **Salvar**. ![Opção de habilitar suporte de registro do contêiner e botão de salvar](/assets/images/help/package-registry/enable-improved-container-support-for-orgs.png)
6. Em "Criação de contêiner", escolha se deseja permitir a criação de imagens públicas, privadas ou internas de contêineres.
    - Para permitir que os integrantes da organização criem imagens de contêiner público, selecione **Público**.
    - Para permitir que os integrantes da organização criem imagens privadas de contêiner que são visíveis apenas para outros integrantes da organização, selecione **Privado**. Você pode personalizar ainda mais a visibilidade de imagens de contêiner privado. Para obter mais informações, consulte "[Configurar o controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".
    - **Apenas para {% data variables.product.prodname_ghe_cloud %}:** Para permitir que os integrantes da organização criem imagens internas de contêiner visíveis apenas para outros integrantes da organização, selecione **Interno**. ![Opções de visibilidade para imagens de contêiner publicadas por integrantes da organização](/assets/images/help/package-registry/container-creation-org-settings.png)
