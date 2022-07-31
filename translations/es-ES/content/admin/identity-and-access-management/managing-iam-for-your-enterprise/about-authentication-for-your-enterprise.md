---
title: Acerca de la autenticación para tu empresa
shortTitle: Acerca de la autenticación
intro: 'Debes {% ifversion ghae %}configurar el inicio de sesión único (SSO) de SAML para que las personas puedan{% else %}puedes elegir cómo las personas pueden{% endif %} autenticarse para acceder a {% ifversion ghec %}los recursos de tu empresa en {% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}tu empresa de {% data variables.product.product_name %}{% endif %}.'
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
---

## Acerca de la autenticación para tu empresa

{% ifversion ghec %}

Los propietarios de empresa en {% data variables.product.product_name %} pueden controlar los requisitos para la autenticación y el acceso a los recursos empresariales.

Puedes elegir permitir que los miembros creen y administren cuentas de usuarios o tu empresa puede crear y administrar cuentas para los miembros con las {% data variables.product.prodname_emus %}. Si permites que los miembros administren sus propias cuentas, también puedes configurar la autenticación de SAML tanto para incrementar la seguridad como para centralizar la identidad y el acceso para las aplicaciones web que utiliza tu equipo.

Después de aprender más sobre estas opciones, para determinar el mejor método para tu empresa, consulta la sección "[Identificar el mejor método de autenticación para tu empresa](#identifying-the-best-authentication-method-for-your-enterprise)".

## Métodos de autenticación para {% data variables.product.product_name %}

Las siguientes opciones están disponibles para la administración y autenticación de cuentas en {% data variables.product.product_name %}.

