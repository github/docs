---
title: Référence de configuration SAML
shortTitle: SAML reference
intro: 'Vous pouvez examiner les métadonnées SAML pour {% ifversion ghec %}votre organisation ou entreprise sur {% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}votre entreprise sur {% data variables.product.product_name %}{% endif %}, et vous pouvez découvrir plus en détail les attributs SAML disponibles et les exigences en matière de réponses.'
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
ms.openlocfilehash: 896d1281d28268f669957bfbf0df43d3a1d6a76e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147683718'
---
## À propos de la configuration SAML

Pour utiliser l’authentification unique SAML pour l’authentification sur {% data variables.product.product_name %}, vous devez configurer votre fournisseur d’identité SAML externe et {% ifversion ghes %}{% data variables.product.product_location %}{% elsif ghec %} votre entreprise ou votre organisation sur {% data variables.product.product_location %}{% elsif ghae %}votre entreprise sur {% data variables.product.product_name %}{% endif %}. Dans une configuration SAML, {% data variables.product.product_name %} fonctionne en tant que fournisseur de services SAML.

Vous devez entrer des valeurs uniques à partir de votre fournisseur d’identité SAML lors de la configuration de l’authentification unique SAML pour {% data variables.product.product_name %}, et vous devez également entrer des valeurs uniques à partir de {% data variables.product.product_name %} sur votre fournisseur d’identité. Pour plus d’informations sur la configuration de l’authentification unique SAML pour {% data variables.product.product_name %}, consultez « [Configuration de l’authentification unique SAML pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %} » ou « [Activation et test de l’authentification unique SAML pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %} ».

## Métadonnées SAML

{% ifversion ghec %}

Les métadonnées du fournisseur de services pour {% data variables.product.product_name %} sont disponibles pour les organisations ou les entreprises avec l’authentification unique SAML. {% data variables.product.product_name %} utilise la liaison `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

### Organisations

Vous pouvez configurer l’authentification unique SAML pour une organisation individuelle dans votre entreprise. Vous pouvez également configurer l’authentification unique SAML pour une organisation si vous utilisez une organisation individuelle sur {% data variables.product.product_name %} et n’utilisez pas de compte d’entreprise. Pour plus d’informations, consultez « [Gestion de l’authentification unique SAML pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization) ».

Les métadonnées du fournisseur de services pour une organisation sur {% data variables.product.product_location %} sont disponibles sur `https://github.com/orgs/ORGANIZATION/saml/metadata`, où **ORGANIZATION** est le nom de votre organisation sur {% data variables.product.product_location %}.

| Valeur | Autres noms | Description | Exemple |
| :- | :- | :- | :- |
| ID d’entité de fournisseur de services | URL du fournisseur de services, restriction d’audience | URL de niveau supérieur pour votre organisation sur {% data variables.product.product_location %} | `https://github.com/orgs/ORGANIZATION` |
| URL Assertion Consumer Service (ACS) du fournisseur de service | URL de réponse, de destinataire ou de destination | URL où l’IdP envoie des réponses SAML | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| URL d’authentification unique du fournisseur de services | | URL à laquelle le fournisseur d’identité commence l’authentification unique |  `https://github.com/orgs/ORGANIZATION/saml/sso` |

### Entreprises

Les métadonnées du fournisseur de services pour une entreprise sur {% data variables.product.product_location %} sont disponibles sur `https://github.com/enterprises/ENTERPRISE/saml/metadata`, où **ENTERPRISE** est le nom de votre entreprise sur {% data variables.product.product_location %}.

| Valeur | Autres noms | Description | Exemple |
| :- | :- | :- | :- |
| ID d’entité de fournisseur de services | URL du fournisseur de services, restriction d’audience | URL de niveau supérieur pour votre entreprise sur {% data variables.product.product_location %} | `https://github.com/enterprises/ENTERPRISE` |
| URL Assertion Consumer Service (ACS) du fournisseur de service | URL de réponse, de destinataire ou de destination | URL où l’IdP envoie des réponses SAML | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| URL d’authentification unique du fournisseur de services | | URL à laquelle le fournisseur d’identité commence l’authentification unique |  `https://github.com/enterprises/ENTERPRISE/saml/sso` |

{% elsif ghes %}

