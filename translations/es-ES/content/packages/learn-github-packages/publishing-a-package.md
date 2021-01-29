---
title: Publicar un paquete
intro: 'Puedes publicar un paquete en {% data variables.product.prodname_registry %} para que el paquete esté disponible para que otros lo descarguen y lo vuelvan a utilizar.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Cualquier persona con permisos de escritura para un repositorio puede publicar un paquete en ese repositorio.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Acerca de los paquetes publicados

Puedes ayudar a la gente a entender y usar tu paquete proporcionando una descripción y otros detalles como instrucciones de instalación y uso en la página del paquete. GitHub proporciona metadatos para cada versión, como la fecha de publicación, la actividad de descarga y las versiones recientes. Para obtener una página de paquete de ejemplo, consulta [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1).

{% data reusables.package_registry.public-or-private-packages %} Un repositorio puede contener más de un paquete. Para evitar confusiones, asegúrate de que el archivo README y la descripción proporcionen información clara de cada paquete.

{% if currentVersion == "free-pro-team@latest" %}
Si una versión nueva de un paquete soluciona una vulnerabilidad de seguridad, deberás publicar una asesoría de seguridad en tu repositorio.
{% data variables.product.prodname_dotcom %} revisa cada asesoría de seguridad que se publica y podría utilizarla para enviar {% data variables.product.prodname_dependabot_alerts %} a los repositorios afectados. Para obtener más información, consulta la sección "[Acerca de las Asesorías de Seguridad de GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories)".
{% endif %}

### Publicar un paquete

Puedes publicar un paquete en el {% data variables.product.prodname_registry %} si utilizas cualquier {% if currentVersion == "free-pro-team@latest" %}cliente de paquete compatible{% else %}tipo de paquete habilitado para tu instancia{% endif %} si sigues los mismos lineamientos generales.

1. Crea o usa un token de acceso existente con los ámbitos adecuados para la tarea que deseas realizar. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)".
2. Autentícate en {% data variables.product.prodname_registry %} mediante tu token de acceso y las instrucciones para tu cliente del paquete.
3. Publica el paquete siguiendo las instrucciones para el cliente de tu paquete.

Para obtener instrucciones específicas para tu cliente de paquete, consulta "[Usar {% data variables.product.prodname_registry %} con el ecosistema de tu proyecto](/packages/using-github-packages-with-your-projects-ecosystem)".

Después de que publiques un paquete, puedes verlo en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Ver paquetes](/packages/publishing-and-managing-packages/viewing-packages)."
