---
title: Administrar la configuración de seguridad y análisis para tu repositorio
intro: 'Puedes controlar las características que dan seguridad y analizan tu código en tu proyecto dentro de {% data variables.product.prodname_dotcom %}.'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
---

### Habilitar o inhabilitar las características de seguridad y análisis

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Debajo de "Configurar la seguridad y las características de análisis", a la derecha de la característica, da clic en **Inhabilitar** o **Habilitar**. ![Botón de "Habilitar" o "Inhabilitar" para las características de "Configurar la seguridad y el análisis"](/assets/images/help/repository/security-and-analysis-disable-or-enable.png)

### Otorgar acceso a {% data variables.product.prodname_dependabot_alerts %}

Después de que habilitas las {% data variables.product.prodname_dependabot_alerts %} para un repositorio en una organización, los propietarios de ésta y los administradores de los repositorios pueden ver las alertas predeterminadamente. Puedes dar acceso a equipos y personas adicionales para las alertas de un repositorio.

{% note %}

Organization owners and repository administrators can only grant access to view {% data variables.product.prodname_dependabot_alerts %} to people or teams who have write access to the repo.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Debajo de "Alertas del Dependabot", en el campo de búsqueda, comienza a teclear el nombre de la persona o equipo que quieres encontrar, y luego da clic en el nombre que quieras de entre la lista de coincidencias. ![Campo de búsqueda para otorgar a las personas o equipos acceso a las alertas del Dependabot](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
5. Haz clic en **Guardar cambios**. ![Botón de "Guardar cambios" para los cambios en la configuración de alertas del Dependabot](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)

### Eliminar el acceso a {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Debajo de "Alertas del Dependabot", a la derecha de la persona o equipo cuyo acceso quieras eliminar, da clic en el {% octicon "x" aria-label="X symbol" %}. ![Botón de "x" para eliminar el acceso de alguien a las alertas del Dependabot de tu repositorio](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)

### Leer más

- [Acerca de asegurar tu repositorio](/github/administering-a-repository/about-securing-your-repository)"
- "[Administrar la seguridad y la configuración de análisis para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"
