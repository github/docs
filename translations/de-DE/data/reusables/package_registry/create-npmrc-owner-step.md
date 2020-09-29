2. Erstelle oder bearbeite eine `.npmrc` Datei im gleichen Verzeichnis wie Deine `package.json` Datei, um eine Zeile mit der {% data variables.product.prodname_registry %}-URL und dem Kontoinhaber einzufügen. Ersetze `OWNER` durch den Namen des Benutzer- oder Organisationskonto, welches das Repository besitzt, in dem sich Dein Projekt befindet.

{% if currentVersion == "free-pro-team@latest" %}
  ```shell
registry=https://npm.pkg.github.com/<em>OWNER</em>
  ```
{% else %}
  If subdomain isolation is enabled:
  ```shell
  registry=https://npm.<em>HOSTNAME</em>/<em>OWNER</em>
  ```
  If subdomain isolation is disabled:
  ```shell
  https://<em>HOSTNAME</em>/_registry/npm/<em>OWNER</em>
  ```
{% endif %}
