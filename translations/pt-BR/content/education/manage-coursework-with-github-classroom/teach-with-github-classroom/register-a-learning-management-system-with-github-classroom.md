---
title: Registrar o sistema de gerenciamento de aprendizagem no GitHub Classroom
intro: 'Você pode configurar um LMS (sistema de gerenciamento de aprendizagem) compatível com LTI no {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}.'
shortTitle: Register an LMS
ms.openlocfilehash: 408126833cbf7fa8cd4a71d172f6550e82f795a2
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185166'
---
## Como registrar um LMS na sala de aula

Para conectar o LMS a uma sala de aula, um administrador da instância do LMS precisa configurá-lo para permitir o {% data variables.product.prodname_classroom %} e depois registrar o LMS no {% data variables.product.prodname_classroom %} para iniciar o handshake OAuth. O administrador só precisa fazer esse processo de registro uma vez, depois, qualquer professor que usar a instância do LMS poderá sincronizar os cursos do LMS com as salas de aula. Para obter mais informações de como conectar um curso do LMS a uma sala de aula, confira "[Conectar um curso do sistema de gerenciamento de aprendizagem a uma sala de aula](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)".

{% note %}

**Observação:** {% data reusables.classroom.google-classroom-note %}

{% endnote %}

## LMSes compatíveis

{% data reusables.classroom.supported-lmses %}

## Como configurar o Canvas para o {% data variables.product.prodname_classroom %}

