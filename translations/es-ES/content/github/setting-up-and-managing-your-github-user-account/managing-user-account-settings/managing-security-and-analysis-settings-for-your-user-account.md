---
title: Administrar la configuración de seguridad y análisis para tu cuenta de usuario
intro: 'Puedes controlar las características que dan seguridad y analizan tu código en tus proyectos dentro de {% data variables.product.prodname_dotcom %}.'
versions:
  free-pro-team: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
---

### Acerca de la administración de los parámetros de seguridad y análisis

{% data variables.product.prodname_dotcom %} puede ayudarte a asegurar tus repositorios. Este tema te muestra cómo puedes administrar las características de seguridad y análisis para todos tus repositorios existentes o nuevos.

Aún puedes administrar las características de seguridad y análisis para los repositorios individuales. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Para obtener un resumen de la seguridad a nivel de repositorio, consulta la sección "[Asegurar tu repositorio](/code-security/getting-started/securing-your-repository)".

### Habilitar o inhabilitar las características para los repositorios existentes

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. Debajo de "Configurar las características de seguridad y análisis", a la derecha de la característica, da clic en **Inhabilitar todo** o **Habilitar todo**. ![Botón de "Habilitar todo" o "Inhabilitar todo" para las características de "Configurar la seguridad y el análisis"](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png)
6. Opcionalmente, habilita la característica predeterminada para los repositorios nuevos en tu organización. ![Opción de "Habilitar predeterminadamente" para los repositorios nuevos](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png)
7. Da clic en **Inhabilitar CARACTERÍSTICA** o **Habilitar CARACTERÍSTICA** para inhabilitar o habilitar la característica para todos los repositorios que te pertenezcan. ![Botón para inhabilitar o habilitar la característica](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png)

{% data reusables.security.displayed-information %}

### Habilitar o inhabilitar las características para los repositorios nuevos

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. Debajo de "Configurar las características de seguridad y análisis", a la derecha de la característica, habilítala o inhabilítala para los repositorios nuevos en tu organización. ![Casilla para habilitar o inhabilitar una característica para los repositorios nuevos](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Leer más

- "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Administrar las vulnerabilidades en las dependencias de tu proyecto](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
{% if currentVersion == "free-pro-team@latest" %}- "[Mantener tus dependencias actualizadas automáticamente](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}
