---
title: Conectarse a una red privada
intro: 'Puedes conectar los {% data variables.product.prodname_github_codespaces %} a los recursos de una red privada, incluyendo los registros de paquetes, servidores de licencias y bases de datos en las instalaciones.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

## Acerca de la creación de redes en los codespaces

Predeterminadamente, tus codespaces tienen acceso a todos los recursos en el internet público, incluyendo los administradores de paquetes, servidores de licencias, bases de datos y API de plataforma en la nube, pero no tienen acceso a aquellos de las redes privadas.

## Conectar los recursos a una red privada

Actualmente hay dos métodos para acceder a los recursos en una red privada dentro de Codespaces.
- Utilizando una extensión del {% data variables.product.prodname_cli %} para configurar tu máquina local como una puerta de enlace a los recursos remotos.
- Utilizando una VPN.

### Utilizar la extensión del CLI de GitHub para acceder a los recursos remotos

{% note %}

**Nota**: La extensión del {% data variables.product.prodname_cli %} se encuentra actualmente en beta y está sujeta a cambios.

{% endnote %}

La extensión del {% data variables.product.prodname_cli %} te permite crear un puente entre un codespace y tu máquina local, para que el codespace pueda acceder a cualquier solución remota a la cuál se pueda acceder desde tu máquina. El codespace utiliza tu máquina local como una puerta de enlace de red para llegar a esos recursos. Para obtener más información, consulta la sección "[Utilizar el {% data variables.product.prodname_cli %} para acceder a los recursos remotos](https://github.com/github/gh-net#codespaces-network-bridge)".




### Utilizar una VPN para acceder a los recursos detrás de una red privada

Como alternativa a la extensión del {% data variables.product.prodname_cli %}, puedes utilizar una VPN para acceder a los recursos detrás de una red privada desde dentro de tu codespace.

Te recomendamos herramientas de VPN como [Open VPN](https://openvpn.net/) para acceder a los recursos de una red privada. Para obtener más información, consulta la sección "[Utilizar el cliente de OpenVPN desde GitHub Codespaces](https://github.com/codespaces-contrib/codespaces-openvpn)".

También hay muchas soluciones de terceros que, si bien lo respalda {% data variables.product.prodname_dotcom %} directamente, han proporcionado ejemplos de cómo integrarse con los {% data variables.product.prodname_codespaces %}.

Estas soluciones de terceros incluyen:

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Poner los recursos privados en listas de IP permitidas para los codespaces

Si bien {% data variables.product.prodname_dotcom %} publica rangos de IP para diversos productos en su API Meta, las IP de los codespaces se asignan dinámicamente, lo cual significa que no hay garantía de que tu Codespace tenga la misma dirección IP todos los días. Desalentamos enormemente que los usuarios pongan todo un rango de IP en una lista de IP permitidas, ya que esto otorgaría un acceso demasiado amplio a todos ellos (incluyendo a los usuarios que no están afiliados con tus codespaces).

Para obtener más información sobre la API Meta, consulta la sección "[Meta](/rest/reference/meta)".

## Restringir el acceso al internet público

En la actualidad, no hay forma de restringir los codespaces para que no accedan al internet público ni de restringir a los usuarios autenticados adecuadamente para que no accedan a un puerto reenviado.

Para obtener más información sobre cómo asegurar tus codespaces, consulta la sección "[Seguridad en los {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces)".
