---
title: Definir patrones personalizados para el escaneo de secretos
shortTitle: Definir patrones personalizados
intro: 'Puedes definir los patrones personalizados para el {% data variables.product.prodname_secret_scanning %} en las organizaciones y repositorios privados.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  fpt: '*'
  ghes: '>=3.2'
  ghae: next
topics:
  - Repositories
---

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Nota:** Los patrones personalizados del {% data variables.product.prodname_secret_scanning %} se encuentran actualmente en beta y están sujetos a cambios.

{% endnote %}
{% endif %}

## Acerca de los patrones personalizados para el {% data variables.product.prodname_secret_scanning %}

{% data variables.product.company_short %} lleva a cabo el {% data variables.product.prodname_secret_scanning %} en los repositorios{% ifversion fpt %}públicos y privados{% endif %} para los patrones de secretos que proporcionan los socios de {% data variables.product.company_short %} y {% data variables.product.company_short %}. Para obtener más información sobre el programa asociado del {% data variables.product.prodname_secret_scanning %}, consulta la sección "<a href="/developers/overview/secret-scanning-partner-program" class="dotcom-only">Programa asociado de escaneo de secretos</a>".

Sin embargo, puede que existan situaciones en las que quieras escanear en búsqueda de otros patrones de secreto en tus repositorios {% ifversion fpt %}privados{% endif %}. Por ejemplo, puede que tengas un patrón secreto que sea interno a tu organización. For these situations, you can define custom {% data variables.product.prodname_secret_scanning %} patterns in your enterprise, organization, or {% ifversion fpt %}private{% endif %} repository on {% data variables.product.product_name %}. You can define up to 20 custom patterns for each {% ifversion fpt %}private{% endif %} repository, organization, or enterprise account.

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Nota:** Durante el beta, hay algunas limitaciones al utilizar patrones personalizados para el {% data variables.product.prodname_secret_scanning %}:

* No hay una funcionalidad de simulacro.
* No puedes editar patrones personalizados después de que se hayan creado. Para cambiar un patrón, debes borrarlo y volverlo a crear.
* No hay una API para crear, editar o borrar patrones personalizados. Sin embargo, los resultados para los patrones personalizados se devuelven en la [API de alertas para el escaneo de secretos](/rest/reference/secret-scanning).

{% endnote %}
{% endif %}

## Sintaxis de expresión regular para los patrones personalizados

