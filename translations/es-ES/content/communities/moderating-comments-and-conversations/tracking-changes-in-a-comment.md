---
title: Rastrear cambios en un comentario
intro: Puedes ver el historial de edición para un comentario o eliminar información sensible del mismo.
redirect_from:
  - /articles/tracking-changes-in-a-comment
  - /github/building-a-strong-community/tracking-changes-in-a-comment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Track comment changes
ms.openlocfilehash: 7da6b53f9b98ade8ee73411a80aaf2ff3f412700
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092364'
---
## Ver detalles del historial de edición de un comentario

Cualquier persona con acceso de lectura a un repositorio puede ver el historial de edición de un comentario.

1. Navega hasta el comentario del que quieres ver el historial de edición.
{% data reusables.repositories.edited-comment-list %}

## Eliminar información confidencial del historial de un comentario

Los autores de los comentarios y cualquiera con acceso de escritura aun repositorio pueden borrar comentarios sensibles del historial de edición de los mismos.

Cuando eliminas información confidencial del historial de edición del comentario, la persona que hizo la edición y el momento en que la hizo siguen visibles en el historial del comentario, pero el contenido de la edición deja de estar disponible.

1. Navega hasta el comentario del que quieres eliminar la información confidencial del historial de edición.
{% data reusables.repositories.edited-comment-list %}
3. En el margen superior derecho de la ventana del historial de edición, haz clic en **Options** (Opciones). A continuación, haz clic en **Eliminar revisión del historial** para eliminar la diferencia que muestra el contenido que se va a agregar.
  ![Eliminar detalles de edición de un comentario](/assets/images/help/repository/delete-comment-edit-details.png)
4. Haz clic en **Aceptar** para confirmar la eliminación.

## Información adicional

{% ifversion fpt or ghec %}: "[Informar de abuso o correo no deseado](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"{% endif %}
- "[Edición de un comentario](/articles/editing-a-comment)"
