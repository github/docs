---
title: Configurar controle de acesso e visibilidade para imagens de contêiner
intro: 'Escolha quem tem acesso de leitura, gravação ou administrador à sua imagem de contêiner e a visibilidade das suas imagens de contêiner em {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
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

Se o seu pacote pertencer a uma organização e for privado, você só poderá conceder acesso a outros integrantes da organização ou equipes.

Para a organização de contêineres de imagens, os administradores das organizações devem habilitar pacotes antes que você possa definir a visibilidade como pública. Para obter mais informações, consulte "[Habilitar o GitHub Container Registry para sua organização](/packages/getting-started-with-github-container-registry/enabling-github-container-registry-for-your-organization)".

{% data reusables.package_registry.package-settings-from-org-level %}
1. Na página de configurações do pacote, clique em **Convidar equipes ou pessoas** e digite o nome, nome de usuário ou e-mail da pessoa à qual você deseja conceder acesso. Você também pode inserir um nome de equipe da organização para dar acesso a todos os integrantes da equipe. ![Botão de convite de acesso ao contêiner](/assets/images/help/package-registry/container-access-invite.png)
1. Ao lado do nome de usuário ou nome de equipe, use o menu suspenso "Função" para selecionar um nível de permissão desejado. ![Opções de acesso ao contêiner](/assets/images/help/package-registry/container-access-control-options.png)

Os usuários selecionados receberão acesso automaticamente e não precisarão aceitar um convite primeiro.

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

### Configurar a visibilidade de imagens de contêiner para uma organização

Ao publicar um pacote, a visibilidade-padrão é privada e só você poderá ver o pacote. Você pode conceder a usuários ou equipes diferentes funções de acesso para sua imagem de contêiner por meio das configurações de acesso.

Um pacote público pode ser acessado anonimamente sem autenticação. Uma vez que você torna público o seu pacote, mas você não poderá tornar o seu pacote privado novamente.

Para a organização de contêineres de imagens, os administradores das organizações devem habilitar pacotes públicos antes que você possa definir a visibilidade como pública. Para obter mais informações, consulte "[Habilitar o GitHub Container Registry para sua organização](/packages/getting-started-with-github-container-registry/enabling-github-container-registry-for-your-organization)".

{% data reusables.package_registry.package-settings-from-org-level %}
5. Em "Zona de Perigo", escolha uma configuração de visibilidade:
    - Para tornar a imagem do contêiner visível para qualquer pessoa, clique em **Tornar pública**.
    {% warning %}

    **Aviso:** Depois de tornar um pacote público, você não poderá torná-lo privado novamente.

    {% endwarning %}
    - Para tornar a imagem do contêiner visível para uma seleção personalizada de pessoas, clique em **Tornar privada**. ![Opções de visibilidade do contêiner](/assets/images/help/package-registry/container-visibility-option.png)
