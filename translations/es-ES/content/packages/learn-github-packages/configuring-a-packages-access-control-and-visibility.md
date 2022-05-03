---
title: Configurar la visibilidad y el control de accesos de un paquete
intro: 'Elige quién ha leído, escrito, o administrado el acceso a tu imagen de contenedor y la visibilidad de tus imágenes de contenedor en {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images
  - /packages/guides/configuring-access-control-and-visibility-for-container-images
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Visibilidad & control de accesos
---

Los paquetes con permisos granulares tienen un alcance de una cuenta personal o de organización. Puedes cambiar la visibilidad y el control de accesos de un paquete por separado desde el repositorio al cual está conectado (o enlazado).

Actualmente, solo puedes utilizar permisos granulares con el {% data variables.product.prodname_container_registry %}. Los permisos granulares no son compatibles en nuestros otros registros de paquetes, tales como el registro de npm.

Para obtener más información sobre los permisos de los paquetes con alcance de repositorio, los alcances relacionados con paquetes para los PAT o para administrar permisos para los flujos de trabajo de tus acciones, consulta la sección "[Acerca de los permisos para los Paquetes de GitHub](/packages/learn-github-packages/about-permissions-for-github-packages)".

## Permisos de visibilidad y acceso para las imágenes de contenedor

{% data reusables.package_registry.visibility-and-access-permissions %}

## Configurar el acceso a las imágenes de contenedor para tu cuenta personal

Si tienes permisos administrativos para una imagen de contenedor que le pertenece a una cuenta personal, puedes asignar roles de lectura, escritura o administración a otros usuarios. Para obtener más información acerca de estos roles de permisos, consulta la sección "[Permisos de visibilidad y acceso para las imágenes de contenedor](#visibility-and-access-permissions-for-container-images)".

Si tu paquete es privado o interno y le pertenece a una organización, entonces solo puedes darles acceso a otros miembros o equipos de la misma.

{% data reusables.package_registry.package-settings-from-user-level %}
1. En la página de configuración del paquete, da clic en **Invitar equipos o personas** e ingresa el nombre real, nombre de usuario, o dirección de correo electrónico de la persona a la que quieras dar acceso. No se puede dar acceso a los equipos para una imagen de contenedor que le pertenezca a una cuenta personal. ![Botón de invitación para el acceso al contenedor](/assets/images/help/package-registry/container-access-invite.png)
1. Junto al equipo o nombre de usuario, utiliza el menú desplegable de "Rol" para seleccionar un nivel de permisos que desees. ![Opciones de acceso al contenedor](/assets/images/help/package-registry/container-access-control-options.png)

Se otorgará acceso automáticamente a los usuarios seleccionados y no necesitarán aceptar una invitación previamente.

## Configurar el acceso a las imágenes de contenedor para una organización

Si tienes permisos administrativos en una imágen de contenedor que pertenezca a una organización, puedes asignar roles de lectura, escritura o administración a otros usuarios y equipos. Para obtener más información acerca de estos roles de permisos, consulta la sección "[Permisos de visibilidad y acceso para las imágenes de contenedor](#visibility-and-access-permissions-for-container-images)".

Si tu paquete es privado o interno y le pertenece a una organización, entonces solo puedes darles acceso a otros miembros o equipos de la misma.

{% data reusables.package_registry.package-settings-from-org-level %}
1. En la página de configuración del paquete, da clic en **Invitar equipos o personas** e ingresa el nombre real, nombre de usuario, o dirección de correo electrónico de la persona a la que quieras dar acceso. También puedes ingresar un nombre de equipo desde la organización para otorgar acceso a todos los miembros de éste. ![Botón de invitación para el acceso al contenedor](/assets/images/help/package-registry/container-access-invite.png)
1. Junto al equipo o nombre de usuario, utiliza el menú desplegable de "Rol" para seleccionar un nivel de permisos que desees. ![Opciones de acceso al contenedor](/assets/images/help/package-registry/container-access-control-options.png)

Se otorgará acceso automáticamente a los usuarios o equipos seleccionados y no necesitarán aceptar una invitación previamente.

## Heredar el acceso a una imagen de contenedor desde un repositorio

Para simplificar la administración de paquetes a través de los flujos de trabajo de {% data variables.product.prodname_actions %}, puedes habilitar a una imagen de contenedor para que herede los permisos de acceso de un repositorio predeterminadamente.

