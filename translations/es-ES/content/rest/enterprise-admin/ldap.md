---
title: LDAP
intro: 'Puedes utilizar la API de LDAP para actualizar las relaciones de cuenta entre un usuario de {% data variables.product.product_name %} o un equipo y su entrada enlazada de LDAP o poner en cola una sincronización nueva.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0948fbf02aea86d01a7034ae6b1836c0f69ca6e2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065342'
---
Con las terminales de mapeo de LDAP, puedes actualizar el Nombre Distintivo (DN, por sus siglas en inglés) al cual mapea un usuario o equipo. Tenga en cuenta que los puntos de conexión LDAP suelen ser eficaces solo si el dispositivo {% data variables.product.product_name %} tiene [habilitada la sincronización LDAP](/enterprise/admin/authentication/using-ldap). La [Actualización de la asignación LDAP para un punto de conexión de usuario](#update-ldap-mapping-for-a-user) se puede usar cuando LDAP está habilitado, incluso si la sincronización LDAP está deshabilitada.
