2. En el mismo directorio que tu archivo `package.json`, crea o edita un archivo `.npmrc` para incluir una línea que especifique la URL de {% data variables.product.prodname_registry %} y el propietario de la cuenta. Reemplaza `OWNER` con el nombre de la cuenta de usuario u organización a la que pertenezca el repositorio que contiene tu proyecto.

{% if currentVersion == "free-pro-team@latest" %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %}
  Si se habilita el aislamiento de subdominios:
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  Si se inhabilita el aislamiento de subdominios:
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
