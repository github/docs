---
title: Просмотр журнала развертывания
shortTitle: View deployment history
intro: Просмотр текущих и предыдущих развертываний для репозитория.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
ms.openlocfilehash: d9c0baaea469586fe6e412999313839b3590fa59
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010016'
---
Развертывания можно доставлять с помощью {% data variables.product.prodname_actions %} и сред или с помощью REST API и сторонних приложений. {% ifversion fpt or ghae ghes > 3.0 or ghec %}Дополнительные сведения об использовании сред для развертывания вместе с {% data variables.product.prodname_actions %} см. в разделе [Использование сред для развертывания](/actions/deployment/using-environments-for-deployment). {% endif %}Дополнительные сведения о развертываниях с помощью REST API см. в разделе [Репозитории](/rest/reference/repos#deployments).

Чтобы просмотреть текущие и прошлые развертывания, щелкните **Среды** на домашней странице репозитория.
{% ifversion ghae %} ![Среды](/assets/images/enterprise/2.22/environments-sidebar.png){% else %} ![Среды](/assets/images/environments-sidebar.png){% endif %}

На странице развертываний отображается последнее активное развертывание каждой среды для репозитория. Если развертывание содержит URL-адрес среды, рядом с развертыванием отображается кнопка **Просмотреть развертывание**, которая содержит ссылку на URL-адрес.

В журнале действий отображается история развертываний в средах. По умолчанию только самое последнее развертывание среды имеет состояние `Active`; все ранее активные развертывания имеют состояние `Inactive`. Дополнительные сведения об автоматической деактивации развертываний см. в разделе [Неактивные развертывания](/rest/reference/deployments#inactive-deployments).

Для получения сведений о развертываниях можно также использовать REST API. Дополнительные сведения см. в разделе [Репозитории](/rest/reference/repos#deployments).
