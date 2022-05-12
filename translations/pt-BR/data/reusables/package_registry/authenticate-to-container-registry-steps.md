1. Crie um novo token de acesso pessoal (PAT) com os escopos apropriados para as tarefas que você deseja realizar. Se sua organização exigir SSO, você deverá habilitar o SSO para seu novo token.
  {% warning %}

  **Observação:** Por padrão, quando você selecionar o escopo `write: pacotes` para o seu token de acesso pessoal (PAT) na interface do usuário. O escopo do `repositório` também será selecionado. O escopo de `repo` oferece acesso desnecessário e amplo, o qual recomendamos que você evite usar para fluxos de trabalho do GitHub Actions em particular. Para obter mais informações, consulte "[Enrijecimento de segurança para o GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)". As a workaround, you can select just the `write:packages` scope for your PAT in the user interface with this url: `https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages`.

  {% endwarning %}

    - Selecione o escopo `read:packages` para fazer o download de imagens de contêineres e ler seus metadados.
    - Selecione o escopo `write:packages` para fazer o download e o upload de imagens de contêiner e ler e escrever seus metadados.
    - Selecione o escopo `delete:packages` para excluir imagens de contêineres.

  Para obter mais informações, consulte "[Criar um token de acesso pessoal para a linha de comando](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".

2. Salve seu PAT. Recomendamos salvar o seu PAT como uma variável de ambiente.
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. Ao usar a CLI para seu tipo de container, faça login em
{% data variables.product.prodname_container_registry %} service at `{% data reusables.package_registry.container-registry-hostname %}`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
