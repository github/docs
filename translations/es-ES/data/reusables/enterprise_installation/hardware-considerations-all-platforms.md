- [Requisitos mínimos](#minimum-requirements)
- [Almacenamiento](#storage)
- [CPU y memoria](#cpu-and-memory)

### Requisitos mínimos

Te recomendamos utilizar configuraciones de hardware diferentes dependiendo de la cantidad de licencias de usuario que tengas para {% data variables.product.product_location %}. Si aprovisionaste más recursos que los de los requisitos mínimos, tu instancia funcionrá y escalará mejor.

{% data reusables.enterprise_installation.hardware-rec-table %}

### Almacenamiento

Recomendamos un SSD de alto rendimiento con operaciones de altas de entrada/salida por segundo (IOPS) y latencia baja para {% data variables.product.prodname_ghe_server %}. Las cargas de trabajo son intensivas para las I/O. Si utilizas un hipervisor de metal puro, te recomendamos adjuntar directamente el disco o utilizar un disco de una red de área de almacenamiento (SAN).

Tu instancia requiere un disco de datos persistentes independiente del disco raíz. Para obtener más información, consulta "[Resumen del sistema](/enterprise/admin/guides/installation/system-overview)".

{% ifversion ghes %}

Para configurar las {% data variables.product.prodname_actions %}, debes proporcionar un almacenamiento de blobs externos. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements)".

{% endif %}

El espacio disponible en el sistema de archivos raíz será de 50% del tamaño total en disco. Puedes redimensionar el disco raíz de tu instancia si creas una instancia nueva o si utilizas una instancia existente. Para obtener más información, consulta las secciones "[Resumen del sistema](/enterprise/admin/guides/installation/system-overview#storage-architecture)" y "[Incrementar la capacidad de almacenamiento](/enterprise/admin/guides/installation/increasing-storage-capacity)".

### CPU y memoria

Los recursos de memoria y CPU que {% data variables.product.prodname_ghe_server %} requiere dependen de los niveles de actividad para los usuarios, automatizaciones e integraciones.

{% ifversion ghes %}

Si planeas habilitar las {% data variables.product.prodname_actions %} para los usuarios de tu instancia de {% data variables.product.prodname_ghe_server %}, podrías necesitar aprovisionar recursos de memoria y CPU adicionales para esta. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Advertencia:** te recomendamos que los usuarios configuren eventos de webhooks para notificar a los sistemas externos sobre la actividad en {% data variables.product.prodname_ghe_server %}. Las verificaciones automatizadas para los cambios, o el _sondeo_, impactará negativamente el rendimiento y la escalabilidad de tu instancia. Para obtener más información, consulta la sección "[Acerca de los webhooks](/github/extending-github/about-webhooks)".

{% endwarning %}

Para obtener más información acerca de cómo monitorear la capacidad y rendimiento de {% data variables.product.prodname_ghe_server %}, consulta la sección "[Monitorear tu aplicativo](/admin/enterprise-management/monitoring-your-appliance)".

Puedes incrementar los recursos de memoria o de CPU para tu instancia. Para obtener más información, consulta "[Aumentar los recursos de memoria o la CPU](/enterprise/admin/installation/increasing-cpu-or-memory-resources)."
