---
title: Kann ich Konten für Personen in meiner Organisation erstellen?
intro: 'Zwar kannst Du Benutzer in eine von Dir erstellte Organisation hinzufügen, Du kannst aber keine persönlichen Benutzerkonten für andere Personen erstellen.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization/
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Create accounts for people
---

## About user accounts

Because you access an organization by logging in to a user account, each of your team members needs to create their own user account. After you have usernames for each person you'd like to add to your organization, you can add the users to teams.

{% ifversion fpt or ghec %}
If you need greater control over the user accounts of your organization members, consider {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}
{% endif %}

## Benutzer zu Deiner Organisation hinzufügen

1. Provide each person instructions to [create a user account](/articles/signing-up-for-a-new-github-account).
2. Frage alle Personen, die Mitglied Deiner Organisation werden sollen, nach ihrem Benutzernamen.
3. [Lade die neuen persönlichen Konten zum Beitritt](/articles/inviting-users-to-join-your-organization) zu Deiner Organisation ein. Nutze [Organisationsrollen](/articles/permission-levels-for-an-organization) und [Repository-Berechtigungen](/articles/repository-permission-levels-for-an-organization), um den Zugriff der einzelnen Konten einzuschränken.
