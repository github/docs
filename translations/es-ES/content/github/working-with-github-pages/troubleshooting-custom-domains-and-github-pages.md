---
title: Solucionar problemas de dominios personalizados y Páginas de GitHub
intro: 'Puedes buscar errores comunes para resolver los problemas que existan con los dominios personalizados o HTTPS para tu sitio de {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/my-custom-domain-isn-t-working/
  - /articles/custom-domain-isn-t-working/
  - /articles/troubleshooting-custom-domains/
  - /articles/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - páginas
---

### Errores _CNAME_

Los dominios personalizados se almacenan en un archivo _CNAME_ en la raíz de tu fuente de publicación. Puedes agregar o actualizar este archivo a través de la configuración del repositorio o manualmente. Para obtener más información, consulta "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Para que tu sitio se represente en el dominio correcto, asegúrate de que el archivo _CNAME_ aún exista en el repositorio. Por ejemplo, muchos generadores de sitios estáticos realizan empujes forzados a tu repositorio, que pueden sobrescribir el archivo _CNAME_ que se agregó a tu repositorio cuando configuraste tu dominio personalizado. Si compilas tu sitio localmente y subes los archivos generados a {% data variables.product.product_name %}, asegúrate de extraer primero la confirmación que agregó el archivo _CNAME_ a tu repositorio local. De este modo, el archivo se incluirá en la compilación.

Luego, asegúrate de que el archivo _CNAME_ tenga el formato correcto.

- El nombre de archivo _CNAME_ debe estar todo en mayúsculas.
- El archivo _CNAME_ puede contener solo un dominio. Para apuntar múltiples dominios a tu sitio, debes configurar un redireccionamiento a través de tu proveedor DNS.
- La entrada _CNAME_ debe ser el dominio solo. Por ejemplo, `www.example.com`,`blog.example.com` o `example.com`.
- La entrada _CNAME_ solo se puede usar una vez en {% data variables.product.product_name %}. Por ejemplo, si el archivo _CNAME_ de otro repositorio contiene `example.com`, no puedes usar `example.com` en el archivo _CNAME_ para tu repositorio.

### Error de configuración DNS

Si tienes problemas para apuntar el dominio predeterminado para tu sitio a tu dominio personalizado, contáctate con tu proveedor DNS.

También puedes probar si los registros DNS de tu dominio personalizado están configurados correctamente. Para obtener más información, consulta "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

### Nombres de dominios personalizados que no son compatibles

Si tu dominio personalizado no es compatible, puede que debas cambiar tu dominio a un dominio compatible. También te puedes contactar con tu proveedor DNS para ver si ofrece servicios de reenvío para los nombres de dominio.

Asegúrate de que en tu sitio no ocurra lo siguiente:
- Uso de más de un dominio apex. Por ejemplo, `example.com` y `anotherexample.com`.
- Uso de más de un subdominio `www`. Por ejemplo, `www.example.com` y `www.anotherexample.com`.
- Uso de un dominio apex y de un subdominio personalizado. Por ejemplo, `example.com` y `docs.example.com`.

{% data reusables.pages.wildcard-dns-warning %}

Para obtener una lista de dominios personalizados que son compatibles, consulta "[Acerca de los dominios personalizados y de las {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages/#supported-custom-domains)".

### Errores HTTPS

A los sitios {% data variables.product.prodname_pages %} que utilizan dominios personalizados que no están configurados de manera correcta con _CNAME_, `ALIAS`, `ANAME` o registros DNS `A` se puede acceder por HTTPS. Para obtener más información, consulta "[Asegurar tu sitio de {% data variables.product.prodname_pages %} con HTTPS](/articles/securing-your-github-pages-site-with-https)".

Puede tardar hasta una hora que tu sitio se vuelva disponible a través de HTTPS una vez que configures tu dominio personalizado. Después de actualizar los ajustes DNS existentes, puede que debas eliminar y volver a agregar tu dominio personalizado a tu repositorio del sitio para activar el proceso de habilitación HTTPS. Para obtener más información, consulta "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Si estás usando registros de Autorización de la Autoridad de Certificación (CAA), debe existir al menos un registro CAA con el valor `letsencrypt.org` para que tu sitio sea accesible a través de HTTPS. Para obtener más información, consulta "[Autorización de la Autoridad de Certificado (CAA)](https://letsencrypt.org/docs/caa/)" en la documentación de Let's Encrypt.

### Formato de URL en Linux

Si la URL de tu sitio contiene un nombre de usuario o nombre de organización que comienza o termina con un guion, o que contiene guiones consecutivos, las personas que naveguen con Linux recibirán un error del servidor cuando traten de visitar tu sitio. Para corregir esto, cambia tu nombre de usuario de {% data variables.product.product_name %} y elimina cualquier caracter que no sea alfanumérico. Para obtener más información, consulta [Cambiar tu {% data variables.product.prodname_dotcom %} nombre de usuario](/articles/changing-your-github-username/)"

### Caché del navegador

Si has cambiado o eliminado recientemente tu dominio personalizado y no puedes acceder a la URL nueva en tu navegador, puede que debas limpiar el caché de tu navegador para llegar a la URL nueva. Para obtener más información acerca de limpiar tu caché, consulta la documentación de tu navegador.
