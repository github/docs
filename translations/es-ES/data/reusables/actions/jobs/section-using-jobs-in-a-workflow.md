A workflow run is made up of one or more `jobs`, which run in parallel by default. Para ejecutar trabajos de manera secuencial, puedes definir dependencias en otros trabajos utilizando la palabra clave `jobs.<job_id>.needs`.

Cada job se ejecuta en un ambiente ejecutor que especifica `runs-on`.

Puedes ejecutar una cantidad ilimitada de trabajos siempre que estés dentro de los límites de uso del flujo de trabajo. Para obtener más información, consulta las secciones {% ifversion fpt or ghec or ghes %}"[Límites de uso y facturación](/actions/reference/usage-limits-billing-and-administration)" para los ejecutores hospedados en {% data variables.product.prodname_dotcom %} y {% endif %}"[Acerca de los ejecutores auto hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" para los límites de uso de los ejecutores auto-hospedados.{% elsif ghae %}".{% endif %}

Si necesitas encontrar el identificador único de un job que se ejecuta en una ejecución de flujo de trabajo, puedes utilizar la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. Para obtener más información, consulta la sección "[Jobs de los Flujos de Trabajo](/rest/reference/actions#workflow-jobs)".
