---
title: Agregar una licencia a un repositorio
intro: Puedes incluir una licencia de código abierto en tu repositorio para que simplifique la contribución de otras personas.
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a license to a repo
ms.openlocfilehash: 7961f690678d2bfe53726a33d02a54e95b9cfe78
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117641'
---
Si incluyes una licencia detectable en tu repositorio, las personas que visiten tu repositorio la verán en la parte superior de la página del repositorio. Para leer el archivo de licencia completa, haz clic en el nombre de la licencia.

![Un encabezado de repositorio con una licencia MIT](/assets/images/help/repository/repo-license-indicator.png)

Las licencias de código abierto permiten que otras personas usen, cambien y distribuyan el proyecto en tu repositorio. Para obtener más información sobre las licencias de repositorio, consulta "[Generar la licencia para un repositorio](/articles/licensing-a-repository)".

## Incluir una licencia de código abierto en tu repositorio

<!--Dotcom version uses the license tool-->
{% ifversion fpt or ghec %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. En el campo de nombre de archivo, escribe *LICENSE* o *LICENSE.md* (todo en mayúsculas).
4. A la derecha del campo de nombre de archivo, haz clic en **Elegir una plantilla de licencia**.
  ![Eligir un botón para la plantilla de licencia](/assets/images/help/repository/license-tool.png)
5. En el lateral izquierdo de la página, en "Agregar una licencia a tu proyecto", revisa las licencias disponibles, luego selecciona una licencia de la lista.
  ![Lista de licencias disponibles](/assets/images/help/repository/license-tool-picker.png)
6. Haz clic en **Revisar y enviar**.
  ![Botón Revisar y enviar](/assets/images/help/repository/license-review-tool.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.choose-commit-email %}
10. Haz clic en **Confirmar nuevo archivo**.
  ![Confirmar la licencia a la rama](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% ifversion ghes %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. En el campo de nombre de archivo, escribe *LICENSE* o *LICENSE.md* (todo en mayúsculas).
4. En la pestaña **Editar nuevo archivo**, pega el texto completo de la licencia que quieres usar.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
7. Debajo de los campos para el mensaje de confirmación, decide si deseas agregar tu confirmación a la rama actual o a una rama nueva. Debajo de los campos del mensaje de confirmación, decide si deseas agregar tu confirmación a la rama actual o a una nueva rama. Si tu rama actual es `main`, debes elegir crear una nueva rama para tu confirmación y, después, crear una solicitud de incorporación de cambios. Para obtener más información, consulta "[Creación de una solicitud de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)".
![Opciones de confirmación de rama](/assets/images/help/repository/choose-commit-branch.png)
8. Haz clic en **Confirmar nuevo archivo**.
  ![Confirmar la licencia a la rama](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

## Información adicional

- "[Establecimiento de instrucciones para colaboradores del repositorio](/articles/setting-guidelines-for-repository-contributors)"
