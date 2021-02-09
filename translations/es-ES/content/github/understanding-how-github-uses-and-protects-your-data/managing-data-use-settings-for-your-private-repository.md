---
title: Administrar la configuración de uso de datos para tu repositorio privado
intro: 'Para ayudar a que {% data variables.product.product_name %} te conecte a las herramientas, proyectos, personas e información relevantes, puedes configurar el uso de datos para tu repositorio privado.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
versions:
  free-pro-team: '*'
---

### Acerca del uso de datos para tu repositorio privado

Cuando habilitas el uso de datos para tu repositorio privado, podrás acceder a la gráfica de dependencias, en donde puedes rastrear las dependencias de tus repositorios y recibir las {% data variables.product.prodname_dependabot_alerts %} cuando {% data variables.product.product_name %} detecte las dependencias vulnerables. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".

### Habilitar o inhabilitar las características para el uso de datos

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Debajo de "Configurar la seguridad y las características de análisis", a la derecha de la característica, da clic en **Inhabilitar** o **Habilitar**. ![Botón de "Habilitar" o "Inhabilitar" para las características de "Configurar la seguridad y el análisis"](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-private.png)

### Leer más

- "[Acerca del uso de tus datos de {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)"
- "[Ver y actualizar las dependencias vulnerables en tu repositorio](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Administrar la configuración de seguridad y de análisis para tu organización](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
