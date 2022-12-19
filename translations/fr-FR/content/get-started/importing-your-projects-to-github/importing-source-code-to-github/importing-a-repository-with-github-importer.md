---
title: Importation d’un dépôt avec GitHub Importer
intro: 'Si vous avez un projet hébergé sur un autre système de gestion de versions, vous pouvez l’importer automatiquement dans GitHub à l’aide de l’outil GitHub Importer.'
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Use GitHub Importer
ms.openlocfilehash: 09b03d2c2c62cf5812f35a3d5b3379c2d0c8e33e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145911198'
---
{% tip %}

**Conseil :** GitHub Importer n’est pas adapté à toutes les importations. Par exemple, si votre code existant est hébergé sur un réseau privé, notre outil ne pourra pas y accéder. Dans de tels cas, nous vous recommandons [d’importer à l’aide de la ligne de commande](/articles/importing-a-git-repository-using-the-command-line) pour les référentiels Git ou d’un [outil de migration de code source](/articles/source-code-migration-tools) externe pour les projets importés à partir d’autres systèmes de contrôle de version.

{% endtip %}

Si vous souhaitez faire correspondre les validations dans votre référentiel aux comptes personnels GitHub des auteurs lors de l’importation, assurez-vous que chaque contributeur à votre référentiel dispose d’un compte GitHub avant de commencer l’importation.

{% data reusables.repositories.repo-size-limit %}

1. Dans le coin supérieur droit de n’importe quelle page, cliquez sur {% octicon "plus" aria-label="Plus symbol" %}, puis sur **Importer le référentiel**.
![Option Importer un référentiel dans le menu nouveau Référentiel](/assets/images/help/importer/import-repository.png)
2. Sous « URL de clone de votre ancien référentiel », tapez l’URL du projet que vous souhaitez importer.
![Champ texte pour l’URL du référentiel importé](/assets/images/help/importer/import-url.png)
3. Choisissez votre compte personnel ou une organisation qui possédera le référentiel, puis tapez un nom pour le référentiel sur GitHub.
![Menu Propriétaire du référentiel et champ Nom du référentiel](/assets/images/help/importer/import-repo-owner-name.png)
4. Spécifiez si le nouveau référentiel doit être *public* ou *privé*. Pour plus d’informations, consultez « [Définition de la visibilité du dépôt](/articles/setting-repository-visibility) ».
![Cases d’option de référentiel public ou privé](/assets/images/help/importer/import-public-or-private.png)
5. Passez en revue les informations que vous avez entrées, puis cliquez sur **Commencer l’importation**.
![Bouton Commencer l’importation](/assets/images/help/importer/begin-import-button.png)
6. Si votre ancien projet demande des informations d’identification, tapez vos informations de connexion pour ce projet, puis cliquez sur **Envoyer**. Si l’authentification unique SAML ou 2FA est activée pour votre compte d’utilisateur sur l’ancien projet, entrez un jeton d’accès personnel avec des autorisations de lecture du dépôt dans le champ « Mot de passe » au lieu de votre mot de passe.
![Formulaire de mot de passe et bouton Envoyer pour le projet protégé par mot de passe](/assets/images/help/importer/submit-old-credentials-importer.png)
7. S’il existe plusieurs projets hébergés à l’URL de clone de votre ancien projet, choisissez le projet que vous souhaitez importer, puis cliquez sur **Envoyer**.
![Liste des projets à importer et bouton Envoyer](/assets/images/help/importer/choose-project-importer.png)
8. Si votre projet contient des fichiers de plus de 100 Mo, choisissez d’importer les fichiers volumineux à l’aide du [Stockage de grands fichiers Git](/articles/versioning-large-files), puis cliquez sur **Continuer**.
![Menu de stockage de grands fichiers Git et bouton Continuer](/assets/images/help/importer/select-gitlfs-importer.png)

Vous recevrez un e-mail lorsque le référentiel aura été complètement importé.

## Pour aller plus loin

- « [Mise à jour de l’attribution de l’auteur de validation avec GitHub Importer](/articles/updating-commit-author-attribution-with-github-importer) »
