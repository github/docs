---
title: Sistemas operativos compatibles
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} en cualquier sistema operativo compatible.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
versions:
  free-pro-team: '*'
---

### Acerca de los sistemas operativos compatibles

Estos son los sistemas operativos compatibles para {% data variables.product.prodname_desktop %}.
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. Debes tener un sistema operativo de 64 bits para ejecutar {% data variables.product.prodname_desktop %}.

### Solución de problemas en macOS
Si te encuentras con algún problema al utilizar {% data variables.product.prodname_desktop %} en macOS, aquí tienes algunas resoluciones que puedes intentar. Para obtener más información, consulta la sección [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

#### El error `The username or passphrase you entered is not correct` se muestra después de iniciar sesión en tu cuenta

Este error puede ocurrir cuando {% data variables.product.prodname_desktop %} no puede acceder a tus credenciales almacenadas en la cadena de llaves.

Para solucionar este error, sigue estos pasos.

1. Abre la app de "Acceso a la cadena de llaves".
2. Da clic derecho en **inicio de sesión** y luego da clic en **Bloquear el "inicio de sesión" de la cadena de llaves**. ![La opción de "Bloquear el "inicio de sesión" en la cadena de llaves](/assets/images/help/desktop/mac-lock-keychain.png)
3. Da clic derecho en **inicio de sesión** y luego da clic en **Desbloquear el "inicio de sesión" de la cadena de llaves**. Sigue las instrucciones en la pantalla para terminar de desbloquear el "inicio de sesión" de la cadena de llaves ![La opción de "Desbloquear el inicio de sesión en la "cadena de llaves"](/assets/images/help/desktop/mac-unlock-keychain.png)
4. Vuelve a autenticarte en tu cuenta en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}.

#### El error de `Could not create temporary directory: Permission denied` se muestra después de verificar si hay actualizaciones

Este error puede estarse causando debido a que no existen los permisos para el directorio `~/Library/Caches/com.github.GitHubClient.ShipIt`. {% data variables.product.prodname_desktop %} utiliza este directorio para crear y desempacar archivos temporales como parte de la actualización de la aplicación.

Para solucionar este error, sigue estos pasos.

1. Cierra {% data variables.product.prodname_desktop %}.
2. Abre el "Buscador" y navega hasta `~/Library/Caches/`.
3. Da clic derecho en `com.github.GitHubClient.ShipIt` y luego da clic en **Obtener Información**.
4. Da clic en la flecha a la izquierda de "Compartir & Permisos."
5. Si el privilegio a la derecha de tu cuenta de usuario no dice "Lectura & Escritura", da clic en el texto y luego en **Lectura & Escritura**. ![Las opciones de "Compartir & Permisos"](/assets/images/help/desktop/mac-adjust-permissions.png)
6. Abre {% data variables.product.prodname_desktop %} y verifica si hay actualizaciones.

### Solución de problemas en Windows
Si te encuentras con algún problema al utilizar {% data variables.product.prodname_desktop %} en Windows, aquí tienes algunas resoluciones que puedes intentar. Para obtener más información, consulta la sección [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

#### Error de `The revocation function was unable to check revocation for the certificate.`

Este error puede suscitarse si estás utilizando {% data variables.product.prodname_desktop %} en una red corporativa que blqouea a Windows para verificar el estado de revocación de un certificado.

Para solucionar este problema, contacta al administrador de tu sistema.

#### Error de `git clone failed` al clonar un repositorio configurado con Redirección de Carpetas

{% data variables.product.prodname_desktop %} no es compatible con repositorios que se hayan configurado con la Redirección de Carpetas.

#### Error de `cygheap base mismatch detected`

Este error se suscita cuando se habilita el ASLR mandatorio. Habilitar el ASLR Mandatorio afecta la librería central de MSYS2, de la cual depende {% data variables.product.prodname_desktop %} para emular la bifurcación de procesos.

Para solucionar este error, puedes ya sea inhabilitar el ASLR Mandatorio o permitir explícitamente todos los ejecutables bajo `<Git>\usr\bin` los cuales dependen en MSYS2.
