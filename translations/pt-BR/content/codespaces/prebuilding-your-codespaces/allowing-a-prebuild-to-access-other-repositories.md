---
title: Permitindo que uma pré-compilação acesse outros repositórios
shortTitle: Permitindo o acesso ao repositório externo
intro: 'Você pode permitir que sua pré-compilação acesse outros repositórios de {% data variables.product.prodname_dotcom %} para que possam ser compilados com sucesso.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
---

Por padrão, o fluxo de trabalho de {% data variables.product.prodname_actions %} para uma configuração de pré-compilação só pode acessar o próprio conteúdo do repositório. Seu projeto pode usar recursos adicionais localizados em outro lugar, para construir o ambiente de desenvolvimento.

## Permitindo recursos externos do acesso de leitura a uma pré-compilação

Você pode configurar o acesso de leitura para outros repositórios {% data variables.product.prodname_dotcom %}, com o mesmo proprietário do repositório, especificando permissões no arquivo `devcontainer.json` usado pela configuração da sua pré-compilação. Para obter mais informações, consulte "[Gerenciar o acesso a outros repositórios dentro de seu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

{% note %}

**Observação**: Você só pode autorizar permissões de leitura desta forma, e o proprietário do repositório de destino deve ser o mesmo que o proprietário do repositório para o qual você está criando uma pré-compilação. Por exemplo, se você estiver criando uma configuração de pré-compilação para o repositório `octo-org/octocat`, você poderá conceder permissões de leitura para outros `octo-org/*` repositórios se isso for especificado no arquivo `devcontainer.json ` e forneceu as permissões você mesmo.

{% endnote %}

Ao criar ou editar uma configuração de pré-compilação para um arquivo `devcontainer.json` que configura acesso de leitura para outros repositórios com o mesmo proprietário do repositório, será solicitado que você conceda essas permissões ao clicar em **Criar** ou **Atualizar**. Para obter mais informações, consulte "[Configurando pré-criações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

## Permitindo recursos externos do acesso de gravação a uma pré-compilação

Se o seu projeto precisar de acesso de gravação aos recursos, ou se os recursos externos residirem em um repositório com um proprietário diferente do repositório para o qual você está criando uma configuração pré-compilada, você poderá usar um token de acesso pessoal (PAT) para conceder este acesso.

Você precisará criar uma nova conta pessoal e, em seguida, usar esta conta para criar um PAT com o escopo apropriado.

1. Crie uma nova conta pessoal em {% data variables.product.prodname_dotcom %}.

   {% warning %}

   **Aviso**: Embora você possa gerar o PAT usando a sua conta pessoal existente, é altamente recomendável que você crie uma nova conta com acesso apenas aos repositórios de destino necessários para seu cenário. Isso acontece porque a permissão do `repositório` do token de acesso concede acesso a todos os repositórios aos quais a conta tem acesso. Para obter mais informações, consulte "[Inscrevendo-se para uma nova conta no GitHub](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)" e "[Fortalecimento da segurança para {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)".

   {% endwarning %}
1. Dê a nova conta acesso de leitura aos repositórios necessários. Para obter mais informações, consulte "[Gerenciar o acesso de um indivíduo ao repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)".
1. Enquanto estiver conectado à nova conta, crie um PAT com o escopo `repo`. Opcionalmente, se a pré-compilação tiver de fazer o download do {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, selecione também o escopo `read:packages`. Para obter mais informações, consulte "[Criando um token de acesso pessoal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

   ![Escopos "repo" e "pacotes" selecionados para um PAT](/assets/images/help/codespaces/prebuilds-select-scopes.png)

   Se a pré-compilação usar um pacote do {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, você deverá conceder o novo acesso à nova conta ao pacote ou configurar o pacote para herdar as permissões de acesso do repositório que você está pré-compilando. Para obter mais informações, consulte "[Configurar o controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".
{% ifversion ghec %}1. Autorizar o token para uso com o logon único SAML (SSO), para que ele possa acessar repositórios que são propriedade de organizações com SSO habilitado. Para obter mais informações, consulte "[Autorizar um token de acesso pessoal para uso com o logon único SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

   ![O botão para configurar o SSO para um PAT](/assets/images/help/codespaces/configure-SSO-for-PAT.png)

{% endif %}
1. Copie a string do token. Você irá atribuir isto a um segredo de repositório de {% data variables.product.prodname_codespaces %}.
1. Efetue novamente o login na conta com acesso de administrador ao repositório.
1. No repositório para o qual você deseja criar as pré-compilações de {% data variables.product.prodname_codespaces %}, crie um novo segredo de repositório de {% data variables.product.prodname_codespaces %} chamado `CODESPACES_PREBUILD_TOKEN`, dando-lhe o valor do token que você criou e copiou. Para obter mais informações, consulte "[Gerenciando segredos criptografados para o seu repositório e organização para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)".

O PAT será usado para todas as pré-compilações subsequentes criadas para o seu repositório. Ao contrário de outros segredos do repositório de {% data variables.product.prodname_codespaces %}, o segredo `CODESPACES_PREBUILD_TOKEN` é usado apenas para pré-compilação e não estará disponível para uso em codespaces criados a partir do seu repositório.

## Leia mais

- "[Configurando pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Solucionar problemas de pré-compilações](/codespaces/troubleshooting/troubleshooting-prebuilds)"
