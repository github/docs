---
title: Mejores prácticas de seguridad para las apps
intro: 'Lineamientos para preparar una app segura para que se comparta en {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process
  - /marketplace/getting-started/security-review-process
  - /developers/github-marketplace/security-review-process-for-submitted-apps
  - /developers/github-marketplace/security-best-practices-for-apps
shortTitle: Security best practice
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: aaff313f73b74ba28f765050a8f993a9dddea1be
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092152'
---
El seguir estas mejores prácticas te ayudará a proporcionar una experiencia de usuario segura.

## Autorización, autenticación, y control de accesos

Te recomendamos crear una GitHub App en vez de una OAuth App. {% data reusables.marketplace.github_apps_preferred %}. Vea "[Diferencias entre Aplicaciones de GitHub y Aplicaciones de OAuth](/apps/differences-between-apps/)" para más información.
- Las apps deben utilizar el principio del menor privilegio necesario y solo deberán solicitar los alcances de OAuth y permisos de GitHub Apps que dicha app necesite para llevar a cabo su funcionalidad prevista. Para más información, vea [Principio de privilegios mínimos](https://en.wikipedia.org/wiki/Principle_of_least_privilege) en Wikipedia.
- Las apps deben proporcionar a los clientes una forma de borrar su cuenta, sin tener que enviar un correo electrónico o llamar a una persona de soporte.
- Las apps no deben compartir tokens entre las diferentes implementaciones de la misma. Por ejemplo, una app de escritorio debe tener un token separado de aquella que es basada en web. Los tokens individuales permiten a cada app solicitar el acceso necesario a los recursos de GitHub por separado.
- Diseña tu app con diferentes roles de usuario, dependiendo de la funcionalidad que necesita cada tipo de usuario. Por ejemplo, un usuario estándar no debe tener acceso a la funcionalidad de administrador, y los gerentes de facturación podrían no requerir acceso de carga al código de un repositorio.
- Las apps no deben compartir cuentas de servicio tales como servicios de correo electrónico o de bases de datos para administrar tu servicio SaaS.
- Todos los servicios que se utilicen en tu app deben contar con credenciales únicas de nombre de inicio de sesión y contraseña.
- El acceso privilegiado de administrador para la infraestructura de alojamiento productiva solo se deberá otorgar a los ingenieros y empleados con obligaciones administrativas.
- Las aplicaciones no deben usar tokens de acceso personal para autenticarse y se deben autenticar como una [aplicación de OAuth](/apps/about-apps/#about-oauth-apps) o una [aplicación de GitHub](/apps/about-apps/#about-github-apps):
  - Las aplicaciones de OAuth se deben autenticar mediante un [token de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).
  - Las aplicaciones de GitHub se deben autenticar mediante un [JSON Web Token (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app), un [token de OAuth](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) o un [token de acceso de instalación](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

## Protección de datos

- Las apps deben cifrar los datos que se transfieren a través del internet público utilizando HTTPS con un certificado TLS válido o con SSH para Git.
- Las apps deben almacenar las llaves secretas y las ID de los clientes de forma segura. Se recomienda almacenarlos como [variables de entorno](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables).
- Las apps deben borrar todos los datos de usuario de GitHub dentro de los 30 días posteriores de recibir una solicitud del usuario para hacerlo, o dentro de 30 días posteriores al final de la relación legal del usuario con GitHub.
- Las apps no deben requerir que el usuario proporcione su contraseña de GitHub.
- Las apps deben cifrar los tokens, ID de cliente y secretos de cliente.

## Registro y supervisión

Las apps deben tener capacidad de monitoreo y de ingreso de usuarios. Las bitácoras de las apps deben retenerse por lo menos por 30 días y archivarse por un mínimo de un año.
Un log de seguirdad debería incluir:

- Eventos de autenticación y autorización
- Cambios a la configuración del servicio
- Escritura y lectura de objetos
- Todos los cambios de permisos de usuarios y grupos
- Elevación de rol a aquel de administrador
- Marca de tiempo consistente para cada evento
- Usuarios orgien, direcciones IP, y/o nombres de host para todas las acciones registradas

## Flujo de trabajo de respuesta a incidentes

Para proporcionar una experiencia segura a los usuarios, debes tener un plan claro de respuesta a incidentes antes de listar tu app. Te recomendamos tener un equipo de respuesta a incidentes para operaciones y de seguridad en tu compañía en vez de utilizar un proveedor tercero. Debes poder notificar a {% data variables.product.product_name %} dentro de las primeras 24 horas de que se confirme un incidente.

Para obtener un ejemplo de un flujo de trabajo de respuesta a incidentes, vea la "Directiva de respuesta de vulneración de datos" en el [sitio web de SANS Institute](https://www.sans.org/information-security-policy/). Un documento corto con pasos claros a tomar en caso de un incidente es más valioso que una plantilla larga de una política.

## Administración de vulnerabilidades y flujo de trabajo de parchado

Debes llevar a cabo escaneos de vulnerabilidades frecuentes para la infraestructura productiva. Debes clasificar los resultados de los escaneos de vulnerabilidades y definir un tiempo en el que acuerdes remediar dichas vulnerabilidades.

Si no estás listo para configurar un programa completo de administración de vulnerabilidades, es útil comenzar creando un proceso de parchado. Para obtener instrucciones sobre cómo crear una directiva de administración de revisiones, vea este artículo de TechRepublic "[Establecimiento de una directiva de administración de revisiones](https://www.techrepublic.com/article/establish-a-patch-management-policy-87756/)".
