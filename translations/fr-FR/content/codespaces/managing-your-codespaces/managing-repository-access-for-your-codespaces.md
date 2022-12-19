---
title: Gestion de l’accès à d’autres dépôts dans votre codespace
allowTitleToDifferFromFilename: true
shortTitle: Repository access
intro: 'Vous pouvez gérer les référentiels auxquels {% data variables.product.prodname_github_codespaces %} a accès.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
ms.openlocfilehash: 3f8379c322bd7ccd9ff7d31e17da90a77461536d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159695'
---
## Vue d’ensemble

Par défaut, votre codespace se voit attribuer un jeton délimité au dépôt à partir duquel il a été créé. Quand vous publiez un codespace que vous avez créé à partir d’un modèle dans un nouveau dépôt sur {% data variables.product.product_name %}, un jeton délimité au nouveau dépôt est affecté au codespace. Pour plus d’informations, consultez « [Sécurité dans {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces#authentication). » Si votre projet a besoin d’autorisations supplémentaires pour d’autres dépôts, vous pouvez les configurer dans le fichier `devcontainer.json` et vérifier que les autres collaborateurs disposent de l’ensemble d’autorisations approprié.

Quand des autorisations sont listées dans le fichier `devcontainer.json`, vous êtes invité à passer en revue et autoriser les autorisations supplémentaires dans le cadre de la création du codespace pour ce dépôt. Une fois que vous avez autorisé les autorisations listées, {% data variables.product.prodname_github_codespaces %} mémorise votre choix et ne vous demande pas d’autorisation, sauf si les autorisations figurant dans le fichier `devcontainer.json` changent.

## Prérequis

Pour créer des codespaces avec des autorisations personnalisées définies, vous devez utiliser l’une des options suivantes :
* L’interface utilisateur web de {% data variables.product.prodname_dotcom %}
* [{% data variables.product.prodname_dotcom %} CLI](https://github.com/cli/cli/releases/latest) 2.5.2 ou version ultérieure
* [Extension de {% data variables.product.prodname_github_codespaces %} {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 ou version ultérieure

## Définition d’autorisations de dépôt supplémentaires

1. Vous configurez les autorisations de dépôt pour {% data variables.product.prodname_github_codespaces %} dans le fichier `devcontainer.json`. Si votre dépôt ne contient pas encore de fichier `devcontainer.json`, ajoutez-en un maintenant. Pour plus d’informations, consultez « [Ajouter un conteneur de développement à votre projet](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces) ».

1. Modifiez le fichier `devcontainer.json`, en ajoutant le nom du dépôt et les autorisations nécessaires à l’objet `repositories` :

  ```json{:copy}
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  {% note %}

  **Remarque :** Vous pouvez uniquement référencer des dépôts qui appartiennent au même compte personnel ou à la même organisation que le dépôt dans lequel vous travaillez actuellement.

  {% endnote %}

  Vous pouvez octroyer le nombre souhaité d’autorisations suivantes pour chaque dépôt listé :
   * `actions` – lecture / écriture
   * `checks` – lecture / écriture
   * `contents` – lecture / écriture
   * `deployments` – lecture / écriture
   * `discussions` – lecture / écriture
   * `issues` – lecture / écriture
   * `packages` – lecture
   * `pages` – lecture / écriture
   * `pull_requests` – lecture / écriture
   * `repository_projects` – lecture / écriture
   * `statuses` – lecture / écriture
   * `workflows` – écriture

  Pour définir une autorisation pour tous les dépôts au sein d’une organisation, utilisez le caractère générique `*` après le nom de votre organisation dans l’objet `repositories`.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/*": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  Pour définir toutes les autorisations pour un dépôt donné, utilisez `"permissions": "read-all"` ou `"permissions": "write-all"` dans l’objet de dépôt.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": "write-all"
          }
        }
      }
    }
  }
  ```

## Acceptation des autorisations demandées

Si des autorisations de dépôt supplémentaires sont définies dans le fichier `devcontainer.json`, vous êtes invité à les passer en revue et éventuellement de les accepter quand vous créez un codespace ou une configuration de prébuild pour ce dépôt. Quand vous acceptez des autorisations pour un dépôt, {% data variables.product.prodname_github_codespaces %} ne vous réinvite pas à les passer en revue, sauf si l’ensemble d’autorisations demandées a changé pour le dépôt.

![Page des autorisations demandées](/assets/images/help/codespaces/codespaces-accept-permissions.png)

Vous devez uniquement accepter les autorisations pour les dépôts que vous connaissez et en lesquels vous avez confiance. Si vous n’approuvez pas l’ensemble des autorisations demandées, cliquez sur **Continuer sans autoriser** pour créer le codespace avec l’ensemble d’autorisations de base. Le refus d’autorisations supplémentaires peut avoir des répercussions sur le fonctionnement de votre projet au sein du codespace, car ce dernier n’a alors accès qu’au dépôt à partir duquel il a été créé.

Vous pouvez uniquement accepter des autorisations que votre compte personnel possède déjà. Si un codespace demande des autorisations pour des dépôts auxquels vous n’avez pas actuellement accès, contactez leur propriétaire ou administrateur pour obtenir l’accès suffisant, puis réessayez de créer un codespace.

## Accès et sécurité

{% warning %}

**Note de dépréciation** : Le paramètre d’accès et de sécurité décrit ci-dessous est maintenant déprécié et documenté ici pour référence uniquement. Pour permettre un accès étendu à d’autres dépôts, ajoutez les autorisations demandées à la définition de votre conteneur de développement pour votre codespace, comme décrit ci-dessus.

{% endwarning %}

Quand vous activez l’accès et la sécurité d’un dépôt dont votre compte personnel est propriétaire, tous les codespaces créés pour ce dépôt ont des autorisations d’accès en lecture à tous les autres dépôts que vous possédez. Si vous voulez restreindre les dépôts auxquels un codespace peut accéder, vous pouvez le limiter au dépôt pour lequel le codespace a été ouvert ou à des dépôts spécifiques. Vous devez uniquement activer l’accès et la sécurité pour les dépôts auxquels vous faites confiance. 

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Accès et sécurité », sélectionnez le paramètre que vous voulez pour votre compte personnel.

  ![Cases d’option pour gérer les dépôts approuvés](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. Si vous avez choisi « Dépôts sélectionnés », sélectionnez le menu déroulant, puis cliquez sur un dépôt pour autoriser les codespaces du dépôt à accéder aux autres dépôts qui vous appartiennent. Répétez cette opération pour tous les dépôts dont les codespaces ont besoin de pouvoir accéder aux autres dépôts dont vous êtes propriétaire.

  ![Menu déroulant « Dépôts sélectionnés »](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
