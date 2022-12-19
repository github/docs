---
title: Anhalten einer GitHub-App-Installation
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089852'
---
## Anhalten einer GitHub-App

Der Integrator, der Besitzer einer GitHub-App ist und diese verwaltet, kann eine GitHub-App-Installation mit REST-API-Endpunkten mit einem JWT anhalten oder entsperren. Weitere Informationen findest du unter [REST-API für GitHub-Apps](/rest/reference/apps).

Personen, die eine GitHub-App installiert haben, auch als Installationsbesitzer bezeichnet, können eine GitHub-App nur über die Installationseinstellungen ihrer App anhalten oder entsperren. Installationsbesitzer können nicht die API verwenden, um ihre App-Installation anzuhalten oder zu entsperren.

Wenn eine Installation vom Besitzer der {% data variables.product.prodname_github_app %} angehalten wurde, können die Besitzer der Installation ihre Installationen der {% data variables.product.prodname_github_app %} nicht entsperren. Installationsbesitzer können jedoch andere Einstellungen ändern, z.B. die Repositoryauswahl, während die App angehalten wird.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. Wähle die {% data variables.product.prodname_github_app %} aus, die du anhalten möchtest.
![App-Auswahl](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
6. Klicke neben den Anhalteeinstellungen für die Installation auf **Anhalten** oder **Entsperren**.
![Anhalten einer GitHub-App](/assets/images/github-apps/suspend-a-github-app.png)
