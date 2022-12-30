---
title: Definición de patrones personalizados para el examen de secretos
shortTitle: Define custom patterns
intro: 'Puedes extender la {% data variables.product.prodname_secret_scanning_GHAS %} para detectar los secretos más allá de sus patrones predeterminados.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 1c7594329dfdc2843e38c1c2eb7b70e32b89f11b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106521'
---
## Acerca de los patrones personalizados para el {% data variables.product.prodname_secret_scanning %}

Puedes definir patrones personalizados para identificar secretos que no detecten los patrones predeterminados que son compatibles con el {% data variables.product.prodname_secret_scanning %}. Por ejemplo, puede que tengas un patrón secreto que sea interno a tu organización. Para más información sobre los secretos y proveedores de servicios admitidos, vea "[Patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)".

Puedes definir patrones personalizados para tu empresa, organización o repositorio. {% data variables.product.prodname_secret_scanning_caps %} admite hasta 500 patrones personalizados por cada cuenta de la organización o empresarial, y hasta 100 por repositorio.

## Sintaxis de expresión regular para los patrones personalizados

Puedes especificar patrones personalizados para la {% data variables.product.prodname_secret_scanning_GHAS %} como una o más expresiones regulares.

- **Formato del secreto:** expresión que describe el formato del propio secreto.
- **Antes del secreto:** expresión que describe los caracteres que aparecen antes del secreto. De manera predeterminada, esto se establece en `\A|[^0-9A-Za-z]`, lo que significa que el secreto debe estar al inicio de una línea, o bien que debe estar precedido de un carácter alfanumérico.
- **Después del secreto:** expresión que describe los caracteres que aparecen después del secreto. De manera predeterminada, esto se establece en `\z|[^0-9A-Za-z]`, lo que significa que al secreto le debe seguir una nueva línea o un carácter que no sea alfanumérico.
- **Requisitos de coincidencia adicionales:** una o más expresiones opcionales con las que el propio secreto debe o no coincidir.

Para los tokens simples, a menudo solo necesitas especificar un formato de secreto. Los otros campos proporcionan flexibilidad para que puedas especificar secretos más complejos sin crear expresiones regulares complejas.  Para obtener un ejemplo de un patrón personalizado, vea "[Ejemplo de un patrón personalizado especificado mediante requisitos adicionales](#example-of-a-custom-pattern-specified-using-additional-requirements)" a continuación.

