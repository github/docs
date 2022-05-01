---
title: Segurança nos codespaces
intro: 'Visão geral da arquitetura de segurança de {% data variables.product.prodname_codespaces %}, com orientações para ajudar a manter a segurança e minimizar o risco de ataque.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
type: reference
shortTitle: Segurança nos codespaces
---

## Visão geral da segurança do codespace

{% data variables.product.prodname_codespaces %} foi projetado para ser uma segurança enrijecida por padrão. Consequentemente, você deverá garantir que as suas práticas de desenvolvimento de software não corram o risco de reduzir a posição de segurança do seu codespace.

Este guia descreve a forma como os Programas mantêm seu ambiente de desenvolvimento seguro e fornece algumas das práticas recomendadas que ajudarão a manter sua segurança enquanto você trabalha. Como em qualquer ferramenta de desenvolvimento, lembre-se de que você só deve abrir e trabalhar em repositórios que você conhece e confia.

### Isolamento de ambiente

{% data variables.product.prodname_codespaces %} foi projetado para manter seus codespace separados um do outro, cada um usando sua própria máquina virtual e rede.

#### Máquinas virtuais isoladas

Cada código é hospedado na sua própria máquina virtual recém-construída (VM). Dois códigos nunca são colocalizados na mesma VM.

Toda vez que você reiniciar um codespace, ele será implantado em uma nova VM com as últimas atualizações de segurança disponíveis.

#### Rede isolada

Cada codespace tem a sua própria rede virtual isolada. Usamos firewalls para bloquear conexões recebidas da internet e impedir que os codespace se comuniquem entre si em redes internas. Por padrão, os codespace podem fazer conexões de saída na internet.

### Autenticação

Você pode se conectar a um codespace usando um navegador da web ou o Visual Studio Code. Se você se conectar a partir do Visual Studio Code, será solicitado que você efetue a autenticação com {% data variables.product.product_name %}.

Toda vez que um codespace é criado ou reiniciado, atribui-se um novo token de {% data variables.product.company_short %} com um período de vencimento automático. Este período permite que você trabalhe no código sem precisar efetuar a autenticação novamente durante um dia de trabalho típico, mas reduz a chance de deixar uma conexão aberta quando você parar de usar o codespace.

O escopo do token irá variar dependendo do acesso ao repositório onde o codespace foi criado:

- **Se você tiver acesso de gravação ao repositório**: O token será escopo para acesso de leitura/gravação no repositório.
- **Se você tiver acesso somente leitura ao repositório**: O token somente permitirá que o c[odigo seja clonado a partir do repositório de origem. Se você tentar fazer push em um repositório privado onde você só tem acesso de leitura, {% data variables.product.prodname_codespaces %} solicitará que você crie uma bifurcação pessoal do repositório. O token será atualizado para ter acesso de leitura/gravação à nova bifurcação pessoal.
- **Se você habilitou seu codespace para acessar outros repositórios**: Quando um codespace receber [acesso a outros repositórios](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces), qualquer codespace criado a partir desse repositório terá escopo de leitura/gravação de tokens no repositório de origem. Além disso, os tokens também receberão acesso de leitura em outros repositórios indicados pelo usuário ou organização.

Os administradores da organização especificam quais repositórios devem ser considerados confiáveis. Um administrador pode [optar por confiar](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces) em nenhum, todos ou em algum dos repositórios da organização. Um codespace não pode ter maiores permissões de acesso aos recursos do que a pessoa que o criou, mesmo que o administrador da organização tenha concedido acesso a todos os usuários e a todos os repositórios.

### Conexões de codespace

Você pode conectar-se ao seu codespace usando o túnel criptografado TLS fornecido pelo serviço de {% data variables.product.prodname_codespaces %}. Somente o criador de um codespace pode conectar-se a um codespace. As conexões são autenticadas com {% data variables.product.product_name %}.

Se você precisar permitir acesso externo a serviços em execução em um codespace, você poderá habilitar o encaminhamento de portas para acesso público ou privado.

### Encaminhamento de porta

Se você precisar conectar-se a um serviço (como um servidor web de desenvolvimento) em execução no seu codespace, você poderá configurar o encaminhamento de portas para tornar o serviço disponível na internet.

Os proprietários da organização podem restringir a capacidade de tornar portas encaminhadas disponíveis publicamente ou dentro da organização. Para obter mais informações, consulte "[Restringindo a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports). "

**Portas encaminhadas em particular**: Podem ser acessadas na internet, mas somente o criador do codespace pode acessá-las, após efetuar a autenticação em {% data variables.product.product_name %}.

**Portas encaminhadas publicamente dentro da sua organização**: podem ser acessdas na internet mas apenas por integrantes da mesma organização como o espaço, depois de efetuar a autenticação em {% data variables.product.product_name %}.

**portas encaminhadas publicamente**: Podem ser acessadas na internet, e qualquer pessoa na internet pode acessá-las. Não é necessária autenticação para acessar portas públicas encaminhadas.

Todas as portas encaminhadas são privadas por padrão, o que significa que você precisará efetuar a autenticação antes de acessar a porta. O acesso às portas privadas encaminhadas por um codespace é controlado por cookies de autenticação, com um período de vencimento de 3 horas. Quando o cookie vencer, você deverá efetuar a autenticação novamente.

Uma porta pública encaminhada voltará automaticamente para a privada quando você remover e adicionar novamente a porta, ou se você reiniciar o codespace.

Você pode usar o painel "Portas" para configurar uma porta para acesso público ou privado, e você pode parar o encaminhamento de portas quando ela não for mais necessária. Para obter mais informações, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

## Práticas recomendadas de segurança para seus codespaces

Os codespaces são projetados para ter segurança enrijecida por padrão. Para ajudar a manter esta postura, recomendamos que você siga as práticas recomendadas de segurança durante seus procedimentos de desenvolvimento:

- Como em qualquer ferramenta de desenvolvimento, lembre-se de que você só deve abrir e trabalhar em repositórios que você conhece e confia.
- Antes de adicionar novas dependências ao codespace, verifique se elas são bem mantidas e se lançam atualizações para corrigir quaisquer vulnerabilidades de segurança encontradas nos seus codespaces.

### Usando segredos para acessar informações confidenciais

Sempre use segredos criptografados quando você deseja usar informações confidenciais (como tokens de acesso) em um codespace. Você pode acessar seus segredos como variáveis de ambiente no codespace, inclusive a partir do terminal. Por exemplo, você pode iniciar um terminal dentro do seu codespace e usar `echo $SECRET_NAME` para ver o valor de um segredo.

Os valores do segredo são copiados para variáveis de ambiente sempre que o codespace for retomado ou criado, Portanto, se você atualizar o valor de um segredo enquanto o codespace estiver em execução, você deverá suspender e retomar para retirar o valor atualizado.

Para mais informações sobre segredos, consulte:
- "[Gerenciar segredos criptografados nos seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"
- "[Gerenciando segredos criptografados do seu repositório e organização para os codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)"

### Trabalhando com contribuições e repositórios de outras pessoas

Quando você cria um codespace a partir de um branch de PR a partir de uma bifurcação, o token na área do codespace irá variar dependendo se o repositório é público ou privado:
- Para um repositório privado, o codespace recebe acesso tanto à bigurcação quanto ao principal.
- Para um repositório público, o código só terá acesso à bifurcação e à abertura de PRs no principal.

### Práticas recomendadas adicionais

Há algumas práticas recomendadas e riscos adicionais dos quais você deve estar ciente ao usar {% data variables.product.prodname_codespaces %}.

#### Compreendendo o arquivo devcontainer.json de um repositório

Ao criar um codespace, se um arquivo `devcontainer.json` for encontrado para o seu repositório, ele será analisado e usado para configurar o seu codespace. O arquivo `devcontainer.json` pode conter funcionalidades poderosas, como instalar extensões de terceiros e executar código arbitrário fornecido em um `postCreateCommand`.

Para obter mais informações, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

#### Conceder acesso por meio de funcionalidades

Certos recursos de desenvolvimento podem potencialmente adicionar risco ao seu ambiente. Por exemplo, a assinatura, segredos injetados em variáveis de ambiente, acesso de registro autenticado e acesso a pacotes podem apresentar possíveis problemas de segurança. Recomendamos que se conceda acesso apenas àqueles que dela necessitem e que se adote uma política que seja o mais restritiva possível.

#### Usando extensões

Qualquer extensão adicional de {% data variables.product.prodname_vscode %} que você tenha instalado pode potencialmente introduzir mais risco. Para ajudar a mitigar esse risco, certifique-se de que você só instale extensões confiáveis, e que elas sejam sempre atualizadas.
