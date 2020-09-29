---
title: Administrar los parámetros de seguridad y análisis para tu organización
intro: 'Puedes controlar las características que aseguran y analizan el código en los proyectos de tu organización en {% data variables.product.prodname_dotcom %}.'
permissions: Los propietarios de la organización pueden administrar los parámetros de seguridad y de análisis para los repositorios en la organización.
versions:
  free-pro-team: '*'
---

### Acerca de la administración de los parámetros de seguridad y análisis

{% data variables.product.prodname_dotcom %} puede ayudarte a asegurar los repositorios en tu organización. Puedes administrar las características de seguridad y de análisis para todos los repositorios existentes que los miembros creen en tu organización.

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.security.security-and-analysis-features-enable-read-only %}
{% endif %}

### Habilitar o inhabilitar las características para los repositorios existentes

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. Debajo de "Configurar las características de seguridad y análisis", a la derecha de la característica, da clic en **Inhabilitar todo** o **Habilitar todo**. ![Botón de "Habilitar todo" o "Inhabilitar todo" para las características de "Configurar la seguridad y el análisis"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all.png)
6. Opcionalmente, habilita la característica predeterminada para los repositorios nuevos en tu organización. ![Opción de "Habilitar predeterminadamente" para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
7. Da clic en **Inhabilitar CARACTERÍSTICA** o en **Habilitar CARACTERÍSTICA** para inhabilitar o habilitar la característica para todos los repositorios en tu organización. ![Botón para inhabilitar o habilitar la característica](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)

### Habilitar o inhabilitar las características para los repositorios nuevos

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. Debajo de "Configurar las características de seguridad y análisis", a la derecha de la característica, habilítala o inhabilítala para los repositorios nuevos en tu organización. ![Casilla para habilitar o inhabilitar una característica para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Leer más

{% if currentVersion == "free-pro-team@latest" %}- "[Acerca de asegurar tu repositorio](/github/administering-a-repository/about-securing-your-repository)"
- "[Acerca del escaneo de secretos](/github/administering-a-repository/about-secret-scanning)"
- "[Mantener tus dependencias actualizadas automáticamente](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"
{% endif %}
- "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Administrar las vulnerabilidades en las dependencias de tu proyecto](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
