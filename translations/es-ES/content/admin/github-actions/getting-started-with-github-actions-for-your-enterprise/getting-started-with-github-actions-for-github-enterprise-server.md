---
title: Iniciar con GitHub Actions para GitHub Enterprise Server
shortTitle: Get started
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
ms.openlocfilehash: 6bfcb7cc2a14a70a6ba4397c12effaf0a8d8be3f
ms.sourcegitcommit: 8f1801040a84ca9353899a2d1e6782c702aaed0d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166565'
---
{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %}

Este artículo explica cómo los administradores de sitio pueden habilitar {% data variables.product.prodname_ghe_server %} para utilizar {% data variables.product.prodname_actions %}.

{% data reusables.actions.ghes-actions-not-enabled-by-default %} Necesitarás determinar si tu instancia tiene recursos de CPU y memoria adecuados para manejar la carga de {% data variables.product.prodname_actions %} sin causar una pérdida de rendimiento e incrementar esos recursos posiblemente. También tendrás que decidir qué proveedor de almacenamiento usarás para el almacenamiento de blobs que se requiere para almacenar los artefactos{% ifversion actions-caching %} y las cachés{% endif %} que las ejecuciones de flujo de trabajo generan. Entonces, habilitarás las {% data variables.product.prodname_actions %} para tu empresa, administrarás los permisos de acceso y agregarás los ejecutores auto-hospedados para ejecutar los flujos de trabajo.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Revisar los requisitos de hardware

{%- ifversion ghes < 3.6 %}

Los recursos de memoria y CPU que {% data variables.location.product_location %} tiene disponibles determinan la cantidad de trabajos que se pueden ejecutar simultáneamente sin pérdida de rendimiento. {% data reusables.actions.minimum-hardware %}

La cantidad máxima de ejecución simultánea de jobs sin pérdida de rendimiento depende de factores tales como la duración de los jobs, el uso de artefactos, la cantidad de repositorios ejecutando acciones y qué tanto trabajo adicional sin relación a las acciones ejecuta tu instancia. Las pruebas internas en GitHub demostraron los siguientes objetivos de rendimiento para GitHub Enterprise Server en un rango de configuraciones de memoria y CPU:

{% endif %}

{%- ifversion ghes > 3.5 %}

Los recursos de memoria y CPU que {% data variables.location.product_location %} tiene disponibles determinan la cantidad de ejecutores que se pueden configurar sin pérdida de rendimiento. {% data reusables.actions.minimum-hardware %}

La cantidad máxima de ejecutores conectados sin pérdida de rendimiento depende de factores tales como la duración de los trabajos, el uso de artefactos, la cantidad de repositorios ejecutando acciones y qué tanto trabajo adicional sin relación a las acciones ejecuta tu instancia. Las pruebas internas en GitHub demostraron los siguientes objetivos de rendimiento para GitHub Enterprise Server en un rango de configuraciones de memoria y CPU:

{% endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

La simultaneidad máxima se ha medido utilizando varios repositorios, una duración de trabajo de aproximadamente 10 minutos y 10 MB de cargas de artefactos. Puedes experimentar rendimientos diferentes dependiendo de los niveles de actividad generales de tu instancia.

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

La simultaneidad máxima se ha medido utilizando varios repositorios, una duración de trabajo de aproximadamente 10 minutos y 10 MB de cargas de artefactos. Puedes experimentar rendimientos diferentes dependiendo de los niveles de actividad generales de tu instancia.

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

{% data variables.product.company_short %} ha medido la simultaneidad máxima mediante el uso de varios repositorios, una duración de trabajo de aproximadamente 10 minutos y 10 MB de cargas de artefactos. Puedes experimentar rendimientos diferentes dependiendo de los niveles de actividad generales de tu instancia.

{% note %}

**Nota**: A partir de {% data variables.product.prodname_ghe_server %} 3.5, las pruebas internas de {% data variables.product.company_short %} usan CPU de tercera generación para reflejar mejor una configuración típica del cliente. Este cambio en la CPU representa una pequeña parte de los cambios en los objetivos de rendimiento de esta versión de {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{%- endif %}

{%- ifversion ghes > 3.5 %}


| vCPU | Memoria | Número máximo de ejecutores conectados |
| :---| :--- | :--- |
| 8   | 64 GB  | 740 ejecutores |
| 32  | 160 GB | 2700 ejecutores |
| 96  | 384 GB | 7000 ejecutores |
| 128 | 512 GB | 7000 ejecutores |

{% data variables.product.company_short %} ha medido el número máximo de ejecutores conectados mediante el uso de varios repositorios, una duración de trabajo de aproximadamente 10 minutos y 10 MB de cargas de artefactos. Puedes experimentar rendimientos diferentes dependiendo de los niveles de actividad generales de tu instancia.

{% note %}

**Notas:**

- A partir de {% data variables.product.prodname_ghe_server %} 3.6, {% data variables.product.company_short %} documenta ejecutores conectados en lugar de trabajos simultáneos. Los ejecutores conectados representan la mayoría de los ejecutores que se pueden conectar y esperar utilizar. También se debe tener en cuenta que la conexión de más ejecutores de lo que puede esperar usar puede afectar negativamente al rendimiento.

- A partir de {% data variables.product.prodname_ghe_server %} 3.5, las pruebas internas de {% data variables.product.company_short %} usan CPU de tercera generación para reflejar mejor una configuración típica del cliente. Este cambio en la CPU representa una pequeña parte de los cambios en los objetivos de rendimiento de esta versión de {% data variables.product.prodname_ghe_server %}.
{% endnote %} {%- endif %}

Si planeas habilitar las {% data variables.product.prodname_actions %} para los usuarios de una instancia existente, revisa los niveles de actividad para los usuarios y automatizaciones en la instancia y asegúrate de haber proporcionado memoria y CPU adecuados para tus usuarios. Para más información sobre la supervisión de la capacidad y el rendimiento de {% data variables.product.prodname_ghe_server %}, vea "[Supervisión del dispositivo](/admin/enterprise-management/monitoring-your-appliance)".

Para obtener más información sobre los requisitos mínimos de {% data variables.location.product_location %}, consulta las consideraciones de hardware relativas a la plataforma de tu instancia.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% ifversion ghes > 3.4 %}

Opcionalmente, puedes limitar el consumo de recursos en {% data variables.location.product_location %} si configuras un límite de velocidad en {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Configuración de límites de velocidad](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-github-actions)".

{% endif %}

## Requisitos de almacenamiento externo

Para habilitar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %}, debes tener acceso al almacenamiento externo de blobs.

