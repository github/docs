---
title: Instalar o GitHub Desktop
shortTitle: Instalação
intro: É possível instalar o GitHub para Desktop nos sistemas operacionais Windows ou macOS suportados.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  free-pro-team: '*'
---

### Sobre a instalação do {% data variables.product.prodname_desktop %}

Você pode instalar {% data variables.product.prodname_desktop %} em sistemas operacionais compatíveis, que incluem atualmente {% data variables.desktop.mac-osx-versions %} e {% data variables.desktop.windows-versions %}. Se você tiver uma conta em {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}, você pode conectar sua conta ao {% data variables.product.prodname_desktop %}. Para obter mais informações sobre criar uma conta, consulte "[Inscrever-se em uma nova conta do {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account/)" ou entre em contato com o administrador de seu site {% data variables.product.prodname_enterprise %}.

{% windows %}

Se você é um administrador de rede, você pode implantar {% data variables.product.prodname_desktop %} para computadores executando o Windows em uma rede gerenciada pelo Active Directory usando o arquivo de pacote do Windows Installer (`.msi`) com a Política de Grupo ou outro sistema de instalação remota.

O pacote Windows Installer extrai o instalador autônomo (`.exe `) e configura o Windows para instalar o {% data variables.product.prodname_desktop %} da próxima vez que um usuário fizer login na sua estação de trabalho. Os usuários devem ter permissão para instalar o {% data variables.product.prodname_desktop %} em seus respectivos diretórios.

Se um usuário executa o pacote do Windows Installer para {% data variables.product.prodname_desktop %} diretamente, para completar a instalação, o usuário deve sair da sua estação de trabalho e depois iniciar a sessão novamente.

{% endwindows %}

### Baixar e instalar o {% data variables.product.prodname_desktop %}

{% mac %}

Você pode instalar o {% data variables.product.prodname_desktop %} nas versões {% data variables.desktop.mac-osx-versions %}.

{% data reusables.desktop.download-desktop-page %}
2. Clique em **Download para macOS**. ![Botão Download para macOS](/assets/images/help/desktop/download-for-mac.png)
3. Na pasta `Downloads` do computador, clique duas vezes no arquivo zip **{% data variables.product.prodname_desktop %}**. ![O arquivo GitHubDesktop.zip](/assets/images/help/desktop/mac-zipfile.png)
4. Depois de descompatar o arquivo zip, clique duas vezes no **{% data variables.product.prodname_desktop %}**.
5. {% data variables.product.prodname_desktop %} será lançado após a instalação ser concluída.

{% endmac %}

{% windows %}

Você pode instalar o {% data variables.product.prodname_desktop %} nas versões {% data variables.desktop.windows-versions %}.

{% warning %}

**Aviso**: para executar o {% data variables.product.prodname_desktop %}, o sistema operacional deve ter 64 bits.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. Clique em **Download para Windows**. ![Botão Download para Windows](/assets/images/help/desktop/download-for-windows.png)
3. Na pasta `Downloads` do seu computador, clique duas vezes no arquivo de configuração **{% data variables.product.prodname_desktop %}**. ![Arquivo GitHubDesktopSetup](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} será lançado após a instalação ser concluída.

{% endwindows %}
