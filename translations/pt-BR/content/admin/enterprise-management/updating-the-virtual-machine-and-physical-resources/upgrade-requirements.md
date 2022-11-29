---
title: Requisitos de atualização
intro: 'Antes de atualizar o {% data variables.product.prodname_ghe_server %}, veja as recomendações e requisitos a seguir para planejar sua estratégia de atualização.'
redirect_from:
  - /enterprise/admin/installation/upgrade-requirements
  - /enterprise/admin/guides/installation/finding-the-current-github-enterprise-release
  - /enterprise/admin/enterprise-management/upgrade-requirements
  - /admin/enterprise-management/upgrade-requirements
  - /enterprise/admin/guides/installation/about-upgrade-requirements
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: 23ac63dd30c11f4c29cd17313a583579d2e2cea1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106874'
---
{% note %}

**Observações:**
- Os pacotes de upgrade estão disponíveis em [enterprise.github.com](https://enterprise.github.com/releases) para as versões compatíveis. Verifique a disponibilidade dos pacotes de atualização necessários para concluir a atualização. Se um pacote não estiver disponível, entre em contato com o {% data variables.contact.contact_ent_support %} para obter assistência.
- Se você estiver usando o Clustering do {% data variables.product.prodname_ghe_server %}, confira "[Como fazer upgrade de um cluster](/enterprise/admin/guides/clustering/upgrading-a-cluster/)" no Guia de Clustering do {% data variables.product.prodname_ghe_server %} para obter instruções específicas exclusivas sobre o clustering.
- As notas de versão do {% data variables.product.prodname_ghe_server %} mostram uma lista abrangente dos novos recursos de cada versão do {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira a [página de versões](https://enterprise.github.com/releases).

{% endnote %}

## Recomendações

- Inclua o mínimo possível de atualizações no seu processo. Por exemplo, em vez de atualizar do {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} para o {{ enterpriseServerReleases.supported[1] }} e depois para o {{ enterpriseServerReleases.latest }}, atualize do {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} para o {{ enterpriseServerReleases.latest }}. Use o [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para localizar o caminho de upgrade começando na sua versão atual.
- Se a versão estiver muito desatualizada, atualize a {% data variables.location.product_location %} para a versão mais atual possível a cada etapa do processo de atualização. Ao usar a versão mais recente em cada atualização, você pode aproveitar as melhorias de desempenho e as correções de erros. Por exemplo, você poderia atualizar do {% data variables.product.prodname_enterprise %} 2.7 para o 2.8 e depois para o 2.10. No entanto, atualizar do {% data variables.product.prodname_enterprise %} 2.7 para o 2.9 e depois para o 2.10 usa uma versão mais recente na segunda etapa.
- Ao atualizar, use a versão mais recente do patch. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}
- Use uma instância de preparo para testar as etapas da atualização. Para obter mais informações, confira "[Como configurar uma instância de preparo](/enterprise/admin/guides/installation/setting-up-a-staging-instance/)".
- Ao executar várias atualizações, espere pelo menos 24 horas entre atualizações de recursos para permitir que as migrações de dados e as tarefas de atualização executadas em segundo plano sejam totalmente concluídas.
- Tire um instantâneo antes de atualizar sua máquina virtual. Para obter mais informações, confira "[Como criar um instantâneo](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#taking-a-snapshot)". 
- Certifique-se de ter um backup recente e da sua instância. Para obter mais informações, confira o [arquivo LEIAME.md do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

## Requisitos

- Você precisa fazer upgrade de uma versão de recurso que esteja **no máximo** duas versões atrás. Por exemplo, ao atualizar para o {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.latest }}, você deve estar nas versões {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[1] }} ou {{ enterpriseServerReleases.supported[2] }}.
- Ao fazer a atualização com um pacote de atualização, agende um período de manutenção para usuários finais de {% data variables.product.prodname_ghe_server %}.
- {% data reusables.enterprise_installation.hotpatching-explanation %}
- Um hotpatch pode causar tempo de inatividade se os serviços afetados (como kernel, MySQL ou Elasticsearch) exigirem reinicialização da VM ou do serviço. Você receberá uma notificação quando/se a reinicialização for necessária. Será possível reinicializar em outro momento.
- Procure disponibilizar um armazenamento adicional na raiz durante a atualização, já que o hotpatching instala várias versões de alguns serviços até a conclusão da atualização. Caso não haja espaço suficiente, você receberá uma notificação das verificações preliminares.
- Ao atualizar pelo hotpatching, sua instância não pode ficar carregada demais (isso pode afetar o processo).
- A atualização do {% data variables.product.prodname_ghe_server %} 2.17 migra seus logs de auditoria do Elasticsearch para o MySQL. Além disso, essa migração aumenta a quantidade de tempo e espaço em disco necessários para restaurar um instantâneo. Antes de migrar, verifique o número de bytes nos índices de log de auditoria do Elasticsearch com este comando:
``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```
Use o número para estimar o espaço em disco necessário para os logs de auditoria do MySQL. O script também monitora seu espaço livre em disco durante o andamento da importação. Monitorar esse número é útil principalmente se o espaço livre em disco estiver próximo da quantidade de espaço em disco necessária para a migração.

## Próximas etapas

Após ler essas recomendações e requisitos, você poderá atualizar para o {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira "[Como atualizar o {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)".
