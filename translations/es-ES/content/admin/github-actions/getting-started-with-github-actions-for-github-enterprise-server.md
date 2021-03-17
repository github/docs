---
title: Iniciar con GitHub Actions para GitHub Enterprise Server
intro: 'Aprende cómo habilitar y configurar las {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %} por primera vez.'
permissions: 'Los administradoresde sitio pueden habilitar {% data variables.product.prodname_actions %} y configurar los ajustes empresariales.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

Este artículo explica cómo los administradores de sitio pueden habilitar {% data variables.product.prodname_ghe_server %} para utilizar {% data variables.product.prodname_actions %}. Esto cubre los requisitos de hardware y software, presenta las opciones de almacenamiento y describe las políticas de administración de seguridad.

{% endif %}

### Revisar las consideraciones de hardware

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" %}

{% note %}

**Note**: {% if currentVersion == "enterprise-server@2.22" %}{% data variables.product.prodname_actions %} was available for {% data variables.product.prodname_ghe_server %} 2.22 as a limited beta. {% endif %}If you're upgrading an existing {% data variables.product.prodname_ghe_server %} instance to 3.0 or later and want to configure {% data variables.product.prodname_actions %}, note that the minimum hardware requirements have increased. Para obtener más información, consulta "[Actualizar {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server#about-minimum-requirements-for-github-enterprise-server-30-and-later)."

{% endnote %}

{% endif %}

{% data reusables.actions.enterprise-hardware-considerations %}

For more information about resource requirements for {% data variables.product.prodname_ghe_server %}, see the hardware considerations for your instance's platform.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Plataforma de Google Cloud](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)
- [XenServer](/admin/installation/installing-github-enterprise-server-on-xenserver#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

### Requisitos de almacenamiento externo

Para habilitar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %}, debes tener acceso al almacenamiento externo de blobs.

{% data variables.product.prodname_actions %} utiliza el almacenamiento de blobs para almacenar artefactos que se generan con las ejecuciones de flujo de trabajo, tales como las bitácoras de flujo de trabajo y los artefactos de compilaciones que sube el usuario. La cantidad de almacenamiento requerida dependerá de tu uso de {% data variables.product.prodname_actions %}. Sólo se admite una sola configuración de almacenamiento externo y no puedes utilizar varios proveedores de almacenamiento al mismo tiempo.

{% data variables.product.prodname_actions %} es compatible con estos proveedores de almacenamiento:

* Azure Blob storage
* Amazon S3
* S3-compatible MinIO Gateway para NAS

{% note %}

**Nota:** Estos son los únicos proveedores de almacenamiento compatibles con {% data variables.product.company_short %} y sobre los que éste puede proporcionar asistencia. Es muy poco probable que otros proveedores de almacenamiento de S3 compatibles con la API funcionen, debido a las diferencias de la API de S3. [Contáctanos](https://support.github.com/contact) para solicitar soporte para proveedores de almacenamiento adicionales.

{% endnote %}

{% if currentVersion == "enterprise-server@2.22" %}

#### Permisos para Amazon S3

{% data reusables.actions.enterprise-s3-permission %}

### Habilitar {% data variables.product.prodname_actions %}

{% data variables.product.prodname_actions %} support on {% data variables.product.prodname_ghe_server %} 2.22 was available as a limited beta. To configure {% data variables.product.prodname_actions %} for your instance, upgrade to {% data variables.product.prodname_ghe_server %} 3.0 or later. For more information, see the [{% data variables.product.prodname_ghe_server %} 3.0 release notes](/enterprise-server@3.0/admin/release-notes) and "[Upgrading {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)."

### Leer más

- "Consideraciones de hardware" para tu plataforma en "[Configurar una instancia de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)"

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

### Habilitar las {% data variables.product.prodname_actions %} con tu proveedor de almacenamiento

Sigue uno de los procedimientos siguientes para habilitar las {% data variables.product.prodname_actions %} con el proveedor de almacenamiento de tu elección:

* [Habilitar las GitHub Actions con el almacenamiento de Azure Blob](/admin/github-actions/enabling-github-actions-with-azure-blob-storage)
* [Habilitar las GitHub Actions con el almacenamiento de Amazon S3](/admin/github-actions/enabling-github-actions-with-amazon-s3-storage)
* [Habilitar las GitHub Actions con la puerta de enlace de MinIO para el almacenamiento en NAS](/admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage)

### Administrar los permisos de acceso para {% data variables.product.prodname_actions %} en tu empresa

Puedes utilizar políticas para administrar el acceso a las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Requerir las políticas de GitHub Actions para tu empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

### Agregar ejecutores autoalojados

{% data reusables.actions.enterprise-github-hosted-runners %}

Para ejecutar los flujos de trabajo de {% data variables.product.prodname_actions %}, necesitas agregar ejecutores auto-hospedados. Puedes agregar ejecutores auto-hospedados a nivel de empresa, organización o repositorio. Para obtener más información, consulta "[Agregar ejecutores autoalojados](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

### Administrar qué acciones pueden utilizarse en tu empresa

Puedes controlar las acciones que pueden utilizar tus usuarios en tu empresa. Esto incluye el configurar {% data variables.product.prodname_github_connect %} para el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %}, o sincronizar las acciones de {% data variables.product.prodname_dotcom_the_website %} manualmente.

Para obtener más información, consulta la sección "[Acerca de las acciones en {% data variables.product.prodname_ghe_server %}](/admin/github-actions/about-using-actions-on-github-enterprise-server)".

### Fortalecimiento de seguridad general para las {% data variables.product.prodname_actions %}

Si quieres aprender más acerca de las prácticas de seguridad para {% data variables.product.prodname_actions %}, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions)".

{% endif %}
