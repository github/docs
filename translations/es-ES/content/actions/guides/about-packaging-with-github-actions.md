---
title: Acerca del empaquetado con acciones de GitHub
intro: 'Puedes configurar flujos de trabajo en {% data variables.product.prodname_actions %} para generar paquetes y cargarlos en {% data variables.product.prodname_registry %} u otro proveedor de alojamiento del paquete.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-packaging-with-github-actions
  - /actions/publishing-packages-with-github-actions/about-packaging-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: overview
topics:
  - Embalaje
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de los pasos de empaquetado

Un paso de empaquetado es una parte común de un flujo de trabajo de integración continua o entrega continua. Después de construir y probar tu aplicación, se produce un artefacto ejecutable o desplegable en la forma de un paquete. Por ejemplo, un flujo de trabajo de integración continua para un proyecto Java puede ejecutar `mvn package` para generar un archivo JAR. O un flujo de trabajo de CI para una aplicación Node.js puede crear un contenedor Docker.

Según el tipo de aplicación que estás construyendo, este paquete se puede descargar de forma local para pruebas manuales, disponible para que los usuarios los descarguen o se implementen en un entorno de ensayo o producción.

### Empaquetado en flujos de trabajo de integración continua

Crear un paquete al final de un flujo de trabajo de integración continua puede ayudar durante las revisiones de código en una solicitud de extracción. Después de construir y probar tu código, un paso de empaquetado puede generar un artefacto ejecutable o desplegable. Luego, tu flujo de trabajo puede tomar ese artefacto y cargarlo como parte del flujo de trabajo.

Ahora, cuando revises una solicitud de extracción, podrás ver la ejecución del flujo de trabajo y descargar el artefacto que se produjo.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
![Menú desplegable Download artifact (Descargar artefacto)](/assets/images/help/repository/artifact-drop-down-updated.png)
{% else %}
![Menú desplegable Download artifact (Descargar artefacto)](/assets/images/help/repository/artifact-drop-down.png)
{% endif %}

Esto te permitirá ejecutar el código en la solicitud de extracción en tu máquina, lo que puede ayudar con la depuración o la prueba de la solicitud de extracción.

### Flujos de trabajo para publicar paquetes

Además de cargar artefactos de empaquetado para las pruebas en un flujo de trabajo de integración continua, puedes crear flujos de trabajo que construyan tu proyecto y publiquen paquetes en un registro de paquete.

* **Publicar paquetes en el {% data variables.product.prodname_registry %}**
  El {% data variables.product.prodname_registry %} puede actuar como un servicio de hospedaje para paquetes para varios tipos de éstos. Puedes elegir compartir tus paquetes con todos los {% data variables.product.prodname_dotcom %}, o paquetes privados para compartir con los colaboradores o una organización. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/about-github-packages)".

  Es posible que desees publicar paquetes para el {% data variables.product.prodname_registry %} en cada subida a la rama predeterminada. Esto permitirá que los programadores en tu proyecto siempre puedan ejecutar y probar la última construcción fuera del principal fácilmente, instalándolo desde {% data variables.product.prodname_registry %}.

* **Publicar paquetes en un registro de paquetes**  
  Para muchos proyectos, publicar en un registro de paquete se realiza cada vez que se lanza una nueva versión de un proyecto. Por ejemplo, un proyecto que produce un archivo JAR puede cargar nuevos lanzamientos en el repositorio central de Maven. O bien, un proyecto de .NET puede generar un paquete NuGet y cargarlo en la galería de NuGet.

  Puedes automatizar esto creando un flujo de trabajo que publique paquetes en un registro de paquetes en cada creación de lanzamiento. Para obtener más información, consulta "[Crear lanzamientos](/github/administering-a-repository/creating-releases)."

### Leer más

- "[Publicar paquetes Node.js](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)"
