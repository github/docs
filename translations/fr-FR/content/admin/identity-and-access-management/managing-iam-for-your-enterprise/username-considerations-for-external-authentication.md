---
title: Considérations relatives au nom d’utilisateur pour une authentification externe
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}Quand vous utilisez {% ifversion ghes %}CAS, LDAP ou SAML pour l’authentification{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %}, {% endif %}{% data variables.product.product_name %} suit certaines règles pour identifier le nom d’utilisateur de chaque compte d’utilisateur {% ifversion ghec or ghae %}dans votre entreprise{% elsif ghes %}sur votre instance{% endif %}.'
miniTocMaxHeadingLevel: 3
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
ms.openlocfilehash: 8a330fe790665ef360bc5a5841e20ec8df002eb0
ms.sourcegitcommit: 00814c80b0f5fa76188c378a1196ef8fc5288113
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120750'
---
{% ifversion ghec %} {% note %}

**Remarque :** cet article s’applique uniquement à {% data variables.product.prodname_emus %}. Si vous utilisez {% data variables.product.prodname_ghe_cloud %} sans {% data variables.product.prodname_emus %}, les noms d’utilisateur sont créés par les utilisateurs, pas par {% data variables.product.prodname_dotcom %}.

{% endnote %} {% endif %}

## À propos des noms d’utilisateur avec une authentification externe

{% ifversion ghes %}

Vous pouvez configurer une authentification externe pour {% data variables.product.product_name %} à l’aide du protocole CAS, LDAP ou SAML. Pour plus d’informations, consultez « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server) ».

Quand vous utilisez une authentification externe, {% data variables.location.product_location %} crée automatiquement un nom d’utilisateur pour chaque personne qui se connecte à {% data variables.location.product_location %} via votre système d’authentification externe pour la première fois.

{% elsif ghec %}

Si vous utilisez une entreprise avec {% data variables.product.prodname_emus %}, les membres de celle-ci s’authentifient pour accéder à {% data variables.product.prodname_dotcom %} via votre fournisseur d’identité SAML. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users) » et « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server) ».

{% data variables.product.prodname_dotcom %} crée automatiquement un nom d’utilisateur pour chaque personne lors du provisionnement de son compte d’utilisateur via SCIM, en normalisant un identificateur fourni par votre fournisseur d’identité, puis en ajoutant un trait de soulignement et un code court. Si plusieurs identificateurs sont normalisés dans le même nom d’utilisateur, un conflit de nom d’utilisateur se produit et seul le premier compte est créé. Vous pouvez résoudre des problèmes de nom d’utilisateur en apportant une modification à votre fournisseur d’identité de sorte que les noms d’utilisateur normalisés soient uniques et limités à 39 caractères.

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %}

{% elsif ghae %}

{% data variables.product.product_name %} utilise une SSO SAML pour l’authentification, et crée automatiquement un nom d’utilisateur pour chaque personne qui se connecte via votre fournisseur d’identité pour la première fois.

{% endif %}

{% ifversion ghec %}
## À propos des noms d’utilisateur pour {% data variables.enterprise.prodname_managed_users %}

Lors de la création de votre {% data variables.enterprise.prodname_emu_enterprise %}, vous choisissez un code court qui sera utilisé comme suffixe pour les noms d’utilisateur des membres de votre entreprise. {% data reusables.enterprise-accounts.emu-shortcode %} L’utilisateur de configuration qui configure l’authentification unique SAML a un nom d’utilisateur au format **@<em>CODE-COURT</em>_admin**. 

Quand vous provisionnez un nouvel utilisateur à partir de votre fournisseur d’identité, le nouvel {% data variables.enterprise.prodname_managed_user %} a un nom d’utilisateur {% data variables.product.prodname_dotcom %} au format **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>** . Le composant <em>IDP-USERNAME</em> est formé en normalisant la valeur d’attribut `userName` SCIM envoyée par le fournisseur d’identité. 

| Fournisseur d’identité                 | Nom d’utilisateur {% data variables.product.prodname_dotcom %}  |
|-----------------------------------|----------------------|
| Azure Active Directory (Azure AD) | _IDP-USERNAME_ est formé en normalisant les caractères précédant le caractère `@` dans l’UPN (nom d’utilisateur principal), ce qui n’inclut pas l’`#EXT#` pour des comptes invités. |
| Okta                              | _IDP-NOMUTILISATEUR_ est l’attribut de nom d’utilisateur normalisé fourni par l’IdP.               |

