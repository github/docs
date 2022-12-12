---
title: Définition de modèles personnalisés pour l’analyse des secrets
shortTitle: Define custom patterns
intro: 'Vous pouvez étendre {% data variables.product.prodname_secret_scanning_GHAS %} pour détecter les secrets au-delà des modèles par défaut.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 1c7594329dfdc2843e38c1c2eb7b70e32b89f11b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106516'
---
## À propos des modèles personnalisés pour {% data variables.product.prodname_secret_scanning %}

Vous pouvez définir des modèles personnalisés pour identifier les secrets qui ne sont pas détectés par les modèles par défaut pris en charge par l’{% data variables.product.prodname_secret_scanning %}. Par exemple, vous pouvez avoir un modèle secret interne à votre organisation. Pour plus d’informations sur les secrets et fournisseurs de services pris en charge, consultez « [Modèles d’{% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns) ».

Vous pouvez définir des modèles personnalisés pour votre entreprise, votre organisation ou votre dépôt. L’{% data variables.product.prodname_secret_scanning_caps %} prend en charge jusqu’à 500 modèles personnalisés par organisation ou compte d’entreprise, et jusqu’à 100 modèles personnalisés par dépôt.

## Syntaxe des expressions régulières pour les modèles personnalisés

Vous pouvez spécifier des modèles personnalisés pour l’{% data variables.product.prodname_secret_scanning_GHAS %} sous la forme d’une ou plusieurs expressions régulières.

- **Format du secret :** expression qui décrit le format du secret lui-même.
- **Avant le secret :** expression qui décrit les caractères situés avant le secret. Par défaut, cette expression est définie sur `\A|[^0-9A-Za-z]`, ce qui signifie que le secret doit être au début d’une ligne ou être précédé d’un caractère non alphanumérique.
- **Après le secret :** expression qui décrit les caractères situés après le secret. Par défaut, cette expression est définie sur `\z|[^0-9A-Za-z]`, ce qui signifie que le secret doit être suivi d’une nouvelle ligne ou d’un caractère non alphanumérique.
- **Exigences de correspondance supplémentaires :** une ou plusieurs expressions facultatives auxquelles le secret lui-même doit ou ne doit pas correspondre.

Pour les jetons simples, en règle générale, vous devez uniquement spécifier un format de secret. Les autres champs vous permettent de spécifier des secrets plus complexes sans créer d’expressions régulières complexes.  Pour obtenir un exemple de modèle personnalisé, consultez « [Exemple de modèle personnalisé spécifié avec des exigences supplémentaires](#example-of-a-custom-pattern-specified-using-additional-requirements) » plus bas.

L’{% data variables.product.prodname_secret_scanning_caps %} utilise la [bibliothèque Hyperscan](https://github.com/intel/hyperscan) et prend uniquement en charge les constructions d’expression régulière Hyperscan, qui sont un sous-ensemble de la syntaxe PCRE. Les modificateurs d’option Hyperscan ne sont pas pris en charge.  Pour plus d’informations sur les constructions de modèles Hyperscan, consultez « [Prise en charge des modèles](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support) » dans la documentation Hyperscan.

## Définition d’un modèle personnalisé pour un dépôt

Avant de définir un modèle personnalisé, vous devez vous assurer que l’{% data variables.product.prodname_secret_scanning %} est activée sur votre dépôt. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_secret_scanning %} pour vos dépôts](/code-security/secret-security/configuring-secret-scanning-for-your-repositories) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. Quand vous êtes prêt à tester votre nouveau modèle personnalisé, pour identifier les correspondances dans le dépôt sans créer d’alertes, cliquez sur **Enregistrer et effectuer un test à blanc**.
{% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {% endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Une fois votre modèle créé, {% data reusables.secret-scanning.secret-scanning-process %} Pour plus d’informations sur l’affichage des alertes d’{% data variables.product.prodname_secret_scanning %}, consultez « [Gestion des alertes d’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning) ».

### Exemple de modèle personnalisé spécifié avec des exigences supplémentaires

Une entreprise a un jeton interne avec cinq caractéristiques. Elle utilise les différents champs pour spécifier comment identifier les jetons, comme suit :

| **Caractéristique** | **Champ et expression régulière** |
|----------------|------------------------------|
| Longueur comprise entre 5 et 10 caractères | Format du secret : `[$#%@AA-Za-z0-9]{5,10}` |
| Ne se termine pas par `.` | Après le secret : `[^\.]` |
| Contient des chiffres et des lettres majuscules | Exigences supplémentaires : le secret doit correspondre à `[A-Z]` et `[0-9]` |
| N’inclut pas plus d’une lettre minuscule dans une ligne | Exigences supplémentaires : le secret ne doit pas correspondre à `[a-z]{2,}` |
| Contient un caractère parmi `$%@!` | Exigences supplémentaires : le secret doit correspondre à `[$%@!]` |

Les jetons suivants correspondent au modèle personnalisé décrit ci-dessus :

```
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

Les chaînes suivantes ne correspondent pas au modèle personnalisé décrit ci-dessus :

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## Définition d’un modèle personnalisé pour une organisation

Avant de définir un modèle personnalisé, vous devez vous assurer que vous activez l’{% data variables.product.prodname_secret_scanning %} pour les dépôts que vous souhaitez analyser dans votre organisation. Pour activer l’{% data variables.product.prodname_secret_scanning %} sur tous les dépôts au sein de votre organisation, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

{% ifversion ghes < 3.5 or ghae %} {% note %}

**Remarque :** Comme il n’existe aucune fonctionnalité de test à blanc, nous vous recommandons de tester vos modèles personnalisés dans un dépôt avant de les définir pour l’ensemble de votre organisation. De cette façon, vous pouvez éviter la création d’un nombre excessif de fausses alertes d’{% data variables.product.prodname_secret_scanning %}.

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. Quand vous êtes prêt à tester votre nouveau modèle personnalisé, pour identifier des correspondances dans certains dépôts sans créer d’alertes, cliquez sur **Enregistrer et effectuer un test à blanc**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Une fois votre modèle créé, l’{% data variables.product.prodname_secret_scanning %} recherche tous les secrets dans les dépôts de votre organisation, y compris leur historique Git entier sur toutes les branches. Les propriétaires d’organisation et les administrateurs de dépôt sont avertis des secrets trouvés et peuvent passer en revue l’alerte dans le dépôt où se trouve le secret. Pour plus d’informations sur l’affichage des alertes d’{% data variables.product.prodname_secret_scanning %}, consultez « [Gestion des alertes d’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning) ».

## Définition d’un modèle personnalisé pour un compte d’entreprise

{% ifversion fpt or ghec or ghes %}

Avant de définir un modèle personnalisé, vous devez vous assurer que vous activez l’analyse des secrets pour votre compte d’entreprise. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise) ».

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %} **Remarques :**
- Au niveau de l’entreprise, seul le créateur d’un modèle personnalisé peut le modifier et l’utiliser dans un essai à blanc. 
- Des propriétaires d’entreprise ne peuvent utiliser que des essais à blancs sur des dépôts auxquels ils ont accès, et n’ont pas nécessairement accès à la totalité des organisations ou dépôts au sein de l’entreprise.
{% else %} **Remarque :** comme il n’existe aucune fonctionnalité d’essai à blanc, nous vous recommandons de tester vos modèles personnalisés dans un dépôt avant de les définir pour l’ensemble de votre entreprise. De cette façon, vous pouvez éviter la création d’un nombre excessif de fausses alertes d’{% data variables.product.prodname_secret_scanning %}.

{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}{% ifversion security-feature-enablement-policies %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Sous « Sécurité et analyse du code », cliquez sur **Fonctionnalités de sécurité**.{% else %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-security-features %}{% endif %}
1. Sous « Modèles personnalisés d’analyse des secrets », cliquez sur **Nouveau modèle**.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
1. Quand vous êtes prêt à tester votre nouveau modèle personnalisé, pour identifier les correspondances dans l’entreprise sans créer d’alertes, cliquez sur **Enregistrer et effectuer un test**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-36 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Une fois votre modèle créé, l’{% data variables.product.prodname_secret_scanning %} recherche tous les secrets dans les dépôts au sein des organisations de votre entreprise avec {% data variables.product.prodname_GH_advanced_security %} activé, y compris leur historique Git entier sur toutes les branches. Les propriétaires d’organisation et les administrateurs de dépôt sont avertis des secrets trouvés et peuvent passer en revue l’alerte dans le dépôt où se trouve le secret. Pour plus d’informations sur l’affichage des alertes d’{% data variables.product.prodname_secret_scanning %}, consultez « [Gestion des alertes d’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning) ».

## Modification d’un modèle personnalisé

Quand vous enregistrez une modification apportée à un modèle personnalisé, toutes les alertes d’{% data variables.product.prodname_secret_scanning %} qui ont été créées en utilisant la version précédente du modèle sont fermées.
1. Accédez à l’emplacement où le modèle personnalisé a été créé. Un modèle personnalisé peut être créé dans un compte d’organisation ou d’entreprise ou dans un dépôt.
   * Dans le cas d’un dépôt ou d’une organisation, affichez les paramètres « Sécurité et analyse » pour le dépôt ou l’organisation où le modèle personnalisé a été créé. Pour plus d’informations, consultez « [Définition d’un modèle personnalisé pour un dépôt](#defining-a-custom-pattern-for-a-repository) » ou « [Définition d’un modèle personnalisé pour une organisation](#defining-a-custom-pattern-for-an-organization) » plus haut.
   * Dans le cas d’une entreprise, sous « Stratégies », affichez la zone « Sécurité avancée », puis cliquez sur **Fonctionnalités de sécurité**. Pour plus d’informations, consultez « [Définition d’un modèle personnalisé pour un compte d’entreprise](#defining-a-custom-pattern-for-an-enterprise-account) » plus haut.
2. Sous « {% data variables.product.prodname_secret_scanning_caps %} », à droite du modèle personnalisé que vous souhaitez modifier, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}.
{%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga  %}
3. Quand vous êtes prêt à tester votre modèle personnalisé modifié, pour identifier les correspondances sans créer d’alertes, cliquez sur **Enregistrer et effectuer un test**.
{%- endif %}
4. Après avoir examiné et testé vos modifications, cliquez sur **Enregistrer les modifications**.

## Suppression d’un modèle personnalisé

1. Accédez à l’emplacement où le modèle personnalisé a été créé. Un modèle personnalisé peut être créé dans un compte d’organisation ou d’entreprise ou dans un dépôt.

   * Dans le cas d’un dépôt ou d’une organisation, affichez les paramètres « Sécurité et analyse » pour le dépôt ou l’organisation où le modèle personnalisé a été créé. Pour plus d’informations, consultez « [Définition d’un modèle personnalisé pour un dépôt](#defining-a-custom-pattern-for-a-repository) » ou « [Définition d’un modèle personnalisé pour une organisation](#defining-a-custom-pattern-for-an-organization) » plus haut.
   * Dans le cas d’une entreprise, sous « Stratégies », affichez la zone « Sécurité avancée », puis cliquez sur **Fonctionnalités de sécurité**.  Pour plus d’informations, consultez « [Définition d’un modèle personnalisé pour un compte d’entreprise](#defining-a-custom-pattern-for-an-enterprise-account) » plus haut.
1. À droite du modèle personnalisé que vous souhaitez supprimer, cliquez sur {% octicon "trash" aria-label="The trash icon" %}.
1. Passez en revue la confirmation et sélectionnez une méthode pour gérer les alertes ouvertes relatives au modèle personnalisé.
1. Cliquez sur **Oui, supprimer ce modèle**.

   ![Confirmation de la suppression d’un modèle d’{% data variables.product.prodname_secret_scanning %} ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
