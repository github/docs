---
title: Usar SAML
redirect_from:
  - /enterprise/admin/articles/configuring-saml-authentication
  - /enterprise/admin/articles/about-saml-authentication
  - /enterprise/admin/user-management/using-saml
  - /enterprise/admin/authentication/using-saml
  - /admin/authentication/using-saml
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-saml
intro: 'You can configure SAML single sign-on (SSO) for {% data variables.product.product_name %}, which allows users to authenticate through a SAML identity provider (IdP) to access your instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## About SAML for {% data variables.product.product_name %}

SAML SSO allows people to authenticate and access {% data variables.product.product_location %} through an external system for identity management.

O SAML é um padrão de autenticação e autorização baseado em XML. When you configure SAML for {% data variables.product.product_location %}, the external system for authentication is called an identity provider (IdP). Your instance acts as a SAML service provider (SP). For more information, see [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) on Wikipedia.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Serviços SAML compatíveis

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

If your IdP supports encrypted assertions, you can configure encrypted assertions on {% data variables.product.product_name %} for increased security during the authentication process.

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

## Considerações de nome de usuário no SAML

Cada nome de usuário do {% data variables.product.prodname_ghe_server %} é determinado por uma das seguintes afirmações na resposta SAML, ordenada por prioridade:

- Nome de usuário personalizado, se houver;
- Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, se houver;
- Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`, se houver;
- Elemento `NameID`.

O elemento `NameID` é obrigatório, mesmo que os outros atributos estejam presentes.

É criado um mapeamento entre `NameID` e o nome de usuário do {% data variables.product.prodname_ghe_server %}. Portanto, o `NameID` deve ser persistente, exclusivo e não estar sujeito a alterações no ciclo de vida do usuário.

{% note %}

**Observação**: Se o `NameID` para um usuário for alterado no IdP, o usuário verá uma mensagem de erro ao tentar entrar na sua instância do {% data variables.product.prodname_ghe_server %}. {% ifversion ghes %}Para restaurar o acesso do usuário, você precisa atualizar o mapeamento do `NameID` da conta do usuário. Para obter mais informações, consulte "[Atualizar o `NameIDo`](#updating-a-users-saml-nameid) do SAML.{% else %} Para obter mais informações, consulte "[Erro: 'Outro usuário já possui a conta'](#error-another-user-already-owns-the-account)."{% endif %}

{% endnote %}

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

## Metadados SAML

The service provider metadata for {% data variables.product.product_location %} is available at `http(s)://[hostname]/saml/metadata`.

Para configurar seu provedor de identidade manualmente, a URL do serviço de consumidor de declaração (ACS, Assertion Consumer Service) é `http(s)://[hostname]/saml/consume` e usa a associação `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

## Atributos SAML

Os atributos a seguir estão disponíveis. Você pode alterar os nomes de atributos no [console de gerenciamento](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/), com exceção do atributo `administrador`.

| Nome padrão do atributo | Tipo        | Descrição                                                                                                                                                                                                                                                                              |
| ----------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NameID`                | Obrigatório | Identificador de usuário persistente. Qualquer formato de identificador de nome persistente pode ser usado. O elemento `NameID` será usado para um nome de usuário do {% data variables.product.prodname_ghe_server %}, a menos que uma das declarações alternativas seja fornecida. |
| `administrador`         | Opcional    | Quando o valor for 'true', o usuário será promovido automaticamente como administrador. Qualquer outro valor ou um valor não existente rebaixará o usuário para uma conta regular.                                                                                                     |
| `nome de usuário`       | Opcional    | Nome do usuário no {% data variables.product.prodname_ghe_server %}.                                                                                                                                                                                                                 |
| `full_name`             | Opcional    | Nome do usuário exibido na página de perfil. Após o provisionamento, os usuários podem alterar seus nomes.                                                                                                                                                                             |
| `emails`                | Opcional    | Endereços de e-mail para o usuário. É possível especificar mais de um.                                                                                                                                                                                                                 |
| `public_keys`           | Opcional    | Chaves SSH públicas para o usuário. É possível especificar mais de um.                                                                                                                                                                                                                 |
| `gpg_keys`              | Opcional    | Chaves chaves GPG para o usuário. É possível especificar mais de um.                                                                                                                                                                                                                   |

