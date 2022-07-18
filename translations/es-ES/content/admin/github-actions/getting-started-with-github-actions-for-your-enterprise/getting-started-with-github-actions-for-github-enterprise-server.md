---
title: Iniciar con GitHub Actions para GitHub Enterprise Server
shortTitle: Empezar
intro: 'Aprende cómo habilitar y configurar las {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %} por primera vez.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca del {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %}

Este artículo explica cómo los administradores de sitio pueden habilitar {% data variables.product.prodname_ghe_server %} para utilizar {% data variables.product.prodname_actions %}.

{% data reusables.enterprise.upgrade-ghes-for-actions %}

{% data reusables.actions.ghes-actions-not-enabled-by-default %} Necesitarás determinar si tu instancia tiene recursos de CPU y memoria adecuados para manejar la carga de {% data variables.product.prodname_actions %} sin causar una pérdida de rendimiento e incrementar esos recursos posiblemente. También necesitarás decidir qué proveedor de almacenamiento utilizarás para el almacenamiento de blobs que se requiere para almacenar los artefactos{% ifversion actions-caching %} y cachés{% endif %} que se generan con las ejecuciones de trabajo. Entonces, habilitarás las {% data variables.product.prodname_actions %} para tu empresa, administrarás los permisos de acceso y agregarás los ejecutores auto-hospedados para ejecutar los flujos de trabajo.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Revisar los requisitos de hardware

{%- ifversion ghes %}

Los recursos de memoria y CPU que {% data variables.product.product_location %} tiene disponibles determinan la cantidad de jobs que se pueden ejecutar simultáneamente sin pérdida de rendimiento. {% data reusables.actions.minimum-hardware %}

La cantidad máxima de ejecución simultánea de jobs sin pérdida de rendimiento depende de factores tales como la duración de los jobs, el uso de artefactos, la cantidad de repositorios ejecutando acciones y qué tanto trabajo adicional sin relación a las acciones ejecuta tu instancia. Las pruebas internas en GitHub demostraron los siguientes objetivos de rendimiento para GitHub Enterprise Server en un rango de configuraciones de memoria y CPU:

{% endif %}


{%- ifversion ghes = 3.2 %}

{% data reusables.actions.hardware-requirements-3.2 %}

La simultaneidad máxima se midió utilizando repositorios múltiples, una duración de los jobs de aproximadamente 10 minutos y 10 MB de cargas de artefactos. Puedes experimentar rendimientos diferentes dependiendo de los niveles de actividad generales de tu instancia.

