---
title: Working with support for GitHub Codespaces
intro: 'Tips para obtener la mejor ayuda del soporte para {% data variables.product.prodname_github_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Trabajar con soporte
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
---

Antes de que soporte pueda ayudarte con los problemas de los codespaces, necesitas saber el nombre del codespace y su ID de codespaces (identificador). Adicionalmente, soporte podría pedirte que le compartas algunas bitácoras. For more information, see "[{% data variables.product.prodname_github_codespaces %} logs](/codespaces/troubleshooting/github-codespaces-logs)" and "[About GitHub Support](/github/working-with-github-support/about-github-support)."

### Nombres de los codespaces

Cada codespace tiene un nombre único que es una combinación de tu manejo de {% data variables.product.company_short %}, el nombre del repositorio, y algunos caracteres aleatorios. Los caracteres adicionales te permiten tener codespaces para ramas diferentes en el mismo repositorio. Por ejemplo: `octocat-myrepo-gmc7`.

Para encontrar el nombre de un codespace:

- Abre el codespace en el buscador. El subdominio de la URL es el nombre del codespace. Por ejemplo: `https://octocat-myrepo-gmc7.github.dev` es la URL del codespace `octocat-myrepo-gmc7`.
- Si no puedes abrir un codespace, puedes acceder al nombre en {% data variables.product.product_name %} en https://github.com/codespaces. El nombre se muestra en una ventana emergente cuando pasas el puntero del mouse sobre la opción **Open in browser** en https://github.com/codespaces. ![Nombre del codespace que se muestra al pasar el puntero del mouse](/assets/images/help/codespaces/find-codespace-name-github.png)

El nombre del codespace también se incluye en muchos otros archivos de bitácora. Por ejemplo, en las bitácoras de codespace como el valor de `friendlyName`, en la bitácora de extensiones de {% data variables.product.prodname_github_codespaces %} después de `making GET request for` y en la bitácora de consola del buscador, después de `clientUrl`. For more information, see "[{% data variables.product.prodname_github_codespaces %} logs](/codespaces/troubleshooting/github-codespaces-logs)."

### ID de los codespaces

Cada codespace también tiene un ID (identificador). Este no se muestra predeterminadamente en {% data variables.product.prodname_vscode %}, así que podrías tener que actualizar los ajustes para la extensión de {% data variables.product.prodname_github_codespaces %} antes de que puedas acceder a la ID.

1. En {% data variables.product.prodname_vscode %}, ya sea la versión de buscador o de escritorio, en la barra de actividad a la izquierda, haz clic en **Explorador remoto** para que se muestren los detalles del codespace.
2. Si la barra lateral incluye una sección de "Rendimiento del Codespace", pasa el puntero del mouse sobre "ID del Codespace" y haz clic en el icono de portapapeles para copiar la ID.
3. Si no se muestra la información, haz clic en {% octicon "gear" aria-label="The gear icon" %} en la esquina inferior izquierda de la barra de actividad para mostrar la pestaña de "Ajustes".
4. Expande las **Extensiones** y haz clic en **{% data variables.product.prodname_github_codespaces %}** para mostrar los ajustes de la extensión. Entonces, habilita el **Explorador para mostrar el rendmiento** para mostrar la sección de "Rendimiento del Codespace" en la barra lateral. ![ID y ajustes del codespace requeridos para mostrar la información de rendimiento](/assets/images/help/codespaces/find-codespace-id.png)
