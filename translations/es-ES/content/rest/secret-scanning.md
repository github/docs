---
title: Escaneo de secretos
intro: Use the Secret scanning API to retrieve and update secret alerts from a repository.
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
---

{% data reusables.secret-scanning.api-beta %}

## About the Secret scanning API

La API del {% data variables.product.prodname_secret_scanning %} te permite :

- Enable or disable {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} and push protection{% endif %} for a repository. Para obtener más información, consulta la sección "[Repositorios](/rest/repos/repos#update-a-repository)" y expande la sección de "Propiedades del objeto `security_and_analysis`" en la documentación de la API de REST.
- Retrieve and update {% data variables.product.prodname_secret_scanning_GHAS %} alerts from a repository. For further details, see the sections below.

Para obtener más información acerca de las {% data variables.product.prodname_secret_scanning %}, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)".