{%- endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

La simultaneidad máxima se midió utilizando repositorios múltiples, una duración de los jobs de aproximadamente 10 minutos y 10 MB de cargas de artefactos. Puedes experimentar rendimientos diferentes dependiendo de los niveles de actividad generales de tu instancia.

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

La simultaneidad máxima se midió utilizando repositorios múltiples, una duración de los jobs de aproximadamente 10 minutos y 10 MB de cargas de artefactos. Puedes experimentar rendimientos diferentes dependiendo de los niveles de actividad generales de tu instancia.

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

{% data variables.product.company_short %} midió la concurrencia máxima utilizando repositorios múltiples, duraciones de job de aproximadamente 10 minutos y cargas de artefactos de 10 MB. Puedes experimentar rendimientos diferentes dependiendo de los niveles de actividad generales de tu instancia.

{% note %}

**Nota:** Comenzando con {% data variables.product.prodname_ghe_server %} 3.5, las pruebas internas de {% data variables.product.company_short %} utilizan CPU de tercera generación para reflejar mejor una configuración de cliente habitual. Este cambio en el CPU representa una porción pequeña de los cambios a los objetivos de desempeño en esta versión de {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{%- endif %}

Si planeas habilitar las {% data variables.product.prodname_actions %} para los usuarios de una instancia existente, revisa los niveles de actividad para los usuarios y automatizaciones en la instancia y asegúrate de haber proporcionado memoria y CPU adecuados para tus usuarios. Para obtener más información acerca de cómo monitorear la capacidad y rendimiento de {% data variables.product.prodname_ghe_server %}, consulta la sección "[Monitorear tu aplicativo](/admin/enterprise-management/monitoring-your-appliance)".

Para obtener más información acerca de los requisitos mínimos de {% data variables.product.product_location %}, consulta las consideraciones de hardware para la plataforma de tu instancia.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Plataforma de Google Cloud](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations){% ifversion ghes < 3.3 %}
- [XenServer](/admin/installation/installing-github-enterprise-server-on-xenserver#hardware-considerations){% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% ifversion ghes > 3.4 %}

Opcionalmente, puedes limitar el consumo de recursos en {% data variables.product.product_location %} si configuras un límite de tasa para {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Configurar límites de tasa](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-github-actions)."

{% endif %}

## Requisitos de almacenamiento externo

Para habilitar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %}, debes tener acceso al almacenamiento externo de blobs.

{% data variables.product.prodname_actions %} utiliza el almacenamiento de blobs para almacenar los datos que generan las ejecuciones de flujo de trabajo, tales como las bitácoras de flujos de trabajo{% ifversion actions-caching %}, los cachés{% endif %} y los artefactos de compilación que suben los usuarios. La cantidad de almacenamiento requerida dependerá de tu uso de {% data variables.product.prodname_actions %}. Sólo se admite una sola configuración de almacenamiento externo y no puedes utilizar varios proveedores de almacenamiento al mismo tiempo.

{% data variables.product.prodname_actions %} es compatible con estos proveedores de almacenamiento:

* Azure Blob storage
* Amazon S3
* S3-compatible MinIO Gateway para NAS

{% note %}

**Nota:** Estos son los únicos proveedores de almacenamiento compatibles con {% data variables.product.company_short %} y sobre los que éste puede proporcionar asistencia. Es muy poco probable que otros proveedores de almacenamiento de S3 compatibles con la API funcionen, debido a las diferencias de la API de S3. [Contáctanos](https://support.github.com/contact) para solicitar soporte para proveedores de almacenamiento adicionales.

{% endnote %}

{% data reusables.actions.minio-gateways-removal %}

Antes de que habilites las {% data variables.product.prodname_actions %}, puedes probar tu configuración de almacenamiento desde el shell administrativo con la utilidad `ghe-actions-precheck`. Para obtener más información, consulta las secciones "[Utilidades de línea de comandos](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check)" y "[Acceder al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

## Consideraciones de las conexiones

{% data reusables.actions.proxy-considerations %} Para obtener más información sobre cómo utilizar un proxy con {% data variables.product.prodname_ghe_server %}, consulta la sección "[Configurar un servidor proxy saliente](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)".

{% ifversion ghes %}

## Habilitar las {% data variables.product.prodname_actions %} con tu proveedor de almacenamiento

Sigue uno de los procedimientos siguientes para habilitar las {% data variables.product.prodname_actions %} con el proveedor de almacenamiento de tu elección:

* [Habilitar las GitHub Actions con el almacenamiento de Azure Blob](/admin/github-actions/enabling-github-actions-with-azure-blob-storage)
* [Habilitar las GitHub Actions con el almacenamiento de Amazon S3](/admin/github-actions/enabling-github-actions-with-amazon-s3-storage)
* [Habilitar las GitHub Actions con la puerta de enlace de MinIO para el almacenamiento en NAS](/admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage)

## Administrar los permisos de acceso para {% data variables.product.prodname_actions %} en tu empresa

Puedes utilizar políticas para administrar el acceso a las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Requerir las políticas de GitHub Actions para tu empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Agrega ejecutores auto-hospedados

{% data reusables.actions.enterprise-github-hosted-runners %}

Para ejecutar los flujos de trabajo de {% data variables.product.prodname_actions %}, necesitas agregar ejecutores auto-hospedados. Puedes agregar ejecutores auto-hospedados a nivel de empresa, organización o repositorio. Para obtener más información, consulta "[Agregar ejecutores autoalojados](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

## Administrar qué acciones pueden utilizarse en tu empresa

Puedes controlar las acciones que pueden utilizar tus usuarios en tu empresa. Esto incluye el configurar {% data variables.product.prodname_github_connect %} para el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %}, o sincronizar las acciones de {% data variables.product.prodname_dotcom_the_website %} manualmente.

Para obtener más información, consulta la sección "[Acerca de utilizar las acciones en tu empresa](/admin/github-actions/about-using-actions-in-your-enterprise)".

{% data reusables.actions.general-security-hardening %}

{% endif %}

## Nombres reservados

Cuando habilitas las {% data variables.product.prodname_actions %} para tu empresa, se crean dos organizaciones: `github` y `actions`. Si tu empresa utiliza el nombre de organización `github`, `github-org` (o `github-github-org` si `github-org` también se está utilizando) se utilizará en su lugar. Si tu empresa ya utiliza el nombre de organización `actions`, `github-actions` (or `github-actions-org` si `github-actions` también se está utilizando) se utilizará en su lugar. Una vez que se habiliten las acciones, ya no podrás utilizar estos nombres.
