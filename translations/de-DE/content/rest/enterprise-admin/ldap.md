---
title: LDAP
intro: 'Mit der LDAP-API kannst du Kontobeziehungen zwischen einem {% data variables.product.product_name %}-Benutzer oder -Team und seinem verknüpften LDAP-Eintrag aktualisieren oder eine neue Synchronisierung in die Warteschlange stellen.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0948fbf02aea86d01a7034ae6b1836c0f69ca6e2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065338'
---
Mit den LDAP-Zuordnungsendpunkten kannst du den Distinguished Name (DN) aktualisieren, dem ein Benutzer oder Team zugeordnet ist. Beachte, dass die LDAP-Endpunkte im Allgemeinen nur wirksam sind, wenn für deine {% data variables.product.product_name %}-Appliance die [LDAP-Synchronisierung aktiviert](/enterprise/admin/authentication/using-ldap) ist. Die [Update-LDAP-Zuordnung für einen Benutzerendpunkt](#update-ldap-mapping-for-a-user) kann verwendet werden, wenn LDAP aktiviert ist, auch wenn die LDAP-Synchronisierung deaktiviert ist.
