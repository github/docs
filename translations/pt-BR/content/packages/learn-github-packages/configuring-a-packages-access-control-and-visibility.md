---
title: Configuring a package's access control and visibility
intro: 'Escolha quem tem acesso de leitura, gravação ou administrador à sua imagem de contêiner e a visibilidade das suas imagens de contêiner em {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

Packages with granular permissions are scoped to a personal user or organization account. You can change the access control and visibility of a package separately from the repository that it is connected (or linked) to.

Currently, only the {% data variables.product.prodname_container_registry %} offers granular permissions for your container image packages.

For more information about permissions for repository-scoped packages, packages-related scopes for PATs, or managing permissions for your actions workflows, see "[About permissions for GitHub Packages](/packages/learn-github-packages/about-permissions-for-github-packages)."

### Visibilidade e permissões de acesso para imagens de contêiner

{% data reusables.package_registry.visibility-and-access-permissions %}

### Configurar acesso a imagens de contêiner para sua conta pessoal

If you have admin permissions to a container image that's owned by a user account, you can assign read, write, or admin roles to other users. Para obter mais informações sobre essas funções de permissão, consulte "[Visibilidade e permissões de acesso para imagens de contêiner](#visibility-and-access-permissions-for-container-images)".

Se o seu pacote for privado ou interno e pertencer a uma organização, você somente poderá dar acesso a outros integrantes ou equipes da organização.

{% data reusables.package_registry.package-settings-from-user-level %}
1. Na página de configurações do pacote, clique em **Convidar equipes ou pessoas** e digite o nome, nome de usuário ou e-mail da pessoa à qual você deseja conceder acesso. As equipes não podem ter acesso a uma imagem de contêiner de uma conta de usuário. ![Botão de convite de acesso ao contêiner](/assets/images/help/package-registry/container-access-invite.png)
1. Ao lado do nome de usuário ou nome de equipe, use o menu suspenso "Função" para selecionar um nível de permissão desejado. ![Opções de acesso ao contêiner](/assets/images/help/package-registry/container-access-control-options.png)

Os usuários selecionados receberão acesso automaticamente e não precisarão aceitar um convite primeiro.

### Configurar o acesso a imagens de contêiner para uma organização

Se você tiver permissões de administrador para uma imagem de contêiner pertencente à organização, pode atribuir funções de leitura, gravação ou administrador para outros usuários e equipes. Para obter mais informações sobre essas funções de permissão, consulte "[Visibilidade e permissões de acesso para imagens de contêiner](#visibility-and-access-permissions-for-container-images)".

Se o seu pacote for privado ou interno e pertencer a uma organização, você somente poderá dar acesso a outros integrantes ou equipes da organização.

Para a organização de contêineres de imagens, os administradores das organizações devem habilitar pacotes antes que você possa definir a visibilidade como pública. For more information, see "[Enabling improved container support with the Container registry](/packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry)."

{% data reusables.package_registry.package-settings-from-org-level %}
1. Na página de configurações do pacote, clique em **Convidar equipes ou pessoas** e digite o nome, nome de usuário ou e-mail da pessoa à qual você deseja conceder acesso. Você também pode inserir um nome de equipe da organização para dar acesso a todos os integrantes da equipe. ![Botão de convite de acesso ao contêiner](/assets/images/help/package-registry/container-access-invite.png)
1. Ao lado do nome de usuário ou nome de equipe, use o menu suspenso "Função" para selecionar um nível de permissão desejado. ![Opções de acesso ao contêiner](/assets/images/help/package-registry/container-access-control-options.png)

Os usuários selecionados receberão acesso automaticamente e não precisarão aceitar um convite primeiro.

### Herdar acesso a uma imagem de contêiner de um repositório

Para simplificar o gerenciamento de pacotes por meio dos fluxos de trabalho de {% data variables.product.prodname_actions %}, você pode habilitar uma imagem contêiner para herdar as permissões de acesso de um repositório por padrão.

Se você herdar as permissões de acesso do repositório onde os fluxos de trabalho do seu pacote são armazenados, posteriormente, você poderá ajustar o acesso ao seu pacote pelas permissões do repositório.

Uma vez que um repositório é sincronizado, você não poderá acessar as configurações de acesso granular do pacote. Para personalizar as permissões do pacote através das configurações de acesso ao pacote granular, você deverá remover a sincronização do repositório primeiro.