Los patrones personalizados del {% data variables.product.prodname_secret_scanning %} se especifican como expresiones regulares. El {% data variables.product.prodname_secret_scanning_caps %} utiliza la [biblioteca Hyperscan](https://github.com/intel/hyperscan) y solo es compatible con las construcciones de regex de Hyperscan, las cuales son un subconjunto de la sintaxis PCRE. Los modificadores de opción de Hyperscan no son compatibles.  Para obtener más información sobre las consturcciones de patrones de Hyperscan, consulta el "[Soporte para patrones](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)" en la documentación de Hyperscan.

## Definir un patrón común para un repositorio

Antes de definir un patrón personalizado, debes asegurarte de que el {% data variables.product.prodname_secret_scanning %} esté habilitado en tu repositorio. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_secret_scanning %} para tus repositorios](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

Después de que se crea tu patrón, {% data reusables.secret-scanning.secret-scanning-process %} Para obtener más información sobre cómo visualizar alertas del {% data variables.product.prodname_secret_scanning %}, consulta la sección "[Administrar las alertas del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

## Definir un patrón común para una organización

Antes de definir un patrón personalizado, debes asegurarte de que hayas habilitado el {% data variables.product.prodname_secret_scanning %} para los repositorios {% ifversion fpt %}privados{% endif %} que quieras escanear en tu organización. Para habilitar el {% data variables.product.prodname_secret_scanning %} en todos los repositorios {% ifversion fpt %}privados{% endif %} de tu organizción, consulta la sección "[Administrar la configuración de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire organization. That way, you can avoid creating excess false-positive {% data variables.product.prodname_secret_scanning %} alerts.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

Después de que se cree un patrón, el {% data variables.product.prodname_secret_scanning %} escaneará cualquier secreto en los repositorios {% ifversion fpt %}privados{% endif %} de tu organización, incluyendo el historial completo de Git en todas las ramas. Se alertará a los propietarios de organizaciones y administradores de repositorios de cualquier secreto que se encuentre y estos podrán revisar la alerta en el repositorio en donde se encontró el secreto. Para obtener más información sobre cómo ver las alertas del {% data variables.product.prodname_secret_scanning %}, consulta la sección "[Administrar las alertas del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

## Defining a custom pattern for an enterprise account

Before defining a custom pattern, you must ensure that you enable secret scanning for your enterprise account. For more information, see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire enterprise. That way, you can avoid creating excess false-positive {% data variables.product.prodname_secret_scanning %} alerts.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}
1. Under "Secret scanning custom patterns", click {% ifversion fpt or ghes > 3.2 or ghae-next %}**New pattern**{% elsif ghes = 3.2 %}**New custom pattern**{% endif %}.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in {% ifversion fpt %}private{% endif %} repositories within your enterprise's organizations with {% data variables.product.prodname_GH_advanced_security %} enabled, including their entire Git history on all branches. Se alertará a los propietarios de organizaciones y administradores de repositorios de cualquier secreto que se encuentre y estos podrán revisar la alerta en el repositorio en donde se encontró el secreto. Para obtener más información sobre cómo ver las alertas del {% data variables.product.prodname_secret_scanning %}, consulta la sección "[Administrar las alertas del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

{% ifversion fpt or ghes > 3.2 %}
## Editing a custom pattern

When you save a change to a custom pattern, this closes all the {% data variables.product.prodname_secret_scanning %} alerts that were created using the previous version of the pattern.
1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.
   * For a repository or organization, display the "Security & analysis" settings for the repository or organization where the custom pattern was created. Para obtener más información, consulta las secciones anteriores "[Definir un patrón personalizado para un repositorio](#defining-a-custom-pattern-for-a-repository)" o "[Definir un patrón personalizado apra una organización](#defining-a-custom-pattern-for-an-organization)".
   * For an enterprise, under "Policies" display the "Advanced Security" area, and then click **Security features**. For more information, see "[Defining a custom pattern for an enterprise account](#defining-a-custom-pattern-for-an-enterprise-account)" above.
2. Under "{% data variables.product.prodname_secret_scanning_caps %}", to the right of the custom pattern you want to edit, click {% octicon "pencil" aria-label="The edit icon" %}.
3. When you have reviewed and tested your changes, click **Save changes**.
{% endif %}

## Eliminar un patrón personalizado

1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.

   * For a repository or organization, display the "Security & analysis" settings for the repository or organization where the custom pattern was created. Para obtener más información, consulta las secciones anteriores "[Definir un patrón personalizado para un repositorio](#defining-a-custom-pattern-for-a-repository)" o "[Definir un patrón personalizado apra una organización](#defining-a-custom-pattern-for-an-organization)".
   * For an enterprise, under "Policies" display the "Advanced Security" area, and then click **Security features**.  For more information, see "[Defining a custom pattern for an enterprise account](#defining-a-custom-pattern-for-an-enterprise-account)" above.
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
1. To the right of the custom pattern you want to remove, click {% octicon "trash" aria-label="The trash icon" %}.
1. Review the confirmation, and select a method for dealing with any open alerts relating to the custom pattern.
1. Click **Yes, delete this pattern**.

   ![Confirming deletion of a custom {% data variables.product.prodname_secret_scanning %} pattern ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
{%- elsif ghes = 3.2 %}
1. To the right of the custom pattern you want to remove, click **Remove**.
1. Review the confirmation, and click **Remove custom pattern**.
{%- endif %}
