---
title: Administrar la configuración de uso de datos para tu repositorio privado
intro: 'Para ayudar a que {% data variables.product.product_name %} te conecte a las herramientas, proyectos, personas e información relevantes, puedes configurar el uso de datos para tu repositorio privado.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Administrar el uso de datos para un repositorio privado
---

## Acerca del uso de datos para tu repositorio privado


Puedes controlar el uso de datos de tu repositorio privado con las características de seguridad y análisis.

- Habilita la gráfica de dependencias para permitir un análisis de datos de solo lectura en tu repositorio.
- Inhabilita la gráfica de dependencias para bloquear el análisis de datos de solo lectura de tu repositorio.

Cuando habilitas el uso de datos para tu repositorio privado, podrás acceder a la gráfica de dependencias, en donde puedes rastrear las dependencias de tus repositorios y recibir las {% data variables.product.prodname_dependabot_alerts %} cuando {% data variables.product.product_name %} detecte las dependencias vulnerables. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".


{% note %}

**Nota:** Si inhabilitas la gráfica de dependencias, también se inhabilitarán las {% data variables.product.prodname_dependabot_alerts %} y las {% data variables.product.prodname_dependabot_security_updates %}. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

{% endnote %}

## Habilitar o inhabilitar el uso de datos mediante las características de análisis y seguridad

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Debajo de "Análisis y seguridad de código", a la derecha de la característica, haz clic en **Inhabilitar** o **Habilitar**.{% ifversion fpt %}!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %}

## Leer más

- "[Acerca del uso de tus datos de {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)"
- "[Ver y actualizar las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Administrar la configuración de seguridad y de análisis para tu organización](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
