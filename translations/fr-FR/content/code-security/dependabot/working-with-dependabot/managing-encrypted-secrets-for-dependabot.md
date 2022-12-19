---
title: Gestion des secrets chiffrés pour Dependabot
intro: 'Vous pouvez stocker des informations sensibles, telles que des mots de passe et des jetons d’accès, en tant que secrets chiffrés, puis les référencer dans le fichier de configuration {% data variables.product.prodname_dependabot %}.'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
shortTitle: Manage encrypted secrets
ms.openlocfilehash: 94b9e4c1945385ee9abca9cc548b159231e212c3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106372'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## À propos des secrets chiffrés pour {% data variables.product.prodname_dependabot %}

Les secrets {% data variables.product.prodname_dependabot %} sont des informations d’identification chiffrées que vous créez au niveau de l’organisation ou du dépôt.
Quand vous ajoutez un secret au niveau de l’organisation, vous pouvez spécifier les dépôts qui peuvent accéder à ce secret. Vous pouvez utiliser des secrets pour autoriser {% data variables.product.prodname_dependabot %} à mettre à jour les dépendances situées dans les registres de packages privés. Quand vous ajoutez un secret, il est chiffré avant d’atteindre {% data variables.product.prodname_dotcom %} et il demeure chiffré jusqu’à ce que {% data variables.product.prodname_dependabot %} l’utilise pour accéder à un registre de package privé.

Après avoir ajouté un secret {% data variables.product.prodname_dependabot %}, vous pouvez le référencer dans le fichier de configuration _dependabot.yml_ comme suit : {% raw %}`${{secrets.NAME}}`{% endraw %}, où « NAME » est le nom que vous avez choisi pour le secret. Par exemple : 

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

Pour plus d’informations, consultez « [Options de configuration pour le fichier dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries) ».

### Nommage de vos secrets

Le nom d’un secret {% data variables.product.prodname_dependabot %} :
* Peut contenir uniquement des caractères alphanumériques (`[A-Z]`, `[0-9]`) ou des traits de soulignement (`_`). Les espaces ne sont pas autorisés. Si vous entrez des lettres minuscules, celles-ci sont converties en lettres majuscules.
* Ne doit pas commencer par le préfixe `GITHUB_`.
* Ne doit pas commencer par un chiffre.

## Ajout d’un secret de dépôt pour {% data variables.product.prodname_dependabot %}

{% data reusables.actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.dependabot.sidebar-secret %}
1. Cliquez sur **Nouveau secret de dépôt**.
1. Tapez un nom pour votre secret dans la zone d’entrée **Nom**.
1. Entrez la valeur de votre secret.
1. Cliquez sur **Ajouter un secret**.

   Le nom du secret est listé dans la page des secrets Dependabot. Vous pouvez cliquer sur **Mettre à jour** pour changer la valeur du secret. Vous pouvez cliquer sur **Supprimer** pour supprimer le secret.

   ![Mettre à jour ou supprimer un secret de dépôt](/assets/images/help/dependabot/update-remove-repo-secret.png)

## Ajout d’un secret d’organisation pour {% data variables.product.prodname_dependabot %}

Lors de la création d’un secret dans une organisation, vous pouvez utiliser une stratégie pour limiter les dépôts qui peuvent accéder à ce secret. Par exemple, vous pouvez accorder l’accès à tous les dépôts, ou limiter l’accès aux seuls dépôts privés ou à une liste spécifiée de dépôts.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.dependabot.sidebar-secret %}
1. Cliquez sur **Nouveau secret d’organisation**.
1. Tapez un nom pour votre secret dans la zone d’entrée **Nom**.
1. Entrez la **valeur** de votre secret.
1. Dans la liste déroulante **Accès au dépôt**, choisissez une stratégie d’accès.
1. Si vous avez choisi **Dépôts sélectionnés** :

   * Cliquez sur {% octicon "gear" aria-label="The Gear icon" %}.
   * Choisissez les dépôts qui peuvent accéder à ce secret. 
     ![Sélectionner des dépôts pour ce secret](/assets/images/help/dependabot/secret-repository-access.png)
   * Cliquez sur **Mettre à jour la sélection**.

1. Cliquez sur **Ajouter un secret**.

   Le nom du secret est listé dans la page des secrets Dependabot. Vous pouvez cliquer sur **Mettre à jour** pour changer la valeur du secret ou sa stratégie d’accès. Vous pouvez cliquer sur **Supprimer** pour supprimer le secret.

   ![Mettre à jour ou supprimer un secret d’organisation](/assets/images/help/dependabot/update-remove-org-secret.png)
   
## Ajout de {% data variables.product.prodname_dependabot %} à votre liste d’adresses IP autorisées pour les registres

Si votre registre privé est configuré avec une liste d’adresses IP autorisées, vous pouvez trouver les adresses IP que {% data variables.product.prodname_dependabot %} utilise pour accéder au registre dans le point de terminaison d’API meta, sous la clé `dependabot`. Pour plus d’informations, consultez « [Meta](/rest/reference/meta) ».
