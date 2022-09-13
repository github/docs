---
title: Revisar suas chaves de implantação
intro: Você deve revisar as chaves de implantação para verificar se há chaves não autorizadas (ou potencialmente comprometidas). Você também pode aprovar as chaves de implantação que são válidas.
redirect_from:
  - /articles/reviewing-your-deploy-keys
  - /github/authenticating-to-github/reviewing-your-deploy-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Deploy keys
ms.openlocfilehash: 964ec4cbc91745c041dd973e4e950b605c5c0233
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083619'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
3. Na seção "Segurança" da barra lateral, clique em **{% octicon "key" aria-label="The key icon" %} Implantar chaves**.
{% else %}
3. Na barra lateral esquerda, clique em **Implantar chaves**.
![Configuração de Implantar chaves](/assets/images/help/settings/settings-sidebar-deploy-keys.png) {% endif %}
4. Na página das chaves de implantação, anote as chaves de implantação associadas à sua conta. Para aquelas que você não reconhece ou que estão desatualizadas, clique em **Excluir**. Se houver chaves de implantação válidas que você deseja manter, clique em **Aprovar**.
    ![Lista de chaves de implantação](/assets/images/help/settings/settings-deploy-key-review.png)

Para obter mais informações, confira "[Como gerenciar chaves de implantação](/guides/managing-deploy-keys)".

## Leitura adicional
- [Como configurar notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
