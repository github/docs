---
title: Acerca del paquete de GitHub Desktop Windows Installer
intro: 'Como administrador de red puedes usar el archivo del paquete de Windows Installer (`.msi`) con Group Policiy u otro sistema de instalación remota para implementar {% data variables.product.prodname_desktop %} en las computadoras con Microsoft Windows en una red administrada de Active Directory.'
versions:
  free-pro-team: '*'
---

El paquete de Windows Installer extrae el instalador (`.exe`) independiente y configura Windows para que instale {% data variables.product.prodname_desktop %} cuando el próximo usuario inicie sesión en su estación de trabajo. Los usuarios deben tener permisos para instalar {% data variables.product.prodname_desktop %} en su directorio de usuario.

Si un usuario ejecuta el paquete de Windows Installer {% data variables.product.prodname_desktop %} directamente, deberá cerrar sesión y volver a su estación de trabajo para completar la instalación.
