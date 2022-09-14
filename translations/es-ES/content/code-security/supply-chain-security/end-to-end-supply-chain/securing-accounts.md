---
title: Procedimientos recomendados para proteger las cuentas
shortTitle: Securing accounts
allowTitleToDifferFromFilename: true
intro: Instrucciones sobre cómo proteger las cuentas con acceso a la cadena de suministro de software.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - SSH
  - Security
  - Accounts
ms.openlocfilehash: 4225b80d139462fd64e440947c1eba9adb817294
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883413'
---
## Acerca de esta guía

En esta guía se describen los cambios de mayor impacto que puede realizar para mejorar la seguridad de la cuenta. Cada sección detalla un cambio que puede realizar en los procesos para mejorar la seguridad. Los cambios de mayor impacto se enumeran primero.

## ¿Cuál es el riesgo?

La seguridad de la cuenta es fundamental para la seguridad de la cadena de suministro. Si un atacante puede tomar el control de su cuenta en {% data variables.product.product_name %}, puede realizar cambios malintencionados en el código o el proceso de compilación. Por lo tanto, su primer objetivo debe ser dificultar que alguien tome el control de su cuenta y las cuentas de otros {% ifversion ghes %}usuarios{% else %}miembros{% endif %} de {% ifversion fpt %}la organización{% elsif ghec or ghae %}la organización o empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

{% ifversion ghec or ghes %}
## Centralizar la autenticación
{% endif %}

{% ifversion ghec %} Si es propietario de una empresa u organización, puede configurar la autenticación centralizada con SAML. Puede agregar o quitar miembros manualmente, pero es más sencillo y seguro configurar el inicio de sesión único (SSO) y SCIM entre {% data variables.product.product_name %} y el proveedor de identidades de SAML (IdP). Esto también simplifica el proceso de autenticación para todos los miembros de la empresa.

Puede configurar la autenticación de SAML para una cuenta de empresa u organización. Con SAML, puede conceder acceso a las cuentas personales de los miembros de su empresa u organización en {% data variables.product.product_location %} a través de su IdP, o bien puede crear y controlar las cuentas que pertenecen a su empresa mediante {% data variables.product.prodname_emus %}. Para obtener más información, consulta "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

Después de configurar la autenticación de SAML, cuando los miembros soliciten acceso a los recursos, se les redirigirá al flujo de inicio de sesión único para garantizar que el IdP los reconoce. Si no se reconocen, se rechaza la solicitud.

Algunos IdP admiten un protocolo denominado SCIM, que puede aprovisionar o desaprovisionar automáticamente el acceso en los datos {% data variables.product.product_name %} al realizar cambios en el IdP. Con SCIM, puede simplificar la administración a medida que crece el equipo, y puede revocar rápidamente el acceso a las cuentas. SCIM está disponible para organizaciones individuales de {% data variables.product.product_name %} o para empresas que usan {% data variables.product.prodname_emus %}. Para obtener más información, consulta "[Acerca de SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".
{% endif %}

{% ifversion ghes %} Si es el administrador del sitio de {% data variables.product.product_location %}, puede simplificar la experiencia de inicio de sesión para los usuarios eligiendo un método de autenticación que se conecte con el proveedor de identidades existente (IdP), como CAS, SAML o LDAP. Esto significa que ya no necesitan recordar una contraseña adicional para {% data variables.product.prodname_dotcom %}.

Algunos métodos de autenticación también admiten la comunicación de información adicional con {% data variables.product.product_name %}, por ejemplo, especificar de qué grupos es miembro el usuario o la sincronización de claves criptográficas para el usuario. Esta es una excelente manera de simplificar la administración a medida que la organización crece.

A fin de obtener más información acerca de los métodos de autenticación disponibles para {% data variables.product.product_name %}, consulta "[Acerca de la autenticación de tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".
{% endif %}

## Configurar la autenticación en dos fases

