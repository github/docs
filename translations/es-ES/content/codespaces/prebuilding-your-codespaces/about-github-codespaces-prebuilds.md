---
title: Acerca de las precompilaciones de GitHub Codespaces
shortTitle: About prebuilds
intro: Las precompilaciones de Codespaces ayudan a acelerar la creación de codespaces para repositorios grandes o complejos.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
ms.openlocfilehash: f08b4a1b691f5eaa55fe9126e1d74feeeff2188e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147548108'
---
## Información general

La precompilación de codespaces aumenta la productividad y permite acceder más rápido al codespace, sobre todo si el repositorio es grande o complejo y los nuevos codespaces tardan más de dos minutos en iniciarse. Esto se debe a que cualquier código fuente, extensiones del editor, dependencias del proyecto, comandos y configuraciones ya se han descargado, instalado y aplicado antes de crear un codespace para el proyecto. Una precompilación se puede considerar una plantilla "lista para usar" para codespace. 

De manera predeterminada, siempre que insertes cambios en el repositorio, {% data variables.product.prodname_github_codespaces %} usa {% data variables.product.prodname_actions %} para actualizar automáticamente las precompilaciones.

Cuando las precompilaciones estén disponibles para una rama determinada de un repositorio, un archivo de configuración de contenedor de desarrollo determinado y para la región, verás la etiqueta "{% octicon "zap" aria-label="The zap icon" %} Listo para precompilación" en la lista de opciones de tipos de máquinas al crear un codespace. Si todavía se está creando una precompilación, verás la etiqueta "{% octicon "history" aria-label="The history icon" %} Precompilación en curso". Para obtener más información, consulte "[Creación de un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

![La caja de diálogo para elegir un tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

## Proceso de precompilación

Para crear una precompilación, establezca una configuración de precompilación. Al guardar la configuración, se ejecuta un flujo de trabajo de {% data variables.product.prodname_actions %} para crear cada una de las precompilaciones necesarias; con un flujo de trabajo por precompilación. Los flujos de trabajo también se ejecutan cada vez que es necesario actualizar las precompilaciones de la configuración. Esto puede ocurrir a intervalos programados, en inserciones en un repositorio habilitado para precompilación o al cambiar la configuración del contenedor de desarrollo. Para obtener más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".  

Cuando se ejecuta un flujo de trabajo de configuración de precompilación, {% data variables.product.prodname_dotcom %} crea un codespace temporal, realizando operaciones de configuración hasta e incluyendo los comandos `onCreateCommand` y `updateContentCommand` en el archivo `devcontainer.json`. No se ejecutan comandos `postCreateCommand` durante la creación de un precompilación. Para obtener más información sobre estos comandos, consulte la [`devcontainer.json` referencia](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) en la documentación de {% data variables.product.prodname_vscode_shortname %}. Después, se toma y almacena una instantánea del contenedor generado.

Al crear un codespace a partir de una precompilación, {% data variables.product.prodname_dotcom %} descarga la instantánea de contenedor existente del almacenamiento y la implementa en una máquina virtual nueva, completando los comandos restantes especificados en la configuración del contenedor de desarrollo. Dado que ya se han realizado muchas operaciones, como clonar el repositorio, la creación de un codespace a partir de una precompilación puede ser considerablemente más rápida que la creación de uno sin una precompilación. Esto se aplica cuando el repositorio es grande o los comandos `onCreateCommand` tardan mucho tiempo en ejecutarse.

## Acerca de la facturación para precompilaciones de {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.billing-for-prebuilds-default %} Para más información sobre los precios de almacenamiento de {% data variables.product.prodname_codespaces %}, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)". 

{% data reusables.codespaces.billing-for-prebuilds-reducing %} 

El uso de codespaces creados con precompilaciones se cobra a la misma frecuencia que los codespaces normales.

## Acerca de la inserción de cambios en ramas habilitadas para precompilación

De manera predeterminada, cada inserción en una rama que tiene una configuración de precompilación da como resultado una ejecución de flujo de trabajo de acciones administrada por {% data variables.product.prodname_dotcom %} para actualizar la precompilación. El flujo de trabajo de precompilación tiene un límite de simultaneidad de una ejecución de flujo de trabajo a la vez para una configuración de precompilación determinada, a menos que se realicen cambios que afecten a la configuración del contenedor de desarrollo para el repositorio asociado. Para más información, vea "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". Si una ejecución ya está en curso, la ejecución del flujo de trabajo que se ha puesto en cola más recientemente se ejecutará después, una vez que se complete la ejecución actual. 

Con la precompilación establecida para actualizarse en cada inserción, si hay inserciones muy frecuentes en el repositorio, las actualizaciones de precompilación se producirá al menos con la misma frecuencia con la que se tarda en ejecutar el flujo de trabajo de precompilación. Es decir, si la ejecución del flujo de trabajo suele tardar una hora en completarse, se crearán precompilaciones para el repositorio aproximadamente cada hora, si la ejecución se ejecuta correctamente, o con más frecuencia si se han realizado inserciones que cambian la configuración del contenedor de desarrollo en la rama.

Por ejemplo, imagine que se realizan cinco inserciones consecutivas en una rama que tiene una configuración de precompilación. En esta situación:

* Se inicia una ejecución de flujo de trabajo para la primera inserción, a fin de actualizar la precompilación.
* Si las cuatro inserciones restantes no afectan a la configuración del contenedor de desarrollo, sus ejecuciones de flujo de trabajo se ponen en cola en un estado "pendiente". 
  
  Si alguna de las cuatro inserciones restantes cambia la configuración del contenedor de desarrollo, el servicio no la omitirá y ejecutará inmediatamente el flujo de trabajo de creación de la precompilación, y la actualizará en consecuencia si se realiza correctamente. 

* Una vez que se complete la primera ejecución, las ejecuciones de flujo de trabajo para las inserciones 2, 3 y 4 se cancelarán, y el último flujo de trabajo en cola (para la inserción 5) se ejecutará y actualizará la precompilación. 
