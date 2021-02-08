- [Minimum requirements](#minimum-requirements){% if currentVersion == "enterprise-server@2.22" %}
- [Beta features in {% data variables.product.prodname_ghe_server %} 2.22](#beta-features-in-github-enterprise-server-222){% endif %}{% if currentVersion ver_gt "enterprise-server@2.22" %}
- [Optional features](#optional-features){% endif %}
- [Armazenamento](#storage)
- [CPU e memória](#cpu-and-memory)

#### Requisitos mínimos

Recomendamos diferentes configurações de hardware, dependendo do número de licenças de usuário para {% data variables.product.product_location %}. Se você fornecer mais recursos do que os requisitos mínimos, sua instância terá um desempenho e uma escala melhores.

{% data reusables.enterprise_installation.hardware-rec-table %}{% if currentVersion ver_gt "enterprise-server@2.21" %} If you enable {% if currentVersion == "enterprise-server@2.22" %}the beta for {% endif %}{% data variables.product.prodname_actions %}, review the following requirements and recommendations.

- Você deve configurar pelo menos um executor para fluxos de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)."
- Você deve configurar o armazenamento externo do blob. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".
- You may need to configure additional CPU and memory resources. The additional resources you need to provision for {% data variables.product.prodname_actions %} depend on the number of workflows your users run concurrently, and the overall levels of activity for users, automations, and integrations.

    | Máximo de trabalhos por minuto | Additional vCPUs | Additional memory |
    |:------------------------------ | ----------------:| -----------------:|
    | Testes rápidos                 |                4 |           30.5 GB |
    | 25                             |                8 |             61 GB |
    | 35                             |               16 |            122 GB |
    | 100                            |               32 |            244 GB |

{% endif %}

#### Armazenamento

Recomendamos um SSD de alto desempenho com operações de alta entrada/saída por segundo (IOPS) e baixa latência para {% data variables.product.prodname_ghe_server %}. Cargas de trabalho são intensivas em I/O. Se você usar um hipervisor de metal simples, recomendamos anexar diretamente o disco ou usar um disco a partir de uma rede de área de armazenamento (SAN).

A sua instância exige um disco de dados persistente separado do disco raiz. Para obter mais informações, consulte "[System overview](/enterprise/admin/guides/installation/system-overview)."

{% if currentVersion ver_gt "enterprise-server@2.21" %}

If you enable{% if currentVersion == "enterprise-server@2.22" %} the beta of{% endif %} {% data variables.product.prodname_actions %}, you'll need to configure external blob storage. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".

{% endif %}

Você pode redimensionar o disco raiz da sua instância criando uma nova instância ou usando uma instância existente. Para obter mais informações, consulte "[Increasing storage capacity](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity)."

#### CPU e memória

O {% data variables.product.prodname_ghe_server %} exige mais recursos de CPU e memória, dependendo dos níveis de atividade para usuários, automações e integrações.

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Aviso:** Recomendamos que os usuários configurem eventos de webhook para notificar sistemas de atividade externos em {% data variables.product.prodname_ghe_server %}. Verificações automatizadas por alterações, ou _sondagem_, afetarão negativamente o desempenho e escalabilidade da sua instância. Para obter mais informações, consulte "[Sobre webhooks](/github/extending-github/about-webhooks)".

{% endwarning %}

Você pode aumentar os recursos de memória ou da CPU na sua instância. Para obter mais informações, consulte "[Increasing CPU or memory resources](/enterprise/admin/installation/increasing-cpu-or-memory-resources)."
