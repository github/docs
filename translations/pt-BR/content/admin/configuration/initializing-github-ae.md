---
title: Inicializar o GitHub AE
intro: 'Para deixar a sua empresa pronta para uso, você pode definir a configuração inicial de {% data variables.product.product_name %}.'
versions:
  github-ae: '*'
---

### Sobre a inicialização

Antes de inicializar sua empresa, você deve comprar {% data variables.product.product_name %}. Para mais informações, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

Após comprar {% data variables.product.product_name %}, pediremos que você informe um endereço de e-mail e nome de usuário da pessoa que deseja inicializar a empresa. O seu gerente de conta técnico dedicado em {% data variables.contact.enterprise_support %} criará uma conta para o proprietário da empresa e enviará um e-mail para o dono da empresa para entrar em {% data variables.product.product_name %} e concluir a inicialização. Certifique-se de que as informações fornecidas correspondam às informações do proprietário da empresa pretendido no IdP. Para obter mais informações sobre os proprietários corporativos, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-owner)".

Durante a inicialização, o proprietário da empresa irá nomear a sua empresa, configurar o SAML SSO, criar políticas para todas as organizações da sua empresa e configurar um contato de suporte para seus usuários.

### Pré-requisitos

{% note %}

**Observação**: Antes de dar início à inicialização, armazene o nome de usuário e senha iniciais para {% data variables.product.prodname_ghe_managed %} de forma segura em um gerenciador de senhas. {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

1. Para inicializar {% data variables.product.product_location %}, você deve ter um provedor de identidade (IdP) SAML. {% data reusables.saml.ae-uses-saml-sso %} Para conectar seu IdP à sua empresa durante a inicialização, você deve ter a URL do ID da Entidade do seu IdP (SSO), a URL do ID do Emissor e o certificado de assinatura pública (codificado em Base64). Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso para sua empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)".

    {% note %}

    **Observação**: {% data reusables.saml.create-a-machine-user %}

    {% endnote %}

2. {% data reusables.saml.assert-the-administrator-attribute %}

### Efetuar login e nomear a sua empresa

1. Siga as instruções no seu e-mail de boas-vindas para chegar à sua empresa.
2. Digite as suas credenciais em "Alterar senha" e, em seguida, clique em **Alterar senha**.
3. Em "Como você gostaria que sua conta corporativa fosse nomeada?", digite o nome da empresa e clique em **Salvar e continuar**. ![Botão "Salvar e continuar" para nomear uma empresa](/assets/images/enterprise/configuration/ae-enterprise-configuration.png)

### Conectar o seu IdP à sua empresa

Para configurar a autenticação para {% data variables.product.product_name %}, você deve fornecer os detalhes do seu IdP SAML para {% data variables.product.product_name %}. {% data variables.product.company_short %} recomenda usar o Azure AD como seu IdP. Para obter mais informações, consulte "[Configurar a autenticação e provisionamento com seu provedor de identidade](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)".

1. À direita de "Configure o seu provedor de identidade", clique em **Configurar**. ![Botão "Configurar" para configuração de IdP](/assets/images/enterprise/configuration/ae-idp-configure.png)
1. Em "URL de logon", copie e cole a URL no seu IdP do SAML. ![Campo de texto para URL de logon do IdP do SAML](/assets/images/enterprise/configuration/ae-idp-sign-on-url.png)
1. Em "Emissor", copie e cole a URL do emissor para o seu IdP do SAML. ![Campo de texto para a URL do emissor do IdP do SAML](/assets/images/enterprise/configuration/ae-idp-issuer-url.png)
1. Em "Certificado público, copie e cole o certificado público no seu IdP do SAML. ![Campo de texto para o certificado público do IdP do SAML](/assets/images/enterprise/configuration/ae-idp-public-certificate.png)
1. Clique em **Testar a configuração do SAML** para garantir que a informação inserida está correta. ![Botão "Testar configuração do SAML"](/assets/images/enterprise/configuration/ae-test-saml-configuration.png)
1. Clique em **Salvar**. ![Botão "Salvar" para configuração de IdP](/assets/images/enterprise/configuration/ae-save.png)

### Configurar as suas políticas empresariais

A configuração de políticas definirá limitações para o gerenciamento do repositório e da organização para a sua empresa. Elas podem ser reconfiguradas após o processo de inicialização.

