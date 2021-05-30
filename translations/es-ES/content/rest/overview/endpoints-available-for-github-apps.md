---
title: Terminales disponibles para las Apps de GitHub
intro: Tu app puede hacer solicitudes a las siguientes terminales de REST.
redirect_from:
  - /v3/apps/available-endpoints
  - /rest/reference/endpoints-available-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

Debes utilizar un token de acceso a la isntalación para acceder a las terminales utilizando tu {% data variables.product.prodname_github_app %}. Para obtener más información, consulta la sección "[Autenticarse con {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

{% for thing in rest.operationsEnabledForGitHubApps[currentVersion] %}
{% assign category = thing[0] %}
{% assign operations = thing[1] %}
{% if operations.size > 0 %}
  <h3 id="{{category}}">
    <a href="#{{category}}">{{ category }}</a>
  </h3>  
  <ul>
  {% for operation in operations %}
  <li><a href="/{{currentLanguage}}/rest/reference/{{operation.category}}#{{operation.slug}}"><code><span style="text-transform: uppercase">{{operation.verb}}</span> {{operation.requestPath}}</code></a></li>
  {% endfor %}
  </ul>
{% endif %}
{% endfor %}
