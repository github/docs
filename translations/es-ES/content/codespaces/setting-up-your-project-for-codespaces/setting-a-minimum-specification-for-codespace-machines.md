---
title: Configurar una especificación mínima para las máquinas de los codespaces
shortTitle: Set a minimum machine spec
intro: 'Puedes evitar que los tipos de máquina con recursos insuficientes se usen en los {% data variables.product.prodname_github_codespaces %} de tu repositorio.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: b7eeaac84721ff1d9ceab663957b1615952b0623
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159169'
---
## Información general

Cada codespace que creas se hospeda en una máquina virtual independiente. Al crear un codespace a partir de un repositorio, normalmente puedes elegir entre diferentes tipos de máquinas virtuales. Cada tipo de máquina tiene recursos diferentes (núcleos de procesador, memoria, almacenamiento) y, de forma predeterminada, se usa el tipo de máquina con los recursos mínimos. Para obtener más información, consulte "[Cambio del tipo de máquina para el codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)".

Si tu proyecto necesita cierto nivel de potencia de cómputo, puedes configurar {% data variables.product.prodname_github_codespaces %} para que solo los tipos de máquina que cumplan con estos requisitos se puedan usar de forma predeterminada o los puedan seleccionar los usuarios. Esta configuración se realiza en un archivo `devcontainer.json`.

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %}

{% note %}

**Importante:** El acceso a algunos tipos de máquina puede estar restringido en el nivel de organización. Habitualmente, esto se hace para prevenir que las personas elijan máquinas con recursos superiores, las cuales se cobran en tazas más altas. Si tu repositorio se ve afectado por la política de tipos de máquina a nivel organizacional, debes asegurarte de que no configures una especificación mínima que impida que las personas seleccionen los tipos de máquina disponibles que necesitan. Para obtener más información, consulte "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

{% endnote %}

## Configurar una especificación de máquina mínima

{% data reusables.codespaces.edit-devcontainer-json %}
1. Edita el archivo `devcontainer.json`, agregando la propiedad `hostRequirements` en el nivel superior del archivo, dentro del objeto JSON envolvente. Por ejemplo:

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   Puede especificar una de las opciones o todas: `cpus`, `memory` y `storage`.
   
   Para verificar las especificaciones de los tipos de máquina de {% data variables.product.prodname_github_codespaces %} que actualmente están disponibles para tu repositorio, realiza el proceso de crear un codespace hasta que veas la elección de tipos de máquina. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".
   
1. Guarda el archivo y confirma tus cambios a la rama requerida del repositorio.

   Ahora, cuando crees un codespace para esta rama del repositorio y vayas a las opciones de configuración de creación, solo podrás seleccionar tipos de máquina que coincidan con los recursos que especificaste o los excedan.

   ![Caja de diálogo que muestra una selección limitada de tipos de máquina](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Información adicional

- "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
