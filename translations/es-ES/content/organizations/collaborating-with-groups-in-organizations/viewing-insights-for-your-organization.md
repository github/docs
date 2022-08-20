---
title: Ver información de tu organización
intro: 'La información de tu organización brinda datos acerca de la actividad, las contribuciones y las dependencias de tu organización.'
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Ver las perspectivas de la organización
permissions: Organization members can view organization insights.
---

## Acerca de las perspectivas de la organización

Puedes utilizar la información sobre la actividad de la organización para ayudarte a comprender mejor cómo los miembros de tu organización están utilizando {% data variables.product.product_name %} para colaborar y trabajar con el código. La información sobre las dependencias puede ayudarte a rastrear, informar y actuar en relación al uso del código abierto de tu organización.

{% note %}

**Nota:** Para ver las perspectivas de la organización, esta debe utilizar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Ver la información de la actividad de la organización

{% note %}

**Nota:**las perspectivas de actividad en las organizaciones se encuentran actualmente en un beta público y están sujetos a cambio.

{% endnote %}

Con la información sobre la actividad de la organización puedes ver semanal, mensual y anualmente las visualizaciones de datos de toda tu organización o de repositorios específicos, incluida la actividad de las propuestas y las solicitudes de extracción, los principales lenguajes utilizados e información acumulada sobre dónde los miembros de tu organización pasan su tiempo.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
3. Dentro del nombre de tu organización, haz clic en {% octicon "graph" aria-label="The bar graph icon" %} **Insights (Información)**. ![Haz clic en la pestaña de información de la organización](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Como alternativa, en el ángulo superior derecho de la página, elige ver los datos del/de la último/a **semana**, **mes** o **año**. ![Elige un período de tiempo para ver la información de la organización](/assets/images/help/organizations/org-insights-time-period.png)
5. Alternativamente, en el ángulo superior derecho de la página, elige ver hasta tres repositorios y haz clic en **Apply (Aplicar)**. ![Elige repositorios para ver la información de la organización](/assets/images/help/organizations/org-insights-repos.png)

## Ver la información de las dependencias de la organización

{% note %}

**Notea:** Por favor, asegúrate de que hayas habilitado la [Gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph).

{% endnote %}

Con la información sobre las dependencias puedes ver vulnerabilidades, licencias y otra información importante de los proyectos de código abierto de los que depende tu organización.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
3. Dentro del nombre de tu organización, haz clic en {% octicon "graph" aria-label="The bar graph icon" %} **Insights (Información)**. ![Pestaña de información en la barra de navegación principal de la organización](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Para ver las dependencias de esta organización, haz clic en **Dependencies (Dependencias)**. ![Pestaña de dependencias debajo de la barra de navegación principal de la organización](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. Para ver la información de las dependencias de todas tus organizaciones {% data variables.product.prodname_ghe_cloud %}, haz clic en **My organizations (Mis organizaciones)**. ![Botón Mi organización dentro de la pestaña de dependencias](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. Puedes hacer clic en los resultados de los gráficos **Open security advisories** (Avisos de seguridad abiertos) y **Licenses** (Licencias) para filtrar por estado de vulnerabilidad, por licencia o por una combinación de ambos. ![Gráficas de "las vulnerabilidades de mis organizaciones" y de licencias](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. Puedes hacer clic en {% octicon "package" aria-label="The package icon" %} **dependents (dependientes)** al lado de cada vulnerabilidad para ver qué dependiente en tu organización está usando cada biblioteca. ![Dependientes vulnerables de mis organizaciones](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)

## Leer más
 - "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
 - "[Explorar las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
 - "[Cambiar la visibilidad de las perspectivas de dependencia de tu organización](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)"{% ifversion ghec %}
- "[Requerir políticas para las perspectivas de dependencia en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)"{% endif %}
