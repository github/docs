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
  ghec: '*'
topics:
  - Repositories
---

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Nota:** Los patrones personalizados del {% data variables.product.prodname_secret_scanning %} se encuentran actualmente en beta y están sujetos a cambios.

{% endnote %}
{% endif %}

## Acerca de los patrones personalizados para el {% data variables.product.prodname_secret_scanning %}

{% data variables.product.company_short %} lleva a cabo el {% data variables.product.prodname_secret_scanning %} en los repositorios{% ifversion fpt or ghec %}públicos y privados{% endif %} para los patrones de secretos que proporcionan los socios de {% data variables.product.company_short %} y {% data variables.product.company_short %}. Para obtener más información sobre el programa asociado del {% data variables.product.prodname_secret_scanning %}, consulta la sección "<a href="/developers/overview/secret-scanning-partner-program" class="dotcom-only">Programa asociado de escaneo de secretos</a>".

Sin embargo, puede que existan situaciones en las que quieras escanear en búsqueda de otros patrones de secreto en tus repositorios {% ifversion fpt or ghec %}privados{% endif %}. Por ejemplo, puede que tengas un patrón secreto que sea interno a tu organización. Para estos casos, puedes definir patrones personalizados del {% data variables.product.prodname_secret_scanning %} en tu empresa, organización, o epositorio {% ifversion fpt or ghec %}privado{% endif %} en{% data variables.product.product_name %}. Puedes definir hasta 100 patrones personalizados para cada cuenta de organización o empresa y hasta 20 de ellos por repositorio {% ifversion fpt or ghec %}repositorio privado{% endif %}.

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

Antes de definir un patrón personalizado, debes asegurarte de que hayas habilitado el {% data variables.product.prodname_secret_scanning %} para los repositorios {% ifversion fpt or ghec %}privados{% endif %} que quieras escanear en tu organización. Para habilitar el {% data variables.product.prodname_secret_scanning %} en todos los repositorios {% ifversion fpt or ghec %}privados{% endif %} de tu organizción, consulta la sección "[Administrar la configuración de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% note %}

**Nota:** Como no hay funcionalidad de pruebas en seco, te recomendamos probar tus patrones personalizados en un repositorio antes de definirlos para toda tu organización. De esta forma, puedes evitar crear un exceso de alertas de {% data variables.product.prodname_secret_scanning %} falsas positivas.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

Después de que se cree un patrón, el {% data variables.product.prodname_secret_scanning %} escaneará cualquier secreto en los repositorios {% ifversion fpt or ghec %}privados{% endif %} de tu organización, incluyendo el historial completo de Git en todas las ramas. Se alertará a los propietarios de organizaciones y administradores de repositorios de cualquier secreto que se encuentre y estos podrán revisar la alerta en el repositorio en donde se encontró el secreto. Para obtener más información sobre cómo ver las alertas del {% data variables.product.prodname_secret_scanning %}, consulta la sección "[Administrar las alertas del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

## Definir un patrón común para una cuenta empresarial

Antes de definir un patrón personalizado, debes garantizar que habilitaste el escaneo de secretos para tu cuenta empresarial. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_GH_advanced_security %} en tu empresa]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)".

{% note %}

**Nota:** Como no hay funcionalidad de pruebas en seco, te recomendamos probar tus patrones personalizados en un repositorio antes de definirlos para toda tu empresa. De esta forma, puedes evitar crear alertas del {% data variables.product.prodname_secret_scanning %} falsas positivas en exceso.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}
1. Debajo de "Patrones personalizados del escaneo de secretos", haz clic en {% ifversion fpt or ghes > 3.2 or ghae-next or ghec %}**Patrón nuevo**{% elsif ghes = 3.2 %}**Patrón personalizado nuevo**{% endif %}.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

Después de que se cree tu patrón, el {% data variables.product.prodname_secret_scanning %} escaneará en búsqueda de cualquier secreto en los repositorios {% ifversion fpt or ghec %}privados{% endif %} dentro de las organizaciones de tu empresa que cuenten con la {% data variables.product.prodname_GH_advanced_security %} habilitada, incluyendo todo su historial de Git en todas las ramas. Se alertará a los propietarios de organizaciones y administradores de repositorios de cualquier secreto que se encuentre y estos podrán revisar la alerta en el repositorio en donde se encontró el secreto. Para obtener más información sobre cómo ver las alertas del {% data variables.product.prodname_secret_scanning %}, consulta la sección "[Administrar las alertas del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

{% ifversion fpt or ghes > 3.2 or ghec %}
## Editar un patrón personalizado

Cuando guardas un cambio en un patrón personalizado, este cierra todas las alertas del {% data variables.product.prodname_secret_scanning %} que se crearon utilizando la versión anterior del patrón.
1. Navegar a donde se creó el patrón personalizado. Un patrón personalizado puede crearse en un repositorio, organización o cuenta empresarial.
   * Para un repositorio u organización, muestra los ajustes de "Seguridad & análisis" para el repositorio u organización en donde se creó el patrón personalizado. Para obtener más información, consulta las secciones anteriores "[Definir un patrón personalizado para un repositorio](#defining-a-custom-pattern-for-a-repository)" o "[Definir un patrón personalizado apra una organización](#defining-a-custom-pattern-for-an-organization)".
   * Para una empresa, debajo de "Políticas", muestra el área de "Seguridad Avanzada" y luego haz clic en **Características de seguridad**. Para obtener más información, consulta la sección anterior "[Definir un patrón personalizado para una cuenta empresarial](#defining-a-custom-pattern-for-an-enterprise-account)".
2. Debajo de "{% data variables.product.prodname_secret_scanning_caps %}", a la derecha del patrón personalizado que quieras editar, haz clic en {% octicon "pencil" aria-label="The edit icon" %}.
3. Cuando hayas revisado y probado tus cambios, haz clic en **Guardar cambios**.
{% endif %}

## Eliminar un patrón personalizado

1. Navegar a donde se creó el patrón personalizado. Un patrón personalizado se puede crear en un repositorio, organización o cuenta empresarial.

   * Para un repositorio u organización, muestra los ajustes de "Seguridad & análisis" para el repositorio u organización en donde se creó el patrón personalizado. Para obtener más información, consulta las secciones anteriores "[Definir un patrón personalizado para un repositorio](#defining-a-custom-pattern-for-a-repository)" o "[Definir un patrón personalizado apra una organización](#defining-a-custom-pattern-for-an-organization)".
   * Para una empresa, debajo de "Políticas", muestra el área de "Seguridad Avanzada" y luego haz clic en **Características de seguridad**.  Para obtener más información, consulta la sección anterior "[Definir un patrón personalizado para una cuenta empresarial](#defining-a-custom-pattern-for-an-enterprise-account)".
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
1. A la derecha del patrón personalizado que quieras eliminar, haz clic en {% octicon "trash" aria-label="The trash icon" %}.
1. Revisa la confirmación y seleccionar el método para tratar con cualquier alerta abierta que tenga relación con el patrón personalizado.
1. Haz clic en **Sí, borrar este patrón**.

   ![Confirmación del borrado de un patrón personalizado del {% data variables.product.prodname_secret_scanning %} ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
{%- elsif ghes = 3.2 %}
1. A la derecha del patrón personalizado que quieras eliminar, haz clic en **Eliminar**.
1. Revisa la confirmación y haz clic en **Eliminar patrón personalizado**.
{%- endif %}
