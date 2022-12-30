---
title: Crear una insignia personalizada para tu GitHub App
intro: '{% data reusables.shortdesc.creating_custom_badges_github_apps %}'
redirect_from:
  - /apps/building-github-apps/creating-custom-badges-for-github-apps
  - /developers/apps/creating-a-custom-badge-for-your-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Custom badges
ms.openlocfilehash: df691669b42b0448f9979dec4bf25ca6c1ebf070
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117266'
---
De manera predeterminada, una nueva aplicación de GitHub tendrá un [icono de identidad](https://github.com/blog/1586-identicons) generado automáticamente.
Una insignia de identicon se ve más o menos así:

![Identicon](/assets/images/identicon.png)

Después de crear una GitHub App, puedes personalizar la insignia de tu app si subes un logo y seleccionas un color de fondo. Una insignia es una imagen de logo cuadrado dentro de una insignia circular. Puedes escoger un color de fondo para la insignia, el cual puede distinguir visualmente a tu app.

Tu logo debe ser un archivo en PNG, JPG, o GIF de menos de 1 MB de tamaño. Para obtener la mejor calidad, te recomendamos un tamaño de por lo menos 200px x 200px. {% ifversion fpt or ghec %}Vea "[Sugerencias para imágenes de logotipos y distintivos](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)" para obtener más instrucciones sobre cómo personalizar los distintivos.{% endif %}

{% ifversion fpt or ghec %}

Puede cambiar un distintivo personalizado para una aplicación de GitHub que ya tiene una oferta de Marketplace aprobada si va a https://github.com/marketplace/manage.

{% endif %}

Para crear una insignia personalizada:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. En "Mostrar información", arrastre y coloque una imagen desde una carpeta local, o bien haga clic en **Cargar un logotipo** para seleccionar una imagen en el equipo.
![Cargar un logotipo](/assets/images/github-apps/github_apps_upload_logo.png)
6. Recorta tu imagen. Cuando haya terminado, haga clic en **Establecer nuevo avatar**.
![Cortar y confirmar logotipo](/assets/images/github-apps/github_apps_crop_and_set_avatar.png)
7. En "Color de fondo del distintivo", escriba el [código de color hexadecimal](http://www.color-hex.com/) del color de fondo del distintivo. {% ifversion fpt or ghec %}**Nota:** El campo de entrada "Color de fondo del distintivo" solo aparecerá después de cargar un logotipo de aplicación.{% endif %} ![Color de fondo del distintivo](/assets/images/github-apps/github_apps_badge_background_color.png)

{% ifversion fpt or ghec %}

## Pasos siguientes

Para más información sobre cómo crear una oferta de Marketplace para esta aplicación, vea "[Ofertas en GitHub Marketplace](/marketplace/listing-on-github-marketplace/)".

{% endif %}
