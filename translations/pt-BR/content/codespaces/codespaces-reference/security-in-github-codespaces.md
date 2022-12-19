---
title: Segurança no GitHub Codespaces
intro: 'Visão geral da arquitetura de segurança {% data variables.product.prodname_github_codespaces %}, com diretrizes para ajudar você a manter a segurança e minimizar o risco de ataque.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
type: reference
shortTitle: Security in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/security-in-codespaces
ms.openlocfilehash: 0e7fe9a7644f78fc0dfa6d5bb624c5d74f3d8713
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111397'
---
## Visão geral da segurança do codespace

O {% data variables.product.prodname_github_codespaces %} foi projetado para ser uma segurança mais rígida por padrão. Consequentemente, você deverá garantir que as suas práticas de desenvolvimento de software não corram o risco de reduzir a posição de segurança do seu codespace. 

Este guia descreve a forma como os Programas mantêm seu ambiente de desenvolvimento seguro e fornece algumas das práticas recomendadas que ajudarão a manter sua segurança enquanto você trabalha. Como em qualquer ferramenta de desenvolvimento, lembre-se de que você só deve abrir e trabalhar em repositórios que você conhece e confia.

### Isolamento de ambiente

O {% data variables.product.prodname_github_codespaces %} foi projetado para manter seus codespaces separados um do outro, cada um usando sua própria máquina virtual e rede.

#### Máquinas virtuais isoladas

Cada código é hospedado na sua própria máquina virtual recém-construída (VM). Dois códigos nunca são colocalizados na mesma VM. 

Toda vez que você reiniciar um codespace, ele será implantado em uma nova VM com as últimas atualizações de segurança disponíveis.

#### Rede isolada

Cada codespace tem a sua própria rede virtual isolada. Usamos firewalls para bloquear conexões recebidas da internet e impedir que os codespace se comuniquem entre si em redes internas. Por padrão, os codespace podem fazer conexões de saída na internet.

### Autenticação

Você pode se conectar a um codespace usando um navegador da Web ou por meio do {% data variables.product.prodname_vscode %}. Se você se conectar por meio do {% data variables.product.prodname_vscode_shortname %}, será solicitado que você se autentique no {% data variables.product.product_name %}. 

Toda vez que um codespace é criado ou reiniciado, atribui-se um novo token de {% data variables.product.company_short %} com um período de vencimento automático. Este período permite que você trabalhe no código sem precisar efetuar a autenticação novamente durante um dia de trabalho típico, mas reduz a chance de deixar uma conexão aberta quando você parar de usar o codespace.

O escopo do token irá variar dependendo do acesso ao repositório onde o codespace foi criado:

- **Se você tiver acesso de gravação no repositório**: o token terá como escopo o acesso de leitura/gravação no repositório.
- **Se você tiver acesso de leitura apenas no repositório**: o token só permitirá que o código seja clonado do repositório de origem. Se você tentar fazer push em um repositório privado onde você só tem acesso de leitura, {% data variables.product.prodname_codespaces %} solicitará que você crie uma bifurcação pessoal do repositório. O token será atualizado para ter acesso de leitura/gravação à nova bifurcação pessoal. 
- **Se você tiver habilitado seu codespace para acessar outros repositórios**: quando um codespace tiver recebido [acesso em outros repositórios](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces), qualquer codespace criado por meio desse repositório terá tokens de leitura/gravação no escopo do repositório de origem. Além disso, os tokens também receberão acesso de leitura em outros repositórios indicados pelo usuário ou organização.

Os administradores da organização especificam quais repositórios devem ser considerados confiáveis. Um administrador pode [optar por não confiar](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces) em nenhum, em todos ou em alguns dos repositórios da organização. Um codespace não pode ter maiores permissões de acesso aos recursos do que a pessoa que o criou, mesmo que o administrador da organização tenha concedido acesso a todos os usuários e a todos os repositórios.

### Conexões de codespace

Você pode conectar-se ao seu codespace usando o túnel criptografado TLS fornecido pelo serviço do {% data variables.product.prodname_github_codespaces %}. Somente o criador de um codespace pode conectar-se a um codespace. As conexões são autenticadas com {% data variables.product.product_name %}.

Se você precisar permitir acesso externo a serviços em execução em um codespace, você poderá habilitar o encaminhamento de portas para acesso público ou privado.

### Encaminhamento de porta

Se você precisar conectar-se a um serviço (como um servidor web de desenvolvimento) em execução no seu codespace, você poderá configurar o encaminhamento de portas para tornar o serviço disponível na internet. 

