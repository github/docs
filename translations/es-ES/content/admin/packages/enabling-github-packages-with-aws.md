---
title: Habilitar GitHub packages con AWS
intro: 'Configura el {% data variables.product.prodname_registry %} con AWS como tu almacenamiento externo.'
versions:
  enterprise-server: '>=2.22'
topics:
  - empresa
---

{% warning %}

**Advertencias:**
- Es crítico que configures cualquier política de acceso restrictivo que necesites para tu bucket de almacenamiento, ya que {% data variables.product.company_short %} no aplica permisos de objeto específicos para cualquier lista de control de accesos (ACL) a tu configuración de bucket de almacenamiento. Por ejemplo, si haces público tu bucket, el público general en la internet podrá acceder a los datos que se encuentren ahí. Para obtener más información, consulta la sección "[Configurar los permisos de acceso de objetos y buckets](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)" en la documentación de AWS.
- Te recomendamos utilizar un bucket dedicado para {% data variables.product.prodname_registry %}, separado de aquél que utilices para almacenar {% data variables.product.prodname_actions %}.
- Asegúrate de configurar el bucket que quieres utilizar en el futuro. No te recomendamos cambiar tu almacenamiento después de que comienzas a utilizar {% data variables.product.prodname_registry %}.

{% endwarning %}

### Prerrequisitos

Antes de que puedas habilitar y configurar el {% data variables.product.prodname_registry %} en {% data variables.product.product_location_enterprise %}, necesitas preparar tu bucket de almacenamiento de AWS. Para preparar tu bucket de almacenamiento de AWS, te recomendamos consultar los documentos oficiales de AWS en la [documentación de AWS](https://docs.aws.amazon.com/index.html).

Asegúrate de que la ID de tu clave y secreto de acceso de AWS tengan los siguientes permisos:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

### Habilitar el {% data variables.product.prodname_registry %} con el almacenamiento externo de AWS

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
{% if currentVersion == "enterprise-server@2.22" %}
1. Debajo de "AWS Service URL", teclea la URL de la terminal de S3 para la región de tu espacio. ![Campo de URL de servicio de AWS](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. Debajo de "AWS S3 Bucket", teclea el nombre del espacio de S3 que quieras utilizar para almacenar artefactos de los paquetes. ![Campo de espacio de AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. Debajo de "AWS S3 Access Key", teclea tu clave de acceso para S3. ![Campo de clave de acceso de AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. Debajo de "AWS S3 Secret Key", teclea tu clave secreta para S3. ![Campo de clave secreta de AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. Debajo de "AWS S3 Region", teclea tu región para S3. ![Campo de región de AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. Debajo de "Almacenamiento de Paquetes", selecciona **Amazon S3** e ingresa los detalles de tu bucket de almacenamiento:
    - **AWS Service URL:** La URL de servicio para tu bucket. Por ejemplo, si tu bucket de S3 se creó en la `us-west-2 region`, este valor deberá ser `https://s3.us-west-2.amazonaws.com`.

      Para obtener más información, consulta la sección "[terminales de servicio de AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html)" en la documentación de AWS.

    - **AWS S3 Bucket:** El nombre de tu bucket de S3 dedicado para el {% data variables.product.prodname_registry %}.
    - **AWS S3 Access Key** y **AWS S3 Secret Key**: La ID de clave de acceso y secreto de AWS para acceder a tu bucket.

      Para obtener más información sobre cómo administrar las claves de acceso de AWS, consulta la "[Documentación para la Administración de Accesos e Identidad de AWS](https://docs.aws.amazon.com/iam/index.html)".

    ![Cajas de entrada para los detalles de tu bucket de AWS S3](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

### Pasos siguientes

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
