2. No mesmo diretório que o arquivo `package.json`, crie ou edite um arquivo `.npmrc` para incluir uma linha especificando a URL {% data variables.product.prodname_registry %} e o proprietário da conta. Substitua `OWNER` pelo nome do usuário ou da organização que possui o repositório que contém seu projeto.

{% if currentVersion == "free-pro-team@latest" %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %}
  Se o isolamento de subdomínio estiver habilitado:
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  Se o isolamento de subdomínio estiver desabilitado:
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
