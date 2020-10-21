---
title: Usar SAML
redirect_from:
  - /enterprise/admin/articles/configuring-saml-authentication/
  - /enterprise/admin/articles/about-saml-authentication/
  - /enterprise/admin/user-management/using-saml
  - /enterprise/admin/authentication/using-saml
intro: 'O SAML é um padrão de autenticação e autorização baseado em XML. O {% data variables.product.prodname_ghe_server %} pode agir como provedor de serviços (SP, Service Provider) com seu provedor de identidade (IdP, Identity Provider) SAML interno.'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Serviços SAML compatíveis

{% data reusables.saml.saml-supported-idps %}

{% data reusables.saml.saml-single-logout-not-supported %}

### Considerações de nome de usuário no SAML

Cada nome de usuário do {% data variables.product.prodname_ghe_server %} é determinado por uma das seguintes afirmações na resposta SAML, ordenada por prioridade:

- Nome de usuário personalizado, se houver;
- Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, se houver;
- Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`, se houver;
- Elemento `NameID`.

O elemento `NameID` é obrigatório, mesmo que os outros atributos estejam presentes.

É criado um mapeamento entre `NameID` e o nome de usuário do {% data variables.product.prodname_ghe_server %}; assim, `NameID` deve ser persistente, exclusivo e não estar sujeito a alterações no ciclo de vida do usuário.

{% note %}

**Observação**: Se o `NameID` para um usuário for alterado no IdP, o usuário verá uma mensagem de erro ao tentar entrar na sua instância do {% data variables.product.prodname_ghe_server %}. {% if currentVersion ver_gt "enterprise-server@2.21" %}Para restaurar o acesso do usuário, você deverá atualizar o mapeamento de `NameID` da conta do usuário. Para obter mais informações, consulte "[Atualizar o `NameIDo`](#updating-a-users-saml-nameid) do SAML.{% else %} Para obter mais informações, consulte "[Erro: 'Outro usuário já possui a conta'](#error-another-user-already-owns-the-account)."{% endif %}

{% endnote %}

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### Metadados SAML

Os metadados do provedor de serviços da sua instância do {% data variables.product.prodname_ghe_server %} estão disponíveis em `http(s)://[hostname]/saml/metadata`.

Para configurar seu provedor de identidade manualmente, a URL do serviço de consumidor de declaração (ACS, Assertion Consumer Service) é `http(s)://[hostname]/saml/consume` e usa a associação `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

### Atributos SAML

Os atributos a seguir estão disponíveis. Você pode alterar seus nomes no [console de gerenciamento](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/), exceto o atributo `administrator`.

| Nome padrão do atributo | Tipo        | Descrição                                                                                                                                                                                                                                                                              |
| ----------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NameID`                | Obrigatório | Identificador de usuário persistente. Qualquer formato de identificador de nome persistente pode ser usado. O elemento `NameID` será usado para um nome de usuário do {% data variables.product.prodname_ghe_server %}, a menos que uma das declarações alternativas seja fornecida. |
| `administrador`         | Opcional    | Quando o valor for 'true', o usuário será promovido automaticamente como administrador. Qualquer outro valor ou um valor não existente rebaixará o usuário para uma conta regular.                                                                                                     |
| `nome de usuário`       | Opcional    | Nome do usuário no {% data variables.product.prodname_ghe_server %}.                                                                                                                                                                                                                 |
| `full_name`             | Opcional    | Nome do usuário exibido na página de perfil. Após o provisionamento, os usuários podem alterar seus nomes.                                                                                                                                                                             |
| `emails`                | Opcional    | Endereços de e-mail para o usuário. É possível especificar mais de um.                                                                                                                                                                                                                 |
| `public_keys`           | Opcional    | Chaves SSH públicas para o usuário. É possível especificar mais de um.                                                                                                                                                                                                                 |
| `gpg_keys`              | Opcional    | Chaves chaves GPG para o usuário. É possível especificar mais de um.                                                                                                                                                                                                                   |