Ces règles peuvent conduire votre fournisseur d’identité à fournir le même _IDP-USERNAME_ pour plusieurs utilisateurs. Par exemple, pour Azure AD, les UPN suivants donneront le même nom d’utilisateur :

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`

Cela occasionnera un conflit de nom d’utilisateur et seul le premier utilisateur sera approvisionné. Pour plus d’informations, consultez « [Résolution des problèmes de nom d’utilisateur](#resolving-username-problems) ».
{% endif %}

Les noms d’utilisateur{% ifversion ghec %}, trait de soulignement et code court compris,{% endif %} ne doivent pas dépasser 39 caractères.

## À propos de la normalisation du nom d’utilisateur

Les noms d’utilisateur pour des comptes d’utilisateur sur {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} ne peuvent contenir que des caractères alphanumériques et des tirets (`-`).

{% ifversion ghec %} Lorsque vous configurez une authentification SAML, {% data variables.product.product_name %} utilise la valeur d’attribut `userName` SCIM envoyée par le fournisseur d’identité pour déterminer le nom d’utilisateur du compte d’utilisateur correspondant sur {% data variables.product.prodname_dotcom_the_website %}. Si cette valeur inclut des caractères non pris en charge, {% data variables.product.product_name %} normalise le nom d’utilisateur conformément aux règles suivantes.
{% elsif ghes %} Lorsque vous configurez une authentification CAS, LDAP ou SAML, {% data variables.product.product_name %} utilise un identificateur du compte d’utilisateur sur votre fournisseur d’authentification externe pour déterminer le nom d’utilisateur du compte d’utilisateur correspondant sur {% data variables.product.product_name %}. Si l’identificateur inclut des caractères non pris en charge, {% data variables.product.product_name %} normalise le nom d’utilisateur conformément aux règles suivantes.
{% elsif ghae %} Lorsque vous configurez une authentification SAML, {% data variables.product.product_name %} utilise un identificateur du compte d’utilisateur sur votre fournisseur d’identité pour déterminer le nom d’utilisateur du compte d’utilisateur correspondant sur {% data variables.product.product_name %}. Si l’identificateur inclut des caractères non pris en charge, {% data variables.product.product_name %} normalise le nom d’utilisateur conformément aux règles suivantes.
{% endif %}

1. {% data variables.product.product_name %} normalise tout caractère non alphanumérique dans le nom d’utilisateur de votre compte en tiret. Par exemple, le nom d’utilisateur `mona.the.octocat` est normalisé en `mona-the-octocat`. Notez que les noms d’utilisateur normalisés ne peuvent ni commencer ni se terminer par un tiret. Ils ne peuvent pas non plus contenir deux tirets consécutifs.

1. Les noms d’utilisateur créés à partir d’adresses e-mail sont créés à partir des caractères normalisés qui précèdent le caractère `@`.

1. Les noms d’utilisateur créés à partir de comptes de domaine sont créés à partir des caractères normalisés après le séparateur `\\`. 

1. Si plusieurs comptes sont normalisés dans le même nom d’utilisateur {% data variables.product.product_name %}, seul le premier compte d’utilisateur est créé. Les utilisateurs suivants ayant le même nom d’utilisateur ne pourront pas se connecter. {% ifversion ghec %}Pour plus d’informations, consultez « [Résolution des problèmes de nom d’utilisateur](#resolving-username-problems). »{% endif %}

### Exemples de normalisations de nom d’utilisateur

| Identificateur sur le fournisseur | Nom d’utilisateur normalisé sur {% data variables.product.prodname_dotcom %} | Résultats |
| :- | :- | :- |
| The.Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Ce nom d’utilisateur est créé avec succès. |
| !The.Octocat | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Ce nom d’utilisateur n’est pas créé, car il commence par un tiret. |
| The.Octocat! | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}` | Ce nom d’utilisateur n’est pas créé, car il se termine par un tiret. |
| The!!Octocat | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Ce nom d’utilisateur n’est pas créé, car il contient deux tirets consécutifs. |
| The!Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Ce nom d’utilisateur n’est pas créé. Bien que le nom d’utilisateur normalisé soit valide, il existe déjà. |
| `The.Octocat@example.com` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Ce nom d’utilisateur n’est pas créé. Bien que le nom d’utilisateur normalisé soit valide, il existe déjà. |
| `internal\\The.Octocat` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Ce nom d’utilisateur n’est pas créé. Bien que le nom d’utilisateur normalisé soit valide, il existe déjà. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | Ce nom d’utilisateur n’est pas créé, car il dépasse la limite de 39 caractères. |

{% ifversion not ghec %}
### À propos de la normalisation du nom d’utilisateur avec SAML

{% ifversion ghes %}Si vous configurez l’authentification SAML pour {% data variables.location.product_location %}, {% endif %}{% data variables.product.product_name %} détermine le nom d’utilisateur de chaque personne par l’une des assertions suivantes dans la réponse SAML, classées par ordre de priorité décroissant.

