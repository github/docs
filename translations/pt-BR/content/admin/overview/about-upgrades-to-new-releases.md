---
title: Sobre atualizações para novas versões
shortTitle: About upgrades
intro: '{% ifversion ghae %}A sua empresa em {% data variables.product.product_name %} é atualizada com as últimas funcionalidades e correções de erros regularmente por {% data variables.product.company_short %}.{% else %}Você pode beneficiar-se de novas funcionalidades e correções de erros para {% data variables.product.product_name %} atualizando a sua empresa para uma versão recém-lançada.{% endif %}'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: b3a2d340ef73ffe92f2117caf38a84e76ba0c8d1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107785'
---
{% data reusables.enterprise.constantly-improving %}{% ifversion ghae %}{% data variables.product.prodname_ghe_managed %} é um serviço totalmente gerenciado, portanto o {% data variables.product.company_short %} conclui o processo de atualização para sua empresa.{% endif %}

As versões do recurso incluem novas funcionalidades e atualizações de recursos e, normalmente, ocorrem a cada trimestre. {% ifversion ghae %}{% data variables.product.company_short %} irá atualizar sua empresa para a versão mais recente do recurso. Você será avisado antecipadamente de qualquer período de inatividade planejado para sua empresa.{% endif %}

{% ifversion ghes %}

Começando com {% data variables.product.prodname_ghe_server %} 3.0, todas as versões de recurso começam com pelo menos um candidato de versão. Os candidatos de verão são as versões de recurso, com um conjunto completo de recursos. Pode haver erros ou problemas em um candidato de versão que só podem ser encontrados por meio do feedback de clientes que usam {% data variables.product.product_name %}. 

Você pode ter acesso rápido às últimas funcionalidades testando um candidato de versão assim que este estiver disponível. Você pode atualizar para um candidato de versão a partir de uma versão compatível e pode atualizar do candidato de versão para versões posteriores quando lançado. Você deve atualizar qualquer ambiente executando um candidato de versão assim que a versão estiver geralmente disponível. Para obter mais informações, confira "[Atualizar requisitos](/admin/enterprise-management/upgrade-requirements)".

Os candidatos de versão devem ser implantados em ambientes de teste ou de preparação. Ao testar um candidato de versão, entre em contato com o suporte. Para obter mais informações, confira "[Sobre o {% data variables.contact.github_support %}](/admin/enterprise-support)".

Usaremos seus comentários para aplicar correções de erros e quaisquer outras alterações necessárias para criar uma versão de produção estável. Cada novo candidato de versão adiciona correções de erros para problemas encontrados em versões anteriores. Quando a versão estiver pronta para ser utilizada amplamente, {% data variables.product.company_short %} irá publicar uma versão de produção estável.

{% endif %}

{% warning %}

**Aviso**: o upgrade para uma nova versão de recurso implicará algumas horas de inatividade, durante as quais nenhum dos usuários poderá usar a empresa. Você pode informar aos seus usuários sobre tempo de inatividade, publicando um banner de anúncio global, usando as configurações da sua empresa ou a API REST. Para obter mais informações, confira "[Como personalizar mensagens de usuário na sua instância](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)" e "[Administração do {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements)".

{% endwarning %}

{% ifversion ghes %}

Versões de Patch, que consistem apenas de patches e correções de erros acontecem com mais frequência. De modo geral, as versões de patch ficam disponíveis quando são lançadas pela primeira vez, sem candidatos de versões. Atualizar para uma versão de patch normalmente requer menos de cinco minutos de tempo de inatividade.

Para fazer upgrade da sua empresa para uma nova versão, confira "[Notas sobre a versão](/enterprise-server/admin/release-notes)" e "[Como fazer upgrade do {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)". Como você só pode fazer upgrade de uma versão de recurso que está, no máximo, duas versões atrás, use o [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para encontrar o caminho de upgrade começando na sua versão atual.

{% endif %}

## Leitura adicional

- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) no repositório `github/roadmap` {% ifversion ghae %}
- [ Notas sobre a versão do {% data variables.product.prodname_ghe_managed %}](/admin/release-notes) {% endif %}
