---
title: Acerca del uso de tus datos de GitHub
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
  - /github/understanding-how-github-uses-and-protects-your-data/about-githubs-use-of-your-data
intro: '{% data variables.product.product_name %} usa los datos de tu repositorio para conectarte con información, proyectos, personas y herramientas relevantes.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Cómo utiliza tus datos GitHub
---

## Acerca de como {% data variables.product.product_name %} utiliza tus datos

{% data variables.product.product_name %} agrega metadatos y analiza patrones de contenidos con el fin de suministrar información generalizada dentro del producto. It uses data from public repositories, and also uses metadata and aggregate data from private repositories when a repository's owner has chosen to share the data with {% data variables.product.product_name %} by enabling the dependency graph. If you enable the dependency graph for a private repository, then {% data variables.product.product_name %} will perform read-only analysis of that specific private repository.

If you enable data use for a private repository, we will continue to treat your private data, source code, or trade secrets as confidential and private consistent with our [Terms of Service](/free-pro-team@latest/github/site-policy/github-terms-of-service). La información que obtenemos viene solo de los datos agregados. Para obtener más información, consulta la sección "[Administrar la configuración de uso de datos para tu repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".

{% data reusables.repositories.about-github-archive-program %} Para obtener más información, consulta la sección "[Acerca de archivar contenido y datos en {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".

{% data reusables.user-settings.export-data %} Para obtener más información, consulta "[Solicitar un archivo de los datos de tu cuenta personal](/articles/requesting-an-archive-of-your-personal-account-s-data)".

Anunciaremos nuevas funciones sustanciales que usen metadatos o datos agregados en el [{% data variables.product.prodname_dotcom %}blog](https://github.com/blog).

## Cómo mejoran los datos las recomendaciones de seguridad

Como ejemplo de cómo deberían usarse tus datos, podemos detectar y alertarte sobre una vulnerabilidad de seguridad en las dependencias de tu repositorio público. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

Para detectar posibles vulnerabilidades de seguridad {% data variables.product.product_name %} escanea los contenidos del archivo de manifiesto de dependencias para hacer una lista de las dependencias de tu proyecto.

{% data variables.product.product_name %} también aprende de los cambios que realizas en tu manifiesto de dependencias. Por ejemplo, si actualizas una dependencia vulnerable a una versión segura después de recibir una alerta de seguridad y otros hacen lo mismo, {% data variables.product.product_name %} aprende cómo hacer un parche en la vulnerabiidad y puede recomendar un parche similar para el repositorio afectado.

## Privacidad y uso compartido de datos

Los datos del repositorio privado se escanean mediante una máquina y nunca es leído por el personal de {% data variables.product.product_name %}. El ojo humano nunca verá los contenidos de tus repositorios privados, a excepción de lo que se describe en nuestros [Términos de servicio](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access).

Tus datos personales individuales o del repositorio no se compartirán con terceros. Podemos compartir datos agregados obtenidos de nuestro análisis con nuestros socios.
