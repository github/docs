---
title: Personalizar tu perfil
intro: 'Puedes compartir información sobre tI con otros usuarios de {% data variables.product.product_name %} al configurar una imagen de perfil y agregar una biografía a tu perfil.'
redirect_from:
  - /articles/adding-a-bio-to-your-profile/
  - /articles/setting-your-profile-picture/
  - /articles/how-do-i-set-up-my-profile-picture/
  - /articles/gravatar-problems/
  - /articles/how-do-i-set-up-my-avatar/
  - /articles/personalizing-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---

### Cambiar tu imagen de perfil

Tu imagen de perfil ayuda a identificarte dentro de {% data variables.product.product_name %} en solicitudes de extracción, comentarios, páginas de contribuciones y gráficos.

Cuando te registras en una cuenta, {% data variables.product.product_name %} te proporciona un "identicon" generado al azar. [Tu identicon](https://github.com/blog/1586-identicons) se genera a partir de un hash de tu ID de usuario, por lo que no hay manera de controlar su color o patrón. Puedes reemplazar tu identicon con una imagen que te represente.

{% tip %}

**Sugerencia**: la imagen de tu perfil debería ser un archivo PNG, JPG, o GIF menor de 1 MB de tamaño. Para mostrar la mejor calidad, recomendamos mantener la imagen en alrededor de 500 por 500 píxeles.

{% endtip %}

#### Configurar una imagen de perfil

{% data reusables.user_settings.access_settings %}
2. Dentro de **Profile Picture (Imagen de perfil)**, haz clic en {% octicon "pencil" aria-label="The edit icon" %} **Edit (Editar)**. ![Editar imagen de perfil](/assets/images/help/profile/edit-profile-photo.png)
3. Haz clic en **Upload a photo... (Cargar una foto...)**. ![Editar imagen de perfil](/assets/images/help/profile/edit-profile-picture-options.png)
3. Recorta tu imagen. Cuando hayas terminado, haz clic en **Set new profile picture (Configurar nueva imagen de perfil)**. ![Recortar foto cargada](/assets/images/help/profile/avatar_crop_and_save.png)

#### Restablecer tu imagen de perfil al identicon

{% data reusables.user_settings.access_settings %}
2. Dentro de **Profile Picture (Imagen de perfil)**, haz clic en {% octicon "pencil" aria-label="The edit icon" %} **Edit (Editar)**. ![Editar imagen de perfil](/assets/images/help/profile/edit-profile-photo.png)
3. Para regresar a tu identicon, haz clic en **Remove photo (Eliminar foto)**. Si tu dirección de correo electrónico está asociada con [Gravatar](https://en.gravatar.com/), no puedes regresar a tu identicon. Haz clic en **Revert to Gravatar (Revertir a Gravatar)** en su lugar. ![Editar imagen de perfil](/assets/images/help/profile/edit-profile-picture-options.png)

### Cambiar tu nombre de perfil

Puedes cambiar el nombre que se muestra en tu perfil. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}Este nombre también se puede mostrar al lado de los comentarios que haces en los repositorios privados propiedad de una organización. Para obtener más información, consulta "[Administrar cómo se ven los nombres de los miembros en tu organización](/articles/managing-the-display-of-member-names-in-your-organization)."{% endif %}

{% data reusables.user_settings.access_settings %}
2. Dentro de "Nombre", escribe el nombre que deseas que se muestre en tu perfil. ![Campo Nombre en configuraciones de perfil](/assets/images/help/profile/name-field.png)

### Agregar una biografía en tu perfil

Agrega una biografía a tu perfil para compartir información sobre ti con otros usuarios de {% data variables.product.product_name %}. Con la ayuda de [@mentions](/articles/basic-writing-and-formatting-syntax) y emoji, puedes incluir información sobre dónde estás trabajando actualmente o dónde trabajaste anteriormente, qué tipo de trabajo realizas, o incluso qué tipo de café tomas.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

Para encontrar un formato más largo y una forma más prominente de mostrar la información acerca de ti mismo, también puedes utilizar un README de perfil. Para obtener más información sobre el README de perfil, consulta la sección "[Administrar el README de tu perfil](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)".

{% endif %}

{% note %}

**Nota:** Si tienes habilitada la sección de resumen de la actividad para tu perfil y @mencionas a una organización a la que pertenezcas en tu biografía de perfil, esta organización se presentará primero en tu resumen de actividad. Para obtener más información, consulta "[Mostrar un resumen de tu actividad en tu perfil](/articles/showing-an-overview-of-your-activity-on-your-profile)."

{% endnote %}

{% data reusables.user_settings.access_settings %}
2. Dentro de **Bio (Biografía)**, agrega el contenido que deseas mostrar en tu perfil. El campo biografía tiene un límite de 160 caracteres. ![Actualizar biografía en el perfil](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **Sugerencia:** cuando mencionas una organización, únicamente aquellas de las que eres miembro se completarán automáticamente. Incluso puedes mencionar organizaciones de las que no eres miembro, como un antiguo empleador, pero el nombre de la organización no se completará automáticamente.

  {% endtip %}

3. Haz clic en **Update profile (Actualizar perfil)**. ![Botón Actualizar perfil](/assets/images/help/profile/update-profile-button.png)

### Configurar un estado

Puedes configurar un estado para mostrar información acerca de tu disponibilidad actual en {% data variables.product.product_name %}. Tu estado se mostrará:
- en tu página de perfil {% data variables.product.product_name %}.
- cuando las personas se desplacen sobre tu nombre de usuario o avatar en {% data variables.product.product_name %}.
- en una página de equipo en un equipo del cual eres un miembro. Para obtener más información, consulta "[Acerca de equipos](/articles/about-teams/#team-pages)."
- en el tablero de la organización en una organización de la cual eres miembro. Para obtener más información, consulta "[Acerca del tablero de tu organización](/articles/about-your-organization-dashboard/)."

Cuando configuras tu estado, también puedes permitir que las personas sepan que tienes disponibilidad limitada en {% data variables.product.product_name %}.

![El nombre de usuario mencionado muestra una nota de "busy" (ocupado) al lado del nombre de usuario](/assets/images/help/profile/username-with-limited-availibilty-text.png)

![El revisor solicitado muestra una nota de "busy" (ocupado) la lado del nombre de usuario](/assets/images/help/profile/request-a-review-limited-availability-status.png)

Si seleccionas la opción, "Busy" (Ocupado), cuando las personas mencionan tu nombre de usuario, te asignan una propuesta o una solicitud de extracción o te solicitan una revisión de solicitud de extracción, una nota al lado de tu nombre de usuario mostrará que estás ocupado.

1. En el ángulo superior derecho de {% data variables.product.product_name %}, haz clic en tu foto de perfil, después haz clic en **Set your status (Configurar tu estado)** o, si ya tienes un estado configurado, haz clic en tu estado actual. ![Botón en el perfil para configurar tu estado](/assets/images/help/profile/set-status-on-profile.png)
2. Para agregar un texto personalizado a tu estado, haz clic en el campo texto y escribe un mensaje de estado. ![Campo para escribir un mensaje de estado](/assets/images/help/profile/type-a-status-message.png)
3. De manera opcional, para configurar un estado de emoji, haz clic en el ícono sonriente y selecciona un emoji de la lista. ![Botón para seleccionar un estado de emoji](/assets/images/help/profile/select-emoji-status.png)
4. Como alternativa, si te gustaría compartir que tienes disponibilidad limitada, selecciona "Busy" (Ocupado). ![Opción ocupado seleccionada en las opciones de Editar estado](/assets/images/help/profile/limited-availability-status.png)
5. Utiliza el menú desplegable **Clear status (Borrar estado)** y selecciona cuándo deseas que venza tu estado. Si no deseas seleccionar un vencimiento de estado, mantendrás tu estado hasta que lo borres o edites. ![Menú desplegable para elegir cuando vence tu estado](/assets/images/help/profile/status-expiration.png)
6. Utiliza el menú desplegable y haz clic en la organización para la que deseas que tu estado sea visible. Si no seleccionas una organización, tu estado será público. ![Menú desplegable para elegir para quién es visible tu estado](/assets/images/help/profile/status-visibility.png)
7. Haz clic en **Set status (Configurar estado)**. ![Botón para establecer el estado](/assets/images/help/profile/set-status-button.png)

{% if currentVersion == "free-pro-team@latest" %}
### Mostrar las insignias en tu perfil

Cuando participas en algunos programas, {% data variables.product.prodname_dotcom %} muestra automáticamente una insignia en tu perfil.

| Insignia                                                        | Programa                                                                  | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "north-star" aria-label="The North Star icon" %}     | **{% data variables.product.prodname_arctic_vault %} Colaborador** | Si eres el autor de cualquier confirmación en la rama predeterminada de un repositorio que se archivó en el programa del 2020 del Vaúl del Ártico, obtendrás una insignia de colaborador de {% data variables.product.prodname_arctic_vault %} en tu perfil. Para obtener más información sobre el programa, consulta la sección [{% data variables.product.prodname_archive %}](https://archiveprogram.github.com). |
| {% octicon "cpu" aria-label="The Developer Program icon" %}     | **Miembro del Programa de Desarrolladores**                               | Si eres un miembro registrado del Programa de Desarrolladores de GitHub, crear una app con la API de GitHub te otorgará una insignia de Miembro del Programa de Desarrolladores en tu perfil. Para obtener más información sobre el Programa de Desarrolladores de Github, consulta la sección [Desarrolladores de GitHub](/program/).                                                                                           |
| {% octicon "heart-fill" aria-label="The GitHub Sponsor icon" %} | **Patrocinador de GitHub**                                                | Si patrocinaste a un colaborador de código abierto a través de {% data variables.product.prodname_sponsors %} obtendrás una insignia de Patrocinador de GitHub en tu perfil. Para obtener más información, consulta la sección "[Patrocinar colaboradores de código abierto](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-open-source-contributors)".                                       |
| {% octicon "star-fill" aria-label="The star icon" %}            | **Pro**                                                                   | Si utilizas {% data variables.product.prodname_pro %} obtendrás una insignia de PRO en tu perfil. Para obtener más información acerca de {% data variables.product.prodname_pro %}, consulta los productos de "[{% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products#github-pro)."                                                                                |

### Inhabilitar las insignias en tu perfil

Puedes inhabilitar algunas de las insignias de los programas de {% data variables.product.prodname_dotcom %} en los cuales participas, incluyendo las insignias de PRO y de {% data variables.product.prodname_arctic_vault %}.

{% data reusables.user_settings.access_settings %}
2. Debajo de "Configuración del perfil", deselecciona la insignia que quieres inhabilitar. ![Casilla para dejar de mostrar una insignia en tu perfil](/assets/images/help/profile/display-pro-badge-checkbox.png)
3. Haz clic en **Update preferences (Actualizar preferencias)**.

{% endif %}

### Leer más

- "[Acerca de tu perfil](/articles/about-your-profile)"
