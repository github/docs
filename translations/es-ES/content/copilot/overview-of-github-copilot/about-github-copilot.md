---
title: "Acerca de GitHub\_Copilot"
intro: '{% data variables.product.prodname_copilot %} puede ayudarte a codificar ofreciendo sugerencias de estilo autocompletar. Puedes aprender cómo funciona {% data variables.product.prodname_copilot %} y qué se debe tener en cuenta al usar {% data variables.product.prodname_copilot %}.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: About GitHub Copilot
ms.openlocfilehash: 4ff4c73e61c10c2c3f75d9581bf426266122550b
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192787'
---
## Acerca de {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} es un programador de pares de IA que ofrece sugerencias de estilo autocompletar a medida que programas. Puedes recibir sugerencias de {% data variables.product.prodname_copilot %} ya sea empezando a escribir el código que quieres usar o escribiendo un comentario de lenguaje natural que describa lo que quieres que haga el código. {% data variables.product.prodname_copilot %} analiza el contexto del archivo que estás editando, así como los archivos relacionados, y ofrece sugerencias desde el editor de texto. {% data variables.product.prodname_copilot %} cuenta con la tecnología de OpenAI Codex, un nuevo sistema de inteligencia artificial creado por OpenAI.

{% data variables.product.prodname_copilot %} se entrena en todos los idiomas que aparecen en repositorios públicos. Para cada idioma, la calidad de las sugerencias que reciba puede depender del volumen y la diversidad de datos de entrenamiento para ese idioma. Por ejemplo, JavaScript está bien representado en repositorios públicos y es uno de los mejores lenguajes admitidos de {% data variables.product.prodname_copilot %}. Los lenguajes con menos representación en repositorios públicos pueden producir menos sugerencias o menos sólidas.

{% data variables.product.prodname_copilot %} está disponible como extensión en Visual Studio Code, Visual Studio, Neovim y el conjunto de IDE de JetBrains. Para más información, ve "[Introducción a {% data variables.product.prodname_copilot %}](/copilot/getting-started-with-github-copilot)".

## Uso de {% data variables.product.prodname_copilot %}

Puedes ver ejemplos reales de {% data variables.product.prodname_copilot %} en acción. Para más información, ve el sitio web de [{% data variables.product.prodname_copilot %}](https://copilot.github.com/). 

{% data variables.product.prodname_copilot %} ofrece sugerencias de un modelo que OpenAI creó a partir de miles de millones de líneas de código abierto. Como resultado, el conjunto de entrenamiento para {% data variables.product.prodname_copilot %} puede contener patrones de codificación no seguros, errores o referencias a API o expresiones obsoletas. Cuando {% data variables.product.prodname_copilot %} genera sugerencias basadas en estos datos de entrenamiento, esas sugerencias también pueden contener patrones no deseados. 

Eres responsable de garantizar la seguridad y la calidad del código. Se recomienda tomar las mismas precauciones al usar el código generado por {% data variables.product.prodname_copilot %} que tomaría al usar cualquier código que no hayas escrito. Estas precauciones incluyen pruebas rigurosas, examen de IP y seguimiento de vulnerabilidades de seguridad. {% data variables.product.company_short %} proporciona una serie de características para ayudarte a supervisar y mejorar la calidad del código, como {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_codeql %} y {% data variables.product.prodname_code_scanning %}. Todas estas características son gratuitas para su uso en repositorios públicos. Para más información, ve "[Descripción de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)" y "[Características de seguridad de {% data variables.product.company_short %}](/code-security/getting-started/github-security-features)".

{% data variables.product.prodname_copilot %} usa filtros para bloquear palabras ofensivas en las indicaciones y evitar generar sugerencias en contextos confidenciales. Estamos comprometidos a mejorar constantemente el sistema de filtros para detectar y quitar sugerencias ofensivas generadas por {% data variables.product.prodname_copilot %}, incluidas las salidas sesgadas, discriminatorias o abusivas. Si ves una sugerencia ofensiva generada por {% data variables.product.prodname_copilot %}, notifícalo directamente a copilot-safety@github.com para que podamos mejorar nuestras medidas de seguridad. 

## Acerca de la facturación para {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} es una característica de pago que requiere una suscripción mensual o anual. Las suscripciones de {% data variables.product.prodname_copilot %} pueden ser pagadas y administradas mediante una cuenta personal en {% data variables.product.prodname_dotcom_the_website %} con {% data variables.product.prodname_copilot_for_individuals %}, bien pagadas y administradas de forma centralizada mediante una cuenta empresarial en {% data variables.product.prodname_ghe_cloud %} con {% data variables.product.prodname_copilot_for_business %}.

Los alumnos, profesores y mantenedores verificados de proyectos de código abierto populares en {% data variables.product.prodname_dotcom %} pueden usar {% data variables.product.prodname_copilot_individuals_short %} de forma gratuita. Si cumples los criterios para una suscripción gratuita de {% data variables.product.prodname_copilot_individuals_short %}, se te notificará de forma automática cuando visites la página de suscripción de {% data variables.product.prodname_copilot %}. Si no cumples los criterios para una suscripción gratuita de {% data variables.product.prodname_copilot_individuals_short %}, se te ofrecerá una prueba de 60 días, después de la cual se requiere una suscripción de pago para su uso continuado. {% data variables.product.prodname_copilot_for_business %} no incluye una evaluación gratuita. Para más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)".

## Sobre la licencia del complemento {% data variables.product.prodname_copilot %} en los IDE de JetBrains

{% data variables.product.prodname_dotcom %}, Inc. es el licenciante del complemento JetBrains. El contrato de licencia de usuario final para este complemento es los [{% data variables.product.prodname_dotcom %} Condiciones de GitHub para las características y productos adicionales](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) y el uso de este complemento está sujeto a esos términos. JetBrains no tiene ninguna responsabilidad ni obligación en relación con el complemento o con dicho contrato. Al usar el complemento, se aceptan los términos anteriores.

## Información adicional

- "[{% data variables.product.company_short %} Condiciones de GitHub para las características y productos adicionales](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"{% ifversion ghec %}
- "[Declaración de privacidad de {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"{% endif %}
