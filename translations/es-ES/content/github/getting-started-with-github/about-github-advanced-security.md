---
title: Acerca de GitHub Advanced Security
intro: '{% data variables.product.prodname_dotcom %} ofrece a sus clientes características de seguridad adicionales bajo una licencia de {% data variables.product.prodname_advanced_security %}. Estas características también se habilitan para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

### Acerca de {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} tiene muchas características que te ayudan a mejorar y mantener la calidad de tu código. Algunas de éstas se incluyen en todos los planes, por ejemplo: gráfica de dependencias y {% data variables.product.prodname_dependabot_alerts %}. Otras características de seguridad requieren una licencia para que la {% data variables.product.prodname_GH_advanced_security %} se ejecute en los repositorios independientemente de aquellos públicos en {% data variables.product.prodname_dotcom_the_website %}. (Esto es, los repositorios privados e internos en {% data variables.product.prodname_dotcom_the_website %}, y todos los repositorios en {% data variables.product.prodname_ghe_server %}.)

Para obtener un resumen de todas las características de seguridad, consulta la sección "[Acerca de asegurar tu repositorio](/github/administering-a-repository/about-securing-your-repository#setting-up-your-repository-securely)". Para obtener más información sobre los requisitos de permisos para las acciones que se relacionan con las características de seguridad, consulta la sección "[Niveles de permiso de los repositorios para una organización](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-requirements-for-security-features)".

### Acerca de las características de {% data variables.product.prodname_advanced_security %}

Una licencia de {% data variables.product.prodname_GH_advanced_security %} proporciona las siguientes características adicionales:

- **{% data variables.product.prodname_code_scanning_capc %}** - Busca vulnerabilidades de seguridad potenciales y errores dentro de tu código. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** - Detecta secretos, por ejemplo claves y tokens, que se han dado de alta en el repositorio. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)".

{% if currentVersion == "free-pro-team@latest" %}
- **Revisión de dependencias** - Muestra todo el impacto de los cambios a las dependencias y vee los detalles de las versiones vulnerables antes de que fusiones una solicitud de cambios. Para obtener más información, consulta la sección "[Revisar los cambios a las dependencias en una solicitud de cambios](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)".
{% endif %}

Para obtener más información sobre las características de {% data variables.product.prodname_advanced_security %} que se encuentran en desarrollo, consulta la sección "[Plan de trabajo de {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)".

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Habilitar las características de {% data variables.product.prodname_advanced_security %} en {% data variables.product.prodname_ghe_server %}

El administrador de sitio debe habilitar la {% data variables.product.prodname_advanced_security %} para {% data variables.product.product_location %} antes de que puedas utilizar estas características. Para obtener más información, consulta la sección "[Configurar las características de la Seguridad Avanzada](/admin/configuration/configuring-advanced-security-features)".

Una vez que tu sistema se haya configurado, puedes habilitar e inhabilitar estas características a nivel de organización o de repositorio. Para obtener más información, consulta las secciones "[Administrar la configuración de seguridad y análisis para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)" y "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
Para obtener más información sobre cómo comprar una licencia para

{% data variables.product.prodname_GH_advanced_security %}, contacta a {% data variables.contact.contact_enterprise_sales %}.
{% endif %}

### Habilitar las características de {% data variables.product.prodname_advanced_security %} en {% data variables.product.prodname_dotcom_the_website %}

Para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}, estas características se encuentran activas permanentemente y solo se inhabilitan si cambias la visibilidad del proyecto para que el código ya no sea público.

Para el resto de los repositorios, una vez que tengas una licencia, puedes habilitar e inhabilitar estas características a nivel de repositorio y de organización. {% if currentVersion == "free-pro-team@latest" %}Para obtener más información, consulta las secciones "[Administrar la configuración de seguridad y análisis para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)" y "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
Para obtener más información sobre cómo comprar una licencia para

{% data variables.product.prodname_GH_advanced_security %}, contacta a {% data variables.contact.contact_enterprise_sales %}.
{% endif %}