La mejor forma de mejorar la seguridad de {% ifversion fpt %}tu cuenta personal{% elsif ghes %}tu cuenta personal o {% data variables.product.product_location %}{% elsif ghec %}tus cuentas{% elsif ghae %}tu empresa en {% data variables.product.product_name %}{% endif %} es configurar la autenticación bifactorial (2FA){% ifversion ghae %} en tu proveedor de identidad (IdP) de SAML{% endif %}. Las contraseñas por sí mismas pueden verse expuestas si son fáciles de adivinar, al reutilizarse en otro sitio que se haya visto expuesto o por ingeniería social, como el phishing. La autenticación en dos fases hace que sea mucho más difícil que las cuentas se vean expuestas, incluso si un atacante tiene su contraseña.

{% ifversion not ghae %}

{% ifversion ghec %} Si es propietario de la empresa, puede configurar una directiva para exigir la autenticación en dos fases en todas las organizaciones que pertenezcan a su empresa.
{% endif %}

{% ifversion ghes %} Si es el administrador del sitio de {% data variables.product.product_location %}, puede configurar la autenticación en dos fases para todos los usuarios de la instancia. La disponibilidad de la autenticación en dos fases en {% data variables.product.product_name %} depende del método de autenticación que use. Para obtener más información, consulte "[Centralizar la autenticación de usuarios](#centralize-user-authentication)".
{% endif %}

Si es propietario de la organización, {% ifversion fpt %}puede{% else %}puede ser capaz de {% endif %} exigir que todos los miembros de la organización habiliten la autenticación en dos fases.

{% ifversion ghec or ghes %}

### Configurar su cuenta de empresa

Los propietarios de empresas pueden exigir el uso de la autenticación en dos fases para todos los{% ifversion ghes %}usuarios de {% elsif ghec %}miembros de {% endif %} la {% ifversion ghes %}instancia{% elsif ghec %}empresa{% endif %}. La disponibilidad de las directivas de autenticación en dos fases en {% data variables.product.product_name %} depende de cómo los{% ifversion ghes %}usuarios{% else %}miembros{% endif %} se autentican para acceder a los recursos de su {% ifversion ghes %}instancia{% elsif ghec %}empresa{% endif %}.

{% ifversion ghes %}
- Si inicia sesión en {% data variables.product.product_location %} a través de un IdP externo mediante el inicio de sesión único de CAS o SAML, {% elsif ghec %} Si la empresa usa {% data variables.product.prodname_emus %} o se aplica la autenticación de SAML en la empresa, {%- endif %} no podrá configurar la autenticación en dos fases en {% data variables.product.product_name %}. Alguien con acceso administrativo a su proveedor de identidades debe configurar la autenticación en dos fases para el proveedor.

{% ifversion ghes %}

- Si inicia sesión en {% data variables.product.product_location %} a través de un directorio LDAP externo, puede exigir la autenticación en dos fases para su empresa en {% data variables.product.product_name %}. Si permite la autenticación integrada para los usuarios fuera del directorio, los usuarios individuales podrán habilitar la autenticación en dos fases, pero no podrán exigirla en su empresa.

{% endif %}

Para obtener más información, consulte {% ifversion ghec %}"[Acerca de la administración de identidades y acceso para su empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)" y {% endif %}"[Aplicación de directivas de configuración de seguridad en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#requiring-two-factor-authentication-for-organizations-in-your-enterprise)".

{% endif %}

### Configurar su cuenta personal

{% ifversion ghec or ghes %} {% note %}

**Nota**: Dependiendo del método de autenticación que {% ifversion ghec %}un propietario de empresa{% elsif ghes %}un administrador de sitio{% endif %} haya configurado para {% ifversion ghec %}su empresa en {% endif %}{% data variables.product.product_location %}, es posible que no pueda habilitar la autenticación en dos fases para su cuenta personal.

{% endnote %} {% endif %}

{% data variables.product.product_name %} admite varias opciones de autenticación en dos fases y, aunque cualquiera de ellas es mejor que nada, la opción más segura es WebAuthn. WebAuthn requiere una clave de seguridad de hardware o un dispositivo que la admita en sistemas como Windows Hello o Mac TouchID. Es posible, aunque difícil, suplantar otras formas de autenticación en dos fases (por ejemplo, alguien que le pida que lea su contraseña puntual de 6 dígitos). Sin embargo, esto no pasa con WebAuthn, ya que el alcance del dominio está integrado en el protocolo, lo que impide que se usen credenciales de un sitio web que traten de suplantar una página de inicio de sesión en {% data variables.product.product_name %}.

