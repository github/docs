---
title: Modification d’une application GitHub
intro: '{% data reusables.shortdesc.modifying_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/modifying-a-github-app
  - /apps/managing-github-apps/modifying-a-github-app
  - /developers/apps/modifying-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 9038a938d26aa5f1e9ec3cdec6fcecd417f0baf8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885859'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. Dans « Informations de base », modifiez les informations de l’application GitHub souhaitées.
![Section Informations de base de votre application GitHub](/assets/images/github-apps/github_apps_basic_information.png){% ifversion device-flow-is-opt-in %}
1. Si votre application GitHub doit utiliser le flux d’appareil pour identifier et autoriser les utilisateurs, cliquez sur **Activer le flux d’appareil**. Pour plus d’informations sur le flux d’appareil, consultez « [Autorisation des applications OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow) ».
  ![Capture d’écran montrant le champ d’activation du flux d’appareil](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
6. Cliquez sur **Save changes**.
![Bouton permettant d’enregistrer des modifications pour votre application GitHub](/assets/images/github-apps/github_apps_save_changes.png)