- [Autenticación mediante {% data variables.product.product_location %}](#authentication-through-githubcom)
- [Autenticación mediante {% data variables.product.product_location %} con restricción de acceso adicional de SAML](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Autenticación con {% data variables.product.prodname_emus %} y federación](#authentication-with-enterprise-managed-users-and-federation)

### Autenticación mediante {% data variables.product.product_location %}

Predeterminadamente, cada miembro debe crear una cuenta personal en {% data variables.product.product_location %}. Otorgarás acceso a tu empresa y el miembro podrá acceder a los recursos de ella después de iniciar sesión en la cuenta de {% data variables.product.product_location %}. El miembro administra la cuenta y puede contribuir con otras empresas, organizaciones y repositorios en {% data variables.product.product_location %}.

### Autenticación mediante {% data variables.product.product_location %} con restricción de acceso adicional de SAML

Si configuras una restricción adicional de acceso de SAML, cada miembro debe crear y administrar una cuenta personal en {% data variables.product.product_location %}. Otorgarás acceso a tu empresa y el miembro podrá acceder a los recursos de ella después de que ambos inicien sesión en la cuenta de {% data variables.product.product_location %} y se autentiquen exitosamente con tu proveedor de identidad de SAML (IdP). El miembro puede contribuir con otras empresas, organizaciones y repositorios en {% data variables.product.product_location %} utilizando su cuenta personal. Para obtener más información sobre cómo requerir la autenticación de SAML para todo el acceso a los recursos de tu empresa, consulta la sección "[Acerca de SAML para la IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

Si utilizas una organización independiente con {% data variables.product.product_name %} o si no quieres utilizar la autenticación de SAML para cada organización de tu empresa, puedes configurar SAML para una organización individual. Para obtener más información, consulta la sección "[Acerca de la administración de identidad y accesos con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

### Autenticación con {% data variables.product.prodname_emus %} y federación

Si necesitas más control sobre las cuentas para tus miembros empresariales en {% data variables.product.product_location %}, puedes utilizar las {% data variables.product.prodname_emus %}. Con las {% data variables.product.prodname_emus %}, puedes aprovisionar y administrar cuentas para los miembros de tu empresa en {% data variables.product.product_location %} utilizando tu IdP. Cada miembro inicia sesión en una cuenta que tú creas y tu empresa la administra. Las contribuciones con el resto de {% data variables.product.prodname_dotcom_the_website %} se restringen. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".

## Identificar el mejor método de autenticación para tu empresa

Tanto el SSO de SAML como las {% data variables.product.prodname_emus %} aumentan la seguridad para los recursos de tu empresa. {% data variables.product.prodname_emus %} te permite adicionalmente controlar las cuentas de usuario de tus miembros empresariales y restringe lo que las cuentas pueden hacer. Sin embargo, dichas restricciones podrían ser inaceptables para tu empresa si obstruyen los flujos de trabajo de tus desarrolladores.

Para determinar si tu empresa se beneficiaría más del SSO de SAML o de {% data variables.product.prodname_emus %}, hazte estas preguntas.

- [¿Quieres controlar las cuentas de usuario de tus usuarios?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [¿Qué proveedor de identidad utiliza tu empresa?](#which-identity-provider-does-your-enterprise-use)
- [¿Tus desarrolladores trabajan en repositorios públicos, gists, o sitios de {% data variables.product.prodname_pages %}?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [¿Tus desarrolladores confían en la colaboración fuera de tu empresa?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [¿Tu empresa depende de colaboradores externos?](#does-your-enterprise-rely-on-outside-collaborators)
- [¿Tu empresa puede tolerar los costos de migración?](#can-your-enterprise-tolerate-migration-costs)

### ¿Quieres controlar las cuentas de usuario de tus usuarios?

Es posible que {% data variables.product.prodname_emus %} sea correcto para tu empresa si no quieres que los miembros empresariales utilicen sus propias cuentas en {% data variables.product.prodname_dotcom_the_website %} para acceder a los recursos de esta.

Con el SSO de SAML, los desarrolladores crean y administran sus propias cuentas personales y cada una de ellas se enlaza con una identidad de SAML en tu IdP. {% data variables.product.prodname_emus %} funciona similar a otras soluciones de SSO comunes, ya que aprovisonarás las cuentas para tus usuarios. También puedes asegurarte de que las cuentas de usuario se adecuen a la identidad de tu empresa al controlar los nombres de usuario y las direcciones de correo electrónico asociadas con las cuentas.

Si actualmente requieres que tus usuarios creen una cuenta nueva en {% data variables.product.prodname_dotcom_the_website %} para utilizarla únicamente con tu empresa, {% data variables.product.prodname_emus %} podría ser lo correcto para ti. Sin embargo, el SSO de SAML podría ser una mejor opción si utilizas tu IdP como la fuente de verdad para tu usuario y la administración de accesos agregaría demasiada complejidad. Por ejemplo, tal vez tu empresa no tenga un proceso establecido para integrar a los usuarios nuevos en tu IdP.

### ¿Qué proveedor de identidad utiliza tu empresa?

{% data variables.product.prodname_emus %} es compatible para una cantidad limitada de IdP, mientras que el SSO de SAML ofrece compatibilidad total para una cantidad más grande de IdP además de la compatibilidad limitada para todos los IdP que implementan el estándar de SAML 2.0. Para obtener la lista de IdP compatibles para cada opción, consulta las secciones "[Acerca de las {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support)" y "[Acerca de SAML para el IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)".

Puedes utilizar las {% data variables.product.prodname_emus %} con un IdP no compatible únicamente si federas el IdP incompatible hacia un IdP compatible para utilizarlo como punto de integración. Si quieres evitar esta complejidad adicional, el SSO de SAML podría ser una mejor solución para ti.

### ¿Tus desarrolladores trabajan en repositorios públicos, gists, o sitios de {% data variables.product.prodname_pages %}?

Para prevenir que los miembros de la empresa filtren accidentalmente contenido que le pertenezca a ella al público en {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_emus %} impone restricciones fuertes sobre lo que pueden hacer los usuarios. Por ejemplo, los {% data variables.product.prodname_managed_users %} no pueden crear repositorios públicos, gists de ningún tipo de visibilidad, ni sitios de {% data variables.product.prodname_pages %} que puedan verse desde fuera de la empresa. Para ver una lista completa de restricciones, consulta la sección "[Capacidades y restricciones de los {% data variables.product.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users)".

Estas restricciones no son aceptables para algunas empresas. Para determinar si {% data variables.product.prodname_emus %} te funcionará, revisa las restricciones con tus desarrolladores y confirma si cualquiera de ellas dificultará los flujos de trabajo existentes. En este caso, el SSO de SAML podría ser una mejor elección para tu empresa.

### ¿Tus desarrolladores confían en la colaboración fuera de tu empresa?

{% data variables.product.prodname_managed_users_caps %} solo puede contribuir con los repositorios dentro de tu empresa. Si tus desarrolladores necesitan colaborar en repositorios externos a tu empresa, incluso si estos son privados, para completar su trabajo, {% data variables.product.prodname_emus %} podría no ser lo correcto para tu empresa y el SSO de SAML podría ser una mejor solución.

### ¿Tu empresa depende de colaboradores externos?

Con el SSO de SAML puedes otorgar acceso a repositorios específicos para las personas que no sean miembros del directorio de tu IdP si utilizas el rol de colaborador externo. Esto puede ser especialmente útil para los colaboradores que son externos a tu negocio, tal como los contratistas. Para obtener más información, consulta la sección "[Agregar colaboradores externos a los repositorios de tu organización](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

Con {% data variables.product.prodname_emus %}, el rol de colaborador externo no existe. Solo se puede acceder a los recursos de tu empresa mediante {% data variables.product.prodname_managed_users %}, lo cual siempre se aprovisiona en tu IdP. Para dar acceso a tu empresa a los colaboradores externos, necesitarás utilizar cuentas de invitado en tu IdP. Si te interesa {% data variables.product.prodname_emus %}, confirma con tus desarrolladores si esto dificultará cualquiera de sus flujos de trabajo existentes. En este caso, el SSO de SAML podría ser una mejor solución.

### ¿Tu empresa puede tolerar los costos de migración?

Si tu empresa es nueva en {% data variables.product.prodname_dotcom_the_website %}, el SSO de SAML y {% data variables.product.prodname_emus %} se pueden adoptar con la misma facilidad.

Si ya estás utilizando {% data variables.product.prodname_dotcom_the_website %} con los desarrolladores que administran sus propias cuentas de usuario, el adoptar {% data variables.product.prodname_emus %} requerirá una migración a una cuenta empresarial nueva. Para obtener más información, consulta la sección "[Acerca de las empresas con {% data variables.product.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users)".

Aunque {% data variables.product.prodname_emus %} es gratuito, el proceso de migración podría requerir tiempo o costos para tu equipo. Confirma que este proceso de migración es aceptable para tu negocio y tus desarrolladores. De lo contrario, el SSO de SAML podría ser una mejor opción para ti.

{% elsif ghes %}

Los administradores de sitio pueden decidir cómo se autentican las personas para acceder a la instancia de {% data variables.product.product_name %}. Puedes utilizar la autenticación integrada de {% data variables.product.product_name %} o, si quieres centralizar la administración de acceso e identidad para las aplicaciones web que utiliza tu equipo, puedes configurar un método de autenticación externo.

## Métodos de autenticación para {% data variables.product.product_name %}

Los siguientes métodos de autenticación están disponibles para {% data variables.product.product_name %}.

- [Autenticación incorporada](#built-in-authentication)
- [Autenticación externa](#external-authentication)

### Autenticación incorporada

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} Para acceder a tu instancia, las personas se autenticarán con las credenciales para la cuenta. Para obtener más información, consulta la sección "[Configurar la autenticación incorporada](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)".

### Autenticación externa

Si utilizas un directorio o proveedor de identidad (IdP) externos para centralizar el acceso a varias aplicaciones web, es posible que puedas configurar la autenticación externa para {% data variables.product.product_location %}. Para obtener más información, consulta lo siguiente.

- "[Utilizar CAS para el IAM empresarial](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[Utilizar LDAP para el IAM empresarial](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[Utilizar SAML para el IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"

Si eliges utilizar la autenticación externa, también puedes configurar la autenticación reversible para las personas que no tiene una cuenta en tu proveedor de autenticación externo. Por ejemplo, podrías querer otorgar acceso a un usuario máquina o a un contratista. Para obtener más información, consulta la sección "[Permitir la autenticación integrada para los usuarios fuera de tu proveedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)".

{% elsif ghae %}

{% data variables.product.product_name %} utiliza el SSO de SAML para la autenticación. Los propietarios de empresas deben configurar el SSO de SAML con un proveedor de identidad (IdP) de SAML durante la inicialización. Para obtener más información, consulta la sección "[Acerca de SAML para la IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

{% endif %}

## Leer más

- [Tipos de cuentas de {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts)"
- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)"
{%- ifversion ghec %}
- "[¿Puedo crear cuentas para las personas en mi organización?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)"
{% endif %}
