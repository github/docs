---
title: Configurar el escaneo de secretos para tu aplicativo
shortTitle: Configurar el escaneo de secretos
intro: 'Puedes habilitar, configurar e inhabilitar el {% data variables.product.prodname_secret_scanning %} para {% data variables.product.product_location %}. {% data variables.product.prodname_secret_scanning_caps %} permite a los usuarios escanear código para los secretos que se confirmaron por accidente.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/advanced-security/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Secret scanning
  - Security
---

{% data reusables.secret-scanning.beta %}

## Acerca de {% data variables.product.prodname_secret_scanning %}

Si alguien verifica un secreto con un patrón conocido en un repositorio, el {% data variables.product.prodname_secret_scanning %} atrapa el secreto conforme ingresa y te permite mitigar el impacto de la fuga. Se notifica a los administradores de repositorio sobre cualquier confirmación que contenga un secreto y pueden ver rápidamente todos los secretos en la pestaña de seguridad de éste. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)".

## Verificar si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Prerequisitos del {% data variables.product.prodname_secret_scanning %}

- Necesitas habilitar el marcador de CPU de las [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (Extenciones SIMD de Streaming Suplementario 3, por sus siglas en inglés) en el VM/KVM que ejecuta {% data variables.product.product_location %}.

- Una licencia para {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (consulta la sección "[Acerca de la facturación para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

- Eñ {% data variables.product.prodname_secret_scanning_caps %} habilitado en la consola de administración (consulta la sección "[Habilitar la {% data variables.product.prodname_GH_advanced_security %} para tu empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

### Verificar la compatibilidad del marcador de las SSSE3 en tus vCPU

El conjunto de instrucciones de las SSSE3 se requiere porque el {% data variables.product.prodname_secret_scanning %} impulsa el patrón acelerado de hardware que empata para encontrar las credenciales potenciales que se confirmaron en tus repositorios de {% data variables.product.prodname_dotcom %}. Las SSSE3 se habilitan para la mayoría de los CPU modernos. Puedes verificar si las SSSE3 están habilitadas para los vCPU disponibles para tu instancia de {% data variables.product.prodname_ghe_server %}.

1. Conéctate al shell administrativo para tu instancia de {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)."
2. Ingresa el siguiente comando:

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
   ```

   Si esto devuelve el valor `0`, esto significa que el marcador de SSSE3 se encuentra disponible y habilitado. Ahora puedes habilitar el {% data variables.product.prodname_secret_scanning %} para {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Habilitar el {% data variables.product.prodname_secret_scanning %}](#enabling-secret-scanning)" que se encuentra más adelante.

   Si no se devuelve un `0`, entonces no se ha habilitado las SSSE3 en tu VM/KVM. Necesitarás referirte a la documentación del hardware/hípervisor para encontrar cómo habilitar el marcador o ponerlo disponible como VM invitadas.

## Habilitar {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," click **{% data variables.product.prodname_secret_scanning_caps %}**. ![Casilla para habilitar o inhabilitar el {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

## Inhabilitar las {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," unselect **{% data variables.product.prodname_secret_scanning_caps %}**. ![Casilla para habilitar o inhabilitar el {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/secret-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}
