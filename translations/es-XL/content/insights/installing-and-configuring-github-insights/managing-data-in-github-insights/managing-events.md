---
title: Administrar eventos
intro: '{% data reusables.github-insights.events %}'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/creating-and-managing-events
  - /insights/installing-and-configuring-github-insights/managing-events
permissions: 'People with admin permissions to {% data variables.product.prodname_insights %} can manage events.'
versions:
  enterprise-server: '*'
---
### Acerca de los eventos

Los eventos agregan contexto a las métricas. Por ejemplo, las fechas de vacaciones o de lanzamiento pueden causar cambios en los patrones de trabajo, por lo que saber cuándo ocurrieron esos eventos puede cambiar tu evaluación de las métricas. Puedes crear eventos para la reorganización de los equipos, las fechas de inicio de los nuevos empleados, los cambios en el alcance de los equipos y cualquier otra cosa que afecte el trabajo de tu equipo.

Después de crear un evento en {% data variables.product.prodname_insights %}, cualquier persona puede ver el evento como una anotación en algunas métricas. Para obtener más información, consulta "[Ver métricas e informes clave](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)".

### Crear un evento

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.events-tab %}
2. Haz clic en **Add Event** (agregar evento). ![Botón agregar evento](/assets/images/help/insights/add-event.png)
3. En "Title" (título), escribe un nombre descriptivo para tu evento. ![Campo de título](/assets/images/help/insights/title-field.png)
4. Usa el menú desplegable "Start Date" (iniciar fecha) y selecciona una fecha de inicio para tu evento. ![Menú desplegable de fecha de inicio](/assets/images/help/insights/start-date.png)
5. Usa el menú desplegable "End Date" (fecha de finalización) y selecciona una fecha de finalización para tu evento. ![Menú desplegable de fecha de finalización](/assets/images/help/insights/end-date.png)
6. Haz clic en **Save (Guardar)**.

### Eliminar un evento

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.events-tab %}
3. A la derecha del evento que deseas eliminar, haz clic en **{% octicon "trashcan" aria-label="The trashcan icon" %}**. ![Botón papelera](/assets/images/help/insights/trashcan-button.png)
4. Haz clic en **Confirm (Confirmar)**.
