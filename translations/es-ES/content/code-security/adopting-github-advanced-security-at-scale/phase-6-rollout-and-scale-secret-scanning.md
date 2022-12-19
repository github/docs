---
title: 'Fase 6: Lanzamiento y escalado del análisis de secretos'
intro: 'Para la fase final, te centrarás en el lanzamiento de {% data variables.product.prodname_secret_scanning %}. {% data variables.product.prodname_secret_scanning_caps %} es una herramienta más sencilla de lanzar que {% data variables.product.prodname_code_scanning %}, ya que implica menos configuración, pero es fundamental tener una estrategia para controlar los resultados nuevos y antiguos.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 6. Rollout secret scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 15254d9a4d490f6eeff566cd71d94da7c6e8c467
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158761'
---
{% note %}

Este artículo forma parte de una serie sobre la adopción de {% data variables.product.prodname_GH_advanced_security %} a escala. Para ver el artículo anterior de esta serie, consulta "[Fase 5: Lanzamiento y escalado del análisis de código](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning)".

{% endnote %}

Puedes habilitar el análisis de secretos para repositorios individuales o para todos los repositorios de una organización. Para obtener más información, consulta "[Administración de la configuración de seguridad y análisis del repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" o "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

En este artículo se explica un proceso de alto nivel centrado en habilitar {% data variables.product.prodname_secret_scanning %} para todos los repositorios de una organización. Los principios que se describen en este artículo se pueden seguir aplicando incluso si adoptas el enfoque más escalonado de habilitar {% data variables.product.prodname_secret_scanning %} para repositorios individuales. 

### 1. Céntrate en los secretos recién confirmados

Al habilitar {% data variables.product.prodname_secret_scanning %}, debes centrarte en corregir las credenciales recién confirmadas detectadas por el análisis de secretos. Si te centras en limpiar las credenciales confirmadas, los desarrolladores podrían seguir insertando accidentalmente nuevas credenciales, lo que significa que el recuento total de secretos permanecerá aproximadamente al mismo nivel, no disminuirá como se prevé. Por este motivo, es esencial detener la filtración de nuevas credenciales antes de centrarse en revocar los secretos actuales.

Hay algunos enfoques para abordar las credenciales recién confirmadas, pero un enfoque de ejemplo sería el siguiente:

1. **Notificación**: usa webhooks para asegurarte de que los equipos adecuados vean las nuevas alertas de secretos lo antes posible. Un webhook se desencadena cuando se crea, se resuelve o se vuelve a abrir una alerta de secreto. Después, puedes analizar la carga del webhook e integrarla en las herramientas que tú y tu equipo uséis, como Slack, Teams, Splunk o el correo electrónico. Para obtener más información, consulta "[Acerca de los webhooks](/developers/webhooks-and-events/webhooks/about-webhooks)" y "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#secret_scanning_alert)".
2. **Seguimiento**: crea un proceso de corrección de alto nivel que funcione para todos los tipos de secretos. Por ejemplo, puedes ponerte en contacto con el desarrollador que confirmó el secreto y su responsable técnico en ese proyecto, resaltar los peligros de confirmar secretos en GitHub y pedirles que revoquen y actualicen el secreto detectado.

  {% note %}
  
  **Nota:** Este paso se puede automatizar. En el caso de grandes empresas y organizaciones con cientos de repositorios, el seguimiento manual es insostenible. Puedes incorporar la automatización en el proceso de webhook definido en el primer paso. La carga del webhook contiene información sobre el repositorio y la organización acerca del secreto filtrado. Con esta información, puedes ponerte en contacto con los mantenedores actuales del repositorio y crear un correo electrónico o mensaje para las personas responsables, o bien abrir una incidencia.
  
  {% endnote %} 
3. **Formación**: crea un documento de formación interno asignado al desarrollador que confirmó el secreto. En este documento de formación, puedes explicar los riesgos creados mediante la confirmación de secretos y dirigirlos a la información de procedimientos recomendados sobre el uso de secretos de forma segura en el desarrollo. Si un desarrollador no aprende de la experiencia y continúa confirmando secretos, podrías crear un proceso de escalación, pero la formación suele funcionar bien.

Repite los dos últimos pasos para cualquier secreto nuevo que se haya filtrado. Este proceso anima a los desarrolladores a asumir la responsabilidad de administrar los secretos usados en su código de forma segura y te permite medir la reducción de los secretos recién confirmados.

{% note %}

