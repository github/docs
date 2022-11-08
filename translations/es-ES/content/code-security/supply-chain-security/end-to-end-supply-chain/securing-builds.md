---
title: Procedimientos recomendados para proteger el sistema de compilación
shortTitle: Securing builds
allowTitleToDifferFromFilename: true
intro: 'Instrucciones sobre cómo proteger el final de la cadena de suministro, es decir, los sistemas que se usan para compilar y distribuir artefactos.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Fundamentals
  - Security
  - CI
  - CD
ms.openlocfilehash: f184bb668ba1594a77099fab734686b9c550c238
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518860'
---
## Acerca de esta guía

En esta guía se describen los cambios de mayor impacto que puede realizar para mejorar la seguridad de los sistemas de compilación. Cada sección detalla un cambio que puedes hacer a tus procesos para mejorar la seguridad. Los cambios de mayor impacto se enumeran primero.

## ¿Cuál es el riesgo?

Algunos ataques en las cadenas de suministro de software se dirigen directamente al sistema de compilación. Si un atacante puede modificar el proceso de compilación, puede aprovechar el sistema sin el esfuerzo de poner en peligro las cuentas personales o el código. Es importante asegurarse de proteger el sistema de compilación, así como las cuentas personales y el código.

## Protección del sistema de compilación

Hay varias funcionalidades de seguridad que debe tener un sistema de compilación:

1. Los pasos de compilación deben ser claros y repetibles.

2. Debe saber exactamente lo que se ejecuta durante el proceso de compilación.

3. Cada compilación se debe iniciar en un entorno nuevo, de forma que una compilación en peligro no se conserve y afecte a futuras compilaciones.

{% data variables.product.prodname_actions %} puede ayudarle a cumplir estas funcionalidades. Las instrucciones de compilación se almacenan en el repositorio, junto con el código. Puede elegir en qué entorno se ejecuta la compilación, incluidos Windows, Mac, Linux o ejecutores que hospede personalmente. Cada compilación comienza con una imagen de ejecutor nueva, lo que dificulta la persistencia de ataques en el entorno de compilación.

Además de las ventajas de seguridad, {% data variables.product.prodname_actions %} permite desencadenar compilaciones manualmente, periódicamente o en eventos de Git en el repositorio para compilaciones frecuentes y rápidas.

{% data variables.product.prodname_actions %} es un tema extenso, pero un buen lugar para empezar es "[Descripción de Acciones de GitHub](/actions/learn-github-actions/understanding-github-actions)", así como "[Elección de ejecutores hospedados en GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners)" y "[Desencadenamiento de un flujo de trabajo](/actions/using-workflows/triggering-a-workflow)".

## Firma de las compilaciones

Después de proteger el proceso de compilación, querrá impedir que alguien manipule su resultado final. Una excelente manera de hacerlo consiste en firmar las compilaciones. Al distribuir software de forma pública, esto se suele hacer con un par de claves criptográficas públicas y privadas. Use la clave privada para firmar la compilación y publique la clave pública para que los usuarios del software puedan comprobar la firma en la compilación antes de usarla. Si se modifican los bytes de la compilación, la firma no se comprobará.

La forma exacta de firmar la compilación dependerá del tipo de código que escriba y de quiénes son los usuarios. A menudo es difícil saber cómo almacenar de forma segura la clave privada. Una opción básica consiste en usar secretos cifrados de {% data variables.product.prodname_actions %}, aunque deberá tener cuidado de limitar quién tiene acceso a esos flujos de trabajo de {% data variables.product.prodname_actions %}. {% ifversion fpt or ghec %}si tu clave privada se almacena en otro sistema al cual se puede acceder a través de del internet público (como Microsoft Azure o HashiCorp Vault), una opción más avanzada es autenticarse con OpenID Connect, por lo que no tienes que compartir secretos entre sistemas.{% endif %} si solo se puede acceder a tu clave privada desde una red privada, otra opción es usar los corredores auto-hospedados para {% data variables.product.prodname_actions %}.

Para más información, vea "[Secretos cifrados](/actions/security-guides/encrypted-secrets)"{% ifversion fpt or ghec %}, "[Acerca del fortalecimiento de la seguridad con OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)"{% endif %} y "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".

## Fortalecimiento de la seguridad de {% data variables.product.prodname_actions %}

Hay muchos pasos adicionales que puede seguir para reforzar la seguridad de {% data variables.product.prodname_actions %}. En concreto, tenga cuidado al evaluar flujos de trabajo de terceros y considere la posibilidad de usar `CODEOWNERS` para limitar quién puede realizar cambios en los flujos de trabajo.

Para más información, vea "[Fortalecimiento de la seguridad para Acciones de GitHub](/actions/security-guides/security-hardening-for-github-actions)"; en concreto "[Uso de acciones de terceros](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)" y "[Uso de `CODEOWNERS` para supervisar los cambios](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes)".

## Pasos siguientes

- "[Protección de la cadena de suministro de un extremo a otro](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Procedimientos recomendados para proteger las cuentas](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Procedimientos recomendados para proteger el código en la cadena de suministro](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"
