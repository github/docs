---
title: Cambiar la visibilidad de la información de dependencias de la organización
intro: Puedes permitir que todos los miembros de la organización vean información de dependencias para tu organización o limiten la visualización de los propietarios de la organización.
redirect_from:
  - /articles/changing-the-visibility-of-your-organizations-dependency-insights
  - /github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Change insight visibility
ms.openlocfilehash: f6647993672ee56de8c1b8698b1fcdb0dc84147f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '145109761'
---
Los propietarios de la organización pueden establecer limitaciones para ver la información de dependencias de la organización. De manera predeterminada, todos los miembros de una organización pueden ver información de la dependencia de la organización.

{% ifversion ghec %} Los propietarios de la empresa pueden establecer limitaciones para ver conclusiones de las dependencias de la organización en todas las organizaciones de la cuenta de empresa. Para más información, vea "[Aplicación de directivas para conclusiones de dependencias en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)".
{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. En "Permisos para miembros de la organización", seleccione o anule la selección de **Permitir que los miembros vean conclusiones de dependencias**.
![Casilla para permitir que los miembros vean conclusiones](/assets/images/help/organizations/allow-members-to-view-insights.png)
6. Haga clic en **Save**(Guardar).
