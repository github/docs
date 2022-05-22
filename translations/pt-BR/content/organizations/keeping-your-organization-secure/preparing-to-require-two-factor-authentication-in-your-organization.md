---
title: Preparar para exigir autenticação de dois fatores na organização
intro: 'Antes de exigir autenticação de dois fatores (2FA), é possível notificar os usuários sobre as próximas mudanças e verificar quem já utiliza 2FA.'
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Organizations
  - Teams
---

Recomendamos que você notifique {% if currentVersion == "free-pro-team@latest" %}os integrantes da organização, colaboradores externos e os gerentes de cobrança{% else %}integrantes da organização e colaboradores externos{% endif %} a pelo menos uma semana antes de exigir 2FA na sua organização.

Se você exigir o uso da autenticação de dois fatores na organização, os integrantes, colaboradores externos e gerentes de cobrança (inclusive contas bots) que não usam 2FA serão removidos da organização e perderão acesso aos repositórios dela. Eles também perderão acesso às bifurcações dos repositórios privados da organização.

Antes de exigir 2FA na organização, recomendamos que você:
  - [Habilite a 2FA](/articles/securing-your-account-with-two-factor-authentication-2fa/) em sua conta pessoal
  - Solicite às pessoas da organização para configurar 2FA na conta delas
  - Verifique se [os usuários na organização têm a 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/)
  - Alerte os usuários que assim que a 2FA estiver habilitada, aqueles que não a tiverem habilitado serão automaticamente removidos da organização
