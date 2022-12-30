---
title: Edición de avisos de seguridad en la base de avisos de GitHub
intro: 'Puedes enviar mejoras a cualquier asesoría publicada en {% data variables.product.prodname_advisory_database %}.'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
shortTitle: Edit Advisory Database
ms.openlocfilehash: 7cfe2ff49c830922457ef5192ca0db7d326e1388
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114166'
---
## Edición de asesorías en {% data variables.product.prodname_advisory_database %}

Las asesorías den {% data variables.product.prodname_advisory_database %} son asesorías de seguridad global. Para más información sobre las asesorías de seguridad global, consulta "[Acerca de las asesorías de seguridad global](/code-security/security-advisories/global-security-advisories/about-global-security-advisories)".

Cualquiera puede sugerir mejoras en cualquier aviso de seguridad global de {% data variables.product.prodname_advisory_database %}. Puede editar o agregar cualquier detalle, incluidos los ecosistemas adicionales afectados, el nivel de gravedad o la descripción de quién se ha visto afectado. El equipo de protección de {% data variables.product.prodname_security %} revisará las mejoras enviadas y las publicará en {% data variables.product.prodname_advisory_database %} si se aceptan.
{% ifversion fpt or ghec %} Solo los propietarios y administradores del repositorio pueden editar avisos de seguridad de nivel de repositorio. Para obtener más información, consulta "[Edición de un aviso de seguridad de repositorio](/code-security/security-advisories/editing-a-security-advisory)".{% endif %}


1. Vaya a https://github.com/advisories.
1. Seleccione el aviso de seguridad al que quiera contribuir.
1. En el lado derecho de la página, haga clic en el vínculo **Sugerir mejoras para esta vulnerabilidad**.
   
   ![Captura de pantalla del vínculo de sugerencias de mejoras](/assets/images/help/security/suggest-improvements-to-advisory.png)

1. En el formulario "Mejorar la asesoría de seguridad", realiza las mejoras deseadas. Puedes editar o agregar cualquier detalle. {% ifversion fpt or ghec %} Para obtener información sobre cómo especificar correctamente información sobre el formulario, incluidas las versiones afectadas, consulta "[Procedimientos recomendados para escribir asesorías de seguridad del repositorio](/code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories)". {% endif %}{% ifversion security-advisories-reason-for-change %}
1. En **Motivo del cambio**, explica por qué deseas realizar esta mejora. Si incluyes vínculos a material auxiliar, esto ayudará a nuestros revisores.
   
   ![Captura de pantalla del campo del motivo del cambio](/assets/images/help/security/security-advisories-suggest-improvement-reason.png){% endif %}

1. Cuando termine de editar el aviso, haga clic en **Enviar mejoras**.
1. Una vez que envíe las mejoras, el equipo de protección de {% data variables.product.prodname_security %} creará una solicitud de incorporación de cambios que contenga los cambios para su revisión en [github/advisory-database](https://github.com/github/advisory-database). Si el aviso se ha originado en un repositorio de {% data variables.product.prodname_dotcom %}, también etiquetaremos al publicador original para obtener comentarios opcionales. Puede ver la solicitud de incorporación de cambios y obtener notificaciones cuando se actualice o se cierre.

También puede abrir una solicitud de incorporación de cambios directamente en un archivo de aviso en el repositorio [github/advisory-database](https://github.com/github/advisory-database). Para más información, vea las [instrucciones de contribución](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md). 

{% ifversion security-advisories-ghes-ghae %}
## Edición de asesorías de {% data variables.location.product_location %}

Si tienes {% data variables.product.prodname_github_connect %} habilitado para {% data variables.location.product_location %}, podrás ver asesorías agregando `/advisories` a la dirección URL de la instancia. 

1. Vaya a `https://HOSTNAME/advisories`.
2. Seleccione el aviso de seguridad al que quiera contribuir.
3. En el lado derecho de la página, haz clic en el vínculo **Sugerir mejoras para esta vulnerabilidad en {% data variables.product.prodname_dotcom_the_website %}.** "¿Ha olvidado la contraseña?" Se abre una nueva pestaña con el mismo aviso de seguridad en {% data variables.product.prodname_dotcom_the_website %}.
![Vínculo Sugerir mejoras](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. Edita el aviso, siguiendo los pasos cuatro a seis de "[Edición de avisos en la base de datos de avisos de GitHub](#editing-advisories-in-the-github-advisory-database)" anterior.
{% endif %}
