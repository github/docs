{% warning %}

**Warnung:**

- Wenn Du den Zugriff einer Person auf ein privates Repository entfernst, werden all ihre Forks in diesem privaten Repositorys gelöscht. Lokale Klone des privaten Repositorys werden beibehalten. Wenn der Zugriff eines Teams auf ein privates Repository widerrufen wird oder ein Team mit Zugriff auf ein privates Repository gelöscht wird und die Teammitglieder nicht über ein anderes Team auf das Repository zugreifen können, werden die privaten Forks des Repositorys gelöscht.{% ifversion ghes %}
- Wenn Du [bei aktivierter LDAP-Synchronisation](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap/#enabling-ldap-sync) eine Person aus einem Repository entfernst, verliert diese den Zugriff, aber ihre Forks werden nicht gelöscht. Wenn die Person innerhalb von drei Monaten einem Team mit Zugriff auf das ursprüngliche Organisations-Repository hinzugefügt wird, wird ihr Zugriff auf die Forks bei der nächsten Synchronisierung automatisch wiederhergestellt.{% endif %}
- Sie sind dafür verantwortlich, dass die Personen, denen Sie den Zugriff auf ein Repository entziehen, vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löschen.

- Personen mit Administratorberechtigungen für ein privates{% ifversion fpt or ghes or ghae %} oder internes{% endif %} Repository können das Forking dieses Repositorys verbieten, und Organisationsinhaber können das Forking jedes privaten{% ifversion fpt or ghes or ghae %} oder internen{% endif %} Repository in einer Organisation verbieten. Weitere Informationen findest Du unter „[Verwalten der Forking-Richtlinie für Deine Organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)" und „[Verwalten der Forking-Richtlinie für Dein Repository".](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)

{% endwarning %}