Les métadonnées du fournisseur de services pour {% data variables.product.product_location %} sont disponibles sur `http(s)://HOSTNAME/saml/metadata`, où **HOSTNAME** est le nom d’hôte de votre instance. {% data variables.product.product_name %} utilise la liaison `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Valeur | Autres noms | Description | Exemple |
| :- | :- | :- | :- |
| ID d’entité de fournisseur de services | URL du fournisseur de services, restriction d’audience | URL de niveau supérieur pour {% data variables.product.product_name %} | `http(s)://HOSTNAME`
| URL Assertion Consumer Service (ACS) du fournisseur de service | URL de réponse, de destinataire ou de destination | URL où l’IdP envoie des réponses SAML | `http(s)://HOSTNAME/saml/consume` |
| URL d’authentification unique du fournisseur de services | | URL à laquelle le fournisseur d’identité commence l’authentification unique |  `http(s)://HOSTNAME/sso` |

{% elsif ghae %}

Les métadonnées du fournisseur de services pour votre entreprise sur {% data variables.product.product_name %} sont disponibles sur `https://HOSTNAME/saml/metadata`, où **HOSTNAME** est le nom d’hôte de votre entreprise sur {% data variables.product.product_name %}. {% data variables.product.product_name %} utilise la liaison `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Valeur | Autres noms | Description | Exemple |
| :- | :- | :- | :- |
| ID d’entité de fournisseur de services | URL du fournisseur de services, restriction d’audience | URL de niveau supérieur pour {% data variables.product.product_name %} | `https://HOSTNAME` |
| URL Assertion Consumer Service (ACS) du fournisseur de service | URL de réponse, de destinataire ou de destination | URL où l’IdP envoie des réponses SAML | `https://HOSTNAME/saml/consume` |
| URL d’authentification unique du fournisseur de services | | URL à laquelle le fournisseur d’identité commence l’authentification unique |  `https://HOSTNAME/sso` |

{% endif %}

## Attributs SAML

Les attributs SAML suivants sont disponibles pour {% data variables.product.product_name %}. {% ifversion ghes %} Vous pouvez modifier les noms d’attributs dans la console de gestion, à l’exception de l’attribut `administrator`. Pour plus d’informations, consultez « [Accès à la console de gestion](/admin/configuration/configuring-your-enterprise/accessing-the-management-console) ».{% endif %}

| Nom | Requis ? | Description |
| :- | :- | :- |
| `NameID` | Oui | Identificateur d’utilisateur persistant. Il est possible d’utiliser n’importe quel format d’identificateur de nom persistant. {% ifversion ghec %} Si vous utilisez une entreprise avec des {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} normalise l’élément `NameID` à utiliser en tant que nom d’utilisateur, sauf si l’une des autres assertions est fournie. Pour plus d’informations, consultez « [Considérations relatives au nom d’utilisateur pour l’authentification externe](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication) ».<br><br>{% note %}**Remarque :** Il est important d’utiliser un identificateur explicite et persistant. L’utilisation d’un format d’identificateur temporaire comme `urn:oasis:names:tc:SAML:2.0:nameid-format:transient` entraîne une nouvelle liaison des comptes à chaque connexion, ce qui peut nuire à la gestion des autorisations.{% endnote %}  |
| `SessionNotOnOrAfter` | Non | La date à laquelle {% data variables.product.product_name %} invalide la session associée. Après l’invalidation, la personne doit s’authentifier une fois de plus pour accéder {% ifversion ghec or ghae %}aux ressources de votre entreprise{% elsif ghes %}à {% data variables.product.product_location %}{% endif %}. Pour plus d’informations, consultez « [Durée et délai d’expiration de session](#session-duration-and-timeout) ». |
{%- ifversion ghes or ghae %} | `administrator` | Non | Lorsque la valeur est `true`, {% data variables.product.product_name %} considère automatiquement l’utilisateur comme étant un {% ifversion ghes %}administrateur de site{% elsif ghae %}propriétaire d’entreprise{% endif %}. La définition de cet attribut sur autre chose que `true` entraîne une rétrogradation, dans la mesure où la valeur n’est pas vide. Si cet attribut est omis ou que sa valeur reste vide, le rôle de l’utilisateur est inchangé. | | `username` | Non | Nom d’utilisateur pour {% data variables.product.product_location %}. | {%- endif %} | `full_name` | Non | {% ifversion ghec %} Si vous configurez l’authentification unique SAML pour une entreprise et que vous utilisez le {% data variables.product.prodname_emus %}{% else %}Le {% endif %}nom complet de l’utilisateur à afficher sur la page de profil de l’utilisateur. | | `emails` | Non | Adresses e-mail de l’utilisateur. {% ifversion ghes or ghae %} Vous pouvez spécifier plusieurs adresses. {% endif %} {% ifversion ghec or ghes %} Si vous synchronisez l’utilisation de la licence entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_github_connect %} utilise `emails` pour identifier des utilisateurs uniques entre les produits. Pour plus d’informations, consultez « [Synchronisation de l’utilisation des licences entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud) ». {% endif %} | | `public_keys` | Non | {% ifversion ghec %} Si vous configurez l’authentification unique SAML pour une entreprise et que vous utilisez {% data variables.product.prodname_emus %}, les {% else %}Les {% endif %} clés SSH publiques pour l’utilisateur. Vous pouvez spécifier plus d’une clé. | | `gpg_keys` | Non | {% ifversion ghec %} Si vous configurez l’authentification unique SAML pour une entreprise et que vous utilisez {% data variables.product.prodname_emus %}, les {% else %}Les {% endif %}clés GPG pour l’utilisateur. Vous pouvez spécifier plus d’une clé. |

