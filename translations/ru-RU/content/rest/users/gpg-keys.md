---
title: Ключи GPG
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879173'
---
## Сведения об API ключей GPG пользователя

Данные, возвращаемые в поле ответа `public_key`, не являются ключом в формате GPG. Когда пользователь отправляет ключ GPG, он анализируется и криптографический открытый ключ извлекается и сохраняется. Этот криптографический ключ возвращается API на этой странице. Этот ключ не подходит для непосредственного использования программами как GPG.

{% data reusables.user-settings.user-api %}
