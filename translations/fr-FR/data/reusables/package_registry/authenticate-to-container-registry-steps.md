---
ms.openlocfilehash: 50e7f623d6585c8697d0b1c6c827a855df26c571
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145107598"
---
1. Créez un jeton d’accès personnel (PAT) avec les étendues appropriées pour les tâches que vous souhaitez accomplir. Si votre organisation exige l’authentification unique, vous devez l’activer pour votre nouveau jeton.
  {% warning %}

  **Remarque :** Par défaut, lorsque vous sélectionnez l’étendue `write:packages` de votre jeton d’accès personnel (PAT) dans l’interface utilisateur, l’étendue `repo` est également sélectionnée. L’étendue `repo` offre un accès inutile et vaste à la fois, que nous vous recommandons d’éviter d’utiliser pour les workflows GitHub Actions en particulier. Pour plus d’informations, consultez « [Renforcement de la sécurité pour GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access) ». En guise de solution de contournement, vous pouvez juste sélectionner l’étendue `write:packages` pour votre PAT dans l’interface utilisateur avec cette URL : `https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages`. 

  {% endwarning %}

    - Sélectionnez l’étendue `read:packages` pour télécharger des images conteneur et lire leurs métadonnées.
    - Sélectionnez l’étendue `write:packages` pour télécharger et charger des images conteneur et lire et écrire leurs métadonnées.
    - Sélectionnez l’étendue `delete:packages` pour supprimer des images conteneur.

  Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel pour la ligne de commande](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) ».

2. Enregistrez votre PAT. Nous vous recommandons d’enregistrer votre PAT en tant que variable d’environnement.
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. À l’aide de l’interface CLI de votre type de conteneur, connectez-vous au service du {% data variables.product.prodname_container_registry %} sur `{% data reusables.package_registry.container-registry-hostname %}`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
