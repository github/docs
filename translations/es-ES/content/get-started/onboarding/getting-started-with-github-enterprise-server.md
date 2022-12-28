---
title: Guía de inicio para GitHub Enterprise Server
intro: 'Comienzo con la configuración y administración de {% data variables.location.product_location %}.'
versions:
  ghes: '*'
ms.openlocfilehash: 68cd462c42ef63863750d9edc5e122dc3c325115
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163420'
---
Esta guía te mostrará cómo configurar, ajustar y administrar {% data variables.location.product_location %} como un administrador de empresas.

{% data variables.product.company_short %} proporciona dos formas para desplegar {% data variables.product.prodname_enterprise %}.

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

{% data variables.product.company_short %} hospeda a {% data variables.product.prodname_ghe_cloud %}. Puedes desplegar y hospedar a {% data variables.product.prodname_ghe_server %} en tu propio centro de datos o en un proveedor de servicios en la nube que sea compatible.

Para obtener más información acerca de {% data variables.product.product_name %}, consulta "[Acerca de {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server)".

## Parte 1: Instalación de {% data variables.product.product_name %}
Para iniciar con {% data variables.product.product_name %}, necesitarás crear tu cuenta empresarial, instalar la instancia, utilizar la Consola de Administración para la configuración inicial, configurar tu instancia y administrar la facturación. 
### 1. Creación de una cuenta empresarial
Antes de instalar {% data variables.product.product_name %}, puede crear una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}; para ello, póngase en contacto con el [equipo de ventas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact). Una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} es útil para facturar y compartir características con {% data variables.product.prodname_dotcom_the_website %} a través de {% data variables.product.prodname_github_connect %}.  Para más información, vea "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)".
### 2. Instalación de {% data variables.product.product_name %}
Para iniciar con {% data variables.product.product_name %}, necesitarás instalar el aplicativo en una plataforma de virtualización que tú elijas. Para más información, vea "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)".

### 3. Uso de la consola de administración
Utilizarás la consola de administración para recorrer el proceso de configuración inicial cuando lances {% data variables.location.product_location %} por primera vez. También puedes utilizar la consola de administración para administrar los ajustes de instancia tales como la licencia, dominio, autenticación y TLS. Para más información, vea "[Acceso a la consola de administración](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

### 4. Configuración de {% data variables.location.product_location %}
Adicionalmente a la Consola de Administración, puedes utilizar el tablero de administrador de sitio y el shell administrativo (SSH) para administrar {% data variables.location.product_location %}. Por ejemplo, puedes configurar las aplicaciones y límites de tasa, ver reportes y utilizar utilidades de línea de comandos. Para más información, vea "[Configuración de la empresa](/admin/configuration/configuring-your-enterprise)".

Puedes utilizar los ajustes de red predeterminados que utiliza {% data variables.product.product_name %} a través del protocolo de configuración de host dinámico (DHCP), o también puedes configurar los ajustes de red utilizando la consola de la máquina virtual. También puedes configurar un servidor proxy o reglas de firewall. Para más información, vea "[Definición de la configuración de red](/admin/configuration/configuring-network-settings)".

### 5. Configuración de la alta disponibilidad
Puedes configurar {% data variables.location.product_location %} para tener disponibilidad alta para minimizar el impacto de los errores de hardware y de las interrupciones de red. Para más información, vea "[Configuración de la alta disponibilidad](/admin/enterprise-management/configuring-high-availability)".

### 6. Configuración de una instancia de ensayo
También puedes configurar una instancia de almacenamiento provisional para probar modificaciones, planear la recuperación de desastres y probar las actualizaciones antes de aplicarlas a {% data variables.location.product_location %}.  Para más información, vea "[Configuración de una instancia de ensayo](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

### 7. Configuración de copias de seguridad y de la recuperación ante desastres
Para proteger tus datos de producción, puedes configurar las copias de seguridad automatizadas de {% data variables.location.product_location %} con {% data variables.product.prodname_enterprise_backup_utilities %}. Para más información, vea "[Configuración de copias de seguridad en el dispositivo](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

### 8. Administración de la facturación de la empresa
La facturación para todas las organizaciones e instancias de {% data variables.product.product_name %} conectadas a tu cuenta empresarial se agregará en un cargo de facturación único para todos tus servicios de pago de {% data variables.product.prodname_dotcom %}.com. Los propietarios y gerentes de facturación de las empresas pueden acceder y administrar los ajustes de facturación de las cuentas empresariales. Para más información, vea "[Administración de la facturación de la empresa](/admin/overview/managing-billing-for-your-enterprise)".

## Parte 2: Organizar y administrar tu equipo
Como propietario empresarial o administrador, puedes administrar los ajustes a nivel de usuario, repositorio, equipo y organización. Puedes administrar a los miembros de tu empresa, crear y administrar organizaciones, configurar políticas para la administración de repositorios y crear y administrar equipos.

### 1. Administración de los miembros de {% data variables.location.product_location %}
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Creación de organizaciones
{% data reusables.getting-started.creating-organizations %}

### 3. Adición de miembros a las organizaciones
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. Creación de equipos
{% data reusables.getting-started.creating-teams %}

