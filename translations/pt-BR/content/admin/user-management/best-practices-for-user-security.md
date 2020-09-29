---
title: Práticas recomendadas de segurança de usuários
intro: 'Além das medidas de segurança (SSL, isolamento de subdomínio, configuração de firewall) que os administradores do site podem implementar no nível da instância, os usuários podem seguir algumas etapas para ajudar a proteger a {% data variables.product.product_location_enterprise %}.'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
versions:
  enterprise-server: '*'
---

### Habilitar a autenticação de dois fatores

A autenticação de dois fatores (2FA) é uma modalidade de login em sites e serviços que exige outro fator além da senha. No caso do {% data variables.product.prodname_ghe_server %}, o segundo fator é um código de autenticação exclusivo gerado por um aplicativo no smartphone do usuário. É altamente recomendável pedir que os usuários habilitem a autenticação de dois fatores em suas contas. Com a autenticação de dois fatores, a senha e o smartphone do usuário teriam que ser comprometidos para violar a conta.

Para obter mais informações sobre como configurar a autenticação de dois fatores, consulte "[Sobre a autenticação de dois fatores](/enterprise/{{ currentVersion }}/user/articles/about-two-factor-authentication)".

### Exigir um gerenciador de senhas

É altamente recomendável pedir que os usuários instalem e usem um gerenciador de senhas (como o [LastPass](https://lastpass.com/), o [1Password](https://1password.com/) ou o [Keeper](https://keepersecurity.com/)) em qualquer computador que usarem para se conectar à {% data variables.product.product_location_enterprise %}. Essa medida garante senhas mais fortes e muito menos passíveis de violação ou roubo.

### Restringir o acesso a equipes e repositórios

Para limitar a superfície de ataque em caso de violações de segurança, é altamente recomendável liberar o acesso dos usuários somente a equipes e repositórios essenciais para eles trabalharem. Como os integrantes com função de Proprietário podem acessar todas as equipes e repositórios da organização, é altamente recomendável manter o mínimo possível de pessoas nessa equipe.

Para obter mais informações sobre como configurar equipes e permissões de equipe, consulte "[Níveis de permissão nos repositórios da organização](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)".
