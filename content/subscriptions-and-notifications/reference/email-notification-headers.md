---
title: Email notification headers
intro: 'Learn how to filter email notifications by using information in the headers.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Notifications
---

Each email notification that {% data variables.product.prodname_dotcom %} sends contains header information. The header information in every email is consistent, so you can use it in your email client to filter or forward all {% data variables.product.prodname_dotcom %} notifications, or certain types of {% data variables.product.prodname_dotcom %} notifications.

>[!NOTE] If you believe you're receiving notifications that don't belong to you, examine the `X-GitHub-Recipient` and `X-GitHub-Recipient-Address` headers. These headers show who the intended recipient is. Depending on your email setup, you may receive notifications intended for another user.

| Header | Information |
| --- | --- |
| `From` address | This address will always be {% ifversion fpt %}`notifications@github.com`{% elsif ghec %}`notifications@github.com` or `notifications@SUBDOMAIN.ghe.com`{% else %}the no-reply email address configured by your site administrator{% endif %}. |
| `To` field | This field connects directly to the thread. If you reply to the email, you'll add a new comment to the conversation. |
| `Cc` address | {% data variables.product.github %} will `cc` you if you're subscribed to a conversation. The second `cc` email address matches the notification reason. The suffix for these notification reasons is {% ifversion fpt %}`@noreply.github.com`{% elsif ghec %}`@noreply.github.com` or `@noreply.SUBDOMAIN.ghe.com`{% else %}based on the no-reply email address configured by your site administrator{% endif %}. The possible notification reasons are: <ul><li>`assign`: You were assigned to an issue or pull request.</li><li>`author`: You created an issue or pull request.</li><li>`ci_activity`: A {% data variables.product.prodname_actions %} workflow run that you triggered was completed.</li><li>`comment`: You commented on an issue or pull request.</li><li>`manual`: There was an update to an issue or pull request you manually subscribed to.</li><li>`mention`: You were mentioned on an issue or pull request.</li><li>`push`: Someone committed to a pull request you're subscribed to.</li><li>`review_requested`: You or a team you're a member of was requested to review a pull request.</li><li>`security_alert`: {% data variables.product.prodname_dotcom %} detected a vulnerability in a repository you receive alerts for.</li><li>`state_change`: An issue or pull request you're subscribed to was either closed or opened.</li><li>`subscribed`: There was an update in a repository you're watching.</li><li>`team_mention`: A team you belong to was mentioned on an issue or pull request.</li><li>`your_activity`: You opened, commented on, or closed an issue or pull request.</li></ul> |
| `List-Id` field | This field identifies the name of the repository and its owner. The format of this address is always `OWNER/REPOSITORY <REPOSITORY.OWNER>`, e.g. `List-Id: grain-lang/grain <grain.grain-lang.{% data variables.product.product_url %}>`. |
| `X-GitHub-Severity` field | {% data reusables.repositories.security-alerts-x-github-severity %} The possible severity levels are:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts). |
