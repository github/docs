---
title: Informationen zu Webhooks
redirect_from:
  - /post-receive-hooks/
  - /articles/post-receive-hooks/
  - /articles/creating-webhooks/
  - /articles/about-webhooks
intro: 'Webhooks bieten die Möglichkeit, Benachrichtigungen an einen externen Webserver zu senden, wenn bestimmte Aktionen in einem Repository oder in einer Organisation auftreten.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% tip %}

**Tipp:** {% data reusables.organizations.owners-and-admins-can %} verwalten Webhooks für eine Organisation. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

Webhooks können ausgelöst werden, wenn eine Reihe von Aktionen in einem Repository oder einer Organisation ausgeführt werden. Du kannst einen Webhook beispielsweise so konfigurieren, dass er in folgenden Fällen ausgeführt wird:

* Ein Push an ein Repository wird durchgeführt.
* Ein Pull Request wird geöffnet.
* Eine {% data variables.product.prodname_pages %}-Website wird erstellt
* Ein neues Mitglied wird zu einem Team hinzugefügt.

Using the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, you can make these webhooks update an external issue tracker, trigger CI builds, update a backup mirror, or even deploy to your production server.

Um einen neuen Webhook einzurichten, benötigst Du Zugriff auf einen externen Server und Du musst Dich mit den benötigten technischen Verfahren vertraut machen. For help on building a webhook, including a full list of actions you can associate with, see "[Webhooks](/webhooks)."
