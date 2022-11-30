---
title: Combinar las confirmaciones
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} para combinar las confirmaciones en el historial de tu rama.'
versions:
  fpt: '*'
---

## Acerca de combinar una confirmación

La combinación te permite combinar confirmaciones múltiples del historial de tu rama en solo una confirmación. Esto puede ayudar a que el historial de tu repositorio sea más legible e inteligible.

## Combinar una confirmación

{% mac %}

{% data reusables.desktop.current-branch-menu %}
2. En la lista de ramas, selecciona aquella que tenga las confirmaciones que quieres combinar.
{% data reusables.desktop.history-tab %}
4. Selecciona las confirmaciones a combinar y suéltalas en aquella con la cual las quieras combinar. Puedes seleccionar una confirmación o varias de ellas utilizando <kbd>⌘</kbd> o <kbd>Shift</kbd>. ![función de combinar arrastrando y soltando](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Modifica el mensaje de confirmación de tu confirmación nueva. Los mensajes de confirmación de las confirmaciones seleccionadas que quieres combinar se llenan previamente en los campos de **Resumen** y **Descripción**.
6. Haz clic en **Combinar confirmaciones**.

{% endmac %}

{% windows %}

{% data reusables.desktop.current-branch-menu %}
2. En la lista de ramas, selecciona aquella que tenga las confirmaciones que quieres combinar.
{% data reusables.desktop.history-tab %}
4. Selecciona las confirmaciones a combinar y suéltalas en aquella con la cual las quieras combinar. Puedes seleccionar una confirmación o seleccionar varias de ellas utilizando <kbd>Ctrl</kbd> o <kbd>Shift</kbd>. ![función de combinar arrastrando y soltando](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Modifica el mensaje de confirmación de tu confirmación nueva. Los mensajes de confirmación de las confirmaciones seleccionadas que quieres combinar se llenan previamente en los campos de **Resumen** y **Descripción**.
6. Haz clic en **Combinar confirmaciones**.

{% endwindows %}

## Mensajes de error cuando combinas las confirmaciones

Cuando combinas las confirmaciones, puede que veas una de las siguientes notificaciones o mensajes de error.

* Una notificación declara que el cambio solicitado a la rama requerirá una subida forzada para actualizar la rama remota. El subir forzadamente altera el historial de la confirmaciones de la rama y afectará a otros colaboradores que están trabajando en ella.  Selecciona **Comenzar combinación** para que inicie la combienación y luego haz clic en **Subida forzada al origen** para subir tus cambios.

  ![diálogo de subida forzada de la combinación](/assets/images/help/desktop/squash-force-push.png)

* Un error indica que la combinación falló porque hay una confirmación de fusión entre las confirmaciones combinadas.

  ![diálogo de confirmación de fusión para reordenamiento](/assets/images/help/desktop/squash-merge-commit-dialog.png)

* Se muestra una indicación que indica que hay cambios sin confirmar presentes en tu rama actual. Selecciona **Almacenar cambios y continuar** para almacenar los cambios y proceder, o selecciona **Cerrar** para descartar el mensaje y confirmar los cambios. Cuando ya no haya cambios sin confirmar, podrás combinar tus confirmaciones.

  ![diálogo de acumulación de combinaciones](/assets/images/help/desktop/squash-stash-dialog.png)