En {% data variables.product.prodname_secret_scanning_caps %} se usa la [biblioteca Hyperscan](https://github.com/intel/hyperscan) y solo admite construcciones de expresión regular de Hyperscan, que son un subconjunto de la sintaxis de PCRE. Los modificadores de opción de Hyperscan no son compatibles.  Para más información sobre las construcciones de patrones de Hyperscan, vea "[Compatibilidad con patrones](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)" en la documentación de Hyperscan.

## Definir un patrón común para un repositorio

Antes de definir un patrón personalizado, debes asegurarte de que el {% data variables.product.prodname_secret_scanning %} esté habilitado en tu repositorio. Para más información, vea "[Configuración de {% data variables.product.prodname_secret_scanning %} para los repositorios](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. Cuando esté listo para probar el nuevo patrón personalizado, a fin de identificar las coincidencias en el repositorio sin crear alertas, haga clic en **Guardar y simular**.
{% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {% endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Después de que se cree el patrón, {% data reusables.secret-scanning.secret-scanning-process %} Para más información sobre cómo visualizar alertas de {% data variables.product.prodname_secret_scanning %}, vea "[Administración de alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

### Ejemplos de un patrón personalizado especificado utilizando requisitos adicionales

Una compañía tiene un token interno con cinco características. Utilizan campos diferentes para especificar cómo identificar los tokens de acuerdo con lo siguiente:

| **Característica** | **Campo y expresión regular** |
|----------------|------------------------------|
| Longitud entre 5 y 10 carácteres | Formato del secreto: `[$#%@AA-Za-z0-9]{5,10}` |
| No termina por `.` | Después del secreto: `[^\.]` |
| Contiene números y mayúsculas | Requisitos adicionales: el secreto debe coincidir con `[A-Z]` y `[0-9]` |
| No incluye más de una minúscula seguida | Requisitos adicionales: el secreto no debe coincidir con `[a-z]{2,}` |
| Contiene uno de `$%@!` | Requisitos adicionales: el secreto debe coincidir con `[$%@!]` |

Estos tokens empataron con el patrón personalizado que se describe anteriormente:

```
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

Estas secuencias no empataron con el patrón personalizado que se describe anteriormente:

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## Definir un patrón común para una organización

Antes de definir un patrón personalizado, debes asegurarte de que hayas habilitado el {% data variables.product.prodname_secret_scanning %} para los repositorios que quieras escanear en tu organización. Para habilitar {% data variables.product.prodname_secret_scanning %} en todos los repositorios de la organización, vea "[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% ifversion ghes < 3.5 or ghae %} {% note %}

**Nota:** Como no hay ninguna funcionalidad de simulación, le recomendamos probar los patrones personalizados en un repositorio antes de definirlos para toda la organización. De esta forma, puedes evitar crear alertas del {% data variables.product.prodname_secret_scanning %} falsas positivas en exceso.

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. Cuando estés listo para probar el nuevo patrón personalizado para identificar coincidencias en repositorios seleccionados sin crear alertas, haz clic en **Guardar y realizar ensayo**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Después de crear tu patrón, el {% data variables.product.prodname_secret_scanning %} escaneará en búsqueda de cualquier secreto en los repositorios de tu organización, incluyendo el historial completo de Git en todas las ramas. Se le alertará a los propietarios de las organizaciones y los administradores de los repositorios sobre cualquier secreto que se haya encontrado y podrán revisar la alerta en el repositorio en cuestión. Para más información sobre cómo ver las alertas de {% data variables.product.prodname_secret_scanning %}, vea "[Administración de alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

## Definir un patrón común para una cuenta empresarial

{% ifversion fpt or ghec or ghes %}

Antes de definir un patrón personalizado, debes garantizar que habilitaste el escaneo de secretos para tu cuenta empresarial. Para más información, vea "[Habilitación de {% data variables.product.prodname_GH_advanced_security %} para la empresa]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)".

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %} **Notas:**
- En el nivel empresarial, solo el creador de un patrón personalizado puede editar el patrón y usarlo en un ensayo. 
- Los propietarios de empresa solo pueden ejecutar ensayos en repositorios a los que tienen acceso, y no tienen acceso necesariamente a todas las organizaciones o repositorios de la empresa.
{% else %} **Nota:** Como no hay ninguna funcionalidad de ensayo, se recomienda probar los patrones personalizados en un repositorio antes de definirlos para toda la empresa. De esta forma, puedes evitar crear alertas del {% data variables.product.prodname_secret_scanning %} falsas positivas en exceso.

{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}{% ifversion security-feature-enablement-policies %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. En "Análisis y seguridad de código", haz clic en **Características de seguridad**.{% else %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-security-features %}{% endif %}
1. En "Patrones personalizados de examen de secretos", haz clic en **Nuevo patrón**.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
1. Cuando estés a punto para probar el nuevo patrón personalizado, a fin de identificar las coincidencias en la empresa sin crear alertas, haz clic en **Guardar y simular**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-36 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Después de que se haya creado tu patrón, el {% data variables.product.prodname_secret_scanning %} buscará cualquier secreto en los repositorios de las organizaciones de tu empras que tengan habilitada la {% data variables.product.prodname_GH_advanced_security %}, incluyendo en todo el historial de Git de todas las ramas. Se alertará a los propietarios de organizaciones y administradores de repositorios de cualquier secreto que se encuentre y estos podrán revisar la alerta en el repositorio en donde se encontró el secreto. Para más información sobre cómo ver las alertas de {% data variables.product.prodname_secret_scanning %}, vea "[Administración de alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

## Editar un patrón personalizado

Cuando guardas un cambio en un patrón personalizado, este cierra todas las alertas del {% data variables.product.prodname_secret_scanning %} que se crearon utilizando la versión anterior del patrón.
1. Navegar a donde se creó el patrón personalizado. Un patrón personalizado se puede crear en un repositorio, organización o cuenta empresarial.
   * Para un repositorio u organización, muestre los valores de "Seguridad y análisis" para el repositorio o la organización donde haya creado el patrón personalizado. Para más información, vea "[Definición de un patrón personalizado para un repositorio](#defining-a-custom-pattern-for-a-repository)" o "[Definición de un patrón personalizado para una organización](#defining-a-custom-pattern-for-an-organization)" anteriormente.
   * Para una empresa, en "Directivas", muestre el área "Seguridad avanzada" y, después, haga clic en **Características de seguridad**. Para más información, vea "[Definición de un patrón personalizado para una cuenta de empresa](#defining-a-custom-pattern-for-an-enterprise-account)" más arriba.
2. Debajo de "{% data variables.product.prodname_secret_scanning_caps %}", a la derecha del patrón personalizado que quieras editar, haz clic en {% octicon "pencil" aria-label="The edit icon" %}.
{%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga  %}
3. Cuando estés a punto para probar el patrón personalizado editado, a fin de identificar las coincidencias sin crear alertas, haz clic en **Guardar y simular**.
{%- endif %}
4. Cuando haya revisado y probado la cambios, haga clic en **Guardar cambios**.

## Eliminar un patrón personalizado

1. Navegar a donde se creó el patrón personalizado. Un patrón personalizado se puede crear en un repositorio, organización o cuenta empresarial.

   * Para un repositorio u organización, muestre los valores de "Seguridad y análisis" para el repositorio o la organización donde haya creado el patrón personalizado. Para más información, vea "[Definición de un patrón personalizado para un repositorio](#defining-a-custom-pattern-for-a-repository)" o "[Definición de un patrón personalizado para una organización](#defining-a-custom-pattern-for-an-organization)" anteriormente.
   * Para una empresa, en "Directivas", muestre el área "Seguridad avanzada" y, después, haga clic en **Características de seguridad**.  Para más información, vea "[Definición de un patrón personalizado para una cuenta de empresa](#defining-a-custom-pattern-for-an-enterprise-account)" más arriba.
1. A la derecha del patrón personalizado que quieras eliminar, haz clic en {% octicon "trash" aria-label="The trash icon" %}.
1. Revisa la confirmación y seleccionar el método para tratar con cualquier alerta abierta que tenga relación con el patrón personalizado.
1. Haga clic en **Sí, eliminar este patrón**.

   ![Confirmación del borrado de un patrón personalizado de {% data variables.product.prodname_secret_scanning %} ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
