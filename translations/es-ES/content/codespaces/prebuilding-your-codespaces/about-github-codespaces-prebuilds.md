---
title: Acerca de las precompilaciones de GitHub Codespaces
shortTitle: About prebuilds
intro: 'Las precompilaciones de {% data variables.product.prodname_github_codespaces %} ayudan a acelerar la creación de codespaces para repositorios grandes o complejos.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
ms.openlocfilehash: eecb77b541cc735fcf788fbc5da6960cabad899d
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191922'
---
## Información general

{% data reusables.codespaces.prebuilds-definition %}

Si la creación de un codespace para un repositorio actualmente tarda más de 2 minutos, es probable que el uso de precompilaciones te beneficie. Esto se debe a que, con una precompilación, cualquier código fuente, extensiones del editor, dependencias del proyecto, comandos y configuraciones ya se han descargado, instalado y aplicado antes de crear un codespace. 

De manera predeterminada, siempre que insertes cambios en el repositorio, {% data variables.product.prodname_github_codespaces %} usa {% data variables.product.prodname_actions %} para actualizar automáticamente las precompilaciones.

Cuando las precompilaciones estén disponibles para una rama determinada de un repositorio, un archivo de configuración de contenedor de desarrollo determinado y para la región, verás la etiqueta "{% octicon "zap" aria-label="The zap icon" %} Listo para precompilación" en la lista de opciones de tipos de máquinas al crear un codespace. Si todavía se está creando una precompilación, verás la etiqueta "{% octicon "history" aria-label="The history icon" %} Precompilación en curso". Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

![La caja de diálogo para elegir un tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

Al crear un codespace a partir de una plantilla en la página "Tus codespaces", {% data variables.product.prodname_dotcom %} puedes usar automáticamente una precompilación para acelerar el tiempo de creación. Para obtener más información sobre las plantillas, consulta "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

## Proceso de precompilación

Para crear una precompilación, establezca una configuración de precompilación. Al guardar la configuración, se ejecuta un flujo de trabajo de {% data variables.product.prodname_actions %} para crear cada una de las precompilaciones necesarias; con un flujo de trabajo por precompilación. Los flujos de trabajo también se ejecutan cada vez que es necesario actualizar las precompilaciones de la configuración. Esto puede ocurrir a intervalos programados, en inserciones en un repositorio habilitado para precompilación o al cambiar la configuración del contenedor de desarrollo. Para obtener más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".  

Cuando se ejecuta un flujo de trabajo de configuración de precompilación, {% data variables.product.prodname_dotcom %} crea un codespace temporal, realizando operaciones de configuración hasta e incluyendo los comandos `onCreateCommand` y `updateContentCommand` en el archivo `devcontainer.json`. No se ejecutan comandos `postCreateCommand` durante la creación de un precompilación. Para obtener más información sobre estos comandos, consulte la [`devcontainer.json` referencia](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) en la documentación de {% data variables.product.prodname_vscode_shortname %}. Después, se toma y almacena una instantánea del contenedor generado.

Al igual que con otros flujos de trabajo de {% data variables.product.prodname_actions %}, la ejecución de flujo de trabajo de configuración de precompilación consumirá algunos de los minutos de {% data variables.product.prodname_actions %} incluidos en la cuenta, si tienes alguno, o incurrirá en cargos por minutos de {% data variables.product.prodname_actions %}. El almacenamiento de precompilaciones de codespace se factura de la misma manera que el almacenamiento de codespaces activos o detenidos. Para más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)".

Al crear un codespace a partir de una precompilación, {% data variables.product.prodname_dotcom %} descarga la instantánea de contenedor existente del almacenamiento y la implementa en una máquina virtual nueva, completando los comandos restantes especificados en la configuración del contenedor de desarrollo. Dado que ya se han realizado muchas operaciones, como clonar el repositorio, la creación de un codespace a partir de una precompilación puede ser considerablemente más rápida que la creación de uno sin una precompilación. Esto se aplica cuando el repositorio es grande o los comandos `onCreateCommand` tardan mucho tiempo en ejecutarse.

## Acerca de la inserción de cambios en ramas habilitadas para precompilación

De manera predeterminada, cada inserción en una rama que tiene una configuración de precompilación da como resultado una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %} administrada por {% data variables.product.prodname_dotcom %} para actualizar la precompilación. El flujo de trabajo de precompilación tiene un límite de simultaneidad de una ejecución de flujo de trabajo a la vez para una configuración de precompilación determinada, a menos que se realicen cambios que afecten a la configuración del contenedor de desarrollo para el repositorio asociado. Para más información, vea "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". Si una ejecución ya está en curso, la ejecución del flujo de trabajo que se ha puesto en cola más recientemente se ejecutará después, una vez que se complete la ejecución actual. 

Con la precompilación establecida para actualizarse en cada inserción, si hay inserciones muy frecuentes en el repositorio, las actualizaciones de precompilación se producirá al menos con la misma frecuencia con la que se tarda en ejecutar el flujo de trabajo de precompilación. Es decir, si la ejecución del flujo de trabajo suele tardar una hora en completarse, se crearán precompilaciones para el repositorio aproximadamente cada hora, si la ejecución se ejecuta correctamente, o con más frecuencia si se han realizado inserciones que cambian la configuración del contenedor de desarrollo en la rama.

Por ejemplo, imagine que se realizan cinco inserciones consecutivas en una rama que tiene una configuración de precompilación. En esta situación:

* Se inicia una ejecución de flujo de trabajo para la primera inserción, a fin de actualizar la precompilación.
* Si las cuatro inserciones restantes no afectan a la configuración del contenedor de desarrollo, sus ejecuciones de flujo de trabajo se ponen en cola en un estado "pendiente". 
  
  Si alguna de las cuatro inserciones restantes cambia la configuración del contenedor de desarrollo, el servicio no la omitirá y ejecutará inmediatamente el flujo de trabajo de creación de la precompilación, y la actualizará en consecuencia si se realiza correctamente. 

* Una vez que se complete la primera ejecución, las ejecuciones de flujo de trabajo para las inserciones 2, 3 y 4 se cancelarán, y el último flujo de trabajo en cola (para la inserción 5) se ejecutará y actualizará la precompilación. 
