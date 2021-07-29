---
title: 'Error: Unknown key type'
intro: Este error significa que el tipo de llave SSH que utilizaste no se reconoció o no es compatible con tu cliente SSH.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
  github-ae: next
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
---

### Acerca del error `unknown key type`

Cuando generas una llave SSH nueva, podrías recibir un error de `unknown key type` si tu cliente SSH no es compatible con el tipo de llave que especificaste.{% mac %}Para resolver este problema en macOS, puedes actualizar tu cliente SSH o instalar un cliente SSH nuevo.

### Prerrequisitos

Debes tener Homebrew instalado. Para obtener más información, consulta la [guía de instalación](https://docs.brew.sh/Installation) en la documentación de Homebrew.

### Resolver el problema

{% warning %}

**Advertencia:** Si instalas OpenSSH, tu computadora no podrá recuperar contraseñas que se almacenen en la keychain de Apple. Necesitarás ingresar tu contraseña o interactuar con tu llave de seguridad de hardware cada vez que te autentiques con SSH en {% data variables.product.prodname_dotcom %} u otro servicio web.

Si eliminas a OpenSSh, las paráfrasis que se almacenan en tu keychain se podrán recuperar nuevamente. Puedes eliminar a OpenSSH si ingresas el comando `brew uninstall openssh` en la terminal.

{% endwarning %}

1. Abre Terminal.
2. Ingresa el comando `brew install openssh`.
3. Sal y vuelve a abrir la terminal.
4. Intenta llevar a cabo el procedimiento para generar una llave SSH nuevamente. Para obtener más información, consulta "[Generar una nueva llave SSH y agregarla a ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)."

{% endmac %}{% linux %}Para resolver este problema en Linux, utiliza el administrador de paquetes para tu distribución de Linux para instalar una versión nueva de OpenSSH o compila una versión nueva desde el orígen. Si instalas una versión diferente de OpenSSH, la capacidad de otras aplicaciones para autenticarse por SSH puede verse afectada. Para obtener más información, revisa los documentos para tu distribución.{% endlinux %}