{% data variables.product.prodname_actions %} usa el almacenamiento de blobs para almacenar los datos que se generan con las ejecuciones de flujo de trabajo, tales como registros de flujo de trabajo{% ifversion actions-caching %}, cachés,{% endif %} y artefactos de compilación cargados por el usuario. La cantidad de almacenamiento requerida dependerá de tu uso de {% data variables.product.prodname_actions %}. Sólo se admite una sola configuración de almacenamiento externo y no puedes utilizar varios proveedores de almacenamiento al mismo tiempo.

{% data variables.product.prodname_actions %} es compatible con estos proveedores de almacenamiento:

* Azure Blob Storage
* Amazon S3 {%- ifversion actions-ghes-gcp-storage %}
* Google Cloud Storage {%- endif %}
* Clúster de minIO compatible con S3

{% note %}

**Nota:** Estos son los únicos proveedores de almacenamiento compatibles con {% data variables.product.company_short %} y sobre los que puede proporcionar asistencia.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

## Consideraciones sobre redes

{% data reusables.actions.proxy-considerations %} Para más información sobre el uso de un proxy con {% data variables.product.prodname_ghe_server %}, vea "[Configuración de un servidor proxy web de salida](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)".

{% ifversion ghes %}

## Habilitar las {% data variables.product.prodname_actions %} con tu proveedor de almacenamiento

Sigue uno de los procedimientos siguientes para habilitar las {% data variables.product.prodname_actions %} con el proveedor de almacenamiento de tu elección:

* [Habilitación de Acciones de GitHub con Azure Blob Storage](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-azure-blob-storage)
* [Habilitar Acciones de GitHub con almacenamiento de Amazon S3](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage) {%- ifversion actions-ghes-gcp-storage %}
* [Habilitar Acciones de GitHub con Google Cloud Storage](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-google-cloud-storage) {%- endif %}
* [Habilitación de acciones de GitHub mediante el almacenamiento de MinIO](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-storage)

## Administrar los permisos de acceso para {% data variables.product.prodname_actions %} en tu empresa

Puedes utilizar políticas para administrar el acceso a las {% data variables.product.prodname_actions %}. Para más información, vea "[Aplicación de directivas de Acciones de GitHub para la empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Agrega ejecutores auto-hospedados

{% data reusables.actions.enterprise-github-hosted-runners %}

Para ejecutar los flujos de trabajo de {% data variables.product.prodname_actions %}, necesitas agregar ejecutores auto-hospedados. Puedes agregar ejecutores auto-hospedados a nivel de empresa, organización o repositorio. Para más información, vea "[Adición de ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

## Administrar qué acciones pueden utilizarse en tu empresa

Puedes controlar las acciones que pueden utilizar tus usuarios en tu empresa. Esto incluye el configurar {% data variables.product.prodname_github_connect %} para el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %}, o sincronizar las acciones de {% data variables.product.prodname_dotcom_the_website %} manualmente.

Para más información, vea "[Acerca del uso de acciones en la empresa](/admin/github-actions/about-using-actions-in-your-enterprise)".

{% data reusables.actions.general-security-hardening %}

{% endif %}

## Nombres reservados

Al habilitar {% data variables.product.prodname_actions %} para la empresa, se crean dos organizaciones: `github` y `actions`. Si en la empresa ya se usa el nombre de organización `github`, en su lugar se usará `github-org` (o `github-github-org` si `github-org` también está en uso). Si en la empresa ya se usa el nombre de organización `actions`, en su lugar se usará `github-actions` (o `github-actions-org` si `github-actions` también está en uso). Una vez que se habiliten las acciones, ya no podrás utilizar estos nombres.