**Nota:** Es posible que las organizaciones más avanzadas quieran realizar la corrección automática de determinados tipos de secretos. Hay una iniciativa de código abierto denominada [Corrector automático del analizador de secretos de GitHub](https://github.com/NickLiffen/GSSAR) que puedes implementar en tu entorno de AWS, Azure o GCP y adaptar para revocar automáticamente determinados tipos de secretos en función de lo que definas como más crítico. También es una excelente manera de reaccionar a los nuevos secretos que se confirman con un enfoque más automatizado.

{% endnote %}

### 2. Corrige los secretos confirmados previamente, empezando por el más crítico

Después de haber establecido un proceso para supervisar, notificar y corregir los secretos recién publicados, puedes empezar a trabajar en los secretos confirmados antes de la introducción de {% data variables.product.prodname_GH_advanced_security %}.

La forma en que definas los secretos más críticos dependerá de los procesos e integraciones de la organización. Por ejemplo, es probable que una empresa no esté preocupada por un secreto de webhook entrante de Slack si no usa Slack. Es posible que te resulte útil empezar por centrarte en los cinco tipos de credenciales más críticos de tu organización.

Una vez que hayas decidido los tipos de secretos, puedes hacer lo siguiente:

1. Define un proceso para corregir cada tipo de secreto. El procedimiento real para cada tipo de secreto suele ser drásticamente diferente. Anota el proceso para cada tipo de secreto en un documento o knowledge base internos.
  
  {% note %}
  
  **Nota:** Al crear el proceso para revocar secretos, prueba y asigna la responsabilidad de revocar los secretos al equipo que mantiene el repositorio en lugar de un equipo central. Uno de los principios de GHAS es que los desarrolladores toman posesión de la seguridad y tienen la responsabilidad de corregir los problemas de seguridad, especialmente si los han creado.

  {% endnote %}

2. Cuando hayas creado el proceso que seguirán los equipos para revocar las credenciales, puedes intercalar información sobre los tipos de secretos y otros metadatos asociados a los secretos filtrados para poder determinar a quién debes comunicar el nuevo proceso.
  
  {% ifversion not ghae %}
  
  Puedes usar la información general de seguridad para recopilar esta información. Para obtener más información sobre el uso de la información general de seguridad, consulta "[Filtrado de alertas en los resúmenes de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)".
  
  {% endif %}
  
  Parte de la información que puede que quieras recopilar incluye la siguiente:
  
    - Organización
    - Repositorio
    - Tipo de secreto
    - Valor del secreto
    - Mantenedores en el repositorio con quienes ponerte en contacto
  
  {% note %}
  
  **Nota:** Usa la interfaz de usuario si tienes pocos secretos filtrados de ese tipo. Si tienes cientos de secretos filtrados, usa la API para recopilar la información. Para obtener más información, consulta la "[API de REST de análisis de secretos](/rest/reference/secret-scanning)".
    
  {% endnote %}

3. Después de recopilar información sobre los secretos filtrados, crea un plan de comunicación dirigido para los usuarios que mantienen los repositorios afectados por cada tipo de secreto. Puedes usar el correo electrónico, la mensajería o incluso crear incidencias de GitHub en los repositorios afectados. Si puedes usar las API que proporcionan estas herramientas para enviar las comunicaciones de forma automatizada, esto te facilitará el escalado entre varios tipos de secretos.

### 3. Expande el programa para incluir más tipos de secretos y patrones personalizados

Ahora puedes ir más allá de los cinco tipos de secretos más críticos y crear una lista más completa, con un enfoque adicional en la formación. Puedes repetir el paso anterior, corregir los secretos confirmados previamente, para los distintos tipos de secretos a los que te has dirigido.

También puedes incluir más patrones personalizados intercalados en las fases anteriores e invitar a los equipos de seguridad y a los equipos de desarrolladores a enviar más patrones, con lo que puedes establecer un proceso para enviar nuevos patrones a medida que se crean nuevos tipos de secretos. Para más información, vea "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)".

{% ifversion secret-scanning-push-protection %}

También puedes habilitar la protección de inserciones con el análisis de secretos. Una vez habilitado, el análisis de secretos comprueba si hay secretos de confianza elevada y bloquea la inserción. Para más información, vea "[Protección de inserciones para el examen de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#using-secret-scanning-as-a-push-protection-from-the-command-line)".

{% endif %}

A medida que sigas compilando los procesos de corrección para otros tipos de secretos, empieza a crear material de formación proactivo que se pueda compartir con todos los desarrolladores de GitHub de tu organización. Hasta este punto, gran parte del enfoque ha sido reactivo. Es una excelente idea cambiar la atención a ser proactivo y animar a los desarrolladores a no insertar credenciales en GitHub en primer lugar. Esto se puede lograr de varias maneras, pero crear un breve documento que explique los riesgos y las razones sería un gran punto de partida.

{% note %}

Este es el último artículo de una serie sobre la adopción de {% data variables.product.prodname_GH_advanced_security %} a escala. Si tienes preguntas o necesitas soporte técnico, consulta la sección sobre {% data variables.contact.github_support %} y {% data variables.product.prodname_professional_services_team %} en "[Introducción a la adopción de {% data variables.product.prodname_GH_advanced_security %} a escala](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale#github-support-and-professional-services)".

{% endnote %}
