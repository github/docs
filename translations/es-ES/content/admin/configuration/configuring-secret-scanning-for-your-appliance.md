---
title: Configurar el escaneo de secretos para tu aplicativo
shortTitle: Configurar el escaneo de secretos
intro: 'Puedes habilitar, configurar e inhabilitar el {% data variables.product.prodname_secret_scanning %} para {% data variables.product.product_location %}. {% data variables.product.prodname_secret_scanning_caps %} permite a los usuarios escanear código para los secretos que se confirmaron por accidente.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

{% data reusables.secret-scanning.beta %}

### Acerca de {% data variables.product.prodname_secret_scanning %}

{% data reusables.secret-scanning.about-secret-scanning %} Para obtener más información, consulta la sección "[Acerca del escaneo de secretos](/github/administering-a-repository/about-secret-scanning)".

### Prerrequisitos

Para utilizar el {% data variables.product.prodname_secret_scanning %} en {% data variables.product.product_location %}, necesitas estos dos prerequisitos.

- Necesitas habilitar el marcador de CPU de las [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (Extenciones SIMD de Streaming Suplementario 3, por sus siglas en inglés) en el VM/KVM que ejecuta {% data variables.product.product_location %}.

- Necesitas una licencia de {% data variables.product.prodname_advanced_security %}.

#### Verificar la compatibilidad del marcador de las SSSE3 en tus vCPU

El conjunto de instrucciones de las SSSE3 se requiere porque el {% data variables.product.prodname_secret_scanning %} impulsa el patrón acelerado de hardware que empata para encontrar las credenciales potenciales que se confirmaron en tus repositorios de {% data variables.product.prodname_dotcom %}. Las SSSE3 se habilitan para la mayoría de los CPU modernos. Puedes verificar si las SSSE3 están habilitadas para los vCPU disponibles para tu instancia de {% data variables.product.prodname_ghe_server %}.

1. Conéctate al shell administrativo para tu instancia de {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)."
2. Ingresa el siguiente comando:

```shell
grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
```

Si esto devuelve el valor `0`, esto significa que el marcador de SSSE3 se encuentra disponible y habilitado. Ahora puedes habilitar el {% data variables.product.prodname_secret_scanning %} para {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Habilitar el escaneo de secretos](#enabling-secret-scanning)" a continuación.

Si no se devuelve un `0`, entonces no se ha habilitado las SSSE3 en tu VM/KVM. Necesitarás referirte a la documentación del hardware/hípervisor para encontrar cómo habilitar el marcador o ponerlo disponible como VM invitadas.

#### Verificar si tienes una licencia de {% data variables.product.prodname_advanced_security %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Verifica si hay una entrada de **{% data variables.product.prodname_advanced_security %}** en la barra lateral izquierda. ![Barra lateral de seguridad avanzada](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}

### Habilitar las {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Debajo de "
{% data variables.product.prodname_advanced_security %}," da clic en **{% data variables.product.prodname_secret_scanning_caps %}**.
![Casilla para habilitar o inhabilitar el {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### Inhabilitar las {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Debajo de "
{% data variables.product.prodname_advanced_security %}", deselecciona **{% data variables.product.prodname_secret_scanning_caps %}**.
![Casilla para habilitar o inhabilitar el {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/secret-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}
