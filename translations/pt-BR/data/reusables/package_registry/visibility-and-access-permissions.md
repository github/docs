{% if currentVersion == "free-pro-team@latest" %}
If you have admin permissions to a container image, you can set the access permissions for the container image to private or public. As imagens públicas permitem acesso anônimo e podem ser carregadas sem autenticação ou login via CLI.

Como administrador, você também pode conceder permissões de acesso para uma imagem contêiner separada das permissões que você configurou nos níveis da organização e repositório.

Para imagens de contêiner publicadas e pertencentes a uma conta de usuário, você pode dar a qualquer pessoa uma função de acesso. Para imagens de contêineres publicadas e pertencentes a uma organização, você pode dar uma função de acesso a qualquer pessoa ou equipe na organização.

| Permissão     | Descrição de acesso                                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| leitura       | Pode fazer o download do pacote. <br> Pode ler metadados do pacote.                                                                                    |
| gravação      | Pode fazer upload e download deste pacote. <br> Pode ler gravar metadados do pacote.                                                                   |
| administrador | Pode fazer upload, download, excluir e gerenciar este pacote. <br> Pode ler gravar metadados do pacote. <br> Pode conceder permissões de pacote. |
{% endif %}
