- [Requisitos mínimos](#minimum-requirements){% if currentVersion == "enterprise-server@2.22" %}
- [Funcionalidades de beta em {% data variables.product.prodname_ghe_server %} 2.22](#beta-features-in-github-enterprise-server-222){% endif %}
- [Armazenamento](#storage)
- [CPU e memória](#cpu-and-memory)

#### Requisitos mínimos

Recomendamos diferentes configurações de hardware, dependendo do número de licenças de usuário para {% data variables.product.product_location %}. Se você fornecer mais recursos do que os requisitos mínimos, sua instância terá um desempenho e uma escala melhores.

{% data reusables.enterprise_installation.hardware-rec-table %}

#### Armazenamento

Recomendamos um SSD de alto desempenho com operações de alta entrada/saída por segundo (IOPS) e baixa latência para {% data variables.product.prodname_ghe_server %}. Cargas de trabalho são intensivas em I/O. Se você usar um hipervisor de metal simples, recomendamos anexar diretamente o disco ou usar um disco a partir de uma rede de área de armazenamento (SAN).

A sua instância exige um disco de dados persistente separado do disco raiz. Para obter mais informações, consulte "[System overview](/enterprise/admin/guides/installation/system-overview)."

{% if currentVersion ver_gt "enterprise-server@2.21" %}

Para configurar{% if currentVersion == "enterprise-server@2.22" %} beta de{% endif %} {% data variables.product.prodname_actions %}, você deve fornecer armazenamento externo de blob. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".

{% endif %}

Você pode redimensionar o disco raiz da sua instância criando uma nova instância ou usando uma instância existente. Para obter mais informações, consulte "[Increasing storage capacity](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity)."

#### CPU e memória

Os recursos de CPU e memória que {% data variables.product.prodname_ghe_server %} exige dependem dos níveis de atividade para usuários, automações e integrações. {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data reusables.actions.enterprise-hardware-considerations %}{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Aviso:** Recomendamos que os usuários configurem eventos de webhook para notificar sistemas de atividade externos em {% data variables.product.prodname_ghe_server %}. Verificações automatizadas por alterações, ou _sondagem_, afetarão negativamente o desempenho e escalabilidade da sua instância. Para obter mais informações, consulte "[Sobre webhooks](/github/extending-github/about-webhooks)".

{% endwarning %}

Você pode aumentar os recursos de memória ou da CPU na sua instância. Para obter mais informações, consulte "[Increasing CPU or memory resources](/enterprise/admin/installation/increasing-cpu-or-memory-resources)."
