---
title: 'Error: Número de archivo erróneo'
intro: 'Este error, por lo general, significa que no has podido conectarte al servidor. A menudo es causado por los firewalls y los servidores proxy.'
redirect_from:
  - /articles/error-bad-file-number
  - /github/authenticating-to-github/error-bad-file-number
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

Cuando ejecutes comandos Git remotos o SSH, tu conexión puede quedar inactiva:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Connecting to {% data variables.command_line.codeblock %} [207.97.227.239] port 22.
> debug1: connect to address 207.97.227.239 port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Bad file number
```

### Resolver el problema

#### Usa HTTPS

A menudo la solución más sencilla es simplemente evitar por completo el SSH. La mayoría de los firewalls y los proxys permiten el tráfico de HTTPS sin problemas. Para aprovechar esto, cambia [la URL remota](/github/getting-started-with-github/about-remote-repositories) que estás usando:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>reponame</em>.git
> Cloning into 'reponame'...
> remote: Counting objects: 84, done.
> remote: Compressing objects: 100% (45/45), done.
> remote: Total 84 (delta 43), reused 78 (delta 37)
> Unpacking objects: 100% (84/84), done.
```

#### Prueba desde una red diferente

Si puedes conectar la computadora a otra red que no tenga un firewall, puedes tratar de probar tu conexión de SSH a {% data variables.product.product_name %}. Si todo funciona como es debido, comunícate con tu administrador de red para que te ayude a cambiar los parámetros del firewall para permitir que tu conexión de SSH a {% data variables.product.product_name %} se establezca sin problemas.

{% if currentVersion == "free-pro-team@latest" %}

#### Uso de SSH a través del puerto HTTPS

Si usar HTTPS no es una opción y tu administrador de firewall no permite las conexiones de SSH, puedes intentar usar [SSH a través del puerto HTTPS](/articles/using-ssh-over-the-https-port).

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Leer más

- "[Solucionar problemas de conectividad ](/articles/troubleshooting-connectivity-problems)"

{% endif %}
