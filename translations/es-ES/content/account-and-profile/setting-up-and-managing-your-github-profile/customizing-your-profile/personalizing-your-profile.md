---
title: Personalizar tu perfil
intro: 'Puedes compartir información sobre tI con otros usuarios de {% data variables.product.product_name %} al configurar una imagen de perfil y agregar una biografía a tu perfil.'
redirect_from:
  - /articles/adding-a-bio-to-your-profile
  - /articles/setting-your-profile-picture
  - /articles/how-do-i-set-up-my-profile-picture
  - /articles/gravatar-problems
  - /articles/how-do-i-set-up-my-avatar
  - /articles/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Personalize
ms.openlocfilehash: c12fccd91144428fe9aad2f01d2c0b0941fdd4d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681057'
---
## Cambiar tu imagen de perfil

Tu imagen de perfil ayuda a identificarte dentro de {% data variables.product.product_name %} en solicitudes de extracción, comentarios, páginas de contribuciones y gráficos.

Cuando te registras en una cuenta, {% data variables.product.product_name %} te proporciona un "identicon" generado al azar. [Tu identicon](https://github.com/blog/1586-identicons) se genera a partir de un hash de tu identificador de usuario, por lo que no hay ninguna forma de controlar su color o patrón. Puedes reemplazar tu identicon con una imagen que te represente.

{% note %}

**Nota{% ifversion ghec %}s{% endif %}** : {% ifversion ghec %}

* {% endif %}La imagen de perfil debe ser un archivo PNG, JPG o GIF, y debe tener menos de 1 MB de tamaño y ser inferior a 3000 × 3000 píxeles. Para mostrar la mejor calidad, recomendamos mantener la imagen en alrededor de 500 por 500 píxeles.
{% ifversion ghec %}* Las fotos de perfil de gravatar no son compatibles con {% data variables.product.prodname_emus %}.{% endif %}

{% endnote %}

### Configurar una imagen de perfil

{% data reusables.user-settings.access_settings %}
2. En **Imagen de perfil**, haz clic en {% octicon "pencil" aria-label="The edit icon" %} **Editar**.
![Editar imagen de perfil](/assets/images/help/profile/edit-profile-photo.png)
3. Haz clic en **Cargar una foto…** {% ifversion not ghae %} ![Actualiza la imagen de perfil.](/assets/images/help/profile/edit-profile-picture-options.png){% endif %}
3. Recorta tu imagen. Cuando hayas terminado, haz clic en **Establecer nueva imagen de perfil**.
    ![Recortar foto cargada](/assets/images/help/profile/avatar_crop_and_save.png)

### Restablecer tu imagen de perfil al identicon

{% data reusables.user-settings.access_settings %}
2. En **Imagen de perfil**, haz clic en {% octicon "pencil" aria-label="The edit icon" %} **Editar**.
![Editar imagen de perfil](/assets/images/help/profile/edit-profile-photo.png)
3. Para revertir a tu identicon, haz clic en **Quitar foto**. {% ifversion not ghae %}Si tu dirección de correo electrónico está asociada a un [Gravatar](https://en.gravatar.com/), no puedes revertir a tu identicon. Haz clic en **Revertir a Gravatar** en su lugar.
![Actualización de la imagen de perfil](/assets/images/help/profile/edit-profile-picture-options.png){% endif %}

## Cambiar tu nombre de perfil

Puedes cambiar el nombre que se muestra en tu perfil. Este nombre también podría mostrarse junto a los comentarios que haces en los repositorios privados que pertenezcan a una organización. Para obtener más información, consulta "[Administrar la visualización de los nombres de los miembros en tu organización](/articles/managing-the-display-of-member-names-in-your-organization)".

{% ifversion fpt or ghec %} {% note %}

**Nota:** Si eres miembro de una {% data variables.product.prodname_emu_enterprise %}, cualquier cambio en tu nombre de perfil debe hacerse a través de tu proveedor de identidades, en lugar de con {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %}
2. Dentro de "Nombre", escribe el nombre que deseas que se muestre en tu perfil.
  ![Campo Nombre en la configuración del perfil](/assets/images/help/profile/name-field.png)

## Agregar una biografía en tu perfil

Agrega una biografía a tu perfil para compartir información sobre ti con otros usuarios de {% data variables.product.product_name %}. Con la ayuda de [@mentions](/articles/basic-writing-and-formatting-syntax) y un emoji, puedes incluir información sobre dónde trabajas actualmente o dónde trabajaste anteriormente, qué tipo de trabajo realizas o incluso qué tipo de café bebes.

{% ifversion fpt or ghes or ghec %}

Para encontrar un formato más largo y una forma más prominente de mostrar la información acerca de ti mismo, también puedes utilizar un README de perfil. Para más información, vea "[Administración del archivo Léame del perfil](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)".

{% endif %}

{% note %}

**Nota:** Si tienes habilitada la sección de resumen de la actividad para tu perfil y aplicas @mention a una organización de la que eres miembro en la biografía de tu perfil, entonces esa organización se presentará primero en tu resumen de actividad. Para obtener más información, consulta "[Mostrar un resumen de tu actividad en tu perfil](/articles/showing-an-overview-of-your-activity-on-your-profile)".

{% endnote %}

{% data reusables.user-settings.access_settings %}
2. En **Biografía**, agrega el contenido que quieres mostrar en tu perfil. El campo biografía tiene un límite de 160 caracteres.
    ![Actualizar biografía en el perfil](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **Sugerencia:** Cuando haces @mention a una organización, solo aquellas de las que eres miembro se completarán automáticamente. También puedes hacer @mention a organizaciones de las que no eres miembro, como un antiguo empleador, pero el nombre de la organización no se completará automáticamente.

  {% endtip %}

3. Haga clic en **Update profile**.
    ![Botón Actualizar perfil](/assets/images/help/profile/update-profile-button.png)

## Configurar un estado

Puedes configurar un estado para mostrar información acerca de tu disponibilidad actual en {% data variables.product.product_name %}. Tu estado se mostrará:
- en tu página de perfil {% data variables.product.product_name %}.
- cuando las personas se desplacen sobre tu nombre de usuario o avatar en {% data variables.product.product_name %}.
- en una página de equipo en un equipo del cual eres un miembro. Para más información, vea "[Acerca de los equipos](/articles/about-teams/#team-pages)".
- en el tablero de la organización en una organización de la cual eres miembro. Para obtener más información, consulta "[Acerca del panel de la organización](/articles/about-your-organization-dashboard/)".

Cuando configuras tu estado, también puedes permitir que las personas sepan que tienes disponibilidad limitada en {% data variables.product.product_name %}.

![El nombre de usuario mencionado muestra la nota "ocupado" junto al nombre de usuario.](/assets/images/help/profile/username-with-limited-availability-text.png)

![El revisor solicitado muestra la nota "ocupado" junto al nombre de usuario](/assets/images/help/profile/request-a-review-limited-availability-status.png)

Si seleccionas la opción "Ocupado", cuando los usuarios hagan @mention a tu nombre de usuario, te asignen una incidencia o solicitud de incorporación de cambios o te soliciten una revisión de ese tipo de solicitud, aparecerá una nota al lado de tu nombre de usuario que muestra que estás ocupado. También se te excluirá de la tarea de revisión automática para las solicitudes de cambio que se asignen a cualquier equipo al que pertenezcas. Para obtener más información, consulta "[Administrar los ajustes de revisión de código para tu equipo](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)".

1. En la parte superior derecha de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_name %}{% endif %}, haz clic en la foto de tu perfil y luego en **Establecer tu estado** o, en caso de que ya hayas configurado un estado, haz clic en tu estado actual.
  ![Botón en el perfil para establecer tu estado](/assets/images/help/profile/set-status-on-profile.png)
2. Para agregar un texto personalizado a tu estado, haz clic en el campo texto y escribe un mensaje de estado.
  ![Campo para escribir un mensaje de estado](/assets/images/help/profile/type-a-status-message.png)
3. De manera opcional, para configurar un estado de emoji, haz clic en el ícono sonriente y selecciona un emoji de la lista.
  ![Botón para seleccionar un estado de emoji](/assets/images/help/profile/select-emoji-status.png)
4. Como alternativa, si te gustaría compartir que tienes disponibilidad limitada, selecciona "Busy" (Ocupado).
  ![Opción Ocupado seleccionada en las opciones de Editar estado](/assets/images/help/profile/limited-availability-status.png)
5. Usa el menú desplegable **Borrar estado** y selecciona cuándo quieres que expire tu estado. Si no deseas seleccionar un vencimiento de estado, mantendrás tu estado hasta que lo borres o edites.
  ![Menú desplegable para elegir cuándo expira tu estado](/assets/images/help/profile/status-expiration.png)
6. Utiliza el menú desplegable y haz clic en la organización para la que deseas que tu estado sea visible. Si no seleccionas una organización, tu estado será público.
  ![Menú desplegable para elegir para quién es visible tu estado](/assets/images/help/profile/status-visibility.png)
7. Haz clic en **Establecer estado**.
  ![Botón para establecer el estado](/assets/images/help/profile/set-status-button.png)

{% ifversion fpt or ghec %}
## Mostrar las insignias en tu perfil

Cuando participas en algunos programas, {% data variables.product.prodname_dotcom %} muestra automáticamente una insignia en tu perfil.

| Distintivo | Programa | Descripción |
| --- | --- | --- |
| {% octicon "cpu" aria-label="The Developer Program icon" %} | **Miembro del programa de desarrolladores** | Si eres un miembro registrado del Programa de Desarrolladores de {% data variables.product.prodname_dotcom %} y estés creando una app con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, obtendrás una insignia de Miembro del Programa de Desarrollo en tu perfil. Para obtener más información sobre el programa de desarrolladores de {% data variables.product.prodname_dotcom %}, consulta [Desarrollador de GitHub](/program/). |
| {% octicon "star-fill" aria-label="The star icon" %} | **Pro** | Si utilizas {% data variables.product.prodname_pro %} obtendrás una insignia de PRO en tu perfil. Para obtener más información sobre {% data variables.product.prodname_pro %}, consulta "[Productos de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products#github-pro)". |
| {% octicon "lock" aria-label="The lock icon" %} | **Cazador de recompensas por errores de seguridad** | Si ayudaste a identificar vulnerabilidades de seguridad, obtendrás una insignia de Cazador de Recompensas por Errores de Seguridad en tu perfil. Para obtener más información sobre el programa de seguridad de {% data variables.product.prodname_dotcom %}, consulta [Seguridad de {% data variables.product.prodname_dotcom %}](https://bounty.github.com/). |
| {% octicon "mortar-board" aria-label="The mortar-board icon" %} | **Experto del campus de {% data variables.product.prodname_dotcom %}** | Si participas en el {% data variables.product.prodname_campus_program %}, obtendrás una insignia de Experto del Campus de {% data variables.product.prodname_dotcom %} en tu perfil. Para obtener más información sobre el programa Expertos en campus, consulta [Expertos en campus](https://education.github.com/experts). |
| {% octicon "shield" aria-label="The shield icon" %} | **Crédito de aviso de seguridad** | Si se acepta un aviso de seguridad que has enviado a [{% data variables.product.prodname_dotcom %} Advisory Database](https://github.com/advisories), obtendrás un distintivo de reconocimiento de aviso de seguridad en tu perfil. Para obtener más información sobre las asesorías de seguridad de {% data variables.product.prodname_dotcom %}, consulta "[Asesorías de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories)". |
| {% octicon "check" aria-label="The check icon" %} | **Respuesta al debate** | Si tu aportación a un debate se marca como respuesta, recibirás un distintivo de respuesta al debate en tu perfil. Para obtener más información sobre los debates de {% data variables.product.prodname_dotcom %}, consulta [Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions). |

{% endif %}

{% ifversion fpt or ghec %}

## Obtención de logros

Los logros celebran eventos y acciones específicos que se producen en {% data variables.product.prodname_dotcom %}. Aparecerán como pequeños distintivos en la barra lateral de tu perfil. Al hacer clic o mantener el puntero sobre un logro, se mostrará una vista detallada que indica cómo se ha obtenido, con una breve descripción y vínculos a los eventos que contribuyeron a conseguirlo. Los vínculos de los eventos solo serán visibles para los usuarios que tengan acceso al repositorio u organización donde se produjo el evento. Los vínculos de los eventos serán inaccesibles para todos los usuarios sin acceso.

Para impedir que las contribuciones privadas cuenten para los logros, o para desactivar los logros por completo, consulta "[Visualización de las contribuciones privadas y los logros en el perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)".

{% note %}

**Nota**: Esta característica se encuentra en versión beta y está sujeta a cambios.

{% endnote %}

{% endif %}

## Lista de repositorios aptos para el logro de colaborador de Helicóptero de Mars 2020

Si creaste alguna de las confirmaciones presentes en el historial de confirmaciones de la etiqueta indicada de uno o varios de los repositorios siguientes, recibirás el logro de colaborador de Helicóptero de Mars 2020 en tu perfil. La confirmación que creaste debe hacerse con una dirección de correo electrónico verificada y asociada con tu cuenta en el momento en que {% data variables.product.prodname_dotcom %} determine las contribuciones elegibles para que se te pueda atribuir. Puedes ser el autor original o [uno de los coautores](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) de la confirmación. Los cambios futuros a los correos electrónicos verificados no tendrán efecto en la insignia. Creamos la lista con base en la información que recibimos del Laboratorio de Propulsión a Chorro de la NASA.

| Repositorio de {% data variables.product.prodname_dotcom %} | Versión | Etiqueta |
|---|---|---|
| [torvalds/linux](https://github.com/torvalds/linux) | 3.4 | [v3.4](https://github.com/torvalds/linux/releases/tag/v3.4) |
| [python/cpython](https://github.com/python/cpython) | 3.9.2 | [v3.9.2](https://github.com/python/cpython/releases/tag/v3.9.2) |
| [boto/boto3](https://github.com/boto/boto3) | 1.17.17 | [1.17.17](https://github.com/boto/boto3/releases/tag/1.17.17) |
| [boto/botocore](https://github.com/boto/botocore) | 1.20.11 | [1.20.11](https://github.com/boto/botocore/releases/tag/1.20.11) |
| [certifi/python-certifi](https://github.com/certifi/python-certifi) | 2020.12.5 | [2020.12.05](https://github.com/certifi/python-certifi/releases/tag/2020.12.05) |
| [chardet/chardet](https://github.com/chardet/chardet) | 4.0.0 | [4.0.0](https://github.com/chardet/chardet/releases/tag/4.0.0) |
| [matplotlib/cycler](https://github.com/matplotlib/cycler) | 0.10.0 | [v0.10.0](https://github.com/matplotlib/cycler/releases/tag/v0.10.0) |
| [elastic/elasticsearch-py](https://github.com/elastic/elasticsearch-py) | 6.8.1 | [6.8.1](https://github.com/elastic/elasticsearch-py/releases/tag/6.8.1) |
| [ianare/exif-py](https://github.com/ianare/exif-py) | 2.3.2 | [2.3.2](https://github.com/ianare/exif-py/releases/tag/2.3.2) |
| [kjd/idna](https://github.com/kjd/idna) | 2.10 | [v2.10](https://github.com/kjd/idna/releases/tag/v2.10) |
| [jmespath/jmespath.py](https://github.com/jmespath/jmespath.py) | 0.10.0 | [0.10.0](https://github.com/jmespath/jmespath.py/releases/tag/0.10.0) |
| [nucleic/kiwi](https://github.com/nucleic/kiwi) | 1.3.1 | [1.3.1](https://github.com/nucleic/kiwi/releases/tag/1.3.1) |
| [matplotlib/matplotlib](https://github.com/matplotlib/matplotlib) | 3.3.4 | [v3.3.4](https://github.com/matplotlib/matplotlib/releases/tag/v3.3.4) |
| [numpy/numpy](https://github.com/numpy/numpy) | 1.20.1 | [v1.20.1](https://github.com/numpy/numpy/releases/tag/v1.20.1) |
| [opencv/opencv-python](https://github.com/opencv/opencv-python) | 4.5.1.48 | [48](https://github.com/opencv/opencv-python/releases/tag/48) |
| [python-pillow/Pillow](https://github.com/python-pillow/Pillow) | 8.1.0 | [8.1.0](https://github.com/python-pillow/Pillow/releases/tag/8.1.0) |
| [pycurl/pycurl](https://github.com/pycurl/pycurl) | 7.43.0.6 | [REL_7_43_0_6](https://github.com/pycurl/pycurl/releases/tag/REL_7_43_0_6) |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing) | 2.4.7 | [pyparsing_2.4.7](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.7) |
| [pyserial/pyserial](https://github.com/pyserial/pyserial) | 3,5 | [v3.5](https://github.com/pyserial/pyserial/releases/tag/v3.5) |
| [dateutil/dateutil](https://github.com/dateutil/dateutil) | 2.8.1 | [2.8.1](https://github.com/dateutil/dateutil/releases/tag/2.8.1) |
| [yaml/pyyaml ](https://github.com/yaml/pyyaml) | 5.4.1 | [5.4.1](https://github.com/yaml/pyyaml/releases/tag/5.4.1) |
| [psf/requests](https://github.com/psf/requests) | 2.25.1 | [v2.25.1](https://github.com/psf/requests/releases/tag/v2.25.1) |
| [boto/s3transfer](https://github.com/boto/s3transfer) | 0.3.4 | [0.3.4](https://github.com/boto/s3transfer/releases/tag/0.3.4) |
| [enthought/scimath](https://github.com/enthought/scimath) | 4.2.0 | [4.2.0](https://github.com/enthought/scimath/releases/tag/4.2.0) |
| [scipy/scipy](https://github.com/scipy/scipy) | 1.6.1 | [v1.6.1](https://github.com/scipy/scipy/releases/tag/v1.6.1) |
| [benjaminp/six](https://github.com/benjaminp/six) | 1.15.0 | [1.15.0](https://github.com/benjaminp/six/releases/tag/1.15.0) |
| [enthought/traits](https://github.com/enthought/traits) | 6.2.0 | [6.2.0](https://github.com/enthought/traits/releases/tag/6.2.0) |
| [urllib3/urllib3](https://github.com/urllib3/urllib3) | 1.26.3 | [1.26.3](https://github.com/urllib3/urllib3/releases/tag/1.26.3) |
| [python-attrs/attrs](https://github.com/python-attrs/attrs) | 19.3.0 | [19.3.0](https://github.com/python-attrs/attrs/releases/tag/19.3.0) |
| [CheetahTemplate3/cheetah3](https://github.com/CheetahTemplate3/cheetah3/) | 3.2.4 | [3.2.4](https://github.com/CheetahTemplate3/cheetah3/releases/tag/3.2.4) |
| [pallets/click](https://github.com/pallets/click) | 7.0 | [7.0](https://github.com/pallets/click/releases/tag/7.0) |
| [pallets/flask](https://github.com/pallets/flask) | 1.1.1 | [1.1.1](https://github.com/pallets/flask/releases/tag/1.1.1) |
| [flask-restful/flask-restful](https://github.com/flask-restful/flask-restful) | 0.3.7 | [0.3.7](https://github.com/flask-restful/flask-restful/releases/tag/0.3.7) |
| [pytest-dev/iniconfig](https://github.com/pytest-dev/iniconfig) | 1.0.0 | [v1.0.0](https://github.com/pytest-dev/iniconfig/releases/tag/v1.0.0) |
| [pallets/itsdangerous](https://github.com/pallets/itsdangerous) | 1.1.0 | [1.1.0](https://github.com/pallets/itsdangerous/releases/tag/1.1.0) |
| [pallets/jinja](https://github.com/pallets/jinja) | 2.10.3 | [2.10.3](https://github.com/pallets/jinja/releases/tag/2.10.3) |
| [lxml/lxml](https://github.com/lxml/lxml) | 4.4.1 | [lxml-4.4.1](https://github.com/lxml/lxml/releases/tag/lxml-4.4.1) |
| [Python-Markdown/markdown](https://github.com/Python-Markdown/markdown) | 3.1.1 | [3.1.1](https://github.com/Python-Markdown/markdown/releases/tag/3.1.1) |
| [pallets/markupsafe](https://github.com/pallets/markupsafe) | 1.1.1 | [1.1.1](https://github.com/pallets/markupsafe/releases/tag/1.1.1) |
| [pypa/packaging](https://github.com/pypa/packaging) | 19.2 | [19.2](https://github.com/pypa/packaging/releases/tag/19.2) |
| [pexpect/pexpect](https://github.com/pexpect/pexpect) | 4.7.0 | [4.7.0](https://github.com/pexpect/pexpect/releases/tag/4.7.0) |
| [pytest-dev/pluggy](https://github.com/pytest-dev/pluggy) | 0.13.0 | [0.13.0](https://github.com/pytest-dev/pluggy/releases/tag/0.13.0) |
| [pexpect/ptyprocess](https://github.com/pexpect/ptyprocess) | 0.6.0 | [0.6.0](https://github.com/pexpect/ptyprocess/releases/tag/0.6.0) |
| [pytest-dev/py](https://github.com/pytest-dev/py) | 1.8.0 | [1.8.0](https://github.com/pytest-dev/py/releases/tag/1.8.0) |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing) | 2.4.5 | [pyparsing_2.4.5](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.5) |
| [pytest-dev/pytest](https://github.com/pytest-dev/pytest) | 5.3.0 | [5.3.0](https://github.com/pytest-dev/pytest/releases/tag/5.3.0) |
| [stub42/pytz](https://github.com/stub42/pytz) | 2019.3 | [release_2019.3](https://github.com/stub42/pytz/releases/tag/release_2019.3) |
| [uiri/toml](https://github.com/uiri/toml) | 0.10.0 | [0.10.0](https://github.com/uiri/toml/releases/tag/0.10.0) |
| [pallets/werkzeug](https://github.com/pallets/werkzeug) | 0.16.0 | [0.16.0](https://github.com/pallets/werkzeug/releases/tag/0.16.0) |
| [dmnfarrell/tkintertable](https://github.com/dmnfarrell/tkintertable) | 1.2 | [v1.2](https://github.com/dmnfarrell/tkintertable/releases/tag/v1.2) |
| [wxWidgets/wxPython-Classic](https://github.com/wxWidgets/wxPython-Classic) | 2.9.1.1 | [wxPy-2.9.1.1](https://github.com/wxWidgets/wxPython-Classic/releases/tag/wxPy-2.9.1.1) |
| [nasa/fprime](https://github.com/nasa/fprime) | 1.3 | [NASA-v1.3](https://github.com/nasa/fprime/releases/tag/NASA-v1.3) |
| [nucleic/cppy](https://github.com/nucleic/cppy) | 1.1.0 | [1.1.0](https://github.com/nucleic/cppy/releases/tag/1.1.0) |
| [opencv/opencv](https://github.com/opencv/opencv) | 4.5.1 | [4.5.1](https://github.com/opencv/opencv/releases/tag/4.5.1) |
| [curl/curl](https://github.com/curl/curl) | 7.72.0 | [curl-7_72_0](https://github.com/curl/curl/releases/tag/curl-7_72_0) |
| [madler/zlib](https://github.com/madler/zlib) | 1.2.11 | [v1.2.11](https://github.com/madler/zlib/releases/tag/v1.2.11) |
| [apache/lucene](https://github.com/apache/lucene) | 7.7.3 | [releases/lucene-solr/7.7.3](https://github.com/apache/lucene/releases/tag/releases%2Flucene-solr%2F7.7.3) |
| [yaml/libyaml](https://github.com/yaml/libyaml) | 0.2.5 | [0.2.5](https://github.com/yaml/libyaml/releases/tag/0.2.5) |
| [elastic/elasticsearch](https://github.com/elastic/elasticsearch) | 6.8.1 | [v6.8.1](https://github.com/elastic/elasticsearch/releases/tag/v6.8.1) |
| [twbs/bootstrap](https://github.com/twbs/bootstrap) | 4.3.1 | [v4.3.1](https://github.com/twbs/bootstrap/releases/tag/v4.3.1) |
| [vuejs/vue](https://github.com/vuejs/vue) | 2.6.10 | [v2.6.10](https://github.com/vuejs/vue/releases/tag/v2.6.10) |
| [carrotsearch/hppc](https://github.com/carrotsearch/hppc) | 0.7.1 | [0.7.1](https://github.com/carrotsearch/hppc/releases/tag/0.7.1) |
| [JodaOrg/joda-time](https://github.com/JodaOrg/joda-time) | 2.10.1 | [v2.10.1](https://github.com/JodaOrg/joda-time/releases/tag/v2.10.1) |
| [tdunning/t-digest](https://github.com/tdunning/t-digest) | 3.2 | [t-digest-3.2](https://github.com/tdunning/t-digest/releases/tag/t-digest-3.2) |
| [HdrHistogram/HdrHistogram](https://github.com/HdrHistogram/HdrHistogram) | 2.1.9 | [HdrHistogram-2.1.9](https://github.com/HdrHistogram/HdrHistogram/releases/tag/HdrHistogram-2.1.9) |
| [locationtech/spatial4j](https://github.com/locationtech/spatial4j) | 0,7 | [spatial4j-0.7](https://github.com/locationtech/spatial4j/releases/tag/spatial4j-0.7) |
| [locationtech/jts](https://github.com/locationtech/jts) | 1.15.0 | [jts-1.15.0](https://github.com/locationtech/jts/releases/tag/jts-1.15.0) |
| [apache/logging-log4j2](https://github.com/apache/logging-log4j2) | 2,11 | [log4j-2.11.0](https://github.com/apache/logging-log4j2/releases/tag/log4j-2.11.0) |

## Información adicional

- "[Acerca del perfil](/articles/about-your-profile)"
