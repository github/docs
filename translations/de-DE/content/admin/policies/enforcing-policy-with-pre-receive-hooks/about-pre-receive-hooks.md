---
title: Informationen zu Pre-Receive-Hooks
intro: '*Pre-Receive-Hooks* sind Skripts, die auf der {% data variables.product.prodname_ghe_server %}-Appliance ausgeführt werden, die Sie zum Implementieren von Qualitätsprüfungen verwenden können.'
redirect_from:
  - /enterprise/admin/developer-workflow/about-pre-receive-hooks
  - /enterprise/admin/policies/about-pre-receive-hooks
  - /admin/policies/about-pre-receive-hooks
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
---
Wenn ein Push vorgenommen wird, wird jedes Skript in einer isolierten Umgebung ausgeführt und kann den Inhalt der Pushs überprüfen. Die Skripts sorgen dafür, dass der Push bei dem Beendigungsstatus 0 akzeptiert und bei einem Beendigungsstatus ungleich 0 abgelehnt wird.

### Nutzungsszenarien
Verwenden Sie Pre-Receive-Hooks, um Geschäftsregeln zu erfüllen, Regelüberwachungen durchzusetzen und bestimmte allgemeine Fehler zu verhindern.

Beispiele zur möglichen Verwendungsweise von Pre-Receive-Hooks:

- Legen Sie fest, dass Commit-Mitteilungen einem bestimmtem Muster oder Format folgen, also dass sie beispielsweise eine gültige Ticketnummer enthalten oder eine bestimmte Länge aufweisen.
- Sperren Sie einen Branch oder ein Repository, indem Sie alle Push-Vorgänge ablehnen.
- Prevent sensitive data from being added to the repository by blocking keywords, patterns or file types.
- Verhindern Sie, dass der Autor eines privaten Repositorys seine eigenen Änderungen mergen kann.

### Auswirkung auf die Leistung und Workflows
Die Auswirkung auf Entwickler und auf deren Workflows kann erheblich sein und muss sorgsam durchdacht werden. Von Pre-Receive-Hooks, die auf Geschäftsanforderungen basieren und durchdacht implementiert werden, kann die Organisation als Ganzes am meisten profitieren.

Pre-Receive-Hooks können unerwünschte Auswirkungen auf die Leistung von {% data variables.product.product_location %} haben und sollten sorgsam implementiert und überprüft werden.
