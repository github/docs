---
title: About GitHub Codespaces prebuilds
shortTitle: Acerca de las precompilaciones
intro: Las precompilaciones de codespaces te ayudan a acelerar la creación de codespaces nuevos para repositorios grandes o complejos.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
---

## Resumen

El precompilar tus codespaces te permite ser más productivo y acceder a ellos más rápido, particularmente si tu repositorio es grande o complejo y los codespaces nuevos actualmente toman más de 2 minutos en iniciar. Esto es porque cualquier código fuente, extensiones del editor, dependencias de proyecto, comandos y configuraciones ya se han descargado, instalado y aplicado antes de que crees un codespace para tu proyecto. Piensa en la precompilación como una plantilla "lista para utilizarse" para un codespace.

Predeterminadamente, cada que subas cambios a tu repositorio, {% data variables.product.prodname_github_codespaces %} utiliza {% data variables.product.prodname_actions %} para actualizar tus precompilaciones automáticamente.

Cuando las precompilaciones están disponibles para una rama en particular de un repositorio y para tu región, verás la etiqueta "{% octicon "zap" aria-label="The zap icon" %} Prebuild ready" en la lista de opciones de tipo de máquina al crear un codespace. Si se está creando una precompilación, verás la etiqueta "{% octicon "history" aria-label="The history icon" %} Prebuild in progress". Para obtener más información, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

![La caja de diálogo para elegir un tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% note %}

{% data reusables.codespaces.prebuilds-not-available %}

{% endnote %}

## Acerca de la facturación para las precompilaciones de {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.billing-for-prebuilds %} Para obtener más detalles sobre los precios de almacenamiento de {% data variables.product.prodname_codespaces %}, consulta la sección "[Acerca de la facturación para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

El utilizar los codespaces creados utilizando precompilaciones se carga en la misma tasa que los codespaces normales.

## Acerca de subir cambios a las ramas habilitadas con precompilación

Predeterminadamente, cada subida a una rama que tenga una configuración de precompilación da como resultado una ejecución de flujo de trabajo de acciones administrada por {% data variables.product.prodname_dotcom %} para actualizar la plantilla de precompilación. El flujo de trabajo de precompilación tiene un límite de concurrencia de una ejecución de flujo de trabajo a la vez para una configuración de precompilación específica, a menos de que se hayan hecho cambios que afecten la configuración del contenedor dev para el repositorio asociado. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". Si una ejecución ya está en curso, la ejecución del flujo de trabajo que se puso en cola más recientemente será la siguiente que se ejecute después de que se complete la ejecución actual.

Con la plantilla de precompilación configurada para actualizarse en cada subida, esto significa que si hay subidas muy frecuentes a tu repositorio, las actualizaciones a la plantilla de precompilación ocurrirán por lo menos tan a menudo como se necesite ejecutar el flujo de trabajo de precompilación. Es decir, si la ejecución de tu flujo de trabajo habitualmente toma una hora en completarse, las precompilaciones se crearán para tu repositorio por mucho cada hora, si la ejecución tiene éxito, o más a menudo si fueron subidas que cambiaron la configuración del contenedor dev en la rama.

Pro ejemplo, imaginemos que se realizan 5 subidas, rápidamente una después de la otra, contra una rama que tiene una configuración de precompilación. En esta situación:

* Una ejecución de flujo de trabajo inició para la primer subida, para actualizar la plantilla de precompilación.
* Si las 4 subidas restantes no afectan la configuración del contenedor dev, las ejecuciones de flujo de trabajo de estas se ponen en cola en un estado "pendiente".

  Si cualquiera de estas 4 subidas restantes cambian la configuración del contenedor dev, entonces el servicio no la omitirá y ejecutará inmediatamente el flujo de trabajo de creación de la precompilación, actualizándola en consecuencia si tiene éxito.

* Una vez que se complete la primera ejecución, se cancelarán las ejecuciones de flujo de trabajo para las subidas 2, 3 y 4 y el flujo de trabajo que sea el último en la cola (para la subida 5) se ejecutará y actualizará la plantilla de precompilación. 