Para especificar mais de um valor para um atributo, use múltiplos elementos de `<saml2:AttributeValue>`.

```
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## Definir configurações SAML

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Selecione **SAML**.

   ![Screenshot of option to enable SAML authentication in management console](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Screenshot of option to enable built-in authentication outside of SAML IdP](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. Para habilitar SSO de resposta não solicitada, selecione **IdP initiated SSO** (SSO iniciado pelo IdP). Por padrão, o {% data variables.product.prodname_ghe_server %} responderá a uma solicitação iniciada pelo Provedor de identidade (IdP) não solicitado com `AuthnRequest`.

   ![Screenshot of option to enable IdP-initiated unsolicited response](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Observação**: recomendamos manter este valor **não selecionado**. Você deve habilitar esse recurso **somente ** na rara instância em que sua implementação SAML não oferecer suporte ao SSO iniciado pelo provedor de serviços e quando recomendado pelo {% data variables.contact.enterprise_support %}.

   {% endtip %}

1. Selecione **Disable administrator demotion/promotion** (Desabilitar rebaixamento/promoção do administrador) se você **não** quiser que o provedor SAML determine direitos de administrador para usuários no {% data variables.product.product_location %}.

   ![Screenshot of option to enable option to respect the "administrator" attribute from the IdP to enable or disable administrative rights](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
1. Optionally, to allow {% data variables.product.product_location %} to send and receive encrypted assertions to and from your SAML IdP, select **Require encrypted assertions**. For more information, see "[Enabling encrypted assertions](#enabling-encrypted-assertions)."

   ![Screenshot of "Enable encrypted assertions" checkbox within management console's "Authentication" section](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)

   {% warning %}

   **Warning**: Incorrectly configuring encrypted assertions can cause all authentication to {% data variables.product.product_location %} to fail.

   - You must ensure that your IdP supports encrypted assertions and that the encryption and key transport methods in the management console match the values configured on your IdP. You must also provide {% data variables.product.product_location %}'s public certificate to your IdP. For more information, see "[Enabling encrypted assertions](#enabling-encrypted-assertions)."

   - Before enabling encrypted assertions, {% data variables.product.company_short %} recommends testing encrypted assertions in a staging environment, and confirming that SAML authentication functions as you expect. Para obter mais informações, consulte "[Configurar instância de preparo](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

   {% endwarning %}
1. No campo **URL de logon único**, digite o ponto de extremidade de HTTP ou HTTPS no seu IdP para solicitações de logon único. Esse valor é fornecido pela configuração do IdP. Se o host estiver disponível apenas na sua rede interna, você pode precisar que [configure {% data variables.product.product_location %} para usar servidores de nomes internos](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/).

   ![Screenshot of text field for single sign-on URL](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. Como alternativa, no campo **emissor**, digite o nome do emissor do SAML. Fazer isso verifica a autenticidade das mensagens enviadas para {% data variables.product.product_location %}.

   ![Screenshot of text field for SAML issuer URL](/assets/images/enterprise/management-console/saml-issuer.png)
1. Nos menus suspensos **Método de assinatura** e **Método de compilação**, escolha o algoritmo de hash usado pelo emissor SAML para verificar a integridade das solicitações do {% data variables.product.product_location %}. Especifique o formato com menu suspenso **Formato do Identificador do Nome**.

   ![Screenshot of drop-down menus to select signature and digest method](/assets/images/enterprise/management-console/saml-method.png)
1. Em **Verification certificate** (Certificado de verificação), clique em **Choose File** (Escolher arquivo) e escolha um certificado para validar as respostas SAML do IdP.

   ![Screenshot of button for uploading validation certificate from IdP](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. Modify the SAML attribute names to match your IdP if needed, or accept the default names.

   ![Screenshot of fields for entering additional SAML attributes](/assets/images/enterprise/management-console/saml-attributes.png)

{% ifversion ghes > 3.3 %}

## Enabling encrypted assertions

To enable encrypted assertions, your SAML IdP must also support encrypted assertions. You must provide {% data variables.product.product_location %}'s public certificate to your IdP, and configure encryption settings that match your IdP.

{% warning %}

**Warning**: Incorrectly configuring encrypted assertions can cause all authentication to {% data variables.product.product_location %} to fail. {% data variables.product.company_short %} strongly recommends testing your SAML configuration in a staging environment. For more information about staging instances, see "[Setting up a staging instance](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% endwarning %}

1. Configure SAML for {% data variables.product.product_location %}. For more information, see "[Configuring SAML settings](#configuring-saml-settings)."
{% data reusables.enterprise_installation.ssh-into-instance %}
1. Run the following command to output {% data variables.product.product_location %}'s public certificate.
   
        openssl pkcs12 -in /data/user/common/saml-sp.p12 -nokeys -passin pass:
1. In the output, copy the text beginning with `-----BEGIN CERTIFICATE-----` and ending with `-----END CERTIFICATE-----`, and paste the output into a plaintext file.
1. Sign into your SAML IdP as an administrator.
1. In the application for {% data variables.product.product_location %}, enable encrypted assertions.
   - Note the encryption method and key transport method.
   - Provide the public certificate from step 3.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Select **Require encrypted assertions**.

   ![Screenshot of "Enable encrypted assertions" checkbox within management console's "Authentication" section](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. To the right of "Encryption Method", select the encryption method for your IdP from step 5.

   ![Screenshot of "Encryption Method" for encrypted assertions](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. To the right of "Key Transport Method", select the key transport method for your IdP from step 5.

   ![Screenshot of "Key Transport Method" for encrypted assertions](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. Clique em **Save settings** (Salvar configurações).
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

{% endif %}

## Atualizando `NameID` do SAML de um usuário

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Selecione **SAML**. ![Barra lateral "Todos os usuários" nas configurações de administrador do site](/assets/images/enterprise/site-admin-settings/all-users.png)
3. Na lista de usuários, clique no nome de usuário para o qual você gostaria de atualizar o mapeamento de `NameID`. ![Nome de usuário na lista de contas do usuário da instância](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. À direita de "Atualizar o NameID do SAML", clique em **Editar**. ![Botão "Editar" em "autenticação do SAML" e à direita "Atualizar o NameID do SAML"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. No campo "NameID", digite o novo `NameID` para o usuário. ![Campo "NameID" na caixa de diálogo modal com NameID digitado](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Clique **Atualizar o NameID**. ![Botão "Atualizar o NameID" com o valor do NameID atualizado dentro do modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)

## Revogar o acesso à {% data variables.product.product_location %}

Se remover um usuário do seu provedor de identidade, você também deverá suspendê-lo manualmente. Caso contrário, ele continuará podendo fazer autenticação usando tokens de acesso ou chaves SSH. Para obter mais informações, consulte "[Suspender e cancelar a suspensão de usuários](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

## Requisitos de mensagem de resposta

A mensagem de resposta deve atender aos seguintes requisitos:

- O `<Destination>` elemento deve sempre ser fornecido no documento de resposta raiz e deve corresponder ao URL do ACS  somente quando o documento de resposta raiz estiver assinado. Se for assinada, a declaração será ignorada.
- O elemento `<Audience>` deve sempre ser fornecido como parte do elemento `<AudienceRestriction>`. Ele deve corresponder ao `EntityId` para {% data variables.product.prodname_ghe_server %}. Esta é a URL para a instância do {% data variables.product.prodname_ghe_server %}, como `https://ghe.corp.example.com`.
- Cada asserção na resposta **deve** ser protegida por uma assinatura digital. É possível fazer isso assinando cada elemento `<Assertion>` ou assinando o elemento `<Response>`.
- Um elemento `<NameID>` deve ser fornecido como parte do elemento `<Subject>`. Qualquer formato de identificador de nome persistente pode ser usado.
- O atributo `Recipient` deve estar presente e definido na URL do ACS. Por exemplo:

```xml
<samlp:Response ...>
  <saml:Assertion ...>
    <saml:Subject>
      <saml:NameID ...>...</saml:NameID>
      <saml:SubjectConfirmation ...>
        <saml:SubjectConfirmationData Recipient="https://ghe.corp.example.com/saml/consume" .../>
      </saml:SubjectConfirmation>
    </saml:Subject>
    <saml:AttributeStatement>
      <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
        <saml:AttributeValue>monalisa</saml:AttributeValue>
      </saml:Attribute>
    </saml:AttributeStatement>
  </saml:Assertion>
</samlp:Response>
```

## Autenticação SAML

Mensagens de erro de registro de {% data variables.product.prodname_ghe_server %} para autenticação do SAML falhada no registro de autenticação em  _/var/log/github/auth.log_. Para obter mais informações sobre os requisitos de resposta do SAML, consulte "[Requisitos de mensagem de resposta](#response-message-requirements)".

### Erro: "Outro usuário já possui a conta"

Quando um usuário inicia a sessão em {% data variables.product.prodname_ghe_server %} pela primeira vez com autenticação do SAML, {% data variables.product.prodname_ghe_server %} cria uma conta de usuário na instância e mapeia o `NameID` do SAML com a conta.

Quando o usuário inicia a sessão novamente, {% data variables.product.prodname_ghe_server %} compara o mapeamento do `NameID` da conta com a resposta do IdP. Se o `NameID` na resposta do IdP não corresponder mais ao `NameID` que {% data variables.product.prodname_ghe_server %} espera para o usuário. ocorrerá uma falha no login. O usuário receberá a seguinte mensagem.

