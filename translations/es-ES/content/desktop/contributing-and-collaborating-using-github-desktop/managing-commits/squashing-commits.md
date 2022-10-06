---
title: Combinar las confirmaciones
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} para combinar las confirmaciones en el historial de tu rama.'
versions:
  fpt: '*'
ms.openlocfilehash: fb8141710a99b52f1b9a93e1abc0429b5e29f116
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '145117490'
---
## Acerca de combinar una confirmación

La combinación te permite combinar confirmaciones múltiples del historial de tu rama en solo una confirmación. Esto puede ayudar a que el historial de tu repositorio sea más legible e inteligible.

## Combinar una confirmación

{% mac %}

{% data reusables.desktop.current-branch-menu %}
2. En la lista de ramas, selecciona aquella que tenga las confirmaciones que quieres combinar.
{% data reusables.desktop.history-tab %}
4. Selecciona las confirmaciones a combinar y suéltalas en aquella con la cual las quieras combinar. Puede seleccionar una confirmación o seleccionar varias confirmaciones si presiona <kbd>Comando</kbd> o <kbd>Mayús</kbd>.
  ![Arrastrar y colocar la fusión mediante combinación con "squash"](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Modifica el mensaje de confirmación de tu confirmación nueva. Los mensajes de confirmación de las confirmaciones seleccionadas que quiera fusionar mediante combinación con "squash" se rellenan previamente en los campos **Resumen** y **Descripción**.
6. Haga clic en **Confirmaciones de fusión mediante combinación con "squash"** .

{% endmac %}

{% windows %}

{% data reusables.desktop.current-branch-menu %}
2. En la lista de ramas, selecciona aquella que tenga las confirmaciones que quieres combinar.
{% data reusables.desktop.history-tab %}
4. Selecciona las confirmaciones a combinar y suéltalas en aquella con la cual las quieras combinar. Puede seleccionar una confirmación o seleccionar varias confirmaciones si presiona <kbd>Ctrl</kbd> o <kbd>Mayús</kbd>.
  ![Arrastrar y colocar la fusión mediante combinación con "squash"](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Modifica el mensaje de confirmación de tu confirmación nueva. Los mensajes de confirmación de las confirmaciones seleccionadas que quiera fusionar mediante combinación con "squash" se rellenan previamente en los campos **Resumen** y **Descripción**.
6. Haga clic en **Confirmaciones de fusión mediante combinación con "squash"** .

{% endwindows %}

## Mensajes de error cuando combinas las confirmaciones

Cuando combinas las confirmaciones, puede que veas una de las siguientes notificaciones o mensajes de error.

* Una notificación declara que el cambio solicitado a la rama requerirá una subida forzada para actualizar la rama remota. El subir forzadamente altera el historial de la confirmaciones de la rama y afectará a otros colaboradores que están trabajando en ella.  Seleccione **Comenzar fusión mediante combinación con "squash"** para iniciar la fusión mediante combinación con "squash" y, después, haga clic en **Forzar origen de inserción** para insertar los cambios.

  ![diálogo de subida forzada de la combinación](/assets/images/help/desktop/squash-force-push.png)

* Un error indica que la combinación falló porque hay una confirmación de fusión entre las confirmaciones combinadas.

  ![diálogo de confirmación de fusión para reordenamiento](/assets/images/help/desktop/squash-merge-commit-dialog.png)

* Se muestra una indicación que indica que hay cambios sin confirmar presentes en tu rama actual. Seleccione **Guardar provisionalmente los cambios y Continuar** para guardar provisionalmente los cambios y continuar, o bien seleccione **Cerrar** para descartar el mensaje y confirmar los cambios. Cuando ya no haya cambios sin confirmar, podrás combinar tus confirmaciones.

  ![diálogo de acumulación de combinaciones](/assets/images/help/desktop/squash-stash-dialog.png)
