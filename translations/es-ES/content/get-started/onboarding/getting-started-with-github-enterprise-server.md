---
title: Guía de inicio para GitHub Enterprise Server
intro: 'Inicia con la configuración y administración de {% data variables.product.product_location %}.'
versions:
  ghes: '*'
---

Esta guía te mostrará cómo configurar, ajustar y administrar {% data variables.product.product_location %} como un administrador de empresas.

{% data variables.product.company_short %} proporciona dos formas para desplegar {% data variables.product.prodname_enterprise %}.

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

{% data variables.product.company_short %} hospeda a {% data variables.product.prodname_ghe_cloud %}. Puedes desplegar y hospedar a {% data variables.product.prodname_ghe_server %} en tu propio centro de datos o en un proveedor de servicios en la nube que sea compatible.

Para ver un resumen de cómo funciona {% data variables.product.product_name %}, consulta la sección "[Resumen del sistema](/admin/overview/system-overview)".

## Parte 1: Instalar {% data variables.product.product_name %}
Para iniciar con {% data variables.product.product_name %}, necesitarás crear tu cuenta empresarial, instalar la instancia, utilizar la Consola de Administración para la configuración inicial, configurar tu instancia y administrar la facturación.
### 1. Crear tu cuenta empresarial
Antes de que instales {% data variables.product.product_name %}, puedes crear una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} contactando al [Equio de Ventas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact). Una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} es útil para facturar y compartir características con {% data variables.product.prodname_dotcom_the_website %} a través de {% data variables.product.prodname_github_connect %}.  Para obtener más información, consulta "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)".
### 2. Instalar {% data variables.product.product_name %}
Para iniciar con {% data variables.product.product_name %}, necesitarás instalar el aplicativo en una plataforma de virtualización que tú elijas. Para obtener más información, consulta "[Configurar una instancia del {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)."

### 3. Utilizar la consola de administración
Utilizarás la consola de administración para recorrer el proceso de configuración inicial cuando lances {% data variables.product.product_location %} por primera vez. También puedes utilizar la consola de administración para administrar los ajustes de instancia tales como la licencia, dominio, autenticación y TLS. Para obtener más información, consulta la sección "[Acceder a la consola de administración](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

### 4. Configurar {% data variables.product.product_location %}
Adicionalmente a la Consola de Administración, puedes utilizar el tablero de administrador de sitio y el shell administrativo (SSH) para administrar {% data variables.product.product_location %}. Por ejemplo, puedes configurar las aplicaciones y límites de tasa, ver reportes y utilizar utilidades de línea de comandos. Para obtener más información, consulta la sección "[Configurar tu empresa](/admin/configuration/configuring-your-enterprise)".

Puedes utilizar los ajustes de red predeterminados que utiliza {% data variables.product.product_name %} a través del protocolo de configuración de host dinámico (DHCP), o también puedes configurar los ajustes de red utilizando la consola de la máquina virtual. También puedes configurar un servidor proxy o reglas de firewall. Para obtener más información, consulta la sección "[Configurar los ajustes de red](/admin/configuration/configuring-network-settings)".

### 5. Configurar la disponibilidad alta
Puedes configurar a {% data variables.product.product_location %} para tener disponibilidad alta para minimizar el impacto de los fallos de hardware e interrupciones de red. Para obtener más información, consulta la sección "[Configurar la disponibilidad alta](/admin/enterprise-management/configuring-high-availability)".

### 6. Configurar una instancia de preparación
También puedes configurar una instancia de pruebas para las modificaciones, planear la recuperación de desastres y probar las actualizaciones antes de aplicarlas a {% data variables.product.product_location %}.  Para obtener más información, consulta "[Configurar una instancia de preparación](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

### 7. Designar respaldos y recuperación de desastres
Para proteger tus datos de producción, puedes configurar los respaldos automatizados de {% data variables.product.product_location %} con {% data variables.product.prodname_enterprise_backup_utilities %}. Para obtener más información, consulta "[Configurar copias de seguridad en tu aparato](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)"

### 8. Administrar la facturación para tu empresa
La facturación para todas las organizaciones e instancias de {% data variables.product.product_name %} conectadas a tu cuenta empresarial se agregará en un cargo de facturación único para todos tus servicios de pago de {% data variables.product.prodname_dotcom %}.com. Los propietarios y gerentes de facturación de las empresas pueden acceder y administrar los ajustes de facturación de las cuentas empresariales. Para obtener más información, consulta "[Administrar la facturación para tu empresa](/admin/overview/managing-billing-for-your-enterprise)".

## Parte 2: Organizar y administrar tu equipo
Como propietario empresarial o administrador, puedes administrar los ajustes a nivel de usuario, repositorio, equipo y organización. Puedes administrar a los miembros de tu empresa, crear y administrar organizaciones, configurar políticas para la administración de repositorios y crear y administrar equipos.

### 1. Adminsitrar a los miembros de {% data variables.product.product_location %}
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Crear organizaciones
{% data reusables.getting-started.creating-organizations %}

### 3. Agregar miembros a las organizaciones
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. Crear equipos
{% data reusables.getting-started.creating-teams %}

