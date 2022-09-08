---
title: Solucionar problemas de creación y borrado de Codespaces
intro: 'Este artículo te muestra los pasos para la solución de problemas comunes que podrías experimentar al crear o borrar un codespace, incluyendo los de almacenamiento y configuración.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 0a93ef45affe3f19e3e679d909db432ddd6b3e97
ms.sourcegitcommit: 3a16368cd8beb8b8487eb77d3e597cf49f4c4335
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/14/2022
ms.locfileid: '147110838'
---
## <a name="creating-codespaces"></a>Crear codespaces

### <a name="no-access-to-create-a-codespace"></a>Sin acceso para crear un codespace
Los {% data variables.product.prodname_codespaces %} no están disponibles para todos los repositorios. Si no se muestra el botón de "Abrir con Codespaces", {% data variables.product.prodname_github_codespaces %} podría no estar disponible para dicho repositorio. Para obtener más información, consulta "[Creación de un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)".

Si crees que tu organización ha [habilitado {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#about-enabling-codespaces-for-your-organization), asegúrate de que un propietario de la organización o un administrador de facturación hayan establecido el límite de gasto para {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta "[Administración del límite de gasto para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".

### <a name="codespace-does-not-open-when-created"></a>El Codespace no abre cuando se crea

Si creas un codespace y este no abre:

1. Intenta volver a cargar la página en caso de que hubiera un error de caché o problema reportado.
2. Ve a la página de {% data variables.product.prodname_github_codespaces %}: https://github.com/codespaces y comprueba si aparece el codespace nuevo. El proceso podría haber creado el codespace con éxito pero falló en reportarlo de vuelta a tu buscador. Si el codespace nuevo se ve listado, puedes abrirlo directamente desde esta página.
3. Reintenta crear el codespace para que el repositorio descarte un fallo de comunicación transitorio.

Si aún no puedes crear un codespace para un repositorio en donde esté disponible {% data variables.product.prodname_codespaces %}, contacta a {% data reusables.codespaces.contact-support %}.

## <a name="deleting-codespaces"></a>Borrar codespaces

El propietario de un codespace tiene control total sobre este y solo él podrá borrarlo. No puedes borrar un codespace que otro usuario haya creado.

Puedes eliminar los codespaces en el explorador, en {% data variables.product.prodname_vscode %}, o mediante {% data variables.product.prodname_cli %}. {% data variables.product.prodname_cli %} también permite eliminar de forma masiva los codespaces. Para más información, vea "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

## <a name="container-storage"></a>Almacenamiento de contenedores

Cuando creas un codespace, este tiene una cantidad de almacenamiento finita y, con el tiempo, podría que necesites liberar espacio. Intenta ejecutar cualquiera de los comandos siguientes en la terminal de {% data variables.product.prodname_codespaces %} para liberar espacio de almacenamiento.

- Quita los paquetes que ya no se usan mediante `sudo apt autoremove`.
- Limpia la memoria caché apt mediante `sudo apt clean`.
- Consulta los 10 archivos más grandes del codespace mediante `sudo find / -printf '%s %p\n'| sort -nr | head -10`.
- Borra los archivos innecesarios, tales como los artefactos y bitácoras de compilación.

Algunas opciones más destructivas:

- Quita imágenes de Docker, redes y contenedores sin usar mediante `docker system prune` (anexa `-a` si quieres quitar todas las imágenes y `--volumes` si quieres quitar todos los volúmenes).
- Quita los archivos sin seguimiento del árbol de trabajo: `git clean -i`.

## <a name="configuration"></a>Configuración

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```

Revisa los registros de creación, actualiza la configuración del contenedor de desarrollo según sea necesario y ejecuta **Codespaces: Recompilar contenedor** en {% data variables.product.prodname_vscode_command_palette %} para volver a intentarlo. Para obtener más información, consulta "[Registros de Codespaces](/codespaces/troubleshooting/codespaces-logs)" y "[Configuración de {% data variables.product.prodname_codespaces %} para el proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)".