1. L’attribut `username` personnalisé, s’il est défini et présent
1. Une assertion `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, si elle est présente
1. Une assertion `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`, si elle est présente
1. Élément `NameID`

{% data variables.product.product_name %} nécessite l’élément `NameID`, même si d’autres attributs sont présents. Pour plus d’informations, consultez la « [Référence de configuration SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes) ».

{% data variables.product.product_name %} crée un mappage entre le `NameID` du fournisseur d’identité et le nom d’utilisateur {% ifversion ghae %}dans{% else %}sur{% endif %} {% data variables.location.product_location %}, de sorte que `NameID` doit être persistant, unique et non modifiable pendant le cycle de vie de l’utilisateur.

{% ifversion ghes %} {% note %}

**Remarque** : si le `NameID` d’un utilisateur change sur le fournisseur d’identité, un message d’erreur s’affiche lors de la connexion à {% data variables.location.product_location %}. Pour restaurer l’accès de la personne, vous devez mettre à jour le mappage de `NameID` du compte d’utilisateur. Pour plus d’informations, consultez « [Mise à jour du `NameID` SAML d’un utilisateur](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid) ».

{% endnote %} {% endif %} {% endif %}

{% ifversion ghec %}
## Résolution des problèmes de nom d’utilisateur

Quand un nouvel utilisateur est provisionné, si le nom d’utilisateur est plus long que 39 caractères (trait de soulignement et code court inclus) ou en conflit avec un utilisateur existant dans l’entreprise, la tentative de provisionnement échoue avec une erreur `409`. 

Pour résoudre ce problème, vous devez apporter l’une des modifications suivantes à votre fournisseur d’identité afin que tous les noms d’utilisateur normalisés soient uniques et respectent la limite de caractères.
- Modifier la valeur de l’attribut `userName` pour les utilisateurs individuels entraînant des problèmes
- Modifier le mappage d’attributs `userName` pour tous les utilisateurs
- Configurer un attribut personnalisé `userName` pour tous les utilisateurs

Quand vous modifiez le mappage d’attributs, les noms d’utilisateur de {% data variables.enterprise.prodname_managed_users %} existants sont mis à jour, mais rien d’autre ne change sur les comptes, notamment l’historique des activités.

{% note %}

**Remarque :** {% data variables.contact.github_support %} ne peut pas fournir d’assistance pour la personnalisation des mappages d’attributs ou la configuration d’expressions personnalisées. Si vous avez des questions, vous pouvez contacter votre fournisseur d’identité.

{% endnote %}

### Résolution des problèmes de nom d’utilisateur avec Azure AD

Pour résoudre les problèmes de nom d’utilisateur dans Azure AD, modifiez la valeur du nom d’utilisateur principal de l’utilisateur en conflit, ou modifiez le mappage pour l’attribut `userName`. Si vous modifiez le mappage d’attributs, vous pouvez choisir un attribut existant ou utiliser une expression pour vous assurer que tous les utilisateurs approvisionnés ont un alias normalisé unique.

1. Dans Azure AD, ouvrez l’application {% data variables.product.prodname_emu_idp_application %}.
1. Dans la barre latérale gauche, cliquez sur **Approvisionnement**.
1. Accédez à **Modifier l’approvisionnement**.
1. Développez **Mappages**, puis cliquez sur **Approvisionner les utilisateurs d’Azure Active Directory**.
1. Cliquez sur le mappage d’attributs {% data variables.product.prodname_dotcom %} `userName`. 
1. Enregistrez le mappage d’attributs.
   - Pour mapper un attribut existant dans Azure AD à l’attribut `userName` dans {% data variables.product.prodname_dotcom %}, cliquez sur le champ de votre attribut souhaité. Ensuite, enregistrez et attendez qu’un cycle d’approvisionnement se produise dans les 40 minutes environ.
   - Pour utiliser une expression au lieu d’un attribut existant, modifiez le type de mappage en « Expression », puis ajoutez une expression personnalisée qui rend cette valeur unique pour tous les utilisateurs. Par exemple, vous pourriez utiliser `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]`. Pour plus d’informations, consultez [Générateur d’expressions](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/functions-for-customizing-application-data) et Informations de référence sur l’écriture d’expressions pour les mappages d’attributs dans Azure Active Directory.

### Résolution des problèmes de nom d’utilisateur avec Okta

Pour résoudre les problèmes de nom d’utilisateur dans Okta, mettez à jour les paramètres de mappage d’attributs pour l’application {% data variables.product.prodname_emu_idp_application %}.

1. Dans Okta, ouvrez l’application {% data variables.product.prodname_emu_idp_application %}
1. Cliquez sur **Se connecter**.
1. Dans la section « Paramètres », cliquez sur **OK**.
1. Mettez à jour le « format de nom d’utilisateur de l’application ».
{% endif %}
