---
title: Administración de vulnerabilidades de seguridad notificadas de forma privada
intro: Los mantenedores de repositorios pueden administrar las vulnerabilidades de seguridad que les hayan notificado de forma privada los investigadores de seguridad para los repositorios en los que esté habilitado el informe privado de vulnerabilidades.
permissions: 'Anyone with admin permissions to a repository can see, review, and manage privately-reported vulnerabilities for the repository.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Manage vulnerability reports
ms.openlocfilehash: 942533788dc6ad9280ddc023f583462c7a0ff7f8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160359'
---
{% data reusables.security-advisory.private-vulnerability-reporting-beta %}

{% data reusables.security-advisory.private-vulnerability-reporting-enable %}

## Acerca de la creación de informes privados de una vulnerabilidad de seguridad

Los informes de vulnerabilidades privados facilitan a los investigadores de seguridad notificar las vulnerabilidades directamente mediante un formulario sencillo. 

Cuando un investigador de seguridad notifica una vulnerabilidad de forma privada, se te notifica y puedes optar por aceptarla, formular más preguntas o rechazarla. Si aceptas el informe, estarás a punto para colaborar en una corrección de la vulnerabilidad en privado con el investigador de seguridad.

## Administración de vulnerabilidades de seguridad que se notifican de forma privada

{% data variables.product.prodname_dotcom %} envía una notificación a los mantenedores del repositorio cuando los investigadores de seguridad informan de forma privada sobre vulnerabilidades en su repositorio y envía notificaciones si los mantenedores observan el repositorio o si tienen notificaciones habilitadas para el repositorio. Para más información, vea "[Configuración de notificaciones](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
1. Haz clic en el aviso que quieras revisar. Un aviso que se notifique de forma privada tendrá el estado `Needs triage`.
  
   ![Captura de pantalla en la que muestra un ejemplo de lista de avisos](/assets/images/help/security/advisory-list.png)
   
2. Revisa detenidamente el informe. Puede:
   - Colabora con el investigador de seguridad para realizar una revisión en privado; para ello, haz clic en **Iniciar una bifurcación privada temporal**. Esta opción te ofrece un lugar para seguir conversando con el colaborador sin cambiar el estado `Needs triage` del aviso propuesto.
   - Acepta el informe de vulnerabilidades como borrador de aviso sobre {% data variables.product.prodname_dotcom %} haciendo clic en **Aceptar y abrir como borrador**. Si eliges esta opción:
      - El informe no se hará público.
      - El informe se convertirá en un borrador de aviso de seguridad de repositorio y podrás trabajar en él de la misma manera que en cualquier otro borrador de aviso que crees.
     Para obtener más información acerca de los avisos de seguridad de repositorio, consulta "[Acerca de los avisos de seguridad de repositorio](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)".
   - Rechaza el informe haciendo clic en **Cerrar aviso de seguridad**. Siempre que sea posible, debes agregar un comentario que explique por qué no consideras el informe un riesgo de seguridad antes de cerrar el aviso.

     ![Captura de pantalla en la que se muestran las opciones disponibles para el mantenedor del repositorio al revisar un informe de vulnerabilidades enviado externamente](/assets/images/help/security/advisory-maintainer-options.png)
