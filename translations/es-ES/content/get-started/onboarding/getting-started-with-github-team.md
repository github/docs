---
title: Iniciar con GitHub Team
intro: 'Con {% data variables.product.prodname_team %}, los grupos de personas pueden colaborar a través de muchos proyectos al mismo tiempo en una cuenta organizacional.'
versions:
  fpt: '*'
ms.openlocfilehash: 46b5376b72ce30f7c526f693f2adb9253853cf1d
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '146139164'
---
Esta guía te mostrará cómo configurar, ajustar y administrar tu cuenta de {% data variables.product.prodname_team %} como propietario de una organización.

## Parte 1: Configurar tu cuenta de {% data variables.product.product_location %}
Como primeros pasos en el inicio con {% data variables.product.prodname_team %}, necesitarás crear una cuenta personal o iniciar sesión en tu cuenta existente de {% data variables.product.prodname_dotcom %}, crear una organización y configurar la facturación.

### 1. Acerca de las organizaciones
Las organizaciones son cuentas compartidas en las que las empresas y los proyectos de código abierto pueden colaborar en muchos proyectos a la vez. Los propietarios y los administradores pueden administrar el acceso de los miembros a los datos y los proyectos de la organización con sofisticadas características de seguridad y administración. Para obtener más información acerca de las características de las organizaciones, vea "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations#terms-of-service-and-data-protection-for-organizations)".

### 2. Crear una organización y suscribirse a {% data variables.product.prodname_team %}
Antes de crear una organización, necesitarás crear una cuenta personal o iniciar sesión en tu cuenta existente de {% data variables.product.product_location %}. Para más información, vea "[Suscripción a una nueva cuenta de {% data variables.product.prodname_dotcom %}](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)"

Una vez que se configure tu cuenta personal, puedes crear una organización y elegir un plan. Aquí es donde puedes elegir una suscripción de {% data variables.product.prodname_team %} para tu organización. Para más información, vea consulte "[Creación de una organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

### 3. Administrar la facturación de una organización
Debes administrar la configuración de facturación, método de pago y características y productos de pago para cada una de tus cuentas y organizaciones personales. Puedes cambiar entre la configuración de tus diversas cuentas utilizando el alternador de contexto en tu configuración. Para obtener más información, consulta "[Cambiar entre la configuración de las distintas cuentas](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts)".

La página de configuración de facturación de tu organización te permite administrar las configuraciones como tu método de pago, ciclo de facturación y correo electrónico de facturación o ver la información tal como tu suscripción, fecha de facturación e historial de pago. También puedes ver y mejorar tu almacenamiento y tus minutos de GitHub Actions. Para más información sobre cómo administrar la configuración de facturación, vea "[Administración de la configuración de facturación de {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings)".

Solo los miembros de la organización con los roles *propietario* o *administrador de facturación* pueden acceder a los valores de facturación de la organización o cambiarlos. Un gerente de facturación es alguien que administra la configuración de facturación de tu organización y no utiliza una licencia de pago en la suscripción de tu organización. Para más información sobre cómo agregar un gerente de facturación a la organización, vea "[Incorporación de un gerente de facturación a la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".


## Parte 2: Agregar miembros y configurar equipos
Después de crear tu organización, puedes invitar miembros y configurar permisos y roles. También puedes crear niveles diferentes de equipos y configurar niveles personalizados de permisos para los repositorios, tableros de proyecto y apps de tu organización.

### 1. Administrar miembros de la organización
{% data reusables.getting-started.managing-org-members %}

### 2. Permisos y roles de la organización
{% data reusables.getting-started.org-permissions-and-roles %}

### 3. Acerca de los equipos y creación de equipos
{% data reusables.getting-started.about-and-creating-teams %}
### 4. Administrar la configuración del equipo
{% data reusables.getting-started.managing-team-settings %}

### 5. Proporcionar acceso a repositorios, paneles de proyecto y aplicaciones a usuarios y equipos
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}
## Parte 3: Administrar la seguridad de tu organización
Puedes ayudar a mejorar la seguridad de tu organización si recomiendas o requieres autenticación bifactorial para los miembros de esta, configurando características de seguridad y revisando las bitácoras de auditoría e integraciones de la misma.

### 1. Requerir la autenticación en dos fases
{% data reusables.getting-started.requiring-2fa %}

### 2. Configurar las características de seguridad de la organización
{% data reusables.getting-started.configuring-security-features %}

### 3. Revisar el registro de auditoría y las integraciones de la organización
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

## Parte 4: Configurar políticas a nivel organizacional
### 1. Administrar directivas de la organización
{% data reusables.getting-started.managing-org-policies %}
### 2. Administrar cambios en el repositorio
{% data reusables.getting-started.managing-repo-changes %}
### 3. Usar archivos de mantenimiento y herramientas de moderación de la comunidad de nivel de organización
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}
## Parte 5: Personalizar y automatizar tu trabajo en {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}
### 1. Usar {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Uso de la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### 3. Creación de {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### 4. Publicación y administración de {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## Parte 6: Participar en la comunidad de {% data variables.product.prodname_dotcom %}
{% data reusables.getting-started.participating-in-community %}
### 1. Contribuir a proyectos de código abierto
{% data reusables.getting-started.open-source-projects %}

### 2. Interactuar con el {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Leer acerca de {% data variables.product.prodname_team %} en {% data variables.product.prodname_docs %}
Puedes leer la documentación que refleje las características disponibles en {% data variables.product.prodname_team %}. Para más información, vea "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

### 4. Aprender con {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

### 5. Apoyar a la comunidad de código abierto
{% data reusables.getting-started.sponsors %}

### 6. Contactar con {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}
## Información adicional

- "[Introducción a la cuenta de GitHub](/get-started/onboarding/getting-started-with-your-github-account)"
