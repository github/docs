---
title: Referência de configuração do SAML
shortTitle: SAML reference
intro: 'Você pode ver os metadados do SAML para {% ifversion ghec %}sua organização ou empresa no {% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}sua empresa no {% data variables.product.product_name %}{% endif %} e saber mais sobre os atributos do SAML disponíveis e os requisitos de resposta.'
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
ms.openlocfilehash: e86167793ea3de31a9ee8a2a6a651183de8fa907
ms.sourcegitcommit: 399f27841ff88f14a3880d351c282db85182ac25
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '147093115'
---
## <a name="about-saml-configuration"></a>Sobre a configuração do SAML

Para usar o SSO (logon único) do SAML para autenticação no {% data variables.product.product_name %}, você deve configurar seu IdP (provedor de identidade) do SAML externo e {% ifversion ghes %}{% data variables.product.product_location %}{% elsif ghec %}sua empresa ou organização no {% data variables.product.product_location %}{% elsif ghae %}sua empresa no {% data variables.product.product_name %}{% endif %}. Em uma configuração do SAML, o {% data variables.product.product_name %} funciona como um SP (provedor de serviços) do SAML.

Você deve inserir valores exclusivos do IdP do SAML ao configurar o SSO do SAML para o {% data variables.product.product_name %}, e também deve inserir valores exclusivos do {% data variables.product.product_name %} em seu IdP. Para obter mais informações sobre a configuração do SSO do SAML para o {% data variables.product.product_name %}, veja "[Configurando o logon único do SAML em sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %}" ou "[Habilitando e testando o logon único do SAML em sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}".

## <a name="saml-metadata"></a>Metadados SAML

{% ifversion ghec %}

Os metadados do SP para o {% data variables.product.product_name %} estão disponíveis para organizações ou empresas com SSO do SAML. O {% data variables.product.product_name %} usa a associação `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

### <a name="organizations"></a>Organizações

Você pode configurar o SSO do SAML para uma organização individual em sua empresa. Você também pode configurar o SSO do SAML para uma organização se usar uma organização individual no {% data variables.product.product_name %} e não usar uma conta corporativa. Para obter mais informações, confira "[Como gerenciar o logon único do SAML para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization)".

Os metadados do SP de uma organização no {% data variables.product.product_location %} estão disponíveis em `https://github.com/orgs/ORGANIZATION/saml/metadata`, em que **ORGANIZATION** é o nome da sua organização no {% data variables.product.product_location %}.

| Valor | Outros nomes | Descrição | Exemplo |
| :- | :- | :- | :- |
| ID da Entidade do SP | URL do SP, restrição de audiência | A URL de nível superior para sua organização em {% data variables.product.product_location %} | `https://github.com/orgs/ORGANIZATION` |
| URL do Serviço do Consumidor de Declaração (ACS) do SP | URL de resposta, destinatário ou destino | URL em que o IdP envia respostas do SAML | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| URL de logon único (SSO) do SP | | URL em que o IdP começa com SSO |  `https://github.com/orgs/ORGANIZATION/saml/sso` |

### <a name="enterprises"></a>Enterprises

Os metadados do SP de uma empresa no {% data variables.product.product_location %} estão disponíveis em `https://github.com/enterprises/ENTERPRISE/saml/metadata`, em que **ENTERPRISE** é o nome da sua empresa no {% data variables.product.product_location %}.

| Valor | Outros nomes | Descrição | Exemplo |
| :- | :- | :- | :- |
| ID da Entidade do SP | URL do SP, restrição de audiência | A URL de nível superior para sua empresa em {% data variables.product.product_location %} | `https://github.com/enterprises/ENTERPRISE` |
| URL do Serviço do Consumidor de Declaração (ACS) do SP | URL de resposta, destinatário ou destino | URL em que o IdP envia respostas do SAML | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| URL de logon único (SSO) do SP | | URL em que o IdP começa com SSO |  `https://github.com/enterprises/ENTERPRISE/saml/sso` |

{% elsif ghes %}

