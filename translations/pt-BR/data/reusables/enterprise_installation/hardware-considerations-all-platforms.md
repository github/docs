- [Requisitos mínimos](#minimum-requirements)
- [Armazenamento](#storage)
- [CPU e memória](#cpu-and-memory)

#### Requisitos mínimos

Recomendamos diferentes configurações de hardware, dependendo do número de licenças de usuário para {% data variables.product.product_location_enterprise %}. Se você fornecer mais recursos do que os requisitos mínimos, sua instância terá um desempenho e uma escala melhores.

{% data reusables.enterprise_installation.hardware-rec-table %} Para obter mais informações sobre o ajuste de recursos para uma instância existente, consulte "[aumentar a capacidade de armazenamento](/enterprise/admin/installation/increasing-storage-capacity)" e "[aumentar recursos de CPU ou memória](/enterprise/admin/installation/increasing-cpu-or-memory-resources)".

{% if currentVersion == "enterprise-server@2.22" %}

Se você habilitar o beta para {% data variables.product.prodname_actions %} na sua instância, recomendamos que você planeje uma capacidade adicional.

- Você deve configurar pelo menos um executor para fluxos de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)."
- Você deve configurar o armazenamento externo do blob. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_actions %} e configurar o armazenamento](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)".

Os recursos adicionais de CPU e memória que você precisa fornecer para a sua instância dependem do número de fluxos de trabalho que os seus usuários executam simultaneamente e dos níveis gerais de atividade para usuários, automações, e integrações.

| Máximo de trabalhos por minuto | vCPUs | Memória |
|:------------------------------ | -----:| -------:|
| Testes rápidos                 |     4 | 30.5 GB |
| 25                             |     8 |   61 GB |
| 35                             |    16 |  122 GB |
| 100                            |    32 |  244 GB |

{% endif %}

#### Armazenamento

Recomendamos um SSD de alto desempenho com operações de alta entrada/saída por segundo (IOPS) e baixa latência para {% data variables.product.prodname_ghe_server %}. Cargas de trabalho são intensivas em I/O. Se você usar um hipervisor de metal simples, recomendamos anexar diretamente o disco ou usar um disco a partir de uma rede de área de armazenamento (SAN).

A sua instância exige um disco de dados persistente separado do disco raiz. Para obter mais informações, consulte "[System overview](/enterprise/admin/guides/installation/system-overview)."

{% if currentVersion ver_gt "enterprise-server@2.21" %}

Se você habilitar o beta de {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} 2.22, você precisará configurar o armazenamento externo do blob. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_actions %} e configurar o armazenamento](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)".

{% endif %}

Você pode redimensionar o disco raiz da sua instância criando uma nova instância ou usando uma instância existente. Para obter mais informações, consulte "[Increasing storage capacity](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity)."

#### CPU e memória

O {% data variables.product.prodname_ghe_server %} exige mais recursos de CPU e memória, dependendo dos níveis de atividade para usuários, automações e integrações.

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Aviso:** Recomendamos que os usuários configurem eventos de webhook para notificar sistemas de atividade externos em {% data variables.product.prodname_ghe_server %}. Verificações automatizadas por alterações, ou _sondagem_, afetarão negativamente o desempenho e escalabilidade da sua instância. Para obter mais informações, consulte "[Sobre webhooks](/github/extending-github/about-webhooks)".

{% endwarning %}

Você pode aumentar os recursos de memória ou da CPU na sua instância. Para obter mais informações, consulte "[Increasing CPU or memory resources](/enterprise/admin/installation/increasing-cpu-or-memory-resources).
