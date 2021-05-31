---
title: Autenticar com os aplicativos GitHub
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/
  - /apps/building-github-apps/authentication-options-for-github-apps/
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.machine-man-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

### Gerar uma chave privada

Após criar um aplicativo GitHub, você deverá gerar uma ou mais chaves privadas. Você usará a chave privada para assinar solicitações de token de acesso.

Você pode criar várias chaves privadas e girá-las para evitar período de inatividade se uma chave for comprometida ou perdida. Para verificar se uma chave privada corresponde a uma chave pública, consulte [Verificando chaves privadas](#verifying-private-keys).

Para gerar uma chave privada:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. Em "Chaves Privadas", clique em **Gerar uma chave privada**. ![Gerar chave privada](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. Você verá uma chave privada no formato PEM baixado no seu computador. Certifique-se de armazenar este arquivo porque o GitHub armazena apenas a parte pública da chave.

{% note %}

**Observação:** Se você estiver usando uma biblioteca que exige um formato de arquivo específico, o arquivo PEM que você baixar será no formato `PKCS#1 RSAPrivateKey`.

{% endnote %}

### Verificar chaves privadas
{% data variables.product.product_name %} gera uma impressão digital para cada par de chave privada e pública usando a função de hash {% if currentVersion ver_lt "enterprise-server@2.23" %}SHA-1{% else %}SHA-256{% endif %} Você pode verificar se a sua chave privada corresponde à chave pública armazenada no {% data variables.product.product_name %}, gerando a impressão digital da sua chave privada e comparando-a com a impressão digital exibida no {% data variables.product.product_name %}.

Para verificar uma chave privada:

1. Encontre a impressão digital para o par de chaves privada e pública que deseja verificar na seção "Chaves privadas" da página de configurações de desenvolvedor do seu {% data variables.product.prodname_github_app %}. Para obter mais informações, consulte [Gerar uma chave privada](#generating-a-private-key). ![Impressão digital de chave privada](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. Gere a impressão digital da sua chave privada (PEM) localmente usando o comando a seguir:
    ```shell
    $ openssl rsa -in <em>PATH_TO_PEM_FILE</em> -pubout -outform DER | openssl {% if currentVersion ver_lt "enterprise-server@2.23" %}sha1 -c{% else %}sha256 -binary | openssl base64{% endif %}
    ```
3. Compare os resultados da impressão digital gerada localmente com a impressão digital que você vê no {% data variables.product.product_name %}.

### Apagar chaves privadas
Você pode remover uma chave privada perdida ou comprometida excluindo-a. No entanto, você deve ter pelo menos uma chave privada. Quando você tem apenas uma chave, você deverá gerar uma nova antes de excluir a antiga. ![Excluir a última chave privada](/assets/images/github-apps/github_apps_delete_key.png)

### Efetuar a autenticação um {% data variables.product.prodname_github_app %}

Efetuar a autenticação como um {% data variables.product.prodname_github_app %} permite que você faça algumas coisas:

* Você pode recuperar informações de gerenciamento de alto nível sobre seu {% data variables.product.prodname_github_app %}.
* Você pode solicitar tokens de acesso para uma instalação do aplicativo.

Para efetuar a autenticação como um {% data variables.product.prodname_github_app %}, [gere uma chave privada](#generating-a-private-key) no formato PEM e baixe-a para na sua máquina local. Você usará essa chave para assinar um [JSON Web Token (JWT)](https://jwt.io/introduction) e codificá-lo usando o algoritmo `RS256`. O {% data variables.product.product_name %} verifica se a solicitação foi autenticada, fazendo a verificação do token com a chave pública armazenada pelo aplicativo.

Aqui está um script Ruby rápido que você pode usar para gerar um JWT. Observe que você deve executar o `gem install jwt` antes de usá-lo.

<a name="jwt-payload"></a>

```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read(YOUR_PATH_TO_PEM)
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: YOUR_APP_ID
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

`YOUR_PATH_TO_PEM` e `YOUR_APP_ID` são os valores que você deve substituir.

Use o seu identificador de {% data variables.product.prodname_github_app %}(`YOUR_APP_ID`) como o valor para a reivindicação do JWT [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1) (emissor). Você pode obter o identificador {% data variables.product.prodname_github_app %} por meio do ping inicial do webhook, após [criar o aplicativo](/apps/building-github-apps/creating-a-github-app/), ou a qualquer momento na da página de configurações do aplicativo na UI do GitHub.com.

Após criar o JWT, defina-o no `Cabeçalho` da solicitação de API:

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github.machine-man-preview+json" {% data variables.product.api_url_pre %}/app
```
{% else %}
```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github.v3+json" {% data variables.product.api_url_pre %}/app
```
{% endif %}

`YOUR_JWT` é o valor que você deve substituir.

O exemplo acima usa o tempo máximo de expiração de 10 minutos, após o qual a API começará a retornar o erro `401`:

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

Você deverá criar um novo JWT após o tempo expirar.

### Acessar os pontos finais da API como um {% data variables.product.prodname_github_app %}

Para obter uma lista dos pontos finais da API REST que você pode usar para obter informações de alto nível sobre um {% data variables.product.prodname_github_app %}, consulte "[aplicativos GitHub](/rest/reference/apps)".

### Autenticar como uma instalação

Autenticar como uma instalação permite que você execute ações na API para essa instalação. Antes de autenticar como uma instalação, você deverá criar um token de acesso de instalação. Estes tokens de acesso de instalação são usados por {% data variables.product.prodname_github_app %}s para efetuar a autenticação.

Por padrão, os tokens de acesso de instalação são limitados em todos os repositórios que uma instalação pode acessar. É possível limitar o escopo do token de acesso de instalação a repositórios específicos usando o parâmetro `repository_ids`. Consulte [Criar um token de acesso de instalação para um ponto final de um aplicativo](/rest/reference/apps#create-an-installation-access-token-for-an-app) para obter mais informações. Os tokens de acesso de instalação têm as permissões configuradas pelo {% data variables.product.prodname_github_app %} e expiram após uma hora.

Para criar um token de acesso de instalação, inclua o JWT [gerado acima](#jwt-payload) no cabeçalho de autorização na solicitação de API:

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github.machine-man-preview+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```
{% else %}
```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github.v3+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```
{% endif %}

A resposta incluirá seu token de acesso de instalação, a data de validade, as permissões do token e os repositórios que o token pode acessar. Para obter mais informações sobre o formato de resposta, consulte [Criar um token de acesso de instalação para um ponto de final do](/rest/reference/apps#create-an-installation-access-token-for-an-app)aplicativo.

Para efetuar a autenticação com um token de acesso de instalação, inclua-o no cabeçalho de autorização na solicitação de API:

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
```shell
$ curl -i \
-H "Authorization: token YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github.machine-man-preview+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```
{% else %}
```shell
$ curl -i \
-H "Authorization: token YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github.v3+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```
{% endif %}

`YOUR_INSTALLATION_ACCESS_TOKEN` é o valor que você deve substituir.

### Acessar pontos finais da API como uma instalação

Para obter uma lista de pontos finais da API REST disponíveis para uso por {% data variables.product.prodname_github_app %}s usando um token de acesso de instalação, consulte "[Pontos finais disponíveis](/rest/overview/endpoints-available-for-github-apps)".

Para obter uma lista de pontos finais relacionados a instalações, consulte "[Instalações](/rest/reference/apps#installations)".

### Acesso Git baseado em HTTP por uma instalação

As instalações com [permissões](/apps/building-github-apps/setting-permissions-for-github-apps/) no conteúdo `` de um repositório, podem usar seus tokens de acesso de instalação para efetuar autenticação para acesso ao Git. Use o token de acesso da instalação como a senha HTTP:

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
