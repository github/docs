---
title: Introducción a la adopción de la Seguridad Avanzada de GitHub a escala
intro: 'Puedes adoptar {% data variables.product.prodname_GH_advanced_security %} a escala en la empresa siguiendo los procedimientos recomendados de GitHub y del sector.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: Introduction
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
ms.openlocfilehash: f42a461b3c53565725d6909680fa8e6a202c0439
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110093'
---
## Acerca de estos artículos

La {% data variables.product.prodname_GH_advanced_security %} (GHAS) ayuda a los equipos a crear código más seguro de forma más rápida utilizando las herramientas integradas, tales como el análisis de secretos y el análisis de código mediante CodeQL. Para comprender las características de seguridad disponibles mediante {% data variables.product.prodname_GH_advanced_security %}, consulta "[Acerca de la Seguridad Avanzada de GitHub](/get-started/learning-about-github/about-github-advanced-security)".

La GHAS es una suite de herramientas que requiere una participación activa de los desarrolladores en toda tu empresa. Para realizar el mejor retorno de inversión para tu empresa, debes aprender cómo utilizar, aplicar y mantener la GHAS.


Creamos un enfoque gradual para las implementaciones de la GHAS que se desarrolla con las mejores prácticas de la industria y de GitHub. Esperamos que la mayoría de los clientes quieran seguir estas fases, en función de nuestra experiencia ayudando a los clientes con una implementación correcta de {% data variables.product.prodname_GH_advanced_security %}, pero es posible que tengas que modificar este enfoque para satisfacer las necesidades de tu empresa. 

La habilitación de la GHAS en una organización grande se puede dividir en seis fases principales.

1. [**Alinearse con la estrategia y los objetivos de lanzamiento**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals): piensa en qué aspecto tendrá el éxito y alinéate con la forma en que la GHAS se implementará en la empresa. Es posible que esta fase solo dure unos pocos días o una semana, pero establece una base sólida para el resto del lanzamiento.
  
2. [**Prepararse para la habilitación a escala**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale): prepara a los desarrolladores, recopila datos sobre los repositorios y asegúrate de que estás listo para la siguiente fase.
  
3. [**Programas piloto**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs): opcionalmente, pilota un lanzamiento inicial en algunos proyectos y equipos de alto impacto. Esto permitirá que un grupo inicial dentro de la empresa se familiarice con la GHAS antes de realizar el lanzamiento en el resto de la empresa. 
  
4. [**Crear documentación interna**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation): crea y comunica documentación interna para los consumidores de la GHAS. Si no se proporciona la documentación adecuada a los desarrolladores, los ingenieros de seguridad y otros usuarios que usarán la GHAS, el valor se perderá en el lanzamiento.
  
5. [**Lanzamiento y escalado de {% data variables.product.prodname_code_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning): aprovechando las API disponibles, lanza {% data variables.product.prodname_code_scanning %} por equipo y lenguaje en la empresa, mediante los datos de repositorio que recopilaste anteriormente.
  
6. [**Lanzamiento y escalado de {% data variables.product.prodname_secret_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning): lanza {% data variables.product.prodname_secret_scanning %}, que implica menos configuración y, por tanto, es más fácil de adoptar que {% data variables.product.prodname_code_scanning %}. Aun así, es fundamental tener una estrategia para controlar los resultados nuevos y antiguos.

## {% data variables.contact.github_support %} y {% data variables.product.prodname_professional_services_team %}

Si tienes alguna incidencia o pregunta durante la implementación, puedes buscar soluciones en nuestra documentación o interactuar con {% data variables.contact.github_support %}. Para obtener más información, consulta "[Acerca del soporte técnico de GitHub](/support/learning-about-github-support/about-github-support)".

Si prefieres obtener una guía durante el proceso de lanzamiento, {% data variables.product.prodname_professional_services %} puede asociarse contigo para realizar el lanzamiento e implementación correctos de {% data variables.product.prodname_GH_advanced_security %}. Ofrecemos varias opciones de guía y soporte técnico. Asimismo, también tenemos formación y seminarios intensivos profesionales disponibles para ayudar a tu empresa a optimizar el valor de {% data variables.product.prodname_GH_advanced_security %}.

Habla con tu representante de ventas para obtener más información sobre todas las opciones de servicios profesionales disponibles. Para obtener más información, contacta a {% data variables.contact.contact_enterprise_sales %}.

{% note %}

Para ver el primer artículo de esta serie, consulta "[Fase 1: Alineación con la estrategia y los objetivos de lanzamiento](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)".

{% endnote %}
