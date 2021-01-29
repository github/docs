---
title: Rastrear cambios en un comentario
intro: Puedes ver el historial de edición para un comentario o eliminar información sensible del mismo.
redirect_from:
  - /articles/tracking-changes-in-a-comment
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Ver detalles del historial de edición de un comentario

Cualquier persona con acceso de lectura a un repositorio puede ver el historial de edición del comentario.

1. Navega hasta el comentario del que quieres ver el historial de edición.
{% data reusables.repositories.edited-comment-list %}

### Eliminar información confidencial del historial de un comentario

Los autores de los comentarios y cualquiera con acceso de escritura aun repositorio pueden borrar comentarios sensibles del historial de edición de los mismos.

Cuando eliminas información confidencial del historial de edición del comentario, la persona que hizo la edición y el momento en que la hizo siguen visibles en el historial del comentario, pero el contenido de la edición deja de estar disponible.

1. Navega hasta el comentario del que quieres eliminar la información confidencial del historial de edición.
{% data reusables.repositories.edited-comment-list %}
3. En el margen superior derecho de la ventana del historial de edición, haz clic en **Options** (Opciones). Luego haz clic en **Delete revision from history** (Eliminar revisión del historial) para eliminar la diferencia que muestra el contenido que se agrega. ![Eliminar detalles de edición de un comentario](/assets/images/help/repository/delete-comment-edit-details.png)
4. Para confirmar la eliminación, haz clic en **OK**.

### Further reading

{% if currentVersion == "free-pro-team@latest" %}- "[Reportar abuso o spam](/articles/reporting-abuse-or-spam)"{% endif %}
- "[Editar un comentario](/articles/editing-a-comment)"
