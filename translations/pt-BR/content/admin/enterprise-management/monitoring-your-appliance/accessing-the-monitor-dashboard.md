---
title: Acessar o painel de monitoramento
intro: 'O {% data variables.product.prodname_ghe_server %} inclui um painel de monitoramento baseado na web que exibe os dados de histórico do seu appliance do {% data variables.product.prodname_ghe_server %}, como uso de CPU e armazenamento, tempos de resposta de aplicativos e autenticação, e informações gerais sobre a integridade do sistema.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Access the monitor dashboard
ms.openlocfilehash: b529369813635a8cafe5f7c7ac6fc04af39001f5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332365'
---
## Acessar o painel de monitoramento

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Na parte superior da página, clique em **Monitoramento**.
![Link para o Painel de monitoramento](/assets/images/enterprise/management-console/monitor-dash-link.png)

## Resolver problemas comuns de alocação de recursos no appliance

{% note %}

**Observação**: fazer sondagens regularmente no {% data variables.product.product_location %} com integração contínua (CI) ou servidores de build poderá causar um ataque de negação de serviço e gerar problemas. Portanto, recomendamos o uso de webhooks para fazer push das atualizações. Para obter mais informações, confira "[Sobre os webhooks](/enterprise/user/articles/about-webhooks/)".

{% endnote %}

Use o painel de monitoramento para se manter a par da integridade dos recursos do seu appliance e decidir como corrigir os problemas de uso excessivo.  

| Problema | Possíveis causas | Recomendações |
| -------- | ----------------- | --------------- |
| Alto uso da CPU | Contenção da VM por outros serviços ou programas executados no mesmo host | Se possível, reconfigure outros serviços ou programas para usar menos recursos de CPU. Para aumentar o total de recursos de CPU para a VM, confira "[Como aumentar os recursos de CPU ou memória](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/)". |
| Alto uso da memória | Contenção da VM por outros serviços ou programas executados no mesmo host | Se possível, reconfigure outros serviços ou programas para usar menos memória. Para aumentar a memória total disponível na VM, confira "[Como aumentar os recursos de CPU ou memória](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/)". |
| Pouco espaço em disco | Consumo do espaço em disco por arquivos grandes binários ou de log | Se possível, hospede os arquivos binários grandes em outro servidor e compacte ou arquive os arquivos de log. Se necessário, aumente o espaço em disco na VM seguindo as etapas para sua plataforma em "[Aumentar a capacidade de armazenamento](/enterprise/admin/guides/installation/increasing-storage-capacity/)". |
| Tempos de resposta maiores do que o comum | Costuma ser causado por um dos problemas acima | Identifique e corrija os problema subjacentes. Se os tempos de resposta continuarem altos, entre em contato com o {% data variables.contact.contact_ent_support %}. |
| Altos índices de erro | Problemas de software  | Entre em contato com o {% data variables.contact.contact_ent_support %} e inclua seu pacote de suporte. Para obter mais informações, confira "[Como fornecer dados para o Suporte do {% data variables.product.prodname_enterprise %}](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)". |
