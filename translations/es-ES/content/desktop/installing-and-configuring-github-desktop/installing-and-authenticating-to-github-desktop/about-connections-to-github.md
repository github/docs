---
title: Acerca de las conexiones a GitHub
intro: '{% data variables.product.prodname_desktop %} utiliza HTTPS para intercambiar datos de forma segura con {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/about-connections-to-github
  - /desktop/installing-and-configuring-github-desktop/about-connections-to-github
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_desktop %} se conecta a {% data variables.product.prodname_dotcom %} cuando extraes, subes, clonas y bifurcas repositorios remotos. Para conectarse a {% data variables.product.prodname_dotcom %} desde {% data variables.product.prodname_desktop %}, debes autenticar tu cuenta. Para obtener más información, consulta "[Autenticar a {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)."

Después de que te autentiques en {% data variables.product.prodname_dotcom %}, puedes conectarte a los repositorios remotos con {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} guarda tus credenciales en caché (nombre de usuario y contraseña o token de acceso personal) y las utiliza para autenticarse en cada conexión hacia el destino remoto.

{% data variables.product.prodname_desktop %} se conecta con {% data variables.product.prodname_dotcom %} utilizando HTTPS. Si utilizas {% data variables.product.prodname_desktop %} para acceder a los repositorios que se clonaron utilizando SSH, podrías encontrar errores. Para conectarte a un repositorio que se clonó utilizando SSH, cambia las URL del destino remoto. Para obtener más información, consulta "[Administrar repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)."

### Leer más
- "[Clonar y bifurcar repositorios desde GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)"
