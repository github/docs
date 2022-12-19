---
title: Meilleures pratiques pour l’écriture des avis de sécurité de référentiels
intro: Quand vous créez ou modifiez des avis de sécurité, les informations fournies sont mieux compréhensibles pour les autres utilisateurs si vous spécifiez l’écosystème, le nom du package et les versions affectées en utilisant les formats standard.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
- Security advisories
- Vulnerabilities
shortTitle: Best practices
ms.openlocfilehash: d5b3e7ebecabd22b0c992432789d9581dda4e16e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106396"
---
Toute personne disposant des autorisations d’administrateur sur un référentiel peut créer et modifier un avis de sécurité.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## À propos des avis de sécurité pour les dépôts

{% data reusables.security-advisory.security-advisory-overview %} Pour plus d’informations, consultez « [À propos des avis de sécurité GitHub pour les dépôts](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories) ».

## Meilleures pratiques

Nous vous recommandons d’utiliser la syntaxe de la {% data variables.product.prodname_advisory_database %}, en particulier la mise en forme de la version, quand vous écrivez un avis de sécurité de référentiel ou que vous apportez une contribution de la communauté à un avis de sécurité global.

Si vous respectez la syntaxe de la {% data variables.product.prodname_advisory_database %}, en particulier quand vous définissez les versions affectées :
- Quand vous publiez votre avis de référentiel, nous pouvons ajouter votre avis à la {% data variables.product.prodname_advisory_database %} en tant qu’avis « {% data variables.product.company_short %}-reviewed », sans devoir demander plus d’informations.
- {% data variables.product.prodname_dependabot %} a les informations nécessaires pour identifier exactement les référentiels affectés et leur envoyer des {% data variables.product.prodname_dependabot_alerts %} pour les avertir.
- Les membres de la communauté sont moins susceptibles de suggérer des modifications de votre avis pour corriger les informations manquantes ou incorrectes.

Vous ajoutez ou modifiez un avis de référentiel à l’aide du formulaire _Brouillon d’avis de sécurité_. Pour plus d’informations, consultez « [Création d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/creating-a-repository-security-advisory) ». 

Vous suggérez l’amélioration d’un avis global existant à l’aide du formulaire _Améliorer un avis de sécurité_. Pour plus d’informations, consultez « [Modification des avis de sécurité dans la {% data variables.product.prodname_advisory_database %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database) ».

### Écosystème

Vous devez attribuer l’avis à l’un des écosystèmes pris en charge à l’aide du champ **Écosystème**. Pour plus d’informations sur les écosystèmes que nous prenons en charge, consultez « [Exploration des avis de sécurité dans la {% data variables.product.prodname_advisory_database %}](/code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database#github-reviewed-advisories) ».

![Capture d’écran mettant en évidence le champ Écosystème dans le formulaire](/assets/images/help/security/security-advisory-ecosystem.png)

### Nom du package

Nous vous recommandons d’utiliser le champ **Nom du package** pour spécifier les packages affectés, car les informations de package sont nécessaires pour les avis « {% data variables.product.company_short %}-reviewed » dans la {% data variables.product.prodname_advisory_database %}. Les informations sur le package sont facultatives pour les avis de sécurité au niveau du référentiel. Toutefois, l’ajout de ces informations dès le début simplifie le processus de révision quand vous publiez votre avis de sécurité.

![Capture d’écran mettant en évidence le nom du package dans le formulaire](/assets/images/help/security/security-advisory-package-name.png)

### Versions affectées

Nous vous recommandons d’utiliser le champ **Versions affectées** pour spécifier les versions concernées, car ces informations sont nécessaires pour les avis « {% data variables.product.company_short %}-reviewed » dans la {% data variables.product.prodname_advisory_database %}. Les informations de version sont facultatives pour les avis de sécurité au niveau du référentiel. Toutefois, l’ajout de ces informations dès le début simplifie le processus de révision quand vous publiez votre avis de sécurité.

![Capture d’écran mettant en évidence le champ Versions affectées](/assets/images/help/security/security-advisory-affected-versions.png)

- Une chaîne de version affectée valide est constituée de l’un des éléments suivants :
   - Séquence d’opérateur de limite inférieure.
   - Séquence d’opérateur de limite supérieure.
   - Séquence d’opérateurs de limite supérieure et inférieure.
   - Une séquence de version spécifique utilisant l’opérateur d’égalité (`=`).
- Chaque séquence d’opérateur doit être spécifiée avec l’opérateur, un espace, puis la version.
   - Les opérateurs valides sont `=`, `<`, `<=`, `>` ou `>=`.
   - La version doit commencer par un chiffre suivi d’un nombre quelconque de chiffres, de lettres, de points, de tirets ou de traits de soulignement (tout sauf un espace ou une virgule)
   - Quand vous spécifiez une séquence de limites supérieure et inférieure, la limite inférieure doit être indiquée en premier, suivie d’une virgule et d’un espace, puis de la limite supérieure.
   {% note %}

   **Remarque :** les chaînes de versions affectées ne peuvent pas contenir d’espaces de début ou de fin.

   {% endnote %}

- Les opérateurs de limite supérieure peuvent être inclusifs ou exclusifs, c’est-à-dire `<=` ou `<` respectivement.
- Les opérateurs de limite inférieure peuvent être inclusifs ou exclusifs, c’est-à-dire `>=` ou `>` respectivement. Toutefois, si vous publiez votre avis de référentiel et que nous convertissons votre avis de référentiel en avis global, une règle différente s’applique : les chaînes de limite inférieure doivent être inclusives, c’est-à-dire `>=`. L’opérateur de limite inférieure exclusif (`>`) est autorisé uniquement si la version est `0`, par exemple `> 0`.

  {% note %}

  **Remarques :** la limitation de la limite inférieure :
   - est due à des incompatibilités avec le schéma OSV (Open Source Vulnerability).
   - s’applique uniquement quand vous faites une suggestion sur un avis existant dans la {% data variables.product.prodname_advisory_database %}.

  {% endnote %}

- Vous ne pouvez pas spécifier plusieurs plages de versions affectées dans le même champ comme `> 2.0, < 2.3, > 3.0, < 3.2`. Pour spécifier plusieurs plages, vous devez créer une section **Produits affectés** pour chaque plage, en cliquant sur le bouton **+ Ajouter un autre produit affecté**.

  ![Capture d’écran mettant en évidence le bouton à utiliser pour ajouter plusieurs plages de versions affectées](/assets/images/help/security/security-advisory-add-another-affected-product.png)
 - Si la plage de versions affectées comprend une seule limite supérieure ou inférieure :
   - La valeur implicite est toujours `> 0` si la limite inférieure n’est pas spécifiée explicitement.
   - La valeur implicite est toujours infinie si la limite supérieure n’est pas spécifiée explicitement.

Pour plus d’informations sur la {% data variables.product.prodname_advisory_database %}, consultez [https://github.com/github/advisory-database](https://github.com/github/advisory-database).
