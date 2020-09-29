---
title: Requisitos de atualização
intro: 'Antes de atualizar o {% data variables.product.prodname_ghe_server %}, veja as recomendações e requisitos a seguir para planejar sua estratégia de atualização.'
redirect_from:
  - /enterprise/admin/installation/upgrade-requirements
  - /enterprise/admin/guides/installation/finding-the-current-github-enterprise-release/
  - /enterprise/admin/enterprise-management/upgrade-requirements
versions:
  enterprise-server: '*'
---

{% note %}

**Notas:**
- Para atualizar do {% data variables.product.prodname_enterprise %} 11.10.348 até o {% data variables.product.current-340-version %}, você deve migrar para o {% data variables.product.prodname_enterprise %} 2.1.23. Para obter mais informações, consulte "[Migrar do {% data variables.product.prodname_enterprise %} 11.10.x para o 2.1.23](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23)".
- Nas versões com suporte, há pacotes de atualização disponíveis em [enterprise.github.com](https://enterprise.github.com/releases). Verifique a disponibilidade dos pacotes de atualização necessários para concluir a atualização. Se um pacote não estiver disponível, entre em contato com o {% data variables.contact.contact_ent_support %} para obter assistência.
- Se estiver usando o clustering do {% data variables.product.prodname_ghe_server %}, consulte "[Atualizar cluster](/enterprise/{{ currentVersion }}/admin/guides/clustering/upgrading-a-cluster/)" no guia de clustering do {% data variables.product.prodname_ghe_server %} para obter instruções específicas.
-   As notas de versão do {% data variables.product.prodname_ghe_server %} mostram uma lista abrangente dos novos recursos de cada versão do {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte a [página de versões](https://enterprise.github.com/releases).

{% endnote %}

### Recomendações

- Inclua o mínimo possível de atualizações no seu processo. Por exemplo, em vez de atualizar do {% data variables.product.prodname_enterprise %} {{ enterpriseVersions.supported[2] }} para o {{ enterpriseVersions.supported[1] }} e depois para o {{ enterpriseVersions.latest }}, atualize do {% data variables.product.prodname_enterprise %} {{ enterpriseVersions.supported[2] }} para o {{ enterpriseVersions.latest }}.
- Se a sua versão estiver muito defasada, atualize a {% data variables.product.product_location_enterprise %} para a versão mais atual disponível a cada etapa do processo. Ao usar a versão mais recente em cada atualização, você pode aproveitar as melhorias de desempenho e as correções de erros. Por exemplo, você poderia atualizar do {% data variables.product.prodname_enterprise %} 2.7 para o 2.8 e depois para o 2.10. No entanto, atualizar do {% data variables.product.prodname_enterprise %} 2.7 para o 2.9 e depois para o 2.10 usa uma versão mais recente na segunda etapa.
- Ao atualizar, use a versão mais recente do patch. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}
- Use uma instância de preparo para testar as etapas da atualização. Para obter mais informações, consulte "[Configurar instância de preparo](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-staging-instance/)".
- Ao fazer várias atualizações, aguarde pelo menos 24 horas entre cada atualização de recursos para permitir a conclusão total das migrações de dados e das tarefas em segundo plano.

### Requisitos

- Você deve atualizar quando a versão do recurso estiver defasada por **no máximo** duas versões. Por exemplo, ao atualizar para o {% data variables.product.prodname_enterprise %} {{ enterpriseVersions.latest }}, você deve estar nas versões {% data variables.product.prodname_enterprise %} {{ enterpriseVersions.supported[1] }} ou {{ enterpriseVersions.supported[2] }}.
- {% data reusables.enterprise_installation.hotpatching-explanation %}
- Um hotpatch pode causar tempo de inatividade se os serviços afetados (como kernel, MySQL ou Elasticsearch) exigirem reinicialização da VM ou do serviço. Você receberá uma notificação quando/se a reinicialização for necessária. Será possível reinicializar em outro momento.
- Procure disponibilizar um armazenamento adicional na raiz durante a atualização, já que o hotpatching instala várias versões de alguns serviços até a conclusão da atualização. Caso não haja espaço suficiente, você receberá uma notificação das verificações preliminares.
- Ao atualizar pelo hotpatching, sua instância não pode ficar carregada demais (isso pode afetar o processo). As verificações preliminares avaliarão se a média de carga e a atualização irão falhar se a média de carga for muito alta. - Atualizar para {% data variables.product.prodname_ghe_server %} 2.17 migra seus logs de auditoria do Elasticsearch para MySQL. Além disso, essa migração aumenta a quantidade de tempo e espaço em disco necessários para restaurar um instantâneo. Antes de migrar, verifique o número de bytes nos índices de log de auditoria do Elasticsearch com este comando:
``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```
Use o número para estimar o espaço em disco necessário para os logs de auditoria do MySQL. O script também monitora seu espaço livre em disco durante o andamento da importação. Monitorar esse número é útil principalmente se o espaço livre em disco estiver próximo da quantidade de espaço em disco necessária para a migração.

Após ler essas recomendações e requisitos, você poderá atualizar para o {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Atualizar o {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)".