Si heredas los permisos de acceso del repositorio en donde se almacenan los flujos de trabajo de tu paquete, entonces puedes ajustar el acceso al mismo a través de los permisos del repositorio.

Una vez que el repositorio se sincronice, no podrás acceder a la configuración de acceso granular del paquete. Para personalizar los permisos de paquete a través de la configuración de acceso granular del paquete, primero debes sincronizar el repositorio.

{% data reusables.package_registry.package-settings-from-org-level %}
2. Debajo de "Fuente del repositorio", selecciona **Heredar el acceso del repositorio (recomendado)**. ![Casilla de verificación de heredar el acceso del repositorio](/assets/images/help/package-registry/inherit-repo-access-for-package.png)

## Garantizar el acceso al flujo de trabajo para tu paquete

Para garantizar que el flujo de trabajo de {% data variables.product.prodname_actions %} tiene acceso a tu paquete, debes otorgar acceso explícito al repositorio en donde se almacena el flujo de trabajo.

El repositorio especificado no necesita ser aquél en donde se mantiene el código fuente del paquete. Puedes dar acceso de flujo de trabajo a un paquete para varios repositorios.

{% note %}

**Nota:** El sincronizar tu imagen de contenedor con un repositorio mediante la opción de menú **Acceso a las acciones** es diferente que conectar tu contenedor a un repositorio. Para obtener más información sobre cómo enlazar un repositorio a tu contenedor, consulta la sección "[Conectar un repositorio a un paquete](/packages/learn-github-packages/connecting-a-repository-to-a-package)".

{% endnote %}

### Acceso de {% data variables.product.prodname_actions %} para las imágenes de contenedor que pertenecen a cuentas de usuario

