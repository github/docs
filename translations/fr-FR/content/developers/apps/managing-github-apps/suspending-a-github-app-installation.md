---
title: Suspension de l’installation d’une application GitHub
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
  - /developers/apps/suspending-a-github-app-installation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Suspend app installation
ms.openlocfilehash: c87d1a82b2ccc18284ddc9ec3b28de5e1342b3cb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086407'
---
## Suspension d’une application GitHub

L’intégrateur qui possède et gère une application GitHub, également désigné sous le nom de propriétaire de l’application GitHub, peut suspendre ou annuler la suspension de l’installation d’une application GitHub à l’aide de points de terminaison d’API REST avec un JWT. Pour plus d’informations, consultez [API REST des applications GitHub](/rest/reference/apps).

Les personnes qui ont installé une application GitHub, également appelées propriétaires de l’installation, ne peuvent suspendre ou annuler la suspension de l’application GitHub que par le biais des paramètres d’installation de cette application. Un propriétaire d’installation ne peut pas utiliser l’API pour suspendre ou annuler la suspension de l’installation de leur application.

Si une installation a été suspendue par le propriétaire de l’{% data variables.product.prodname_github_app %}, les propriétaires d’installations ne peuvent pas annuler la suspension de leurs installations de l’{% data variables.product.prodname_github_app %}. En revanche, les propriétaires d’installations peuvent modifier d’autres paramètres, comme la sélection du référentiel, pendant que l’application est suspendue.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. Sélectionnez l’{% data variables.product.prodname_github_app %} à suspendre.
![Sélection de l’application](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
6. En regard des paramètres de suspension de l’installation, cliquez sur **Suspendre** ou **Annuler la suspension**.
![Suspendre une application GitHub](/assets/images/github-apps/suspend-a-github-app.png)
