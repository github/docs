---
title: Mejores prácticas para asegurar las cuentas
shortTitle: Asegurar las cuentas
allowTitleToDifferFromFilename: true
intro: Orientación sobre cómo proteger las cuentas con acceso a tu cadena de suministro de software.
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
---

## Acerca de esta guía

Esta guía describe los cambios de más alto impacto que puedes hacer para incrementar la seguridad de la cuenta. Cada sección describe un cambio que puedes hacer a tus procesos para mejorar la seguridad. Los cambios de más alto impacto se listan primero.

## ¿Cuál es el riesgo?

La seguridad de las cuentas es fundamental para la seguridad de tu cadena de suministro. Si un atacante puede apoderarse de tu ceunta en {% data variables.product.product_name %}, este puede hacer cambios malintencionados a tu código o a tu proceso de compilación. Así que tu primera meta debería ser que fuera difícil que alguien se apoderara de tu cuenta y de las cuentas de otros {% ifversion ghes %}usuarios{% else %}miembros{% endif %} de {% ifversion fpt %}tu organización{% elsif ghec or ghae %}tu organización o empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

{% ifversion ghec or ghes %}
## Centralizar la autenticación
{% endif %}

{% ifversion ghec %}
Si eres un propietario de organización o de empresa, puedes configurar la autenticación centralizada con SAML. Si bien puedes agregar o eliminar a los miembros manualmente, es más simple y seguro configurar el inicio de sesión único (SSO) y el SCIM entre {% data variables.product.product_name %} y tu proveedor de identidad (IdP) de SAML. Esto también simplifica el proceso de autenticación para todos los miembros de tu empresa.

Puedes configurar la autenticación de SAML para una cuenta de empresa u organización. Con SAML, puedes otorgar el acceso a las cuentas personales de los miembros de tu empresa u organización en {% data variables.product.product_location %} mediante tu IdP o puedes crear y controlar las cuentas que le pertenecen a tu empresa al utilizar las {% data variables.product.prodname_emus %}. Para obtener más información, consulta la sección "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

Después de que configuras la autenticación de SAML, cuando los miembros soliciten acceso a tus recursos, se les podría dirigir a tu flujo de SSO para garantizar que aún los reconozca tu IdP. Si no se les reconoce, su solicitud se rechazará.

Algunos IdP son copatible con un protocolo llamado SCIM, el cual aprovisiona o desaprovisiona automáticamente el acceso en {% data variables.product.product_name %} cuando haces cambios a tu IdP. Con SCIM, puedes simplificar la administración conforme crece tu equipo y puedes revocar el acceso a las cuentas rápidamente. El SCIM está disponible para las organizaciones individuales en {% data variables.product.product_name %} o para las empresas que utilizan {% data variables.product.prodname_emus %}. Para obtener más información, consulta la sección "[SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".
{% endif %}

{% ifversion ghes %}
Si eres el administrador de sitio para {% data variables.product.product_location %}, puedes simplificar la experiencia de inicio de sesión para los usuarios si eliges un método de autenticación que se conecte con tu proveedor de identidad (IdP), como CAS; SAML o LDAP. Esto significa que ya no necesitarán recordar una contraseña adicional para {% data variables.product.prodname_dotcom %}.

Algunos métodos de autenticación también son compatibles con la comunicación de información adicional a {% data variables.product.product_name %}, por ejemplo, de qué grupos es miembro el usuario, o con la sincronización de llaves criptográficas para dicho usuario. Esto es una forma genial de simplificar tu administración conforme crece tu organización.

Para obtener más información sobre los métodos de autenticación disponibles para {% data variables.product.product_name %}, consulta la sección "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".
{% endif %}

## Configurar la autenticación bifactorial

