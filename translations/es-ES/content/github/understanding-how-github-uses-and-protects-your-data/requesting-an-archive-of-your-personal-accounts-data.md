---
title: Solicitar un archivo de tus datos de cuenta personal
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user_settings.export-data %}'
versions:
  free-pro-team: '*'
topics:
  - política
  - legal
---

{% data variables.product.product_name %} almacena metadatos del repositorio y del perfil desde tu actividad de cuenta personal. Puedes exportar tus datos de cuenta personal a través de los parámetros {% data variables.product.prodname_dotcom_the_website %} o con la API de migración de usuarios.

Para obtener más información, acerca de los datos que almacena {% data variables.product.product_name %} y que está disponible para exportarse, consulta las secciones "[Descargar el archivo de migración de un usuario](/rest/reference/migrations#download-a-user-migration-archive)" y "[Acerca del uso de {% data variables.product.product_name %} para tus datos](/articles/about-github-s-use-of-your-data).

Cuando solicites una exportación de tus datos personales a través de los parámetros de {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.product_name %} comprime tus datos personales en un archivo `tar.gz` y te envía un correo electrónico a tu dirección principal de correo electrónico con un enlace de descarga.

Por defecto, el enlace de descarga vence después de siete días. En cualquier momento previo a que venza el enlace de descarga, puedes habilitar el enlace desde los parámetros del usuario. Para obtener más información, consulta "[Eliminar el acceso a un archivo de datos de tu cuenta personal](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data)".

Si tu sistema operativo no puede descomprimir el archivo `tar.gz` de forma nativa, puedes utilizar una herramienta de terceros para extraer los archivos archivados. Para obtener más información, consulta "[Cómo descomprimir un tar.gz file](https://opensource.com/article/17/7/how-unzip-targz-file)" en Opensource.com.

El archivo `tar.gz` generado refleja los datos almacenados en el momento que comenzaste la exportación de datos.

### Descargar un archivo de datos de tu cuenta personal

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. En "Export account data" (Exportar datos de cuenta), haz clic en **Start export** (Comenzar exportación) o **New export** (Nueva exportación). ![Botón Start personal data export (Comenzar exportación de datos personales) resaltado](/assets/images/help/repository/export-personal-data.png) ![Botón New personal data export (Nueva exportación de datos personales) resaltado](/assets/images/help/repository/new-export.png)
4. Una vez que la exportación esté lista para descargar, {% data variables.product.product_name %} te enviará un enlace de descarga a tu dirección principal de correo electrónico.
5. Haz clic en el enlace de descarga de tu correo electrónico y vuelve a ingresar tu contraseña, si se te solicita.
6. Serás redirigido a un archivo `tar.gz` que podrás descargar.

### Eliminar acceso a un archivo de datos de tu cuenta personal

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Para inhabilitar el enlace de descarga que se te envió al correo electrónico antes de que venza, en "Export account data" (Exportar datos de cuenta), encuentra la descarga de exportación de datos que quieres inhabilitar y haz clic en **Delete** (Eliminar). ![Botón Delete personal data export package (Eliminar paquete de exportación de datos personales) resaltado](/assets/images/help/repository/delete-export-personal-account-data.png)
