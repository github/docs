---
title: Usar SAML
redirect_from:
  - /enterprise/admin/articles/configuring-saml-authentication/
  - /enterprise/admin/articles/about-saml-authentication/
  - /enterprise/admin/user-management/using-saml
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

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### Metadados SAML

Os metadados do provedor de serviços da sua instância do {% data variables.product.prodname_ghe_server %} estão disponíveis em `http(s)://[hostname]/saml/metadata`.

Para configurar seu provedor de identidade manualmente, a URL do serviço de consumidor de declaração (ACS, Assertion Consumer Service) é `http(s)://[hostname]/saml/consume` e usa a associação `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

### Atributos SAML

Os atributos a seguir estão disponíveis. Você pode alterar seus nomes no [console de gerenciamento](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console/), exceto o atributo `administrator`.

| Nome padrão do atributo | Tipo        | Descrição                                                                                                                                                                                                                                                                                   |
| ----------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NameID`                | Obrigatório | Identificador de usuário persistente. Qualquer formato de identificador de nome persistente pode ser usado. O elemento `NameID` será usado para um nome de usuário do {% data variables.product.prodname_ghe_server %}, a menos que uma das declarações alternativas seja fornecida. |
| `administrator`         | Opcional    | Quando o valor for 'true', o usuário será promovido automaticamente como administrador. Qualquer outro valor ou um valor não existente rebaixará o usuário para uma conta regular.                                                                                                          |
| `nome de usuário`       | Opcional    | Nome do usuário no {% data variables.product.prodname_ghe_server %}.                                                                                                                                                                                                                 |
| `full_name`             | Opcional    | Nome do usuário exibido na página de perfil. Após o provisionamento, os usuários podem alterar seus nomes.                                                                                                                                                                                  |
| `emails`                | Opcional    | Endereços de e-mail para o usuário. É possível especificar mais de um.                                                                                                                                                                                                                      |
| `public_keys`           | Opcional    | Chaves SSH públicas para o usuário. É possível especificar mais de um.                                                                                                                                                                                                                      |
| `gpg_keys`              | Opcional    | Chaves chaves GPG para o usuário. É possível especificar mais de um.                                                                                                                                                                                                                        |

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

### Revogar o acesso à {% data variables.product.product_location_enterprise %}

Se remover um usuário do seu provedor de identidade, você também deverá suspendê-lo manualmente. Caso contrário, ele continuará podendo fazer autenticação usando tokens de acesso ou chaves SSH. Para obter mais informações, consulte "[Suspender e cancelar a suspensão de usuários](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".

### Requisitos de mensagem de resposta

A mensagem de resposta deve atender aos seguintes requisitos:

- O `<Destination>` elemento deve sempre ser fornecido no documento de resposta raiz e deve corresponder ao URL do ACS  somente quando o documento de resposta raiz estiver assinado. Se for assinada, a declaração será ignorada.
- O elemento `<Audience>` deve sempre ser fornecido como parte do elemento `<AudienceRestriction>`. Ele corresponde ao ID da Entidade {% data variables.product.prodname_ghe_server %}. Esta é a URL para a instância do {% data variables.product.prodname_ghe_server %}, como `https://ghe.corp.example.com`.
- Todas as declarações na resposta **devem** ser precedidas de assinatura digital. É possível fazer isso assinando cada elemento `<Assertion>` ou assinando o elemento `<Response>`.
- Um elemento `<NameID>` deve ser fornecido como parte do elemento `<Subject>`. Qualquer formato de identificador de nome persistente pode ser usado.
- O atributo `Recipient` deve estar presente e definido na URL do ACS. Como por exemplo:

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

### Mensagens de erro

Se `Recipient` não corresponder à URL do ACS, o log de autenticação mostrará a seguinte mensagem de erro:

```
Recipient na resposta SAML não era válido.
```

Se `Recipient` não for parte da mensagem de resposta, o log de autenticação mostrará a seguinte mensagem de erro:

```
Recipient na resposta SAML não pode ficar em branco.
```

Se a resposta SAML não estiver assinada ou se a assinatura não corresponder ao conteúdo, o log de autenticação mostrará a seguinte mensagem de erro:

```
Resposta SAML não assinada ou modificada.
```
Se `Audience` estiver ausente ou não corresponder ao ID de entidade do {% data variables.product.prodname_ghe_server %}, o log de autenticação mostrará a seguinte mensagem de erro:

```
Audience inválido. O atributo Audience não corresponde a url_sua_instância
```
