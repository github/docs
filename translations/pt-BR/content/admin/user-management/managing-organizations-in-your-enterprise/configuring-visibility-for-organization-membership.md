---
title: Configurar a visibilidade dos integrantes da organização
intro: Você pode definir visibilidade para novos integrantes da organização em toda a sua empresa como pública ou privada. Também é possível impedir que os integrantes alterem a visibilidade padrão.
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
shortTitle: Set membership visibility
ms.openlocfilehash: e628fab4f8aa77579e0ce89f18a70813274928b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332341'
---
{% ifversion ghes %} Você também pode impor sua configuração padrão a todos os membros atuais da organização na instância usando um utilitário de linha de comando. Por exemplo, se quiser que a visibilidade de todos os integrantes da organização seja pública, você pode definir o padrão como "pública" e aplicá-lo para todos os novos integrantes nas configurações de administrador, e depois usar o utilitário de linha de comando para aplicar a configuração "pública" a todos os outros integrantes.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
3. Em "Visibilidade padrão de associação à organização", use o menu suspenso e clique em **Privado** ou **Público**.
  ![Menu suspenso com a opção de configurar a visibilidade padrão dos membros da organização como pública ou privada](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. Opcionalmente, para impedir que os membros alterem a visibilidade de associação do padrão, selecione **Impor aos membros da organização**.
  ![Caixa de seleção usada para impor a configuração padrão em todos os membros](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% ifversion ghes %}
5. Caso você deseje impor a nova configuração de visibilidade a todos os membros existentes, use o utilitário de linha de comando `ghe-org-membership-update`. Para obter mais informações, confira "[Utilitários de linha de comando](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-membership-update)".{% endif %}
