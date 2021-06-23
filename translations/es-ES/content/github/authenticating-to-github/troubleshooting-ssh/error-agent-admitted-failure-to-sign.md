---
title: 'Error: El agente admitió una falla para registrarse'
intro: 'En circunstancias muy poco frecuentes, al conectarse con {% data variables.product.product_name %} mediante SSH en Linux produce el error "El agente admitió una falla para registrarse usando la clave". Sigue los pasos siguientes para resolver el problema.'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key/
  - /articles/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/error-agent-admitted-failure-to-sign
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

Cuando intentes implementar SSH en {% data variables.product.product_location %} en una computadora con Linux, posiblemente veas el siguiente mensaje en tu terminal:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

Para conocer más detalles, consulta <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>este informe de propuesta</a>.

### Resolución

Deberías poder solucionar este error al cargar tus claves en tu agente de SSH con `ssh-add`:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/<em>you</em>/.ssh/id_rsa: <em>[tippy tap]</em>
> Identity added: /home/<em>you</em>/.ssh/id_rsa (/home/<em>you</em>/.ssh/id_rsa)
```

Si tu clave no tiene el nombre de archivo predeterminado (`/.ssh/id_rsa`), deberás pasar esa ruta a `ssh-add`:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/<em>you</em>/.ssh/my_other_key: <em>[tappity tap tap]</em>
> Identity added: /home/<em>you</em>/.ssh/my_other_key (/home/<em>you</em>/.ssh/my_other_key)
```
