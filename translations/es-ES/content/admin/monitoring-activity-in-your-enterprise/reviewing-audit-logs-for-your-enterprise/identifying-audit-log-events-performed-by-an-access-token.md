---
title: Identificación de eventos de registro de auditoría que realiza un token de acceso
shortTitle: Identify events by token
intro: 'Puedes identificar las acciones que realiza un token de OAuth o específico de {% data variables.product.pat_generic %} en la empresa.'
versions:
  feature: token-audit-log
ms.openlocfilehash: 4452e740e611ea3f903c5d122222b3cb575ba37d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160315'
---
## Acerca de los datos de token en el registro de auditoría

En el registro de auditoría de la empresa, para las acciones que se realizaron mediante un {% data variables.product.pat_generic %} o una aplicación de OAuth para la autenticación, los datos del evento mostrarán el método de autenticación usado y el hash SHA-256 del token.

Si descubres que un token se ha puesto en peligro, puedes comprender las acciones que realiza el token en peligro buscando en el registro de auditoría de la empresa todos los eventos asociados a ese token.

Los valores de token con hash no se incluyen al exportar el registro de auditoría.

## Búsqueda de eventos asociados a un token

Al buscar eventos asociados a un token específico, puedes usar la interfaz de usuario o la API REST. En cualquier caso, primero deberás conocer el hash SHA-256 del token.

### Generación de un valor hash SHA-256 para un token

Si solo tienes un valor de token sin procesar, deberás generar un hash SHA-256 para poder buscar el token.

En el caso de MacOS y Linux, puedes usar `echo -n TOKEN | openssl dgst -sha256 -binary | base64`, reemplazando TOKEN por el valor del token.

En el caso de PowerShell, puedes usar el script siguiente a fin de devolver un hash SHA-256 para una cadena determinada.

```shell{:copy}
Param (
    [Parameter(Mandatory=$true)]
    [string]
    $ClearString
)

$hasher = [System.Security.Cryptography.HashAlgorithm]::Create('sha256')
$hash = $hasher.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($ClearString))

$hashString = [System.BitConverter]::ToString($hash)
$hashString.Replace('-', '')
```

### Búsqueda en {% data variables.product.prodname_dotcom %}

Al buscar el registro de auditoría en {% data variables.product.prodname_dotcom %}, incluye `hashed_token:"VALUE"` en la consulta de búsqueda, reemplazando `VALUE` por el hash SHA-256 del token. 

{% note %}

**Nota**: Asegúrate de poner el valor del token con hash entre comillas.

{% endnote %}

### Búsqueda con la API REST

Para poder buscar un token mediante la API REST, después de generar un hash SHA-256, también debes aplicar una secuencia de escape de URI al hash. La mayoría de los lenguajes de programación principales proporcionan una utilidad para el escape de URI. Por ejemplo, [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) codifica una cadena para JavaScript.

Después, incluye `hashed_token:"VALUE"` en la frase de búsqueda, reemplazando VALUE por el hash de escape de URI. 

Por ejemplo, si el nombre de la cuenta de empresa es `octo-corp`, el comando curl siguiente buscaría en el registro de auditoría @octo-corp todos los eventos asociados al token cuyo hash SHA-256 codificado en URI es `EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8`.

```
curl --location --request GET 'https://api.github.com/enterprises/octo-corp/audit-log?phrase=hashed_token:"EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8"' \
--header 'Authorization: Basic TOKEN' \ 
```

## Información adicional

- "[Uso de la API de registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)"
