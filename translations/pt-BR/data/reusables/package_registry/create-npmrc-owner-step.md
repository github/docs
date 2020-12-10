2. No mesmo diretório que o arquivo `package.json`, crie ou edite um arquivo `.npmrc` para incluir uma linha especificando a URL {% data variables.product.prodname_registry %} e o proprietário da conta. Substitua `OWNER` pelo nome do usuário ou da organização que possui o repositório que contém seu projeto.

{% if currentVersion == "free-pro-team@latest" %}
  ```shell
registry=https://npm.pkg.github.com/<em>OWNER</em>
  ```
{% else %}
  Se o isolamento de subdomínio estiver habilitado:
  ```shell
  registry=https://npm.<em>HOSTNAME</em>/<em>OWNER</em>
  ```
  Se o isolamento de subdomínio estiver desabilitado:
  ```shell
  https://<em>HOSTNAME</em>/_registry/npm/<em>OWNER</em>
  ```
{% endif %}