### 5. Configuración de niveles de permiso de organización y repositorio
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. Aplicación de directivas de administración de repositorios
{% data reusables.getting-started.enforcing-repo-management-policies %}

## Parte 3: Compilar de forma segura
Para aumentar la seguridad de {% data variables.location.product_location %}, puedes configurar la autenticación para los miembros empresariales, utilizar herramientas y registro en bitácoras de auditoría para permanecer en cumplimiento, configurar las características de seguridad y análisis para tus organizaciones y, opcionalmente, habilitar la {% data variables.product.prodname_GH_advanced_security %}.
### 1. Autenticación de los miembros de la empresa
Puedes utilizar el método de autenticación integrado de {% data variables.product.product_name %} o puedes elegir entre un proveedor de autenticación externo, tal como CAS, LDAP o SAML, para integrar tus cuentas existentes y administrar centralmente el acceso de los usuarios a {% data variables.location.product_location %}. Para obtener más información, consulta "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

También puedes requerir la autenticación bifactorial para cada una de tus organizaciones. Para más información, vea "[Exigencia de la autenticación en dos fases en una organización](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization)".

### 2. Mantenimiento del cumplimiento
Puedes implementar las verificaciones de estado requeridas y confirmar las verificaciones para hacer cumplir los estándares de cumplimiento de tu organización y automatizar los flujos de trabajo de cumplimiento. También puedes utilizar la bitácora de auditoría de tu organización para revisar las acciones que realiza tu equipo. Para obtener más información, consulte "[Aplicación de directivas con enlaces de recepción previa](/admin/policies/enforcing-policy-with-pre-receive-hooks)" y "[Acerca del registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)".

{% ifversion ghes %}
### 3. Configuración de las características de seguridad de las organizaciones
{% data reusables.getting-started.configuring-security-features %} {% endif %}

{% ifversion ghes %}
### 4. Habilitación de las características de {% data variables.product.prodname_GH_advanced_security %}
Puedes mejorar tu licencia de {% data variables.product.product_name %} para que incluya la {% data variables.product.prodname_GH_advanced_security %}. Esto proporciona características adicionales que ayudan a los usuarios a encontrar y arreglar problemas de seguridad en su código, tales como el escaneo de secretos y de código. Para más información, vea "[{% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)".
{% endif %}

## Parte 4: Personalizar y automatizar el trabajo de tu empresa en {% data variables.product.prodname_dotcom %}
Puedes personalizar y automatizar el trabajo en las organizaciones de tu empresa con {% data variables.product.prodname_dotcom %} y con la API de {% data variables.product.prodname_oauth_apps %}, {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} y {% data variables.product.prodname_pages %}.

### 1. Creación de {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %}
Puedes compilar integraciones con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, tales como {% data variables.product.prodname_github_apps %} o {% data variables.product.prodname_oauth_apps %}, para utilizarlas en las organizaciones de tu empresa para complementar y extender tus flujos de trabajo. Para más información, consulte "[Acerca de las actualizaciones](/developers/apps/getting-started-with-apps/about-apps)".
### 2. Uso de la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

{% ifversion ghes %}
### 3. Creación de {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Para más información sobre cómo habilitar y configurar {% data variables.product.prodname_actions %} en {% data variables.product.product_name %}, vea "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".

### 4. Publicación y administración de {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

Para obtener más información sobre cómo habilitar y configurar {% data variables.product.prodname_registry %} para {% data variables.location.product_location %}, consulta "[Introducción a {% data variables.product.prodname_registry %} para la empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
{% endif %}

### 5. Uso de {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}

## Parte 5: Conectarse con otros recursos de {% data variables.product.prodname_dotcom %}
Puedes utilizar {% data variables.product.prodname_github_connect %} para compartir recursos.

Si eres el propietario tanto de una instancia de {% data variables.product.product_name %} como de cuenta de organización o de empresa de {% data variables.product.prodname_ghe_cloud %}, puedes habilitar {% data variables.product.prodname_github_connect %}. {% data variables.product.prodname_github_connect %} te permite compartir flujos de trabajo y características específicos entre {% data variables.location.product_location %} y {% data variables.product.prodname_ghe_cloud %}, tales como la búsqueda unificada y las contribuciones. Para más información, vea "[Conexión de {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)".

## Parte 6: Utilizar los recursos de apoyo y aprendizaje de {% data variables.product.prodname_dotcom %}
Los miembros de tu empresa pueden aprender más sobre Git y sobre {% data variables.product.prodname_dotcom %} con nuestros recursos para aprender y puedes obtener el apoyo que necesitas cuando configures y administres {% data variables.location.product_location %} con {% data variables.product.prodname_dotcom %} Enterprise Support.

### 1. Información sobre {% data variables.product.product_name %} en {% data variables.product.prodname_docs %}

Puedes leer la documentación que refleje las características disponibles en {% data variables.product.prodname_ghe_server %}. Para más información, vea "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

{% data reusables.enterprise.best-practices %}

### 2. Aprendizaje con {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-enterprise %}

### 3. Ayuda del soporte técnico de {% data variables.product.prodname_dotcom %} Enterprise
{% data reusables.getting-started.contact-support-enterprise %}
