---
title: Endpoints available for GitHub Apps
intro: Your app can make requests to the following REST endpoints.
redirect_from:
  - /v3/apps/available-endpoints
  - /rest/reference/endpoints-available-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: GitHub App-enabled endpoints
---

You must use an installation access token to access endpoints using your {% data variables.product.prodname_github_app %}. For more information, see "[Authenticating with {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)."

[Actions](#actions)<br>
[Activity](#activity)<br>
[Apps](#apps)<br>
[Checks](#checks)<br>
[Code scanning](#code-scanning)<br>
[Codes of conduct](#codes-of-conduct)<br>
[Emojis](#emojis)<br>
[Enterprise admin](#enterprise-admin)<br>
[Git](#git)<br>
[Gitignore](#gitignore)<br>
[Interactions](#interactions)<br>
[Issues](#issues)<br>
[Licenses](#licenses)<br>
[Markdown](#markdown)<br>
[Meta](#meta)<br>
[Migrations](#migrations)<br>
[Orgs](#orgs)<br>
[Projects](#projects)<br>
[Pulls](#pulls)<br>
[Rate limit](#rate-limit)<br>
[Reactions](#reactions)<br>
[Repos](#repos)<br>
[Scim](#scim)<br>
[Search](#search)<br>
[Secret scanning](#secret-scanning)<br>
[Teams](#teams)<br>
[Users](#users)

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
