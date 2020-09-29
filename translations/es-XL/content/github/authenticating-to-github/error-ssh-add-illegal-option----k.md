---
title: 'Error: ssh-add: opción ilegal -- K'
intro: 'Este error significa que tu versión de `ssh-add` no es compatible con la integración keychain macOS, que te permite almacenar tu contraseña en la keychain.'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

La opción `-K` es una versión estándar de Apple de `ssh-add`, que almacena la contraseña en tu keychain cuando agregas una clave SSH al ssh-agent. Si has instalado una versión diferente de `ssh-add`, es posible que no sea compatible para `-K`.

### Resolver el problema

Para agregar tu llave privada SSH al ssh-agent, puedes especificar la ruta a la versión de Apple de `ssh-add`:

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_rsa
```

{% note %}

**Nota:** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

### Leer más

- "[Generar una clave SSH nueva y agregarla al ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"
- [Página de manual de Linux para SSH-ADD](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- Para ver la página del manual de Apple para SSH-ADD, ejecuta `man ssh-add` en Terminal.
