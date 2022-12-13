---
title: Verificações de atualizações automáticas
intro: 'É possível habilitar as verificações de atualizações automáticas para que a {% data variables.product.product_location %} verifique e baixe as últimas versões do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/enabling-automatic-update-checks
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Enable automatic update checks
ms.openlocfilehash: c566dc54958cc7d4f26a9279ea3bf8a76aafa636
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331885'
---
Quando um pacote de upgrade for baixado automaticamente para o {% data variables.product.product_location %}, você receberá uma mensagem informando que pode fazer o upgrade do {% data variables.product.prodname_ghe_server %}. Os pacotes são baixados no diretório `/var/lib/ghe-updates` do {% data variables.product.product_location %}. Para obter mais informações, confira "[Como atualizar o {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server)".

Se um patch dinâmico estiver disponível para um upgrade, o `.hpkg` será baixado automaticamente. No console de gerenciamento, você pode instalar o hotpatch imediatamente ou agendar a instalação para outro período. Para obter mais informações, confira "[Como fazer upgrade com um patch dinâmico](/enterprise/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch)".

{% tip %}

**Dica:** para habilitar as verificações de atualização automática, o {% data variables.product.product_location %} precisa conseguir se conectar a `https://github-enterprise.s3.amazonaws.com`.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. Clique em **Sim, verificar automaticamente se há atualizações**.
![Botão usado para habilitar atualizações as automáticas](/assets/images/enterprise/management-console/enable_updates_button.png) {% data reusables.enterprise_management_console.save-settings %}

Para ver se a sua instância está atualizada, verifique o banner na guia Updates (Atualizações).

![Banner indicativo da versão do GitHub Enterprise Server](/assets/images/enterprise/management-console/up-to-date-banner.png)

Em **Logs**, você pode ver o status da verificação de atualização mais recente.

![Logs para atualização](/assets/images/enterprise/management-console/update-log.png)
