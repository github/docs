---
title: Tipos de cuentas de GitHub
intro: 'Las cuentas de {% data variables.product.product_name %} te permiten organizar y controlar el acceso al código.'
redirect_from:
  - /manage-multiple-clients
  - /managing-clients
  - /articles/what-s-the-difference-between-user-and-organization-accounts
  - /articles/differences-between-user-and-organization-accounts
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

## Acerca de las cuentas de {% data variables.product.product_name %}

Con {% data variables.product.product_name %}, puedes almacenar y colaborar con el código. Las cuentas te permiten organizar y controlar el acceso a dicho código. Existen tres tipos de cuentas en {% data variables.product.product_name %}.
- Cuentas personales
- Cuentas de organización
- Cuentas de empresa

Toda persona que utilice {% data variables.product.product_name %} inicia sesión en una cuenta personal. Una cuenta de organización amplía la colaboración entre cuentas personales múltiples y {% ifversion fpt or ghec %}una cuenta empresarial{% else %}la cuenta empresarial de {% data variables.product.product_location %}{% endif %} permite una administración centralizada de varias organizaciones.

## Cuentas personales

Cada persona que utilice {% data variables.product.product_location %} deberá iniciar sesión en una cuenta personal. Tu cuenta personal es tu identidad en {% data variables.product.product_location %} y tiene un nombre de usuario y perfil. Por ejemplo, puedes ver el [perfil de @octocat](https://github.com/octocat).

Tu cuenta personal puede ser propietaria de recursos tales como repositorios, paquetes y proyectos. En cualquier momento que realices una acción en {% data variables.product.product_location %}, tal como crear una propuesta o revisar una solicitud de cambios, dicha acción se atribuirá a tu cuenta personal.

{% ifversion fpt or ghec %}Cada cuenta personal utiliza ya sea {% data variables.product.prodname_free_user %} o {% data variables.product.prodname_pro %}. Todas las cuentas personales pueden ser propietarias de una cantidad ilimitada de repositorios públicos o privados, con una cantidad ilimitada de colaboradores en dichos repositorios. Si utilizas {% data variables.product.prodname_free_user %}, los repositorios privados que le pertenezcan a tu cuenta personal tendrán un conjunto de características limitado. Puedes mejorar a {% data variables.product.prodname_pro %} para obtener el conjunto total de características para los repositorios privados. Para obtener más información, consulta "Productos de [{% data variables.product.prodname_dotcom %}](/articles/githubs-products)". {% else %}Puedes crear una cantidad ilimitada de repositorios que le pertenezcan a tu cuenta personal, con una cantidad ilimitada de colaboradores en dichos repositorios.{% endif %}

{% tip %}

**Tip**: Se pretende que las cuentas personales sean para humanos, pero puedes crear cuentas para automatizar la actividad en {% data variables.product.product_name %}. Este tipo de cuenta se llama "usuario máquina". Por ejemplo, puedes crear una cuenta de usuario máquina para automatizar los flujos de trabajo de integración continua (IC).

{% endtip %}

{% ifversion fpt or ghec %}
La mayoría de las personas utilizarán una cuenta personal para todo su trabajo en {% data variables.product.prodname_dotcom_the_website %}, incluyendo tanto los proyectos de código abierto como el empleo pagado. Si actualmente utilizas más de una cuenta personal que hayas creado para ti mismo, te sugerimos combinar las cuentas. Para obtener más información, consulta la sección "[Fusionar cuentas personales múltiples](/articles/merging-multiple-user-accounts)".
{% endif %}

## Cuentas de organización

Las organizaciones son cuentas compartidas en donde una cantidad ilimitada de personas pueden colaborar en muchos proyectos al mismo tiempo.

Tal como las cuentas personales, las organizaciones pueden ser propietarias de recursos tales como repositorios, paquetes y proyectos. Sin embargo, no puedes iniciar sesión en una organización. En vez de esto, cada persona firmará su propia cuenta personal y cualquier acción que tome la persona sobre los recursos organizacionales se le atribuirá a su cuenta personal. Cada cuenta personal puede ser un miembro de varias organizaciones.

Se puede otorgar roles diferentes a las cuentas personales de una organización dentro de esta, lo cual otorga niveles diferentes de acceso a la organización y a sus datos. Todos los miembros pueden colaborar entre ellos en los repositorios y proyectos, pero solo los propietarios de organizaciones y administradores de seguridad pueden administrar la configuración de la organización y controlar el acceso a los datos de la organización con seguridad sofisticada y características administrativas. Para obtener más información, consulta las secciones "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)" y "[Mantener tu organización segura](/organizations/keeping-your-organization-secure)".

![Diagrama que muestra que los usuarios deben iniciar sesión en su cuenta personal personal para acceder a los recursos de una organización](/assets/images/help/overview/sign-in-pattern.png)

{% ifversion fpt or ghec %}
Incluso si eres un miembro de una organización que utiliza el inicio de sesión único de SAML, aún podrás iniciar sesión en tu cuenta personal de {% data variables.product.prodname_dotcom_the_website %} y, dicha cuenta personal, se enlazará con tu identidad en el proveedor de identidad (IdP) de tu organización. Para obtener más información, consulta la sección "[Acerca de la autenticación con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}{% else %}".{% endif %}

Sin embargo, si eres miembro de una empresa que utilice {% data variables.product.prodname_emus %} en vez de utilizar una cuenta personal que hayas creado, se aprovisionará una cuenta nueva para ti con el IdP de la empresa. Para acceder a cualquier organización que pertenezca a dicha empresa, debes autenticarte utilizando el IdP en vez de un nombre de usuario y contraseña de {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}
{% endif %}

También puedes crear subgrupos anidados de miembros de la organización llamados equipos para reflejar la estructura de tu grupo y simplificar la administración del acceso. Para obtener más información, consulta la sección "[Acerca de los equipos](/organizations/organizing-members-into-teams/about-teams)".

{% data reusables.organizations.organization-plans %}

Para obtener más información sobre todas las características de las organizaciones, consulta la sección "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

## Cuentas de empresa

{% ifversion fpt %}
{% data variables.product.prodname_ghe_cloud %} y {% data variables.product.prodname_ghe_server %} incluyen cuentas empresariales, las cuales permiten a los administradores administrar las políticas y facturas centralmente para organizaciones múltiples y habilitar el innersourcing entre ellas. Para obtener más información, consulta la sección "[Acerca de las cuentas empresariales](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec %}
Las cuentas empresariales permiten la administración central de políticas y facturación para organizaciones múltiples. Puedes utilizar tu cuenta empresarial para administrar las políticas y facturación centralmente. A diferencia de las organizaciones, las cuentas empresariales no pueden ser propietarios directos de recursos tales como repositorios, paquetes o proyectos. En su lugar, estos recursos le pertenecen a las organizaciones dentro de la cuenta empresarial. Para obtener más información, consulta "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)".
{% elsif ghes or ghae %}
Tu cuenta empresarial es una recolección de todas las organizaciones {% ifversion ghae %}que le pertenecen a{% elsif ghes %}en{% endif %}{% data variables.product.product_location %}. Puedes utilizar tu cuenta empresarial para administrar las políticas y facturación centralmente. A diferencia de las organizaciones, las cuentas empresariales no pueden ser propietarios directos de recursos tales como repositorios, paquetes o proyectos. En su lugar, estos recursos le pertenecen a las organizaciones dentro de la cuenta empresarial. Para obtener más información, consulta "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)".
{% endif %}

## Leer más

{% ifversion fpt or ghec %}
- "[Registrarse para obtener una cuenta nueva de {% data variables.product.prodname_dotcom %} ](/articles/signing-up-for-a-new-github-account)"{% endif %}
- "[Crear una cuenta de organización nueva](/articles/creating-a-new-organization-account)"
- Video de [Organizar a las personas para tener una colaboración exitosa](https://vimeo.com/333786093) en los Recursos de {% data variables.product.company_short %}
