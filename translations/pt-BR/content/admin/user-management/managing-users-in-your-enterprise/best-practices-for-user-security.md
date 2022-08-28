---
title: Práticas recomendadas de segurança de usuários
intro: '{% if enterpriseServerVersions contains currentVersion %}Medidas de segurança fora do nível da instância (SSL, isolamento de subdomínio, configuração de um firewall) que um administrador do site pode implementar, há {% else %} Há{% endif %}etapas que seus usuários podem seguir para ajudar a proteger a sua empresa.'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
  - /admin/user-management/best-practices-for-user-security
versions:
  enterprise-server: '*'
  github-ae: '*'
type: reference
topics:
  - Enterprise
  - Security
  - User account
---

{% if enterpriseServerVersions contains currentVersion %}
### Habilitar a autenticação de dois fatores

A autenticação de dois fatores (2FA) é uma modalidade de login em sites e serviços que exige outro fator além da senha. No caso do {% data variables.product.prodname_ghe_server %}, o segundo fator é um código de autenticação exclusivo gerado por um aplicativo no smartphone do usuário. É altamente recomendável pedir que os usuários habilitem a autenticação de dois fatores em suas contas. Com a autenticação de dois fatores, a senha e o smartphone do usuário teriam que ser comprometidos para violar a conta.

Para obter mais informações sobre como configurar a autenticação de dois fatores, consulte "[Sobre a autenticação de dois fatores](/enterprise/{{ currentVersion }}/user/articles/about-two-factor-authentication)".
{% endif %}

### Exigir um gerenciador de senhas

É altamente recomendável que os usuários instalem e usem um gerenciador de senhas, como, por exemplo, o [LastPass](https://lastpass.com/), [1Password](https://1password.com/) ou [Keeper](https://keepersecurity.com/)--em qualquer computador que usarem para conectar-se à sua empresa. Essa medida garante senhas mais fortes e muito menos passíveis de violação ou roubo.

### Restringir o acesso a equipes e repositórios

Para limitar a superfície de ataque em caso de violações de segurança, é altamente recomendável liberar o acesso dos usuários somente a equipes e repositórios essenciais para eles trabalharem. Como os integrantes com função de Proprietário podem acessar todas as equipes e repositórios da organização, é altamente recomendável manter o mínimo possível de pessoas nessa equipe.

Para obter mais informações sobre como configurar equipes e permissões de equipe, consulte "[Níveis de permissão nos repositórios da organização](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)".
