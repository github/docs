---
title: Personalizar el perfil de tu organización
intro: Puedes compartir la información sobre tu organización si personalizas el perfil de esta.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4749
topics:
  - Organizations
shortTitle: Personalizar el perfil de una organización
---

{% if org-profile-pin-private %}

## Acerca de la página de perfil de la organización

Puedes personalizar la página de resumen de tu organización para mostrar el contenido dedicado a los usuarios públicos o miembros de la organización. Los miembros de tu organización quienes hayan iniciado sesión en {% data variables.product.prodname_dotcom %} tendrán una vista de miembro cuando visiten la página de perfil de tu organización. Los usuarios que no sean miembros de tu organización tendrán una vista pública.

![Imagen de una página de perfil de organización](/assets/images/help/organizations/new_organization_page.png)
{% endif %}

### Repositorios anclados

Puedes darle a los usuarios un acceso fácil a los repositorios importantes o que se utilizan frecuentemente si eliges hasta seis de ellos para los usuarios públicos y seis para los miembros de la organización. Una vez que fijas los repositorios en tu perfil de organización, la sección de "Fijados" se muestra sobre la de "Repositorios" en la página de perfil.

Solo los propietarios de la organización pueden fijar repositorios. Para obtener más información, consulta la sección "[Fijar repositorios a tu perfil de organización](#pinning-repositories-to-your-organizations-profile)".

### README de perfil de organización

Puedes compartir información sobre cómo participar con tu organización creando un README de perfil para ella, tanto para sus miembros como para los usuarios públicos. {% data variables.product.prodname_dotcom %} te muestra el README del perfil de tu organización en la pestaña de "Resumen" de tu organización.

Puedes elegir qué información incluir en el README de perfil de tu organización. Aquí tienes algunos ejemplos de la información que podría ser útil.

- Una sección de "Acerca de" que describa a tu organización
- Lineamientos para obtener ayuda en la organización

Puedes formatear el texto e incluir emojis, imágenes y GIFs en el README del perfil de tu organización si utilizas el Marcado Enriquecido de {% data variables.product.company_short %}. Para obtener más información, consulta la sección "[Iniciar con la escritura y el formato en {% data variables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)".

## Agregar un README de perfil de organización púbica

1. Si tu organización aun no tiene un repositorio público de `.github`, crea un repositorio público de `.github`.
2. En el repositorio de `.github` de tu organización, crea un archivo de `README.md` en la carpeta `profile`.
3. Confirma los cambios al archivo `README.md`. El contenido del `README.md` aparecerá en el perfil público de tu organización.

   ![Imagen de un README público de una organización](/assets/images/help/organizations/org_public_readme.png)

{% if org-profile-pin-private %}

## Agregar un README de perfil de organización solo para miembros

1. Si tu organización aún no tiene un repositorio `.github-private`, crea un `.github-private` público. Cualquier usuario que tenga acceso de escritura a dicho repositorio puede llevar a cabo esta acción.
2. En el repositorio `.github-private` de tu organización, crea un archivo `README.md` en la carpeta `profile`.
3. Confirma los cambios al archivo `README.md`. El contenido del `README.md` se mostrará en la vista de miembros del perfil de tu organización.

   ![Imagen del README privado de una organización](/assets/images/help/organizations/org_member_readme.png)

## Fijar repositorios a tu perfil de organización

Puedes fijar repositorios que quieras destacar, tales como aquellos que se utilizan frecuentemente, a la página de perfil de tu organización. Para elegir qué repositorios fijar al perfil de tu organización, debes ser un propietario o administrador de esta.

1. Navega a la página de perfil de tu organización.
2. En la barra lateral derecha de la página, en el enlace de {% octicon "eye" aria-label="The eye octicon" %} "Ver como", elige la vista de perfil **Pública** o de **Miembro** del menú desplegable.

   ![Imagen del menú desplegable de vista de perfil de la organización](/assets/images/help/organizations/org_profile_view.png)

3. En la sección de repositorios fijados, selecciona **Personalizar fijados**.

   ![Imagen del enlace de personalizar fijados](/assets/images/help/organizations/customize_pins_link.png)

   - Si aún no has fijado ningún repositorio al perfil de tu organización, necesitarás hacer clic en **fijar repositorios** en la barra lateral derecha de la página de perfil. ![Imagen del enlace de repositorios fijados en la barra lateral derecha](/assets/images/help/organizations/pin_repositories_link.png)

4. En la caja de diálogo "Editar repositorios fijados", selecciona una combinación de hasta seis repositorios públicos, {% ifversion not fpt %}privados o internos{% else %}o privados{% endif %} para mostrar.

   ![Imagen del diálogo de un repositorio fijado](/assets/images/help/organizations/pinned_repo_dialog.png)

5. Haz clic en **Save pins (Guardar anclados)**.

{% endif %}
