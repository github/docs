---
title: Informationen zum Windows Installer-Paket für GitHub Desktop
intro: 'Als Netzwerkadministrator kannst Du die Windows Installer-Paketdatei („.msi“) mit „Group Policy“ (Gruppenrichtlinie) oder einem anderen Remote-Installationssystem verwenden, um {% data variables.product.prodname_desktop %} auf Computern bereitzustellen, die Microsoft Windows in einem von Active Directory verwalteten Netzwerk ausführen.'
versions:
  free-pro-team: '*'
---

Das Windows Installer-Paket extrahiert den eigenständigen Installer (`.exe`) und konfiguriert Windows so, dass {% data variables.product.prodname_desktop %} installiert wird, wenn sich ein Benutzer das nächste Mal bei seiner Workstation anmeldet. Benutzer müssen berechtigt sein, {% data variables.product.prodname_desktop %} in ihrem Benutzerverzeichnis zu installieren.

Wenn ein Benutzer das Windows Installer-Paket für {% data variables.product.prodname_desktop %} direkt ausführt, muss er sich bei seiner Workstation abmelden und erneut anmelden, um die Installation abzuschließen.
