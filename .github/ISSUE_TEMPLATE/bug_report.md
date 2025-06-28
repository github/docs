---
name: Bug report
about: Create a report to help us improve
title: ''
labels: ''
assignees: ''

---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.
Configuratie-opties op het hoogste niveau
Verplichte velden

name (Tekenreeks): de naam van de sjabloon. Moet uniek zijn voor alle sjablonen, inclusief Markdown-sjablonen.
about (Tekenreeks): Een beschrijving van het beoogde gebruik van dit sjabloon. Dit wordt weergegeven in de interface voor het kiezen van het probleemsjabloon.
Optionele velden

assignees (Array of tekenreeks): Dit probleem wordt automatisch toegewezen aan deze gebruikers. Kan een reeks gebruikersnamen of een door komma's gescheiden string zijn, bijvoorbeeld "monalisa,nat"
labels (Array of tekenreeks): Deze uitgifte krijgt deze labels automatisch wanneer deze wordt gemaakt. Kan een array van labels of door komma's gescheiden strings zijn, bijv. "bug,needs-triage"
title (Tekenreeks): Standaardtitel die vooraf wordt ingevuld in het formulier voor het indienen van de uitgave.
body (Array): Definitie van gebruikersinvoer.
Configuratie-opties voor invoertype
Markdown
Markdown-blokken bevatten willekeurige tekst die een onderhouder aan een sjabloon kan toevoegen om extra context of begeleiding te bieden aan een bijdrager. Ondersteunt Markdown-opmaak. Deze tekst wordt niet weergegeven in de ingediende hoofdtekst van de uitgifte.

Verplichte velden

value (String): De tekst die wordt weergegeven. Markdown-opmaak wordt ondersteund.
Tip #1: YAML-verwerking zorgt ervoor dat het hash-symbool wordt behandeld als een opmerking. Als u Markdown-koppen wilt invoegen, laat u uw tekst tussen aanhalingstekens plaatsen.

Tip #2: Voor tekst met meerdere regels kunt u de pipe-operator gebruiken.

Voorbeeld 
body:
- type: markdown
  attributes:
    value: "## Welcome!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug! If you need real-time heInvoer zijn invoervelden met één regel. Bijdragers kunnen markdown-opmaak gebruiken in hun reacties.

Vereiste attributen

label (String): Een korte beschrijving van de verwachte gebruikersinvoer.
Optionele attributen

description (Tekenreeks): Extra context of richtlijnen bij het invullen van deze formulierinvoer. Ondersteunt Markdown.
placeholder (Tekenreeks): Wordt weergegeven als een semi-transparant 'tijdelijke aanduiding'-element in het invoerveld wanneer het leeg is.
value (Tekenreeks): Standaardtekst die vooraf is ingevuld in het invoerveld.
LEGITIMATIEBEWIJS

id (Tekenreeks): Optionele unieke identificatiecode. Mag alleen alfanumerieke tekens bevatten, , en .-_
Validaties

required (Booleaans): Als , kan het formulier pas worden ingediend als het is ingevuld.true
Voorbeeldlp, join us on Discord.
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Whenever I visit the user account page (1-2 times a week)"
  validations:
    required: true
Tekstgebied
Tekstgebieden lijken veel op invoer en zijn invoervelden met meerdere regels. Meestal gebruikt als u wilt dat een bijdrager een antwoord geeft dat langer is dan een paar woorden. Bijdragers kunnen markdown-opmaak gebruiken in hun reacties.

Vereiste attributen

label (String): Een korte beschrijving van de verwachte gebruikersinvoer.
Optionele attributen

description (Tekenreeks): Extra context of richtlijnen bij het invullen van deze formulierinvoer. Ondersteunt Markdown.
placeholder (Tekenreeks): Wordt weergegeven als een semi-transparant 'tijdelijke aanduiding'-element in het invoerveld wanneer het leeg is.
value (Tekenreeks): Standaardtekst die vooraf is ingevuld in het invoerveld.
render (Tekenreeks): Als er een waarde is opgegeven, wordt de door de gebruiker ingediende tekst automatisch opgemaakt in een codeblok.
LEGITIMATIEBEWIJS

id (Tekenreeks): Optionele unieke identificatiecode. Mag alleen alfanumerieke tekens bevatten, , en .-_
Validaties

required (Booleaans): Als , kan het formulier pas worden ingediend als het is ingevuld.true
Voorbeeld

  body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Please walk us through it step by step."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
  Vervolgkeuzelijst
Gebruikers kunnen hun antwoord selecteren uit opties die door de beheerder zijn gedefinieerd.

Vereiste attributen

label (String): Een korte beschrijving van de verwachte gebruikersinvoer.
options (String Array): Set met waarden waaruit de gebruiker kan kiezen om te beantwoorden. Ze kunnen niet leeg zijn en alle keuzes moeten verschillend zijn.
Optionele attributen

description (Tekenreeks): Extra context of richtlijnen bij het invullen van deze formulierinvoer. Ondersteunt Markdown.
multiple (Booleaans): Als kunnen gebruikers meerdere selecties indienen.true
LEGITIMATIEBEWIJS

id (Tekenreeks): Optionele unieke identificatiecode. Mag alleen alfanumerieke tekens bevatten, , en .-_
Validaties

required (Booleaans): Als , kan het formulier pas worden ingediend als er ten minste één keuze is geselecteerd.true
Voorbeeld

  body:
- type: dropdown
  id: download
  attributes:
    label: How did you download the software?
    options:
      - Homebrew
      - MacPorts
      - apt-get
      - Built from source
  validations:
    required: true

  Selectievakjes
Een groep van een of meer selectievakjes. Dit wordt opgeslagen als een selectievakje voor Markdown en blijft interactieve updates ondersteunen.

Vereiste attributen

options (Array): Set met waarden waaruit de gebruiker kan kiezen om te beantwoorden. Kan niet leeg zijn. Elk item moet een , hieronder beschreven hebben.label
Optionele attributen

label (String): Een korte beschrijving van de verwachte gebruikersinvoer.
description (Tekenreeks): Extra context of richtlijnen bij het invullen van deze formulierinvoer. Ondersteunt Markdown.
LEGITIMATIEBEWIJS

id (Tekenreeks): Optionele unieke identificatiecode. Mag alleen alfanumerieke tekens bevatten, , en .-_
Binnen elk item in worden de volgende velden ondersteund:options

Vereist

label (Tekenreeks): De tekst die naast het selectievakje verschijnt. Markdown wordt ondersteund voor vetgedrukte of cursieve tekstopmaak en hyperlinks.
Facultatief

required (Booleaans): Indien nodig kan het formulier niet worden ingediend, tenzij het is aangevinkt.
Voorbeeld

body:
- type: checkboxes
  id: cat-preferences
  attributes:
    label: What kinds of cats do you like?
    description: You may select more than one.
    options:
      - label: Orange cat (required. Everyone likes orange cats.)
        required: true
      - label: **Black cat**
  

