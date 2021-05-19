---
title: Acerca de los dominios personalizados y las Páginas de GitHub
intro: '{% data variables.product.prodname_pages %} respalda el uso de dominios personalizados o el cambio la raíz de la URL del sitio desde el valor predeterminado, como `octocat.github.io`, para cualquier dominio que posea.'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites/
  - /articles/about-supported-custom-domains/
  - /articles/custom-domain-redirects-for-your-github-pages-site/
  - /articles/about-custom-domains-and-github-pages
  - /github/working-with-github-pages/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
---
### Dominios personalizados compatibles

{% data variables.product.prodname_pages %} trabaja con dos tipos de dominios: subdominios y dominios apex. Para conocer un lista de los dominios personalizados compatibles, consulta "[Solución de problemas de dominios personalizados y {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported)".

| Tipo de dominio personalizado compatible | Ejemplo            |
| ---------------------------------------- | ------------------ |
| Subdominio `www`                         | `www.example.com`  |
| Subdominio personalizado                 | `blog.example.com` |
| Dominio apex                             | `example.com`      |

Puedes configurar uno o ambos tipos de dominios personalizados para tu sitio. Recomendamos siempre usar un subdominio `www`, incluso si también usas un dominio apex. Para obtener más información, consulta "[Usar un dominio apex para tu sitio {% data variables.product.prodname_pages %} site](#using-an-apex-domain-for-your-github-pages-site)".

Después de que configuras un dominio personalizado para un usuario o sitio de organización, el dominio personalizado reemplazará a la porción de `<user>.github.io` o `<organization>.github.io` de la URL para cualquier sitio de proyecto que pertenezca a la cuenta que no haya configurado un dominio personalizado. Por ejemplo, si el dominio personalizado para tu sitio de usuario es `www.octocat.com`, y tienes un sitio de proyecto sin un dominio personalizado configurado que se publica desde un repositorio denominado `octo-project`, el sitio {% data variables.product.prodname_pages %} para ese repositorio estará disponible en `www.octocat.com/octo-project`.

### Uso de un subdominio para tu sitio {% data variables.product.prodname_pages %}

Un subdominio es la parte de una URL antes del dominio raíz. Puedes configurar tu subdominio como `www` o como una sección distinta de tu sitio, como `blog.example.com`.

Los subdominios se configuran con un registro `CNAME` a través de su proveedor DNS. Para obtener más información, consulta "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)".

#### Subdominios `www`

Un subdominio `www` es el tipo de subdominio más usado comúnmente. Por ejemplo, `www.example.com` incluue un subdominio `www`.

Los subdominios `www` son el tipo de dominio personalizado m ás estable porque los subdominios `www` no están afectados por los cambios en las direcciones IP de los servidores de {% data variables.product.product_name %}. Tu sitio también se cargará más rápido porque la protección del ataque de denegación de servicio (DoS) puede implementarse de forma más eficiente.

#### Subdominios personalizados

Un subdominio personalizado es un tipo de subdominio que no usa el subdominio `www` estándar. Los subdominios personalizados se utilizan principalmente cuando se necesitan dos secciones distintas de su sitio. Por ejemplo, puedes crear un sitio llamado `blog.example.com` y personalizar esa sección independientemente de `www.example.com`.

### Uso de un dominio apex para tu sitio {% data variables.product.prodname_pages %}

Un dominio apex es un dominio personalizado que no contiene un subdominio, como `ejemplo.com`. Los dominios apex también son conocidos como dominios apex base, vacíos, desnudos, o de zona.

Un dominio apex está configurado con un registro `A`, `ALIAS` o `ANAME` a través de su proveedor DNS. Para obtener más información, consulta "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)".

{% data reusables.pages.www-and-apex-domain-recommendation %}

### Actualizar dominios personalizados cuando tu sitio de {% data variables.product.prodname_pages %} está inhabilitado

Si tu sitio {% data variables.product.prodname_pages %} no está habilitado pero tiene configurado un dominio personalizado, inmediatamente deberías actualizar o eliminar tus registros de DNS para evitar el riesgo de una adquisición de dominio. La configuración de tu dominio personalizado con tu proveedor DNS mientras tu sitio está inhabilitado, podría hacer que alguien más aloje un sitio en un o de tus subdominios. Para obtener más información, consulta "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Existen algunos motivos por los que tu sitio pueda estar inhabilitado automáticamente.

- Si bajaste de categoría de {% data variables.product.prodname_pro %} a {% data variables.product.prodname_free_user %}, todos los sitios de {% data variables.product.prodname_pages %} que se publicaron actualmente desde repositorios privados en tu cuenta quedarán sin publicar. Para obtener más información, consulta "[Bajar de categoría tu plan de facturación de {% data variables.product.prodname_dotcom %}](/articles/downgrading-your-github-billing-plan)".
- Si transfieres a un repositorio privado a una cuenta personal que está usando {% data variables.product.prodname_free_user %}, el repositorio perderá acceso a la función de {% data variables.product.prodname_pages %}, y el sitio de {% data variables.product.prodname_pages %} actualmente publicado, quedará sin publicar. Para obtener más información, consulta "[Transferir un repositorio](/articles/transferring-a-repository).

### Leer más

- "[Solución de problemas de dominios personalizados y {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)"
