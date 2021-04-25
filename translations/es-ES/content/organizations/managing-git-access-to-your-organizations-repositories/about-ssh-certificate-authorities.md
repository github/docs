---
title: Acerca de las autoridades de certificación de SSH
intro: 'Con una autoridad de certificación de SSH, tu cuenta de empresa u organización puede ofrecer certificados SSH que los miembros pueden usar para aceder a tus recursos con Git.'
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - equipos
---

Un certificado SSH es un mecanismo para que una clave SSH firme otra clave SSH. Si usas una autoridad de certificación de SSH (CA) para ofrecerle a los miembros de tu organización certificados SSH firmados, puedes agregar la CA a tu cuenta de empresa u organización para permitirle a los miembros de la organización usar sus certificados para acceder a los recursos de la organización. Para obtener más información, consulta [Administrar las autoridades de certificación de SSH de tu organización ](/articles/managing-your-organizations-ssh-certificate-authorities)".

Una vez que agregas una CA de SSH a tu cuenta de empresa u organización, puedes usar la CA para firmar certificados de SSH de clientes para los miembros de la organización. Los miembros de la organización pueden usar los certificados firmados para acceder a los repositorios de tu organización (y solo los repositorios de tu organización) con Git. Puedes requerir que los miembros utilicen certificados SSH para acceder a los recursos organizacionales.{% if currentVersion == "free-pro-team@latest" %} Para obtener más información, consulta la sección "[requerir ajustes de seguridad en tu cuenta empresarial](/articles/enforcing-security-settings-in-your-enterprise-account#managing-your-enterprise-accounts-ssh-certificate-authorities)".{% endif %}

Por ejemplo, puedes crear un sistema interno que emita un nuevo certificado para tus programadores cada mañana. Cada programador puede usar su certificado diario para trabajar en los repositorios de tu organización en {% data variables.product.product_name %}. Al finalizar el día, el certificado puede expirar automáticamente, protegiendo tus repositorios si el certificado más tarde se ve comprometido.

Cuando emites cada certificado, debes incluir una extensión que especifique para qué usuario de {% data variables.product.product_name %} es el certificado. Por ejemplo, puedes usar el comando `ssh-keygen` de OpenSSH, reemplazando _KEY-IDENTITY_ por tu identidad de clave y _USERNAME_ por un nombre de usuario de {% data variables.product.product_name %}.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

Para emitir un certificado para alguien que utilice SSH para acceder a varios productos de {% data variables.product.company_short %}, puedes incluir dos extensiones de inicio de sesión para especificar el nombre de usuario para cada producto. Por ejemplo, el siguiente comando emitirá un certificado para el _USERNAME-1_ de la cuenta de {% data variables.product.prodname_ghe_cloud %} del usuario, y para el _USERNAME-2_ de la cuenta de {% data variables.product.prodname_ghe_managed %} del usuario o de {% data variables.product.prodname_ghe_server %} en _HOSTNAME_.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

Puedes restringir las direcciones IP desde las que un miembro de la organización puede acceder a los recursos de tu organización usando una extensión `source-address`. La extensión acepta una dirección IP específica o una gama de direcciones IP con la notación CIDR. Puedes especificar múltiples direcciones o rangos separando los valores con comas. Para obtener más información, consulta "[Enrutamiento entre dominios sin clases](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)" en Wikipedia.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```

{% if currentVersion == "free-pro-team@latest" %}

Los miembros de la organización pueden usar sus certificados firmados para la autenticación, incluso si has aplicado el inicio de sesión único de SAML. A menos que hagas que los certificados SSH sean un requisito, los miembros de la organización pueden seguir usando otros medios para la autenticación para acceder a los recursos de tu organización con Git, incluyendo sus nombre de usuario y contraseña, tokens de acceso personales y sus propias claves SSH.

{% endif %}

Para evitar errores de autenticación, los miembros de la organización deben usar una URL especial que incluya el ID de la organización para clonar los repositorios mediante certificados firmados. Cualquier persona con acceso de lectura al repositorio puede buscar esta URL en la página del repositorio. Para obtener más información, consulta "[Clonar un repositorio](/articles/cloning-a-repository)".
