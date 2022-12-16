---
title: Importar un repositorio con el Importador GitHub
intro: 'Si tienes un proyecto alojado en otro sistema de control de versión, puedes importarlo automáticamente a GitHub usando la herramienta Importador GitHub.'
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Use GitHub Importer
ms.openlocfilehash: 09b03d2c2c62cf5812f35a3d5b3379c2d0c8e33e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145911203'
---
{% tip %}

**Sugerencia:** La herramienta Importador GitHub no es adecuada para todas las importaciones. Por ejemplo, si tu código existente está alojado en una red privada, nuestra herramienta no podrá acceder a él. En estos casos, se recomienda [importar mediante la línea de comandos](/articles/importing-a-git-repository-using-the-command-line) para los repositorios de Git o mediante una [herramienta de migración de código fuente](/articles/source-code-migration-tools) externa para los proyectos importados desde otros sistemas de control de versiones.

{% endtip %}

Si quieres hacer coincidir las confirmaciones de tu repositorio con las cuentas personales de GitHub de los autores durante la importación, asegúrate de que cada contribuyente de tu repositorio tenga una cuenta de GitHub antes de comenzar la importación.

{% data reusables.repositories.repo-size-limit %}

1. En la esquina superior derecha de cualquier página, haga clic en {% octicon "plus" aria-label="Plus symbol" %} y, después, haga clic en **Import repository** (Importar repositorio).
![Opción para importar un repositorio en el menú del nuevo repositorio](/assets/images/help/importer/import-repository.png)
2. En "La URL del clon de tu repositorio antiguo", escribe la URL del proyecto que quieres importar.
![Campo de texto para la dirección URL del repositorio importado](/assets/images/help/importer/import-url.png)
3. Elige tu cuenta personal o una organización como propietaria del repositorio, luego escribe un nombre para el repositorio en GitHub.
![Menú del propietario del repositorio y campo con el nombre del repositorio](/assets/images/help/importer/import-repo-owner-name.png)
4. Especifique si el nuevo repositorio debe ser público (*public*) o privado (*private*). Para obtener más información, consulte "[Configuración de la visibilidad de un repositorio](/articles/setting-repository-visibility)".
![Botones de radio para el repositorio público o privado](/assets/images/help/importer/import-public-or-private.png)
5. Revise la información que ha especificado y haga clic en **Begin import** (Comenzar importación).
![Botón Begin import (Comenzar importación)](/assets/images/help/importer/begin-import-button.png)
6. Si tu proyecto anterior requiere credenciales, escribe la información de inicio de sesión para ese proyecto y haz clic en **Enviar**. Si SAML SSO o 2FA están habilitados para tu cuenta de usuario en el proyecto anterior, escribe un token de acceso personal con permisos de lectura de repositorio en el campo "Contraseña" en lugar de la contraseña.
![Formulario de contraseña y botón Submit (Enviar) del proyecto protegido con contraseña](/assets/images/help/importer/submit-old-credentials-importer.png)
7. Si hay múltiples proyectos hospedados en la URL de clonación de su proyecto anterior, elija el proyecto que quiera importar y luego haga clic en **Submit** (Enviar).
![Lista de proyectos para importar y botón Submit (Enviar)](/assets/images/help/importer/choose-project-importer.png)
8. Si el proyecto contiene archivos de más de 100 MB, elija si quiere importar los archivos grandes mediante [Git Large File Storage](/articles/versioning-large-files) y luego haga clic en **Continue** (Continuar).
![Menú de Git Large File Storage y botón Continue (Continuar)](/assets/images/help/importer/select-gitlfs-importer.png)

Recibirás un correo electrónico cuando se haya importado todo el repositorio.

## Información adicional

- "[Actualizar la atribución del autor de la confirmación con Importador GitHub](/articles/updating-commit-author-attribution-with-github-importer)"
