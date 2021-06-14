---
title: Instalar un paquete
intro: 'Puedes instalar un paquete desde {% data variables.product.prodname_registry %} y usar el paquete como dependencia en tu propio proyecto.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
  - /packages/manage-packages/installing-a-package
permissions: You can install any package that you have permission to view.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### Acerca de la instalación del paquete

Puedes buscar {% data variables.product.product_name %} para encontrar los paquetes en {% data variables.product.prodname_registry %} que puedes instalar en tu propio proyecto. Para obtener más información, consulta "[Buscar {% data variables.product.prodname_registry %} para paquetes](/github/searching-for-information-on-github/searching-for-packages)".

Una vez que encuentres un paquete, puedes leer las instrucciones de la descripción y la instalación y el uso del paquete en la página del paquete.

### Instalar un paquete

Puedes instalar un paquete desde el {% data variables.product.prodname_registry %} utilizando cualquier {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %} cliente de paquetes compatible{% else %} tipo de paquete habilitado para tu instancia{% endif %} si sigues los mismos lineamientos generales.

1. Autenticar para {% data variables.product.prodname_registry %} usando las instrucciones para tu cliente de paquete. Para obtener más información, consulta la sección "[Autenticarse en los Paquetes de GitHub](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)".
2. Instala el paquete usando las instrucciones para tu cliente de paquete.

Para obtener instrucciones específicas para tu cliente de paquetes, consulta la sección "[Trabajar con un registro del {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)".
