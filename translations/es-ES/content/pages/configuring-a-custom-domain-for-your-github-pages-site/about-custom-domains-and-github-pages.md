---
title: Acerca de los dominios personalizados y las Páginas de GitHub
intro: '{% data variables.product.prodname_pages %} respalda el uso de dominios personalizados o el cambio la raíz de la URL del sitio desde el valor predeterminado, como `octocat.github.io`, para cualquier dominio que poseas.'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites
  - /articles/about-supported-custom-domains
  - /articles/custom-domain-redirects-for-your-github-pages-site
  - /articles/about-custom-domains-and-github-pages
  - /github/working-with-github-pages/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Custom domains in GitHub Pages
ms.openlocfilehash: a2c5ae3df0e2dd6248db6e03fd7c64e973b14f3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145140373'
---
## Dominios personalizados compatibles

{% data variables.product.prodname_pages %} trabaja con dos tipos de dominios: subdominios y dominios apex. Para obtener una lista de dominios personalizados no admitidos, vea "[Solución de problemas de dominios personalizados y {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported)".

| Tipo de dominio personalizado compatible | Ejemplo |
|---|---|
| Subdominio `www` | `www.example.com` |
| Subdominio personalizado | `blog.example.com` |
| Dominio de Apex        | `example.com` |

Puede establecer una de las configuraciones de subdominio de vértice y `www`, o las dos, para el sitio. Para más información sobre los dominios de vértice, vea "[Uso de un dominio de vértice para el sitio de {% data variables.product.prodname_pages %}](#using-an-apex-domain-for-your-github-pages-site)".

Se recomienda usar siempre un subdominio `www`, incluso si también se utiliza un dominio de vértice. Al crear un sitio con un dominio de vértice, intentaremos asegurar el subdominio `www` de forma automática para que lo use al entregar el contenido del sitio, pero tendrá que realizar los cambios de DNS para usar el subdominio `www`. Si configura un subdominio de `www`, intentamos proteger de forma automática el dominio de vértice asociado. Para más información, vea "[Administración de un dominio personalizado para el sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Después de configurar un dominio personalizado para un sitio de usuario u organización, el dominio personalizado reemplazará la parte `<user>.github.io` o `<organization>.github.io` de la dirección URL de los sitios de proyecto propiedad de la cuenta que no tengan configurado un dominio personalizado. Por ejemplo, si el dominio personalizado para el sitio de usuario es `www.octocat.com` y tiene un sitio de proyecto sin ningún dominio personalizado configurado que se publique desde un repositorio denominado `octo-project`, el sitio de {% data variables.product.prodname_pages %} para ese repositorio estará disponible en `www.octocat.com/octo-project`.

## Uso de un subdominio para tu sitio {% data variables.product.prodname_pages %}

Un subdominio es la parte de una URL antes del dominio raíz. Puede configurar el subdominio como `www` o como una sección distintiva del sitio, como `blog.example.com`.

Los subdominios se configuran con un registro `CNAME` por medio del proveedor DNS. Para más información, vea "[Administración de un dominio personalizado para el sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)".

### Subdominios `www`

`www` es el tipo de subdominio más usado. Por ejemplo, `www.example.com` incluye un subdominio `www`.

Los subdominios `www` son el tipo de dominio personalizado más estable porque los subdominios `www` no se ven afectados por los cambios en las direcciones IP de los servidores de {% data variables.product.product_name %}.

### Subdominios personalizados

Un subdominio personalizado es un tipo de subdominio que no usa la variante `www` estándar. Los subdominios personalizados se utilizan principalmente cuando se necesitan dos secciones distintas de su sitio. Por ejemplo, puede crear un sitio denominado `blog.example.com` y personalizar esa sección de manera independiente a `www.example.com`.

## Uso de un dominio apex para tu sitio {% data variables.product.prodname_pages %}

Un dominio de vértice es un dominio personalizado que no contiene un subdominio, como `example.com`. Los dominios apex también son conocidos como dominios apex base, vacíos, desnudos, o de zona.

Un dominio de vértice se configura con un registro `A`, `ALIAS`o `ANAME` desde el proveedor DNS. Para más información, vea "[Administración de un dominio personalizado para el sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)".

{% data reusables.pages.www-and-apex-domain-recommendation %} Para más información, vea "[Administración de un dominio personalizado para el sitio {% data variables.product.prodname_pages %}](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site/#configuring-a-subdomain)".

## Asegurar el dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}

{% data reusables.pages.secure-your-domain %} Para más información, vea "[Comprobación del dominio personalizado para {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)" y "[Administración de un dominio personalizado para el sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Existen algunos motivos por los que tu sitio pueda estar inhabilitado automáticamente.

- Si bajaste de categoría de {% data variables.product.prodname_pro %} a {% data variables.product.prodname_free_user %}, todos los sitios de {% data variables.product.prodname_pages %} que se publicaron actualmente desde repositorios privados en tu cuenta quedarán sin publicar. Para más información, vea "[Cambio del plan de facturación de {% data variables.product.prodname_dotcom %} a una versión anterior](/articles/downgrading-your-github-billing-plan)".
- Si transfieres a un repositorio privado a una cuenta personal que está usando {% data variables.product.prodname_free_user %}, el repositorio perderá acceso a la función de {% data variables.product.prodname_pages %}, y el sitio de {% data variables.product.prodname_pages %} actualmente publicado, quedará sin publicar. Para más información, vea "[Transferencia de un repositorio](/articles/transferring-a-repository)".

## Información adicional

- "[Solución de problemas de dominios personalizados y {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)".
