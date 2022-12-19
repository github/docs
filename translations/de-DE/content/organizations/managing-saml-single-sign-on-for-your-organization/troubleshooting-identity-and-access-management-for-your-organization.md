---
title: Problembehandlung bei der Identitäts- und Zugriffsverwaltung deiner Organisation
intro: 'Überprüfe und behebe häufige Probleme bei der Verwaltung von SAML SSO, Teamsynchronisierung oder Verbindung mit Identitätsanbietern in deiner Organisation.'
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Troubleshooting access
redirect_from:
  - /organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management
ms.openlocfilehash: d3110d61fb511f55aa840d0911c036dd342fa833
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106973'
---
{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% data reusables.saml.authentication-loop %}

## Bei einigen Benutzern funktioniert die Bereitstellung oder Aufhebung der Bereitstellung durch SCIM nicht.

Wenn Probleme mit der Bereitstellung bei Benutzern auftreten, wird empfohlen, zu überprüfen, ob den Benutzern SCIM-Metadaten fehlen. 

{% data reusables.scim.changes-should-come-from-idp %}

Wenn einem Organisationsmitglied SCIM-Metadaten fehlen, kannst du SCIM über IdP manuell für den Benutzer bereitstellen.

### Überwachen von Benutzern auf fehlende SCIM-Metadaten

Wenn du vermutest oder feststellst, dass Benutzer nicht wie erwartet bereitgestellt werden oder deine Bereitstellung aufgehoben wird, empfehlen wir, alle Benutzer in deiner Organisation zu überwachen.

Um zu überprüfen, ob Benutzer über eine SCIM-Identität (SCIM-Metadaten) in ihrer externen Identität verfügen, kannst du SCIM-Metadaten für ein Organisationsmitglied gleichzeitig auf {% data variables.product.prodname_dotcom %} überprüfen oder alle Organisationsmitglieder programmgesteuert mithilfe der {% data variables.product.prodname_dotcom %}-API überprüfen.

#### Überwachen von Organisationsmitgliedern auf {% data variables.product.prodname_dotcom %}

Um zu bestätigen, dass SCIM-Metadaten für ein einzelnes Organisationsmitglied vorhanden sind, besuchst du diese URL, und ersetzt `<organization>` und `<username>`: 

> `https://github.com/orgs/<organization>/people/<username>/sso`

Wenn die externe Identität des Benutzers SCIM-Metadaten enthält, sollte der Organisationsbesitzer einen SCIM-Identitätsabschnitt auf dieser Seite sehen. Wenn ihre externe Identität keine SCIM-Metadaten enthält, ist der SCIM Identity-Abschnitt nicht vorhanden.

#### Überwachen von Organisationsmitgliedern über die {% data variables.product.prodname_dotcom %}-API

Als Organisationsbesitzer kannst du auch die SCIM-REST-API oder GraphQL abfragen, um alle in einer Organisation bereitgestellten SCIM-Identitäten aufzulisten. 

#### Verwenden der REST-API

Die SCIM REST-API gibt nur Daten für Benutzer zurück, deren SCIM-Metadaten in ihren externen Identitäten ausgefüllt sind. Es wird empfohlen, eine Liste der bereitgestellten SCIM-Identitäten mit einer Liste aller Mitglieder deiner Organisation zu vergleichen.

Weitere Informationen finden Sie unter
  - [Auflisten von gemäß SCIM bereitgestellten Identitäten](/rest/reference/scim#list-scim-provisioned-identities)
  - [Auflisten von Organisationsmitgliedern](/rest/reference/orgs#list-organization-members)

#### Verwenden von GraphQL

Diese GraphQL-Abfrage zeigt dir die SAML-`NameId`, den SCIM-`UserName` und den {% data variables.product.prodname_dotcom %}-Benutzernamen (`login`) für jeden Benutzer in der Organisation. Ersetze `ORG` durch den Namen deiner Organisation, um diese Abfrage zu verwenden. 

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
curl -X POST -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{ "query": "{ organization(login: \"ORG\") { samlIdentityProvider { externalIdentities(first: 100) { pageInfo { endCursor startCursor hasNextPage } edges { cursor node { samlIdentity { nameId } scimIdentity {username}  user { login } } } } } } }" }'  https://api.github.com/graphql
```

Weitere Informationen zur Verwendung der GraphQL-API findest du unter: 
   - [GraphQL-Führungslinien](/graphql/guides)
   - [GraphQL-Explorer](/graphql/overview/explorer)

### Erneute Bereitstellung von SCIM für Benutzer über deinen Identitätsanbieter

Du kannst SCIM für Benutzer manuell über dein IdP bereitstellen. Um z. B. Bereitstellungsfehler für Okta zu beheben, kannst du im Okta-Admin-Portal die Zuweisung von Benutzern zu {% data variables.product.prodname_dotcom %} aufheben und diese erneut zuweisen. Dies wird in Okta ein API-Aufruf ausgelöst, um die SCIM-Metadaten für diese Benutzer in {% data variables.product.prodname_dotcom %} auszufüllen. Weitere Informationen findest du unter [Aufheben der Zuweisung von Benutzern zu Anwendungen](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm) oder [Zuweisen von Benutzern zu Anwendungen](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm) in der Okta-Dokumentation.

Um zu bestätigen, dass die SCIM-Identität eines Benutzers erstellt wird, empfehlen wir, diesen Prozess mit einem einzelnen Organisationsmitglied zu testen, bei dem du überprüft hast, dass keine externe SCIM-Identität vorhanden ist. Nachdem du die Benutzer in deinem IdP manuell aktualisiert haben, kannst du überprüfen, ob die SCIM-Identität des Benutzers mithilfe der SCIM-API oder in {% data variables.product.prodname_dotcom %} erstellt wurde. Weitere Informationen findest du unter [Überwachen von Benutzern auf fehlende SCIM-Metadaten](#auditing-users-for-missing-scim-metadata) oder im REST-API-Endpunkt [Abrufen von SCIM-Bereitstellungsinformationen für einen Benutzer](/rest/reference/scim#get-scim-provisioning-information-for-a-user).

Wenn SCIM für Benutzer nicht erneut bereitgestellt wird, wende dich bitte an den {% data variables.product.prodname_dotcom %}-Support.

## Weitere Informationsquellen

- [Problembehandlung bei der Identitäts- und Zugriffsverwaltung deines Unternehmens](/admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise)
