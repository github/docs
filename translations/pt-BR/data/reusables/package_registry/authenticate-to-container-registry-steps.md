1. Crie um novo token de acesso pessoal (PAT) com os escopos apropriados para as tarefas que você deseja realizar. Se sua organização exigir SSO, você deverá habilitar o SSO para seu novo token.
  {% warning %}

  **Observação:** Se você selecionar o escopo `write:packages`, desmarque o escopo `repositório` ao criar o PAT. Adicionar um PAT com o escopo de `repositório` como um segredo no repositório permite que a credencial seja acessível a todos os colaboradores do repositório. Isso fornece um acesso adicional desnecessário quando um PAT com o escopo do `repositório` é usado em uma ação. Para obter mais informações sobre as práticas de segurança recomendadas para ações, consulte "[Fortalecimento de segurança para o GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

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
serviço de {% data variables.product.prodname_github_container_registry %} em `ghcr.io`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
