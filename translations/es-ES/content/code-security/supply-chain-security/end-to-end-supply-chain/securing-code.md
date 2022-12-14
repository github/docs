---
title: Procedimientos recomendados para proteger el código en la cadena de suministro
shortTitle: Securing code
allowTitleToDifferFromFilename: true
intro: 'Instrucciones sobre cómo proteger el centro de la cadena de suministro, es decir, el código que escribes y el código del que dependes.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 9fa10b05cfeadb4e2cde37829e703fc527571c67
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184008'
---
## Acerca de esta guía

En esta guía se describen los cambios de mayor impacto que puede realizar para mejorar la seguridad del código. Cada sección detalla un cambio que puedes hacer a tus procesos para mejorar la seguridad. Los cambios de mayor impacto se enumeran primero.

## ¿Cuál es el riesgo?

Entre los principales riesgos del proceso de desarrollo se incluyen los siguientes:

- Uso de dependencias con vulnerabilidades de seguridad que un atacante podría aprovechar.
- Filtrado de credenciales de autenticación o un token que un atacante podría usar para acceder a los recursos.
- Introducción de una vulnerabilidad en el código propio que un atacante podría aprovechar.

Estos riesgos abren los recursos y proyectos a los ataque y esos riesgos pasan directamente a cualquiera que use un paquete que cree. En las secciones siguientes se explica cómo puede protegerse a sí mismo y a los usuarios de estos riesgos.

## Creación de un programa de administración de vulnerabilidades para dependencias

Puede proteger el código del que depende mediante la creación de un programa de administración de vulnerabilidades para las dependencias. De forma general, debe incluir procesos para asegurarse de que:

1. Crea un inventario de las dependencias.

1. Sabe cuándo hay una vulnerabilidad de seguridad en una dependencia.
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
1. Aplica revisiones de dependencia en las solicitudes de incorporación de cambios. {% endif %}

1. Evalúa el impacto de esa vulnerabilidad en el código y decide qué acción realizar.

### Generación automática de inventario

Como primer paso, le interesa realizar un inventario completo de las dependencias. En el gráfico de dependencias de un repositorio se muestran las dependencias de los ecosistemas admitidos. Si sincroniza las dependencias o usa otros ecosistemas, tendrá que complementarlo con datos de herramientas de terceros, o bien enumerar las dependencias manualmente. Para más información, vea "[Acerca del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

### Detección automática de vulnerabilidades en dependencias