La mejor forma de mejorar la seguridad de {% ifversion fpt %}tu cuenta personal{% elsif ghes %}tu cuenta personal o {% data variables.product.product_location %}{% elsif ghec %}tus cuentas{% elsif ghae %}tu empresa en {% data variables.product.product_name %}{% endif %} es configurar la autenticación bifactorial (2FA){% ifversion ghae %} en tu proveedor de identidad (IdP) de SAML{% endif %}. Las contraseñas por sí mismas pueden ponerse en riesgo si se pueden adivinar fácilmente, si se reutilizan en otro sitio que se haya puesto en riesgo o mediante ingeniería social, como con el phishing. La 2FA hace que sea mucho más difícil que tus cuentas se pongan en riesgo, incluso si un atacante tiene tu contraseña.

{% ifversion not ghae %}

{% ifversion ghec %}
Si eres un propietario de empresa, podrías configurar una política para requerir la 2FA para todas las organizaciones que le pertenecen a tu empresa.
{% endif %}

{% ifversion ghes %}
Si eres el administrador de sitio para {% data variables.product.product_location %}, es posible que puedas configurar la 2FA para todos los usuarios de tu instancia. La disponibilidad de la 2FA en {% data variables.product.product_name %} depende del método de autenticación que utilices. Para obtener más información, consulta la sección "[Centralizar la autenticación de usuarios](#centralize-user-authentication)".
{% endif %}

Si eres un propietario de organización, entonces {% ifversion fpt %}puedes{% else %}podrìas{% endif %} requerir que todos los miembros de la organización habiliten la 2FA.

{% ifversion ghec or ghes %}

### Configura tu cuenta empresarial

Los propietarios de las empresas podrían requerir la 2FA para todos los {% ifversion ghes %}usuarios de{% elsif ghec %}miembros de{% endif %} la {% ifversion ghes %}instancia{% elsif ghec %}empresa{% endif %}. La disponibilidad de las políticas de 2FA en {% data variables.product.product_name %} depende de cómo los {% ifversion ghes %}usuarios{% else %}miembros{% endif %} se autentican para acceder a {% ifversion ghes %}tu instancia{% elsif ghec %}los recursos de la empresa{% endif %}.

{% ifversion ghes %}
- Si inicias sesión en {% data variables.product.product_location %} mediante un IdP externo utilizando CAS o el SSO de SAML,
{% elsif ghec %}
Si tu empresa utiliza {% data variables.product.prodname_emus %} o la autenticación de SAML se requiere para esta,
{%- endif %} no puedes configurar la 2FA en {% data variables.product.product_name %}. Alguien con acceso administrativo a tu IdP debe configurar la 2FA para el IdP.

{% ifversion ghes %}

- Si inicias sesión en {% data variables.product.product_location %} mediante un directorio LDAP externo, puedes requerir la 2FA para tu empresa de {% data variables.product.product_name %}. Si permites la autenticación integrada para los usuarios fuera de tu directorio, los usuarios individuales pueden habilitar la 2FA, pero no puedes requerirla para tu empresa.

{% endif %}

Para obtener más información, consulta las secciones {% ifversion ghec %}"[Acerca de la administración de accesos e identidad para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)" y {% endif %}"[Requerir políticas para los ajustes de seguridad en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#requiring-two-factor-authentication-for-organizations-in-your-enterprise)".

{% endif %}

### Configurar tu cuenta personal

{% ifversion ghec or ghes %}
{% note %}

**Nota**: Dependiendo del método de autenticación que haya configurado {% ifversion ghec %}un propietario de empresa{% elsif ghes %}un administrador de sitio{% endif %} para {% ifversion ghec %}tu empresa en {% endif %}{% data variables.product.product_location %}, podrías no poder habilitar la 2FA para tu cuenta personal.

{% endnote %}
{% endif %}

{% data variables.product.product_name %} es compatible con varias opciones para la 2FA y, si bien cualquiera de ellas es mejor que nada, la opción más segura es la WebAuthn. La WebAuthn requiere ya sea de una llave de seguridad de hardware o de un dispositivo que sea compatible con ella mediante instrumentos como Windows Hello o Mac TouchID. Es posible, aunque difícil, hacer phishing en otras formas de 2FA (por ejemplo, que alguien te pida que le leas tu contraseña de una sola ocasión de 6 dígitos). Sin embargo, no se puede hacer phishing con la WebAuthn, ya que el alcance del dominio está integrado en el protocolo, lo que previene que las credenciales de un sitio web se hagan pasar por una página de inicio de sesión para que se utilice en {% data variables.product.product_name %}.

