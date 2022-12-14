---
title: Rendre une application GitHub publique ou privée
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps
  - /apps/building-github-apps/installation-options-for-github-apps
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage app visibility
ms.openlocfilehash: f276be130be76f110d4c4ad3c0bfa3bff708aad6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065889'
---
Pour des informations sur l’authentification, consultez « [Authentification avec GitHub Apps](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) ».

## Flux d’installation public

Les flux d’installation publics ont une page de destination pour permettre à des personnes autres que le propriétaire de l’application d’installer celle-ci dans leurs dépôts. Ce lien est fourni dans le champ « Lien public » lors de la configuration de votre application GitHub. Pour plus d’informations, consultez « [Installation d’applications GitHub](/apps/installing-github-apps/) ».

## Flux d’installation privé

Les flux d’installation privés autorisent uniquement le propriétaire d’une application GitHub à installer celle-ci. Des informations limitées sur l’application GitHub existeront toujours sur une page publique, mais le bouton **Installer** ne sera disponible pour les administrateurs ou le compte personnel de l’organisation que si l’application GitHub appartient à un compte individuel. Les applications GitHub privées peuvent uniquement être installées sur le compte d’utilisateur ou d’organisation du propriétaire.

## Modification de la personne qui peut installer votre application GitHub

Pour modifier la personne qui peut installer l’application GitHub :

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
3. Sélectionnez l’application GitHub dont vous souhaitez modifier l’option d’installation.
![Sélection de l’application](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
5. Selon l’option d’installation de votre application GitHub, cliquez sur **Rendre publique** ou **Rendre privé**.
![Bouton pour modifier l’option d’installation de votre application GitHub](/assets/images/github-apps/github_apps_make_public.png)
6. Selon l’option d’installation de votre application GitHub, cliquez sur **Oui, rendre cette application GitHub publique** ou **Oui, rendre cette application GitHub {% ifversion fpt or ghec %}interne{% else %}privée{% endif %}** .
![Bouton pour confirmer la modification de votre option d’installation](/assets/images/github-apps/github_apps_confirm_installation_option.png)
