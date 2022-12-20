---
title: Acerca de las precompilaciones de Codespaces
shortTitle: About prebuilds
intro: Las precompilaciones de Codespaces ayudan a acelerar la creación de codespaces para repositorios grandes o complejos.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 4653ead4a97ff1ff87ac8029fb215fdc8ae56566
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381191"
---
## <a name="overview"></a>Información general

La precompilación de codespaces aumenta la productividad y permite acceder más rápido al codespace, sobre todo si el repositorio es grande o complejo y los nuevos codespaces tardan más de dos minutos en iniciarse. Esto se debe a que cualquier código fuente, extensiones del editor, dependencias del proyecto, comandos y configuraciones ya se han descargado, instalado y aplicado antes de crear un codespace para el proyecto. Una precompilación se puede considerar una plantilla "lista para usar" para codespace. 

De manera predeterminada, siempre que insertes cambios en el repositorio, {% data variables.product.prodname_codespaces %} usa {% data variables.product.prodname_actions %} para actualizar automáticamente las precompilaciones.

Cuando las precompilaciones estén disponibles para una rama determinada de un repositorio y, para la región, verás la etiqueta "{% octicon "zap" aria-label="The zap icon" %} Listo para precompilación" en la lista de opciones de tipos de máquinas al crear un codespace. Si todavía se está creando una precompilación, verás la etiqueta "{% octicon "history" aria-label="The history icon" %} Precompilación en curso". Para obtener más información, consulte "[Creación de un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

![La caja de diálogo para elegir un tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% note %}

{% data reusables.codespaces.prebuilds-not-available %}

{% endnote %}

## <a name="about-billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>Acerca de la facturación para precompilaciones de {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.billing-for-prebuilds %} Para más información sobre los precios de almacenamiento de {% data variables.product.prodname_codespaces %}, vea "[Acerca de la facturación de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)". 

El uso de codespaces creados con precompilaciones se cobra a la misma frecuencia que los codespaces normales.

## <a name="about-pushing-changes-to-prebuild-enabled-branches"></a>Acerca de la inserción de cambios en ramas habilitadas para precompilación

De manera predeterminada, cada inserción en una rama que tiene una configuración de precompilación da como resultado una ejecución de flujo de trabajo de acciones administrada por {% data variables.product.prodname_dotcom %} para actualizar la plantilla de precompilación. El flujo de trabajo de precompilación tiene un límite de simultaneidad de una ejecución de flujo de trabajo a la vez para una configuración de precompilación determinada, a menos que se realicen cambios que afecten a la configuración del contenedor de desarrollo para el repositorio asociado. Para más información, vea "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". Si una ejecución ya está en curso, la ejecución del flujo de trabajo que se ha puesto en cola más recientemente se ejecutará después, una vez que se complete la ejecución actual. 

Con la plantilla de precompilación establecida para actualizarse en cada inserción, si hay inserciones muy frecuentes en el repositorio, las actualizaciones de plantillas de precompilación se producirá al menos con la misma frecuencia con la que se tarda en ejecutar el flujo de trabajo de precompilación. Es decir, si la ejecución del flujo de trabajo suele tardar una hora en completarse, se crearán precompilaciones para el repositorio aproximadamente cada hora, si la ejecución se ejecuta correctamente, o con más frecuencia si se han realizado inserciones que cambian la configuración del contenedor de desarrollo en la rama.

Por ejemplo, imagine que se realizan cinco inserciones consecutivas en una rama que tiene una configuración de precompilación. En esta situación:

* Se inicia una ejecución de flujo de trabajo para la primera inserción, a fin de actualizar la plantilla de precompilación.
* Si las cuatro inserciones restantes no afectan a la configuración del contenedor de desarrollo, sus ejecuciones de flujo de trabajo se ponen en cola en un estado "pendiente". 
  
  Si alguna de las cuatro inserciones restantes cambia la configuración del contenedor de desarrollo, el servicio no la omitirá y ejecutará inmediatamente el flujo de trabajo de creación de la precompilación, y la actualizará en consecuencia si se realiza correctamente. 

* Una vez que se complete la primera ejecución, las ejecuciones de flujo de trabajo para las inserciones 2, 3 y 4 se cancelarán, y el último flujo de trabajo en cola (para la inserción 5) se ejecutará y actualizará la plantilla de precompilación. 
