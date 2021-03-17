---
title: Iniciar con GitHub Packages para tu empresa
intro: 'Puedes comenzar a utilizar el {% data variables.product.prodname_registry %} en {% data variables.product.product_location %} si habilitas esta característica, configurando un almacenamiento de terceros, configurando los ecosistemas que quieras que sea compatibles y actualizando tu certificado TLS.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% if currentVersion == "enterprise-server@2.22" %}

{% data reusables.package_registry.packages-ghes-release-stage %}

{% note %}

**Nota:** Después de que se te ha invitado a unirte al beta, sigue las instrucciones de tu representante de cuenta para habilitar el {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}.

{% endnote %}

{% endif %}

{% data reusables.package_registry.packages-cluster-support %}

### Paso 1: Habilita el {% data variables.product.prodname_registry %} y configura el almacenamiento externo

{% data variables.product.prodname_registry %} en {% data variables.product.prodname_ghe_server %} utiliza almacenamiento externo de blobs para almacenar tus paquetes.

Después de habilitar el {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}, necesitarás preparar tu bucket de almacenamiento de terceros. La cantidad de almacenamiento que requieras dependerá de tu uso del {% data variables.product.prodname_registry %}, y los lineamientos de configuración podrán variar dependiendo del proveedor de almacenamiento.

Proveedores de almacenamiento externo compatibles
- Amazon Web Services (AWS) S3 {% if currentVersion ver_gt "enterprise-server@2.22" %}
- Azure Blob Storage {% endif %}
- MinIO

Para habilitar el {% data variables.product.prodname_registry %} y configurar el almacenamiento de terceros, consulta:
  - "[Habilitar GitHub Packages con AWS](/admin/packages/enabling-github-packages-with-aws)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
  - "[Habilitar GitHub Packages con Azure Blob Storage](/admin/packages/enabling-github-packages-with-azure-blob-storage)"{% endif %}
  - "[Habilitar GitHub Packages con MinIO](/admin/packages/enabling-github-packages-with-minio)"

### Paso 2: Especifica los ecosistemas de paquetes que serán compatibles con tu instancia

Elige qué ecosistemas de paquetes te gustaría habilitar, inhabilitar o configurar como de solo lectura en tu {% data variables.product.product_location %}. Las opciones disponibles son Docker, RubyGems, npm, Apache maven, Gradle o NuGet.  Para obtener más información, consulta la sección "[Configurar la compatibilidad de ecosistemas de paquetes para tu empresa](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)".

### Paso 3: De ser necesario, asegúrate de que tienes un certificado de TLS para la URL de hospedaje de tu paquete

Si está habilitado el aislamiento de subdominios para {% data variables.product.product_location %}{% if currentVersion == "enterprise-server@2.22" %}, el cual se necesita para utilizar el {% data variables.product.prodname_registry %} con Docker{% endif %}, necesitarás crear y cargar un certificado TLS que permita la URL de hospedaje de paquetes para cada ecosistema que quieras utilizar, tal como `npm.HOSTNAME`. Asegúrate de que cada URL de host de paquete incluya `https://`.

  Puedes crear el certificado manualmente, o puedes utilizar _Let's Encrypt_. Si ya utilizas _Let's Encrypt_, debes solicitar un certificado TLS nuevo después de habilitar el {% data variables.product.prodname_registry %}. Para obtener más información acerca de las URL del host de los paquetes, consulta "[Habilitar el aislamiento de subdominios](/enterprise/admin/configuration/enabling-subdomain-isolation)". Para obtener más información sobre cómo cargar certificados TLS a {% data variables.product.product_name %}, consulta la sección "[Configurar el TLS](/enterprise/admin/configuration/configuring-tls)".