### 5. Configurar niveles de permiso de organización y repositorio
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. Requerir políticas de administración de repositorios
{% data reusables.getting-started.enforcing-repo-management-policies %}

## Parte 3: Compilar de forma segura
Para aumentar la seguridad de {% data variables.product.product_location %}, puedes configurar la autenticación para los miembros empresariales, utilizar herramientas y registro en bitácoras de auditoría para permanecer en cumplimiento, configurar las características de seguridad y análisis para tus organizaciones y, opcionalmente, habilitar la {% data variables.product.prodname_GH_advanced_security %}.
### 1. Autenticar a los miembros empresariales
You can use {% data variables.product.product_name %}'s built-in authentication method, or you can choose between an external authentication provider, such as CAS, LDAP, or SAML, to integrate your existing accounts and centrally manage user access to {% data variables.product.product_location %}. For more information, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."

También puedes requerir la autenticación bifactorial para cada una de tus organizaciones. Para obtener más información, consulta la sección "[Requerir la autenticación bifactorial en una organización](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization)".

### 2. Mantenerse en cumplimiento
Puedes implementar las verificaciones de estado requeridas y confirmar las verificaciones para hacer cumplir los estándares de cumplimiento de tu organización y automatizar los flujos de trabajo de cumplimiento. También puedes utilizar la bitácora de auditoría de tu organización para revisar las acciones que realiza tu equipo. For more information, see "[Enforcing policy with pre-receive hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks)" and "[About the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)."

{% ifversion ghes %}
### 3. Configurar las características de seguridad para tus organizaciones
{% data reusables.getting-started.configuring-security-features %}
{% endif %}

{% ifversion ghes %}
### 4. Habilitar las características de la {% data variables.product.prodname_GH_advanced_security %}
Puedes mejorar tu licencia de {% data variables.product.product_name %} para que incluya la {% data variables.product.prodname_GH_advanced_security %}. Esto proporciona características adicionales que ayudan a los usuarios a encontrar y arreglar problemas de seguridad en su código, tales como el escaneo de secretos y de código. Para obtener más información, consulta la sección "[{% data variables.product.prodname_GH_advanced_security %} para tu empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)".
{% endif %}

## Parte 4: Personalizar y automatizar el trabajo de tu empresa en {% data variables.product.prodname_dotcom %}
Puedes personalizar y automatizar el trabajo en las organizaciones de tu empresa con {% data variables.product.prodname_dotcom %} y con la API de {% data variables.product.prodname_oauth_apps %}, {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} y {% data variables.product.prodname_pages %}.

### 1. Crear {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %}
Puedes compilar integraciones con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, tales como {% data variables.product.prodname_github_apps %} o {% data variables.product.prodname_oauth_apps %}, para utilizarlas en las organizaciones de tu empresa para complementar y extender tus flujos de trabajo. Para obtener más información, consulta "[Acerca de las apps](/developers/apps/getting-started-with-apps/about-apps)."
### 2. Utilizar la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

{% ifversion ghes %}
### 3. Crear {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Para obtener más información sobre cómo habilitar y configurar las {% data variables.product.prodname_actions %} en {% data variables.product.product_name %}, consulta la sección "[Iniciar con {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".

### 4. Publicar y administrar el {% data variables.product.prodname_registry %}
{% data reusables.getting-started.packages %}

Para obtener más información sobre cómo habilitar y configurar el {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}, consulta la sección "[Iniciar con el {% data variables.product.prodname_registry %} para tu empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
{% endif %}

### 5. Uso de {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}

## Parte 5: Conectarse con otros recursos de {% data variables.product.prodname_dotcom %}
Puedes utilizar {% data variables.product.prodname_github_connect %} para compartir recursos.

Si eres el propietario tanto de una instancia de {% data variables.product.product_name %} como de cuenta de organización o de empresa de {% data variables.product.prodname_ghe_cloud %}, puedes habilitar {% data variables.product.prodname_github_connect %}. {% data variables.product.prodname_github_connect %} te permite compartir flujos de trabajo y características específicos entre {% data variables.product.product_location %} y {% data variables.product.prodname_ghe_cloud %}, tales como la búsqueda unificada y las contribuciones. Para obtener más información, consulta "[Conectar {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)."

## Parte 6: Utilizar los recursos de apoyo y aprendizaje de {% data variables.product.prodname_dotcom %}
Los miembros de tu empresa pueden aprender más sobre Git y sobre {% data variables.product.prodname_dotcom %} con nuestros recursos para aprender y puedes obtener el apoyo que necesitas cuando configures y administres {% data variables.product.product_location %} con {% data variables.product.prodname_dotcom %} Enterprise Support.

### 1. Leer sobre {% data variables.product.product_name %} en {% data variables.product.prodname_docs %}

Puedes leer la documentación que refleje las características disponibles en {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta la sección "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

### 2. Aprender con {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-lab-enterprise %}

### 3. Trabajar con {% data variables.product.prodname_dotcom %} Enterprise Support
{% data reusables.getting-started.contact-support-enterprise %}
