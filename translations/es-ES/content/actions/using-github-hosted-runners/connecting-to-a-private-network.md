---
title: Conectarse a una red privada
intro: 'Puedes conectar ejecutores hospedados en {% data variables.product.prodname_dotcom %} a los recursos de una red privada, incluidos los registros de paquetes, los administradores de secretos y otros servicios locales.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
ms.openlocfilehash: 2a74b149596e0158cdc6b5e40508b1d4a54eb8e6
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884273'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de redes de ejecutores hospedados en {% data variables.product.prodname_dotcom %}

De manera predeterminada, los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen acceso a la red pública de Internet. Pero es posible que también quieras que estos ejecutores accedan a los recursos de la red privada, como un registro de paquetes, un administrador de secretos u otros servicios locales. 

Los ejecutores hospedados de {% data variables.product.prodname_dotcom %} se comparten en todos los clientes de {% data variables.product.prodname_dotcom %}, por lo que necesitarás una manera de conectar la red privada a solo los ejecutores mientras ejecutan los flujos de trabajo. Hay varios enfoques diferentes que puedes adoptar para configurar este acceso, cada uno con diferentes ventajas y desventajas.

{% ifversion fpt or ghec or ghes > 3.4 %}
### Uso de una puerta de enlace de API con OIDC

Con {% data variables.product.prodname_actions %}, puedes usar tokens de OpenID Connect (OIDC) para autenticar el flujo de trabajo fuera de {% data variables.product.prodname_actions %}. Por ejemplo, podrías ejecutar una puerta de enlace de API en el perímetro de la red privada que autentique las solicitudes entrantes con el token de OIDC y, después, realice solicitudes de API en nombre del flujo de trabajo en la red privada.

En el diagrama siguiente se proporciona información general sobre la arquitectura de esta solución:

![Diagrama de una puerta de enlace de OIDC](/assets/images/help/images/actions-oidc-gateway.png)

Es importante que se autentique no solo que el token de OIDC provenga de {% data variables.product.prodname_actions %}, sino que provenga específicamente de los flujos de trabajo esperados, de modo que otros usuarios de {% data variables.product.prodname_actions %} no puedan acceder a los servicios de la red privada. Puedes usar notificaciones de OIDC para crear estas condiciones. Para obtener más información, consulta "[Definición de condiciones de confianza en roles en la nube mediante notificaciones de OIDC](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)".

La principal desventaja de este enfoque es que tienes que implementar la puerta de enlace de API para realizar solicitudes en tu nombre, así como ejecutarla en el perímetro de la red.

Pero también cuenta con varias ventajas:
- No es necesario configurar ningún firewall ni modificar el enrutamiento de la red privada. 
- La puerta de enlace de API es sin estado y, por lo tanto, se escala horizontalmente para controlar la alta disponibilidad y el alto rendimiento.

Para obtener más información, consulta [una implementación de referencia de una puerta de enlace de API](https://github.com/github/actions-oidc-gateway-example) (tenga en cuenta que esto requiere personalización para el caso de uso y no está listo para ejecutarse tal cual) y "[Acerca de la protección de seguridad con OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".
{% endif %}

### Uso de WireGuard para crear una superposición de red

Si no quieres mantener una infraestructura independiente para una puerta de enlace de API, puedes crear una red superpuesta entre el ejecutor y un servicio en la red privada ejecutando WireGuard en ambos lugares.

Existen varias desventajas con este enfoque: 

- Para lograr que WireGuard se ejecute en el servicio privado, necesitarás una dirección IP y un puerto conocidos a los que puede hacer referencia el flujo de trabajo: esto puede ser una IP pública y un puerto, una asignación de puertos en una puerta de enlace de red o un servicio que actualice DNS de forma dinámica. 
- WireGuard no controla el NAT transversal de fábrica, por lo que deberás identificar una manera de proporcionar este servicio.
- Esta conexión es uno a uno, por lo que si necesitas alta disponibilidad o alto rendimiento, deberás basarte en WireGuard. 
- Deberás generar y almacenar claves de forma segura para el ejecutor y el servicio privado. WireGuard usa UDP, por lo que la red debe admitir el tráfico UDP.

También cuenta con algunas ventajas, ya que puedes ejecutar WireGuard en un servidor existente, por lo que no tienes que mantener una infraestructura independiente y se admite en ejecutores hospedados de {% data variables.product.prodname_dotcom %}.

### Ejemplo: Configuración de WireGuard

En este flujo de trabajo de ejemplo se configura WireGuard para conectarse a un servicio privado.

En este ejemplo, la instancia de WireGuard que se ejecuta en la red privada tiene esta configuración:
- Dirección IP de red de superposición de `192.168.1.1`
- IP pública y puerto de `1.2.3.4:56789`
- Clave pública `examplepubkey1234...`

La instancia de WireGuard en el ejecutor de {% data variables.product.prodname_actions %} tiene esta configuración:
- Dirección IP de red de superposición de `192.168.1.2`
- Almacenes de claves privadas como un secreto de {% data variables.product.prodname_actions %} en `WIREGUARD_PRIVATE_KEY`

```yaml
name: WireGuard example

on:
  workflow_dispatch:

jobs:
  wireguard_example:
    runs-on: ubuntu-latest
    steps:
      - run: sudo apt install wireguard

      - run: echo "${{ secrets.WIREGUARD_PRIVATE_KEY }}" > privatekey

      - run: sudo ip link add dev wg0 type wireguard

      - run: sudo ip address add dev wg0 192.168.1.2 peer 192.168.1.1

      - run: sudo wg set wg0 listen-port 48123 private-key privatekey peer examplepubkey1234... allowed-ips 0.0.0.0/0 endpoint 1.2.3.4:56789

      - run: sudo ip link set up dev wg0

      - run: curl -vvv http://192.168.1.1
```

Para obtener más información, consulta [Inicio rápido de WireGuard](https://www.wireguard.com/quickstart/), así como "[Secretos cifrados](/actions/security-guides/encrypted-secrets)" para obtener información sobre cómo almacenar claves de forma segura.

### Uso de Tailscale para crear una superposición de red

Tailscale es un producto comercial basado en WireGuard. Esta opción es muy similar a WireGuard, salvo que Tailscale es más una experiencia de producto completa en lugar de un componente de código abierto.

Las desventajas son similares a las de WireGuard: la conexión es uno a uno, por lo que es posible que tengas que realizar un trabajo adicional para lograr una alta disponibilidad o un alto rendimiento. Todavía es necesario generar y almacenar claves de forma segura. El protocolo sigue siendo UDP, por lo que la red debe admitir el tráfico UDP.

Pero cuenta con algunas ventajas con respecto a WireGuard: el NAT transversal está integrado, por lo que no es necesario exponer un puerto a la red pública de Internet. De entre estas opciones es, de lejos, la más rápida para ponerse en marcha, ya que Tailscale proporciona un flujo de trabajo de {% data variables.product.prodname_actions %} con un solo paso para conectarse a la red de superposición.

Para obtener más información, consulta la [Acción de GitHub de Tailscale](https://github.com/tailscale/github-action), así como "[Secretos cifrados](/actions/security-guides/encrypted-secrets)" para obtener información sobre cómo almacenar claves de forma segura.
