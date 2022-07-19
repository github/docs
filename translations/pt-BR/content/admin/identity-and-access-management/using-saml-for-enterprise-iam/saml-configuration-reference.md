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

Você deve inserir valores únicos do IdP do seu SAML ao configurar o SAML SSO para {% data variables.product.product_name %}, e você também deve inserir valores únicos de {% data variables.product.product_name %} no seu IdP. Para obter mais informações sobre a configuração do SAML SSO para {% data variables.product.product_name %}, consulte "[Configurando o logon únic SAML para a sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %}" ou "[Habilitando e testando o logon único SAML para a sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}."

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
| `administrator` | Nçao | Quando o valor for `verdadeiro`, {% data variables.product.product_name %} promoverá automaticamente o usuário para ser um {% ifversion ghes %}administrador de site{% elsif ghae %}proprietário empresarial{% endif %}. Definir esse atributo para qualquer coisa menos `verdadeiro` resultará em demonstração, desde que o valor não esteja em branco. Omitir este atributo ou deixar o valor em branco não irá alterar a função do usuário. | | `username` | Não | O nome de usuário para {% data variables.product.product_location %}. |
{%- endif %}
| `full_name` | Não | {% ifversion ghec %}Se você configurar um SAML SSO para uma empresa e usar {% data variables.product.prodname_emus %}, o{% else %}O{% endif %} nome completo do usuário a ser exibido na página de perfil do usuário. | | `emails` | Nçao | O endereço de e-mail para o usuário.{% ifversion ghes or ghae %} Você pode especificar mais de um endereço.{% endif %}{% ifversion ghec or ghes %} Se você sincronizar o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_github_connect %} usará `e-mails` para identificar usuários únicos nos produtos. Para obter mais informações, consulte "[Sincronizar o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %} | | `public_keys` | Não | {% ifversion ghec %}Se você configurar o SAML SSO para uma empresa e usar {% data variables.product.prodname_emus %}, a{% else %}As{% endif %} chaves SSH públicas para o usuário. Você pode especificar mais de uma chave. | | `gpg_keys` | Não | {% ifversion ghec %}Se você configurar o SSO SAML para uma empresa e usar {% data variables.product.prodname_emus %}, as{% else %}As{% endif %} chaves GPG para o usuário. Você pode especificar mais de uma chave. |

Para especificar mais de um valor para um atributo, use múltiplos elementos de `<saml2:AttributeValue>`.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## Requisitos de resposta do SAML

{% data variables.product.product_name %} exige que a mensagem de resposta do seu IdP atenda aos seguintes requisitos.

- Seu IdP deve fornecer o elemento `<Destination>` no documento de resposta raiz e corresponder ao URL do ACS somente quando o documento de resposta raiz for assinado. Se seu IdP assinar a declaração, {% data variables.product.product_name %} irá ignorar a verificação.
- Seu IdP deve sempre fornecer o elemento `<Audience>` como parte do elemento `<AudienceRestriction>`. O valor deve corresponder ao seu `EntityId` para {% data variables.product.product_name %}.{% ifversion ghes or ghae %} Este valor é o URL onde você pode acessar {% data variables.product.product_location %}, such as {% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`, `https://SUBDOMAIN.github.us` ou `https://SUBDOMAIN.ghe.com`{% endif %}.{% endif %}

  {%- ifversion ghec %}
  - Se você configurar o SAML para uma organização, este valor será `https://github.com/orgs/ORGANIZAÇÃO`.
  - Se você configurar o SAML para uma empresa, essa URL será `https://github.com/enterprises/ENTERPRISE`.
  {%- endif %}
- Seu IdP deve proteger cada declaração na resposta com uma assinatura digital. Você pode realizar isso assinando cada elemento individual `<Assertion>` ou assinando o `elemento<Response>`.
- Seu IdP deve fornecer um elemento `<NameID>` como parte do elemento `<Subject>`. Você pode usar qualquer formato de identificador de nome persistente.
- Seu IdP deve incluir o atributo `Destinatário`, que deve ser definido como o URL do ACS. O exemplo a seguir demonstra o atributo.

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

## Duração da sessão e tempo limite

Para impedir que uma pessoa efetue a autenticação com o seu IdP e permaneça indefinidamente autorizada, {% data variables.product.product_name %} invalida periodicamente a sessão para cada conta de usuário com acesso aos {% ifversion ghec or ghae %} recursos da sua empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. Depois da invalidação, a pessoa deverá efetuar a autenticação com seu IdP novamente. Por padrão, se o seu IdP não verificar um valor para o atributo `SessionNotOnOrAfter`, {% data variables.product.product_name %} invalida uma sessão {% ifversion ghec %}24 horas{% elsif ghes or ghae %}uma semana{% endif %} após a autenticação bem-sucedida com seu IdP.

Para personalizar a duração da sessão, talvez você possa definir o valor do atributo `SessionNotOnOrAfter` no seu IdP. Se você definir um valor em menos de 24 horas, {% data variables.product.product_name %} poderá solicitar a autenticação das pessoas toda vez que {% data variables.product.product_name %} iniciar um redirecionamento.

{% ifversion ghec %}
Para evitar erros de autenticação, recomendamos uma duração mínima de sessão de 4 horas. Para obter mais informações, consulte "[Solução de problemas de autenticação do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate)".
{% endif %}

{% note %}

**Atenção**:

- Para Azure AD, a política de tempo de vida configurável para tokens do SAML não controla o tempo limite de sessão para {% data variables.product.product_name %}.
- O Okta não envia atualmente o atributo `SessionNotOnOrAfter` durante a autenticação do SAML com {% data variables.product.product_name %}. Para mais informações, entre em contato com Okta.

{% endnote %}
