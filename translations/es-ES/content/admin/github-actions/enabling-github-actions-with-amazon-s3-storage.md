---
title: Habilitar las GitHub Actions con el almacenamiento de Amazon S3
intro: 'Puedes habilitar las {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %} y utilizar el almacenamiento de Amazon S3 para almacenar artefactos qeu generan las ejecuciones de flujos de trabajo.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

### Prerrequisitos

{% data reusables.actions.enterprise-s3-support-warning %}

Antes de que habilites las {% data variables.product.prodname_actions %}, asegúrate de que has completado los siguientes pasos:

* Crea tu bucket de Amazon S3 para almacenar artefactos que generan las ejecuciones de flujo de trabajo. {% indented_data_reference site.data.reusables.actions.enterprise-s3-permission spaces=2 %}

{% data reusables.actions.enterprise-common-prereqs %}

### Habilitar {% data variables.product.prodname_actions %} con almacenamiento de Amazon S3

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. Debajo de "Almacenamiento de artefactos & bitácoras", selecciona **Amazon S3**, e ingresa los detalles de tu bucket de almacenamiento:

   * **URL de servicio de AWS**: La URL de servicio de tu bucket. Por ejemplo, si tu bucket de S3 se creó en la región `us-west-2`, este valor deberá ser `https://s3.us-west-2.amazonaws.com`.

     Para obtener más información, consulta la sección "[terminales de servicio de AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html)" en la documentación de AWS.
   * **AWS S3 Bucket**: El nombre de tu bucket de S3.
   * **Clave de acceso de AWS S3** y **Clave secreta de AWS S3**: La ID de clave de acceso y clave secreta para tu bucket. Para obtener más información sobre cómo administrar las claves de acceso de AWS, consulta la "[Documentación para la Administración de Accesos e Identidad de AWS](https://docs.aws.amazon.com/iam/index.html)".

   ![Botón radial para seleccionar el almacenamiento de Amazon S3 y los campos para la configuración de S3](/assets/images/enterprise/management-console/actions-aws-s3-storage.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
