---
title: Configurar controle de acesso e visibilidade para imagens de contêiner
intro: 'Escolha quem tem acesso de leitura, gravação ou administrador à sua imagem de contêiner e a visibilidade das suas imagens de contêiner em {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  free-pro-team: '*'
---
{% data reusables.package_registry.container-registry-beta %}

### Configurar acesso a imagens de contêiner para sua conta pessoal

Se você tiver permissões de administrador para uma imagem de contêiner pertencente a uma conta de usuário, você poderá atribuir funções de leitura, gravação ou administrador para outros usuários. Para obter mais informações sobre essas funções de permissão, consulte "[Visibilidade e permissões de acesso para imagens de contêiner](/packages/getting-started-with-github-container-registry/about-github-container-registry#visibility-and-access-permissions-for-container-images)".

{% data reusables.package_registry.package-settings-from-user-level %}
1. Na página de configurações do pacote, clique em **Convidar equipes ou pessoas** e digite o nome, nome de usuário ou e-mail da pessoa à qual você deseja conceder acesso. As equipes não podem ter acesso a uma imagem de contêiner de uma conta de usuário. ![Botão de convite de acesso ao contêiner](/assets/images/help/package-registry/container-access-invite.png)
1. Ao lado do nome de usuário ou nome de equipe, use o menu suspenso "Função" para selecionar um nível de permissão desejado. ![Opções de acesso ao contêiner](/assets/images/help/package-registry/container-access-control-options.png)

Os usuários selecionados receberão acesso automaticamente e não precisarão aceitar um convite primeiro.

### Configurar o acesso a imagens de contêiner para uma organização

Se você tiver permissões de administrador para uma imagem de contêiner pertencente à organização, pode atribuir funções de leitura, gravação ou administrador para outros usuários e equipes. Para obter mais informações sobre essas funções de permissão, consulte "[Visibilidade e permissões de acesso para imagens de contêiner](/packages/getting-started-with-github-container-registry/about-github-container-registry#visibility-and-access-permissions-for-container-images)".

If your package is private or internal and owned by an organization, then you can only give access to other organization members or teams.

Para a organização de contêineres de imagens, os administradores das organizações devem habilitar pacotes antes que você possa definir a visibilidade como pública. Para obter mais informações, consulte "[Habilitar suporte ao contêiner aprimorado](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)".

{% data reusables.package_registry.package-settings-from-org-level %}
1. Na página de configurações do pacote, clique em **Convidar equipes ou pessoas** e digite o nome, nome de usuário ou e-mail da pessoa à qual você deseja conceder acesso. Você também pode inserir um nome de equipe da organização para dar acesso a todos os integrantes da equipe. ![Botão de convite de acesso ao contêiner](/assets/images/help/package-registry/container-access-invite.png)
1. Ao lado do nome de usuário ou nome de equipe, use o menu suspenso "Função" para selecionar um nível de permissão desejado. ![Opções de acesso ao contêiner](/assets/images/help/package-registry/container-access-control-options.png)

Os usuários selecionados receberão acesso automaticamente e não precisarão aceitar um convite primeiro.

### Inheriting access for a container image from a repository

To simplify package management through {% data variables.product.prodname_actions %} workflows, you can enable a container image to inherit the access permissions of a repository by default.

If you inherit the access permissions of the repository where your package's workflows are stored, then you can adjust access to your package through the repository's permissions.

Once a repository is synced, you can't access the package's granular access settings. To customize the package's permissions through the granular package access settings, you must remove the synced repository first.

