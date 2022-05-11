---
title: Configuração de referência do SAML
shortTitle: Referência do SAML
intro: 'Você pode ver os metadados do SAML para {% ifversion ghec %}sua organização ou empresa no {% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}sua sua empresa em {% data variables.product.product_name %}{% endif %}, e você pode aprender mais sobre os atributos do SAML disponíveis e requisitos de resposta.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## Sobre a configuração do SAML

Para usar o logon único SAML (SSO) para autenticação em {% data variables.product.product_name %}, você deve configurar seu provedor de identidade externo do SAML (IdP) e {% ifversion ghes %}{% data variables.product.product_location %}{% elsif ghec %}sua empresa ou organização em {% data variables.product.product_location %}{% elsif ghae %}sua empresa em {% data variables.product.product_name %}{% endif %}. Em uma configuração do SAML, as funções de {% data variables.product.product_name %} como um provedor de serviço do SAML (SP).

Você deve inserir valores únicos do IdP do seu SAML ao configurar o SAML SSO para {% data variables.product.product_name %}, e você também deve inserir valores únicos de {% data variables.product.product_name %} no seu IdP. For more information about the configuration of SAML SSO for {% data variables.product.product_name %}, see "[Configuring SAML single sign-on for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %}" or "[Enabling and testing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}."

## Metadados SAML

{% ifversion ghec %}

Os metadados do SP para {% data variables.product.product_name %} estão disponíveis para organizações ou empresas com SAML SSO. {% data variables.product.product_name %} usa o vínculo `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

### Organizações

Você pode configurar o SAML SSO para uma organização individual na sua empresa. Você também pode configurar o SAML SSO para uma organização se usar uma organização individual em {% data variables.product.product_name %} e não usar uma conta corporativa. Para obter mais informações, consulte "[Gerenciando o logon único SAML para a sua organização](/organizations/managing-saml-single-sign-on-for-your-organization)".

Os metadados de SP para uma organização em {% data variables.product.product_location %} estão disponíveis em `https://github. om/orgs/ORGANIZATION/saml/metadata`, onde **ORGANIZAÇÃO** é o nome da sua organização em {% data variables.product.product_location %}.

| Valor                                                  | Outros nomes                             | Descrição                                                                                     | Exemplo                                             |
|:------------------------------------------------------ |:---------------------------------------- |:--------------------------------------------------------------------------------------------- |:--------------------------------------------------- |
| ID da Entidade do SP                                   | URL do SP, restrição do público-alvo     | O URL de nível superior para sua organização em {% data variables.product.product_location %} | `https://github.com/orgs/ORGANIZATION`              |
| URL do Serviço do Consumidor de Declaração (ACS) do SP | URL de resposta, destinatário ou destino | URL em que o IdP envia respostas do SAML                                                      | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| URL de logon único (SSO) do SP                         |                                          | URL em que o IdP começa com SSO                                                               | `https://github.com/orgs/ORGANIZATION/saml/sso`     |

### Empresas

Os metadados de SP para uma empresa em {% data variables.product.product_location %} estão disponíveis em `https://github. om/empresas/ENTERPRISE/saml/metadata`, em que **ENTERPRISE** é o nome da sua empresa em {% data variables.product.product_location %}.

| Valor                                                  | Outros nomes                             | Descrição                                                                                 | Exemplo                                                  |
|:------------------------------------------------------ |:---------------------------------------- |:----------------------------------------------------------------------------------------- |:-------------------------------------------------------- |
| ID da Entidade do SP                                   | URL do SP, restrição do público-alvo     | O URL de nível superior para sua empresa em {% data variables.product.product_location %} | `https://github.com/enterprises/ENTERPRISE`              |
| URL do Serviço do Consumidor de Declaração (ACS) do SP | URL de resposta, destinatário ou destino | URL em que o IdP envia respostas do SAML                                                  | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| URL de logon único (SSO) do SP                         |                                          | URL em que o IdP começa com SSO                                                           | `https://github.com/enterprises/ENTERPRISE/saml/sso`     |

