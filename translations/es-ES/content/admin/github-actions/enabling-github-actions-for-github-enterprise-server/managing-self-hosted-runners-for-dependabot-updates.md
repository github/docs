---
title: Administrar ejecutores autohospedados para actualizaciones del Dependabot en su empresa
intro: 'Puedes crear ejecutores dedicados para {% data variables.location.product_location %} que use {% data variables.product.prodname_dependabot %} para crear solicitudes de cambio para ayudar a asegurar y mantener las dependencias que se usan en los repositorios de tu empresa.'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Dependabot updates
ms.openlocfilehash: 0f21d4bc91e519f7af89ff04bd65a6ace742f430
ms.sourcegitcommit: d411e8278b73efd0051816625c0b235ab7c263e9
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181337'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## Acerca de los ejecutores autohospedados para {% data variables.product.prodname_dependabot_updates %}

Puedes ayudar a los usuarios de {% data variables.location.product_location %} a crear y mantener código seguro configurando las actualizaciones de versión y seguridad de {% data variables.product.prodname_dependabot %}. Con {% data variables.product.prodname_dependabot_updates %}, los desarrolladores pueden configurar repositorios para que sus dependencias se actualicen y se mantengan seguras automáticamente. Para más información, vea "[Habilitación de {% data variables.product.prodname_dependabot %} para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

Para usar {% data variables.product.prodname_dependabot_updates %} en {% data variables.location.product_location %}, debes configurar ejecutores autohospedados para crear las solicitudes de incorporación de cambios que actualizarán las dependencias.

## Requisitos previos

{% ifversion dependabot-updates-github-connect %} La configuración de ejecutores autohospedados supone solo un paso en mitad del proceso para habilitar {% data variables.product.prodname_dependabot_updates %}. Hay varios pasos que debes seguir antes de estos, incluida la configuración de {% data variables.location.product_location %} para usar {% data variables.product.prodname_actions %} con ejecutores autohospedados. Para más información, vea "[Habilitación de {% data variables.product.prodname_dependabot %} para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% else %} Antes de configurar ejecutores autohospedados para {% data variables.product.prodname_dependabot_updates %}, debe hacer lo siguiente:

- Configurar {% data variables.location.product_location %} para usar {% data variables.product.prodname_actions %} con ejecutores autohospedados. Para más información, vea "[Introducción a {% data variables.product.prodname_actions %} para GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".
- Habilitar {% data variables.product.prodname_dependabot_alerts %} para su empresa. Para más información, vea "[Habilitación de {% data variables.product.prodname_dependabot %} para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

## Configurar los ejecutores autohospedados para {% data variables.product.prodname_dependabot_updates %}

Cuando configures {% data variables.location.product_location %} para que use {% data variables.product.prodname_actions %}, necesitas agregar ejecutores autohospedados para las actualizaciones de {% data variables.product.prodname_dependabot_updates %}.

### Requisitos del sistema para ejecutores de {% data variables.product.prodname_dependabot %}

Cualquier máquina virtual que use para los ejecutores del {% data variables.product.prodname_dependabot %} debe cumplir los requisitos de los ejecutores autohospedados. Además, deben cumplir los siguientes requisitos.

- Sistema operativo Linux
- Arquitectura x64 {%- ifversion ghes < 3.5 %}
- Git instalado {%- endif %}
- Tener Docker instalado con acceso para los usuarios del ejecutor:
  - Se recomienda instalar Docker en modo sin raíz y configurar los ejecutores para acceder a Docker sin privilegios `root`.
  - Como alternativa, instale Docker y conceda a los usuarios del ejecutor privilegios para ejecutar Docker.

Los requisitos de CPU y memoria dependerán del número de ejecutores simultáneos que implemente en una máquina virtual determinada. A modo de guía, hemos configurado correctamente 20 ejecutores en una sola máquina de 8 GB de 2 CPU pero, en última instancia, los requisitos de CPU y memoria dependerán en gran medida de los repositorios que se actualicen. Algunos ecosistemas requerirán más recursos que otros.

Si especifica más de 14 ejecutores simultáneos en una máquina virtual, también debe actualizar la configuración `/etc/docker/daemon.json` de Docker para aumentar el número predeterminado de redes que puede crear Docker.

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### Requisitos de red para ejecutores del {% data variables.product.prodname_dependabot %}

Los ejecutores del {% data variables.product.prodname_dependabot %} necesitan acceso al internet público, a {% data variables.product.prodname_dotcom_the_website %} y a cualquier registro interno que se utilizará en las actualizaciones del {% data variables.product.prodname_dependabot %}. Para minimizar el riesgo de la red interna, debe limitar el acceso desde la máquina virtual (VM) a la red interna. Esto reduce la posibilidad de que se produzcan daños en los sistemas internos si un ejecutor descarga una dependencia secuestrada.

### Agregar ejecutores autohospedados para actualizaciones del {% data variables.product.prodname_dependabot %}

1. Puede aprovisionar ejecutores autohospedados en el nivel de repositorio, organización o empresa. Para obtener más información, vea "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" y "[Agregar ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

2. Configure los ejecutores autohospedados con los requisitos descritos anteriormente. Por ejemplo, en una máquina virtual que ejecuta Ubuntu 20.04, haría lo siguiente:{% ifversion ghes < 3.5 %}

   - Comprobar que se ha instalado Git: `command -v git`{% endif %}.
   - Instalar Docker y asegurarse de que los usuarios del ejecutor tienen acceso a Docker. Para obtener más información, vea la documentación de Docker.
     - [Instalación del motor de Docker en Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     - Enfoque recomendado: [Ejecución del demonio de Docker como un usuario que no es de raíz (modo sin raíz)](https://docs.docker.com/engine/security/rootless/)
     - Enfoque alternativo: [Administración de Docker como usuario que no es de raíz](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - Compruebe que los ejecutores tienen acceso a la red pública de Internet y que solo pueden acceder a las redes internas que necesita el {% data variables.product.prodname_dependabot %}.

3. Asigne una etiqueta `dependabot` a cada ejecutor que quiera que use el {% data variables.product.prodname_dependabot %}. Para obtener más información, vea "[Usar etiquetas con ejecutores autohospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)".

4. Opcionalmente, habilite los flujos de trabajo que desencadena {% data variables.product.prodname_dependabot %} para usar permisos que sean más que de solo lectura y tener acceso a los secretos que normalmente están disponibles. Para obtener más información, vea "[Solucionar problemas de {% data variables.product.prodname_actions %} para su empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions)".