1. À direita de "Configurar as suas políticas corporativas", clique em **Configurar**. ![Botão "Configurar" para configuração de políticas](/assets/images/enterprise/configuration/ae-policies-configure.png)
2. Em "Permissões padrão de repositórios" use o menu suspenso e clique em um nível padrão de permissões para repositórios da sua empresa. Se uma pessoa tem várias possibilidades de acesso a uma organização, individualmente, por meio de uma equipe ou como integrante da organização, o nível de permissão mais alto substitui todos os níveis de permissão inferiores. Opcionalmente, para permitir que as organizações da sua empresa definam suas permissões padrão no repositório, clique em **Sem políticas** ![Menu suspenso para opções de permissões padrão do repositório](/assets/images/enterprise/configuration/ae-repository-permissions-menu.png)
3. Em "Criação de repositório", escolha se deseja permitir que os integrantes criem repositórios. Opcionalmente, para permitir que as organizações dentro da empresa definam permissões, clique em **Sem política**. ![Botão "Integrantes podem criar repositórios" para configuração de políticas corporativas](/assets/images/enterprise/configuration/ae-repository-creation-permissions.png)
4. Na "Bifurcação do repositório", escolha se deseja permitir a bifurcação de repositórios privados ou internos. Opcionalmente, para permitir que as organizações dentro da empresa definam permissões, clique em **Sem política** ![Menu suspenso para opções de permissões de bifurcação do repositório](/assets/images/enterprise/configuration/ae-repository-forking-menu.png)
5. Em "Convites do repositório", escolha se os integrantes ou proprietários ou da organização podem convidar colaboradores para repositórios. Opcionalmente, para permitir que as organizações dentro da empresa definam permissões, clique em **Sem política** ![Menu suspenso para opções de permissões de convite de repositório](/assets/images/enterprise/configuration/ae-repository-invitations-menu.png)
6. Em "Visibilidade padrão do repositório", use o menu suspenso e clique na configuração de visibilidade padrão para novos repositórios. ![Menu suspenso para opções padrão de visibilidade do repositório](/assets/images/enterprise/configuration/ae-repository-visibility-menu.png)
7. Em "Os usuários podem criar organizações", use o menu suspenso para habilitar ou desabilitar o acesso à criação da organização para os integrantes da empresa. ![Menu suspenso para opções de permissão de criação de organização](/assets/images/enterprise/configuration/ae-organization-creation-permissions-menu.png)
8. Em "Pushes forçados", use o menu suspenso e escolha se deseja permitir ou bloquear pushes forçados. ![Menu suspenso para opções de configuração de push forçado](/assets/images/enterprise/configuration/ae-force-pushes-configuration-menu.png)
9. Em "Acesso SSH ao Git", use o menu suspenso e escolha se deseja habilitar o acesso SSH ao Git para todos os repositórios da empresa. ![Menu suspenso para opções de acesso SSH ao Git](/assets/images/enterprise/configuration/ae-git-ssh-access-menu.png)
10. Clique em **Salvar** ![Botão "Salvar" para configuração das políticas corporativas](/assets/images/enterprise/configuration/ae-save.png)
11. Opcionalmente, para redefinir todas as seleções, clique em "Redefinir para as políticas padrão". ![Link para redefinir todas as políticas padrão](/assets/images/enterprise/configuration/ae-reset-default-options.png)

### Configurar seu contato de suporte interno

Você pode configurar o método que os seus usuários usarão para entrar em contato com sua equipe de suporte interno. Isto pode ser reconfigurado após o processo de inicialização.

1. À direita do "Contato de suporte interno", clique em **Configurar**. ![Botão "Configurar" para configuração do contato de suporte interno](/assets/images/enterprise/configuration/ae-support-configure.png)
2. Em "Contato de suporte interno, selecione o método para os usuários da sua empresa contactar o suporte, por meio de um URL ou endereço de e-mail. Em seguida, digite as informações de contato de suporte. ![Campo de texto para a URL de contato de suporte interno](/assets/images/enterprise/configuration/ae-support-link-url.png)
3. Clique em **Salvar**. ![Botão "Salvar" para configuração de contato de suporte do Enterprise](/assets/images/enterprise/configuration/ae-save.png)
