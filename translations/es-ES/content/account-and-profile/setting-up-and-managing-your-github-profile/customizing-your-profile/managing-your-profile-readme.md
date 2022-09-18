---
title: Administrar el README de tu perfil
intro: 'Puedes agregar un README a tu perfil de {% data variables.product.prodname_dotcom %} para que otras personas sepan sobre ti.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
ms.openlocfilehash: 587bcea1e1a0f96aad8882b41196afcc6e433363
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578904'
---
## Acerca del README de tu perfil

Puede compartir información acerca de usted mismo con la comunidad en {% data variables.product.product_location %} si crea un README del perfil. {% data variables.product.prodname_dotcom %} muestra el README de tu perfil al inicio de tu página de perfil.

Tú decides qué información incluir en el README de tu perfil, así que tienes todo el contro sobre cómo te presentas con los demás en {% data variables.product.prodname_dotcom %}. Aquí tienes algunos ejemplos de información que puede ser interesante, divertida o útil para los visitantes que lean el README en tu perfil.

- Una sección de "sobre mí" que describa tu trabajo y tus intereses
- Las contribuciones de las cuales estás orgulloso y el contexto de las mismas
- Orientación para obtener ayuda en las comunidades en las que estás involucrado

![Archivo de README del perfil que se muestra en éste](/assets/images/help/repository/profile-with-readme.png)

Puedes formatear el texto e incluir emojis, imágenes y GIFs en el README de tu perfil si utilizas el Marcado Enriquecido de {% data variables.product.company_short %}. Para obtener más información, consulte "[Introducción a la escritura y el formato en {% data variables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)".

## Prerrequisitos

GitHub mostrará el README de tu perfil en tu página de perfil si cuentas con todo lo siguiente.

- Has creado un repositorio con un nombre que empate con tu nombre de usuario de {% data variables.product.prodname_dotcom %}.
- Este repositorio es público.
- Este repositorio contiene un archivo de nombre README.md en su raíz.
- El archivo README.md contiene cualquier tipo de contenido.

{% note %}

**Nota**: Si creó un repositorio público con el mismo nombre que su nombre de usuario antes de julio del 2020, {% data variables.product.prodname_dotcom %} no mostrará automáticamente el README del repositorio en su perfil. Puede compartir manualmente el README del repositorio en su perfil. Para ello, vaya al repositorio en {% data variables.product.prodname_dotcom_the_website %} y haga clic en **Share to profile**.

![Botón para compartir el README en el perfil](/assets/images/help/repository/share-to-profile.png)

{% endnote %}

## Agregar un README de perfil

{% data reusables.repositories.create_new %}
2. Debajo de "Nombre de repositorio", teclea un nombre de repositorio que empate con tu nombre de usuario de {% data variables.product.prodname_dotcom %}. Por ejemplo, si tu nombre de usuario es "octocat", el nombre de repositorio debe ser "octocat".
  ![Campo de nombre de repositorio que coincide con el nombre de usuario](/assets/images/help/repository/repo-username-match.png)
3. Opcionalmente, puede agregar una descripción del repositorio. Por ejemplo, "Mi repositorio personal".
  ![Campo para introducir una descripción para el repositorio](/assets/images/help/repository/create-personal-repository-desc.png)
4. Seleccione **Público**.
 ![Botón de radio para seleccionar la visibilidad con la opción Public seleccionada](/assets/images/help/repository/create-personal-repository-visibility.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. Encima de la barra lateral derecha, haga clic en **Edit README**.
  ![Botón para editar el archivo README](/assets/images/help/repository/personal-repository-edit-readme.png)
  
  El archivo de README que se ha generado está pre-llenado con una plantilla para que te inspires en completarlo.
  ![Archivo README con la plantilla completada previamente](/assets/images/help/repository/personal-repository-readme-template.png)

Para obtener un resumen de todos los emojis disponibles y sus códigos, consulte "[Hoja de referencia rápida de emoji](https://www.webfx.com/tools/emoji-cheat-sheet/)".

## Eliminar un README de perfil

El README de tu perfil se eliminará de tu perfil de {% data variables.product.prodname_dotcom %} si sucede cualquiera de los siguientes escenarios:

- El archivo README está vacío o no existe.
- El repositorio es privado.
- El nombre del repositorio no empata con tu nombre de usuario.

The method you choose is dependant upon your needs, but if you're unsure, we recommend making your repository private. Para ver los pasos para hacer un repositorio privado, consulta "[Cambiar la visibilidad de un repositorio](/github/administering-a-repository/setting-repository-visibility#changing-a-repositorys-visibility)".

## Información adicional

- "[Acerca de los archivos README](/github/creating-cloning-and-archiving-repositories/about-readmes)"
