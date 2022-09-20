---
ms.openlocfilehash: 5f6285fe19915c3962b43cb45a26e65144607788
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147062406"
---
Puede personalizar el codespace si ajusta la cantidad de vCPU y RAM, [agrega dotfiles para personalizar el entorno](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account) o modifica las herramientas y los scripts instalados.

{% data variables.product.prodname_codespaces %} usa un archivo llamado `devcontainer.json` para configurar el contenedor de desarrollo que se usa al trabajar en un codespace. Cada repositorio puede contener uno o varios archivos `devcontainer.json`, para proporcionarte exactamente el entorno de desarrollo que necesitas para trabajar en el código de un codespace. 

Al iniciarse, {% data variables.product.prodname_codespaces %} utiliza un archivo `devcontainer.json`, y cualquier archivo dependiente que forme parte de la configuración del contenedor de desarrollo, para instalar herramientas y entornos de ejecución y realizar otras tareas de configuración que requiera el proyecto. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".