Você pode registrar a instalação do Canvas no {% data variables.product.prodname_classroom %} para permitir que os professores importem dados da lista de participantes do curso para as salas de aula. Para obter mais informações sobre o Canvas, acesse o [site do Canvas](https://www.instructure.com/canvas/).

### 1. Registrar as chaves do desenvolvedor do {% data variables.product.prodname_classroom %} no Canvas

1. Entre no [Canvas](https://www.instructure.com/canvas/#login).
2. Na barra lateral esquerda na home page, clique **em Administração** e depois em **Administrador do Site**.
3. Clique em **Chaves do Desenvolvedor**.
4. Em "Chaves do Desenvolvedor", clique no botão **+ Chave do Desenvolvedor** e selecione **+ Chave de LTI** no menu suspenso.
5. Na tela de configuração "Configurações de Chave", defina os campos com os seguintes valores: 

    | Campo na configuração do aplicativo Canvas | Valor ou configuração |
    | :- | :- |
    | **Método** | `Manual Entry` |
    | **Título** | `GitHub Classroom` <br/><br/>**Observação**: você pode usar qualquer nome, mas ao definir um nome diferente, comunique isso aos professores.  |
    | **Descrição** | `Sync Canvas course rosters to GitHub Classroom` (ou algo semelhante) |
    | **URI do link de destino** | `https://classroom.github.com/context-link` |
    | **URL de iniciação do OpenID Connect** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **Método JWK** | `Public JWK URL` |
    | **URL JWK pública** | `https://classroom.github.com/.well-known/jwks.json` |
    | **URIs de redirecionamento** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | Lista suspensa **Serviços avançados de LTI** | Marque a caixa de seleção "Pode recuperar dados do usuário associados ao contexto em que a ferramenta está instalada". |
    | Lista suspensa **Configurações Adicionais** | Em "Nível de Privacidade", selecione `Public` |
    | **Posicionamentos** | Selecione `Course Settings Sub Navigation`. <br/><br/>**Observação**: se você definir o posicionamento como outra coisa, comunique isso aos professores. A documentação considera que esse seja o posicionamento do botão. |
6. Clique em **Save** (Salvar).
7. Na tabela da página "Chaves do Desenvolvedor", na linha da chave do desenvolvedor do GitHub Classroom, anote o valor da ID do cliente na coluna "Detalhes", que precisa ser comunicado aos professores para que eles concluam a configuração. 
8. Na tabela na página "Chaves do Desenvolvedor", na coluna "Estado", alterne o estado da chave para "Ativado".

### 2. Registrar as chaves do desenvolvedor no {% data variables.product.prodname_classroom %}

1. Ir para https://classroom.github.com/register-lms. 
2. Preencha as seguintes informações:
   - Em "Tipo de LMS", escolha "Canvas" no menu suspenso. 
   - "Identificador do emissor": `https://canvas.instructure.com`
   - "Domínio": a URL base da instância do Canvas
   - "ID do cliente": a "ID do cliente" em "Detalhes" da chave do desenvolvedor que você criou
   - "Ponto de extremidade de autorização OIDC": a URL base da instância do Canvas com `/api/lti/authorize_redirect` acrescentado no final.
   - "URL de recuperação de token OAuth 2.0": a URL base da instância do Canvas com `/login/oauth2/token` acrescentado no final.
   - "URL de definição da chave": a URL base da instância do Canvas com `/api/lti/security/jwks` acrescentado no final.

  ![Registrar a instância do Canvas no GitHub Classroom](/assets/images/help/classroom/register-canvas-with-github-classroom.png)

3. Clique em **Registrar**. 
4. Você verá a faixa "LMS registrado com êxito" na parte superior da tela, o que significa que você registrou a instância do LMS e que os professores agora podem vincular as salas de aula.

## Como configurar o Moodle para o {% data variables.product.prodname_classroom %}

Você pode registrar a instalação do Moodle no {% data variables.product.prodname_classroom %} para permitir que os professores importem dados da lista de participantes do curso para as salas de aula. Para obter mais informações sobre o Moodle, confira o [site do Moodle](https://moodle.org).

Você deve usar a versão 3.0 ou superior do Moodle.

### 1. Habilitar a publicação como uma ferramenta de LTI no Moodle

1. Entre no [Moodle](https://moodle.org/login/).
2. Clique na guia "Administração do site" no menu de nível superior.
3. Na página "Administração do site", clique na guia "Plug-ins", role para baixo até a seção "Autenticação" e clique em **Gerenciar autenticação**.
4. Ao lado do campo "LTI", clique no botão de alternância para habilitar LTI.
5. Clique na guia "Plug-ins" novamente, role para baixo até "Inscrições" e clique em **Gerenciar plug-ins de inscrição**.
6. Ao lado do campo "Publicar como ferramenta de LTI", clique no botão de alternância para habilitar a publicação como uma ferramenta de LTI.
7. Retorne à página "Administração do site" clicando na guia "Administração do site" no menu de nível superior, role para baixo até a seção "Segurança" e clique em **Segurança HTTP**.
8. Ao lado de "Permitir inserção de quadros", marque a caixa de seleção para habilitar a inserção de quadros e clique em **Salvar alterações**.

### 2. Registrar o {% data variables.product.prodname_classroom %} como uma ferramenta externa

1. Retorne à página "Administração do site" do Moodle clicando na guia "Administração do site" no menu de nível superior. 
2. Clique na guia "Plug-ins" e, ao lado da seção "Módulos de atividade", em "Ferramenta externa", clique em **Gerenciar ferramentas**.
3. Clique em **Configurar uma ferramenta manualmente**. 
4. Edite os seguintes valores nos campos:

    | Campo na configuração do aplicativo Moodle | Valor ou configuração |
    | :- | :- |
    | **Nome da ferramenta** | `GitHub Classroom` <br/><br/>**Observação**: você pode usar qualquer nome, mas ao definir um nome diferente, comunique isso aos professores. |
    | **URL da Ferramenta** | `https://classroom.github.com` |
    | **Versão do LTI** | `LTI 1.3` |
    | **Tipo de chave pública** | `Keyset URL` |
    | **Conjunto de chaves público** | `https://classroom.github.com/.well-known/jwks.json` |
    | **URL para iniciar logon** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **URIs de redirecionamento** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | **Contêiner de inicialização padrão** | `New window` |

5. Marque a caixa de seleção **Suporte à vinculação profunda (mensagem de item de conteúdo)** .
6. Na lista suspensa "Serviços", ao lado de "Nomes de LTI do IMS e Provisionamento de Função", selecione "Usar este serviço para recuperar as informações dos membros de acordo com as configurações de privacidade" no menu suspenso. 
7. Clique em **Salvar alterações**. 
8. Agora, o GitHub Classroom está registrado como uma ferramenta externa. Em "Ferramentas", na caixa "GitHub Classroom", clique no ícone de menu para ver a tela "Detalhes da configuração da ferramenta". Essa tela contém informações importantes que você precisará inserir na última etapa do registro da instância no {% data variables.product.prodname_classroom %} abaixo. 

### 3. Registrar a instância do Moodle no {% data variables.product.prodname_classroom %}

1. Ir para https://classroom.github.com/register-lms. 
2. Preencha as seguintes informações:
   - Em "Tipo de LMS", escolha "Moodle" no menu suspenso. 
   - "Identificador do Emissor": a "ID da plataforma" dos "Detalhes de configuração da ferramenta" da ferramenta externa que você criou no Moodle
   - "Domínio": a URL base da instância do Moodle
   - "ID do cliente": a "ID do cliente" dos "Detalhes de configuração da ferramenta" da ferramenta externa que você criou no Moodle
   - "URL da solicitação de autenticação": a "URL de solicitação de autenticação" dos "Detalhes de configuração da ferramenta" da ferramenta externa que você criou no Moodle
   - "URL do token de acesso": a "URL do token de acesso" dos "Detalhes de configuração da ferramenta" da ferramenta externa que você criou no Moodle
   - "URL do conjunto de chaves": a "URL do conjunto de chaves público" dos "Detalhes de configuração da ferramenta" da ferramenta externa que você criou no Moodle
  
  ![Registrar a instância do Moodle no GitHub Classroom](/assets/images/help/classroom/register-moodle-with-github-classroom.png)

3. Clique em **Registrar**.
4. Você verá a faixa "LMS registrado com êxito" na parte superior da tela, o que significa que você registrou a instância do LMS e que os professores agora podem vincular as salas de aula.

## Como configurar o Sakai para o {% data variables.product.prodname_classroom %}

### 1. Registrar o {% data variables.product.prodname_classroom %} como uma ferramenta externa

1. Acesse o Sakai e faça logon.
2. Acesse "Workspace de Administração" e selecione **Ferramentas Externas** na barra lateral esquerda. 
3. Clique em **Instalar Ferramenta LTI 1.x**.
4. Edite os seguintes valores nos campos:

    | Campo na configuração do aplicativo Sakai | Valor ou configuração |
    | :- | :- |
    | **Nome da ferramenta** | GitHub Classroom – [Nome do curso] <br/><br/>**Observação**: você pode usar qualquer nome, mas ao definir um nome diferente, comunique isso aos professores. |
    | **Texto do Botão** (menu Texto na ferramenta) | O que o professor verá no botão para iniciar no {% data variables.product.prodname_classroom %}. Por exemplo, o valor pode ser `sync`. |
    | **URL de inicialização** | `https://classroom.github.com/context-link` |
    | **Enviar nomes de usuário à ferramenta externa** | Selecione essa caixa de seleção. |
    | **Fornecer a lista de participantes do curso à ferramenta externa** | Selecione essa caixa de seleção. |
    | **A ferramenta dá suporte à LTI 1.3** | Selecione essa caixa de seleção. |
    | **URL do conjunto de chaves da ferramenta LTI 1.3** | `https://classroom.github.com/.well-known/jwks.json` |
    | **OpenID Connect/Ponto de extremidade de inicialização da ferramenta LTI 1.3** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **Ponto de extremidade de redirecionamento da ferramenta LTI 1.3** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
5. Após o envio, o Sakai mostrará as informações necessárias para registrar a instância do Sakai no {% data variables.product.prodname_classroom %}.

### 2. Registrar a instância do Sakai no {% data variables.product.prodname_classroom %}

1. Ir para https://classroom.github.com/register-lms.
2. Preencha as seguintes informações:
   - Em "Tipo de LMS", escolha "Sakai" no menu suspenso. 
   - "Emissor da Plataforma LTI 1.3": o campo "Emissor da Plataforma LTI 1.3" fornecido pelo Sakai
   - "Domínio": a URL base da instância do Sakai
   - "ID do cliente LTI 1.3": o campo "ID do cliente LTI 1.3" fornecido pelo Sakai
   - "URL de Autenticação OIDC da Plataforma LTI 1.3": o campo "URL de Autenticação OIDC da Plataforma LTI 1.3" fornecido pelo Sakai
   - "URL de recuperação de token de portador OAuth2 da plataforma LTI 1.3": o campo "URL de recuperação de token de portador OAuth2 da plataforma LTI 1.3" fornecido pelo Sakai
   - "URL conhecida ou do conjunto de chaves OAuth2 da plataforma LTI 1.3": o campo "URL conhecida ou do conjunto de chaves OAuth2 da plataforma LTI 1.3" fornecido pelo Sakai
  
  ![Registrar a instância do Sakai no GitHub Classroom](/assets/images/help/classroom/register-sakai-with-github-classroom.png)

3. Clique em **Registrar**. 
4. Você verá a faixa "LMS registrado com êxito" na parte superior da tela, o que significa que você registrou a instância do LMS e que agora os professores podem vincular as salas de aula.