Pour spécifier plusieurs valeurs pour un même attribut, utilisez plusieurs éléments `<saml2:AttributeValue>`.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## Exigences en matière de réponse SAML

{% data variables.product.product_name %} nécessite que le message de réponse de votre fournisseur d’identité réponde aux exigences suivantes.

- Votre IdP doit fournir l’élément `<Destination>` dans le document de réponse racine et correspondre à l’URL ACS uniquement lorsque le document de réponse racine est signé. Si votre fournisseur d’identité signe l’assertion, {% data variables.product.product_name %} ignore l’assertion.
- Votre fournisseur d’identité doit toujours fournir l’élément `<Audience>` dans le cadre de l’élément `<AudienceRestriction>`. La valeur doit correspondre à votre `EntityId` pour {% data variables.product.product_name %}.{% ifversion ghes or ghae %} Cette valeur est l’URL où vous accédez à {% data variables.product.product_location %}, comme {% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`, `https://SUBDOMAIN.github.us` ou `https://SUBDOMAIN.ghe.com`{% endif %}.{% endif %}
  
  {%- ifversion ghec %}
  - Si vous configurez SAML pour une organisation, cette valeur est `https://github.com/orgs/ORGANIZATION`.
  - Si vous configurez SAML pour une entreprise, cette URL est `https://github.com/enterprises/ENTERPRISE`.
  {%- endif %}
- Votre fournisseur d’identité doit protéger chaque assertion dans la réponse avec une signature numérique. Pour ce faire, vous pouvez signer chaque élément `<Assertion>` individuel ou l’élément `<Response>`.
- Votre fournisseur d’identité doit fournir un élément `<NameID>` dans le cadre de l’élément `<Subject>`. Il est possible d’utiliser n’importe quel format d’identificateur de nom persistant.
- Votre fournisseur d’identité doit inclure l’attribut `Recipient`, qui doit être défini sur l’URL ACS. L’exemple suivant illustre l’attribut.

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

## Durée et délai d’expiration de session

Pour empêcher une personne de s’authentifier auprès de votre fournisseur d’identité et de rester autorisée indéfiniment, {% data variables.product.product_name %} invalide régulièrement la session pour chaque compte d’utilisateur ayant accès {% ifversion ghec or ghae %}aux ressources de votre entreprise{% elsif ghes %}à {% data variables.product.product_location %}{% endif %}. Après l’invalidation, la personne doit s’authentifier à nouveau auprès de votre fournisseur d’identité. Par défaut, si votre fournisseur d’identité n’affirme pas de valeur pour l’attribut `SessionNotOnOrAfter`, {% data variables.product.product_name %} invalide une session {% ifversion ghec %}24 heures{% elsif ghes or ghae %}une semaine{% endif %} après l’authentification réussie auprès de votre fournisseur d’identité.

Pour personnaliser la durée de la session, vous pouvez définir la valeur de l’attribut `SessionNotOnOrAfter` sur votre fournisseur d’identité. Si vous définissez une valeur inférieure à 24 heures, {% data variables.product.product_name %} peut inviter les utilisateurs à s’authentifier chaque fois que {% data variables.product.product_name %} lance une redirection.

{% ifversion ghec %} Pour éviter les erreurs d’authentification, nous recommandons une durée minimale de session de 4 heures. Pour plus d’informations, consultez « [Résolution des problèmes d’authentification SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate) ».
{% endif %}

{% note %}

**Remarques**:

- Pour Azure AD, la stratégie de durée de vie configurable pour les jetons SAML ne contrôle pas le délai d’expiration de session pour {% data variables.product.product_name %}.
- Okta n’envoie pas actuellement l’attribut `SessionNotOnOrAfter` lors de l’authentification SAML avec {% data variables.product.product_name %}. Pour plus d’informations, contactez Okta

{% endnote %}
