---
title: Edición de avisos de seguridad en la base de avisos de GitHub
intro: 'Puedes enviar mejoras a cualquier asesoría publicada en {% data variables.product.prodname_advisory_database %}.'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
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
ms.openlocfilehash: 062779bfb9a39a651b10501c523047f3ae2805b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409415'
---
## Acerca de la edición de avisos en {% data variables.product.prodname_advisory_database %}
Los avisos de seguridad de {% data variables.product.prodname_advisory_database %} en [github.com/advisories](https://github.com/advisories) se consideran avisos globales. Cualquiera puede sugerir mejoras en cualquier aviso de seguridad global de {% data variables.product.prodname_advisory_database %}. Puede editar o agregar cualquier detalle, incluidos los ecosistemas adicionales afectados, el nivel de gravedad o la descripción de quién se ha visto afectado. El equipo de protección de {% data variables.product.prodname_security %} revisará las mejoras enviadas y las publicará en {% data variables.product.prodname_advisory_database %} si se aceptan.
{% ifversion fpt or ghec %} Solo los propietarios y administradores del repositorio pueden editar avisos de seguridad de nivel de repositorio. Para obtener más información, consulta "[Edición de un aviso de seguridad de repositorio](/code-security/security-advisories/editing-a-security-advisory)".{% endif %}

## Edición de avisos en la base de avisos de GitHub

1. Vaya a https://github.com/advisories.
2. Seleccione el aviso de seguridad al que quiera contribuir.
3. En el lado derecho de la página, haga clic en el vínculo **Sugerir mejoras para esta vulnerabilidad**.
   ![Vínculo Sugerir mejoras](/assets/images/help/security/suggest-improvements-to-advisory.png)
4. En el formulario de contribución, realice las mejoras deseadas. Puede editar o agregar cualquier detalle.
5. Cuando termine de editar el aviso, haga clic en **Enviar mejoras**.
6. Una vez que envíe las mejoras, el equipo de protección de {% data variables.product.prodname_security %} creará una solicitud de incorporación de cambios que contenga los cambios para su revisión en [github/advisory-database](https://github.com/github/advisory-database). Si el aviso se ha originado en un repositorio de {% data variables.product.prodname_dotcom %}, también etiquetaremos al publicador original para obtener comentarios opcionales. Puede ver la solicitud de incorporación de cambios y obtener notificaciones cuando se actualice o se cierre.

También puede abrir una solicitud de incorporación de cambios directamente en un archivo de aviso en el repositorio [github/advisory-database](https://github.com/github/advisory-database). Para más información, vea las [instrucciones de contribución](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md). 

{% ifversion security-advisories-ghes-ghae %}
## Edición de avisos de {% data variables.product.product_location %}

Si tienes {% data variables.product.prodname_github_connect %} habilitado para {% data variables.product.product_location %}, podrás ver avisos agregando `/advisories` a la dirección URL de la instancia. 

1. Vaya a `https://HOSTNAME/advisories`.
2. Seleccione el aviso de seguridad al que quiera contribuir.
3. En el lado derecho de la página, haz clic en el vínculo **Sugerir mejoras para esta vulnerabilidad en Github.com**. "¿Ha olvidado la contraseña?" Se abre una nueva pestaña con el mismo aviso de seguridad en {% data variables.product.prodname_dotcom_the_website %}.
![Vínculo Sugerir mejoras](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. Edita el aviso, siguiendo los pasos cuatro a seis de "[Edición de avisos en la base de datos de avisos de GitHub](#editing-advisories-in-the-github-advisory-database)" anterior.
{% endif %}
