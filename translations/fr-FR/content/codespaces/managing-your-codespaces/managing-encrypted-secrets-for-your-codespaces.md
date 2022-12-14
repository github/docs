---
title: Gestion des secrets chiffrés pour vos codespaces
intro: Vous pouvez stocker les informations sensibles (telles que des jetons) auxquelles vous souhaitez accéder dans vos codespaces via des variables d’environnement.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: Encrypted secrets
ms.openlocfilehash: a1ea1c87581feccd737314db0d7bf237f983357a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192808'
---
## À propos des secrets chiffrés pour {% data variables.product.prodname_github_codespaces %}

Vous pouvez ajouter des secrets chiffrés à votre compte personnel en vue de les utiliser dans vos codespaces. Par exemple, vous pouvez stocker les informations sensibles suivantes sous forme de secrets chiffrés afin d’y accéder.

- Jetons d’accès aux services cloud
- Principaux de service
- Identificateurs d’abonnement
- Informations d’identification pour un registre d’images privées (pour plus d’informations, voir « [Autoriser votre codespace à accéder à un registre privé](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-registry) »)

Vous pouvez déterminer quels dépôts doivent avoir accès à chaque secret. Ensuite, vous pouvez utiliser chaque secret dans un codespace que vous créez pour un dépôt qui a accès à ces secrets. Pour partager un secret avec un codespace créé à partir d’un modèle, vous devez publier le codespace dans un dépôt sur {% data variables.product.prodname_dotcom %}, puis accorder à ce dépôt l’accès au secret.

{% data reusables.codespaces.secrets-on-start %}

### Nommage des secrets

{% data reusables.codespaces.secrets-naming %} Par exemple, un secret créé au niveau du dépôt doit avoir un nom unique dans ce dépôt.

  {% data reusables.codespaces.secret-precedence %}

### Limites pour les secrets

Vous pouvez stocker jusqu’à 100 secrets pour {% data variables.product.prodname_github_codespaces %}.

La taille des secrets est limitée à 64 Ko.

## Ajout d’un secret

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. À droite de « Secrets Codespaces », cliquez sur **Nouveau secret**.
  ![Bouton « Nouveau secret »](/assets/images/help/settings/codespaces-new-secret-button.png)
1. Sous « Nom », tapez un nom pour votre secret.
  ![Zone de texte « Nom »](/assets/images/help/settings/codespaces-secret-name-field.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. Cliquez sur **Ajouter un secret**.

## Modification d’un secret

Vous pouvez mettre à jour la valeur d’un secret existant et modifier les dépôts qui peuvent y accéder.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Secrets Codespaces », à droite du secret à modifier, cliquez sur **Mettre à jour**.
  ![Bouton « Mettre à jour »](/assets/images/help/settings/codespaces-secret-update-button.png)
1. Sous « Valeur », cliquez sur **Entrer une nouvelle valeur**.
  ![Lien « Entrer une nouvelle valeur »](/assets/images/help/settings/codespaces-secret-update-value-text.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. Si nécessaire, pour supprimer l’accès du secret à un dépôt, désélectionnez le dépôt.
  ![Cases à cocher permettant de supprimer l’accès à des dépôts](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Cliquez sur **Save changes**.

## Suppression d’un secret

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Secrets Codespaces », à droite du secret à supprimer, cliquez sur **Supprimer**.
  ![Bouton « Supprimer »](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Lisez l’avertissement, puis cliquez sur **OK**.
  ![Confirmation de la suppression du secret](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## Utilisation de secrets

Un secret est exporté en tant que variable d’environnement dans la session du terminal de l’utilisateur.

  ![Affichage de la valeur d’un secret exporté dans le terminal](/assets/images/help/codespaces/exported-codespace-secret.png)

Vous pouvez utiliser des secrets dans un codespace une fois que le codespace est créé et exécuté. Par exemple, un secret peut être utilisé :

* Lors du lancement d’une application à partir du terminal intégré ou de la session ssh.
* Dans un script de cycle de vie de conteneur de développement exécuté après l’exécution du codespace. Pour plus d’informations sur les scripts de cycle de vie de conteneur de développement, consultez la documentation sur containers.dev : [Specification](https://containers.dev/implementors/json_reference/#lifecycle-scripts).

Les secrets de codespace ne peuvent pas être utilisés :

* Pendant la génération d’un codespace (autrement dit, dans un Dockerfile ou un point d’entrée personnalisé).
* Dans une fonctionnalité de conteneur de développement. Pour plus d’informations, consultez la propriété `features` dans la [spécification des conteneurs de développement](https://containers.dev/implementors/json_reference/#general-properties) sur containers.dev.

## Pour aller plus loin

- « [Gestion des secrets chiffrés de votre dépôt et de votre organisation pour {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces) »
