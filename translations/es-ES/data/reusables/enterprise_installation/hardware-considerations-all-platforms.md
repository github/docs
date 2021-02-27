- [Requisitos mínimos](#minimum-requirements){% if currentVersion == "enterprise-server@2.22" %}
- [Beta features in {% data variables.product.prodname_ghe_server %} 2.22](#beta-features-in-github-enterprise-server-222){% endif %}
- [Almacenamiento](#storage)
- [CPU y memoria](#cpu-and-memory)

#### Requisitos mínimos

Te recomendamos utilizar configuraciones de hardware diferentes dependiendo de la cantidad de licencias de usuario que tengas para {% data variables.product.product_location %}. Si aprovisionaste más recursos que los de los requisitos mínimos, tu instancia funcionrá y escalará mejor.

{% data reusables.enterprise_installation.hardware-rec-table %}

#### Almacenamiento

Recomendamos un SSD de alto rendimiento con operaciones de altas de entrada/salida por segundo (IOPS) y latencia baja para {% data variables.product.prodname_ghe_server %}. Las cargas de trabajo son intensivas para las I/O. Si utilizas un hipervisor de metal puro, te recomendamos adjuntar directamente el disco o utilizar un disco de una red de área de almacenamiento (SAN).

Tu instancia requiere un disco de datos persistentes independiente del disco raíz. Para obtener más información, consulta "[Resumen del sistema](/enterprise/admin/guides/installation/system-overview)".

{% if currentVersion ver_gt "enterprise-server@2.21" %}

To configure{% if currentVersion == "enterprise-server@2.22" %} the beta of{% endif %} {% data variables.product.prodname_actions %}, you must provide external blob storage. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".

{% endif %}

Puedes redimensionar el disco raíz de tu instancia si creas una instancia nueva o si utilizas una instancia existente. Para obtener más información, consulta la sección [Incrementar la capacidad de almacenamiento](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity)"

#### CPU y memoria

The CPU and memory resources that {% data variables.product.prodname_ghe_server %} requires depend on the levels of activity for users, automations, and integrations. {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data reusables.actions.enterprise-hardware-considerations %}{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Advertencia:** te recomendamos que los usuarios configuren eventos de webhooks para notificar a los sistemas externos sobre la actividad en {% data variables.product.prodname_ghe_server %}. Las verificaciones automatizadas para los cambios, o el _sondeo_, impactará negativamente el rendimiento y la escalabilidad de tu instancia. Para obtener más información, consulta la sección "[Acerca de los webhooks](/github/extending-github/about-webhooks)".

{% endwarning %}

Puedes incrementar los recursos de memoria o de CPU para tu instancia. Para obtener más información, consulta "[Aumentar los recursos de memoria o la CPU](/enterprise/admin/installation/increasing-cpu-or-memory-resources)."
