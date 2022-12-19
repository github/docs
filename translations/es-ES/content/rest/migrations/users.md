---
title: Migraciones de usuario
allowTitleToDifferFromFilename: true
shortTitle: Users
intro: ''
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 500f1c4d73dc3bab613641072387e42d5f8894d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126061'
---
## Acerca de User migrations API

Users migrations API solo está disponible para los propietarios de cuentas autenticadas. Para obtener más información, consulta "[Otros métodos de autenticación](/rest/overview/other-authentication-methods)".

{% data variables.migrations.user_migrations_intro %} Para obtener una lista de los datos de migración que puedes descargar, consulta "[Descarga de un archivo de migración de usuario](#download-a-user-migration-archive)".

Antes de descargar un archivo deberás iniciar la migración del usuario. Una vez que el estado de la migración sea `exported`, puedes descargar la migración.

Ya que hayas creado el archivo de migración, este estará disponible para su descarga por siete días. Pero puedes borrar el archivo de migración del usuario antes si lo prefieres. Puedes desbloquear tu repositorio cuando la migración aparezca como `exported` para comenzar a utilizar tu repositorio nuevamente o borrarlo si ya no necesitas los datos de origen.