Al configurar la autenticación en dos fases, siempre debe descargar los códigos de recuperación y configurar más de un factor. Esto garantiza que el acceso a su cuenta no dependa de un único dispositivo. Para obtener más información, consulte "[Configuración de la autenticación en dos fases](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)", "[Configuración de métodos de recuperación de autenticación en dos fases](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)" y [Claves de seguridad de hardware de GitHub](https://thegithubshop.com/products/github-branded-yubikey) en la tienda de GitHub.

### Configurar la cuenta de la organización

{% ifversion ghec or ghes %} {% note %}

**Nota**: Dependiendo del método de autenticación que {% ifversion ghec %}un propietario de empresa{% elsif ghes %}un administrador de sitio{% endif %} haya configurado para {% ifversion ghec %}su empresa en {% endif %}{% data variables.product.product_location %}, es posible que no pueda exigir la autenticación en dos fases para su organización.

{% endnote %} {% endif %}

Si es propietario de la organización, puede ver qué usuarios no tienen habilitada la autenticación en dos fases, ayudarles a configurarla y, a continuación, exigirla en su organización. Para guiarle a través de ese proceso, consulte:

1. "[Ver si los usuarios de la organización han habilitado la autenticación en dos fases](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)"
2. "[Prepararse para requerir autenticación de dos factores en tu organización](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/preparing-to-require-two-factor-authentication-in-your-organization)"
3. "[Requerir autenticación en dos fases en la organización](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)"

{% endif %}

## Conectarse a {% data variables.product.product_name %} mediante claves de SSH

Hay otras maneras de interactuar con {% data variables.product.product_name %} además de iniciar sesión en el sitio web{% ifversion ghae %} a través del IdP{% endif %}. Muchas personas autorizan el código que insertan en {% data variables.product.prodname_dotcom %} con una clave privada de SSH. Para obtener más información, consulte [Acerca de SSH](/authentication/connecting-to-github-with-ssh/about-ssh).

Al igual que sucede con {% ifversion ghae %}la contraseña de la cuenta del IdP{% else %}la contraseña de la cuenta{% endif %}, si un atacante pudo obtener la clave privada de SSH, podría suplantar tu identidad e insertar código malintencionado en cualquier repositorio para el que tengas acceso de escritura. Si almacena la clave privada de SSH en una unidad de disco, es recomendable protegerla con una frase de contraseña. Para obtener más información, consulte "[Trabajar con frases de contraseña de clave de SSH](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)".

Otra opción es generar claves de SSH una clave de seguridad de hardware. Puede usar la misma clave que está usando para la autenticación en dos fases. Las claves de seguridad de hardware son muy difíciles de exponer de forma remota, ya que la clave de SSH privada permanece en el hardware y no es accesible directamente desde el software. Para obtener más información, consulte "[Generación de una nueva clave de SSH para una clave de seguridad de hardware](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)".

{% ifversion ghec or ghes or ghae %} Las claves de SSH respaldadas por hardware son bastante seguras, pero es posible que el requisito de hardware no funcione para algunas organizaciones. Un enfoque alternativo consiste en usar claves de SSH que solo sean válidas durante un breve período de tiempo, por lo que aunque la clave privada esté en peligro, no se podrá usar durante mucho tiempo. Este es el concepto que respalda la ejecución de su propia entidad de certificación de SSH. Aunque este enfoque proporciona un gran control sobre cómo se autentican los usuarios, también viene con la responsabilidad de mantener una entidad de certificación de SSH por su cuenta. Para más información, vea "[Acerca de las entidades de certificación de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".
{% endif %}

## Pasos siguientes

- "[Protección de la cadena de suministro de un extremo a otro](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Procedimientos recomendados para proteger el código en la cadena de suministro](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"

- "[Procedimientos recomendados para proteger el sistema de compilación](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"
