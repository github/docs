---
title: Crear una insignia personalizada para tu App de OAuth
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Create custom badges
ms.openlocfilehash: b9f5b8048b14c11e7eb0c43a88a18b3a63ca5f34
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878539'
---
De manera predeterminada, una aplicación nueva de OAuth tendrá un [icono de identidad](https://github.com/blog/1586-identicons) generado automáticamente.
Una insignia de identicon se ve más o menos así:

![Identicon](/assets/images/identicon.png)

Después de que crees una App de OAuth, podrás personalizar la insignia de la misma si cargas un logo y seleccionas un color de fondo. Una insignia es una imagen de logo cuadrado dentro de una insignia circular. Puedes elegir un color de fondo para la insignia, la cual puede utilizarse para distinguir a tu app visualmente.

Tu logo debe ser un archivo en PNG, JPG, o GIF de menos de 1 MB de tamaño. Para obtener la mejor calidad, te recomendamos un tamaño de por lo menos 200px x 200px. {% ifversion fpt or ghec %}Vea "[Sugerencias para imágenes de logotipos y distintivos](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)" para obtener más instrucciones sobre cómo personalizar los distintivos.{% endif %}

{% ifversion fpt or ghec %}

Puede cambiar un distintivo personalizado para una aplicación de GitHub que ya tiene una oferta de Marketplace aprobada si va a https://github.com/marketplace/manage.

{% endif %}

Para crear una insignia personalizada:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %} {% data reusables.user-settings.modify_oauth_app %}
1. En "Logotipo de la aplicación", arrastre y coloque una imagen desde una carpeta local, o bien haga clic en **Cargar un nuevo logotipo** para seleccionar una imagen en el equipo.
![Carga de un logotipo](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. Recorta tu imagen. Cuando haya terminado, haga clic en **Establecer nuevo logotipo de aplicación**.
![Recorte y confirmación del logotipo](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. En "Color de fondo del distintivo", escriba el [código de color hexadecimal](http://www.color-hex.com/) del color de fondo del distintivo. {% ifversion fpt or ghec %}**Nota:** El campo de entrada "Color de fondo del distintivo" será visible después de cargar un logotipo de aplicación.{% endif %} ![Color de fondo del distintivo](/assets/images/oauth-apps/oauth_apps_badge_background_color.png) {% data reusables.user-settings.update_oauth_app %}

{% ifversion fpt or ghec %}

## Pasos siguientes

Para más información sobre cómo crear una oferta de Marketplace para esta aplicación, vea "[Ofertas en GitHub Marketplace](/marketplace/listing-on-github-marketplace/)".

{% endif %}
