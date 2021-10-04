---
title: Acerca de la telemetría del Copiloto de GitHub
intro: 'El Copiloto de {% data variables.product.prodname_dotcom %} recolecta y confía en datos de telemetría adicionales más allá de lo que recolectan otros productos y servicios de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
---

## Qué datos se recolectan
El Copiloto de {% data variables.product.prodname_dotcom %} recolecta la actividad del editor de Visual Studio Code del usuario, lo liga con una marca de tiempo y con metadatos. Estos metadatos consisten en la extensión de ajustes y de los metadatos estándar que recolecta el [Paquete extendido de telemetría de Visual Studio Code](https://www.npmjs.com/package/vscode-extension-telemetry):

* ID de máquina de Visual Studio Code (identificador pseudonimizado)
* ID de sesión de Visual Studio Code (Identificador Pseudonimizado)
* Versión de Visual Studio Code
* [Geoubicación desde la dirección IP](https://docs.microsoft.com/en-us/azure/azure-monitor/app/ip-collection?tabs=net) (país, estado/provincia y ciudad, pero no la dirección IP misma)
* Sistema operativo y versión
* Versión de extensión
* La IU de VS Code (web o escritorio)

La actividad que se recolecta consiste en eventos que se activan cuando:

* Ocurre un error (graba el tipo de error y el fondo relevante; por ejemplo, si es un error de autenticación, se graba la fecha de vencimiento de la llave)
* Se accede a nuestros modelos para pedir sugerencias de código (este graba el estado del editor como la posición del cursor y los fragmentos de código); esto incluye los casos en los que el usuario toma una acción para solicitar las sugerencias de código
* Las sugerencias de código se reciben o se muestran (se graban las sugerencias, post-procesamiento y metadatos como la certeza y latencia del modelo)
* Se redactan las sugerencias de código debido a los filtros que garantizan la seguridad de la IA
* El usuario actúa de acuerdo a las sugerencias de código (por ejemplo, para aceptarlas o rechazarlas)
* El usuario actuó de acuerdo con las sugerencias de código y luego registra si o cómo persistieron en este

## Cómo se utilizan lso datos
{% data variables.product.company_short %} solo utilizará estos datos para:

* Mejorar directamente el producto, incluyendo la valoración de estrategias diversas para procesar y predecir las sugerencias que los usuarios podrían encontrar útiles
* Evaluar el producto directamente, por ejemplo, midiendo el impacto positivo que tiene en el usuario
* Mejorr los modelos de generación de código subyacentes, por ejemplo, proporcionando ejemplos positivos y negativos (pero siempre de tal forma que tu código privado no se utilice como entrada para sugerir código para otros usuarios del Copiloto de {% data variables.product.prodname_dotcom %})
* Para guiar productos relacionados cercanamente con {% data variables.product.prodname_dotcom %}
* Investigando y detectando el abuso potencial del servicio del Copiloto de {% data variables.product.prodname_dotcom %}
* Otros propósitos relacionados con la mejora del servicio de Copiloto de {% data variables.product.prodname_dotcom %}

## Cómo se comparten los datos
Los datos de telemetría se almacenan de forma segura en los sistemas de {% data variables.product.prodname_dotcom %} con el cifrado adecuado implementado.

Sabemos que las acciones que editan los usuarios y los fragmentos de código fuente son datos muy sensibles y que el acceso se controla estrictamente. Solo las siguientes entidades pueden acceder a los datos: (1) personal denominado de {% data variables.product.company_short %} (empleados y contratistas) que trabajen en el equipo copiloto de {% data variables.product.company_short %} o en el equipo de salud de la plataforma de {% data variables.product.company_short %}, (2) personal selecto de Microsoft (empleados y contratistas) que trabajen en o con el equipo copiloto de {% data variables.product.company_short %} y (3), empleados selectos de OpenAI que trabajen en el copiloto de {% data variables.product.company_short %}.
