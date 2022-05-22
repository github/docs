---
title: Managing security and analysis settings for your personal account
intro: 'Puedes controlar las características que dan seguridad y analizan tu código en tus proyectos dentro de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Administrar el análisis & seguridad
---

## Acerca de la administración de los parámetros de seguridad y análisis

{% data variables.product.prodname_dotcom %} puede ayudarte a asegurar tus repositorios. Este tema te muestra cómo puedes administrar las características de seguridad y análisis para todos tus repositorios existentes o nuevos.

Aún puedes administrar las características de seguridad y análisis para los repositorios individuales. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

También puedes revisar la bitácora de seguridad para ver toda la actividad de tu cuenta personal. Para obtener más información, consulta "[Revisar tu registro de seguridad](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)".

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Para obtener un resumen de la seguridad a nivel de repositorio, consulta la sección "[Asegurar tu repositorio](/code-security/getting-started/securing-your-repository)".

## Habilitar o inhabilitar las características para los repositorios existentes

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Debajo de "Análisis y seguridad de código", a la derecha de la característica, haz clic en **Inhabilitar todo** o en **Habilitar todo**.
  {% ifversion ghes > 3.2 %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Opcionalmente, habilita la característica predeterminada para los repositorios nuevos que te pertenezcan.
  {% ifversion ghes > 3.2 %}!["Enable by default" option for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}!["Enable by default" option for new repositories](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Da clic en **Inhabilitar CARACTERÍSTICA** o **Habilitar CARACTERÍSTICA** para inhabilitar o habilitar la característica para todos los repositorios que te pertenezcan.
  {% ifversion ghes > 3.2 %}![Button to disable or enable feature](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Button to disable or enable feature](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## Habilitar o inhabilitar las características para los repositorios nuevos

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Debajo de "Análisis y seguridad del código", a la derecha de la característica, habilítala o inhabilítala predeterminadamente para los repositorios nuevos que te pertenezcan.
  {% ifversion ghes > 3.2 %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## Leer más

- "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Mantener tus dependencias actualizacas automáticamente](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)"
