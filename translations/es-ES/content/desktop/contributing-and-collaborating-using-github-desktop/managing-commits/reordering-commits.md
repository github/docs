---
title: Reordenar las confirmaciones
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} para volver a ordenar las confirmaciones del historial de tu rama.'
versions:
  fpt: '*'
ms.openlocfilehash: 5f68af5f2798e6780a91515886130f2b3ca7e6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117497'
---
## Acerca de reordenar una confirmación

El reordenamiento te permite alterar tu historial de confirmaciones para proporcionar una progresión de confirmaciones más significativa. {% data variables.product.prodname_desktop %} te permite arrastrar y soltar confirmaciones en el historial de tu rama para reordenarlas.

## Reordenar una confirmación

{% data reusables.desktop.current-branch-menu %}
2. En la lista de ramas, haz clic en aquella con las confirmaciones que quieras reordenar.
{% data reusables.desktop.history-tab %}
4. Arrastra la confirmación que quieras reordenar y suéltala entre dos confirmaciones adyacentes.
  ![reordenar arrastrar y colocar](/assets/images/help/desktop/reorder-drag-and-drop.png) Mientras que la aplicación reordena las confirmaciones, un cuadro de diálogo **Reordenar en proceso** indica el progreso del cambio.

## Mensajes de error al reordenar las confirmaciones

Cuando vuelves a ordenar las confirmaciones, podrías ver alguna de las siguientes notificaciones o mensajes de error.

* Una notificación declara que el cambio solicitado a la rama requerirá una subida forzada para actualizar la rama remota. Esto se muestra cuando las confirmaciones que reorganizaste se cargaron previamente a la rama remota. El subir forzadamente altera el historial de la confirmaciones de la rama y afectará a otros colaboradores que están trabajando en ella.  Selecciona **Comenzar reordenamiento** para iniciar el reordenamiento y, después, haz clic en **Forzar origen de inserción** para insertar los cambios.

  ![diálogo de subida forzada para reordenamiento](/assets/images/help/desktop/reorder-force-push-dialog.png)

* Un error declara que el reordenamiento falló ya que hay una confirmación de fusión entre las confirmaciones reordenadas.

  ![diálogo de confirmación de fusión para reordenamiento](/assets/images/help/desktop/reorder-merge-commit-dialog.png)

* Se muestra una indicación que indica que hay cambios sin confirmar presentes en tu rama actual. Selecciona **Guardar provisionalmente los cambios y Continuar** para guardar provisionalmente los cambios y continuar, o bien selecciona **Cerrar** para descartar el mensaje y confirmar los cambios. Cuando ya no haya cambios sin confirmar, puedes reordenar tus confirmaciones.

  ![diálogo de almacenamiento para reordenamiento](/assets/images/help/desktop/reorder-stash-dialog.png)

* Un mensaje declara que hay conflictos de fusión que debes resolver antes de que la aplicación pueda seguir reordenando als confirmaciones en tu rama.
    1. Haz clic en **Ver conflictos** para ver los conflictos.
      ![mensaje de reordenar la resolución de conflictos](/assets/images/help/desktop/reorder-resolve-conflicts.png) {% data reusables.desktop.resolve-merge-conflicts %}
   3. Cuando se resuelvan todos los conflictos, podrás reordenar tus confirmaciones.
  
