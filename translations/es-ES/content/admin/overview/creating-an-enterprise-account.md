---
title: Crear una cuenta empresarial
intro: 'Si actualmente utilizas {% data variables.product.prodname_ghe_cloud %} con una sola organización, puedes crear una cuenta empresarial para administrar varias organizaciones centralmente.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: Create enterprise account
ms.openlocfilehash: a264a5a1ca3e7461c8e05fc02e93064737d79940
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573405'
---
## Acerca de la creación de cuentas empresariales

{% data variables.product.prodname_ghe_cloud %} incluye la opción de crear una cuenta empresarial, la cual habilita la colaboración entre organizaciones múltiples y otorga a los administradores un punto sencillo de visibilidad y administración. Para más información, vea "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)".

{% data reusables.enterprise.create-an-enterprise-account %} Si pagas por factura, tú mismo puedes crear una cuenta empresarial en {% data variables.product.prodname_dotcom %}. Si no es así, puedes [ponerte en contacto con nuestro equipo de ventas](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards) para crear una cuenta empresarial.

Se incluye una cuenta empresarial con {% data variables.product.prodname_ghe_cloud %}. La creación de una cuenta de empresa no genera cargos adicionales en la factura.

Cuando creas una cuenta de empresa propietaria de tu organización existente en {% data variables.product.product_name %}, los recursos de la organización permanecen accesibles para los miembros en las mismas direcciones URL. Después de agregar tu organización a la cuenta de empresa, se aplicarán los siguientes cambios a la organización.

- Tu organización existente pertenecerá automáticamente a la cuenta empresarial.
- {% data variables.product.company_short %} factura a la cuenta de empresa su uso en todas las organizaciones que pertenecen a la empresa. Los detalles de facturación actuales de la organización, incluida la dirección de correo electrónico de facturación de la organización, serán también los detalles de facturación de la nueva cuenta empresarial. Para obtener más información, consulta "[Acerca de la facturación de la empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
- Todos los propietarios actuales de tu organización se convertirán en propietarios de la cuenta empresarial, y todos los administradores de facturación actuales de la organización se convertirán en administradores de facturación de la nueva cuenta empresarial. Para más información, vea "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

Para obtener más información sobre los cambios que se aplican a una organización después de agregar la organización a una empresa, consulta «[Agregar organizaciones a tu empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account)».

## Crear una cuenta empresarial en {% data variables.product.prodname_dotcom %}

Para crear una cuenta empresarial, tu organización debe usar {% data variables.product.prodname_ghe_cloud %}.

Si pagas por factura, puedes crear una cuenta empresarial directamente mediante {% data variables.product.prodname_dotcom %}. Si actualmente no pagas por factura, puedes [ponerte en contacto con nuestro equipo de ventas](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards) para crear una cuenta empresarial.


{% data reusables.organizations.billing-settings %}
1. Haga clic en **Actualizar a cuenta de empresa**.

   ![Captura de pantalla del botón "Actualizar a una cuenta de empresa"](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. Debajo de "Nombre de empresa", teclea un nombre para tu cuenta empresarial.

   ![Captura de pantalla del campo "Nombre de empresa"](/assets/images/help/business-accounts/enterprise-name-field.png)
1. Debajo de "slug de la URL empresarial", teclea el slug para tu cuenta empresarial. Este slug se utilizará en la URL de tu empresa. Por ejemplo, si elige `octo-enterprise`, la dirección URL de la empresa será `https://github.com/enterprises/octo-enterprise`.

   ![Captura de pantalla del campo "Enterprise URL slug"](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. Haga clic en **Confirmar y actualizar**.

   ![Captura de pantalla del botón "Confirmar y actualizar"](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. Lea las advertencias y, después, haga clic en **Crear cuenta de empresa**.

   ![Captura de pantalla del botón "Crear cuenta de empresa"](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## Pasos siguientes

Después de que se cree tu cuenta empresarial, te recomendamos aprender más sobre cómo funcionan las cuentas empresariales y cómo configurar ajustes y políticas. Para más información, siga la ruta de aprendizaje "[Primeros pasos con la cuenta de empresa](/admin/guides#get-started-with-your-enterprise-account)".
