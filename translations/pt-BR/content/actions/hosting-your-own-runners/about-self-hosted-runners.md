---
title: Sobre executores auto-hospedados
intro: 'Você pode hospedar seus próprios executores e personalizar o ambiente usado para executar trabalhos nos seus fluxos de trabalho do {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: overview
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre executores auto-hospedados

{% data reusables.github-actions.self-hosted-runner-description %} Os executores auto-hospedados podem ser físicos, virtuais, estar em um container, no local ou em uma nuvem.

Você pode adicionar runners auto-hospedados em vários níveis na hierarquia de gerenciamento:
- Runners em nível de repositório são dedicados a um único repositório.
- Executores no nível da organização podem processar trabalhos para vários repositórios em uma organização.
- Runners de nível empresarial podem ser atribuídos a várias organizações em uma conta corporativa.

Your runner machine connects to {% data variables.product.prodname_dotcom %} using the {% data variables.product.prodname_actions %} self-hosted runner application. {% data reusables.github-actions.runner-app-open-source %} Quando uma nova versão é lançada, o aplicativo do executor atualiza-se automaticamente quando uma tarefa é atribuída ao executor, ou dentro de uma semana após a liberação, caso o executor não tenha recebido nenhum trabalho.

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

Para mais informações sobre instalação e uso de executores auto-hospedados, consulte "[Adicionar executores auto-hospedados](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)" e "[Usar executores auto-hospedados em um fluxo de trabalho](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."

### Você pode executar fluxos de trabalho nos executores hospedados em {% data variables.product.prodname_dotcom %} ou em executores auto-hospedados

Os executores auto-hospedados em {% data variables.product.prodname_dotcom %} oferecem uma maneira mais rápida e simples de executar seus fluxos de trabalho, enquanto os executores auto-hospedados são uma maneira altamente configurável de executar fluxos de trabalho em seu próprio ambiente personalizado.

**Executores hospedados no {% data variables.product.prodname_dotcom %}:**
- Recebe atualizações automáticas para o sistema operacional, pacotes e ferramentas pré-instalados e o aplicativo do executor auto-hospedado.
- São gerenciados e mantidos por {% data variables.product.prodname_dotcom %}.
- Fornece uma instância limpa para cada execução de trabalho.
- Use minutos grátis no seu plano {% data variables.product.prodname_dotcom %}, com taxas por minuto aplicadas após exceder os minutos grátis.

**Executores auto-hospedados:**
- Recebem atualizações automáticas apenas para o aplicativo do executor auto-hospedado. Você é responsável por atualizar o sistema operacional e todos os outros softwares.
- Pode usar serviços de nuvem ou máquinas locais pelos quais você já paga.
- É personalizável para seu hardware, sistema operacional, software e requisitos de segurança.
- Não é necessário ter uma instância limpa para a execução de cada trabalho.
- São grátis para usar com {% data variables.product.prodname_actions %}, mas você é responsável pelo custo de manutenção das suas máquinas executoras.

### Requisitos para executores auto-hospedados

Você pode usar qualquer máquina como um executor auto-hospedado, desde que ela atenda a estes requisitos:

