---
title: Instalar GitHub Desktop
shortTitle: Instalación
intro: Puedes instalar GitHub Desktop en sistemas operativos Windows o macOS compatibles.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  free-pro-team: '*'
---
### Acerca de la instalación de {% data variables.product.prodname_desktop %}

Puedes instalar {% data variables.product.prodname_desktop %} en los sistemas operativos compatibles. Si tienes una cuenta en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, puedes conectarla a {% data variables.product.prodname_desktop %}. Para obtener más información acerca de cómo crear una cuenta, consulta la sección "[Registrar una cuenta de {% data variables.product.prodname_dotcom %} nueva](/articles/signing-up-for-a-new-github-account/)" o contacta a tu administrador de stio de {% data variables.product.prodname_enterprise %}.

{% windows %}

Si eres un administrador de red, puedes desplegar {% data variables.product.prodname_desktop %} en las computadoras con Windows en una red que se administre con Active Directory si utilizas el archivo de paquete de instalador para Windows (`.msi`) con la Política de grupo o con otro sistema de instalación remoto.

El paquete de instalación de Windows extrae el instalador independiente (`.exe`) y configura a Windows para instalar {% data variables.product.prodname_desktop %} en la siguiente ocasión que el usuario ingrese a su estación de trabajo. Los usuarios deben tener permisos para instalar {% data variables.product.prodname_desktop %} en su directorio de usuario.

Si un usuario ejecuta el paquete de instalación en Windows de {% data variables.product.prodname_desktop %} directamente, para completar la instalación, el usuario debe salir de su sesión en su estación de trabajo y volverse a firmar.

{% endwindows %}

### Descargar e instalar {% data variables.product.prodname_desktop %}

{% mac %}

Puedes instalar {% data variables.product.prodname_desktop %} en {% data variables.desktop.mac-osx-versions %}.

{% data reusables.desktop.download-desktop-page %}
2. Da clic en **Descargar para macOS**. ![El botón de Descargar para MacOS](/assets/images/help/desktop/download-for-mac.png)
3. En la carpeta `Download` (Descargas) de tu computadora, haz doble clic en el archivo comprimido **{% data variables.product.prodname_desktop %}**. ![El archivo de GitHubDesktop.zip](/assets/images/help/desktop/mac-zipfile.png)
4. Una vez que se descomprima el archivo, haz doble clic en **{% data variables.product.prodname_desktop %}**.
5. {% data variables.product.prodname_desktop %} se lanzará después de que se complete la instalación.

{% endmac %}

{% windows %}

Puedes instalar {% data variables.product.prodname_desktop %} en {% data variables.desktop.windows-versions %}.

{% warning %}

**Advertencia**: Debes tener un sistema operativo de 64 bits para ejecutar {% data variables.product.prodname_desktop %}.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. Da clic en **Descargar para Windows**. ![El botón de Descargar para Windows](/assets/images/help/desktop/download-for-windows.png)
3. En la carpeta `Download` de tu computadora, da doble clic en el archivo de configuración de **{% data variables.product.prodname_desktop %}**. ![El archivo de GitHubDesktopSetup](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} se lanzará después de que se complete la instalación.

{% endwindows %}