Os metadados do SP para {% data variables.product.product_location %} estão disponíveis em `http(s)://HOSTNAME/saml/metadata`, em que **HOSTNAME** é o nome do host da sua instância. O {% data variables.product.product_name %} usa a associação `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Valor | Outros nomes | Descrição | Exemplo |
| :- | :- | :- | :- |
| ID da Entidade do SP | URL do SP, restrição de audiência | Sua URL de nível superior para {% data variables.product.product_name %} | `http(s)://HOSTNAME`
| URL do Serviço do Consumidor de Declaração (ACS) do SP | URL de resposta, destinatário ou destino | URL em que o IdP envia respostas do SAML | `http(s)://HOSTNAME/saml/consume` |
| URL de logon único (SSO) do SP | | URL em que o IdP começa com SSO |  `http(s)://HOSTNAME/sso` |

{% elsif ghae %}

Os metadados do SP para sua empresa em {% data variables.product.product_name %} estão disponíveis em `https://HOSTNAME/saml/metadata`, em que **HOSTNAME** é o nome do host da sua empresa em {% data variables.product.product_name %}. O {% data variables.product.product_name %} usa a associação `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Valor | Outros nomes | Descrição | Exemplo |
| :- | :- | :- | :- |
| ID da Entidade do SP | URL do SP, restrição de audiência | Sua URL de nível superior para {% data variables.product.product_name %} | `https://HOSTNAME` |
| URL do Serviço do Consumidor de Declaração (ACS) do SP | URL de resposta, destinatário ou destino | URL em que o IdP envia respostas do SAML | `https://HOSTNAME/saml/consume` |
| URL de logon único (SSO) do SP | | URL em que o IdP começa com SSO |  `https://HOSTNAME/sso` |

{% endif %}

## <a name="saml-attributes"></a>Atributos SAML

Os atributos SAML a seguir estão disponíveis para {% data variables.product.product_name %}.{% ifversion ghes %} Você pode alterar os nomes de atributo no console de gerenciamento, com exceção do atributo `administrator`. Para obter mais informações, confira "[Como acessar o console de gerenciamento](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".{% endif %}

| Nome | Necessário? | Descrição |
| :- | :- | :- |
| `NameID` | Sim | Identificador de usuário persistente. Qualquer formato de identificador de nome persistente pode ser usado. {% ifversion ghec %}Se você usar uma empresa com {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} normalizará o elemento `NameID` a ser usado como um nome de usuário, a menos que uma das declarações alternativas seja fornecida. Para obter mais informações, confira "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)". |
| `SessionNotOnOrAfter` | No | A data em que {% data variables.product.product_name %} invalida a sessão associada. Após a invalidação, a pessoa deve se autenticar mais uma vez para acessar {% ifversion ghec or ghae %}recursos da sua empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. Para obter mais informações, confira "[Duração e tempo limite da sessão](#session-duration-and-timeout)". |
{%- ifversion ghes or ghae %} | `administrator` | Não | Quando o valor for `true`, {% data variables.product.product_name %} promoverá automaticamente o usuário para ser um {% ifversion ghes %}administrador do site{% elsif ghae %}proprietário da empresa{% endif %}. A definição desse atributo como algo que não seja `true` resultará em rebaixamento, desde que o valor não esteja em branco. A omissão desse atributo ou um valor em branco não vai alterar a função do usuário. | | `username` | Não | O nome de usuário para {% data variables.product.product_location %}. | {%- endif %} | `full_name` | No | {% ifversion ghec %}Se você configurar o SSO do SAML para uma empresa e usar {% data variables.product.prodname_emus %}, o{% else %}O{% endif %} nome completo do usuário a ser exibido na página de perfil do usuário. | | `emails` | Não | Os endereços de email do usuário. {% ifversion ghes or ghae %} Você pode especificar mais de um endereço.{% endif %}{% ifversion ghec or ghes %} Se você sincronizar o uso de licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_github_connect %} usará `emails` para identificar usuários exclusivos entre produtos. Para obter mais informações, confira "[Sincronizando o uso de licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".{% endif %} | | `public_keys` | Não | {% ifversion ghec %}Se você configurar o SSO do SAML para uma empresa e usar {% data variables.product.prodname_emus %}, as{% else %}As{% endif %} chaves SSH públicas para o usuário. Você pode especificar mais de uma chave. | | `gpg_keys` | Não | {% ifversion ghec %}Se você configurar o SSO do SAML para uma empresa e usar {% data variables.product.prodname_emus %}, as{% else %}As{% endif %} chaves GPG para o usuário. Você pode especificar mais de uma chave. |

