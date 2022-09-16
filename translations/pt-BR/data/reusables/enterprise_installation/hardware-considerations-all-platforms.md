---
ms.openlocfilehash: 7de065c9dec15e3b92cabf5d3fa711c7d88249ba
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882784"
---
- [Requisitos mínimos](#minimum-requirements)
- [Storage](#storage)
- [CPU e memória](#cpu-and-memory)

### Requisitos mínimos

Recomendamos diferentes configurações de hardware dependendo do número de licenças de usuário do {% data variables.product.product_location %}. Se você fornecer mais recursos do que os requisitos mínimos, sua instância terá um desempenho e uma escala melhores.

{% data reusables.enterprise_installation.hardware-rec-table %}

{% data reusables.actions.more-resources-for-ghes %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

### Armazenamento

Recomendamos um SSD de alto desempenho com operações de alta entrada/saída por segundo (IOPS) e baixa latência para {% data variables.product.prodname_ghe_server %}. Cargas de trabalho são intensivas em I/O. Se você usar um hipervisor de metal simples, recomendamos anexar diretamente o disco ou usar um disco a partir de uma rede de área de armazenamento (SAN).

A sua instância exige um disco de dados persistente separado do disco raiz. Para obter mais informações, confira "[ Visão geral do sistema](/enterprise/admin/guides/installation/system-overview)".

{% ifversion ghes %}

Para configurar o {% data variables.product.prodname_actions %}, você precisa fornecer um armazenamento de blobs externo. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements)".

{% endif %}

O espaço disponível no sistema de arquivos raiz será 50% do tamanho total do disco. Você pode redimensionar o disco raiz da sua instância criando uma nova instância ou usando uma instância existente. Para obter mais informações, confira "[Visão geral do sistema](/enterprise/admin/guides/installation/system-overview#storage-architecture)" e "[Como aumentar a capacidade de armazenamento](/enterprise/admin/guides/installation/increasing-storage-capacity)".

### CPU e memória

Os recursos de CPU e memória que {% data variables.product.prodname_ghe_server %} exige dependem dos níveis de atividade para usuários, automações e integrações.

{% ifversion ghes %}

Se você pretende habilitar o {% data variables.product.prodname_actions %} para os usuários da sua instância do {% data variables.product.prodname_ghe_server %}, talvez seja necessário provisionar recursos adicionais de CPU e memória para a instância. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Aviso:** recomendamos que os usuários configurem eventos de webhook para notificar os sistemas externos da atividade no {% data variables.product.prodname_ghe_server %}. As verificações automatizadas de alterações, ou _sondagem_, afetarão negativamente o desempenho e a escalabilidade da instância. Para obter mais informações, confira "[Sobre os webhooks](/github/extending-github/about-webhooks)".

{% endwarning %}

Para obter mais informações sobre como monitorar a capacidade e o desempenho do {% data variables.product.prodname_ghe_server %}, confira "[Como monitorar seu dispositivo](/admin/enterprise-management/monitoring-your-appliance)".

Você pode aumentar os recursos de memória ou da CPU na sua instância. Para obter mais informações, confira "[Como aumentar os recursos de CPU ou de memória](/enterprise/admin/installation/increasing-cpu-or-memory-resources)".