Cuando configuras la 2FA, siempre deberás descargar los códigos de recuperación y configurar más de un factor. Esto garantiza que el acceso a tu cuenta no dependa de un solo dispositivo. Para obtener más información, consulta las secciones "[Configurar la autenticación bifactorial](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)", "[Configurar los métodos de recuperación de la autenticación bifactorial](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)" y [Llaves de seguridad de hardware con marca de GitHub](https://thegithubshop.com/products/github-branded-yubikey) en la tienda de GitHub.

### Configurar tu cuenta de organización

{% ifversion ghec or ghes %}
{% note %}

**Nota**: Dependiendo del método de autenticación que haya configurado {% ifversion ghec %}un propietario de empresa{% elsif ghes %}un administrador de sitio{% endif %} para {% ifversion ghec %}tu empresa en {% endif %}{% data variables.product.product_location %}, podrías no poder requerir la 2FA para tu organización.

{% endnote %}
{% endif %}

Si eres un propietario de organización, puedes ver a los usuarios que no tienen habilitada la 2FA, ayudarles a configurarla y luego requerirla para tu organización. Para guiarte en este proceso, consulta las siguientes secciones:

1. "[Ver si un usuario en tu organización tiene habilitada la 2FA](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)"
2. "[Prepararse para requerir la autenticación bifactorial en tu organización](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/preparing-to-require-two-factor-authentication-in-your-organization)"
3. "[Requerir la autenticación bifactorial en tu organización](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)"

{% endif %}

## Conectarte a {% data variables.product.product_name %} utilizando llaves SSH

Hay otras formas de interactuar con {% data variables.product.product_name %} màs allà de iniciar sesiòn en el sitio web{% ifversion ghae %} a travès de tu IdP{% endif %}. Muchas personas autorizan el còdigo que suben a {% data variables.product.prodname_dotcom %} con una llave SSH privada. Para obtener más información, consulta la sección "[Acerca de SSH](/authentication/connecting-to-github-with-ssh/about-ssh)".

Tal como {% ifversion ghae %}la contraseña para tu cuenta de IdP{% else %}la contraseña de tu cuenta{% endif %}, si un atacante pudiera obtener tu llave SSH privada, podrían hacerse pasar por ti y subir código malintencionado a cualquier repositorio al cuál tengas acceso de escritura. Si almacenas tu llave privada SSH en un volumen de disco, es buena idea protegerlo con una frase de ingreso. Para obtener más información, consulta la sección "[Trabajar con frases de acceso para llaves SSH](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)".

Otra opción es generar llaves SSH en una llave de seguridad de hardware. Podrías utilizar la misma llave que utilizas para la 2FA. Las llaves de seguridad de hardware son difíciles de poner en riesgo remotamente, ya que la llave SSH privada permanece en el hardware y no se puede acceder directamente a ella desde el software. Para obtener más información, consulta la sección "[Generar una llave SSH nueva para una llave de seguridad de hardware](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)".

{% ifversion ghec or ghes or ghae %}
Las llaves SSH respaldadas por hardware son bastante seguras, pero el requisito de hardware podría no funcionar para algunas organizaciones. Un enfoque alterno es utilizar llaves SSH que solo sean válidas durante un periodo de tiempo corto, para que incluso si esta se pone en riesgo, no pueda aprovecharse por mucho tiempo. Este es el concepto detrás de ejecutar tu propia autoridad de certificados SSH. Si bien este acercamiento te proporciona mucho control de cómo se autentican los usuarios, también trae consigo la responsabilidad de mantener una autoridad de certificados SSH por ti mismo. Para obtener más información, consulta la sección [Acerca de las autoridades de certificados SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".
{% endif %}

## Pasos siguientes

- "[Asegurar tu cadena de suministros de extremo a extremo](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Mejores prácticas para asegurar el código en tu cadena de suministros](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"

- "[Mejores prácticas para asegurar tu sistema de compilación](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"
