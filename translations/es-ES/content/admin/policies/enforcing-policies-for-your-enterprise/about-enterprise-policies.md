---
title: Acerca de las directivas empresariales
intro: 'Con las directivas empresariales, puedes administrar las directivas de todas las organizaciones que pertenecen a tu empresa.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Policies
ms.openlocfilehash: d452a6f24b3108b915e20b673ebd317a409ac8ae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718121'
---
Para ayudar a aplicar las reglas de negocio y el cumplimiento normativo, las directivas proporcionan un único punto de administración para todas las organizaciones que pertenecen a una cuenta empresarial. 

{% data reusables.enterprise.about-policies %}

Por ejemplo, con la directiva "Permisos básicos", puedes permitir que los propietarios de la organización configuren la directiva "Permisos básicos" para su organización, o bien puedes aplicar un nivel de permisos básicos específico, como "Lectura", para todas las organizaciones de la empresa.

De forma predeterminada, no se aplican directivas empresariales. Para identificar las directivas que se deben aplicar para cumplir los requisitos únicos de la empresa, te recomendamos que revises todas las directivas disponibles en tu cuenta empresarial, empezando por las directivas de administración de repositorios. Para obtener más información, consulta "[Aplicación de directivas de administración de repositorios en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)".

Mientras configuras las directivas empresariales, como ayuda para comprender el impacto que conlleva cambiar cada directiva, puedes consultar las configuraciones actuales de las organizaciones que pertenecen a tu empresa.

{% ifversion ghes %} Otra manera de aplicar estándares en la empresa consiste en usar enlaces de recepción previa, que son scripts que se ejecutan en {% data variables.product.product_location %} para implementar comprobaciones de calidad. Para obtener más información, consulta "[Aplicación de directivas con enlaces de recepción previa](/admin/policies/enforcing-policy-with-pre-receive-hooks)".
{% endif %}

## Información adicional

- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)"
