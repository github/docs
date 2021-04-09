---
title: Acerca del licenciamiento para GitHub Advanced Security
intro: 'Si quieres utilizar las características de {% data variables.product.prodname_GH_advanced_security %} en un repositorio privado o interno, necesitas una licencia. Estas características se encuentran disponibles gratuitamente para los repositorios públicos.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  free-pro-team: '*'
---

### Acerca del licenciamiento para {% data variables.product.prodname_GH_advanced_security %}

Si quieres utilizar las características de {% data variables.product.prodname_GH_advanced_security %} en cualquier repositorio aparte de uno público en {% data variables.product.prodname_dotcom_the_website %}, necesitarás una licencia. Para obtener más información acerca de {% data variables.product.prodname_GH_advanced_security %}, consulta la sección "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

{% data reusables.advanced-security.license-overview %}

Para negociar el licenciamiento de {% data variables.product.prodname_GH_advanced_security %} para tu cuenta empresarial, contacta a {% data variables.contact.contact_enterprise_sales %}.

### Acerca de los números de confirmante para {% data variables.product.prodname_GH_advanced_security %}

Registramos y mostramos dos números de confirmantes para la {% data variables.product.prodname_GH_advanced_security %} en {% data variables.product.prodname_dotcom_the_website %}:

- **Confirmantes** es la cantidad de confirmantes que contribuye con por lo menos un repositorio privado en una organización y que utilizan una plaza de tu licencia. Es decir, también son un miembro de la organización, un colaborador externo, o tienen una invitación pendiente para unirse a una organización en tu empresa.
- **Únicos para este repositorio/organización** es la cantidad de confirmantes que contribuyen únicamente a este repositorio o a los repositorios en esta organización. Esta cantidad muestra cuántas plazas de la licencia puedes liberar si inhabilitas la {% data variables.product.prodname_GH_advanced_security %} para este repositorio u organización.

Si no hay confirmantes únicos, esto significa que todos los confirmantes activos también contribuyen con otros repositorios u organizaciones que utilizan la {% data variables.product.prodname_GH_advanced_security %}. Inhabilitar la característica para este repositorio u organización no liberará plazas en tu licencia.

{% note %}

**Nota:** La cantidad total de plazas que se utilizan en tu licencia no es la suma de ya sea los confirmantes o los confirmantes únicos en cada repositorio u organización. Esto es porque hay personas que contribuyen con repositorios u organizaciones múltiples. La cantidad de plazas que se utilizan se miden en toda la cuenta empresarial para garantizar que cada persona se cuenta únicamente una vez sin importar en cuántos repositorios u organizaciones contribuyan.

{% endnote %}

### Administrar tu uso de licencia para {% data variables.product.prodname_GH_advanced_security %}

Cuando habilitas la {% data variables.product.prodname_GH_advanced_security %} para un solo repositorio, o para todos los repositorios en una organización, {% data variables.product.company_short %} te muestra cuántas plazas adicionales se utilizarán y te pedirá que confirmes. Si inhabilitas el acceso a {% data variables.product.prodname_GH_advanced_security %}, se liberará cualquier plaza que utilice un confirmante "único". Esto hace que el impacto de tus cambios sobre el uso de tu licencia sea más fácil de entender.

Si sobrepasas el límite de tu licencia, {% data variables.product.prodname_GH_advanced_security %} seguirá trabajando en todos los repositorios en donde ya se encuentre habilitado. Sin embargo, en las organizaciones en donde se habilita la {% data variables.product.prodname_GH_advanced_security %} para los repositorios nuevos, se crearán repositorios con la característica inhabilitada. Adicionalmente, la opción para habilitar la {% data variables.product.prodname_GH_advanced_security %} para los repositorios existentes no estará disponible. Si cambias la visibilidad de un repositorio público a privado, entonces la {% data variables.product.prodname_GH_advanced_security %} se inhabilitará para dicho repositorio.

Tan pronto como liberes algunas plazas, al inhabilitar la {% data variables.product.prodname_GH_advanced_security %} para algunos repositorios o al incrementar tu tamaño de licencia, las opciones para habilitar la {% data variables.product.prodname_GH_advanced_security %} funcionarán nuevamente como normales.

Puedes requerir políticas para permitir o dejar de permitir que las organizaciones que pertenecen a tu cuenta empresarial utilicen la {% data variables.product.prodname_advanced_security %}. Para obtener más información, consulta la sección "[Requerir políticas para la {% data variables.product.prodname_advanced_security %} en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)".

Para obtener más información sobre cómo visualizar el uso de licencia, consulta la sección "[Visualizar tu uso de la {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage)".

### Obtener el máximo de tu licencia de {% data variables.product.prodname_GH_advanced_security %}

Cuando decides qué repositorios y organizaciones priorizar para la {% data variables.product.prodname_GH_advanced_security %}, debes revisarlas e identificar:

- Las bases de código que son más críticas para el éxito de tu empresa. Estos son los proyectos para los cuales la introducción de código vulnerable, los secretos de código rígido, o las dependencias vulnerables tendrían el mayor impacto en tu empresa.
- Las bases de código con la frecuencia de confirmación más alta. Estos son los proyectos que se desarrollan de forma más activa y, por consecuencia, hay un riesgo mayor para que se introduzcan problemas de seguridad.

Cuando habilitas la {% data variables.product.prodname_GH_advanced_security %} para estas organizaciones o repositorios, debes evaluar qué otras bases de código puedes agregar sin añadir confirmantes únicos adicionales y sin usar más plazas en tu licencia. Después de esto, revisa las siguientes bases de código más ocupadas e importantes. Si quieres incrementar la cantidad de plazas en tu licencia, contacta a {% data variables.contact.contact_enterprise_sales %}.