{% data reusables.package_registry.package-settings-from-org-level %}
2. Em "Fonte do repositório", selecione **Herdar acesso do repositório (recomendado)**. ![Caixa de seleção herdar acesso do repositório](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

### Garantir o acesso ao fluxo de trabalho para o seu pacote

Para garantir que um fluxo de trabalho do {% data variables.product.prodname_actions %} tenha acesso ao seu pacote, você deverá conceder acesso explícito ao repositório onde o fluxo de trabalho é armazenado.

O repositório especificado não precisa ser o repositório onde o código-fonte do pacote é mantido. Você pode conceder acesso ao fluxo de trabalho de vários repositórios para um pacote.

{% note %}

**Observação:** Sincronizar sua imagem de contêiner com um repositório por meio da opção de menu **Acesso de ações** é diferente de conectar seu contêiner a um repositório. For more information about linking a repository to your container, see "[Connecting a repository to a package](/packages/learn-github-packages/connecting-a-repository-to-a-package)."

{% endnote %}

#### {% data variables.product.prodname_actions %} access for user-account-owned container images

{% data reusables.package_registry.package-settings-from-user-level %}
1. In the left sidebar, click **Actions access**. !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. To ensure your workflow has access to your container package, you must add the repository where the workflow is stored. Click **Add repository** and search for the repository you want to add. !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
3. Using the "role" drop-down menu, select the default access level that you'd like the repository to have to your container image. ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

To further customize access to your container image, see "[Configuring access to container images for your personal account](#configuring-access-to-container-images-for-your-personal-account)."

#### {% data variables.product.prodname_actions %} access for organization-owned container images

{% data reusables.package_registry.package-settings-from-org-level %}
1. In the left sidebar, click **Actions access**. !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Click **Add repository** and search for the repository you want to add. !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
3. Usando o menu suspenso "função", selecione o nível de acesso padrão que você gostaria que os integrantes do repositório tivessem na sua imagem contêiner. Os colaboradores externos não serão incluídos. ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

Para personalizar ainda mais o acesso à sua imagem de contêiner, consulte "[Configurar acesso a imagens de contêiner para uma organização](#configuring-access-to-container-images-for-an-organization)".

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

### Visibilidade da criação de contêiner para os integrantes da organização

Você pode escolher a visibilidade de contêineres que os integrantes da organização podem publicar por padrão.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. À esquerda, clique em **Pacotes**.
6. Em "Criação de contêiner", escolha se deseja permitir a criação de imagens públicas, privadas ou internas de contêineres.
    - Para permitir que os integrantes da organização criem imagens de contêiner público, clique em **Público**.
    - Para permitir que os integrantes da organização criem imagens privadas de contêiner visíveis apenas para outros integrantes da organização, clique em **Privado**. Você pode personalizar ainda mais a visibilidade de imagens de contêiner privado.
    - **Para {% data variables.product.prodname_ghe_cloud %} apenas:** Para permitir que os integrantes da organização criem imagens internas de contêiner visíveis apenas para outros integrantes da organização, clique em **Interno**. ![Opções de visibilidade para imagens de contêiner publicadas por integrantes da organização](/assets/images/help/package-registry/container-creation-org-settings.png)

### Configurar a visibilidade de imagens de contêiner para uma organização

Ao publicar um pacote, a visibilidade-padrão é privada e só você poderá ver o pacote. Você pode conceder a usuários ou equipes diferentes funções de acesso para sua imagem de contêiner por meio das configurações de acesso.

Um pacote público pode ser acessado anonimamente sem autenticação. Uma vez que você torna público o seu pacote, mas você não poderá tornar o seu pacote privado novamente.

Para a organização de contêineres de imagens, os administradores das organizações devem habilitar pacotes públicos antes que você possa definir a visibilidade como pública. For more information, see "[Enabling improved container support with the Container registry](/packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry)."

{% data reusables.package_registry.package-settings-from-org-level %}
5. Em "Zona de Perigo", escolha uma configuração de visibilidade:
    - Para tornar a imagem do contêiner visível para qualquer pessoa, clique em **Tornar pública**.
    {% warning %}

    **Aviso:** Depois de tornar um pacote público, você não poderá torná-lo privado novamente.

    {% endwarning %}
    - Para tornar a imagem do contêiner visível para uma seleção personalizada de pessoas, clique em **Tornar privada**. ![Opções de visibilidade do contêiner](/assets/images/help/package-registry/container-visibility-option.png)