* Você pode instalar e executar o aplicativo do executor auto-hospedado na máquina. Para obter mais informações, consulte "[Sistemas operacionais compatíveis com os executores auto-hospedados](#supported-operating-systems-for-self-hosted-runners)".
* A máquina pode comunicar-se com {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Comunicação entre os executores auto-hospedados e {% data variables.product.prodname_dotcom %}](#communication-between-self-hosted-runners-and-github)".
* A máquina tem recursos de hardware suficientes para o tipo de fluxos de trabalho que você planeja executar. O aplicativo do executor auto-hospedado requer apenas recursos mínimos.
* Se você desejar executar fluxos de trabalho que usam ações do contêiner do Docker ou dos contêineres de serviço, você deverá usar uma máquina Linux e o Docker deve estar instalados.

### Limites de uso

Existem alguns limites sobre o uso de {% data variables.product.prodname_actions %} ao usar executores auto-hospedados. Estes limites estão sujeitos a mudanças.

{% data reusables.github-actions.usage-workflow-run-time %}
- **Tempo de fila de tarefas** - Cada trabalho para executores auto-hospedados pode ser enfileirado por um máximo de 24 horas. Se um executor auto-hospedado não começar a executar a tarefa dentro deste limite, a tarefa será encerrada e não será concluída.
{% data reusables.github-actions.usage-api-requests %}
- **Matriz de vagas** - {% data reusables.github-actions.usage-matrix-limits %}

### Supported architectures and operating systems for self-hosted runners

Os sistemas operacionais a seguir são compatíveis com o aplicativo de execução auto-hospedado.

#### Linux

- Red Hat Enterprise Linux 7
- CentOS 7
- Oracle Linux 7
- Fedora 29 ou versão posterior
- Debian 9 ou versão posterior
- Ubuntu 16.04 ou versão posterior
- Linux Hortelã 18 ou versão posterior
- openSUSE 15 ou versão posterior
- SUSE Enterprise Linux (SLES) 12 SP2 ou versão posterior

#### Windows

- Windows 7 64-bit
- Windows 8.1 64-bit
- Windows 10 64-bit
- Windows Server 2012 R2 64-bit
- Windows Server 2016 64-bit
- Windows Server 2019 64-bit

#### macOS

- macOS 10.13 (High Sierra) or versão posterior

#### Architectures

The following processor architectures are supported for the self-hosted runner application.

- `x64` - Linux, macOS, Windows.
- `ARM64` - Linux only.
- `ARM32` - Linux only.

{% if enterpriseServerVersions contains currentVersion %}

### Comunicação entre executores auto-hospedados e {% data variables.product.prodname_dotcom %}

A máquina pode comunicar-se com {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Comunicação entre os executores auto-hospedados e {% data variables.product.prodname_dotcom %}](#communication-between-self-hosted-runners-and-github)".

{% endif %}

### Comunicação entre executores auto-hospedados e {% data variables.product.product_name %}

As enquetes dos executores auto-hospedados {% data variables.product.product_name %} para recuperar atualizações do aplicativo e verificar se algum trabalho está na fila para processamento. O executor auto-hospedado usa uma _enquete longa_ HTTPS que abre uma conexão com {% data variables.product.product_name %} por 50 segundos e, se nenhuma resposta for recebida, o período de espera se encerra a uma nova enquete é criada. O aplicativo deve estar rodando na máquina para aceitar e executar trabalhos do {% data variables.product.prodname_actions %}.

{% if currentVersion == "free-pro-team@latest" %}

Você deve garantir que a máquina tenha acesso adequado à rede para comunicar-se com as {% data variables.product.prodname_dotcom %} URLs listadas abaixo.

```
github.com
api.github.com
*.actions.githubusercontent.com
codeload.github.com
```

Se você usar uma lista de endereços IP permitida para a sua a sua organização ou conta corporativa do {% data variables.product.prodname_dotcom %}, você deverá adicionar o endereço IP do executor auto-hospedado à lista de permissões. Para obter mais informações consulte "[Gerenciar endereços IP permitidos para a sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)" ou "[Aplicar as configurações de segurança na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#using-github-actions-with-an-ip-allow-list)".

{% else %}

Você deve garantir que a máquina tenha acesso adequado à rede para comunicar-se com as {% data variables.product.prodname_dotcom %} URLs listadas abaixo.

{% endif %}

Você também pode usar executores auto-hospedados com um servidor proxy. Para obter mais informações, consulte "[Usar um servidor proxy com executores auto-hospedados](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)."

### Segurança dos executores auto-hospedados com repositórios públicos

{% data reusables.github-actions.self-hosted-runner-security %}

Este não é um problema com executores hospedados no {% data variables.product.prodname_dotcom %}, pois cada executor hospedado no {% data variables.product.prodname_dotcom %} é sempre uma máquina virtual limpa e isolada, que é destruída no final da execução do trabalho.

Os fluxos de trabalho não confiáveis no seu executor auto-hospedado representam riscos de segurança significativos para seu ambiente de rede e máquina, especialmente se sua máquina persistir no ambiente entre os trabalhos. Alguns dos riscos incluem:

* Programas maliciosos em execução na máquina.
* Sair do sandbox do executor da máquina.
* Expor acesso ao ambiente de rede da máquina.
* Dados persistentes, indesejados ou perigosos na máquina.
