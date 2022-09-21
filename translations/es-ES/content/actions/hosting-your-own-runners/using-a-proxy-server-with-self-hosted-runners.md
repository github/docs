---
title: Uso de un servidor proxy con ejecutores autohospedados
intro: 'Puedes configurar los ejecutores autoalojados para usar un servidor proxy para comunicarte con {% data variables.product.product_name %}.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Proxy servers
ms.openlocfilehash: e6c9d36b052627726f73f6a07d989a192cd1e738
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092508'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Configurar un servidor proxy mediante variables de entorno

Si necesitas un ejecutor autoalojado para comunicarte a través de un servidor proxy, la aplicación del ejecutor autoalojado usa configuraciones de proxy establecidas en las siguientes variables de entorno:

* `https_proxy`: dirección URL del proxy para el tráfico HTTPS. También puedes incluir credenciales de autenticación básicas, si es necesario. Por ejemplo:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: dirección URL del proxy para el tráfico HTTP. También puedes incluir credenciales de autenticación básicas, si es necesario. Por ejemplo:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: lista separada por comas de hosts que no deben usar un proxy. Solo se permiten nombres de host en `no_proxy`; no se pueden usar direcciones IP. Por ejemplo:
  * `example.com`
  * `example.com,myserver.local:443,example.org`

Las variables de entorno de proxy se leen cuando se inicia la aplicación del ejecutor autoalojado, por lo que debes establecer las variables de entorno antes de configurar o iniciar la aplicación del ejecutor autoalojado. Si cambia la configuración del proxy, debe reiniciar la aplicación del ejecutor autohospedado.

En las máquinas Windows, los nombres de las variables de entorno proxy no distinguen mayúsculas de minúsculas. En las máquinas Linux y macOS, te recomendamos que uses todas las variables de entorno en minúsculas. Si tiene una variable de entorno en minúsculas y mayúsculas en Linux o macOS, por ejemplo, `https_proxy` y `HTTPS_PROXY`, la aplicación del ejecutor autohospedado usa la variable de entorno en minúsculas.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

## Usar un archivo.env para establecer la configuración del proxy

Si establecer variables de entorno no le resulta práctico, puede establecer las variables de configuración del proxy en un archivo denominado _.env_ en el directorio de la aplicación del ejecutor autohospedado. Por ejemplo, esto puede ser necesario si deseas configurar la aplicación del ejecutor como un servicio en una cuenta de sistema. Cuando se inicia la aplicación del ejecutor, lee las variables establecidas en _.env_ para la configuración del proxy.

A continuación se muestra un ejemplo de configuración del proxy en _.env_ :

```ini
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

## Establecer la configuración del proxy para contenedores Docker

Si usas las acciones del contenedor Docker o los contenedores de servicio en tus flujos de trabajo, es posible que también debas configurar Docker para usar tu servidor proxy además de establecer las variables de entorno anteriores.

Para obtener información sobre la configuración de Docker necesaria, consulte "[Configuración de Docker para usar un servidor proxy](https://docs.docker.com/network/proxy/)" en la documentación de Docker.
