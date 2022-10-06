---
title: Solicitar un archivo de los datos de tu cuenta personal
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
  - /github/understanding-how-github-uses-and-protects-your-data/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user-settings.export-data %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Request account archive
ms.openlocfilehash: f296796810978f6d884fabc699c01fbc3eabf5eb
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879383'
---
{% data variables.product.product_name %} almacena metadatos del repositorio y del perfil desde tu actividad de cuenta personal. Puedes exportar tus datos de cuenta personal a través de los parámetros {% data variables.product.prodname_dotcom_the_website %} o con la API de migración de usuarios.

Para obtener más información acerca de los datos que {% data variables.product.product_name %} almacena y que están disponibles para la exportación, consulta "[Descarga de un archivo de migración de usuarios](/rest/reference/migrations#download-a-user-migration-archive)" y "[Acerca del uso que hace {% data variables.product.product_name %} de los datos](/articles/about-github-s-use-of-your-data).

Cuando solicites una exportación de tus datos personales mediante la configuración de {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.product_name %} empaqueta tus datos personales en un archivo `tar.gz` y te envía un correo electrónico a tu dirección de correo electrónico principal con un enlace de descarga.

Por defecto, el enlace de descarga vence después de siete días. En cualquier momento previo a que venza el enlace de descarga, puedes habilitar el enlace desde los parámetros del usuario. Para obtener más información, consulta "[Eliminación del acceso a un archivo de datos de tu cuenta personal](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data)".

Si tu sistema operativo no puede desempaquetar el archivo `tar.gz` de forma nativa, puedes utilizar una herramienta de terceros para extraer los archivos archivados. Para obtener más información, consulta "[Procedimientos para descomprimir un archivo tar.gz](https://opensource.com/article/17/7/how-unzip-targz-file)" en Opensource.com.

El archivo `tar.gz` generado refleja los datos almacenados en el momento que comenzaste la exportación de datos.

## Descargar un archivo de datos de tu cuenta personal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. En "Export account data" (Exportar datos de cuenta), haz clic en **Start export** (Iniciar exportación) o **New export** (Nueva exportación).
![Botón de iniciar exportación de datos personales resaltado](/assets/images/help/repository/export-personal-data.png)
![Botón de nueva exportación de datos personales resaltado](/assets/images/help/repository/new-export.png)
4. Una vez que la exportación esté lista para descargar, {% data variables.product.product_name %} te enviará un enlace de descarga a tu dirección principal de correo electrónico.
5. Haz clic en el enlace de descarga de tu correo electrónico y vuelve a ingresar tu contraseña, si se te solicita.
6. Se te redirigirá a un archivo `tar.gz` que puedes descargar.

## Eliminar acceso a un archivo de datos de tu cuenta personal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Para deshabilitar el enlace de descarga que se te envió al correo electrónico antes de que venza, en "Export account data" (Exportar datos de cuenta), encuentra la descarga de exportación de datos que quieres deshabilitar y haz clic en **Delete** (Eliminar).
![Botón de eliminar paquete de exportación de datos personales resaltado](/assets/images/help/repository/delete-export-personal-account-data.png)
