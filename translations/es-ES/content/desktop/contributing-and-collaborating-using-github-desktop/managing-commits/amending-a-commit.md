---
title: Modificar una confirmación
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} para modificar tu última confirmación.'
versions:
  fpt: '*'
---

## Acerca de modificar una confirmación

Modificar una confirmación es una forma de modificar la confirmación más reciente que hayas hecho en tu rama actual. Esto puede ser útil si necesitas editar el mensaje de confirmación o si olvidaste incluir los cambios en la confirmación.

Puedes seguir modificando una confirmación hasta que la subas al repositorio remoto. Después de que subes una confirmación, la opción a modificar se inhabilita en {% data variables.product.prodname_desktop %}. Cuando modificas un comentario, reemplazas la confirmación previa con una confirmación nueva hacia tu rama actual. El modificar una confirmación que se subió al repositorio remoto podría causar confusión para otros colaboradores que estén trabajando en este.

## Modificar una confirmación

{% data reusables.desktop.history-tab %}
2. Haz clic derecho en la confirmación más reciente y selecciona **Modificar confirmación**. ![Menú contextual para modificar una confirmación](/assets/images/help/desktop/amend-commit-context-menu.png)
3. Haz clic en el campo de **Resumen** para modificar el mensaje de confirmación. Opcionalmente, puedes modificar o agregar información acerca de la confirmación en el campo **Descripción**.
4. Selecciona cualquier cambio sin confirmar que te gustaría agregar a la confirmación. Para obtener más información sobre cómo seleccionar cambios, consulta la sección "[Confirmar y revisar cambios en tu proyecto](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)".
5. Una vez que hayas finalizado tus cambios, haz clic en **Modificar la última confirmación**. ![Modificar el resumen de la última confirmación](/assets/images/help/desktop/amend-last-commit-overview.png)
