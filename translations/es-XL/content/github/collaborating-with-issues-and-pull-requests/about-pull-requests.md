---
title: Acerca de las solicitudes de extracción
intro: 'Las solicitudes de extracción te permiten comentarle a otros acerca de los cambios que has subido a una rama en un repositorio en {% data variables.product.product_name %}. Una vez que se abre una solicitud de extracción, puedes debatir y revisar los posibles cambios con los colaboradores y agregar confirmaciones de seguimientos antes de que tus cambios se fusionen en la rama base.'
redirect_from:
  - /articles/using-pull-requests/
  - /articles/about-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### Acerca de las solicitudes de extracción

{% note %}

**Nota:** Cuando trabajas con solicitudes de extracción, ten lo siguiente en cuenta:
* Si estás trabajando en el [modelo de repositorio compartido](/articles/about-collaborative-development-models), te recomendamos que uses una rama de tema para tu solicitud de extracción. Si bien puedes enviar solicitudes de extracción desde cualquier rama o confirmación, con una rama de tema puedes subir confirmaciones de seguimiento para actualizar tus cambios propuestos.
* Cuando subas confirmaciones a una solicitud de extracción, no realices un empuje forzado. El empuje forzado puede dañar tu solicitud de extracción.

{% endnote %}

Después de inicializar una solicitud de extracción, verás una página de revisión que muestra una descripción general de alto nivel de los cambios entre tu rama (la rama de comparación) y la rama base del repositorio. Puedes agregar un resumen de los cambios propuestos, revisar los cambios hechos por las confirmaciones, agregar etiquetas, hitos y asignatarios, y hacer @mención de equipos o colaboradores individuales. Para obtener más información, consulta "[Crear una solicitud de extracción](/articles/creating-a-pull-request)".

Una vez que has creado una solicitud de extracción, puedes subir confirmaciones desde tu rama de tema para agregarlas a tu solicitud de extracción existente. Estas confirmaciones aparecerán en orden cronológico dentro de tu solicitud de extracción y los cambios serán visibles en la pestaña "Archivos modificados".

Otros colaboradores pueden revisar tus cambios propuestos, agregar comentarios de revisión, contribuir con el debate sobre la solicitud de extracción e incluso agregar confirmaciones a la solicitud de extracción.

{% if currentVersion == "free-pro-team@latest" %}
You can see information about the branch's current deployment status and past deployment activity on the "Conversation" tab. Para obtener más información, consulta "[Ver la actividad de implementación de un repositorio](/articles/viewing-deployment-activity-for-your-repository)".
{% endif %}

Una vez que estás conforme con los cambios propuestos, puedes fusionar la solicitud de extracción. Si estás trabajando en un modelo de repositorio compartido, creas una solicitud de extracción y tú o alguien más fusionará tus cambios desde tu rama de característica en la rama base que especificaste en tu solicitud de extracción. Para obtener más información, consulta "[Fusionar una solicitud de extracción](/articles/merging-a-pull-request)".

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**Sugerencias:**
- Para alternar entre expandir y contraer todos los comentarios de revisión desactualizados en una solicitud de extracción, presiona <span class="platform-mac"><kbd>opción</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span>y da clic en **Mostrar desactualizados** u **Ocultar desactualizados**. Para conocer más atajos del teclado, consulta "[Atajos del teclado](/articles/keyboard-shortcuts/)".
- Puedes combinar confirmaciones cuando fusionas una solicitud de extracción para obtener una visión optimizada de los cambios. Para obtener más información, consulta "[Acerca de las fusiones de las solicitudes de extracción](/articles/about-pull-request-merges)".

{% endtip %}

Puedes visitar tu tablero para encontrar de forma rápida los enlaces a las solicitudes de extracción recientemente actualizadas en las que estás trabajando o estás suscripto. Para obtener más información, consulta "[Acerca de tu tablero personal](/articles/about-your-personal-dashboard)".

### Solicitudes de extracción en borrador

{% data reusables.gated-features.draft-prs %}

Cuando creas una solicitud de extracción, puedes elegir crear una solicitud de extracción que está lista para revisión o una solicitud de extracción en borrador. Las solicitudes de extracción en borrador no se pueden fusionar y no se les solicita automáticamentes a los propietarios del código que revisen las solicitudes de extracción en borrador. Para obtener más información acerca de la creación de una solicitud de extracción en borrador, consulta "[Crear una solicitud de extracción](/articles/creating-a-pull-request)" y "[Crear una solicitud de extracción desde una bifurcación](/articles/creating-a-pull-request-from-a-fork)".

{% data reusables.pull_requests.mark-ready-review %} Puedes convertir una solicitud de extracción en borrador cuando lo desees. Para obtener más información, consulta la sección "[Cambiar el estado de una solicitud de extracción](/articles/changing-the-stage-of-a-pull-request)".

### Leer más

- "[Solicitud de extracción](/articles/github-glossary/#pull-request)" en el glosario de {% data variables.product.prodname_dotcom %}
- "[Acerca de las ramas](/articles/about-branches)"
- "[Comentar sobre una solicitud de extracción](/articles/commenting-on-a-pull-request)"
- "[Fusionar una solicitud de extracción](/articles/merging-a-pull-request)"
- "[Cerrar una solicitud de extracción](/articles/closing-a-pull-request)"
- "[Eliminar ramas no utilizadas](/articles/deleting-unused-branches)"
- "[Acerca de las fusiones de solicitudes de extracción](/articles/about-pull-request-merges/)"
