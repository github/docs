---
title: 'Fase 1: Alinear la estrategia de lanzamiento y los objetivos'
intro: 'Antes de habilitar {% data variables.product.prodname_code_scanning %} y {% data variables.product.prodname_secret_scanning %}, planea cómo se debe lanzar GHAS en toda la empresa.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 1. Align on strategy
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b2677cf11c300ad657f9bd6b8862fb1f292c2fb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110088'
---
{% note %}

Este artículo forma parte de una serie sobre la adopción de {% data variables.product.prodname_GH_advanced_security %} a escala. Para ver la introducción a esta serie, consulta "[Introducción a la adopción de {% data variables.product.prodname_GH_advanced_security %} a escala](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)".

{% endnote %}

### Establecimiento de objetivos claros para el lanzamiento de tu empresa

Para crear una base para la dirección del lanzamiento de tu empresa, describe los objetivos de GHAS dentro de tu empresa y comunícalos a tu equipo. Los objetivos pueden ser simples o complejos, siempre y cuando el equipo esté alineado. Si necesitas ayuda para establecer tus objetivos, {% data variables.product.prodname_professional_services %} puede ayudarte dándote recomendaciones con base en nuestra experiencia con tu compañía y con otros clientes.

Aquí tienes algunos ejemplos de alto nivel de cómo podrían verse tus metas para implementar la GHAS:

  - **Reducción del número de vulnerabilidades**: esto puede ser general o porque la empresa se haya visto afectada recientemente por alguna vulnerabilidad significativa, que consideres que se podría haber evitado con una herramienta como GHAS.
  - **Identificación de los repositorios de riesgo alto**: es posible que algunas empresas solo quieran centrarse en los repositorios que contengan el mayor riesgo, lo que les permite reducir el riesgo corrigiendo las vulnerabilidades.
  -  **Aumento de las tasas de corrección**: para evitar que se acumule la deuda de seguridad, puede que quieras impulsar la adopción de los hallazgos de los desarrolladores y garantizar que estas vulnerabilidades se corrigen de forma oportuna.  
  - **Satisfacción de los requisitos de cumplimiento**: por ejemplo, muchas empresas de asistencia sanitaria usan GHAS para evitar la exposición de PHI (información de salud personal).
  - **Prevención de la filtración de secretos**: muchas empresas quieren evitar que se filtre información crítica, como claves de software o datos financieros.

### Lidera el lanzamiento con tus grupos de seguridad y desarrollo

Las empresas que implican a sus equipos de seguridad y desarrollo en sus lanzamientos de GHAS tienden a ser más exitosas que las empresas que solo implican a su grupo de seguridad y esperan a que el piloto se haya llevado a cabo para incluir a los equipos de desarrollo. 

La GHAS lleva un enfoque centrado en los desarrolladores para abordar la seguridad del software, integrándose fácilmente en el flujo de trabajo de estos. Tener una representación clave de tu grupo de desarrollo en las fases tempranas del proceso disminuirá el riesgo del lanzamiento y fomentará la participación organizacional.

La participación de los grupos de desarrollo al principio, idealmente desde el momento de la compra, ayuda a las empresas a utilizar GHAS para abordar problemas de seguridad en fases tempranas del proceso de desarrollo. Cuando ambos grupos trabajan juntos, logran la alineación al principio del proceso, eliminan los silos, crean y fortalecen sus relaciones de trabajo y asumen más responsabilidad en el lanzamiento. 


### Información sobre GHAS

Para establecer expectativas realistas para el lanzamiento, asegúrate de que todas las partes interesadas comprendan los siguientes hechos clave sobre el funcionamiento de GHAS.

#### 1. La GHAS es una suite de herramientas de seguridad que requiere de una participación activa para proteger tu código

La GHAS es una suite de herramientas que incrementa su valor cuando la configuras, mantienes, utilizas en flujos de trabajo diariamente y la combinas con otras herramientas. 

#### 2. La GHAS necesitará ajustes tan pronto la implementes

Después de configurar la GHAS en los repositorios, deberás configurar la GHAS para satisfacer las necesidades de tu empresa. El análisis de código en particular requiere una personalización adicional, como evaluar los resultados iniciales y realizar ajustes para análisis futuros. Muchos clientes se encuentran con que los análisis iniciales devuelven resultados limitados o irrelevantes hasta que el análisis de código se ajusta en función del modelo de amenazas de la aplicación.

#### 3. Las herramientas de la GHAS son más eficaces cuando se usan juntas e integradas en el programa de seguridad de aplicaciones

La GHAS tiene su mayor efectividad cuando se utilizan todas las herramientas en conjunto. La eficacia del programa de seguridad de aplicaciones mejora aún más mediante la integración de la GHAS con otras herramientas y actividades, como las pruebas de penetración y los análisis dinámicos. Te recomendamos que siempre utilices capas de protección múltiples.

#### 4. Algunas empresas usan consultas de {% data variables.product.prodname_codeql %} personalizadas para personalizar y dirigir los resultados del análisis 

El análisis de código cuenta con la tecnología de {% data variables.product.prodname_codeql %}, el motor de análisis de código más potente del mundo. Para muchos de nuestros clientes, el conjunto de consultas base y las consultas adicionales disponibles en la comunidad son más que suficientes. Sin embargo, es posible que otras empresas requieran consultas de {% data variables.product.prodname_codeql %} personalizadas para dirigirse a resultados diferentes o reducir la cantidad de falsos positivos.

Si tu empresa está interesada en las consultas de {% data variables.product.prodname_codeql %} personalizadas, te recomendamos que completes primero el lanzamiento e implementación de la GHAS. Después, cuando la empresa esté lista, {% data variables.product.prodname_professional_services %} podrá ayudarte a navegar por los requisitos y garantizar que la empresa necesite las consultas personalizadas.  

#### 5. {% data variables.product.prodname_codeql %} escanea todo el código base, no solo los cambios realizados en una solicitud de incorporación de cambios

Cuando el escaneo de código se ejecuta desde una solicitud de cambios, este incluirá a toda la base de código y no solo a los cambios que se realizan en la solicitud de cambios. El análisis de todo el código base es un paso importante para garantizar que los cambios se revisaron contra todas las interacciones en el código base.

{% note %}

Para ver el siguiente artículo de esta serie, consulta "[Fase 2: Preparación para la habilitación a escala](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)".

{% endnote %}
