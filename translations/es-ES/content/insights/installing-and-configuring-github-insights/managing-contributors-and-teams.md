---
title: Administrar colaboradores y equipos
intro: Puedes administrar las personas y los equipos incluidos en las métricas y los informes.
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-contributors-and-teams
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage contributors and teams.'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

### Acerca de los colaboradores y los equipos en {% data variables.product.prodname_insights %}

Un colaborador en {% data variables.product.prodname_insights %} es una entidad asociada con los datos de {% data variables.product.prodname_enterprise %}. Puedes editar y ocultar los colaboradores.

A veces, la misma persona puede aparecer como más de un colaborador. Por ejemplo, si una persona ha usado múltiples direcciones de correo electrónico de confirmación en Git, habrá un colaborador único para cada dirección de correo electrónico en {% data variables.product.prodname_insights %}. Puedes fusionar múltiples colaboradores para combinar todos los datos de una persona.

También puedes agrupar los colaboradores en los equipos. Puedes usar los equipos como un filtro en los informes. Para obtener más información, consulta "[Ver métricas e informes clave](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)".

### Editar un colaborador

Puedes editar el nombre para mostrar de un colaborador en {% data variables.product.prodname_insights %}.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
{% data reusables.github-insights.edit-contributor %}
4. En "First Name" (nombre), escribe el nombre del colaborador. ![Campo de nombre](/assets/images/help/insights/first-name.png)
5. En "Last Name" (apellido), escribe el apellido del colaborador. ![Campo de apellido](/assets/images/help/insights/last-name.png)
6. Haz clic en **Rename** (Renombrar).

### Administrar la visibilidad del colaborador

Ocultar un colaborador excluye todos los datos asociados con ese colaborador de todas las métricas.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
{% data reusables.github-insights.edit-contributor %}
3. Selecciona o deselecciona **Show contributor** (mostrar colaborador). ![Casilla de verificación para mostrar u ocultar colaborador](/assets/images/help/insights/show-contributor.png)
4. Haz clic en **Done** (listo).

### Fusionar datos del colaborador

Cuando fusionas dos o más colaboradores, los datos {% data variables.product.prodname_insights %} para esos colaboradores se asocian con un colaborador principal. Todos los datos del colaborador fusionado pertenecen al colaborador principal en las métricas.

Puedes fusionar colaboradores de manera manual o automática, según los colaboradores que {% data variables.product.prodname_insights %} ha detectado con nombres coincidentes.

#### Fusionar automáticamente colaboradores

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
3. En "All Contributors" (todos los colaboradores), haz clic en **Auto-Merge** (fusionar automáticamente) ![Botón fusionar automáticamente](/assets/images/help/insights/auto-merge.png)
4. Opcionalmente, para excluir que un colaborador se fusione, a la derecha del colaborador, haz clic en **Skip** (omitir). ![Botón omitir](/assets/images/help/insights/skip-contributor.png)
5. Para cada grupo, selecciona un colaborador principal. ![Botones de selección para seleccionar un colaborador principal](/assets/images/help/insights/select-primary.png)
6. Haz clic en **Merge All** (fusionar todos).

#### Fusionar de forma manual los colaboradores

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
3. Selecciona los colaboradores que deseas fusionar. ![Seleccionar colaboradores](/assets/images/help/insights/select-contributors.png)
4. En "All contributors", haz clic en **Merge** (fusionar). ![Botón fusionar](/assets/images/help/insights/merge-button.png)
5. Selecciona un colaborador principal. ![Botones de selección para seleccionar un colaborador principal](/assets/images/help/insights/select-primary.png)
6. Haz clic en **Merge accounts** (fusionar cuentas).

#### Deshacer la fusión de un colaborador

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
4. A la derecha del colaborador, haz clic en **Unmerge** (deshacer la fusión). ![Botón deshacer fusión](/assets/images/help/insights/unmerge-contributor.png)

### Administrar equipos en {% data variables.product.prodname_insights %}

Existen dos tipos de equipos en {% data variables.product.prodname_insights %}: equipos importados desde {% data variables.product.product_name %} y equipos personalizados.

Cuando se agrega una organización a {% data variables.product.prodname_insights %}, todos los equipos de éstas se importan desde {% data variables.product.product_name %}. Puedes buscar y filtrar por estos equipos en {% data variables.product.prodname_insights %}. Puedes administrar equipos en {% data variables.product.product_name %}.

Puedes crear y administrar equipos personalizados en {% data variables.product.prodname_insights %}. Los equipos personalizados podrían incluir miembros de organizaciones múltiples en {% data variables.product.product_name %}.

#### Creear un equipo personalizado

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
2. A la derecha de "Teams" (equipos), haz clic en **Create Team** (crear equipo). ![Botón crear equipo](/assets/images/help/insights/create-team.png)
3. En "Team name" (nombre del equipo), escribe un nombre único para tu equipo. ![Campo de nombre del equipo](/assets/images/help/insights/team-name.png)
4. Da clic en **Crear**.

#### Agregar colaboradores a un equipo personalizado

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. En "Contributors" (colaboradores), usa el menú desplegable y selecciona un colaborador. ![Menú desplegable de colaboradores](/assets/images/help/insights/contributors-drop-down.png)
4. Haz clic en **Done** (listo).

#### Eliminar a un colaborador de un equipo personalizado

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. A la derecha del colaborador que deseas eliminar, haz clic en {% octicon "trashcan" aria-label="The trashcan icon" %}. ![Botón papelera](/assets/images/help/insights/contributor-trashcan.png)

#### Renombrar un equipo personalizado

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. En "Team name" (nombre del equipo), escribe un nombre único para tu equipo. ![Campo de nombre del equipo](/assets/images/help/insights/rename-team.png)
4. Haz clic en **Rename** (Renombrar). ![Botón renombrar](/assets/images/help/insights/rename-button-team.png)
5. Haz clic en **Done** (listo).

#### Borrar un equipo personalizado

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. Haz clic en **Delete Team** (eliminar equipo). ![Botón eliminar equipo](/assets/images/help/insights/delete-team.png)
4. Haz clic en **Confirm (Confirmar)**.
