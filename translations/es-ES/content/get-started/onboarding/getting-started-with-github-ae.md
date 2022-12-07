---
title: Iniciar con GitHub AE
intro: 'Empieza con la configuración y ajustes de {% data variables.product.product_name %} para {% data variables.location.product_location %}.'
versions:
  ghae: '*'
ms.openlocfilehash: 957a922a2493abd8f625cdb9e9d6650283820222
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180065'
---
Esta guía te mostrará cómo configurar, ajustar y administrar la configuración de {% data variables.location.product_location %} en {% data variables.product.product_name %} como propietario de la empresa. Para obtener más información acerca de {% data variables.product.product_name %}, consulta "[Acerca de {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae)".

## Parte 1: Configurar {% data variables.product.product_name %}
Para comenzar con {% data variables.product.product_name %}, puedes crear tu propia cuenta empresarial, inicializar {% data variables.product.product_name %}, configurar una lista de IP permitidas, configurar la autenticación y aprovisionamiento de usuarios y administrar la facturación de {% data variables.location.product_location %}.

### 1. Crear una cuenta empresarial de {% data variables.product.product_name %}
Primero necesitarás comprar {% data variables.product.product_name %}. Para obtener más información, póngase en contacto con el [equipo de ventas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

{% data reusables.github-ae.initialize-enterprise %}

### 2. Inicializar {% data variables.product.product_name %}
Después de que {% data variables.product.company_short %} crea la cuenta de propietario para {% data variables.location.product_location %} en {% data variables.product.product_name %}, recibirás un correo electrónico para iniciar sesión y completar la inicialización. Durante la inicialización, tú, como propietario de la empresa, nombrarás la {% data variables.location.product_location %}, configurarás el SSO de SAML y crearás políticas para todas las organizaciones en {% data variables.location.product_location %} y configurarás un contacto de soporte para los miembros de tu empresa. Para obtener más información, consulte "[Inicialización de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/configuring-your-enterprise/initializing-github-ae)".

### 3. Restringir el tráfico de red
Puedes configurar una lista de direcciones IP permitidas específicas para restringir el acceso a los activos que pertenecen a las organizaciones en tu cuenta empresarial. Para obtener más información, consulta "[Restricción del tráfico de red a la empresa con una lista de direcciones IP permitidas](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)".

### 4. Administrar la identidad y el acceso de {% data variables.location.product_location %}
Puedes administrar el acceso centralmente a {% data variables.location.product_location %} en {% data variables.product.product_name %} desde un proveedor de identidad (IdP) utilizando el inicio de sesión único (SSO) de SAML para la autenticación de usuarios y un Sistema de Administración de Identidad de Dominio Cruzado (SCIM) para el aprovisionamiento de usuarios. Una vez que configures el aprovisionamiento, podrás asignar o desasignar usuarios a la aplicación desde el IdP, creando o inhabilitando cuentas de usuario en la empresa. Para obtener más información, consulte "[Acerca de la administración de identidades y acceso para la empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)".

### 5. Administrar la facturación de {% data variables.location.product_location %}
Los propietarios de la suscripción a {% data variables.location.product_location %} en {% data variables.product.product_name %} pueden ver los detalles de facturación para {% data variables.product.product_name %} en Azure Portal. Para obtener más información, consulte "[Administración de la facturación de la empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

## Parte 2: Organizar y administrar a los miembros de la empresa
Como propietario de la empresa para {% data variables.product.product_name %}, puedes administrar los ajustes a nivel de los usuarios, repositorios, equipos y de la organización. Puedes administrar a los miembros de {% data variables.location.product_location %}, crear y administrar organizaciones, configurar políticas para la administración de repositorios y crear y administrar equipos.

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
Para incrementar la seguridad de {% data variables.location.product_location %}, puedes monitorear a {% data variables.location.product_location %} y configurar las características de seguridad y análisis para tus organizaciones.

### 1. Supervisión de {% data variables.location.product_location %}
Puedes monitorear a {% data variables.location.product_location %} con tu tablero de actividad y registro de bitácoras de auditoría. Para obtener más información, consulte "[Supervisión de la actividad de usuario en la empresa](/admin/monitoring-activity-in-your-enterprise)".

### 2. Configuración de las características de seguridad de las organizaciones
{% data reusables.getting-started.configuring-security-features %}

## Parte 4: Personalizar y automatizar el trabajo en {% data variables.location.product_location %}
Puedes personalizar y automatizar el trabajo en las organizaciones de {% data variables.location.product_location %} con la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %} y {% data variables.product.prodname_pages %}.

### 1. Uso de la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### 2. Creación de {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Para obtener más información sobre cómo habilitar y configurar {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}, consulte "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)".

### 3. Uso de {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}
## Parte 5: Utilizar los recursos de apoyo y aprendizaje de {% data variables.product.prodname_dotcom %}
Los miembros de tu empresa pueden aprender más sobre Git y sobre {% data variables.product.prodname_dotcom %} con nuestros recursos para aprender y puedes obtener el apoyo que necesitas con {% data variables.product.prodname_dotcom %} Enterprise Support.

### 1. Información sobre {% data variables.product.product_name %} en {% data variables.product.prodname_docs %}
Puedes leer la documentación que refleje las características disponibles en {% data variables.product.prodname_ghe_managed %}. Para más información, vea "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

### 2. Aprendizaje con {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-enterprise %}

### 3. Ayuda del soporte técnico de {% data variables.product.prodname_dotcom %} Enterprise
{% data reusables.getting-started.contact-support-enterprise %}
