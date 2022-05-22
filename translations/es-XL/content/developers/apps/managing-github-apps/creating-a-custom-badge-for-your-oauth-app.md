---
title: Crear una insignia personalizada para tu App de OAuth
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---
Predeterminadamente, una App de OAuth nueva tendrá un [identicon](https://github.com/blog/1586-identicons) que se genera automáticamente. Una insignia de identicon se ve más o menos así:

![Identicon](/assets/images/identicon.png)

Después de que crees una App de OAuth, podrás personalizar la insignia de la misma si cargas un logo y seleccionas un color de fondo. Una insignia es una imagen de logo cuadrado dentro de una insignia circular. Puedes elegir un color de fondo para la insignia, la cual puede utilizarse para distinguir a tu app visualmente.

Tu logo debe ser un archivo en PNG, JPG, o GIF de menos de 1 MB de tamaño. Para obtener la mejor calidad, te recomendamos un tamaño de por lo menos 200px x 200px. {% if currentVersion == "free-pro-team@latest" %}Consulta la sección "[Tips para las imagenes de logos e insignias](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)" para obtener lineamientos adicionales sobre la personalización de insignias.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

Puedes cambiar una insignia personalizada para una GitHub App que ya tenga una lista de Marketplace aprobada si navegas a https://github.com/marketplace/manage.

{% endif %}

Para crear una insignia personalizada:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.user-settings.modify_oauth_app %}
5. En la zona de "Logo de la aplicación", arrastra y suelta una imagen de alguna carpeta local, o da clic en **Cargar logo nuevo** para seleccionar una imagen de tu ordenador. ![Cargar un logo](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. Recorta tu imagen. Cuando hayas terminado, da clic en **Configurar nuevo logo de la aplicación**. ![Cortar y confirmar logo](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. En "Color de fondo de la insignia", teclea el [código hexadecimal de color](http://www.color-hex.com/) para el color de fondo de tu insignia.
{% if currentVersion == "free-pro-team@latest" %}**Nota:** El campo de entrada de "Color de fondo de la insignia" se podrá visualizar después de que se haya cargado el logo de una aplicación.{% endif %}
![Color de fondo de la insignia](/assets/images/oauth-apps/oauth_apps_badge_background_color.png)
{% data reusables.user-settings.update_oauth_app %}

{% if currentVersion == "free-pro-team@latest" %}

### Pasos siguientes

Para obtener más información acerca de cómo crear un listado de Marketplace para esta app, consulta la sección "[Listados en GitHub Marketplace](/marketplace/listing-on-github-marketplace/)".

{% endif %}