Para especificar mais de um valor para um atributo, use vários elementos `<saml2:AttributeValue>`.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## <a name="saml-response-requirements"></a>Requisitos da resposta SAML

{% data variables.product.product_name %} exige que a mensagem de resposta do IdP atenda aos requisitos a seguir.

- O seu IdP precisa fornecer o elemento `<Destination>` no documento de resposta raiz e precisa corresponder à URL do ACS somente quando o documento de resposta raiz está assinado. Se o IdP assinar a declaração, {% data variables.product.product_name %} ignorará a declaração.
- O IdP sempre deve fornecer o elemento `<Audience>` como parte do elemento `<AudienceRestriction>`. O valor deve corresponder ao `EntityId` para {% data variables.product.product_name %}.{% ifversion ghes or ghae %} Esse valor é a URL em que você acessa {% data variables.product.product_location %}, como {% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`, `https://SUBDOMAIN.github.us` ou `https://SUBDOMAIN.ghe.com`{% endif %}.{% endif %}
  
  {%- ifversion ghec %}
  - Se você configurar o SAML para uma organização, esse valor será `https://github.com/orgs/ORGANIZATION`.
  - Se você configurar o SAML para uma empresa, essa URL será `https://github.com/enterprises/ENTERPRISE`.
  {%- endif %}
- Seu IdP deve proteger cada declaração na resposta com uma assinatura digital. Para fazer isso, você assina cada elemento `<Assertion>` individual ou assina o elemento `<Response>`.
- Seu IdP deve fornecer um elemento `<NameID>` como parte do elemento `<Subject>`. Você pode usar qualquer formato de identificador de nome persistente.
- Seu IdP deve incluir o atributo `Recipient`, que deve ser definido como a URL do ACS. O exemplo a seguir demonstra o atributo.

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

## <a name="session-duration-and-timeout"></a>Duração e tempo limite da sessão

Para impedir que uma pessoa se autentique com seu IdP e mantenha-se autorizada indefinidamente, o {% data variables.product.product_name %} invalida periodicamente a sessão para cada conta de usuário com acesso a {% ifversion ghec or ghae %}recursos da sua empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. Após a invalidação, a pessoa deve se autenticar com o IdP mais uma vez. Por padrão, se o IdP não declara um valor para o atributo `SessionNotOnOrAfter`, o {% data variables.product.product_name %} invalida uma sessão {% ifversion ghec %}24 horas{% elsif ghes or ghae %}uma semana{% endif %} após a autenticação bem-sucedida no IdP.

Para personalizar a duração da sessão, você poderá definir o valor do atributo `SessionNotOnOrAfter` no IdP. Se você definir um valor menor que 24 horas, o {% data variables.product.product_name %} poderá solicitar que as pessoas se autentiquem sempre que o {% data variables.product.product_name %} iniciar um redirecionamento.

{% ifversion ghec %} Para evitar erros de autenticação, recomendamos a duração mínima da sessão de quatro horas. Para saber mais, confira "[Solução de problemas de autenticação SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate)".
{% endif %}

{% note %}

**Observações**:

- No Azure AD, a política de tempo de vida configurável para tokens SAML não controla o tempo limite da sessão para o {% data variables.product.product_name %}.
- O Okta atualmente não envia o atributo `SessionNotOnOrAfter` durante a autenticação SAML com o {% data variables.product.product_name %}. Para mais informações, entre em contato com o Okta.

{% endnote %}
