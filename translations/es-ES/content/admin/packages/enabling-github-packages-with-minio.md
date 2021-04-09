---
title: Habilitar los GitHub Packages con MinIO
intro: 'Configura el {% data variables.product.prodname_registry %} con MinIO como tu almacenamiento externo.'
versions:
  enterprise-server: '>=2.22'
topics:
  - empresa
---

{% warning %}

**Advertencias:**
- Es crítico que configures las políticas de acceso restrictivo que necesites para tu bucket de almacenamiento, ya que {% data variables.product.company_short %} no aplica permisos de objeto específicos o listas de control de acceso adicionales (ACLs) a tu configuración de bucket de almacenamiento. Por ejemplo, si haces a tu bucket público, el público general en la internet podrá acceder a ellos.
- Te recomendamos utilizar un bucket dedicado para {% data variables.product.prodname_registry %}, separado de aquél que utilices para almacenar {% data variables.product.prodname_actions %}.
- Asegúrate de configurar el bucket que quieres utilizar en el futuro. No te recomendamos cambiar tu almacenamiento después de que comienzas a utilizar {% data variables.product.prodname_registry %}.

{% endwarning %}
### Prerrequisitos
Antes de que puedas habilitar y configurar el {% data variables.product.prodname_registry %} en {% data variables.product.product_location_enterprise %}, necesitas preparar tu bucket de almacenamiento de MinIO. Para ayudarte a configurar el bucket de MinIO rápidamente y navegar a las opciones de personalización de MinIO, consulta la [Guía de inicio rápido para configurar tu bucket de almacenamiento de MinIO para el {% data variables.product.prodname_registry %}](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages)".

Asegúrate que tu ID de clave de acceso y secreto de almacenamiento externo de MinIO tenga estos permisos:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

### Habilitar el {% data variables.product.prodname_registry %} con el almacenamiento externo de MinIO

Aunque MinIO no aparece actualmente en la interface de usuario bajo "Almacenamiento de paquetes", aún es {% if currentVersion == "enterprise-server@2.22" %} oficialmente{% endif %} compatible con el {% data variables.product.prodname_registry %} en {% data variables.product.prodname_enterprise %}. También debes tomar en cuenta que el almacenamiento de objetos de MinIO es compatible con la API de S3 y puedes ingresar los detalles del bucket de MinIO en vez de aquellos de AWS S3.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
{% if currentVersion == "enterprise-server@2.22" %}
1. Debajo de "URL de Servicio de AWS", teclea la URL de MinIO para la región de tu bucket. ![Campo de URL de servicio de AWS](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. Debajo de "Bucket de AWS S3", teclea el nombre del bucket de MinIO que quieras utilizar para almacenar artefactos de paquetes. ![Campo de espacio de AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. Debajo de "Clave de Acceso de AWS S3", teclea tu clave de acceso para MinIO. ![Campo de clave de acceso de AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. Debajo de "Clave secreta de AWS S3", teclea tu clave secreta para MinIO. ![Campo de clave secreta de AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. Debajo de "Región de AWS S3", teclea tu región para MinIO. ![Campo de región de AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. Debajo de "Almacenamiento de Paquetes", selecciona **Amazon S3**.
1. Ingresa tus detalles de bucket de almacenamiento de MinIO en la configuración de almacenamiento de AWS.
    - **AWS Service URL:** La URL de hospedaje para tu bucket de MinIO.
    - **AWS S3 Bucket:** El nombre de tu bucket de MinIO compatible con S3 dedicado para el {% data variables.product.prodname_registry %}.
    - **AWS S3 Access Key** y **AWS S3 Secret Key**: Ingresa la ID de clave de acceso y clave secreta de MinIO para acceder a tu bucket.

    ![Cajas de entrada para los detalles de tu bucket de AWS S3](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

### Pasos siguientes

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
