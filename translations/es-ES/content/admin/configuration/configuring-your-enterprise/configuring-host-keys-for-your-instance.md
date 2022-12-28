---
title: Configuración de claves de host para la instancia
shortTitle: Configure host keys
intro: 'Puedes aumentar la seguridad de {% data variables.location.product_location %} configurando los algoritmos que usa la instancia a fin de generar y anunciar claves de host para las conexiones SSH entrantes.'
permissions: 'Site administrators can configure the host keys for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 6454568e63b15fc947994ab39aef9baad9d5c146
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107113'
---
## Acerca de las claves de host de la instancia

Los servidores que aceptan conexiones SSH anuncian una o varias claves de host criptográficas para identificar de forma segura el servidor a los clientes SSH. Para confirmar la identidad del servidor durante la inicialización de una conexión, los clientes almacenan y comprueban la clave de host. Para obtener más información, consulte [SSH Host Key - What, Why, How](https://ssh.com/academy/ssh/host-key) (Clave de host SSH: qué, por qué y cómo) en el sitio web de la SSH Academy.

{% data reusables.enterprise.about-ssh-ports %}

De manera predeterminada, {% data variables.location.product_location %} genera y anuncia claves de host con rotación de claves de host de estilo OpenSSH. Para aumentar la seguridad de SSH en su entorno, puede habilitar algoritmos adicionales para la generación de claves de host.

{% note %}

**Nota**: Si habilita algoritmos de clave de host adicionales, los clientes que no usan OpenSSH para las conexiones SSH pueden experimentar advertencias durante la conexión o es posible que la conexión falle por completo. Algunas implementaciones de SSH pueden omitir algoritmos no admitidos y revertir a otro algoritmo. Si el cliente no admite la reversión, se producirá un error en la conexión. Por ejemplo, la biblioteca SSH para Go no admite la reversión a un algoritmo diferente.

{% endnote %}

## Administración de una clave de host Ed25519

Para mejorar la seguridad de los clientes que se conectan a {% data variables.location.product_location %}, puedes habilitar la generación y el anuncio de una clave de host Ed25519. Ed25519 es inmune a algunos ataques dirigidos a algoritmos de firma más antiguos, sin sacrificar la velocidad. Es posible que los clientes SSH anteriores no admitan Ed25519. De forma predeterminada, las instancias de {% data variables.product.product_name %} no generan ni anuncian una clave de host Ed25519. Para obtener más información, consulta el [sitio web de Ed25519](https://ed25519.cr.yp.to).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Para habilitar la generación y el anuncio de la clave de host Ed25519, escribe el siguiente comando.

   ```shell
   ghe-config app.babeld.host-key-ed25519 true
   ```
1. Opcionalmente, escribe el siguiente comando para deshabilitar la generación y el anuncio de la clave de host Ed25519.

   ```shell
   ghe-config app.babeld.host-key-ed25519 false
   ```
{% data reusables.enterprise.apply-configuration %}
