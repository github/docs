{% data variables.product.prodname_ghe_server %}-Benutzernamen dürfen nur alphanumerische Zeichen und Bindestriche (`-`) enthalten. {% data variables.product.prodname_ghe_server %} normalisiert nicht alphanumerische Zeichen im Benutzernamen Ihres Kontos zu einem Bindestrich. Beispielsweise wird der Benutzername `gregory.st.john` zu `gregory-st-john` normalisiert. Beachte, dass die normalisierten Benutzernamen weder mit einem Bindestrich beginnen noch darauf enden können. Darüber hinaus können sie nicht zwei aufeinanderfolgende Bindestriche enthalten.

Anhand von E-Mail-Adressen erstellte Benutzernamen werden anhand der normalisierten Zeichen erstellt, die dem Zeichen `@` vorangehen.

Wenn mehrere Konten zum selben {% data variables.product.prodname_ghe_server %}-Benutzernamen normalisiert werden, wird nur das erste Benutzerkonto erstellt. Nachfolgende Benutzer mit demselben Benutzernamen können sich nicht anmelden.
