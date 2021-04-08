---
title: Configurar una prueba del servidor de GitHub Enterprise
intro: 'Puedes probar {% data variables.product.prodname_ghe_server %} de manera gratuita.'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise/
  - /articles/setting-up-a-trial-of-github-enterprise-server
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - cuentas
---

### Acerca de las pruebas de {% data variables.product.prodname_ghe_server %}

Puedes solicitar una prueba de 45 días para evaluar {% data variables.product.prodname_ghe_server %}. La prueba se instalará a modo de aparato virtual, con opciones para la implementación en el entorno local o en la nube. Para acceder a una lista de plataformas de visualización compatibles, consulta "[Configurar un servidor de GitHub Enterprise](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)".

{% if currentVersion ver_gt "enterprise-server@2.21" %}Las alertas de{% else %}Seguridad{% endif %} del {% data variables.product.prodname_dependabot %} y de{% data variables.product.prodname_github_connect %} no están actualmente disponibles durante las pruebas de {% data variables.product.prodname_ghe_server %}. Para obtener una demostración de estas características, contacta a {% data variables.contact.contact_enterprise_sales %}. Para obtener más información acerca de estas características, consulta las secciones "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" y "[Conectar el {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".

También hay pruebas disponibles para {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta "[Configurar una prueba de {% data variables.product.prodname_ghe_cloud %}](/articles/setting-up-a-trial-of-github-enterprise-cloud)".

{% data reusables.products.which-product-to-use %}

### Configurar tu prueba de {% data variables.product.prodname_ghe_server %}

{% data variables.product.prodname_ghe_server %} está instalado como aparato virtual. Determina la mejor persona de tu organización para configurar una máquina virtual y pídele que envíe una [solicitud de prueba](https://enterprise.github.com/trial). Puedes comenzar tu prueba de forma inmediata después de enviar una solicitud.

Para configurar una cuenta para el {% data variables.product.prodname_enterprise %} portal web, haz clic en el enlace del correo electrónico que recibiste después de enviar tu solicitud de prueba y sigue las instrucciones. A continuación, descarga tu archivo de licencia. Para obtener más información, consulta "[Administrar tu licencia {% data variables.product.prodname_enterprise %}](/enterprise/admin/installation/managing-your-github-enterprise-license)".

Para instalar {% data variables.product.prodname_ghe_server %}, descarga los elementos necesarios y carga tu archivo de licencia. Para obtener más información, consulta las instrucciones para tu plataforma de visualización elegida en "[Configurar una {% data variables.product.prodname_ghe_server %} instancia](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)".

### Pasos siguientes

Para sacar el mejor provecho de tu prueba, sigue los siguientes pasos:

1. [Crear una organización](/enterprise/admin/user-management/creating-organizations).
2. Para aprender lo básico para usar {% data variables.product.prodname_dotcom %}, consulta lo siguiente:
   - [Guía de iniciación rápida a {% data variables.product.prodname_dotcom %}](https://resources.github.com/webcasts/Quick-start-guide-to-GitHub/) webcast
   - [Comprender el {% data variables.product.prodname_dotcom %} flujo](https://guides.github.com/introduction/flow/) en {% data variables.product.prodname_dotcom %} Guías
   - [Hola, mundo](https://guides.github.com/activities/hello-world/) en {% data variables.product.prodname_dotcom %} Guides
3. Para configurar tu instancia a fin de que satisfaga las necesidades de tu organización, consulta la sección "[Configurar tu empresa](/enterprise/admin/configuration/configuring-your-enterprise)".
4. Para integrar {% data variables.product.prodname_ghe_server %} con tu proveedor de identidad, consulta "[Utilizar SAML](/enterprise/admin/user-management/using-saml)" y "[Utilizar LDAP](/enterprise/admin/authentication/using-ldap)"
5. Invita a una cantidad ilimitada de personas a unirse a tu prueba.
   - Agregar usuarios a tu instancia {% data variables.product.prodname_ghe_server %} utilizando la autenticación incorporada o tu proveedor de identidad configurado. Para obtener más información, consulta "[Utilizar la autenticación incorporada](/enterprise/admin/user-management/using-built-in-authentication)".
   - Para invitar a personas a que se conviertan en administradores de cuenta, visita el [{% data variables.product.prodname_enterprise %} portal web](https://enterprise.github.com/login).

    {% note %}

    **Nota::** Las personas que invites para que sean administradores de cuenta recibirán un correo electrónico con un enlace para aceptar tu invitación.

    {% endnote %}

{% data reusables.products.product-roadmap %}

### Finalizar tu prueba

Puedes subir la categoría a licencias totales en el [{% data variables.product.prodname_enterprise %} portal web](https://enterprise.github.com/login) en cualquier momento durante el período de prueba.

Si no has subido la categoría para el último día de tu prueba, recibirás un correo electrónico notificando que tu prueba ha terminado. Si necesitas más tiempo para evaluar {% data variables.product.prodname_enterprise %}, contacta a {% data variables.contact.contact_enterprise_sales %} para solicitar una extensión.

### Leer más

- "[Configurar una prueba de {% data variables.product.prodname_ghe_cloud %}](/articles/setting-up-a-trial-of-github-enterprise-cloud)"
