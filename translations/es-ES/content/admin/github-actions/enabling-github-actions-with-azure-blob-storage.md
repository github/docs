---
title: Habilitar las GitHub Actions con el almacenamiento de Azure Blob
intro: 'Puedes habilitar las {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %} y utilizar el almacenamiento de Azure Blob para almacenar los artefactos que generen las ejecuciones de flujo de trabjo.'
permissions: 'Los administradoresde sitio pueden habilitar {% data variables.product.prodname_actions %} y configurar los ajustes empresariales.'
versions:
  enterprise-server: '>=3.0'
---

### Prerrequisitos

Antes de que habilites las {% data variables.product.prodname_actions %}, asegúrate de que has completado los siguientes pasos:

* Crea tu cuenta de almacenamiento para almacenar artefactos del flujo de trabajo. {% data variables.product.prodname_actions %} almacena sus datos como blobs de bloque y son compatibles dos tipos de cuenta de almacenamiento:
  * Una cuenta de almacenamiento para ** propósitos generales** (también conocida como `general-purpose v1` o `general-purpose v2`) que utiliza el nivel de rendimiento **estándar**.

    {% warning %}

    **Advertencia:** No se puede utilizar el nivel de rendimiento **premium** con una cuenta de almacenamiento de propósitos generales. El nivel de rendimiento **estándar** debe seleccionarse cuando se crea la cuenta de almacenamiento y no puede cambiarse después.

    {% endwarning %}
  * Una cuenta de almacenamiento de **BlockBlobStorage** que utiliza el nivel de rendimiento **premium**.

  Para obtener más información sobre los tipos de cuenta de almacenamiento de Azure y de los niveles de rendimiento, consulta la [Documentación de Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts).
{% data reusables.actions.enterprise-common-prereqs %}

### Habilitar las {% data variables.product.prodname_actions %} con el almacenamiento de Blobs de Azure

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. Debajo de "Almacenamiento de artefactos & bitácoras", selecciona **Azure Blob Storage**, e ingresa tu secuencia de conexión de cuenta para el almacenamiento de Azure. Para obtener más información sobre cómo obtener la secuencia de conexión para tu cuenta de almacenamiento, consulta la [Documentación de Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys). ![Botón radial para seleccionar Azure Blob Storage y el campo de secuencia de conexión](/assets/images/enterprise/management-console/actions-azure-storage.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
