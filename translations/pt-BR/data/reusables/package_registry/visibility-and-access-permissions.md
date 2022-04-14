{% ifversion fpt or ghec %}
Se você tiver permissões de administrador para a imagem de um contêiner, você poderá definir as permissões de acesso para a imagem do contêiner como privada ou pública. As imagens públicas permitem acesso anônimo e podem ser carregadas sem autenticação ou login via CLI.

Como administrador, você também pode conceder permissões de acesso para uma imagem contêiner separada das permissões que você configurou nos níveis da organização e repositório.

For container images published and owned by a personal account, you can give any person an access role. Para imagens de contêineres publicadas e pertencentes a uma organização, você pode dar uma função de acesso a qualquer pessoa ou equipe na organização.

| Permissão     | Descrição de acesso                                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| leitura       | Pode fazer o download do pacote. <br> Pode ler metadados do pacote.                                                                                    |
| gravação      | Pode fazer upload e download deste pacote. <br> Pode ler gravar metadados do pacote.                                                                   |
| administrador | Pode fazer upload, download, excluir e gerenciar este pacote. <br> Pode ler gravar metadados do pacote. <br> Pode conceder permissões de pacote. |
{% endif %}