{% data reusables.package_registry.package-settings-from-org-level %}
2. Under "Repository source", select **Inherit access from repository (recommended)**. ![Inherit repo access checkbox](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

### Ensuring workflow access to your package

To ensure that a {% data variables.product.prodname_actions %} workflow has access to your package, you must give explicit access to the repository where the workflow is stored.

The specified repository does not need to be the repository where the source code for the package is kept. You can give multiple repositories workflow access to a package.

{% note %}

**Note:** Syncing your container image with a repository through the **Actions access** menu option is different than connecting your container to a repository. For more information about linking a repository to your container, see "[Connecting a repository to a container image](/packages/guides/connecting-a-repository-to-a-container-image)."

{% endnote %}

{% data reusables.package_registry.package-settings-from-org-level %}
1. In the left sidebar, click **Actions access**. !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Click **Add repository** and search for the repository you want to add. !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
3. Using the "role" drop-down menu, select the default access level that you'd like repository members to have to your container image. Outside collaborators will not be included. ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

To further customize access to your container image, see "[Configuring access to container images for an organization](#configuring-access-to-container-images-for-an-organization)."

### Configurar a visibilidade de imagens de contêiner para sua conta pessoal

Ao publicar um pacote, a visibilidade-padrão é privada e só você poderá ver o pacote. Você pode modificar o acesso de uma imagem do contêiner privada ou pública, alterando as configurações de acesso.

Um pacote público pode ser acessado anonimamente sem autenticação. Uma vez que você torna público o seu pacote, mas você não poderá tornar o seu pacote privado novamente.

{% data reusables.package_registry.package-settings-from-user-level %}
5. Em "Zona de Perigo", escolha uma configuração de visibilidade:
    - Para tornar a imagem do contêiner visível para qualquer pessoa, clique em **Tornar pública**.
    {% warning %}

    **Aviso:** Depois de tornar um pacote público, você não poderá torná-lo privado novamente.

    {% endwarning %}
    - Para tornar a imagem do contêiner visível para uma seleção personalizada de pessoas, clique em **Tornar privada**. ![Opções de visibilidade do contêiner](/assets/images/help/package-registry/container-visibility-option.png)

### Container creation visibility for organization members

You can choose the visibility of containers that organization members can publish by default.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. À esquerda, clique em **Pacotes**.
6. Under "Container creation", choose whether you want to enable the creation of public, private, or internal container images.
    - Para permitir que os integrantes da organização criem imagens de contêiner público, clique em **Público**.
    - Para permitir que os integrantes da organização criem imagens privadas de contêiner visíveis apenas para outros integrantes da organização, clique em **Privado**. Você pode personalizar ainda mais a visibilidade de imagens de contêiner privado.
    - **For {% data variables.product.prodname_ghe_cloud %} only:** To enable organization members to create internal container images that are only visible to other organization members, click **Internal**. ![Visibility options for container images published by organization members](/assets/images/help/package-registry/container-creation-org-settings.png)

### Configurar a visibilidade de imagens de contêiner para uma organização

Ao publicar um pacote, a visibilidade-padrão é privada e só você poderá ver o pacote. Você pode conceder a usuários ou equipes diferentes funções de acesso para sua imagem de contêiner por meio das configurações de acesso.

Um pacote público pode ser acessado anonimamente sem autenticação. Uma vez que você torna público o seu pacote, mas você não poderá tornar o seu pacote privado novamente.

Para a organização de contêineres de imagens, os administradores das organizações devem habilitar pacotes públicos antes que você possa definir a visibilidade como pública. Para obter mais informações, consulte "[Habilitar suporte ao contêiner aprimorado](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)".

{% data reusables.package_registry.package-settings-from-org-level %}
5. Em "Zona de Perigo", escolha uma configuração de visibilidade:
    - Para tornar a imagem do contêiner visível para qualquer pessoa, clique em **Tornar pública**.
    {% warning %}

    **Aviso:** Depois de tornar um pacote público, você não poderá torná-lo privado novamente.

    {% endwarning %}
    - Para tornar a imagem do contêiner visível para uma seleção personalizada de pessoas, clique em **Tornar privada**. ![Opções de visibilidade do contêiner](/assets/images/help/package-registry/container-visibility-option.png)