{% elsif ghes %}

Os metadados de SP para {% data variables.product.product_location %} estão disponíveis em `http(s)://HOSTNAME/saml/metadata`, em que **NOME DE HOST** é o nome de host da sua instância. {% data variables.product.product_name %} usa o vínculo `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Valor                                                  | Outros nomes                             | Descrição                                                                | Exemplo                           |
|:------------------------------------------------------ |:---------------------------------------- |:------------------------------------------------------------------------ |:--------------------------------- |
| ID da Entidade do SP                                   | URL do SP, restrição do público-alvo     | Seu URL de nível superior para {% data variables.product.product_name %} | `http(s)://HOSTNAME`              |
| URL do Serviço do Consumidor de Declaração (ACS) do SP | URL de resposta, destinatário ou destino | URL em que o IdP envia respostas do SAML                                 | `http(s)://HOSTNAME/saml/consume` |
| URL de logon único (SSO) do SP                         |                                          | URL em que o IdP começa com SSO                                          | `http(s)://HOSTNAME/sso`          |

{% elsif ghae %}

Os metadados de SP para a sua empresa em {% data variables.product.product_name %} estão disponíveis em `https://HOSTNAME/saml/metadata`, em que o **NOME DE HOST** é o nome de host da sua empresa em {% data variables.product.product_name %}. {% data variables.product.product_name %} usa o vínculo `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Valor                                                  | Outros nomes                             | Descrição                                                                | Exemplo                         |
|:------------------------------------------------------ |:---------------------------------------- |:------------------------------------------------------------------------ |:------------------------------- |
| ID da Entidade do SP                                   | URL do SP, restrição do público-alvo     | Seu URL de nível superior para {% data variables.product.product_name %} | `https://HOSTNAME`              |
| URL do Serviço do Consumidor de Declaração (ACS) do SP | URL de resposta, destinatário ou destino | URL em que o IdP envia respostas do SAML                                 | `https://HOSTNAME/saml/consume` |
| URL de logon único (SSO) do SP                         |                                          | URL em que o IdP começa com SSO                                          | `https://HOSTNAME/sso`          |

{% endif %}

## Atributos SAML

Os seguintes atributos o SAML estão disponíveis para {% data variables.product.product_name %}.{% ifversion ghes %} Você pode alterar os nomes de atributo no console de gerenciamento, com exceção do atributo `administrador`. Para obter mais informações, consulte "[Acessando o console de gerenciamento](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".{% endif %}

