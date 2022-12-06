---
title: Procedimientos recomendados para empresas
shortTitle: Best practices
intro: 'Obtén información sobre los procedimientos recomendados por {% data variables.product.company_short %} para la empresa.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 9c9ccfb0437b451188f8180dcf5ae29a6030f72d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163455'
---
{% ifversion ghec %}
## Identificar el mejor método de autenticación para la empresa

{% data reusables.enterprise.ghec-authentication-options %}

Para obtener ayuda para identificar el método de autenticación que mejor se adapte a tus necesidades, consulta "[Acerca de la autenticación para la empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)". {% endif %}

## Uso de directivas

Se recomienda usar directivas para aplicar reglas de negocios y cumplimiento normativo. 

{% data reusables.enterprise.about-policies %} Para más información, consulta "[Acerca de las directivas empresariales](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)".

## Minimizar el número de organizaciones

A menudo, las grandes empresas necesitan varias organizaciones, pero intenta crear las menos posible para reflejar las divisiones corporativas de nivel superior. Un número menor de organizaciones fomenta las prácticas de recursos internos y permite que los debates impliquen a un público más amplio.

En su lugar, puedes administrar los requisitos de acceso y seguridad del repositorio en un nivel más granular dentro de cada organización mediante equipos. Para más información, vea "[Acerca de los equipos](/organizations/organizing-members-into-teams/about-teams)".

## Evitar una colaboración extensa en repositorios propiedad del usuario

Se recomienda colaborar en repositorios propiedad de la organización siempre que sea posible y minimizar la colaboración en repositorios propiedad del usuario. Los repositorios propiedad de la organización tienen características administrativas y de seguridad más sofisticadas, y siguen siendo accesibles incluso cuando cambian las pertenencias a la empresa.

## Usar nombres de usuario legibles

{% ifversion ghec %}Si controlas los nombres de usuario para los miembros de la empresa, usa{% else %}Usa{% endif %} nombres de usuario legibles por personas y evita los id. generados por la máquina que sean difíciles de leer para los humanos.

Puedes administrar la visualización de nombres de usuario en los repositorios privados de la empresa. Para obtener más información, consulta "[Administrar la visualización de los nombres de los miembros en tu organización](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)".

## Información adicional

- "[Procedimientos recomendados para repositorios](/repositories/creating-and-managing-repositories/best-practices-for-repositories)"
- "[Procedimientos recomendados para organizaciones](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)"
