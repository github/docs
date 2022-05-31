---
title: GitHub Móvil
intro: 'Clasifica, colabora y administra tu trabajo en {% data variables.product.product_name %} desde tu dispositivo móvil.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Mobile
redirect_from:
  - /get-started/using-github/github-for-mobile
  - /github/getting-started-with-github/github-for-mobile
  - /github/getting-started-with-github/using-github/github-for-mobile
---

## Acerca de {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} te proporciona una manera de realizar trabajo de alto impacto en {% data variables.product.product_name %} de forma rápida y desde cualquier lugar. {% data variables.product.prodname_mobile %} es una manera segura y estable de acceder a tus datos de {% data variables.product.product_name %} a través de una aplicación cliente confiable de primera parte.

Con {% data variables.product.prodname_mobile %} puedes:

- Administrar, clasificar y borrar las notificaciones
- Leer, revisar y colaborar en informes de problemas y solicitudes de extracción
- Buscar, navegar e interactuar con usuarios, repositorios y organizaciones
- Recibir notificaciones para subir información cuando alguien menciona tu nombre de usuario
{% ifversion fpt or ghec %}- Asegura tu cuenta de GitHub.com con la autenticación bifactorial
- Verificar tus intentos de inicio de sesión en dispositivos no reconocidos{% endif %}

Para obtener más información sobre las notificaciones de {% data variables.product.prodname_mobile %}, consulta "[Configurando notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)."

{% ifversion fpt or ghec %}- Para obtener más información sobre la autenticación bifactorial utilizando {% data variables.product.prodname_mobile %}, consulta las secciones "[Configurar {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) y [Autenticarte utilizando {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication##verifying-with-github-mobile)". {% endif %}

## Instalar {% data variables.product.prodname_mobile %}

Para instalar {% data variables.product.prodname_mobile %} para Android o iOS, consulta la sección [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

## Administrar cuentas

Puedes estar firmado simultáneamente en un dispositivo móvil con una cuenta personal en {% data variables.product.prodname_dotcom_the_website %} y otra en {% data variables.product.prodname_ghe_server %}. Para obtener más información sobre nuestros diversos productos, consulta la sección "[Productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)".

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} podría no funcionar en tu empresa si se te pide acceso a nuestra empresa a través de una VPN.

### Prerrequisitos

Debes instalar {% data variables.product.prodname_mobile %} 1.4 o posterior en tu dispositivo para utilizar {% data variables.product.prodname_mobile %} con {% data variables.product.prodname_ghe_server %}.

Para utilizar {% data variables.product.prodname_mobile %} con {% data variables.product.prodname_ghe_server %}, {% data variables.product.product_location %} debe estar en su versión 3.0 o posterior, y tu propietario de empresa debe habilitar la compatibilidad con la versión móvil en tu empresa. Para obtener más información, consulta la sección {% ifversion ghes %}"[Notas de lanzamiento](/enterprise-server/admin/release-notes)" y {% endif %}"[Administrar {% data variables.product.prodname_mobile %} par tu empresa]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise){% ifversion not ghes %}" en la documentación de {% data variables.product.prodname_ghe_server %}.{% else %}".{% endif %}

Durante el beta de {% data variables.product.prodname_mobile %} con {% data variables.product.prodname_ghe_server %}, debes estar firmado con una cuenta personal en {% data variables.product.prodname_dotcom_the_website %}.

### Agregar, cambiar o cerrar sesión en las cuentas

Puedes iniciar sesión en la versión móvil con una cuenta personal de {% data variables.product.prodname_ghe_server %}. En la parte inferior de la app, deja presionado {% octicon "person" aria-label="The person icon" %} **Perfil**, y luego pulsa sobre {% octicon "plus" aria-label="The plus icon" %} **Agregar Cuenta Empresarial**. Sige las indicaciones para iniciar sesión.

Después de que ingreses en la versión móvil con una cuenta personal de {% data variables.product.prodname_ghe_server %}, puedes cambiar entre esa cuenta y la de {% data variables.product.prodname_dotcom_the_website %}. En la parte inferior de la app, deja presionado {% octicon "person" aria-label="The person icon" %} **Perfil**, y luego pulsa sobre la cuenta a la que quieras cambiar.

Si ya no necesitas acceder a los datos de tu cuenta personal de {% data variables.product.prodname_ghe_server %} desde {% data variables.product.prodname_mobile %}, puedes cerrar la sesión de la cuenta. En la parte inferior de la app, deja presionado {% octicon "person" aria-label="The person icon" %} **Perfil**, desliza hacia la izquierda en la cuenta para salir de ella y luego pulsa en **Salir de sesión**.

## Idiomas compatibles para {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} se encuentra disponible en los siguientes idiomas.

- Inglés
- Japonés
- Portugués brasileño
- Chino simplificado
- Español

Si configuras el idioma en tu dispositivo para que sea uno de los compatibles, {% data variables.product.prodname_mobile %} estará predeterminadamente en este idioma. Puedes cambiar el idioma de {% data variables.product.prodname_mobile %} en el menú de **Ajustes** de {% data variables.product.prodname_mobile %}.

## Administrar Enlaces Universales para {% data variables.product.prodname_mobile %} en iOS

{% data variables.product.prodname_mobile %} habilita automáticamente los Enlaces Universales para iOS. Cuando tocas en cualquier enlace de {% data variables.product.product_name %}, la URL destino se abrirá en {% data variables.product.prodname_mobile %} en vez de en Safari. Para obtener más información, consulta la sección[Enlaces Universales](https://developer.apple.com/ios/universal-links/) en el sitio para Desarrolladores de Apple.

Para inhabilitar los enlaces universales, deja presionado cualquier enlace de {% data variables.product.product_name %} y luego pulsa en **Abrir**. Cada vez que pulses un enlace de {% data variables.product.product_name %} en el futuro, la URL de destino se abrirá en Safari en vez de en {% data variables.product.prodname_mobile %}.

Para volver a habilitar los enlaces universales, deja pulsado cualquier enlace de {% data variables.product.product_name %} y luego pulsa en **Abrir en {% data variables.product.prodname_dotcom %}**.

## Compartir retroalimentación

Si encuentras un error en {% data variables.product.prodname_mobile %}, puedes mandarnos un mensaje de correo electrónico a <a href="mailto:mobilefeedback@github.com">mobilefeedback@github.com</a>.

Puedes emitir solicitudes de características o cualquier otro tipo de retroalimentación para {% data variables.product.prodname_mobile %} en los [{% data variables.product.prodname_discussions %}](https://github.com/github/feedback/discussions?discussions_q=category%3A%22Mobile+Feedback%22).

## Abandonar los lanzamientos beta para iOS

Si estás probando un lanzamiento beta de {% data variables.product.prodname_mobile %} para iOS utilizando TestFlight, puedes abandonar el beta en cualquier momento.

1. En tu dispositivo iOS, abre la aplicación de TestFlight.
2. Debajo de "Apps", toca en **{% data variables.product.prodname_dotcom %}**.
3. En la parte inferior de la página, toca en **Dejar de Probar**.
