---
title: Habilitando a sincronização automática de licença de usuário para sua empresa
intro: 'Você pode gerenciar o uso da licença entre os seus ambientes de {% data variables.product.prodname_enterprise %} sincronizando automaticamente as licenças de usuário de {% data variables.product.product_location %} com {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: Enterprise owners can enable automatic user license synchronization.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
ms.openlocfilehash: eb0216dcdb629e96ef83de2eea8a7d7b6660a171
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910556'
---
## Sobre a sincronização automática de licenças

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %} Para obter mais informações, confira "[Sobre {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#data-transmission-for-github-connect)".

Se você habilitar a sincronização automática de licença do usuário em sua empresa, o {% data variables.product.prodname_github_connect %} sincronizará automaticamente o uso de licenças entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %} semanalmente.{% ifversion ghes > 3.4 %} Você também pode sincronizar seus dados de licença a qualquer momento fora da sincronização semanal automática, disparando manualmente um trabalho de sincronização de licença. Para obter mais informações, confira "[Disparando um trabalho de sincronização de licenças](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#triggering-a-license-sync-job)".{% endif %}

Se você usar várias instâncias de {% data variables.product.prodname_ghe_server %}, você pode habilitar a sincronização automática de licença entre cada uma de suas instâncias e a mesma organização ou conta corporativa em {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

Você também pode fazer upload manualmente das informações de licença do usuário do {% data variables.product.prodname_ghe_server %} para o {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Sincronizando o uso de licenças entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Habilitar a sincronização de licenças

Antes de habilitar a sincronização de licença em {% data variables.product.product_location %}, você deverá habilitar {% data variables.product.prodname_github_connect %}. Para obter mais informações, confira "[Como gerenciar o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Em "O servidor pode sincronizar a contagem e o uso de licenças de usuários", use o menu suspenso e selecione **Habilitado**.
  ![Menu suspenso para habilitar a sincronização automática de licenças de usuários](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