### Definir configurações SAML

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Selecione **SAML**. ![Autenticação SAML](/assets/images/enterprise/management-console/auth-select-saml.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Selecionar caixa de autenticação integrada SAML](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
5. Para habilitar SSO de resposta não solicitada, selecione **IdP initiated SSO** (SSO iniciado pelo IdP). Por padrão, o {% data variables.product.prodname_ghe_server %} responderá a uma solicitação iniciada pelo Provedor de identidade (IdP) não solicitado com `AuthnRequest`. ![SAML idP SSO](/assets/images/enterprise/management-console/saml-idp-sso.png)

  {% tip %}

  **Observação**: é recomendável manter esse valor **desmarcado**. Você deve habilitar esse recurso **somente ** na rara instância em que sua implementação SAML não oferecer suporte ao SSO iniciado pelo provedor de serviços e quando recomendado pelo {% data variables.contact.enterprise_support %}.

  {% endtip %}

5. Selecione **Disable administrator demotion/promotion** (Desabilitar rebaixamento/promoção do administrador) se você **não** quiser que o provedor SAML determine direitos de administrador para usuários no {% data variables.product.product_location_enterprise %}. ![Configuração desativar administrador SAML](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
6. No campo **Sign on URL** (URL de logon), digite o ponto de extremidade HTTP ou HTTPS do seu IdP para solicitações de logon único. Esse valor é fornecido pela configuração do IdP. Se o nome do host só estiver disponível na rede interna, talvez seja necessário [configurar a {% data variables.product.product_location_enterprise %} para usar servidores de nomes internos](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/). ![Autenticação SAML](/assets/images/enterprise/management-console/saml-single-sign-url.png)
7. Como alternativa, no campo **Issuer** (Emissor), digite o nome do emissor de SAML. Fazer isso verifica a autenticidade das mensagens enviadas para a {% data variables.product.product_location_enterprise %}. ![Emissor SAML](/assets/images/enterprise/management-console/saml-issuer.png)
8. Nos menus suspensos **Signature Method** (Método de assinatura) e **Digest Method** (Método de compilação), escolha o algoritmo de hash usado pelo emissor SAML para verificar a integridade das solicitações do {% data variables.product.product_location_enterprise %}. Especifique o formato no menu suspenso **Name Identifier Format** (Formato de identificador de nome). ![Método SAML ](/assets/images/enterprise/management-console/saml-method.png)
9. Em **Verification certificate** (Certificado de verificação), clique em **Choose File** (Escolher arquivo) e escolha um certificado para validar as respostas SAML do IdP. ![Autenticação SAML](/assets/images/enterprise/management-console/saml-verification-cert.png)
10. Modifique os nomes do atributo SAML para corresponder ao IdP, se necessário, ou aceite os nomes padrão. ![Nomes de atributos SAML](/assets/images/enterprise/management-console/saml-attributes.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Revogar o acesso à {{ site.data.variables.product.product_location_enterprise }}

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Selecione **SAML**. ![Barra lateral "Todos os usuários" nas configurações de administrador do site](/assets/images/enterprise/site-admin-settings/all-users.png)
3. Na lista de usuários, clique no nome de usuário para o qual você gostaria de atualizar o mapeamento de `NameID`. ![Nome de usuário na lista de contas do usuário da instância](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. À direita de "Atualizar o NameID do SAML", clique em **Editar**. ![Botão "Editar" em "autenticação do SAML" e à direita "Atualizar o NameID do SAML"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. No campo "NameID", digite o novo `NameID` para o usuário. ![Campo "NameID" na caixa de diálogo modal com NameID digitado](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Em **Verification certificate** (Certificado de verificação), clique em **Choose File** (Escolher arquivo) e escolha um certificado para validar as respostas SAML do IdP. ![Botão "Atualizar o NameID" com o valor do NameID atualizado dentro do modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)

{% endif %}

### Revogar o acesso à {% data variables.product.product_location_enterprise %}

Se remover um usuário do seu provedor de identidade, você também deverá suspendê-lo manualmente. Caso contrário, ele continuará podendo fazer autenticação usando tokens de acesso ou chaves SSH. Para obter mais informações, consulte "[Suspender e cancelar a suspensão de usuários](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

### Requisitos de mensagem de resposta

A mensagem de resposta deve atender aos seguintes requisitos:

- O `<Destination>` elemento deve sempre ser fornecido no documento de resposta raiz e deve corresponder ao URL do ACS  somente quando o documento de resposta raiz estiver assinado. Se for assinada, a declaração será ignorada.
- O elemento `<Audience>` deve sempre ser fornecido como parte do elemento `<AudienceRestriction>`. O elemento `<Audience>` deve sempre ser fornecido como parte do elemento `<AudienceRestriction>`. Esta é a URL para a instância do {% data variables.product.prodname_ghe_server %}, como `https://ghe.corp.example.com`.
- Todas as declarações na resposta **devem** ser precedidas de assinatura digital. É possível fazer isso assinando cada elemento `<Assertion>` ou assinando o elemento `<Response>`.
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

### Autenticação SAML

Mensagens de erro de registro de {% data variables.product.prodname_ghe_server %} para autenticação do SAML falhada no registro de autenticação em  _/var/log/github/auth.log_. Para obter mais informações sobre os requisitos de resposta do SAML, consulte "[Requisitos de mensagem de resposta](#response-message-requirements)".

#### Erro: "Outro usuário já possui a conta"

Quando um usuário inicia a sessão em {% data variables.product.prodname_ghe_server %} pela primeira vez com autenticação do SAML, {% data variables.product.prodname_ghe_server %} cria uma conta de usuário na instância e mapeia o `NameID` do SAML com a conta.

Quando o usuário inicia a sessão novamente, {% data variables.product.prodname_ghe_server %} compara o mapeamento do `NameID` da conta com a resposta do IdP. Se o `NameID` na resposta do IdP não corresponder mais ao `NameID` que {% data variables.product.prodname_ghe_server %} espera para o usuário. ocorrerá uma falha no login. O usuário receberá a seguinte mensagem.

> Outro usuário já possui a conta. Solicite ao administrador que verifique o registro de autenticação.

De modo geral, a mensagem indica que o nome de usuário ou endereço de email da pessoa foi alterado no IdP. {% if currentVersion ver_gt "enterprise-server@2. 1" %}Certifique-se de que o mapeamento de `NomeID` para a conta do usuário em {% data variables.product.prodname_ghe_server %} corresponde ao `NomeID` do usuário no seu IdP. Para obter mais informações, consulte "[Atualizar o `NameID`](#updating-a-users-saml-nameid) do SAML.{% else %}Para obter ajuda para atualizar o mapeamento do `NameID`, entre em contato com {% data variables.contact.contact_ent_support %}.{% endif %}

#### Se a resposta SAML não estiver assinada ou se a assinatura não corresponder ao conteúdo, o log de autenticação mostrará a seguinte mensagem de erro:

Se `Recipient` não corresponder à URL do ACS, o log de autenticação mostrará a seguinte mensagem de erro:

```
Recipient na resposta SAML não pode ficar em branco.
```

```
Recipient na resposta SAML não era válido.
```

Certifique-se de definir o valor de `Destinatário` no seu IdP como a URL do ACS completo para a sua instância do {% data variables.product.prodname_ghe_server %}. Por exemplo, `https://ghe.corp.example.com/saml/consume`.

#### Erro: "Resposta do SAML não foi assinada ou foi modificada"

Se seu IdP não assinar a resposta do SAML ou a assinatura não corresponder ao conteúdo, será exibida a seguinte mensagem de erro no registro de autenticação.

```
Resposta SAML não assinada ou modificada.
```

Certifique-se de que você configurou as declarações assinadas para o aplicativo de {% data variables.product.prodname_ghe_server %} no seu IdP.

#### Erro: "Audiência é inválida" ou "Nenhuma declaração encontrada"

Se a resposta do IdP tiver um valor ausente ou incorreto para `Audiência`, a seguinte mensagem de erro aparecerá no registro de autenticação.

```shell
Audience inválido. O atributo Audience não corresponde a url_sua_instância
```

Certifique-se de definir o valor para `Audiência` no seu IdP para a `EntityId` para a sua instância do {% data variables.product.prodname_ghe_server %}, que é a URL completa para sua instância do {% data variables.product.prodname_ghe_server %}. Por exemplo, `https://ghe.corp.example.com`.
