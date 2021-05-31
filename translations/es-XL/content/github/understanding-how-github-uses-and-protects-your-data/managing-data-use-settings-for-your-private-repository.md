---
title: Administrar la configuración de uso de datos para tu repositorio privado
intro: 'Para ayudar a que {% data variables.product.product_name %} te conecte a las herramientas, proyectos, personas e información relevantes, puedes configurar el uso de datos para tu repositorio privado.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

### Acerca del uso de datos para tu repositorio privado

When you enable data use for your private repository, you'll be able to access the dependency graph, where you can track your repository's dependencies and receive {% data variables.product.prodname_dependabot_short %} alerts when {% data variables.product.product_name %} detects vulnerable dependencies. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#github-dependabot-alerts-for-vulnerable-dependencies)".

### Habilitar o inhabilitar las características para el uso de datos

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Debajo de "Configurar la seguridad y las características de análisis", a la derecha de la característica, da clic en **Inhabilitar** o **Habilitar**. ![Botón de "Habilitar" o "Inhabilitar" para las características de "Configurar la seguridad y el análisis"](/assets/images/help/repository/security-and-analysis-disable-or-enable.png)

### Leer más

- "[Acerca del uso de tus datos de {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)"
- "[Ver y actualizar las dependencias vulnerables en tu repositorio](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