| Nome                  | Obrigatório? | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:--------------------- |:------------ |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NameID`              | Sim          | Identificador de usuário persistente. Qualquer formato de identificador de nome persistente pode ser usado. {% ifversion ghec %}Se você usa uma empresa com {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} irá normalizar o elemento `NameID` para usar como um nome de usuário, a menos que seja fornecida uma das declarações alternativas. Para obter mais informações, consulte "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)". |
| `SessionNotOnOrAfter` | Não          | A data que {% data variables.product.product_name %} invalida a sessão associada. Após a invalidação, a pessoa deve efetuar a autenticação novamente para acessar {% ifversion ghec or ghae %}os recursos da sua empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. Para obter mais informações, consulte "[Duração da sessão e fim do tempo](#session-duration-and-timeout)".                                                                                                                                                                                                                      |
{%- ifversion ghes or ghae %}
| `administrator` | No | When the value is `true`, {% data variables.product.product_name %} will automatically promote the user to be a {% ifversion ghes %}site administrator{% elsif ghae %}enterprise owner{% endif %}. Any other value or a non-existent value will demote the account and remove administrative access. | | `username` | No | The username for {% data variables.product.product_location %}. |
{%- endif %}
| `full_name` | No | {% ifversion ghec %}If you configure SAML SSO for an enterprise and you use {% data variables.product.prodname_emus %}, the{% else %}The{% endif %} full name of the user to display on the user's profile page. | | `emails` | No | The email addresses for the user.{% ifversion ghes or ghae %} You can specify more than one address.{% endif %}{% ifversion ghec or ghes %} If you sync license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_github_connect %} uses `emails` to identify unique users across products. For more information, see "[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %} | | `public_keys` | No | {% ifversion ghec %}If you configure SAML SSO for an enterprise and you use {% data variables.product.prodname_emus %}, the{% else %}The{% endif %} public SSH keys for the user. You can specify more than one key. | | `gpg_keys` | No | {% ifversion ghec %}If you configure SAML SSO for an enterprise and you use {% data variables.product.prodname_emus %}, the{% else %}The{% endif %} GPG keys for the user. You can specify more than one key. |

Para especificar mais de um valor para um atributo, use múltiplos elementos de `<saml2:AttributeValue>`.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## SAML response requirements

{% data variables.product.product_name %} requires that the response message from your IdP fulfill the following requirements.

- Your IdP must provide the `<Destination>` element on the root response document and match the ACS URL only when the root response document is signed. If your IdP signs the assertion, {% data variables.product.product_name %} will ignore the assertion.
- Your IdP must always provide the `<Audience>` element as part of the `<AudienceRestriction>` element. The value must match your `EntityId` for {% data variables.product.product_name %}.{% ifversion ghes or ghae %} This value is the URL where you access {% data variables.product.product_location %}, such as {% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`, `https://SUBDOMAIN.github.us`, or `https://SUBDOMAIN.ghe.com`{% endif %}.{% endif %}

  {%- ifversion ghec %}
  - If you configure SAML for an organization, this value is `https://github.com/orgs/ORGANIZATION`.
  - If you configure SAML for an enterprise, this URL is `https://github.com/enterprises/ENTERPRISE`.
  {%- endif %}
- Your IdP must protect each assertion in the response with a digital signature. You can accomplish this by signing each individual `<Assertion>` element or by signing the `<Response>` element.
- Your IdP must provide a `<NameID>` element as part of the `<Subject>` element. You may use any persistent name identifier format.
- Your IdP must include the `Recipient` attribute, which must be set to the ACS URL. The following example demonstrates the attribute.

     ```xml
     <samlp:Response ...>
       <saml:Assertion ...>
         <saml:Subject>
           <saml:NameID ...>...</saml:NameID>
           <saml:SubjectConfirmation ...>
             <saml:SubjectConfirmationData Recipient="https://{% ifversion ghec %}github.com/enterprises/ENTERPRISE{% elsif ghes %}HOSTNAME{% elsif ghae %}SUBDOMAIN.ghe.com{% endif %}/saml/consume" .../>
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

## Session duration and timeout

To prevent a person from authenticating with your IdP and staying authorized indefinitely, {% data variables.product.product_name %} periodically invalidates the session for each user account with access to {% ifversion ghec or ghae %}your enterprise's resources{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. After invalidation, the person must authenticate with your IdP once again. By default, if your IdP does not assert a value for the `SessionNotOnOrAfter` attribute, {% data variables.product.product_name %} invalidates a session {% ifversion ghec %}24 hours{% elsif ghes or ghae %}one week{% endif %} after successful authentication with your IdP.

To customize the session duration, you may be able to define the value of the `SessionNotOnOrAfter` attribute on your IdP. If you define a value less than 24 hours, {% data variables.product.product_name %} may prompt people to authenticate every time {% data variables.product.product_name %} initiates a redirect.

{% note %}

**Atenção**:

- For Azure AD, the configurable lifetime policy for SAML tokens does not control session timeout for {% data variables.product.product_name %}.
- Okta does not currently send the `SessionNotOnOrAfter` attribute during SAML authentication with {% data variables.product.product_name %}. For more information, contact Okta.

{% endnote %}
