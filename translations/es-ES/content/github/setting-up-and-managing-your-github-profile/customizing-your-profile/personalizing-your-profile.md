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
  - /github/setting-up-and-managing-your-github-profile/personalizing-your-profile
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

Puedes cambiar el nombre que se muestra en tu perfil. Este nombre también podría mostrarse junto a los comentarios que haces en los repositorios privados que pertenezcan a una organización. Para obtener más información, consulta "[Administrar cómo se ven los nombres de los miembros en tu organización](/articles/managing-the-display-of-member-names-in-your-organization)."

{% data reusables.user_settings.access_settings %}
2. Dentro de "Nombre", escribe el nombre que deseas que se muestre en tu perfil. ![Campo Nombre en configuraciones de perfil](/assets/images/help/profile/name-field.png)

### Agregar una biografía en tu perfil

Agrega una biografía a tu perfil para compartir información sobre ti con otros usuarios de {% data variables.product.product_name %}. Con la ayuda de [@mentions](/articles/basic-writing-and-formatting-syntax) y emoji, puedes incluir información sobre dónde estás trabajando actualmente o dónde trabajaste anteriormente, qué tipo de trabajo realizas, o incluso qué tipo de café tomas.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

Para encontrar un formato más largo y una forma más prominente de mostrar la información acerca de ti mismo, también puedes utilizar un README de perfil. Para obtener más información, consulta la sección "[Administrar el README de tu perfil](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)".

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

