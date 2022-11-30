---
title: Solucionar problemas de creación y borrado de codespaces
intro: 'Este artículo te muestra los pasos para la solución de problemas comunes que podrías experimentar al crear o borrar un codespace, incluyendo los de almacenamiento y configuración.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 4a12c848fa7400ec336f5ad086eb4d2858a431f0
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180823'
---
## Crear codespaces

### Sin acceso para crear un codespace
Los {% data variables.product.prodname_github_codespaces %} no están disponibles para todos los repositorios. Si no se muestran las opciones para crear un codespace, es posible que {% data variables.product.prodname_github_codespaces %} no esté disponible para ese repositorio. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#access-to-codespaces)".

Siempre y cuando te quede uso incluido mensual de {% data variables.product.prodname_github_codespaces %} en tu cuenta personal, o hayas configurado un método de pago y un límite de gasto, podrás crear codespaces para repositorios públicos. De todos modos, solo puedes crear un codespace para un repositorio privado si puedes insertar cambios en el repositorio o si puedes bifurcarlo.

Si quieres obtener más información sobre el uso incluido para las cuentas personales y la configuración de un límite de gasto, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)" y "[Administración de límites de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

### El Codespace no abre cuando se crea

Si creas un codespace y este no abre:

1. Intenta volver a cargar la página en caso de que hubiera un error de caché o problema reportado.
2. Ve a la página de {% data variables.product.prodname_github_codespaces %}: https://github.com/codespaces y comprueba si aparece el codespace nuevo. El proceso podría haber creado el codespace con éxito pero falló en reportarlo de vuelta a tu buscador. Si el codespace nuevo se ve listado, puedes abrirlo directamente desde esta página.
3. Reintenta crear el codespace para que el repositorio descarte un fallo de comunicación transitorio.

Si sigues sin poder crear un codespace para un repositorio en el que {% data variables.product.prodname_github_codespaces %} está disponible, {% data reusables.codespaces.contact-support %}.

### Error al crear un codespace

Si se produce un error al crear un codespace, es probable que se deba a una incidencia temporal de la infraestructura en la nube (por ejemplo, un problema al aprovisionar una máquina virtual para el codespace). Una razón menos común de este error es que el contenedor tarda más de una hora en compilarse. En este caso, se cancela la compilación y se producirá un error en la creación del codespace.

{% note %}

**Nota**: Un codespace que no se haya creado correctamente nunca podrá usarse y debe eliminarse. Para más información, vea "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

{% endnote %}

Si creas un codespace y se produce un error en la creación:

1. Consulta la [página de estado](https://githubstatus.com) de {% data variables.product.prodname_dotcom %} para ver los incidentes activos.
1. Ve a [tu página de {% data variables.product.prodname_github_codespaces %}](https://github.com/codespaces), elimina el codespace y crea uno nuevo.
1. Si el contenedor se está compilando, examina los registros que se están transmitiendo y asegúrate de que la compilación no está bloqueada. Si la compilación de un contenedor tarda más de una hora, se cancelará y se producirá un error en la creación.

   Generalmente, esto puede ocurrir cuando hay un script en ejecución que solicita una entrada de usuario y espera una respuesta. Si este es el caso, quita el símbolo del sistema interactivo para que la compilación pueda completarse de forma no interactiva.

   {% note %}

   **Nota**: Para ver los registros durante una compilación:
   * En el explorador, haz clic en **Ver registros**. 

   ![Captura de pantalla de la interfaz de usuario web de Codespaces con el vínculo Ver registros resaltado](/assets/images/help/codespaces/web-ui-view-logs.png)

   * En la aplicación de escritorio de VS Code, haz clic en **Compilar codespace** en la sección "Configurar conexión remota" que se muestra. 

   ![Captura de pantalla de VS Code con el vínculo Compilar codespace resaltado](/assets/images/help/codespaces/vs-code-building-codespace.png)

    {% endnote %}
2. Si tienes un contenedor que tarda mucho en compilarse, considera la posibilidad de usar precompilaciones para acelerar la creación de codespaces. Para obtener más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

## Borrar codespaces

Solo pueden eliminar un codespace:
* La persona que creó el codespace.
* Un propietario de la organización en el caso de un codespace propiedad de la organización.
* La eliminación automática tras un período de retención. 

Para obtener más información, consulta "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)" y "[Configuración de la eliminación automática de los codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)".

## Almacenamiento de contenedores

Cuando creas un codespace, este tiene una cantidad de almacenamiento finita y, con el tiempo, podría que necesites liberar espacio. Intenta ejecutar cualquiera de los comandos siguientes en la terminal de {% data variables.product.prodname_github_codespaces %} para liberar espacio de almacenamiento.

- Quita los paquetes que ya no se usan mediante `sudo apt autoremove`.
- Limpia la memoria caché apt mediante `sudo apt clean`.
- Consulta los 10 archivos más grandes del codespace mediante `sudo find / -printf '%s %p\n'| sort -nr | head -10`.
- Borra los archivos innecesarios, tales como los artefactos y bitácoras de compilación.

Algunas opciones más destructivas:

- Quita imágenes de Docker, redes y contenedores sin usar mediante `docker system prune` (anexa `-a` si quieres quitar todas las imágenes y `--volumes` si quieres quitar todos los volúmenes).
- Quita los archivos sin seguimiento del árbol de trabajo: `git clean -i`.

## Configuración

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```
Revisa los registros de creación y actualiza la configuración del contenedor de desarrollo según sea necesario. Para más información, consulta "[Registros de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)".

Después, puedes intentar reiniciar el codespace o recompilar el contenedor. Para más información sobre la recompilación del contenedor, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)".
