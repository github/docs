---
title: Création d’un badge personnalisé pour votre application GitHub
intro: '{% data reusables.shortdesc.creating_custom_badges_github_apps %}'
redirect_from:
  - /apps/building-github-apps/creating-custom-badges-for-github-apps
  - /developers/apps/creating-a-custom-badge-for-your-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Custom badges
ms.openlocfilehash: df691669b42b0448f9979dec4bf25ca6c1ebf070
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105229'
---
Par défaut, un [identicon](https://github.com/blog/1586-identicons) est généré automatiquement pour une nouvelle application GitHub.
Un badge identicon ressemble à ceci :

![Identicon](/assets/images/identicon.png)

Une fois que vous avez créé une application GitHub, vous pouvez personnaliser le badge de l’application en chargeant un logo et en sélectionnant une couleur d’arrière-plan. Un badge est une image de logo carrée à l’intérieur d’un badge circulaire. Vous pouvez choisir une couleur d’arrière-plan pour le badge, ce qui permet de distinguer visuellement votre application.

Votre logo doit être un fichier PNG, JPG ou GIF d’une taille inférieure à 1 Mo. Pour un rendu de qualité optimale, nous vous recommandons une image d’au moins 200 pixels x 200 pixels. {% ifversion fpt or ghec %}Consultez « [Conseils pour les images de logo et de badge](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos) » pour obtenir de l’aide supplémentaire sur la personnalisation des badges.{% endif %}

{% ifversion fpt or ghec %}

Vous pouvez changer un badge personnalisé pour une application GitHub qui dispose déjà d’un référencement approuvé sur le Marketplace en accédant à https://github.com/marketplace/manage.

{% endif %}

Pour créer un badge personnalisé :

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. Dans « Informations d’affichage », effectuez un glisser-déposer d’une image à partir d’un dossier local, ou cliquez sur **Charger un logo** pour sélectionner une image sur votre ordinateur.
![Charger un logo](/assets/images/github-apps/github_apps_upload_logo.png)
6. Rognez votre image. Une fois que vous avez fini, cliquez sur **Définir le nouvel avatar**.
![Rogner et définir le logo](/assets/images/github-apps/github_apps_crop_and_set_avatar.png)
7. Dans « Couleur d’arrière-plan du badge », tapez le [code de couleur hexadécimal](http://www.color-hex.com/) de la couleur d’arrière-plan de votre badge. {% ifversion fpt or ghec %}**Remarque :** Le champ d’entrée « Couleur d’arrière-plan du badge » n’apparaît qu’une fois que vous avez chargé un logo d’application.{% endif %} ![Couleur d’arrière-plan du badge](/assets/images/github-apps/github_apps_badge_background_color.png)

{% ifversion fpt or ghec %}

## Étapes suivantes

Pour plus d’informations sur la création d’un référencement sur le Marketplace pour cette application, consultez « [Référencement sur GitHub Marketplace](/marketplace/listing-on-github-marketplace/) ».

{% endif %}
