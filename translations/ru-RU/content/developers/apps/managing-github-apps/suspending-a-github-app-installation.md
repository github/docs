---
title: Приостановка установки приложения GitHub
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089853'
---
## Приостановка приложения GitHub

Интегратор, который владеет приложением GitHub и обслуживает его (также называемый владельцем приложения GitHub), может приостановить или возобновить установку приложения GitHub с помощью конечных точек REST API с JWT. Дополнительные сведения см. в разделе о [REST API приложений GitHub](/rest/reference/apps).

Пользователи, которые установили приложение GitHub (также называемые владельцами установки), могут приостановить или возобновить работу приложения GitHub с помощью параметров установки приложения. Владельцы установки не могут использовать API для приостановки или возобновления установки приложения.

Если установка приостановлена владельцем {% data variables.product.prodname_github_app %}, владельцы установки не могут возобновить установку {% data variables.product.prodname_github_app %}. Однако владельцы установки могут изменять другие параметры, такие как выбранный репозиторий, пока приложение приостановлено.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. Выберите {% data variables.product.prodname_github_app %}, работу которого нужно приостановить.
![Выбор приложения](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
6. Рядом с параметрами приостановки установки нажмите кнопку **Приостановить** или **Возобновить**.
![Приостановка приложения GitHub](/assets/images/github-apps/suspend-a-github-app.png)