{% data reusables.package_registry.package-settings-from-user-level %}
1. En la barra lateral izquierda, haz clic en **Acceso a las acciones**. ![Opción "Acceso a las acciones" en el menú izquierdo](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Para garantizar que tu flujo de trabajo tiene acceso a tu paquete de contenedor, debes agregar el repositorio en donde se almacena el flujo de trabajo. Haz clic en **Agregar repositorio** y busca el repositorio que quieres agregar. ![Botón "Agregar repositorio"](/assets/images/help/package-registry/add-repository-button.png)
3. Utilizando el menú desplegable de "rol", selecciona el nivel de acceso predeterminado que te gustaría que tuviera el repositorio en tu imagen de contenedor. ![Niveles de acceso de permisos para otorgar a los repositorios](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

Para personalizar aún más el acceso a tu imagen de contenedor, consulta la sección "[Configurar el acceso a las imágenes de contenedor para tu cuenta personal](#configuring-access-to-container-images-for-your-personal-account)".

### Acceso a las {% data variables.product.prodname_actions %} para las imágenes de contenedor que pertenezcan a organizaciones

{% data reusables.package_registry.package-settings-from-org-level %}
1. En la barra lateral izquierda, haz clic en **Acceso a las acciones**. ![Opción "Acceso a las acciones" en el menú izquierdo](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. Haz clic en **Agregar repositorio** y busca el repositorio que quieres agregar. ![Botón "Agregar repositorio"](/assets/images/help/package-registry/add-repository-button.png)
3. Selecciona el nivel de acceso predeterminado que te gustaría que tuvieran los miembros del repositorio en tu imagen de contenedor utilizando el menú desplegable de "rol". No se incluirá a los colaboradores externos. ![Niveles de acceso de permisos para otorgar a los repositorios](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)

Para personalizar aún más el acceso a tu imagen de contenedor, consulta la sección "[Configurar el acceso a las imágenes de contenedor de una organización](#configuring-access-to-container-images-for-an-organization)".

## Asegurarse de que {% data variables.product.prodname_codespaces %} puede acceder a tu paquete

Predeterminadamente, un codespace puede acceder sin problema a algunos paquetes en el Registro de Contenedores de {% data variables.product.prodname_dotcom %}, tales como aquellos que se publican en el mismo repositorio con la opción de **Heredar acceso** seleccionada. Para obtener más información sobre qué tipo de acceso se configura automáticamente, consulta la sección "[Acceder a las imágenes almacenadas en el Registro de Contenedores de {% data variables.product.prodname_dotcom %}](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry#accessing-images-stored-in-github-container-registry)".

De otra manera, para asegurarte de que un codespace tiene acceso a tu paquete, debes otorgar acceso al repositorio en donde se esté lanzando dicho codespace.

El repositorio especificado no necesita ser aquél en donde se mantiene el código fuente del paquete. Puedes otorgar acceso a un paquete para los codespaces en diversos repositorios.

Una vez que hayas seleccionado el paquete que quieres compartir con un codespace de un repositorio, puedes otorgar este acceso de repositorio.

1. En la barra lateral derecha, haz clic en **Ajustes de paquete**.

   ![Opción de "Ajustes de paquete" en el menú derecho](/assets/images/help/package-registry/package-settings.png)

2. Debajo de "Administrar el acceso de los codespaces", haz clic en **Agregar repositorio**.

   ![Botón "Agregar repositorio"](/assets/images/help/package-registry/manage-codespaces-access-blank.png)

3. Busca el repositorio que quieras agregar.

   ![Botón "Agregar repositorio"](/assets/images/help/package-registry/manage-codespaces-access-search.png)

4. Repite los pasos para cualquier repositorio adicional al que quieras otorgarle acceso.

5. Si el codespace para un repositorio ya no necesita acceso a una imagen, puedes eliminar el acceso.

   ![Botón "Eliminar repositorio"](/assets/images/help/package-registry/manage-codespaces-access-item.png)

## Configurar la visibilidad de las imágenes de contenedor para tu cuenta personal

Cuando publicas un paquete por primera vez, la visibilidad predeterminada es privada y solo tú puedes verlo. Puedes modificar el acceso a las imágenes de contenedor públicas si cambias la configuración de acceso.

Se puede acceder anónimamente a un paquete público sin autenticación. Una vez que hagas tu paquete público, no puedes hacerlo privado nuevamente.

{% data reusables.package_registry.package-settings-from-user-level %}
5. Debajo de "Zona de peligro", elige una configuración de visibilidad:
    - Para que la imagen del contenedor sea visible para todos, da clic en **Hacer público**.
    {% warning %}

    **Advertencia:** Una vez que hagas público algún paquete no podrás volverlo a hacer privado.

    {% endwarning %}
    - Para hacer la la imagen de contenedor sea visible para una selección personalizada de individuos, da clic en **Hacer privada**. ![Opciones de visibilidad del contenedor](/assets/images/help/package-registry/container-visibility-option.png)

## Visibilidad de creación de un contenedor para los miembros de una organización

Puedes elegir la visibilidad de los contenedores que los miembros de las organizaciones pueden publicar predeterminadamente.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. A la izquierda, da clic en **Paquetes**.
6. Debajo de "Creación de contenedores", elige si quieres habilitar la creación de imágenes de contenedor públicas, privadas o internas.
    - Para habilitar a los miembros de la organización para que creen imágenes de contenedor, da clic en **Públicas**.
    - Para habilitar a los miembros de la organización para que creen imágenes de contenedor que solo sean visibles para otros miembros de la organización, da clic en **Privadas**. Puedes personalizar aún más la visibilidad de las imagenes de contenedor privadas.
    - Para habilitar a los miembros de la organización para que creen imágenes de contenedor internas que sean visibles para todos los miembros organizacionales, haz clic en **Interno**. Si la organización pertenece a una empresa, las imágenes de contenedor serán visibles para todos los miembros de la empresa. ![Opciones de visibilidad para las imágenes de contenedor que publican los miembros de la organización](/assets/images/help/package-registry/container-creation-org-settings.png)

## Configurar la visibilidad de las imágenes de contenedor para una organización

Cuando publicas un paquete por primera vez, la visibilidad predeterminada es privada y solo tú puedes verlo. Puedes otorgar roles de acceso diferentes a los usuarios o equipos para tu imagen de contenedor a través de la configuración de acceso.

Se puede acceder anónimamente a un paquete público sin autenticación. Una vez que hagas tu paquete público, no puedes hacerlo privado nuevamente.

{% data reusables.package_registry.package-settings-from-org-level %}
5. Debajo de "Zona de peligro", elige una configuración de visibilidad:
    - Para que la imagen del contenedor sea visible para todos, da clic en **Hacer público**.
    {% warning %}

    **Advertencia:** Una vez que hagas público algún paquete no podrás volverlo a hacer privado.

    {% endwarning %}
    - Para hacer la la imagen de contenedor sea visible para una selección personalizada de individuos, da clic en **Hacer privada**. ![Opciones de visibilidad del contenedor](/assets/images/help/package-registry/container-visibility-option.png)
