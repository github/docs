---
title: Suspender la instalación de una GitHub App
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092177'
---
## Suspender una GitHub App

El integrador que mantiene y al que le pertenece la GitHub app, también llamado propietario de la GitHub App, puede suspender o dejar de suspender una instalación de la GitHub App utilizando las terminales de la API de REST con JWT. Para más información, vea la [API REST de GitHub Apps](/rest/reference/apps).

Las personas que han instalado una GitHub App, también llamadas propietarias de la instalación, solo podrán suspender o dejar de suspendar una GitHub App a través de la configuración de instalación de la app. Los propietarios de la instalación no pueden usar la API para suspender o dejar de suspender su instalación de la app.

Si el propietario de la {% data variables.product.prodname_github_app %} suspendió una instalación, los propietarios de dicha instalación no podrán dejar de suspender las instalaciones de la {% data variables.product.prodname_github_app %}. Sin embargo, los propietarios de la instalación pueden cambiar otros ajustes, tales como la selección del repositorio, mientras la app está suspendida.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. Selecciona la {% data variables.product.prodname_github_app %} que quieres suspender.
![Selección de aplicaciones](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
6. Junto a la configuración de suspensión de la instalación, haga clic en **Suspender** o **Anular suspensión**.
![Suspensión de una aplicación de GitHub](/assets/images/github-apps/suspend-a-github-app.png)
