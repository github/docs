---
title: Clés GPG
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0781b20628b48b9ca5d411ead6f3ddf1bcd1c6d4
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147877183'
---
## À propos de l’API Clés GPG d’utilisateur

Les données retournées dans le champ de réponse `public_key` ne sont pas une clé mise en forme GPG. Lorsqu’un utilisateur charge une clé GPG, elle est analysée, et la clé publique de chiffrement est extraite et stockée. Cette clé de chiffrement est ce qui est retourné par les API sur cette page. Cette clé n’est pas appropriée pour être utilisée directement par des programmes comme GPG.

{% data reusables.user-settings.user-api %}
