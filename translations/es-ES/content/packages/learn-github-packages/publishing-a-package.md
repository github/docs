---
title: Publicar un paquete
intro: 'Puedes publicar un paquete en {% data variables.product.prodname_registry %} para que el paquete esté disponible para que otros lo descarguen y lo vuelvan a utilizar.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Anyone with write permissions for a repository can publish a package to that repository.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### Acerca de los paquetes publicados

Puedes ayudar a la gente a entender y usar tu paquete proporcionando una descripción y otros detalles como instrucciones de instalación y uso en la página del paquete. GitHub proporciona metadatos para cada versión, como la fecha de publicación, la actividad de descarga y las versiones recientes. Para obtener una página de paquete de ejemplo, consulta [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1).

{% data reusables.package_registry.public-or-private-packages %} Un repositorio puede conectarse a más de un paquete. Para evitar confusiones, asegúrate de que el archivo README y la descripción proporcionen información clara de cada paquete.

{% if currentVersion == "free-pro-team@latest" %}
Si una versión nueva de un paquete soluciona una vulnerabilidad de seguridad, deberás publicar una asesoría de seguridad en tu repositorio.
{% data variables.product.prodname_dotcom %} revisa cada asesoría de seguridad que se publica y podría utilizarla para enviar {% data variables.product.prodname_dependabot_alerts %} a los repositorios afectados. Para obtener más información, consulta la sección "[Acerca de las Asesorías de Seguridad de GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories)".
{% endif %}

### Publicar un paquete

Puedes publicar un paquete en el {% data variables.product.prodname_registry %} utilizando cualquier {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}cliente de paquetes compatible{% else %} tipo de paquete habilitado para tu instancia{% endif %} si sigues los mismos lineamientos generales.

1. Crea o usa un token de acceso existente con los ámbitos adecuados para la tarea que deseas realizar. Para obtener más información, consulta la sección "[Acerca de los permisos para el {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)".
2. Autentícate en {% data variables.product.prodname_registry %} mediante tu token de acceso y las instrucciones para tu cliente del paquete.
3. Publica el paquete siguiendo las instrucciones para el cliente de tu paquete.

Para obtener instrucciones específicas de tu cliente de paquetes, consulta la sección "[Trabajar con un registro de Paquetes de GitHub](/packages/working-with-a-github-packages-registry)".

Después de que publiques un paquete, puedes verlo en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Visualizar paquetes](/packages/learn-github-packages/viewing-packages)".
