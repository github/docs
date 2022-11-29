---
title: Acerca de la autenticación para tu empresa
shortTitle: About authentication
intro: '{% ifversion ghae %}Debes configurar el inicio de sesión único (SSO) de SAML para que los usuarios se autentiquen{% else %}Puedes elegir la forma en que los usuarios se autentican{% endif %} para acceder a {% ifversion ghec %}los recursos de la empresa en {% data variables.product.product_name %}{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}la empresa en {% data variables.product.product_name %}{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 16b5bdd98e37db2eef6fe7e4e02da1a4ce8fd406
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164376'
---
## Acerca de la autenticación para tu empresa

{% ifversion ghec %}

Los propietarios de la empresa en {% data variables.product.product_name %} pueden controlar los requisitos de autenticación y acceso a los recursos de la empresa. 

{% data reusables.enterprise.ghec-authentication-options %}

Después de obtener más información sobre estas opciones, para determinar qué método es mejor para tu empresa, consulta "[Identificación del mejor método de autenticación para la empresa](#identifying-the-best-authentication-method-for-your-enterprise)".

## Métodos de autenticación para {% data variables.product.product_name %}

Las siguientes opciones están disponibles para la administración de cuentas y la autenticación en {% data variables.product.product_name %}.

- [Autenticación a través de {% data variables.location.product_location %}](#authentication-through-githubcom)
- [Autenticación a través de {% data variables.location.product_location %} con restricción de acceso SAML adicional](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Autenticación con {% data variables.product.prodname_emus %} y federación](#authentication-with-enterprise-managed-users-and-federation)

### Autenticación a través de {% data variables.location.product_location %}

De forma predeterminada, cada miembro debe crear una cuenta personal en {% data variables.location.product_location %}. Concedes acceso a tu empresa y el miembro puede acceder a los recursos de esta después de iniciar sesión en la cuenta en {% data variables.location.product_location %}. El miembro administra la cuenta y puede contribuir a otras empresas, organizaciones y repositorios en {% data variables.location.product_location %}.

### Autenticación a través de {% data variables.location.product_location %} con restricción de acceso SAML adicional

Si configuras una restricción de acceso SAML adicional, cada miembro debe crear y administrar una cuenta personal en {% data variables.location.product_location %}. Concedes acceso a la empresa y el miembro puede acceder a los recursos de esta después de iniciar sesión en la cuenta en {% data variables.location.product_location %} y autenticarse correctamente con el proveedor de identidades (IdP) de SAML. El miembro puede contribuir en otras empresas, organizaciones y repositorios en {% data variables.location.product_location %} mediante su cuenta personal. Para obtener más información sobre cómo requerir autenticación SAML para todos los recursos de la empresa, consulta "[Acerca de SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

Si usas una organización independiente con {% data variables.product.product_name %}, o si no deseas usar la autenticación SAML para cada organización de la empresa, puedes configurar SAML para una organización individual. Para más información, vea "[Acerca de la administración de identidades y acceso con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

### Autenticación con {% data variables.product.prodname_emus %} y federación

Si necesitas más control de las cuentas de los miembros de la empresa en {% data variables.location.product_location %}, puedes usar {% data variables.product.prodname_emus %}. Con {% data variables.product.prodname_emus %}, aprovisionas y administras cuentas para los miembros de la empresa en {% data variables.location.product_location %} mediante el IdP. Cada miembro inicia sesión en una cuenta que creas y la empresa la administra. Las contribuciones al resto de {% data variables.product.prodname_dotcom_the_website %} están restringidas. Para más información, vea "[Acerca de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".

## Identificación del mejor método de autenticación para la empresa

Tanto el inicio de sesión único de SAML como {% data variables.product.prodname_emus %} aumentan la seguridad de los recursos de la empresa. Además, {% data variables.product.prodname_emus %} permite controlar las cuentas de usuario de los miembros de la empresa y restringe lo que pueden hacer las cuentas. Pero estas restricciones pueden ser inaceptables para tu empresa si obstruyen los flujos de trabajo de los desarrolladores.

Para determinar si tu empresa se beneficiaría más del inicio de sesión único de SAML o de {% data variables.product.prodname_emus %}, hazte estas preguntas.

- [¿Quieres controlar las cuentas de los usuarios?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [¿Qué proveedor de identidades usa tu empresa?](#which-identity-provider-does-your-enterprise-use)
- [¿Los desarrolladores trabajan en repositorios públicos, gists o sitios de {% data variables.product.prodname_pages %}?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [¿Los desarrolladores se basan en colaboraciones fuera de la empresa?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [¿La empresa depende de colaboradores externos?](#does-your-enterprise-rely-on-outside-collaborators)
- [¿Puede la empresa tolerar costes de migración?](#can-your-enterprise-tolerate-migration-costs)

### ¿Quieres controlar las cuentas de los usuarios?

{% data variables.product.prodname_emus %} puede ser adecuado para tu empresa si no quieres que los miembros de la empresa usen sus cuentas personales en {% data variables.product.prodname_dotcom_the_website %} para acceder a los recursos de la empresa. 

Con el inicio de sesión único de SAML, los desarrolladores crean y administran sus cuentas personales y cada cuenta está vinculada a una identidad de SAML en el IdP. {% data variables.product.prodname_emus %} funciona más bien como otras soluciones de inicio de sesión único conocidas, ya que serás tú quien aprovisione las cuentas de los usuarios. También puedes asegurarte de que las cuentas de usuario se adapten a la identidad de la empresa si controlas los nombres de usuario y las direcciones de correo electrónico asociadas a las cuentas. 

Si actualmente obligas a los usuarios a crear una cuenta en {% data variables.product.prodname_dotcom_the_website %} para usarla solo con tu empresa, probablemente {% data variables.product.prodname_emus %} sea una solución adecuada para ti. En cambio, el inicio de sesión único de SAML puede ser una opción mejor si usas el IdP como origen de confianza para el usuario y si la administración de acceso agrega demasiada complejidad. Por ejemplo, quizás tu empresa no tenga un proceso establecido para incorporar nuevos usuarios en el IdP.

### ¿Qué proveedor de identidades usa tu empresa?

{% data variables.product.prodname_emus %} se admite para un número limitado de IdP, mientras que el inicio de sesión único de SAML ofrece compatibilidad completa con un mayor número de IdP, así como compatibilidad limitada con todos los IdP que implementan el estándar SAML 2.0. Para ver la lista de IdP admitidos para cada opción, consulta "[Acerca de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support)" y "[Acerca de SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)".

Puedes usar {% data variables.product.prodname_emus %} con un IdP no admitido solo si federas el IdP no admitido en un IdP compatible para usarlo como punto de integración. Si quieres evitar esta complejidad adicional, el inicio de sesión único de SAML puede ser una mejor solución para ti.

### ¿Los desarrolladores trabajan en repositorios públicos, gists o sitios de {% data variables.product.prodname_pages %}?

Para impedir que los miembros de la empresa filtren accidentalmente al público contenido corporativo en {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_emus %} impone restricciones rigurosas a lo que pueden hacer los usuarios. Por ejemplo, las {% data variables.enterprise.prodname_managed_users %} no pueden crear repositorios públicos, gists con ningún tipo de visibilidad o sitios de {% data variables.product.prodname_pages %} que sean visibles fuera de la empresa. Para ver una lista completa de restricciones, consulta "[Capacidades y restricciones de las {% data variables.enterprise.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users)".

Estas restricciones son inaceptables para algunas empresas. Para determinar si {% data variables.product.prodname_emus %} es una opción adecuada para ti, revisa las restricciones con los desarrolladores y confirma si alguna de ellas dificultará los flujos de trabajo existentes. Si es así, el inicio de sesión único de SAML puede ser una mejor opción para tu empresa.

### ¿Los desarrolladores se basan en colaboraciones fuera de la empresa?

Las {% data variables.enterprise.prodname_managed_users_caps %} solo puede contribuir en repositorios de dentro de la empresa. Si los desarrolladores deben contribuir a repositorios dentro y fuera de la empresa, incluidos los repositorios privados, es posible que {% data variables.product.prodname_emus %} no sea adecuado para la empresa. El inicio de sesión único de SAML puede ser una mejor solución.

Algunas compañías mantienen repositorios en una empresa existente mediante el inicio de sesión único de SAML en {% data variables.location.product_location %}, y también crean una {% data variables.enterprise.prodname_emu_enterprise %}. Los desarrolladores que contribuyen a los repositorios que pertenecen a ambas empresas desde una única estación de trabajo deben cambiar entre las cuentas de {% data variables.location.product_location %} en un solo explorador, o bien usar un explorador diferente con cada cuenta. Es posible que el desarrollador también tenga que personalizar la configuración de Git de la estación de trabajo para dar cabida a las dos cuentas. La complejidad de este flujo de trabajo puede aumentar el riesgo de filtrar código interno al público de forma accidental.

Si decides crear una {% data variables.enterprise.prodname_emu_enterprise %}, pero requieres que los desarrolladores contribuyan en los recursos fuera de la empresa desde una única estación de trabajo, puedes proporcionar compatibilidad para cambiar entre las cuentas en la configuración de Git local de un desarrollador. Para más información, vea "[Acerca de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom)".

### ¿La empresa depende de colaboradores externos?

Con el inicio de sesión único de SAML, puedes conceder acceso a repositorios específicos a personas que no son miembros del directorio del IdP mediante el rol de colaborador externo. Esto puede ser especialmente útil para colaboradores externos del negocio, como contratistas. Para obtener más información, consulta "[Incorporación de colaboradores externos a repositorios de la organización](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

Con {% data variables.product.prodname_emus %}, el rol de colaborador externo no existe. Solo se puede acceder a los recursos de la empresa mediante {% data variables.enterprise.prodname_managed_users %}, que siempre aprovisiona el IdP. Para conceder a los colaboradores externos acceso a tu empresa, tendrías que usar cuentas de invitado en el IdP. Si la opción de {% data variables.product.prodname_emus %} te interesa, consulta a los desarrolladores si será un obstáculo para alguno de sus flujos de trabajo existentes. Si es así, el inicio de sesión único de SAML puede ser una mejor solución.

### ¿Puede la empresa tolerar costes de migración?

Si la empresa no está familiarizada con {% data variables.product.prodname_dotcom_the_website %}, el inicio de sesión único de SAML y {% data variables.product.prodname_emus %} son igual de fáciles de adoptar.

Si ya usas {% data variables.product.prodname_dotcom_the_website %} y los desarrolladores administran sus cuentas de usuario, la adopción de {% data variables.product.prodname_emus %} requiere la migración a una nueva cuenta empresarial. Para obtener más información, consulta "[Acerca de las empresas con {% data variables.enterprise.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users)".

Aunque el uso de {% data variables.product.prodname_emus %} es gratuito, el proceso de migración puede requerir tiempo o imponer costes al equipo. Confirma que este proceso de migración es aceptable para la empresa y los desarrolladores. Si no es así, el inicio de sesión único de SAML puede ser la mejor opción.

{% elsif ghes %}

Los administradores del sitio pueden decidir cómo se autentican los usuarios para acceder a una instancia de {% data variables.product.product_name %}. Puedes usar la autenticación integrada de {% data variables.product.product_name %}, o bien, si quieres centralizar la administración de identidades y acceso para las aplicaciones web que usa el equipo, puedes configurar un método de autenticación externo.

## Métodos de autenticación para {% data variables.product.product_name %}

Los siguientes métodos de autenticación están disponibles para {% data variables.product.product_name %}.

- [Autenticación integrada](#built-in-authentication)
- [Autenticación externa](#external-authentication)

### Autenticación integrada

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} Para acceder a la instancia, los usuarios se autentican con las credenciales de la cuenta. Para obtener más información, consulta "[Configuración de la autenticación integrada](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)".

### Autenticación externa

Si usas un directorio externo o un proveedor de identidades (IdP) para centralizar el acceso a varias aplicaciones web, es posible que puedas configurar la autenticación externa para {% data variables.location.product_location %}. Para obtener más información, consulte los siguientes artículos.

- "[Uso de CAS para IAM empresarial](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[Uso de LDAP para IAM empresarial](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[Uso de SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"

Si decides usar la autenticación externa, también puedes configurar la autenticación de reserva para los usuarios que no tienen una cuenta en el proveedor de autenticación externo. Por ejemplo, puede que desees conceder acceso a un contratista o usuario de máquina. Para obtener más información, consulta "[Permiso para la autenticación integrada para usuarios fuera del proveedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)".

{% ifversion scim-for-ghes %}

Si usas el inicio de sesión único de SAML para la autenticación, también puedes aprovisionar usuarios y asignar grupos de IdP a equipos mediante SCIM. Para obtener más información, consulta "[Configuración del aprovisionamiento de usuarios con SCIM para la empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)".

{% endif %}

{% elsif ghae %}

{% data variables.product.product_name %} utiliza el SSO de SAML para la autenticación. Los propietarios de empresas deben configurar el SSO de SAML con un proveedor de identidades (IdP) de SAML durante la inicialización. Para obtener más información, consulta "[Acerca de SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

{% endif %}

## Información adicional

- "[Tipos de cuentas {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts)"
- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)" {%- ifversion ghec %}
- "[¿Puedo crear cuentas para personas en mi organización?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)"
{% endif %}