> Outro usuário já possui a conta. Solicite ao administrador que verifique o registro de autenticação.

De modo geral, a mensagem indica que o nome de usuário ou endereço de email da pessoa foi alterado no IdP. {% ifversion ghes %}Certifique-se de que o mapeamento do `NameID` para a conta do usuário no {% data variables.product.prodname_ghe_server %} corresponde ao `NameID` do usuário no seu IdP. Para obter mais informações, consulte "[Atualizar o `NameID`](#updating-a-users-saml-nameid) do SAML.{% else %}Para obter ajuda para atualizar o mapeamento do `NameID`, entre em contato com {% data variables.contact.contact_ent_support %}.{% endif %}

### Se a resposta SAML não estiver assinada ou se a assinatura não corresponder ao conteúdo, o log de autenticação mostrará a seguinte mensagem de erro:

Se o `Destinatário` não coincide com a URL do ACS para a sua instância de {% data variables.product.prodname_ghe_server %}, uma das seguintes duas mensagens de erro aparecerá no log de autenticação quando um usuário tentar efetuar a autenticação.

```
Recipient na resposta SAML não pode ficar em branco.
```

```
Recipient na resposta SAML não era válido.
```

Certifique-se de definir o valor de `Destinatário` no seu IdP como a URL do ACS completo para a sua instância do {% data variables.product.prodname_ghe_server %}. Por exemplo, `https://ghe.corp.example.com/saml/consume`.

### Erro: "Resposta do SAML não foi assinada ou foi modificada"

Se seu IdP não assinar a resposta do SAML ou a assinatura não corresponder ao conteúdo, será exibida a seguinte mensagem de erro no registro de autenticação.

```
Resposta SAML não assinada ou modificada.
```

Certifique-se de que você configurou as declarações assinadas para o aplicativo de {% data variables.product.prodname_ghe_server %} no seu IdP.

### Erro: "Audiência é inválida" ou "Nenhuma declaração encontrada"

Se a resposta do IdP tiver um valor ausente ou incorreto para `Audiência`, a seguinte mensagem de erro aparecerá no registro de autenticação.

```shell
Audience inválido. O atributo Audience não corresponde a url_sua_instância
```

Certifique-se de definir o valor para `Audiência` no seu IdP para a `EntityId` para a sua instância do {% data variables.product.prodname_ghe_server %}, que é a URL completa para sua instância do {% data variables.product.prodname_ghe_server %}. Por exemplo, `https://ghe.corp.example.com`.
