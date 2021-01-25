---
title: Acerca de comparar ramas en solicitudes de extracción
intro: Las solicitudes de extracción muestran las diferencias para comparar los cambios que haz hecho en tu rama de tema respecto a la rama en la cual quieres fusionar tus cambios.
redirect_from:
  - /articles/about-comparing-branches-in-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**Nota:** Cuando creas tu solicitud de extracción, puedes modificar la rama base frente a la cual estás comparando tus cambios. Para obtener más información, consulta "[Crear una solicitud de extracción](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)".

{% endnote %}

Puedes ver los cambios propuestos en una solicitud de extracción en la pestaña Archivos modificados.

![Pestaña Archivos modificados de la solicitud de extracción](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

En lugar de ver las confirmaciones de cambios, puedes ver los cambios propuestos ya que aparecerán en los archivos una vez que se fusiona la solicitud de extracción. Los archivos aparecen en orden alfabético dentro de la pestaña Archivos modificados. Las adiciones a los archivos aparecen en verde y están precedidas por un signo `+`, mientras que el contenido que ha sido eliminado aparece en rojo y está precedido por un signo `-`.

### Opciones de diferentes vistas

{% tip %}

**Sugerencia:** Si te está resultando difícil comprender el contexto de un cambio, puedes hacer clic en **View** (Ver) en la pestaña Files changed (Archivos modificados) para ver el archivo completo con los cambios propuestos.

{% endtip %}

Tienes varias opciones para ver una diferencia:
- La vista unificada muestra el contenido actualizado y el existente en conjunto en una vista lineal.
- La vista en dos paneles muestra el contenido viejo de un lado y el contenido nuevo del otro.
- La vista diferencia rica muestra una previsualización de cómo se verán los cambios una vez que se fusione la solicitud de extracción.
- La vista de origen muestra los cambios en el origen sin el formato de la vista diferencia rica.

También puedes elegir ignorar los cambios de espacio en blanco para obtener una vista más precisa de los cambios sustanciales en una solicitud de extracción.

![Menú Opciones de visualización de diferencias](/assets/images/help/pull_requests/diff-settings-menu.png)

Para simplificar la revisión de cambios en una solicitud de cambios grande, puedes filtrar el diff para que solo muestre los tipos de archivo seleccionados, muestre menos archivos de los cuales seas CODEOWNER, oculte archivos que ya hayas visto, u oculte archivos borrados. Para obtener más información, consulta "[Filtrar archivos en una solicitud de extracción por tipo de archivo](/articles/filtering-files-in-a-pull-request)".

  ![Menú desplegable Filtro de archivo](/assets/images/help/pull_requests/file-filter-menu.png)

### Comparaciones de diferencias de Git de tres puntos y de dos puntos

Por defecto, las solicitudes de extracción en {% data variables.product.prodname_dotcom %} muestran una diferencia de tres puntos o una comparación entre la versión más reciente de la rama de tema y la confirmación donde la rama de tema fue sincronizada por última vez con la rama base.

Para ver dos referencias confirmables en una comparación de diferencia de dos puntos en {% data variables.product.prodname_dotcom %}, puedes editar la URL de la página "Comparar cambios" de tu repositorio. Para obtener más información, consulta el [Glosario de Git para "confirmable"](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) del sitio del libro _Pro Git_.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Una diferenciación de dos puntos compara dos referencias confirmables de Git, como SHA u OID (ID de objeto), directamente entre sí. En {% data variables.product.prodname_dotcom %}, las referencias confirmables de Git en una comparación de diferenciación de dos puntos se deben subir al mismo repositorio o a sus bifurcaciones.

Si quieres simular una diferenciación de dos puntos en una solicitud de extracción y ver una comparación entre las versiones más recientes de cada rama, puedes fusionar la rama base en tu rama de tema, que actualiza el último antepasado común entre tus ramas.

Para obtener más información acerca de los comandos de Git para comparar los cambios, consulta "[Opciones de los diffs de Git](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)" en el sitio del libro de _Pro Git_.

### No se mostrarán las diferencias de motivos
- Has excedido el límite total de archivos o de ciertos tipos de archivos. Para obtener más información, consulta "[Límites para ver el contenido y las diferencias en un repositorio](/articles/limits-for-viewing-content-and-diffs-in-a-repository/#diff-limits)".
- Tus archivos coinciden con una regla en el archivo *.gitattributes* del repositorio para bloquear ese archivo de mostrarse por defecto. Para obtener más información, consulta "[Personalizar cómo aparecen los archivos modificados en GitHub](/articles/customizing-how-changed-files-appear-on-github)".

### Further reading

- "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)"
- "[Acerca de las bifurcaciones](/articles/about-forks)"
