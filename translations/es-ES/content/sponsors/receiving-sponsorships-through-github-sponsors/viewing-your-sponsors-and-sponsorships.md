---
title: Ver tus patrocinadores y patrocinios
intro: Puedes ver y exportar la información detallada y la analítica de tus patrocinadores y patrocinios.
redirect_from:
  - /articles/viewing-your-sponsors-and-sponsorships
  - /github/supporting-the-open-source-community-with-github-sponsors/viewing-your-sponsors-and-sponsorships
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Analytics
shortTitle: View sponsors & sponsorships
ms.openlocfilehash: 33c45171d28b77c302a04f734342b05beb04be1e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145140194'
---
## Acerca de los patrocinadores y los patrocinios

Puedes ver la analítica de tus patrocinios actuales y pasados, los pagos que has recibido de tus patrocinadores, y los eventos tales como las cancelaciones y cambios de nivel de patrocinio para tus patrocinios. También puedes ver la actividad tal como los nuevos patrocinios, cambios, y cancelaciones de los mismos. Puedes filtrar la lista de actividades por fecha. También puedes exportar datos del patrocinio en formato CSV o JSON para la cuenta que estás viendo.

## Acerca de los metadatos de las transacciones

Para rastrear de dónde vienen tus patrocinios, puedes utilizar las URL personalizadas con metadatos para tu perfil de {% data variables.product.prodname_sponsors %} o página de verificación. Los metadatos se incluirán en tu exportación de transacciones en la columna de metadatos. Para más información sobre cómo exportar datos de transacción, vea "[Exportación de los datos de patrocinio](#exporting-your-sponsorship-data)".

Los metadatos deben utilizar el formato `key=value` y se pueden agregar al final de estas URL.

- Perfil de cuenta patrocinada: `https://github.com/sponsors/{account}`
- Finalización de la compra del patrocinio: `https://github.com/sponsors/{account}/sponsorships`

Los metadatos persistirán en la URL conforme el patrocinador potencial cambie la cuenta con la cual patrocina, seleccione pagos mensuales o de una sola ocasión y elija un nivel diferente.

### Requisitos de la sintaxis

Tus metadatos deben cumplir con los siguientes requisitos, los cuales no aplican a ningún otro parámetro de la URL que se pase.

- Las claves deben tener el prefijo `metadata_`, como `metadata_campaign`. En la exportación de transacciones, el prefijo `metadata_` se eliminará de la clave.
- Las llaves y los valores solo deben contener valores alfanuméricos, diagonales o guiones bajos. Si se pasan caracteres inaceptables en cualquiera de las llaves o valores, se presentará un error 404.
- No se permiten los espacios en blanco.
- Se aceptan un máximo de **10** pares clave-valor por solicitud. Si se pasan más, solo se guardarán los primeros 10.
- Se aceptan un máximo de **25** caracteres por clave. Si se pasan más de estos, solo se guardarán los primeros 25.
- Se aceptan un máximo de **100** caracteres por valor. Si se pasan más, solo se guardarán los primeros 100.

Por ejemplo, puede usar `https://github.com/sponsors/{account}?metadata_campaign=myblog` para realizar el seguimiento de los patrocinios que se originan en su blog. `metadata_campaign` es la clave y `myblog` es el valor. En la columna de metadatos de la exportación de transacciones, la clave se mostrará como `campaign`.

## Ver tus patrocinadores y patrocinios

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. Opcionalmente, para filtrar los patrocinadores por nivel, use el menú desplegable **Filtro**, haga clic en **Niveles activos** o **Niveles retirados**, y seleccione un nivel.
  ![Menú desplegable para filtrar por nivel](/assets/images/help/sponsors/filter-drop-down.png)

## Visualizar la actividad de patrocinio reciente

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}

## Exportar tus datos de patrocinio

Puedes exportar tus transacciones de patrocinio mensualmente. {% data variables.product.company_short %} te enviará un correo electrónico con los datos de las transacciones de todos tus patrocinadores para el mes que selecciones. Después de que se complete la exportación, puedes exportar otor mes de datos. Puedes exportar hasta 10 conjuntos de datos por hora para cualquiera de tus cuentas patrocinadas.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}
1. En la esquina superior derecha, haz clic en {% octicon "download" aria-label="The download icon" %} **Export** (Exportar).
  ![Botón Exportar](/assets/images/help/sponsors/export-all.png)
1. Elija un periodo de tiempo y un formato para los datos que quiera exportar y, después, haga clic en **Iniciar exportación**.
  ![Opciones para exportar datos](/assets/images/help/sponsors/export-your-sponsors.png)
