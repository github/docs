---
title: Acerca de GitHub Enterprise Server
intro: '{% data variables.product.product_name %} es una plataforma de desarrollo de software que se puede hospedar en un entorno privado.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 2622e3708cc31b24fe39929da68ba5dc8e864d88
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879424'
---
## Acerca de {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} El equipo puede usar {% data variables.product.product_name %} para compilar y enviar software mediante el control de versiones de Git, las API eficaces, las herramientas de productividad y colaboración, y las integraciones. Los desarrolladores con conocimientos de {% data variables.product.prodname_dotcom_the_website %} pueden incorporar y contribuir sin problemas con las características y flujos de trabajo conocidos. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data reusables.enterprise.github-distributes-ghes %} Para obtener más información, consulta "[Información general del sistema](/admin/overview/system-overview)".

Puedes optar por implementar {% data variables.product.product_name %} en el entorno local o en un entorno de nube compatible.

## Entornos compatibles para la implementación

Puedes implementar {% data variables.product.product_name %} en un hipervisor de virtualización dentro del centro de datos local o en un servicio en la nube pública.

{% data variables.product.company_short %} admite los siguientes hipervisores de virtualización para la implementación local.

- Microsoft Hyper-V
- OpenStack KVM
- VMware ESXi

{% data variables.product.company_short %} admite los servicios siguientes para la implementación en la nube.

- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

Para obtener más información, consulta "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)".

## Acerca de las versiones y actualizaciones

{% data reusables.enterprise.constantly-improving %} Eres el responsable de las actualizaciones de la instancia. Para obtener más información, consulta "[Versiones de {% data variables.product.product_name %}](/admin/all-releases)".

## Acerca de la administración

Puedes configurar y supervisar {% data variables.product.product_name %} mediante el explorador, el acceso SSH administrativo y las API REST o API GraphQL. {% data variables.product.company_short %} ha detectado que las personas con experiencia en administración de Linux tienen más éxito con la implementación y el mantenimiento de {% data variables.product.product_name %}.

Puedes conceder a determinados empleados acceso administrativo a {% data variables.product.product_name %}, para que puedan configurar la autenticación externa y la instancia a fin de satisfacer las necesidades del desarrollador, así como supervisar la actividad y el rendimiento de la instancia. Para garantizar el cumplimiento con las reglas de negocios o las restricciones normativas, los administradores pueden configurar directivas que controlen la forma en que los usuarios usan {% data variables.product.product_location %}. Para obtener más información, consulte los siguientes artículos.

- "[Acerca de la autenticación para la empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)"
- "[Configuración de la empresa](/admin/configuration/configuring-your-enterprise)"
- "[Acerca de la API de {% data variables.product.prodname_enterprise %}](/admin/overview/about-the-github-enterprise-api)"
- "[Supervisión del dispositivo](/admin/enterprise-management/monitoring-your-appliance)"
- "[Supervisión de la actividad en la empresa](/admin/monitoring-activity-in-your-enterprise)"
- "[Acerca de las directivas empresariales](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)"

## Acerca de las características opcionales

Puedes configurar características opcionales para {% data variables.product.product_name %} que mejoren el ciclo de vida de desarrollo de software de tu empresa.

| Característica | Descripción | Más información |
| :- | :- | :- |
| {% data variables.product.prodname_actions %} | Automatización de flujos de trabajo de CI/CD y desarrollo | "[Acerca de {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)" |
| {% data variables.product.prodname_github_connect %} | Beneficios de la potencia de {% data variables.product.prodname_dotcom_the_website %} de maneras limitadas | "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)" |
| {% data variables.product.prodname_GH_advanced_security %} | Mejora de la seguridad y la calidad del código | "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" |
| {% data variables.product.prodname_registry %} | Hospedaje de paquetes de software para la empresa | "[Introducción a {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages)" |

## Acerca de las topologías de implementación

De manera predeterminada, {% data variables.product.product_name %} se ejecuta como una instancia independiente. Puedes aumentar la fiabilidad y el rendimiento de {% data variables.product.product_name %} mediante una topología diferente para la implementación.

- Para mitigar el impacto de los errores del sistema o de la red, puedes implementar una instancia de réplica pasiva. Durante una interrupción que afecte a la instancia principal, puedes conmutar por error manualmente a la instancia de réplica. Para obtener más información, vea "[Acerca de la configuración de alta disponibilidad](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)".
- Puedes configurar varias réplicas activas para mejorar el rendimiento de los desarrolladores que están geográficamente alejados de la instancia principal. Para obtener más información, consulta "[Acerca de la replicación geográfica](/admin/enterprise-management/configuring-high-availability/about-geo-replication)".
- Algunas empresas con decenas de miles de desarrolladores pueden beneficiarse de una configuración de clúster que se escala horizontalmente en lugar de verticalmente. Para más información, vea "[Acerca de la agrupación en clústeres](/admin/enterprise-management/configuring-clustering/about-clustering)".

## Acerca de las copias de seguridad y la recuperación ante desastres

A fin de protegerse contra la pérdida de datos o las interrupciones del servicio para los desarrolladores, {% data variables.product.company_short %} recomienda encarecidamente establecer un plan para la recuperación ante desastres. Puedes realizar una copia de seguridad de la configuración de la instancia y los datos de usuario implementando y configurando un sistema host de Linux o Unix con {% data variables.product.prodname_enterprise_backup_utilities %}. Para más información, vea "[Configuración de copias de seguridad en el dispositivo](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

Además, puedes configurar una instancia de réplica pasiva a la que conmutar por error en caso de un error de red o del sistema. Para obtener más información, consulta [Acerca de las topologías de implementación](#about-deployment-topologies).

## Acerca de la documentación

La documentación para administradores y usuarios de {% data variables.product.product_name %} está disponible en este sitio: {% data variables.product.prodname_docs %}. 

- [Documentación para administradores empresariales](/admin)
- [Documentación de usuario](/)

Las distintas versiones de {% data variables.product.product_name %} se reflejan por separado en la documentación sobre {% data variables.product.prodname_docs %}. Para más información, vea "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

## Prueba de {% data variables.product.product_name %}

Puedes registrarte para obtener una evaluación gratuita de 45 días de {% data variables.product.product_name %}. Para más información, vea "[Configuración de una versión de prueba de {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)".

## Lecturas adicionales

- "[Introducción a {% data variables.product.product_name %}](/get-started/onboarding/getting-started-with-github-enterprise-server)"
- "[Acerca de {% data variables.contact.github_support %}](/support/learning-about-github-support/about-github-support)"
- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) en el repositorio `github/roadmap`
