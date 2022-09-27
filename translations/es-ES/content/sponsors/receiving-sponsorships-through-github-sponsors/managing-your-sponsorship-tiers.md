---
title: Administrar tus niveles de patrocinio
intro: Puedes agregar un nuevo nivel de patrocinio o editar o retirar un nivel existente.
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
shortTitle: Manage payment tiers
ms.openlocfilehash: 4ff2d3731483075afc23da403e62f1682c6dd6c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139394'
---
## Acerca de los niveles de patrocinio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## Agregar un nivel

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. Si estás configurando niveles por primera vez, te recomendamos que revises los ejemplos de niveles sugeridos para ver cómo lotros contribuyetntes de código abierto configuraron {% data variables.product.prodname_sponsors %}. Decide siquieres iniciar con algunos niveles de borrador sugeridos, los cuales puedes personalizar en el editor de niveles.
   - Para utilizar un nivel sugerido, selecciona las contraseñas que te gustaría incluir en tu nivel o niveles de borrador. Después, haga clic en **Continue to tier editor**.
   - Para crear niveles sin usar ninguna de las sugerencias de borrador, haga clic en **Skip this step**.
   ![Opción "Skip this step" y botón "Continue to tier editor"](/assets/images/help/sponsors/tier-editor-button.png)
1. Opcionalmente, para editar un nivel de borrador, búsquelo y haga clic en **Edit**.
  ![Botón Edit junto al borrador de nivel](/assets/images/help/sponsors/draft-tier-edit.png) {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %}

## Editar o retirar un nivel

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %} {% note %}

  **Nota:** Para ver ideas de descripciones de nivel, desplácese hacia abajo.

  {% endnote %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.tier-update %} {% data reusables.sponsors.retire-tier %}

## Agregar un repositorio a un nivel de patrocinio

{% data reusables.sponsors.sponsors-only-repos %}

### Acerca de agregar los repositorios a un nivel de patrocinio

Para agregar un repositorio a un nivel, este debe ser privado y pertenecer a una organización y debes tener acceso administrativo al mismo.

Cuando agregas un repositorio a un nivel de patrocinio, {% data variables.product.company_short %} enviará invitaciones a este automáticamente a los patrocinadores nuevos y eliminará el acceso cuando se cancele un patrocinio. 

Solo se puede invitar a las cuentas personales a los repositorios privados asociados con un nivel de patrocinio, pero no a las organizaciones.

También puedes agregar o eliminar manualmente a los colaboradores del repositorio y {% data variables.product.company_short %} no anulará esto en la sincronización. 

### Acerca de las transferencias para los repositorios que se agregaron a los niveles de patrocinio

Si transfieres un repositorio que se agregó a un nivel de patrocinio, los patrocinadores que tienen acceso a este mediante su nivel podrían verse afectados.

- Si el perfil patrocinado es para una organización y el repositorio se transfiere a una diferente, los patrocinadores actuales se transferirán, pero los nuevos no se agregarán. El propietario nuevo del repositorio puede eliminar a los patrocinadores existentes.
- Si el perfil patrocinado es para una cuenta personal, el repositorio se transferirá a una organización y la cuenta personal tendrá acceso administrativo al repositorio nuevo, los patrocinadores existentes se transferirán y los nuevos seguirán agregándose a dicho repositorio.
- Si el repositorio se transfiere a una cuenta personal, todos los patrocinadores se eliminarán y aquellos nuevos no se agregarán a este.

### Agregar un repositorio a un nivel de patrocinio

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %}
1. Seleccione **Grant sponsors access to a private repository**.

   ![Captura de pantalla de la casilla de verificación para otorgar acceso a los patrocinadores para un repositorio privado](/assets/images/help/sponsors/grant-sponsors-access-to-repo-checkbox.png)

1. Selecciona el menú desplegable y haz clic en el repositorio que quieras agregar.

   ![Captura de pantalla del menú desplegable para elegir el repositorio al cual obtendrán acceso los patrocinadores](/assets/images/help/sponsors/grant-sponsors-access-to-repo-dropdown.png)

{% data reusables.sponsors.tier-update %}

## Habilitar niveles con cantidades personalizadas

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.enable-custom-amounts %}

## Inhabilitar niveles con cantidades personalizadas

Para deshabilitar niveles con cantidades personalizadas, anule la selección de la opción **Enable custom amounts** en la pestaña **Sponsor tiers**. Si deshabilita las cantidades personalizadas, se retirarán todos los niveles personalizados.