{% data variables.product.prodname_dependabot %} puede ayudarle mediante la supervisión de las dependencias y la notificación cuando contienen una vulnerabilidad conocida. {% ifversion fpt or ghec or ghes %}Incluso puedes habilitar {% data variables.product.prodname_dependabot %} para generar automáticamente solicitudes de incorporación de cambios que actualicen la dependencia a una versión segura.{% endif %} Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"{% ifversion fpt or ghec or ghes %} y "[Acerca de las actualizaciones de seguridad de Dependabot](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)"{% endif %}.
{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
### Detección automática de vulnerabilidades en solicitudes de incorporación de cambios

{% data variables.product.prodname_dependency_review_action %} aplica una revisión de dependencia en las solicitudes de incorporación de cambios, lo que facilita la visualización de si una solicitud de incorporación de cambios presentará una versión vulnerable de una dependencia en el repositorio. Cuando se detecta una vulnerabilidad, {% data variables.product.prodname_dependency_review_action %} puede bloquear la combinación de la solicitud de incorporación de cambios. Para obtener más información, consulta "[Cumplimiento de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-enforcement)."{% endif %} 
    

### Evaluación de la exposición al riesgo de una dependencia vulnerable

Cuando descubra que usa una dependencia vulnerable, por ejemplo, una biblioteca o un marco, debe evaluar el nivel de exposición del proyecto y determinar qué acción realizar. Normalmente, las vulnerabilidades se notifican con una puntuación de gravedad para mostrar la gravedad de su impacto. La puntuación de gravedad es una guía útil, pero no puede indicarle el impacto completo de la vulnerabilidad en el código.

Para evaluar el impacto de una vulnerabilidad en el código, también debe tener en cuenta cómo usa la biblioteca y determinar cuánto riesgo supone realmente para el sistema. Es posible que la vulnerabilidad forme parte de una característica que no usa, y puede actualizar la biblioteca afectada y continuar con el ciclo de versión normal. O bien, es posible que el código esté muy expuesto al riesgo y tenga actualizar la biblioteca afectada y enviar una compilación actualizada inmediatamente. Esta decisión depende de cómo use la biblioteca en el sistema y es una decisión que solo usted debe tomar.

## Protección de los tokens de comunicación

A menudo, el código necesita comunicarse con otros sistemas por una red y necesita secretos (como una contraseña o una clave de API) para autenticarse. El sistema necesita acceso a esos secretos para ejecutarse, pero se recomienda no incluirlos en el código fuente. Esto es especialmente importante para los repositorios a los que muchas personas pueden tener acceso{% ifversion not ghae %} y crítico para los repositorios públicos{% endif %}.

### Detección automática de secretos confirmados en un repositorio

{% note %}

**Nota:** {% data reusables.gated-features.secret-scanning-partner %}

{% endnote %}

{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} se asocia con muchos proveedores para detectar automáticamente cuándo se confirman o almacenan secretos en los repositorios públicos, y notificará al proveedor para que pueda tomar las medidas adecuadas a fin de asegurarse de que su cuenta sigue siendo segura. Para más información, vea "[Acerca de {% data variables.product.prodname_secret_scanning %} para patrones de asociados](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)".
{% endif %}

{% ifversion fpt %} {% data reusables.secret-scanning.fpt-GHAS-scans %} {% elsif ghec %} Si en la organización usan {% data variables.product.prodname_GH_advanced_security %}, puede habilitar {% data variables.product.prodname_secret_scanning_GHAS %} en cualquier repositorio propiedad de la organización. También puede definir patrones personalizados para detectar secretos adicionales en el nivel del repositorio, la organización o la empresa. Para más información, vea "[Acerca de {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advacned-security)".
{% else %} Puede configurar {% data variables.product.prodname_secret_scanning %} para comprobar si hay secretos emitidos por muchos proveedores de servicios y notificarle cuándo se detecta alguno. También puede definir patrones personalizados para detectar secretos adicionales en el nivel del repositorio, la organización o la empresa. Para más información, vea "[Acerca del examen de secretos](/code-security/secret-scanning/about-secret-scanning)" y "[Patrones de examen de secretos](/code-security/secret-scanning/secret-scanning-patterns)".
{% endif %}

### Almacenamiento seguro de secretos que se usan en {% data variables.product.product_name %}

{% ifversion fpt or ghec %} Además del código, es probable que tenga que usar secretos en otros lugares. Por ejemplo, para permitir que los flujos de trabajo de {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %} o el entorno de desarrollo de {% data variables.product.prodname_github_codespaces %} se comuniquen con otros sistemas. Para más información sobre cómo almacenar y usar secretos de forma segura, vea "[Secretos cifrados en acciones](/actions/security-guides/encrypted-secrets)", "[Administración de secretos cifrados para Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)" y "[Administración de secretos cifrados para codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".
{% endif %}

{% ifversion ghes or ghae %} Además de en el código, es probable que tengas que usar secretos en otros lugares. Por ejemplo, para permitir que los flujos de trabajo de {% data variables.product.prodname_actions %}{% ifversion ghes %} o {% data variables.product.prodname_dependabot %}{% endif %} se comuniquen con otros sistemas. Para obtener más información sobre cómo almacenar y usar secretos de forma segura, consulta "[Secretos cifrados en acciones](/actions/security-guides/encrypted-secrets){% ifversion ghes %}" y "[Administración de secretos cifrados para Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".{% else %}."{% endif %} {% endif %}

## Mantener los patrones de programación vulnerables fuera del repositorio

{% note %}

**Nota:** {% data reusables.gated-features.code-scanning %}

{% endnote %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Creación de un proceso de revisión de solicitudes de incorporación de cambios

Para mejorar la calidad y la seguridad del código, asegúrese de que todas las solicitudes de incorporación de cambios se revisen y prueben antes de combinarlas. {% data variables.product.prodname_dotcom %} tiene muchas características que puede usar para controlar el proceso de revisión y combinación. Para empezar, vea "[Acerca de las ramas protegidas](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)".

### Examen del código en busca de patrones vulnerables

A menudo, es difícil que los revisores detecten patrones de código no seguros sin ayuda. Además de examinar el código en busca de secretos, puede comprobar si hay patrones asociados a vulnerabilidades de seguridad. Por ejemplo, una función que no es segura para memoria o no puede aplicar escape a la entrada de usuario que podría dar lugar a una vulnerabilidad de inyección. {% data variables.product.prodname_dotcom %} ofrece varias maneras diferentes de abordar cómo y cuándo se examina el código. Para empezar, vea "[Acerca del análisis de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)".

## Pasos siguientes

- "[Protección de la cadena de suministro de un extremo a otro](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Procedimientos recomendados para proteger las cuentas](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Procedimientos recomendados para proteger el sistema de compilación](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"
