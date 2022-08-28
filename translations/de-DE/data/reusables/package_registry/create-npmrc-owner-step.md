2. Erstelle oder bearbeite eine `.npmrc` Datei im gleichen Verzeichnis wie Deine `package.json` Datei, um eine Zeile mit der {% data variables.product.prodname_registry %}-URL und dem Kontoinhaber einzufügen. Ersetze `OWNER` durch den Namen des Benutzer- oder Organisationskonto, welches das Repository besitzt, in dem sich Dein Projekt befindet.

{% if currentVersion == "free-pro-team@latest" %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %}
  If subdomain isolation is enabled:
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  If subdomain isolation is disabled:
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
