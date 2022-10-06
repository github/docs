---
title: Suspender uma instalação do aplicativo GitHub
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083987'
---
## Suspender um aplicativo GitHub

O integrador que possui e mantém um aplicativo GitHub, também chamado de proprietário do aplicativo GitHub, pode suspender ou cancelar a suspensão de uma instalação do aplicativo GitHub usando pontos de extremidade da API REST com JWT. Para obter mais informações, confira a [API REST dos Aplicativos do GitHub](/rest/reference/apps).

Pessoas que instalaram um aplicativo GitHub, também chamado de proprietários de instalação, só podem suspender ou cancelar a suspensão de um aplicativo GitHub através das configurações de instalação do aplicativo. Os proprietários de instalação não podem usar a API para suspender ou cancelar a suspensão da instalação do aplicativo.

Se uma instalação foi suspensa pelo proprietário de {% data variables.product.prodname_github_app %}, os proprietários da instalação não poderão cancelar a suspensão das suas instalações de {% data variables.product.prodname_github_app %}. No entanto, os proprietários de instalação podem alterar outras configurações, como a seleção de repositório, enquanto o aplicativo está suspenso.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. Selecione o {% data variables.product.prodname_github_app %} que você deseja suspender.
![Seleção do aplicativo](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
6. Ao lado das configurações de suspensão da instalação, clique em **Suspender** ou **Cancelar Suspensão**.
![Suspender um Aplicativo do GitHub](/assets/images/github-apps/suspend-a-github-app.png)
