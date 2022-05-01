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


You can control data use for your private repository with the security and analysis features.

- Enable the dependency graph to allow read-only data analysis on your repository.
- Disable the dependency graph to block read-only data analysis of your repository.

Cuando habilitas el uso de datos para tu repositorio privado, podrás acceder a la gráfica de dependencias, en donde puedes rastrear las dependencias de tus repositorios y recibir las {% data variables.product.prodname_dependabot_alerts %} cuando {% data variables.product.product_name %} detecte las dependencias vulnerables. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."


{% note %}

**Note:** If you disable the dependency graph, {% data variables.product.prodname_dependabot_alerts %} and {% data variables.product.prodname_dependabot_security_updates %} are also disabled. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

{% endnote %}

## Enabling or disabling data use through security and analysis features

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Debajo de "Análisis y seguridad de código", a la derecha de la característica, haz clic en **Inhabilitar** o **Habilitar**.{% ifversion fpt %}!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %}

## Leer más

- "[Acerca del uso de tus datos de {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)"
- "[Visualizar las {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Administrar la configuración de seguridad y de análisis para tu organización](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
