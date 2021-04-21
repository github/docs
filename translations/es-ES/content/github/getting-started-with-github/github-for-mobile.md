---
title: GitHub para móviles
intro: 'Clasifica, colabora y administra tu trabajo en {% data variables.product.product_name %} desde tu dispositivo móvil.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - móvil
---

{% data reusables.mobile.ghes-release-phase %}

### Acerca de {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} te proporciona una manera de realizar trabajo de alto impacto en {% data variables.product.product_name %} de forma rápida y desde cualquier lugar. {% data variables.product.prodname_mobile %} es una manera segura y estable de acceder a tus datos de {% data variables.product.product_name %} a través de una aplicación cliente confiable de primera parte.

Con {% data variables.product.prodname_mobile %} puedes:
- Administrar, clasificar y borrar las notificaciones
- Leer, revisar y colaborar en informes de problemas y solicitudes de extracción
- Buscar, navegar e interactuar con usuarios, repositorios y organizaciones
- Recibir notificaciones para subir información cuando alguien menciona tu nombre de usuario

Para obtener más información sobre las notificaciones de {% data variables.product.prodname_mobile %}, consulta "[Configurando notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)."

### Instalar {% data variables.product.prodname_mobile %}

Para instalar {% data variables.product.prodname_mobile %} para Android o iOS, consulta la sección [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

### Administrar cuentas

Puedes ingresar simultáneamente a la versión móvil con una cuenta de usuario en {% data variables.product.prodname_dotcom_the_website %} y otra en {% data variables.product.prodname_ghe_server %}.

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} podría no funcionar en tu empresa si se te pide acceso a nuestra empresa a través de una VPN.

#### Prerrequisitos

Debes instalar {% data variables.product.prodname_mobile %} 1.4 o posterior en tu dispositivo para utilizar {% data variables.product.prodname_mobile %} con {% data variables.product.prodname_ghe_server %}.

Para utilizar {% data variables.product.prodname_mobile %} con {% data variables.product.prodname_ghe_server %}, {% data variables.product.product_location %} debe estar en su versión 3.0 o posterior, y tu propietario de empresa debe habilitar la compatibilidad con la versión móvil en tu empresa. Para obtener más información, consulta las secciones "[Notas de lanzamiento](/enterprise-server/admin/release-notes)" y "[Administrar {% data variables.product.prodname_mobile %} para tu empresa](/admin/configuration/managing-github-for-mobile-for-your-enterprise)".

Durante el beta para {% data variables.product.prodname_mobile %} con {% data variables.product.prodname_ghe_server %}, debes estar firmado con una cuenta de usuario en {% data variables.product.prodname_dotcom_the_website %}.

#### Agregar, cambiar o cerrar sesión en las cuentas

Puedes ingresar en la versión móvil con una cuenta de usuario en {% data variables.product.product_location %}. En la parte inferior de la app, deja presionado {% octicon "person" aria-label="The person icon" %} **Perfil**, y luego pulsa sobre {% octicon "plus" aria-label="The plus icon" %} **Agregar Cuenta Empresarial**. Sige las indicaciones para iniciar sesión.

Después de que ingreses en la versión móvil con una cuenta de usuario de {% data variables.product.product_location %}, puedes cambiar entre esa cuenta y la cuenta de {% data variables.product.prodname_dotcom_the_website %}.  En la parte inferior de la app, deja presionado {% octicon "person" aria-label="The person icon" %} **Perfil**, y luego pulsa sobre la cuenta a la que quieras cambiar.

Si ya no necesitas acceso a los datos de tu cuenta de usuario en {% data variables.product.product_location %} desde {% data variables.product.prodname_mobile %}, puedes salir de la sesión de la cuenta. En la parte inferior de la app, deja presionado {% octicon "person" aria-label="The person icon" %} **Perfil**, desliza hacia la izquierda en la cuenta para salir de ella y luego pulsa en **Salir de sesión**.

### Idiomas compatibles para {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} se encuentra disponible en los siguientes idiomas.

- Inglés
- Japonés
- Portugués brasileño
- Chino simplificado
- Español

Si configuras el idioma en tu dispositivo para que sea uno de los compatibles, {% data variables.product.prodname_mobile %} estará predeterminadamente en este idioma. Puedes cambiar el idioma de {% data variables.product.prodname_mobile %} en el menú de **Ajustes** de {% data variables.product.prodname_mobile %}.

### Administrar Enlaces Universales para {% data variables.product.prodname_mobile %} en iOS

{% data variables.product.prodname_mobile %} habilita automáticamente los Enlaces Universales para iOS. Cuando tocas en cualquier enlace de {% data variables.product.product_name %}, la URL destino se abrirá en {% data variables.product.prodname_mobile %} en vez de en Safari. Para obtener más información, consulta la sección[Enlaces Universales](https://developer.apple.com/ios/universal-links/) en el sitio para Desarrolladores de Apple.

Para inhabilitar los Enlaces Universales, presiona sostenidamente cualquier enlace de {% data variables.product.product_name %} y luego toca en **Abrir**. Cada vez que toques en un enlace de {% data variables.product.product_name %} posteriormente, la URL destino se abrirá en Safari en vez de en {% data variables.product.prodname_mobile %}.

Para volver a habilitar los Enlaces Universales, sostén cualquier enlace de {% data variables.product.product_name %} y luego toca en **Abrir en {% data variables.product.prodname_dotcom %}**.

### Compartir retroalimentación

Si encuentras un error en {% data variables.product.prodname_mobile %}, puedes mandarnos un mensaje de correo electrónico a <a href="mailto:mobilefeedback@github.com">mobilefeedback@github.com</a>.

Puedes emitir solicitudes de características u otro tipo de retroalimentación para {% data variables.product.prodname_mobile %}[en los debates de GitHub](https://github.com/github/feedback/discussions?discussions_q=category%3A%22Mobile+Feedback%22).

### Abandonar los lanzamientos beta para iOS

Si estás probando un lanzamiento beta de {% data variables.product.prodname_mobile %} para iOS utilizando TestFlight, puedes abandonar el beta en cualquier momento.

1. En tu dispositivo iOS, abre la aplicación de TestFlight.
2. Debajo de "Apps", toca en **{% data variables.product.prodname_dotcom %}**.
3. En la parte inferior de la página, toca en **Dejar de Probar**.