Os proprietários da organização podem restringir a capacidade de disponibilizar portas de encaminhamento publicamente ou na organização. Para obter mais informações, confira "[Como restringir a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)".

**Portas encaminhadas de modo privado**: são acessíveis na Internet, mas somente o criador do codespace pode acessá-las, após a autenticação no {% data variables.product.product_name %}.

**Portas encaminhadas publicamente na sua organização**: são acessíveis na Internet, mas somente para os membros da mesma organização que o codespace, após a autenticação no {% data variables.product.product_name %}.

**Portas encaminhadas publicamente**: são acessíveis na Internet e qualquer pessoa na Internet pode acessá-las. Não é necessária autenticação para acessar portas públicas encaminhadas.

Todas as portas encaminhadas são privadas por padrão, o que significa que você precisará efetuar a autenticação antes de acessar a porta. O acesso às portas privadas encaminhadas por um codespace é controlado por cookies de autenticação, com um período de vencimento de 3 horas. Quando o cookie vencer, você deverá efetuar a autenticação novamente.

Uma porta pública encaminhada voltará automaticamente para a privada quando você remover e adicionar novamente a porta, ou se você reiniciar o codespace.

Você pode usar o painel "Portas" para configurar uma porta para acesso público ou privado, e você pode parar o encaminhamento de portas quando ela não for mais necessária. Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

## Práticas recomendadas de segurança para seus codespaces

Os codespaces são projetados para ter segurança enrijecida por padrão. Para ajudar a manter esta postura, recomendamos que você siga as práticas recomendadas de segurança durante seus procedimentos de desenvolvimento: 

- Como em qualquer ferramenta de desenvolvimento, lembre-se de que você só deve abrir e trabalhar em repositórios que você conhece e confia.
- Antes de adicionar novas dependências ao codespace, verifique se elas são bem mantidas e se lançam atualizações para corrigir quaisquer vulnerabilidades de segurança encontradas nos seus codespaces.

### Usando segredos para acessar informações confidenciais 

Sempre use segredos criptografados quando você deseja usar informações confidenciais (como tokens de acesso) em um codespace. Você pode acessar seus segredos como variáveis de ambiente no codespace, inclusive a partir do terminal. Por exemplo, você pode iniciar um terminal no codespace e usar `echo $SECRET_NAME ` para ver o valor de um segredo.

Os valores de segredos são copiados em variáveis de ambiente sempre que o codespace é retomado ou criado e também são sincronizados quando eles são alterados.

Os segredos não serão copiados no ambiente quando você não tem acesso de gravação ao repositório do codespace.

Para mais informações sobre segredos, consulte:
- "[Como gerenciar segredos criptografados para seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"
- "[Como gerenciar segredos criptografados do repositório e da organização para o {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)"

### Trabalhando com contribuições e repositórios de outras pessoas

Quando você cria um codespace a partir de um branch de PR a partir de uma bifurcação, o token na área do codespace irá variar dependendo se o repositório é público ou privado:
- Para um repositório privado, o codespace recebe acesso tanto à bigurcação quanto ao principal.
- Para um repositório público, o código só terá acesso à bifurcação e à abertura de PRs no principal.

Também oferecemos proteção adicional nesses cenários não injetando nenhum dos [segredos do codespace](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) no ambiente.

### Práticas recomendadas adicionais

Há algumas práticas recomendadas e riscos adicionais dos quais você deve estar ciente ao usar {% data variables.product.prodname_codespaces %}. 

#### Compreendendo o arquivo devcontainer.json de um repositório

Quando você cria um codespace, se um arquivo `devcontainer.json` for encontrado para seu repositório, ele será analisado e usado para configurar o codespace. O arquivo `devcontainer.json` contém recursos avançados, como a instalação de extensões de terceiros e a execução de código arbitrário fornecido em um `postCreateCommand`.

Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

#### Conceder acesso por meio de funcionalidades

Certos recursos de desenvolvimento podem potencialmente adicionar risco ao seu ambiente. Por exemplo, a assinatura, segredos injetados em variáveis de ambiente, acesso de registro autenticado e acesso a pacotes podem apresentar possíveis problemas de segurança. Recomendamos que se conceda acesso apenas àqueles que dela necessitem e que se adote uma política que seja o mais restritiva possível. 

#### Como usar extensões

Qualquer extensão adicional do {% data variables.product.prodname_vscode_shortname %} que você tenha instalado tem o potencial de introduzir mais risco. Para ajudar a mitigar esse risco, certifique-se de que você só instale extensões confiáveis, e que elas sejam sempre atualizadas.
