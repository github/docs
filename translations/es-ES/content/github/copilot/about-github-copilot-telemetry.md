---
title: Acerca de la telemetría del Copiloto de GitHub
intro: 'El {% data variables.product.prodname_copilot %} recolecta y confía en datos de telemetría adicionales más allá de lo que recolectan otros productos y servicios de {% data variables.product.company_short %}.'
redirect_from:
  - /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
---

## Qué datos se recolectan

Los datos que se recolectan se describen en los "[Términos de telemetría del {% data variables.product.prodname_copilot %}](/github/copilot/github-copilot-telemetry-terms)". Adicionalmente, la extensión/aditamento del {% data variables.product.prodname_copilot %} recopila la actividad de el Ambiente de Desarrollo Integrado (IDE) del usuario, ligado con una marca de tiempo y los metadatos que recopila el paquete de telemetría de extensión/aditamento. Cuando se utiliza con Visual Studio Code, IntelliJ, NeoVM u otros IDE, el {% data variables.product.prodname_copilot %} recopila los metadatos estándar que proporcionan dichos IDE.

## Cómo {% data variables.product.company_short %} utiliza los datos

{% data variables.product.company_short %} utilizará estos datos para:

- Mejorar directamente el producto, incluyendo la valoración de estrategias diversas para procesar y predecir las sugerencias que los usuarios podrían encontrar útiles
- Evaluar el producto, por ejemplo, midiendo el impacto positivo que tiene en el usuario
- Mejorar los modelos de generación de código subyacentes, por ejemplo, proporcionando ejemplos positivos y negativos (pero siempre de tal forma que tu código privado no se utilice como entrada para sugerir código para otros usuarios del {% data variables.product.prodname_copilot %})
- Para guiar productos relacionados cercanamente con {% data variables.product.company_short %}
- Investigando y detectando el abuso potencial del servicio del {% data variables.product.prodname_copilot %}
- Otros propósitos relacionados con mejorar el servicio del {% data variables.product.prodname_copilot %}, incluyendo el poder compartir, de acuerdo a como se describe en la siguiente sección

## Cómo se comparten los datos

Los datos de telemetría se almacenan de forma segura en los sistemas de {% data variables.product.company_short %} con el cifrado adecuado implementado. Sabemos que las acciones que editan los usuarios, los fragmentos de código fuente y las URL de los repositorios, así como las rutas de archivos, son datos sensibles. En consecuencia, el acceso se controla estrictamente. Solo las siguientes entidades pueden acceder a los datos: (1) el personal denominado de {% data variables.product.company_short %} (empleados y contratistas) que trabaje en el equipo del {% data variables.product.prodname_copilot %} o en el equipo de salud de la plataforma de {% data variables.product.company_short %}, (2) el personal de Microsoft (empleados y contratistas) que trabaje con los equipos de Azure o del {% data variables.product.prodname_copilot %} y (3) los empleados de OpenAI que trabajen en el {% data variables.product.prodname_copilot %}.

