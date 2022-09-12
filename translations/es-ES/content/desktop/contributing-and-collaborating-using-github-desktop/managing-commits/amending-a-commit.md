---
title: Modificar una confirmación
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} para modificar tu última confirmación.'
versions:
  fpt: '*'
ms.openlocfilehash: 8d92d5f755df662c4948196cf9f84b3227ec0067
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117505'
---
## Acerca de modificar una confirmación

Modificar una confirmación es una forma de modificar la confirmación más reciente que hayas hecho en tu rama actual. Esto puede ser útil si necesitas editar el mensaje de confirmación o si olvidaste incluir los cambios en la confirmación.

Puedes seguir modificando una confirmación hasta que la subas al repositorio remoto. Después de que subes una confirmación, la opción a modificar se inhabilita en {% data variables.product.prodname_desktop %}. Cuando modificas un comentario, reemplazas la confirmación previa con una confirmación nueva hacia tu rama actual. El modificar una confirmación que se subió al repositorio remoto podría causar confusión para otros colaboradores que estén trabajando en este.

## Modificar una confirmación

{% data reusables.desktop.history-tab %}
2. Haz clic con el botón derecho en la confirmación más reciente y selecciona **Modificar confirmación**.
  ![Menú contextual para modificar una confirmación](/assets/images/help/desktop/amend-commit-context-menu.png)
3. Haz clic en el campo **Resumen** para modificar el mensaje de confirmación. Opcionalmente, puedes modificar o agregar información sobre la confirmación en el campo **Descripción**.
4. Selecciona cualquier cambio sin confirmar que te gustaría agregar a la confirmación. Para obtener más información, consulta "[Confirmar y revisar cambios en su proyecto](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)".
5. Una vez que hayas finalizado los cambios, haz clic en **Modificar la última confirmación**.
  ![Información general sobre la modificación de la última confirmación](/assets/images/help/desktop/amend-last-commit-overview.png)
