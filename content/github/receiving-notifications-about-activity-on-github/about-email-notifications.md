---
title: About email notifications
intro: 'When you enable email notifications, you will receive participating and watching notifications in your email client, and you can filter them using the email header information.'
versions:
  enterprise-server: <2.21
---

For more information about the differences between *participating* and *watching* notifications, see "[About notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)."

After enabling email notifications, {% data variables.product.product_name %} will send notifications to you as multipart emails that contain both HTML and plain text copies of the content. Email notification content includes any Markdown, @mentions, emojis, hash-links, and more, that appear in the original content on {% data variables.product.product_name %}. If you only want to see the text in the email, you can configure your email client to display the plain text copy only. For more information about enabling email notifications, see "[Choosing the delivery method for your notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)."

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

### Filtering email notifications

Each email notification that {% data variables.product.product_name %} sends contains header information. The header information in every email is consistent, so you can use it in your email client to filter or forward all {% data variables.product.product_name %} notifications, or certain types of {% data variables.product.product_name %} notifications.

Email notifications from {% data variables.product.product_name %} contain the following header information:

| Header | Information |
| --- | --- |
| `From` address | This address will always be 'the no-reply email address configured by your site administrator'. |
| `To` field | This field connects directly to the thread. If you reply to the email, you'll add a new comment to the conversation. |
| `Cc` address | {% data variables.product.product_name %} will `Cc` you if you're subscribed to a conversation. The second `Cc` email address matches the notification reason. The suffix for these notification reasons is {% data variables.notifications.cc_address %}. The possible notification reasons are: <ul><li>`assign`: You were assigned to an issue or pull request.</li><li>`author`: You created an issue or pull request.</li><li>`comment`: You commented on an issue or pull request.</li><li>`manual`: There was an update to an issue or pull request you manually subscribed to.</li><li>`mention`: You were mentioned on an issue or pull request.</li><li>`push`: Someone committed to a pull request you're subscribed to.</li><li>`review_requested`: You or a team you're a member of was requested to review a pull request.</li><li>`security_alert`: {% data variables.product.prodname_dotcom %} detected a vulnerability in a repository you receive security alerts for.</li><li>`state_change`: An issue or pull request you're subscribed to was either closed or opened.</li><li>`subscribed`: There was an update in a repository you're watching.</li><li>`team_mention`: A team you belong to was mentioned on an issue or pull request.</li><li>`your_activity`: You opened, commented on, or closed an issue or pull request.</li></ul> |
| `mailing list` field | This field identifies the name of the repository and its owner. The format of this address is always `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`. {% if currentVersion ver_gt "enterprise-server@2.19" % %}
| `X-GitHub-Severity` field | {% data reusables.repositories.security-alerts-x-github-severity %} The possible severity levels are:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)." |{% endif %}

### Further reading

- "[Listing the repositories you're watching](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
- "[Watching and unwatching repositories](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "[Subscribing to and unsubscribing from notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"{% if currentVersion ver_gt "enterprise-server@2.17" %}
- "[Creating gists](/articles/creating-gists)"{% endif %}
