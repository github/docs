---
title: Solução de problemas de identidade e gerenciamento de acesso para sua organização
intro: 'Revise e solucuone erros comuns para gerenciar a o SAML SSO da sua organização, sincronização de equipes ou provedor de identidade (IdP).'
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Solução de problemas de acesso
redirect_from:
  - /organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management
---

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% data reusables.saml.authentication-loop %}

## Alguns usuários não são provisionados ou desprovisionados pelo SCIM

Ao encontrar problemas de provisionamento com os usuários, recomendamos que verifique se os usuários não têm metadados de SCIM.

{% data reusables.scim.changes-should-come-from-idp %}

Se um integrante da organização não tiver metadados do SCIM, você poderá provisionar o SCIM novamente para o usuário manualmente por meio do seu IdP.

### Auditoria de usuários com relação à falta de metadados do SCIM

Se você suspeitar ou notar que os usuários não foram provisionados ou desprovisionados, recomendamos que você faça uma auditoria de todos os usuários da sua organização.

Para verificar se os usuários têm uma identidade do SCIM (metadados do SCIM) na sua identidade externa, você poderá revisar os metadados do SCIM para um integrante da organização por vez em {% data variables.product.prodname_dotcom %} ou você pode verificar programaticamente todos os integrantes da organização que usam a API de {% data variables.product.prodname_dotcom %}.

#### Fazendo a auditoria dos integrantes da organização em {% data variables.product.prodname_dotcom %}

Como proprietário da organização, para confirmar que os metadados do SCIM existem para um único integrante da organização, acesse esta URL, substituindo `<organization>` e `<username>`:

> `https://github.com/orgs/<organization>/people/<username>/sso`

Se a identidade externa do usuário incluir metadados do SCIM, o proprietário da organização deverá ver uma seção de identidade do SCIM nessa página. Se sua identidade externa não incluir nenhum metadado do SCIM, a seção de Identidade SCIM não existirá.

#### Auditando integrantes da organização por meio da API de {% data variables.product.prodname_dotcom %}

Como proprietário da organização, você também pode consultar a API REST do SCIM ou do GraphQL para listar todas as identidades provisionadas do SCIM em uma organização.

#### Usando a API REST

A API REST do SCIM só retornará dados para usuários que tenham metadados do SCIM preenchidos nas suas identidades externas. Recomendamos que você compare uma lista de identidades fornecidas pelo SCIM com uma lista de todos os integrantes da sua organização.

Para obter mais informações, consulte:
  - "[Lista de identidades provisionadas do SCIM](/rest/reference/scim#list-scim-provisioned-identities)"
  - "[Listar integrantes da organização](/rest/reference/orgs#list-organization-members)"

#### Usando o GraphQL

Esta consulta do GraphQL mostra o `NameId` do SAML, o `UserName` d SCIM e o nome de usuário de {% data variables.product.prodname_dotcom %} (``de login) para cada usuário da organização. Para usar esta consulta, substitua `ORG` pelo nome da sua organização.

```graphql
{
  organization(login: "ORG") {
    samlIdentityProvider {
      ssoUrl
      externalIdentities(first: 100) {
        edges {
          node {
            samlIdentity {
              nameId
            }
            scimIdentity {
              username
            }
            user {
              login
            }
          }
        }
      }
    }
  }
}
```

```shell
curl -X POST -H "Authorization: Bearer <personal access token>" -H "Content-Type: application/json" -d '{ "query": "{ organization(login: \"ORG\") { samlIdentityProvider { externalIdentities(first: 100) { pageInfo { endCursor startCursor hasNextPage } edges { cursor node { samlIdentity { nameId } scimIdentity {username}  user { login } } } } } } }" }'  https://api.github.com/graphql
```

Para obter mais informações sobre o uso da API do GraphQL, consulte:
   - "[guias do GraphQL](/graphql/guides)"
   - "[Explorador do GraphQL](/graphql/overview/explorer)"

### Reprovisionando o SCIM para os usuários por meio do seu provedor de identidade

Você pode provisionar o SCIM novamente para os usuários manualmente por meio do seu IdP. Por exemplo, para resolver erros de provisionamento para o Okta, no portal de administração do Okta, você pode desatribuir e reatribuir os usuários para o aplicativo de {% data variables.product.prodname_dotcom %}. Isto deve acionar o Okta para fazer uma chamada da API para preencher os metadados do SCIM para esses usuários em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Desatribuir usuários de aplicativos](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm)" ou "[Atribuir usuários aos aplicativos](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm)" na documentação do Okta.

Para confirmar que a identidade do SCIM de um usuário foi criada. Recomendamos testar este processo com um único integrante de uma organização que você tenha confirmado que não tem uma identidade externa do SCIM. Depois de atualizar manualmente os usuários do seu IdP, você poderá verificar se a identidade SCIM do usuário foi criada usando a API SCIM ou em {% data variables.product.prodname_dotcom %}. Para mais informações consulte "[Usuários de auditoria por falta de metadados SCIM](#auditing-users-for-missing-scim-metadata)" ou o ponto de extremidade da API REST "[Obtenha informações de provisionamento do SCIM para um usuário](/rest/reference/scim#get-scim-provisioning-information-for-a-user)."

Se o novo provisionamento do SCIM para os usuários não ajudar, entre em contato com o suporte de {% data variables.product.prodname_dotcom %}.

## Leia mais

- "[Solucionando problemas de identidade e gerenciamento de acesso para a sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise)"
