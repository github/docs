---
title: Mejores prácticas para asegurar tu sistema de compilación
shortTitle: Asegurar las compilaciones
allowTitleToDifferFromFilename: true
intro: Lineamientos sobre cómo proteger el final de tu cadena de suministro; los sistemas que debes utilizar para compilar y distribuir artefactos.
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
---

## Acerca de esta guía

Esta guía describe los cambios de mayor impacto que puedes hacer para mejorar la seguridad de tus sistemas de compilación. Cada sección detalla un cambio que puedes hacer a tus procesos para mejorar la seguridad. Los cambios de más alto impacto se listan primero.

## ¿Cuál es el riesgo?

Algunos ataques a las cadenas de suministro de software apuntan directamente hacia el sistema de compilación. Si un atacante puede modificar el proceso de compilación, este puede aprovechar tu sistema sin el esfuerzo de poner en riesgo las cuentas personales o el código. Es importante asegurarse de que no te olvidaste de proteger el sistema de compilación, así como las cuentas personales y el código.

## Asegurar tu sistema de compilación

Existen varias capacidades de seguridad que debe tener un sistema de compilación:

1. Los pasos de compilación deben ser claros y repetibles.

2. Deberías saber exactamente qué se estaba ejecutando durante el proceso de compilación.

3. Cada compilación debería iniciar en un ambiente nuevo, para que las compilaciones puestas en riesgo no persistan para afectar compilaciones futuras.

{% data variables.product.prodname_actions %} puede ayudarte a lograr estas capacidades. Las instrucciones de compilación se almacenan en tu repositorio, junto con tu código. Tú eliges en qué ambiente se ejecuta tu compilación, incluyendo los de Windows, Mac, Linux o los ejecutores que hospedas tú mismo. Cada compilación inicia con un ambiente virtual nuevo, lo que hace difícil que un ataque persista en tu ambiente de compilación.

Adicionalmente a los beneficios de seguridad, {% data variables.product.prodname_actions %} te permite activar compilaciones manualmente, regularmente o en eventos de git en tu repositorio para las compilaciones rápidas y frecuentes.

Las {% data variables.product.prodname_actions %} son un tema amplio, pero un buen lugar para iniciar es la sección de "[Entender las GitHub Actions](/actions/learn-github-actions/understanding-github-actions)", así como "[Elegir los ejecutores hospedados por GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners)" y "[Activar un flujo de trabajo](/actions/using-workflows/triggering-a-workflow)".

## Firmar tus compilaciones

Después de que tu proceso de compilación esté seguro, querrás prevenir que alguien manipule el resultado final de tu proceso de compilación. Una buena forma de hacerlo es firmando tus compilaciones. Cuando distribuyes software públicamente, esto se hace a menudo con un par de llaves criptográficas pública/privada. Utilizarás la llave privada para firmar la compilación y publicarás la llave pública para que los usuarios de tu software puedan verificar la firma de la compilación antes de que la utilicen. Si los bites de la compilación se modifican, la firma no se verificará.

El cómo firmas tu compilación exactamente dependerá de qué tipo de código estás escribiendo y de quiénes son tus usuarios. A menudo, es difícil saber cómo almacenar la llave privada de forma segura. Una opción básica en este caso es utilizar los secretos cifrados de las {% data variables.product.prodname_actions %}, aunque necesitarás tener cuidado de limitar quién tiene acceso a esos flujos de trabajo de {% data variables.product.prodname_actions %}. {% ifversion fpt or ghec %}si tu clave privada se almacena en otro sistema al cual se puede acceder a través de del internet público (como Microsoft Azure o HashiCorp Vault), una opción más avanzada es autenticarse con OpenID Connect, por lo que no tienes que compartir secretos entre sistemas.{% endif %} si solo se puede acceder a tu clave privada desde una red privada, otra opción es usar los corredores auto-hospedados para {% data variables.product.prodname_actions %}.

Para obtener más información, consulta las secciones "[Secretos cifrados](/actions/security-guides/encrypted-secrets)"{% ifversion fpt or ghec %}, "[Acerca del fortalecimiento de seguridad con OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)",{% endif %} y "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".

## Reforzar las seguridad para las {% data variables.product.prodname_actions %}

Hay muchos más pasos que puedes llevar a cabo para asegurar las {% data variables.product.prodname_actions %} adicionalmente. Particularmente, ten cuidado al evaluar los flujos de trabajo de terceros y considera utilizar `CODEOWNERS` para limitar quiénes pueden hacer cambios a tus flujos de trabajo.

Para obtener más información, consulta las secciones "[Fortalecimiento de seguridad para las GitHub Actions](/actions/security-guides/security-hardening-for-github-actions)"; particularmente "[Utilizar acciones de terceros](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)" y "[Utilizar `CODEOWNERS` para monitorear cambios](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes)".

## Pasos siguientes

- "[Asegurar tu cadena de suministros de extremo a extremo](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Mejores prácticas para asegurar cuentas](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Mejores prácticas para asegurar el código en tu cadena de suministros](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"
