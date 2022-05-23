---
title: Iniciar con GitHub AE
intro: 'Inicia con la configuración y ajustes de {% data variables.product.product_name %} para {% data variables.product.product_location %}.'
versions:
  ghae: '*'
---

Esta guía te mostrará cómo configurar, ajustar y administrar la configuración de {% data variables.product.product_location %} en {% data variables.product.product_name %} como propietario de la empresa.

## Parte 1: Configurar {% data variables.product.product_name %}
Para comenzar con {% data variables.product.product_name %}, puedes crear tu propia cuenta empresarial, inicializar {% data variables.product.product_name %}, configurar una lista de IP permitidas, configurar la autenticación y aprovisionamiento de usuarios y administrar la facturación de {% data variables.product.product_location %}.

### 1. Crear tu cuenta empresarial de {% data variables.product.product_name %}
Primero necesitarás comprar {% data variables.product.product_name %}. Para obtener más información, contacta al [Equipo de ventas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

{% data reusables.github-ae.initialize-enterprise %}

### 2. Inicializar {% data variables.product.product_name %}
Después de que {% data variables.product.company_short %} crea la cuenta de propietario para {% data variables.product.product_location %} en {% data variables.product.product_name %}, recibirás un correo electrónico para iniciar sesión y completar la inicialización. Durante la inicialización, tú, como propietario de la empresa, nombrarás la {% data variables.product.product_location %}, configurarás el SSO de SAML y crearás políticas para todas las organizaciones en {% data variables.product.product_location %} y configurarás un contacto de soporte para los miembros de tu empresa. Para obtener más información, consulta la sección "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/configuring-your-enterprise/initializing-github-ae)".

### 3. Restringir el tráfico de red
Puedes configurar una lista de direcciones IP permitidas específicas para restringir el acceso a los activos que pertenecen a las organizaciones en tu cuenta empresarial. Para obtener más información, consulta la sección "[Restringir el tráfico de red para tu empresa](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)".

### 4. Administrar la identidad y el acceso para {% data variables.product.product_location %}
Puedes administrar el acceso centralmente a {% data variables.product.product_location %} en {% data variables.product.product_name %} desde un proveedor de identidad (IdP) utilizando el inicio de sesión único (SSO) de SAML para la autenticación de usuarios y un Sistema de Administración de Identidad de Dominio Cruzado (SCIM) para el aprovisionamiento de usuarios. Una vez que configures el aprovisionamiento, podrás asignar o desasignar usuarios a la aplicación desde el IdP, creando o inhabilitando cuentas de usuario en la empresa. Para obtener más información, consulta la sección "[Acerca de la administración de accesos e identidades para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)".

### 5. Administrar la facturación para {% data variables.product.product_location %}
Los propietarios de la suscripción a {% data variables.product.product_location %} en {% data variables.product.product_name %} pueden ver los detalles de facturación para {% data variables.product.product_name %} en el portal de Azure. Para obtener más información, consulta la sección "[Administrar la facturación para tu empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

## Parte 2: Organizar y administrar a los miembros de la empresa
Como propietario de la empresa para {% data variables.product.product_name %}, puedes administrar los ajustes a nivel de los usuarios, repositorios, equipos y de la organización. Puedes administrar a los miembros de {% data variables.product.product_location %}, crear y administrar organizaciones, configurar políticas para la administración de repositorios y crear y administrar equipos.

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
Para incrementar la seguridad de {% data variables.product.product_location %}, puedes monitorear a {% data variables.product.product_location %} y configurar las características de seguridad y análisis para tus organizaciones.

### 1. Monitorear a {% data variables.product.product_location %}
Puedes monitorear a {% data variables.product.product_location %} con tu tablero de actividad y registro de bitácoras de auditoría. Para obtener más información, consulta la sección "[Monitorear la actividad en tu empresa](/admin/monitoring-activity-in-your-enterprise)".

### 2. Configurar las características de seguridad para tus organizaciones
{% data reusables.getting-started.configuring-security-features %}

## Parte 4: Personalizar y automatizar el trabajo en {% data variables.product.product_location %}
Puedes personalizar y automatizar el trabajo en las organizaciones de {% data variables.product.product_location %} con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %} y {% data variables.product.prodname_pages %}.

### 1. Utilizar la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### 2. Crear {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Para obtener más información sobre cómo habilitar y configurar las {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)".

### 3. Uso de {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}
## Parte 5: Utilizar los recursos de apoyo y aprendizaje de {% data variables.product.prodname_dotcom %}
Los miembros de tu empresa pueden aprender más sobre Git y sobre {% data variables.product.prodname_dotcom %} con nuestros recursos para aprender y puedes obtener el apoyo que necesitas con {% data variables.product.prodname_dotcom %} Enterprise Support.

### 1. Leer sobre {% data variables.product.product_name %} en {% data variables.product.prodname_docs %}
Puedes leer la documentación que refleje las características disponibles en {% data variables.product.prodname_ghe_managed %}. Para obtener más información, consulta la sección "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

### 2. Aprender con {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-lab-enterprise %}

### 3. Trabajar con {% data variables.product.prodname_dotcom %} Enterprise Support
{% data reusables.getting-started.contact-support-enterprise %}
