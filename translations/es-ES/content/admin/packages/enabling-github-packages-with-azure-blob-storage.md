---
title: Habilitar GitHub Packages con Azure Blob Storage
intro: 'Configura el {% data variables.product.prodname_registry %} con Azure Blob Storage como tu almacenamiento externo.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Habilitar los paquetes con Azure
---

{% warning %}

**Advertencias:**
- Es crítico que configures las políticas de acceso restrictivo que necesites para tu bucket de almacenamiento, ya que {% data variables.product.company_short %} no aplica permisos de objeto específicos o listas de control de acceso adicionales (ACLs) a tu configuración de bucket de almacenamiento. Por ejemplo, si haces a tu bucket público, el público general en la internet podrá acceder a ellos.
- Te recomendamos utilizar un bucket dedicado para {% data variables.product.prodname_registry %}, separado de aquél que utilices para almacenar {% data variables.product.prodname_actions %}.
- Asegúrate de configurar el bucket que quieres utilizar en el futuro. No te recomendamos cambiar tu almacenamiento después de que comienzas a utilizar {% data variables.product.prodname_registry %}.

{% endwarning %}

## Prerrequisitos

Antes de que puedas habilitar y configurar el {% data variables.product.prodname_registry %} en {% data variables.product.product_location_enterprise %}, necesitas preparar tu bucket de almacenamiento de Azure Blob Storage. Para preparar tu bucket de Azure Blob Storage, te recomendamos consultar los documentos oficiales de este servicio en el [sitio oficial de documentación de Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/).

## Habilitar el {% data variables.product.prodname_registry %} con Azure Blob Storage

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
1. Debajo de "Almacenamiento de Packages", selecciona **Azure Blob Storage** e ingresa el nombre de tu contenedor de Azure para tu bucket de almacenamiento de paquetes y secuencia de conexión. ![Cajas para el nombre del contenedor de Azure Blob Storage y secuencia de conexión](/assets/images/help/package-registry/azure-blob-storage-settings.png)

  {% note %}

  **Note:** You can find your Azure Connection String by navigating to the Access Key menu in your Azure storage account. Usage of a SAS Token or SAS URL as connection string is not currently supported.

  {% endnote %}

{% data reusables.enterprise_management_console.save-settings %}

## Pasos siguientes

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
