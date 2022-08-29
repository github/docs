---
title: Proteger pushes com digitalização de segredo
intro: 'Você pode usar o {% data variables.product.prodname_secret_scanning %} para evitar que segredos compatíveis sejam enviados por push para a sua organização ou repositório, habilitando a proteção por push push.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Habilitar proteção de push
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}
{% data reusables.secret-scanning.push-protection-beta %}

## Sobre a proteção por push para segredos

Até agora, {% data variables.product.prodname_secret_scanning_GHAS %} verifica segredos _após_ um push e alerta usuários de segredos expostos. {% data reusables.secret-scanning.push-protection-overview %}

Se um contribuidor ignorar um bloco de proteção push para um segredo, {% data variables.product.prodname_dotcom %}:
- gera um alerta.
- cria um alerta na guia "Segurança" do repositório.
- adiciona o evento de bypass ao log de auditoria.{% ifversion secret-scanning-push-protection-email %}
- envia um alerta de e-mail para os proprietários da organização, gerentes de segurança e administradores do repositório, com um link para o segredo relacionado e a razão pela qual ele foi permitido.{% endif %}

Para obter informações sobre segredos e prestadores de serviço suportados pela proteção de push, consulte "[Padrões de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection). "

## Habilitando {% data variables.product.prodname_secret_scanning %} como uma proteção por push

Para você usar {% data variables.product.prodname_secret_scanning %} como proteção por push, a organização ou repositório deverá ter {% data variables.product.prodname_GH_advanced_security %} e {% data variables.product.prodname_secret_scanning %} habilitados. Para obter mais informações, consulte "[Gerenciando as configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization), "[Gerenciando as configurações de segurança e análise do seu repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)e "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".

Os proprietários da organização, gerentes de segurança e administradores de repositórios podem habilitar a proteção por push para {% data variables.product.prodname_secret_scanning %} por meio da interface do usuário e da API. Para obter mais informações, consulte "[Repositórios](/rest/reference/repos#update-a-repository)" e expanda as "Propriedades do objeto `security_and_analysis` " na documentação da API REST.

### Habilitando {% data variables.product.prodname_secret_scanning %} como uma proteção por push para uma organização

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-org %}

### Habilitando {% data variables.product.prodname_secret_scanning %} como uma proteção por push para um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Usando a digitalização de segredo dcomo uma proteção de push da linha de comando

{% data reusables.secret-scanning.push-protection-command-line-choice %}

Até cinco segredos detectados serão exibidos por vez na linha de comando. Se um segredo específico já foi detectado no repositório e um alerta já existe, {% data variables.product.prodname_dotcom %} não bloqueará esse segredo.

{% ifversion push-protection-custom-link-orgs %}

Os administradores da organização podem fornecer um link personalizado que será exibido quando um push estiver bloqueado. Este link personalizado pode conter recursos e conselhos específicos da organização como, por exemplo, orientações sobre como usar um cofre de segredos recomendado ou como entrar em contato em caso de perguntas relacionadas ao segredo bloqueado.

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

![Captura de tela que mostra que um push está bloqueado quando um usuário tenta fazer push de um segredo para um repositório](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![Captura de tela que mostra que um push está bloqueado quando um usuário tenta fazer push de um segredo para um repositório](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} Para obter mais informações sobre correção de segredos bloqueados, consulte "[Enviando por push um branch bloqueado pela proteção de push](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)."

Se você confirmar que um segredo é real e pretender corrigi-lo mais tarde, você deverá procurar remediar o segredo o mais rápido possível. Por exemplo, você pode revogar o segredo e remover o segredo do histórico de commit do repositório. Os verdadeiros segredos que foram expostos devem ser revogados para evitar o acesso não autorizado. Você pode considerar primeiro girar o segredo antes de revogá-lo. Para obter mais informações, consulte "[Removendo dados confidenciais de um repositório](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

### Permitindo que um segredo bloqueado seja enviado por push

Se {% data variables.product.prodname_dotcom %} bloquear um segredo que você acredita ser seguro enviar por push, você poderá permitir o segredo e especificar a razão pela qual ele deve ser permitido.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Acesse o URL retornado por {% data variables.product.prodname_dotcom %} quando seu push foi bloqueado. ![Captura de tela que mostra o formulário com opções para desbloquear o push de um segredo](/assets/images/help/repository/secret-scanning-unblock-form.png)
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Clique **Me permite enviar por push este segredo**.
2. Tente novamente na linha de comando em três horas. Se não enviou por push em três horas, você terá de repetir este processo.

{% ifversion secret-scanning-push-protection-web-ui %}
## Usando a digitalização de segredo como uma proteção de push da interface de usuário web

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} só exibirá um segredo detectado por vez na interface do usuário. Se um segredo específico já foi detectado no repositório e um alerta já existe, {% data variables.product.prodname_dotcom %} não bloqueará esse segredo.

{% ifversion push-protection-custom-link-orgs %}

Os administradores da organização podem fornecer um link personalizado que será exibido quando um push estiver bloqueado. Este link personalizado pode conter recursos e conselhos específicos para sua organização. Por exemplo, o link personalizado pode apontar para um arquivo README com informações sobre o cofre secreto da organização, para quais equipes e indivíduos escalar perguntas ou a política aprovada pela organização para trabalhar com segredos e reescrever o histórico de commits.

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

{% endif %}

Você pode remover o segredo do arquivo usando a interface de usuário da web. Depois de remover o segredo, o banner no topo da página mudará e dirá que agora você pode fazeer commit das suas alterações.

  ![Captura de tela que mostra o commit na interface de usuário da web, permitido após correção do segredo](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Ignorando a proteção de push para um segredo

{% data reusables.secret-scanning.push-protection-remove-secret %} Para obter mais informações sobre correção de segredos bloqueados, consulte "[Enviando por push um branch bloqueado por proteção de push](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)."

Se você confirmar que um segredo é real e pretender corrigi-lo mais tarde, você deverá procurar remediar o segredo o mais rápido possível. Para obter mais informações, consulte "[Removendo dados confidenciais de um repositório](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

Se {% data variables.product.prodname_dotcom %} bloquear um segredo que você acredita ser seguro enviar por push, você poderá permitir o segredo e especificar a razão pela qual ele deve ser permitido.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

Se você confirmar que um segredo é real e pretender corrigi-lo mais tarde, você deverá procurar remediar o segredo o mais rápido possível.

1. No banner que apareceu na parte suérior da página quando {% data variables.product.prodname_dotcom %} bloqueou o seu commit, clique em **Ignorar proteção**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![Captura de tela que mostra o formulário com opções para desbloquear o push de um segredo](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Clique **Permitir segredo**.

{% endif %}
