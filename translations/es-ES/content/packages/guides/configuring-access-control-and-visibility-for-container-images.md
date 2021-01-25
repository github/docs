---
title: Configurar el control de accesos y la visibilidad para las imagenes de contenedor
intro: 'Elige quién ha leído, escrito, o administrado el acceso a tu imagen de contenedor y la visibilidad de tus imágenes de contenedor en {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### Configurar el acceso a las imágenes de contenedor para tu cuenta personal

Si tienes permisos de administrador para una imagen de contenedor que pertenezca a una cuenta de usuario, puedes asignar, leer, escribir, o administrar roles para otros usuarios. Para obtener más información acerca de estos roles de permisos, consulta la sección "[Permisos de visibilidad y acceso para las imágenes de contenedor](/packages/getting-started-with-github-container-registry/about-github-container-registry#visibility-and-access-permissions-for-container-images)".

{% data reusables.package_registry.package-settings-from-user-level %}
1. En la página de configuración del paquete, da clic en **Invitar equipos o personas** e ingresa el nombre real, nombre de usuario, o dirección de correo electrónico de la persona a la que quieras dar acceso. No se puede otorgar acceso a los equipos para aquellas imágenes de contenedor que pertenezcan a una cuenta de usuario. ![Botón de invitación para el acceso al contenedor](/assets/images/help/package-registry/container-access-invite.png)
1. Junto al equipo o nombre de usuario, utiliza el menú desplegable de "Rol" para seleccionar un nivel de permisos que desees. ![Opciones de acceso al contenedor](/assets/images/help/package-registry/container-access-control-options.png)

Se otorgará acceso automáticamente a los usuarios seleccionados y no necesitarán aceptar una invitación previamente.

### Configurar el acceso a las imágenes de contenedor para una organización

Si tienes permisos administrativos en una imágen de contenedor que pertenezca a una organización, puedes asignar roles de lectura, escritura o administración a otros usuarios y equipos. Para obtener más información acerca de estos roles de permisos, consulta la sección "[Permisos de visibilidad y acceso para las imágenes de contenedor](/packages/getting-started-with-github-container-registry/about-github-container-registry#visibility-and-access-permissions-for-container-images)".

Si tu paquete pertenece a una organización y es privador, entonces solo podrás dar acceso a otros miembros o equipos de la organización.

Para los contenedores de imagen de la organizción, los administradores de la organización deben habilitar los paquetes antes de que puedas configurar la visibilidad como pública. Para obtener más información, consulta la sección "[Habilitar el soporte mejorado para los contenedores](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)".

{% data reusables.package_registry.package-settings-from-org-level %}
1. En la página de configuración del paquete, da clic en **Invitar equipos o personas** e ingresa el nombre real, nombre de usuario, o dirección de correo electrónico de la persona a la que quieras dar acceso. También puedes ingresar un nombre de equipo desde la organización para otorgar acceso a todos los miembros de éste. ![Botón de invitación para el acceso al contenedor](/assets/images/help/package-registry/container-access-invite.png)
1. Junto al equipo o nombre de usuario, utiliza el menú desplegable de "Rol" para seleccionar un nivel de permisos que desees. ![Opciones de acceso al contenedor](/assets/images/help/package-registry/container-access-control-options.png)

Se otorgará acceso automáticamente a los usuarios o equipos seleccionados y no necesitarán aceptar una invitación previamente.

### Configurar la visibilidad de las imágenes de contenedor para tu cuenta personal

Cuando publicas un paquete por primera vez, la visibilidad predeterminada es privada y solo tú puedes verlo. Puedes modificar el acceso a las imágenes de contenedor públicas si cambias la configuración de acceso.

Se puede acceder anónimamente a un paquete público sin autenticación. Una vez que hagas tu paquete público, no puedes hacerlo privado nuevamente.

{% data reusables.package_registry.package-settings-from-user-level %}
5. Debajo de "Zona de peligro", elige una configuración de visibilidad:
    - Para que la imagen del contenedor sea visible para todos, da clic en **Hacer público**.
    {% warning %}

    **Advertencia:** Una vez que hagas público algún paquete no podrás volverlo a hacer privado.

    {% endwarning %}
    - Para hacer la la imagen de contenedor sea visible para una selección personalizada de individuos, da clic en **Hacer privada**. ![Opciones de visibilidad del contenedor](/assets/images/help/package-registry/container-visibility-option.png)

### Configurar la visibilidad de las imágenes de contenedor para una organización

Cuando publicas un paquete por primera vez, la visibilidad predeterminada es privada y solo tú puedes verlo. Puedes otorgar roles de acceso diferentes a los usuarios o equipos para tu imagen de contenedor a través de la configuración de acceso.

Se puede acceder anónimamente a un paquete público sin autenticación. Una vez que hagas tu paquete público, no puedes hacerlo privado nuevamente.

Para las imágenes de contenedor organizacionales, los administradores de las organizaciones deben habilitar los paquetes públicos antes de que puedas configurar la visibilidad como pública. Para obtener más información, consulta la sección "[Habilitar el soporte mejorado para los contenedores](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)".

{% data reusables.package_registry.package-settings-from-org-level %}
5. Debajo de "Zona de peligro", elige una configuración de visibilidad:
    - Para que la imagen del contenedor sea visible para todos, da clic en **Hacer público**.
    {% warning %}

    **Advertencia:** Una vez que hagas público algún paquete no podrás volverlo a hacer privado.

    {% endwarning %}
    - Para hacer la la imagen de contenedor sea visible para una selección personalizada de individuos, da clic en **Hacer privada**. ![Opciones de visibilidad del contenedor](/assets/images/help/package-registry/container-visibility-option.png)