| Insignia                                                                                                                                      | Programa                                                             | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Icono de insignia de Contribuyente Helicóptero de Marte 2020](/assets/images/help/profile/badge-mars-2020-small.png)                        | **Contribuyente Helicóptero de Marte 2020**                          | Si eres el autor de cualquier comentario(s) que esté(n) presente(s) en el historial de confirmaciones para la etiqueta relevante en una biblioteca de código abierto que se utilice en la Misión Helicóptero a Marte 2020, obtendrás una insignia de Contribuyente Helicópteor a Marte 2020 en tu perfil. Al pasar el puntero del mouse sobre la insignia se te muestran varios de los repositorios con los que contribuiste, los cuales se utilizaron en la misión. Para obtener la lista completa de repositorios que te calificarán para la insignia, consulta la sección "[Lista de repositorios de calificación para la insignia de Contribuyente Helicóptero de Marte 2020](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#list-of-qualifying-repositories-for-mars-2020-helicopter-contributor-badge)". |
| ![Icono de insignia de Contribuyente de Vóbeda Ártica de Código](/assets/images/help/profile/badge-arctic-code-vault-small.png)               | **{% data variables.product.prodname_arctic_vault %} Colaborador** | Si eres el autor de cualquier confirmación en la rama predeterminada de un repositorio que se archivó en el programa del 2020 del Vaúl del Ártico, obtendrás una insignia de colaborador de {% data variables.product.prodname_arctic_vault %} en tu perfil. Al pasar el puntero del mouse sobre la insignia se te muestran varios de los repositorios con los que contribuiste que fueron parte del programa. Para obtener más información sobre el programa, consulta la sección [{% data variables.product.prodname_archive %}](https://archiveprogram.github.com).                                                                                                                                                                                                                                                                       |
| ![Icono de la insignia de Patrocinador de {% data variables.product.prodname_dotcom %}](/assets/images/help/profile/badge-sponsors-small.png) | **Patrocinador de {% data variables.product.prodname_dotcom %}**     | Si patrocinaste a un contribuyente de código abierto mediante {% data variables.product.prodname_sponsors %}, obtendrás una insignia de Patrocinador de {% data variables.product.prodname_dotcom %} en tu perfil. Si haces clic en la insignia, se tellevará a la pestaña de **Patrocinio** de tu perfil. Para obtener más información, consulta la sección "[Patrocinar colaboradores de código abierto](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-open-source-contributors)".                                                                                                                                                                                                                                                                                                                          |
| {% octicon "cpu" aria-label="The Developer Program icon" %}                                                                                   | **Miembro del Programa de Desarrolladores**                          | Si eres un miembro registrado del Programa de Desarrolladores de {% data variables.product.prodname_dotcom %}, al crear una app con la API de {% data variables.product.prodname_dotcom %}, obtendrás una insignia de Miembro del Programa de Desarrolladores en tu perfil. Para obtener más información sobre el Programa de Desarrolladores de {% data variables.product.prodname_dotcom %}, consulta la sección [Desarrollador de GitHub](/program/).                                                                                                                                                                                                                                                                                                                                                                                     |
| {% octicon "star-fill" aria-label="The star icon" %}                                                                                          | **Pro**                                                              | Si utilizas {% data variables.product.prodname_pro %} obtendrás una insignia de PRO en tu perfil. Para obtener más información acerca de {% data variables.product.prodname_pro %}, consulta los productos de "[{% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products#github-pro)."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| {% octicon "lock" aria-label="The lock icon" %}                                                                                               | **Security Bug Bounty Hunter**                                       | If you helped out hunting down security vulnerabilities, you'll get a Security Bug Bounty Hunter badge on your profile. For more information about the {% data variables.product.prodname_dotcom %} Security program, see [{% data variables.product.prodname_dotcom %} Security](https://bounty.github.com/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| {% octicon "mortar-board" aria-label="The mortar-board icon" %}                                                                               | **Github Campus Expert**                                             | If you participate in the {% data variables.product.prodname_dotcom %} Campus Program you'll get a {% data variables.product.prodname_dotcom %} Campus Expert badge on your profile. For more information about the Campus Experts program, see [Campus Experts](https://education.github.com/experts).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Inhabilitar las insignias en tu perfil

Puedes inhabilitar algunas de las insignias para los programas de {% data variables.product.prodname_dotcom %} en los que estás participando, incluyendo aquellas de PRO, {% data variables.product.prodname_arctic_vault %} y Contribuyente Helicóptero de Marte 2020.

{% data reusables.user_settings.access_settings %}
2. Debajo de "Configuración del perfil", deselecciona la insignia que quieres inhabilitar. ![Casilla para dejar de mostrar una insignia en tu perfil](/assets/images/help/profile/profile-badge-settings.png)
3. Haz clic en **Update preferences (Actualizar preferencias)**.

{% endif %}

### Lista de repositorios que califican para la insignia de Contributente Helicóptero de Marte 2020

Si creaste cualquiera de las confirmaciones presentes en el historial de confirmaciones de la etiqueta listada de uno o más de los repositorios siguientes, recibirás la insignia de contribuyente Helicóptero de Marte 2020 en tu perfil. La confirmación que creaste debe hacerse con una dirección de correo electrónico verificada y asociada con tu cuenta en el momento en que {% data variables.product.prodname_dotcom %} determine las contribuciones elegibles para que se te pueda atribuir. You can be the original author or [one of the co-authors](/github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) of the commit. Los cambios futuros a los correos electrónicos verificados no tendrán efecto en la insignia. Creamos la lista con base en la información que recibimos del Laboratorio de Propulsión a Chorro de la NASA.

| Repositorio de {% data variables.product.prodname_dotcom %}                   | Versión   | Etiqueta                                                                                                   |
| ----------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| [torvalds/linux](https://github.com/torvalds/linux)                           | 3.4       | [v3.4](https://github.com/torvalds/linux/releases/tag/v3.4)                                                |
| [python/cpython](https://github.com/python/cpython)                           | 3.9.2     | [v3.9.2](https://github.com/python/cpython/releases/tag/v3.9.2)                                            |
| [boto/boto3](https://github.com/boto/boto3)                                   | 1.17.17   | [1.17.17](https://github.com/boto/boto3/releases/tag/1.17.17)                                              |
| [boto/botocore](https://github.com/boto/botocore)                             | 1.20.11   | [1.20.11](https://github.com/boto/botocore/releases/tag/1.20.11)                                           |
| [certifi/python-certifi](https://github.com/certifi/python-certifi)           | 2020.12.5 | [2020.12.05](https://github.com/certifi/python-certifi/releases/tag/2020.12.05)                            |
| [chardet/chardet](https://github.com/chardet/chardet)                         | 4.0.0     | [4.0.0](https://github.com/chardet/chardet/releases/tag/4.0.0)                                             |
| [matplotlib/cycler](https://github.com/matplotlib/cycler)                     | 0.10.0    | [v0.10.0](https://github.com/matplotlib/cycler/releases/tag/v0.10.0)                                       |
| [elastic/elasticsearch-py](https://github.com/elastic/elasticsearch-py)       | 6.8.1     | [6.8.1](https://github.com/elastic/elasticsearch-py/releases/tag/6.8.1)                                    |
| [ianare/exif-py](https://github.com/ianare/exif-py)                           | 2.3.2     | [2.3.2](https://github.com/ianare/exif-py/releases/tag/2.3.2)                                              |
| [kjd/idna](https://github.com/kjd/idna)                                       | 2.10      | [v2.10](https://github.com/kjd/idna/releases/tag/v2.10)                                                    |
| [jmespath/jmespath.py](https://github.com/jmespath/jmespath.py)               | 0.10.0    | [0.10.0](https://github.com/jmespath/jmespath.py/releases/tag/0.10.0)                                      |
| [nucleic/kiwi](https://github.com/nucleic/kiwi)                               | 1.3.1     | [1.3.1](https://github.com/nucleic/kiwi/releases/tag/1.3.1)                                                |
| [matplotlib/matplotlib](https://github.com/matplotlib/matplotlib)             | 3.3.4     | [v3.3.4](https://github.com/matplotlib/matplotlib/releases/tag/v3.3.4)                                     |
| [numpy/numpy](https://github.com/numpy/numpy)                                 | 1.20.1    | [v1.20.1](https://github.com/numpy/numpy/releases/tag/v1.20.1)                                             |
| [opencv/opencv-python](https://github.com/opencv/opencv-python)               | 4.5.1.48  | [48](https://github.com/opencv/opencv-python/releases/tag/48)                                              |
| [python-pillow/Pillow](https://github.com/python-pillow/Pillow)               | 8.1.0     | [8.1.0](https://github.com/python-pillow/Pillow/releases/tag/8.1.0)                                        |
| [pycurl/pycurl](https://github.com/pycurl/pycurl)                             | 7.43.0.6  | [REL_7_43_0_6](https://github.com/pycurl/pycurl/releases/tag/REL_7_43_0_6)                             |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing)                 | 2.4.7     | [pyparsing_2.4.7](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.7)                     |
| [pyserial/pyserial](https://github.com/pyserial/pyserial)                     | 3.5       | [v3.5](https://github.com/pyserial/pyserial/releases/tag/v3.5)                                             |
| [dateutil/dateutil](https://github.com/dateutil/dateutil)                     | 2.8.1     | [2.8.1](https://github.com/dateutil/dateutil/releases/tag/2.8.1)                                           |
| [yaml/pyyaml ](https://github.com/yaml/pyyaml)                                | 5.4.1     | [5.4.1](https://github.com/yaml/pyyaml/releases/tag/5.4.1)                                                 |
| [psf/requests](https://github.com/psf/requests)                               | 2.25.1    | [v2.25.1](https://github.com/psf/requests/releases/tag/v2.25.1)                                            |
| [boto/s3transfer](https://github.com/boto/s3transfer)                         | 0.3.4     | [0.3.4](https://github.com/boto/s3transfer/releases/tag/0.3.4)                                             |
| [enthought/scimath](https://github.com/enthought/scimath)                     | 4.2.0     | [4.2.0](https://github.com/enthought/scimath/releases/tag/4.2.0)                                           |
| [scipy/scipy](https://github.com/scipy/scipy)                                 | 1.6.1     | [v1.6.1](https://github.com/scipy/scipy/releases/tag/v1.6.1)                                               |
| [benjaminp/six](https://github.com/benjaminp/six)                             | 1.15.0    | [1.15.0](https://github.com/benjaminp/six/releases/tag/1.15.0)                                             |
| [enthought/traits](https://github.com/enthought/traits)                       | 6.2.0     | [6.2.0](https://github.com/enthought/traits/releases/tag/6.2.0)                                            |
| [urllib3/urllib3](https://github.com/urllib3/urllib3)                         | 1.26.3    | [1.26.3](https://github.com/urllib3/urllib3/releases/tag/1.26.3)                                           |
| [python-attrs/attrs](https://github.com/python-attrs/attrs)                   | 19.3.0    | [19.3.0](https://github.com/python-attrs/attrs/releases/tag/19.3.0)                                        |
| [CheetahTemplate3/cheetah3](https://github.com/CheetahTemplate3/cheetah3/)    | 3.2.4     | [3.2.4](https://github.com/CheetahTemplate3/cheetah3/releases/tag/3.2.4)                                   |
| [pallets/click](https://github.com/pallets/click)                             | 7.0       | [7.0](https://github.com/pallets/click/releases/tag/7.0)                                                   |
| [pallets/flask](https://github.com/pallets/flask)                             | 1.1.1     | [1.1.1](https://github.com/pallets/flask/releases/tag/1.1.1)                                               |
| [flask-restful/flask-restful](https://github.com/flask-restful/flask-restful) | 0.3.7     | [0.3.7](https://github.com/flask-restful/flask-restful/releases/tag/0.3.7)                                 |
| [pytest-dev/iniconfig](https://github.com/pytest-dev/iniconfig)               | 1.0.0     | [v1.0.0](https://github.com/pytest-dev/iniconfig/releases/tag/v1.0.0)                                      |
| [pallets/itsdangerous](https://github.com/pallets/itsdangerous)               | 1.1.0     | [1.1.0](https://github.com/pallets/itsdangerous/releases/tag/1.1.0)                                        |
| [pallets/jinja](https://github.com/pallets/jinja)                             | 2.10.3    | [2.10.3](https://github.com/pallets/jinja/releases/tag/2.10.3)                                             |
| [lxml/lxml](https://github.com/lxml/lxml)                                     | 4.4.1     | [lxml-4.4.1](https://github.com/lxml/lxml/releases/tag/lxml-4.4.1)                                         |
| [Python-Markdown/markdown](https://github.com/Python-Markdown/markdown)       | 3.1.1     | [3.1.1](https://github.com/Python-Markdown/markdown/releases/tag/3.1.1)                                    |
| [pallets/markupsafe](https://github.com/pallets/markupsafe)                   | 1.1.1     | [1.1.1](https://github.com/pallets/markupsafe/releases/tag/1.1.1)                                          |
| [pypa/packaging](https://github.com/pypa/packaging)                           | 19.2      | [19.2](https://github.com/pypa/packaging/releases/tag/19.2)                                                |
| [pexpect/pexpect](https://github.com/pexpect/pexpect)                         | 4.7.0     | [4.7.0](https://github.com/pexpect/pexpect/releases/tag/4.7.0)                                             |
| [pytest-dev/pluggy](https://github.com/pytest-dev/pluggy)                     | 0.13.0    | [0.13.0](https://github.com/pytest-dev/pluggy/releases/tag/0.13.0)                                         |
| [pexpect/ptyprocess](https://github.com/pexpect/ptyprocess)                   | 0.6.0     | [0.6.0](https://github.com/pexpect/ptyprocess/releases/tag/0.6.0)                                          |
| [pytest-dev/py](https://github.com/pytest-dev/py)                             | 1.8.0     | [1.8.0](https://github.com/pytest-dev/py/releases/tag/1.8.0)                                               |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing)                 | 2.4.5     | [pyparsing_2.4.5](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.5)                     |
| [pytest-dev/pytest](https://github.com/pytest-dev/pytest)                     | 5.3.0     | [5.3.0](https://github.com/pytest-dev/pytest/releases/tag/5.3.0)                                           |
| [stub42/pytz](https://github.com/stub42/pytz)                                 | 2019.3    | [release_2019.3](https://github.com/stub42/pytz/releases/tag/release_2019.3)                               |
| [uiri/toml](https://github.com/uiri/toml)                                     | 0.10.0    | [0.10.0](https://github.com/uiri/toml/releases/tag/0.10.0)                                                 |
| [pallets/werkzeug](https://github.com/pallets/werkzeug)                       | 0.16.0    | [0.16.0](https://github.com/pallets/werkzeug/releases/tag/0.16.0)                                          |
| [dmnfarrell/tkintertable](https://github.com/dmnfarrell/tkintertable)         | 1.2       | [v1.2](https://github.com/dmnfarrell/tkintertable/releases/tag/v1.2)                                       |
| [wxWidgets/wxPython-Classic](https://github.com/wxWidgets/wxPython-Classic)   | 2.9.1.1   | [wxPy-2.9.1.1](https://github.com/wxWidgets/wxPython-Classic/releases/tag/wxPy-2.9.1.1)                    |
| [nasa/fprime](https://github.com/nasa/fprime)                                 | 1.3       | [NASA-v1.3](https://github.com/nasa/fprime/releases/tag/NASA-v1.3)                                         |
| [nucleic/cppy](https://github.com/nucleic/cppy)                               | 1.1.0     | [1.1.0](https://github.com/nucleic/cppy/releases/tag/1.1.0)                                                |
| [opencv/opencv](https://github.com/opencv/opencv)                             | 4.5.1     | [4.5.1](https://github.com/opencv/opencv/releases/tag/4.5.1)                                               |
| [curl/curl](https://github.com/curl/curl)                                     | 7.72.0    | [curl-7_72_0](https://github.com/curl/curl/releases/tag/curl-7_72_0)                                     |
| [madler/zlib](https://github.com/madler/zlib)                                 | 1.2.11    | [v1.2.11](https://github.com/madler/zlib/releases/tag/v1.2.11)                                             |
| [apache/lucene](https://github.com/apache/lucene)                             | 7.7.3     | [releases/lucene-solr/7.7.3](https://github.com/apache/lucene/releases/tag/releases%2Flucene-solr%2F7.7.3) |
| [yaml/libyaml](https://github.com/yaml/libyaml)                               | 0.2.5     | [0.2.5](https://github.com/yaml/libyaml/releases/tag/0.2.5)                                                |
| [elastic/elasticsearch](https://github.com/elastic/elasticsearch)             | 6.8.1     | [v6.8.1](https://github.com/elastic/elasticsearch/releases/tag/v6.8.1)                                     |
| [twbs/bootstrap](https://github.com/twbs/bootstrap)                           | 4.3.1     | [v4.3.1](https://github.com/twbs/bootstrap/releases/tag/v4.3.1)                                            |
| [vuejs/vue](https://github.com/vuejs/vue)                                     | 2.6.10    | [v2.6.10](https://github.com/vuejs/vue/releases/tag/v2.6.10)                                               |
| [carrotsearch/hppc](https://github.com/carrotsearch/hppc)                     | 0.7.1     | [0.7.1](https://github.com/carrotsearch/hppc/releases/tag/0.7.1)                                           |
| [JodaOrg/joda-time](https://github.com/JodaOrg/joda-time)                     | 2.10.1    | [v2.10.1](https://github.com/JodaOrg/joda-time/releases/tag/v2.10.1)                                       |
| [tdunning/t-digest](https://github.com/tdunning/t-digest)                     | 3.2       | [t-digest-3.2](https://github.com/tdunning/t-digest/releases/tag/t-digest-3.2)                             |
| [HdrHistogram/HdrHistogram](https://github.com/HdrHistogram/HdrHistogram)     | 2.1.9     | [HdrHistogram-2.1.9](https://github.com/HdrHistogram/HdrHistogram/releases/tag/HdrHistogram-2.1.9)         |
| [locationtech/spatial4j](https://github.com/locationtech/spatial4j)           | 0.7       | [spatial4j-0.7](https://github.com/locationtech/spatial4j/releases/tag/spatial4j-0.7)                      |
| [locationtech/jts](https://github.com/locationtech/jts)                       | 1.15.0    | [jts-1.15.0](https://github.com/locationtech/jts/releases/tag/jts-1.15.0)                                  |
| [apache/logging-log4j2](https://github.com/apache/logging-log4j2)             | 2.11      | [log4j-2.11.0](https://github.com/apache/logging-log4j2/releases/tag/log4j-2.11.0)                         |

### Leer más

- "[Acerca de tu perfil](/articles/about-your-profile)"
