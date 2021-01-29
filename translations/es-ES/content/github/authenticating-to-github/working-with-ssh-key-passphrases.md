---
title: Trabajar con contraseñas de clave SSH
intro: Puedes asegurar tus claves SSH y configurar un agente de autenticación para no tener que volver a ingresar tu contraseña cada vez que uses tus claves SSH.
redirect_from:
  - /ssh-key-passphrases/
  - /working-with-key-passphrases/
  - /articles/working-with-ssh-key-passphrases
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Con las claves SSH, si alguien obtiene acceso a tu computadora, también tiene acceso a cada sistema que usa esa clave. Para agregar una capa extra de seguridad, puedes incluir una contraseña a tu clave SSH. Puedes usar `ssh-agent` para guardar tu contraseña de forma segura y no tener que volver a ingresarla.

### Agregar o cambiar una contraseña

Puedes cambiar la contraseña por una llave privada existente sin volver a generar el par de claves al escribir el siguiente comando:

```shell
$ ssh-keygen -p -f ~/.ssh/id_ed25519
> Enter old passphrase: <em>[Type old passphrase]</em>
> Key has comment '<em>your_email@example.com</em>'
> Enter new passphrase (empty for no passphrase): <em>[Type new passphrase]</em>
> Enter same passphrase again: <em>[Repeat the new passphrase]</em>
> Your identification has been saved with the new passphrase.
```

Si tu clave ya tiene una contraseña, se te pedirá que la ingreses antes de que puedas cambiar a una nueva contraseña.

{% windows %}

### Auto-lanzamiento `ssh-agent` en Git para Windows

Puedes ejecutar el `ssh-agent` automáticamente cuando abres el bash o el Git shell. Copia las siguientes líneas y pégalas en tu `~/.perfil` o archivo `~/.bashrc` en Git Shell:

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2= agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

Si tu llave privada no está almacenada en una de las ubicaciones predeterminadas (como`~/.ssh/id_rsa`), necesitarás indicar a tu agente de autenticación SSH en dónde encontrarla. Para agregar tu clave a ssh-agent, escribe `ssh-add ~/path/to/my_key`. Para obtener más información, consulta "[Generar una nueva clave SSH y agregarla a ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)"

{% tip %}

**Sugerencias:** si quieres que `ssh-agent` olvide tu clave luego de un tiempo, puedes configurarlo para que lo haga ejecutando `ssh-add -t <seconds>`.

{% endtip %}

Ahora, cuando ejecutas Git Bash por primera vez, se te pedirá tu contraseña:

```shell
> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/<em>you</em>/.ssh/id_rsa:
> Identity added: /c/Users/<em>you</em>/.ssh/id_rsa (/c/Users/<em>you</em>/.ssh/id_rsa)
> Welcome to Git (version <em>1.6.0.2-preview20080923</em>)
>
> Run 'git help git' to display the help index.
> Run 'git help <command>' to display help for specific commands.
```

El proceso de `ssh-agent` continuará funcionando hasta que cierres sesión, apagues tu computadora o termines el proceso.

{% endwindows %}

{% mac %}

### Guardar tu contraseña en keychain

En OS X Leopard a través de OS X El Capitan, los siguientes archivos de llave privada predeterminada se manejan automáticamente:

- *.ssh/id_rsa*
- *.ssh/identity*

La primera vez que usas tu clave, se te pedirá que ingreses tu contraseña. Si eliges guardar la contraseña con tu keychain, no necesitarás ingresarla nuevamente.

De lo contrario, puedes almacenar tu contraseña en la keychain cuando agregues tu clave a ssh-agent. Para obtener más información, consulta "[Agregar tu clave SSH a ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)."

{% endmac %}

### Further reading

- "[Acerca de SSH](/articles/about-ssh)"
