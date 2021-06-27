---
title: Acerca de GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} pone a disposición de los clientes medidas adicionales de seguridad mediante una licencia de {% data variables.product.prodname_advanced_security %}.{% if currentVersion == "free-pro-team@latest" %} Estas características también se habilitan para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
---

### Acerca de {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} tiene muchas características que te ayudan a mejorar y mantener la calidad de tu código. Algunas de estas se incluyen en todos los planes{% if currentVersion != "github-ae@latest" %}, tales como la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Otras características de seguridad requieren una licencia para que la {% data variables.product.prodname_GH_advanced_security %} se ejecute en los repositorios independientemente de aquellos públicos en {% data variables.product.prodname_dotcom_the_website %}.

{% if currentVersion == "free-pro-team@latest" %}Para obtener más información, consulta la sección "[Acerca del licenciamiento para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security)."{% elsif currentVersion ver_gt "enterprise-server@2.22" %}Para obtener más información acerca de cómo comprar una licencia para la {% data variables.product.prodname_GH_advanced_security %}, contacta a {% data variables.contact.contact_enterprise_sales %}.{% elsif currentVersion == "github-ae@latest" %}Durante el lanzamiento beta, no se cobrará por {% data variables.product.prodname_GH_advanced_security %} en {% data variables.product.prodname_ghe_managed %}.{% endif %}

### Acerca de las características de {% data variables.product.prodname_advanced_security %}

Una licencia de {% data variables.product.prodname_GH_advanced_security %} proporciona las siguientes características adicionales:

- **{% data variables.product.prodname_code_scanning_capc %}** - Busca vulnerabilidades de seguridad potenciales y errores dentro de tu código. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detecta secretos, por ejemplo claves y tokens, que se han dado de alta en el repositorio. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

{% if currentVersion == "free-pro-team@latest" %}
- **Revisión de dependencias** - Muestra todo el impacto de los cambios a las dependencias y vee los detalles de las versiones vulnerables antes de que fusiones una solicitud de cambios. Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

Para obtener más información sobre las características de {% data variables.product.prodname_advanced_security %} que se encuentran en desarrollo, consulta la sección "[Plan de trabajo de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)". Para obtener un resumen de todas las características de seguridad, consulta la sección "[Características de seguridad de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Habilitar las características de {% data variables.product.prodname_advanced_security %} en {% data variables.product.product_name %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
El administrador de sitio debe habilitar la {% data variables.product.prodname_advanced_security %} para {% data variables.product.product_location %} antes de que puedas utilizar estas características. Para obtener más información, consulta la sección "[Configurar las características de la Seguridad Avanzada](/admin/configuration/configuring-advanced-security-features)".
{% endif %}

Una vez que tu sistema se haya configurado, puedes habilitar e inhabilitar estas características a nivel de organización o de repositorio. Para obtener más información, consulta las secciones "[Administrar la configuración de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" y "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% endif %}

{% if currentVersion != "github-ae@latest" %}
### Habilitar las características de {% data variables.product.prodname_advanced_security %} en {% data variables.product.prodname_dotcom_the_website %}

Para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}, estas características se encuentran activas permanentemente y solo se pueden inhabilitar si cambias la visibilidad del proyecto para que el código ya no sea público.

En el caso de otros repositorios, una vez que tengas una licencia para tu cuenta empresarial, puedes habilitar e inhabilitar estas características a nivel de repositorio u organización. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}Para obtener más información, consulta las secciones "[Administrar la configuración de seguridad y análisis de tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" y "[Administrar la configuración y análisis de tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Si tienes una cuenta empresarial, el uso de la licencia para toda la empresa se muestra en tu página de licencia empresarial. Para obtener más información, consulta la sección "[Visualizar tu uso de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Leer más

- "[Requerir políticas para la {% data variables.product.prodname_advanced_security %} en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)"

{% elsif currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}

### Leer más

- "[Requerir políticas para la {% data variables.product.prodname_advanced_security %} en tu empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
