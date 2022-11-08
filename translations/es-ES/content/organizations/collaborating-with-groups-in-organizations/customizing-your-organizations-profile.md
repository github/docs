---
title: Personalizar el perfil de tu organización
intro: Puedes compartir la información sobre tu organización si personalizas el perfil de la misma.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
topics:
  - Organizations
shortTitle: Customize organization profile
ms.openlocfilehash: 66f234427f6e47213578e8f906e123d98c07a092
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147447934'
---
## Acerca de la página de perfil de tu organización

{% ifversion org-profile-pin-private %} Puedes personalizar la página de información general de la organización para mostrar un LÉAME y repositorios anclados dedicados a usuarios públicos o miembros de la organización.

![Imagen de la página de perfil de una organización pública](/assets/images/help/organizations/public_profile.png)

Los miembros de la organización que hayan iniciado sesión en {% data variables.product.prodname_dotcom %} pueden seleccionar una vista `member` o `public` del LÉAME y los repositorios anclados cuando visiten la página de perfil de la organización. 

![Imagen de un conmutador de contexto de vista de página de perfil de organización pública](/assets/images/help/organizations/profile_view_switcher_public.png)

La vista predeterminada es `member` si hay un LÉAME o repositorios anclados solo para miembros y `public` de lo contrario.

![Imagen de la página de perfil de una organización solo para miembros](/assets/images/help/organizations/member_only_profile.png)

A los usuarios que no son miembros de la organización se les mostrará una vista `public`.

### Repositorios anclados

Puedes proporcionar a los usuarios acceso fácil a repositorios importantes o usados con frecuencia, eligiendo hasta seis repositorios para usuarios públicos y seis para los miembros de la organización. Una vez anclados repositorios al perfil de la organización, la sección "Pinned" (Anclado) se muestra encima de la sección "Repositories" (Repositorios) de la página de perfil.

Solo los propietarios de la organización pueden anclar repositorios. Para obtener más información, consulta "[Anclaje de repositorios al perfil de la organización](#pinning-repositories-to-your-organizations-profile)".

### Archivos Léeme del perfil de la organización

{% endif %}

Puedes compartir información sobre cómo interactuar con tu organización creando un archivo Léeme del perfil de la organización para usuarios públicos y miembros de la organización. {% data variables.product.prodname_dotcom %} te muestra el README del perfil de tu organización en la pestaña de "Resumen" de tu organización.

Puedes elegir el tipo de información que incluirás en el archivo Léeme del perfil de tu organización. Estos son algunos ejemplos de información que pueden resultar útiles.

- Una sección de "Acerca de" que describa a tu organización
- Lineamientos para obtener ayuda en la organización

Puedes formatear el texto e incluir emojis, imágenes y GIFs en el README del perfil de tu organización si utilizas el Marcado Enriquecido de {% data variables.product.company_short %}. Para más información, vea "[Introducción a la escritura y el formato en {% data variables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)".

## Incorporación de un archivo Léeme del perfil de la organización

1. Si la organización todavía no tiene un repositorio `.github` público, cree un repositorio `.github` público.
2. En el repositorio `.github` de la organización, cree un archivo `README.md` en la carpeta `profile`.
3. Confirme los cambios en el archivo `README.md`. El contenido de `README.md` aparecerá en el perfil público de la organización.

   ![Imagen del archivo Léeme público de una organización](/assets/images/help/organizations/org_public_readme.png)

{% ifversion org-profile-pin-private %}

## Incorporación de un archivo Léeme del perfil de la organización solo para miembros

1. Si la organización todavía no tiene un repositorio `.github-private`, crea un repositorio privado llamado `.github-private`. 
2. En el repositorio `.github-private` de la organización, cree un archivo `README.md` en la carpeta `profile`.
3. Confirme los cambios en el archivo `README.md`. El contenido de `README.md` se mostrará en la vista de miembro del perfil de la organización.

   ![Imagen del LÉAME solo para miembros de una organización](/assets/images/help/organizations/org_member_readme.png)

## Anclaje de repositorios al perfil de la organización

Puedes anclar repositorios que quieras incluir, como los que se usan con frecuencia, en la página de perfil de la organización. Para elegir los repositorios que se van a anclar al perfil de la organización, debes ser propietario de la organización.

1. Ves a la página de perfil de la organización.
2. En la barra lateral derecha de la página del vínculo {% octicon "eye" aria-label="The eye octicon" %} "View as" (Ver como), elige la vista del perfil **Public** (Público) o **Member** (Miembro) en el menú desplegable.

   ![Imagen de la lista desplegable de la vista de perfil de la organización](/assets/images/help/organizations/org_profile_view.png)

3. En la sección de repositorios anclados, selecciona **Customize pins** (Personalizar anclajes).

   ![Imagen del vínculo para personalizar anclajes](/assets/images/help/organizations/customize_pins_link.png)

   - Si aún no has anclado ningún repositorio al perfil de la organización, deberás hacer clic en **pin repositories** (anclar repositorios) en la barra lateral derecha de la página del perfil.
   ![Imagen del vínculo para anclar repositorios en la barra lateral derecha](/assets/images/help/organizations/pin_repositories_link.png)

4. En el cuadro de diálogo "Edit pinned repositories" (Editar repositorios anclados), selecciona una combinación de hasta seis repositorios públicos, {% ifversion not fpt %}privados o internos{% else %}o privados{% endif %} para mostrar.

   ![Imagen del cuadro de diálogo del repositorio anclado](/assets/images/help/organizations/pinned_repo_dialog.png)

5. Haga clic en **Save pins**.

{% endif %}
