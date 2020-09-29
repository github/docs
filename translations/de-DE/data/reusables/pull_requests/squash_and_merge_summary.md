Wenn Du die Option **Squash and merge** (Squash und Merge) in einer Abrufanfrage auf {% data variables.product.product_location %} auswählst, werden die Commits der Abrufanfrage in einen einzelnen Commit gesquasht. Anstatt dass alle einzelnen Commits eines Mitarbeiters aus einem Themen-Branch angezeigt werden, werden die Commits in einem Commit kombiniert und in den Standardbranch zusammengeführt. Pull Requests mit gesquashten Commits werden mithilfe der [Fast-Forward-Option](https://git-scm.com/docs/git-merge#_fast_forward_merge) zusammengeführt.

Zum Squashen und Mergen von Pull Requests musst Du im Repository über [Schreibberechtigungen](/articles/repository-permission-levels-for-an-organization/) verfügen. Zudem muss im Repository [Squash-Zusammenführung zulässig sein](/articles/configuring-commit-squashing-for-pull-requests/).

![Commit-Squashing-Diagramm](/assets/images/help/pull_requests/commit-squashing-diagram.png)

Mittels Squash und Merge kannst Du einen optimierteren Git-Verlauf in Deinem Repository erstellen. In Arbeit befindliche Commits sind hilfreich, wenn Du auf einem Feature-Branch arbeitest, sie müssen aber nicht unbedingt im Git-Verlauf beibehalten werden. Wenn Du diese Commits während dem Merge zum Standardbranch in einen Commit zusammenführst (squashen), kannst Du die ursprünglichen Änderungen in einem leeren Git-Verlauf beibehalten.
