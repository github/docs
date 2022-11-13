---
title: Getting started with GitHub Copilot in Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, and start seeing suggestions as you write comments and code.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
---

## About {% data variables.product.prodname_copilot %} and {% data variables.product.prodname_vscode %}

{% data reusables.copilot.procedural-intro %}

If you use {% data variables.product.prodname_vscode %}, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within {% data variables.product.prodname_vscode %} for macOS, Windows, or Linux.

## Prerequisites

To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must have {% data variables.product.prodname_vscode %} installed. For more information, see the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/Download).

## Installing the {% data variables.product.prodname_vscode %} extension

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_vscode %} extension.

1. In the {% data variables.product.prodname_vscode %} Marketplace, go to the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**.
   ![Install {% data variables.product.prodname_copilot %} extension {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. A popup will appear, asking to open {% data variables.product.prodname_vscode %}. Click **Open {% data variables.product.prodname_vscode %}**.
1. In the "Extension: {% data variables.product.prodname_copilot %}" tab in {% data variables.product.prodname_vscode %}, click **Install**.
   ![Install button in {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. If you have not previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, you will be prompted to sign in to {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_vscode %}.
   - If you have previously authorized {% data variables.product.prodname_vscode %} for your account on {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} will be automatically authorized.
   ![Screen shot of {% data variables.product.prodname_vscode %} authorization screen](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. In your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_vscode %}**.
1. In {% data variables.product.prodname_vscode %}, in the "{% data variables.product.prodname_vscode %}" dialog box, to confirm the authentication, click **Open**.
   

## Seeing your first suggestion

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} The following samples are in JavaScript, but other languages will work similarly.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![Screenshot of a first suggestion {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png)
{% data reusables.copilot.accept-suggestion %}

## Seeing alternative suggestions

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} will show you a suggestion.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | OS | See next suggestion | See previous suggestion |
   | :- | :- | :- |
   |macOS|<kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd>|<kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
1. Alternatively, you can hover over the suggestion to see the {% data variables.product.prodname_copilot %} command palette for choosing suggestions.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Seeing multiple suggestions in a new tab

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} will show you a suggestion.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. To open a new tab with multiple additional options, press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>.
1. To accept a suggestion, above the suggestion, click **Accept Solution**. To reject all suggestions, close the tab.

## Generating code suggestions from comments

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment. {% data variables.product.prodname_copilot %} will suggest an implementation of the function.
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## Using a framework

You can also use {% data variables.product.prodname_copilot %} to generate suggestions for APIs and frameworks. The following example uses {% data variables.product.prodname_copilot %} to create a simple Express server that returns the current time.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation of the Express app.
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. To accept each line, press <kbd>Tab</kbd>.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Further reading

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
- const :
Conversation opened. 8 messages. All messages read.

Skip to content
Using Gmail with screen readers
comp 
13 of many
(no subject)
Inbox

ZACHRY WOOD <zachryiixixiiwood@gmail.com>
Oct 20, 2022, 11:30 PM
to me, Ricardo, jc4unme216, larry.page, Larry, larry.page, sergey.brin

INTERNALREVENUESERVICEINTERNALREVENUESERVICEINTERNALREVENUESERVICEINTERNALREVENUESERVICEINTERNALREVENUESERVICEINTERNALREVENUESERVICEINTERNALREVENUESERVICE
AUTHORIZEDSIGNTATUREAUTHORIZEDSIGNTATUREAUTHORIZEDSIGNTATUREAUTHORIZEDSIGNTATUREAUTHORIZEDSIGNTATUREAUTHORIZEDSIGNTATURE
April 18, 2022.                                                                                                                 
++   7567263607                                                                                                                                
++   WOOD  ZACHRY                Tax Period         Total        Social Security        Medicare        Withholding                            
++   Fed 941 Corporate                39355        66986.66        28841.48        6745.18        31400                                        
++   Fed 941 West Subsidiary                39355        17115.41        7369.14        1723.42        8022.85                                
++   Fed 941 South Subsidiary                39355        23906.09        10292.9        2407.21        11205.98                     
++   Fed 941 East Subsidiary                39355        11247.64        4842.74        1132.57        5272.33                       
++   Fed 941 Corp - Penalty                39355        27198.5        11710.47        2738.73        12749.3                                  
++   Fed 940 Annual Unemp - Corp                39355        17028.05                                                                          
++   Pay Date:                                                                                                                       
++   44669                                                                                                                                    
++   6b                633441725                                                                                                              
++   7                ZACHRY T WOOD        Tax Period         Total        Social Security        Medicare        Withholding                  
++   Capital gain or (loss). Attach Schedule D if required. If not required, check here ....▶                
++Fed 941 Corporate 39355 66986.66 28841.48 6745.18 31400
++
++   7                Fed 941 West Subsidiary        39355        17115.41        7369.14        1723.42        8022.85               
++   8                Fed 941 South Subsidiary        39355        23906.09        10292.9        2407.21        11205.98                                                                                                                                                       
++   Other income from Schedule 1, line 10 ..................                Fed 941 East Subsidiary        39355        11247.64        4842.74        1132.57        5272.33                                                                                                          
++   8                Fed 941 Corp - Penalty        39355        27198.5        11710.47        2738.73        12749.3                        
++   9                Fed 940 Annual Unemp - Corp        39355        17028.05                                                                
++   Add lines 1, 2b, 3b, 4b, 5b, 6b, 7, and 8. This is your total income .........▶                TTM        Q4 2021        Q3 2021        Q2
++    2021        Q1 2021        Q4 2020        Q3 2020        Q2 2020        Q1 2020        Q4 2019                                          
++   9
++   10                1.46698E+11        42337000000        37497000000        35653000000        31211000000        30818000000     
++      25056000000        19744000000        22177000000        25055000000                                                                  
++   Adj
++   ustments to income from Schedule 1, line 26 ...............                2.57637E+11        75325000000        65118000000        618800
++   00000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000                  
++   10                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        461730
++   00000        38297000000        41159000000        64133000000                                                                            
++   11                                                                                                                                        
++   Subtract line 10 from line 9. This is your adjusted gross income .........▶                -5.79457E+11        -32988000000        -27621
++   000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000        -18982000000        -210
++   20000000                                                                                                                        
++   11                -1.10939E+11        -32988000000        -27621000000        -26227000000        -24103000000        -26080000
++   000        -21117000000        -18553000000        -18982000000        -21020000000                                                      
++   Standard Deduction for—                -1.10939E+11                        -16292000000        -14774000000        -15167000000        -1
++   3843000000        -13361000000        -14200000000        -15789000000                                                                    
++   • Single or Married filing separately, $12,550                -67984000000        -20452000000        -16466000000        -86170000
++   00        -7289000000        -8145000000        -6987000000        -6486000000        -7380000000        -8567000000                      
++   • Married filing jointly or Qualifying widow(er), $25,100                -36422000000        -11744000000        -8772000000        -33410
++   00000        -2773000000        -2831000000        -2756000000        -2585000000        -2880000000        -2829000000                                                                                                                        
++   • Head of household, $18,800                -13510000000        -4140000000        -3256000000        -5276000000        -45160000
++   00        -5314000000        -4231000000        -3901000000        -4500000000        -5738000000                                        
++   • If you checked any box under Standard Deduction, see instructions.                -22912000000        -7604000000        -5516000000        -7675000000        -7485000000        -7022000000        -6856000000        -6875000000        -6820000000        -72220000
++      00                                                                                                                        
++   1
++   2                -31562000000        -8708000000        -7694000000        19361000000        16437000000        15651000000        11213
++   000000        6383000000        7977000000        9266000000                                                                              
++   a                78714000000        21885000000        21031000000        2624000000        4846000000        3038000000        
++   2146000000        1894000000        -220000000        1438000000                                                                          
++   Standard deduction or itemized deductions (from Schedule A) ..                12020000000        2517000000        2033000000        3130
++   00000        269000000        333000000        412000000        420000000        565000000        604000000                              
++   12a                1153000000        261000000        310000000        313000000        269000000        333000000        412000000
++           420000000        565000000        604000000                                                                                      
++   b       
++            1153000000        261000000        310000000                                                                                    
++   Charitable contributions if you take the standard deduction (see instructions)                                        -76000000 
++          -76000000        -53000000        -48000000        -13000000        -21000000        -17000000                                    
++   12b    
++               -346000000        -117000000        -77000000        389000000        345000000        386000000        460000000        4330
++               00000        586000000        621000000                                                                                                  
++   c           
++        1499000000        378000000        387000000        2924000000        4869000000        3530000000        1957000000        169600000
++        0        -809000000        899000000                                                                                                                        
++   Add l
++   ines 12a and 12b .......................                12364000000        2364000000        2207000000        2883000000        475100000
++   0        3262000000        2015000000        1842000000        -802000000        399000000                                                
++   12c                12270000000        2478000000        2158000000        92000000        5000000        355000000        26000000 
++          -54000000        74000000        460000000                                                                                        
++   13     
++              334000000        49000000        188000000        -51000000        113000000        -87000000        -84000000        -92000000
++                      -81000000        40000000                                                                                                         
++   Qualified business 
++   income deduction from Form 8995 or Form 8995-A .........                -240000000        -163000000        -139000000                    
++       0        0        0        0        0                                                                                                
++   13  
++                               0        0                                0        0        0        0        0                                            
++   14                0        0
++                   -613000000        -292000000        -825000000        -223000000        -222000000        24000000        -65000000
++   Add lines 12c and 13 .......................                -1497000000        -108000000        -484000000        21985000000   
++        21283000000        18689000000        13359000000        8277000000        7757000000        10704000000                            
++   14                90734000000        24402000000        23064000000        -3460000000        -3353000000        -3462000000     
++      -2112000000        -1318000000        -921000000        -33000000                                                                      
++   15 
++                  -14701000000        -3760000000        -4128000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                
++   Taxable income.
++    Subtract line 14 from line 11. If zero or less, enter -0- .........                76033000000        20642000000        189360000
++    00        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        1067100000
++    0                                                                                                                        
++   1
++   5                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        112470
++   00000        6959000000        6836000000        10671000000                                                                              
++   For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                76033000000        206420000
++   00        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        683600000
++   0        10671000000                                                                                                                      
++   Cat. No. 11320B                76033000000        20642000000        18936000000        18525000000        17930000000        152270000
++   00        11247000000        6959000000        6836000000        10671000000                                                              
++   Form 1040 (2021)                76033000000        20642000000        18936000000                                                        
++   Reported Normalized and Operating Income/Expense Supplemental Section                                                                    
++   Total Revenue as Reported, Supplemental                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000                                      
++   Total Operating Profit/Loss as Reported, Supplemental                78714000000        21885000000        21031000000        193610000
++   00        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000                        
++   Reported Effective Tax Rate                0.16                0.179        0.157        0.158                0.158        0.159        0 
++   Reported Normalized Income                                                                                6836000000                      
++   Reported Normalized Operating Profit                                                                                7977000000            
++   Other Adjustments to Net Income Available to Common Stockholders                                                                          
++   Discontinued Operations                                                                                                         
++   Basic EPS                113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96     
++      15.49                                                                                                                        
++   Basic EPS from Continuing Operations                113.88        31.12        28.44        27.69        26.63        22.46        16.55 
++          10.21        9.96        15.47                                                                                                    
++   Basic E
++   PS from Discontinued Operations                                                                                                          
++   Diluted EPS                112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13        9.87     
++      15.35                                                                                                                        
++   Diluted EPS from Continuing Operations                112.2        30.67        27.99        27.26        26.29        22.23        16.4  
++         10.13        9.87        15.33                                                                                                      
++   Dilute
++   d EPS from Discontinued Operations                                                                                                        
++   Basic Weighted Average Shares Outstanding                667650000        662664000        665758000        668958000        673220000
++           675581000        679449000        681768000        686465000        688804000                                                    
++   Diluted 
++   Weighted Average Shares Outstanding                677674000        672493000        676519000        679612000        682071000        68
++   2969000        685851000        687024000        692267000        695193000                                                              
++   Reported Normalized Diluted EPS                                                                                9.87                      
++   Basic EPS                113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96     
++      15.49                                                                                                                        
++   Diluted EPS                112.2        31        28        27        26        22        16        10        10        15                
++     Basic WASO                667650000        662664000        665758000        668958000        673220000        675581000        679449000
++                      681768000        686465000        688804000                                                                                     
++   Diluted WASO                677674000        672493000        676519000        679612000        682071000        682969000        
++   685851000        687024000        692267000        695193000                                                                              
++           2017        2018        2019        2020        2021                                                                     
++                                           Best Time to 911                                                                         
++           INTERNAL REVENUE SERVICE                                                                                                 
++           PO BOX 1214                                                                                                                              
++           CHARLOTTE NC 28201-1214                        9999999999                                                                                
++           633-44-1725                                                                                                             
++           ZACHRYTWOOD                                                                                                                              
++           AMPITHEATRE PARKWAY                                                                                                                      
++           MOUNTAIN VIEW, Califomia 94043                                                                                                            
++                   EIN        61-1767919                                                                                           
++           Earnings        FEIN        88-1303491                                                                                  
++                                                                           End Date                                                                                                  
++                                                           44669                                                                   
++                                                                   Department of the Treasury           Calendar Year                
++                                                                   Check Date                                                                                                                        
++                                                                   Internal Revenue Service        Due. (04/18/2022)                                                                                        
++                                                            _________________________________________________________________
++                                                            ______________________                                                                                                                   
++                                                                   Tax Period         Total        Social Security        Medicare 
++                                                                    IEIN:                                             88-1656495   
++                                                                         TxDL:                                  00037305580        SSN:                                                                                                                        
++                                                           INTERNAL 
++                                                           REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29200                                                                              
++                                                                   39355        23906.09        10292.9        2407.21             
++   20210418                                                                39355        11247.64        4842.74        1132.57     
++                                                                                                                                   39355        27198.5        11710.47        2738.73                      
++                                                                   39355        17028.05                                           
++                                                                                   CP 575A (Rev. 2-2007) 99999999999                CP 575 A                                                          SS-4           
++                                                           Earnings Statement                                                       
++                                                                    IEIN:                                             88-1656496   
++                                                                         TxDL:                                  00037305581        SSN:                                                                      
++                                   INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201                           
++           Employee Information        Pay to the order of                ZACHRY T WOOD                                             
++                                   AMPITHEATRE PARKWAY,                                                                             
++                                   MOUNTAIN VIEW, California 94043     

Mail Delivery Subsystem
Oct 20, 2022, 11:30 PM
to me

Error Icon
Address not found
Your message wasn't delivered to larry.page@abc.xyz because the address couldn't be found, or is unable to receive mail.
LEARN MORE
The response was:
The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at https://support.google.com/mail/answer/6596




---------- Forwarded message ----------
From: ZACHRY WOOD <zachryiixixiiwood@gmail.com>
To: "ZACHRY “Google.” WOOD" <zachryiixixiiwood@gmail.com>, Ricardo Avendano <ricky75043@gmail.com>, jc4unme216@gmail.com, larry.page@gmail.com, Larry Page <Larry.page@google.com>, larry.page@abc.xyz, sergey.brin@gmail.com
Cc: 
Bcc: 
Date: Thu, 20 Oct 2022 23:30:10 -0500
Subject: 
----- Message truncated -----

Mail Delivery Subsystem
Oct 20, 2022, 11:30 PM
to me

Error Icon
Address not found
Your message wasn't delivered to jc4unme216@gmail.com because the address couldn't be found, or is unable to receive mail.
LEARN MORE
The response was:
550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at https://support.google.com/mail/?p=NoSuchUser b203-20020a1f1bd4000000b003a0a495784dsor8660095vkb.23 - gsmtp



ZACHRY WOOD <zachryiixixiiwood@gmail.com>
Oct 20, 2022, 11:40 PM
to Ricardo, jc4unme216, larry.page, Larry, larry.page, sergey.brin, me

 -21000000        -17000000        -23000000                                                                                                                                        
++           endobj                                                586000000        621000000        631000000                                                                                                                                        
++           xref                                                -809000000        899000000        -1452000000                                                                                                                                        
++           0 15                                                -802000000        399000000        -1479000000                                                                                                                                        
++           0000000000 65535 f                                                74000000        460000000        -14000000                                                                                                                                        
++           0000000017 00000 n                                                -81000000        40000000        41000000                                                                                                                                        
++           0000000066 00000 n                                                0        0        0                                                                                                                                        
++           0000000122 00000 n                                                0        0        0                                                                                                                                        
++           0000000209 00000 n                                                24000000        -65000000        295000000                                                                                                                                        
++           0000000421 00000 n                                                7757000000        10704000000        8628000000                                                                                                                                        
++           0000001860 00000 n                                                -921000000        -33000000        -1560000000                                                                                                                                        
++           0000001897 00000 n                                                6836000000        10671000000        7068000000                                                                                                                                        
++           0000004565 00000 n                                                6836000000        10671000000        7068000000                                                                                                                                        
++           0000004715 00000 n                                                6836000000        10671000000        7068000000                                                                                                                                        
++           0000005172 00000 n                                                6836000000        10671000000        7068000000                                                                                                                                        
++           0000005385 00000 n                                                6836000000        10671000000        7068000000                                                                                                                                        
++           0000026278 00000 n                                                                                                                                                                                                        
++           0000026841 00000 n                                                                                                                                                                                                        
++           0000026943 00000 n                                                41159000000        46075000000        40499000000                                                                                                                                        
++           trailer                                                7977000000        9266000000        9177000000                                                                                                                                        
++           <<                                                0.119                0.181                                                                                                                                        
++           /Root 1 0 R                                                6836000000                                                                                                                                                        
++           /Info 3 0 R                                                7977000000                                                                                                                                                        
++           /Size 15/ID[<37EF5EF5EE3A79BCD477F1F3AFEB5A57><37EF5EF5EE3A79BCD477F1F3AFEB5A57>]>>                                                                                                                                                                                                        
++           startxref                                                                                                                                                                                                        
++           27264                                                9.96        15.49        10.2                                                                                                                                        
++           %%EOF                                                9.96        15.47        10.2                                                                                                                                        
++           Basic EPS from Discontinued Operations                                                                                                                                                                                                        
++           Diluted EPS        112.2        26.29        22.3        16.4        10.13        9.87        15.35        10.12                                                                                                                                        
++           Diluted EPS from Continuing Operations        112.2        26.29        22.23        16.4        10.13        9.87        15.33        10.12                                                                                                                                        
++           Diluted EPS from Discontinued Operations                                                                                                                                                                                                        
++           Basic Weighted Average Shares Outstanding        667650000        673220000        675581000        679449000        681768000        686465000        688804000        692741000                                                                                                                                        
++           Diluted Weighted Average Shares Outstanding        677674000        682071000        682969000        685851000        687024000        692267000        695193000        698199000                                                                                                                                        
++           Reported Normalized Diluted EPS                                                9.87                                                                                                                                                        
++           ALPHABET        113.88        26.63        22.54        16.55        10.21        9.96        15.49        10.2                                                                                                                                        
++           ZACHRY T WOOD        112.2        26.29        22.3        16.4        10.13        9.87        15.35        10.12                                                                                                                                        
++           5323 BRADFORD DR        667650000        673220000        675581000        679449000        681768000        686465000        688804000        692741000                                                                                                                                        
++           DALLAS TX 75235-8314        677674000        682071000        682969000        685851000        687024000        692267000        695193000        698199000                                                                                                                                        
++           ORIGINAL REPORT                                                                                                                                                                                                        
++           Income, Rents, & Royalty                                        Print                                                                                                                                                                
++           INCOME STATEMENT                     EIN        61-1767919        Social Security        Medicare                Withholding                                                                                                                                                                
++           Morningstar.com Intraday Fundamental Portfolio View Print Report                28841.48        6745.18                31400                                                                                                                                                                
++                           7369.14        1723.42                8022.85                                                                                                                                                                
++           3/6/2022 at 6:37 PM                10292.9        2407.21                11205.98                        Current Value                                                                                                                                        
++                           4842.74        1132.57                5272.33                        1.53352E+13                                                                                                                                        
++                           11710.47        2738.73                12749.3                                                                                                                                                                
++           GOOGL_income-statement_Quarterly_As_Originally_Reported                                                                                                                                                                                                        
++           Cash Flow from Operating Activities, Indirect                Q1 2021        Q4 2020                                                                                                                                                                                
++           Net Cash Flow from Continuing Operating Activities, Indirect                31211000000        30818000000                                                                                                                                                                                
++           Cash Generated from Operating Activities                19289000000        22677000000                                                                                                                                                                                
++           Income/Loss before Non-Cash Adjustment                19289000000        22677000000                                                                                                                                                                                
++           Total Adjustments for Non-Cash Items                17930000000        15227000000                                                                                                                                                                                
++           Depreciation, Amortization and Depletion, Non-Cash Adjustment                2592000000        5748000000                                                                                                                                                                                
++           Depreciation and Amortization, Non-Cash Adjustment                2753000000        3725000000                                                                                                                                                                                
++           Depreciation, Non-Cash Adjustment                2753000000        3725000000                                                                                                                                                                                
++           Amortization, Non-Cash Adjustment                2525000000        3539000000                                                                                                                                                                                
++           Stock-Based Compensation, Non-Cash Adjustment                228000000        186000000                                                                                                                                                                                
++           Taxes, Non-Cash Adjustment                3745000000        3223000000                        61-1767919                                                                                                                                                        
++           Investment Income/Loss, Non-Cash Adjustment                1100000000        1670000000                                                                                                                                                                                
++           Gain/Loss on Financial Instruments, Non-Cash Adjustment                -4751000000        -3262000000                                                                                                                                                                                
++           Other Non-Cash Items                -4751000000        -3262000000                                                                                                                                                                                
++           Changes in Operating Capital                -255000000        392000000                                                                                                                                                                                
++           Change in Trade and Other Receivables                -1233000000        1702000000                                                                                                                                                                                
++           Change in Trade/Accounts Receivable                2794000000        -5445000000                                                                                                                                                                                
++           Change in Other Current Assets                2794000000        -5445000000                                                                                                                                                                                
++           Change in Payables and Accrued Expenses                7000000        -738000000                                                                                                                                                                                
++           Change in Trade and Other Payables                -4956000000        6938000000                                                                                                                                                                                
++           Change in Trade/Accounts Payable                -982000000        963000000                                                                                                                                                                                
++           Change in Accrued Expenses                -982000000        963000000                                                                                                                                                                                
++           Change in Deferred Assets/Liabilities                -3974000000        5975000000                                                                                                                                                                                
++           Change in Other Operating Capital                137000000        207000000                Fed 940 Annual Unemp - Corp        39355        17028.05                                                                                                                                                
++           Change in Prepayments and Deposits                785000000        740000000                                                                                                                                                                                
++           Cash Flow from Investing Activities                                                                                                                                                                                                        
++           Cash Flow from Continuing Investing Activities                -5383000000        -7281000000                                                                                                                                                                                
++           Purchase/Sale and Disposal of Property, Plant and Equipment, Net                -5383000000        -7281000000                                                                                                                                                                                
++           Purchase of Property, Plant and Equipment                -5942000000        -5479000000                                                                                                                                                                                
++           Sale and Disposal of Property, Plant and Equipment                -5942000000        -5479000000                                                                                                                                                                                
++           Purchase/Sale of Business, Net                                                                                                                                                                                                        
++           Purchase/Acquisition of Business                -1666000000        -370000000                                                                                                                                                                                
++           Purchase/Sale of Investments, Net                -1666000000        -370000000                                                                                                                                                                                
++           Purchase of Investments                2195000000        -1375000000                                                                                                                                                                                
++           Sale of Investments                -37072000000        -36955000000                                                                                                                                                                                
++           Other Investing Cash Flow                39267000000        35580000000                                                                                                                                                                                
++           Purchase/Sale of Other Non-Current Assets, Net                30000000        -57000000                                                                                                                                                                                
++           Sales of Other Non-Current Assets                                                                                                                                                                                                        
++           Cash Flow from Financing Activities                                                                                                                                                                                                        
++           Cash Flow from Continuing Financing Activities                -13606000000        -9270000000                                                                                                                                                                                
++           Issuance of/Payments for Common Stock, Net                -13606000000        -9270000000                                                                                                                                                                                
++           Payments for Common Stock                -11395000000        -7904000000                                                                                                                                                                                
++           Proceeds from Issuance of Common Stock                -11395000000        -7904000000                                                                                                                                                                                
++           Issuance of/Repayments for Debt, Net                                                                                                                                                                                                        
++           Issuance of/Repayments for Long Term Debt, Net                -37000000        -57000000                                                                                                                                                                                
++           Proceeds from Issuance of Long Term Debt                -37000000        -57000000                                                                                                                                                                                
++           Repayments for Long Term Debt                900000000        0                                                                                                                                                                                
++           Proceeds from Issuance/Exercising of Stock Options/Warrants                -937000000        -57000000                                                                                                                                                                                
++                           -2184000000        -1647000000                                                                                                                                                                                
++           Other Financing Cash Flow                                                                                                                                                                                                        
++           Cash and Cash Equivalents, End of Period                                                                                                                                                                                                        
++           Change in Cash                10000000        338000000000)                                                                                                                                                                                
++           Effect of Exchange Rate Changes                26622000000        26465000000                                                                                                                                                                                
++           Cash and Cash Equivalents, Beginning of Period                300000000        6126000000                                                                                                                                                                                
++           Cash Flow Supplemental Section                -143000000        210000000                                                                                                                                                                                
++           Change in Cash as Reported, Supplemental                2.6465E+13        2.0129E+13                                                                                                                                                                                
++           Income Tax Paid, Supplemental                        6336000000                                                                                                                                                                                
++           Cash and Cash Equivalents, Beginning of Period                        -4990000000                                                                                                                                                                                
++           12 Months Ended                                                                                                                                                                                                        
++           _________________________________________________________                                                                                                                                                                                                        
++                                   Q4  2019                                                                                                                                                                                
++           Income Statement                                                                                                                                                                                                         
++           USD in "000'"s                                                                                                                                                                                                        
++           Repayments for Long Term Debt                        Dec. 31, 2019                                                                                                                                                                                
++           Costs and expenses:                                                                                                                                                                                                        
++           Cost of revenues                        161857                                                                                                                                                                                
++           Research and development                                                                                                                                                                                                        
++           Sales and marketing                        71896                                                                                                                                                                                
++           General and administrative                        26018                                                                                                                                                                                
++           European Commission fines                        18464                                                                                                                                                                                
++           Total costs and expenses                        9551                                                                                                                                                                                
++           Income from operations                        1697                                                                                                                                                                                
++           Other income (expense), net                        127626                                                                                                                                                                                
++           Income before income taxes                        34231                                                                                                                                                                                
++           Provision for income taxes                        5394                                                                                                                                                                                
++           Net income                        19289000000                                                                                                                                                                                
++           *include interest paid, capital obligation, and underweighting                        19289000000                                                                                                                                                                                
++                                   19289000000                                                                                                                                                                                
++           Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                                                                                                                                                        
++           Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                                                                                        
++For Paperwork Reduction Act Notice, see the seperate Instructions. "For a faster
++
++refund, file your return electronically at portal.ct.gov/TSC and choose direct deposit.
++
++-Due date: April 15, 2022 - Attach a copy of all applicable schedules and forms to this return. Do not use staples.
++
++-Whole Dollars Only$ Realized Gain/Loss Since Purch % Total Return YTD23656414200000)
++
++-Form CT-1040
++
++-Connecticut Resident Income Tax Return 2021
++
++-CT-1040
++
++-2.00
++
++-
++
++-Enter spouse’s name here and SSN below.
++
++-1Print your SSN, name, mailing
++
++-address, and city or town here.
++
++-
++
++-
++
++-Department of Revenue ServicesID: 00037305581SSN: 633 44 1725DoB:1994-10-15
++
++-State of Connecticut
++
++-(Rev. 12/21)
++
++-1040 1221W 01 9999
++
++-Taxpayers must sign declaration on reverse side. Complete return in blue or black ink only. Please note that each form is year specific.
++
++-ZACHRY WOOD
++
++Interest Paid, SupplementalWOOD ZACHRY
++
++-Fiscal year ends in Dec 31 | USD in ""000'S""5323 BRADFORD DR
++
++-DALLAS TX 75235-8314
++
++-2/22/22, 12:50 PM
++
++-Name StockDaily Volume52-Week High52-Week Low$ Market Value
++
++-Alphabet Inc Class AGOOG1234501.003030.931990.2323656414200000)
++
++-Internet Content & Information% Forward Dividend Yeild$ Current Price
++
++-2609.780.00-9236175000.00-5.210.99268,408,500,00.00
++
++-$ cChange$ Today's High$ Today's Low-33140700000.00-0.14Print23488020000000)
++
++--25.792643.612564.47-42376875000.00-0.18total23656428500000)
++
++-Stock Indusstry/FilingCategoryEquity Style Box
++
++-Trusts, and Estates, checking any box from Part 1.GOOGL_income-statement_Quarterly_As_Originally_ReportedQ4 2020Q1 2021Q2 2021Q3 2021Q4
++
++2021TTM
++
++-Federal Form 1310, Statement of Person Claiming Refund Due Cash Flow from Operating Activities,
++
++Indirect30818000000.0031211000000.0037497000000.0025,539,000,00024,934,000,00091,652,000,000
++
++-a Deceased TaxpayerNet Cash Flow from Continuing Operating Activities,
++
++Indirect22,677,000,00019,289,000,00021,890,000,00025,539,000,00024,934,000,00091,652,000,000
++
++-2021.00Cash Generated from Operating Activities22,677,000,00019,289,000,00021,890,000,00025,539,000,00024,934,000,00091,652,000,000
++
++-M M - D D - Y Y Y Y M M - D D - Y Y Y YIncome/Loss before Non-Cash
++
++Adjustment15,227,000,00017,930,000,00018,525,000,00018,936,000,00020,642,000,00076,033,000,000
++
++-For January 1 ‑ December 31, 2021, or other tax year beginning and endingTotal Adjustments for Non-Cash Items5,748,000,0002,592,000,0004,236,000,0003,797,000,0006,517,000,00017,142,000,000
++
++-Your first nameDepreciation, Amortization and Depletion, Non-Cash
++
++Adjustment3,725,000,0002,753,000,0002,945,000,0003,304,000,0003,439,000,00012,441,000,000
++
++-Mailing address (number and street) Mailing address 2 (apartment number, PO Box)Depreciation and Amortization, Non-Cash
++
++Adjustment3,725,000,0002,753,000,0002,945,000,0003,304,000,0003,439,000,00012,441,000,000
++
++-If joint return, spouse’s first nameDepreciation, Non-Cash
++
++Adjustment3,539,000,0002,525,000,0002,730,000,0003,085,000,0003,215,000,00011,555,000,000
++
++-Check if Amortization, Non-Cash Adjustment186,000,000228,000,000215,000,000219,000,000224,000,000886,000,000
++
++-deceasedStock-Based Compensation, Non-Cash Adjustment3,223,000,0003,745,000,0003,803,000,0003,874,000,0003,954,000,00015,376,000,000
++
++-Check if Taxes, Non-Cash Adjustment1,670,000,0001,100,000,000379,000,000-1,287,000,0001,616,000,0001,808,000,000
++
++-deceasedInvestment Income/Loss, Non-Cash Adjustment-3,262,000,000-4,751,000,000-2,883,000,000-2,158,000,000-2,478,000,000-12,270,000,000
++
++-City, town, or post office (If town is two words, leave a space between the words.) State ZIP codeGain/Loss on Financial Instruments,
++
++Non-Cash Adjustment-3,262,000,000-4,751,000,000-2,883,000,000-2,158,000,000-2,478,000,000-12,270,000,000
++
++-Enter city or town of residence if different from above. ZIP codeOther Non-Cash Items392,000,000-255,000,000-8,000,00064,000,000-
++
++14,000,000-213,000,000
++
++-MI Last name (If two last names, insert a space between names.) Suffix (Jr./Sr.)Changes in Operating Capital1,702,000,000-1,233,000,000-
++
++871,000,0002,806,000,000-2,225,000,000-1,523,000,000
++
++-MI Last name (If two last names, insert a space between names.) Suffix (Jr./Sr.)Change in Trade and Other Receivables-
++
++5,445,000,0002,794,000,000-3,661,000,000-2,409,000,000-5,819,000,000-9,095,000,000
++
++-Your Social Security Number Spouse’s Social Security NumberChange in Trade/Accounts Receivable-5,445,000,0002,794,000,000-3,661,000,000- 2,409,000,000-5,819,000,000-9,095,000,000
++
++-Clip check here. Do not use staples.Change in Other Current Assets-738,000,0007,000,000-199,000,000-1,255,000,000-399,000,000- 1,846,000,000
++
++-Do not send Forms W-2 or 1099, or Schedules CT K‑1.Change in Payables and Accrued Expenses6,938,000,000-4,956,000,0004,074,000,0003,157,000,0006,994,000,0009,269,000,000
++
++-Change in Trade and Other Payables963,000,000-982,000,000-130,000,000238,000,0001,157,000,000283,000,000
++
++-Change in Trade/Accounts Payable963,000,000-982,000,000-130,000,000238,000,0001,157,000,000283,000,000
++
++-Visit us at portal.ct.gov/DRS for more information.Change in Accrued Expenses5,975,000,000- 3,974,000,0004,204,000,0002,919,000,0005,837,000,0008,986,000,000 -Change in Deferred Assets/Liabilities207,000,000137,000,000-3,000,000272,000,000368,000,000774,000,000
++
++-Change in Other Operating Capital740,000,000785,000,000-1,082,000,0003,041,000,000-3,369,000,000-625,000,000
++
++-Change in Prepayments and Deposits
++
++-Cash Flow from Investing Activities-7,281,000,000-5,383,000,000-9,074,000,000-10,050,000,000-11,016,000,000-35,523,000,000 -Cash Flow from Continuing Investing Activities-7,281,000,000-5,383,000,000-9,074,000,000-10,050,000,000-11,016,000,000-35,523,000,000
++
++-Purchase/Sale and Disposal of Property, Plant and Equipment, Net-5,479,000,000-5,942,000,000-5,496,000,000-6,819,000,000-6,383,000,000-
++
++24,640,000,000 -Purchase of Property, Plant and Equipment-5,479,000,000-5,942,000,000-5,496,000,000-6,819,000,000-6,383,000,000-24,640,000,000
++
++-Sale and Disposal of Property, Plant and Equipment
++
++-Purchase/Sale of Business, Net-370,000,000-1,666,000,000-308,000,000-259,000,000-385,000,000-2,618,000,000
++
++-Purchase/Acquisition of Business-370,000,000-1,666,000,000-308,000,000-259,000,000-385,000,000-2,618,000,000
++
++-Purchase/Sale of Investments, Net-1,375,000,0002,195,000,000-3,293,000,000-3,360,000,000-4,348,000,000-8,806,000,000
++
++-Purchase of Investments-36,955,000,000-37,072,000,000-24,949,000,000-35,153,000,000-40,860,000,000-138,034,000,000
++
++-Sale of Investments35,580,000,00039,267,000,00021,656,000,00031,793,000,00036,512,000,000129,228,000,000
++
++-Other Investing Cash Flow-57,000,00030,000,00023,000,000388,000,000100,000,000541,000,000
++
++-Purchase/Sale of Other Non-Current Assets, Net
++
++-Sales of Other Non-Current Assets
++
++-Cash Flow from Financing Activities-9,270,000,000-13,606,000,000-15,991,000,000-15,254,000,000-16,511,000,000-61,362,000,000
++
++-Cash Flow from Continuing Financing Activities-9,270,000,000-13,606,000,000-15,991,000,000-15,254,000,000-16,511,000,000-61,362,000,000
++
++-Issuance of/Payments for Common Stock, Net-7,904,000,000-11,395,000,000-12,796,000,000-12,610,000,000-13,473,000,000-50,274,000,000
++
++-Payments for Common Stock-7,904,000,000-11,395,000,000-12,796,000,000-12,610,000,000-13,473,000,000-50,274,000,000
++
++-Proceeds from Issuance of Common Stock
++
++-Issuance of/Repayments for Debt, Net-57,000,000-37,000,000-1,042,000,000-42,000,000-115,000,000-1,236,000,000
++
++-Issuance of/Repayments for Long Term Debt, Net-57,000,000-37,000,000-1,042,000,000-42,000,000-115,000,000-1,236,000,000
++
++-Proceeds from Issuance of Long Term Debt0900,000,0006,699,000,0006,350,000,0006,250,000,00020,199,000,000
++
++-Repayments for Long Term Debt-57,000,000-937,000,000-7,741,000,000-6,392,000,000-6,365,000,000-21,435,000,000
++
++-Proceeds from Issuance/Exercising of Stock Options/Warrants-1,647,000,000-2,184,000,000-2,453,000,000-2,602,000,000-2,923,000,000- 10,162,000,000
++
++-Other Financing Cash Flow338000000000)10,000,000300,000,00000310,000,000
++
++-Cash and Cash Equivalents, End of Period26,465,000,00026,622,000,00023,630,000,00023,719,000,00020,945,000,00020,945,000,000
++
++-Change in Cash6,126,000,000300,000,000-3,175,000,000235000000000.00-25930000000.00-5,233,000,000
++
++-Effect of Exchange Rate Changes210,000,000-143,000,000183,000,000-146000000000.00-181000000000.00-287000000000.00
++
++-Cash and Cash Equivalents, Beginning of Period20129000000000.0026465000000000.0026622000000000.0023630000000000.0023719000000000.0026465000000000.00
++
++-Cash Flow Supplemental Section
++
++-Change in Cash as Reported, Supplemental6,336,000,000157,000,000-2,992,000,00089,000,000-2,774,000,000-5,520,000,000
++
++-Income Tax Paid, Supplemental-4990000000.00-13,412,000,000-13,412,000,000
++
++-Cash and Cash Equivalents, Beginning of Period
++
++-12 Months EndedQ4 2020Q4 2019
++
++-_________________________________________________________
++
++-Income Statement Dec. 31, 2020Dec. 31, 2019
++
++-USD in ""000'""s
++
++-Repayments for Long Term Debt182527.00161857.00
++
++-Costs and expenses:71896.00
++
++-Cost of revenues84732.0026018.00
++
++-Research and development27573.0018464.00
++
++-Sales and marketing17946.009551.00
++
++-General and administrative11052.001697.00
++
++-European Commission fines0.00127626.00
++
++-Total costs and expenses141303.0034231.00
++
++-Income from operations41224.005394.00
++
++-Other income (expense), net6858000000.0019,289,000,000
++
++-Income before income taxes22,677,000,00019,289,000,000
++
++-Provision for income taxes22,677,000,00019,289,000,000
++
++-Net income22,677,000,00049.59
++
++-Basic net income per share of Class A and B common stock and Class C capital stock (in dollars per59.15
++
++-share)49.16
++
++-Diluted net income per share of Class A and Class B common stock and Class C capital stock (in58.61
++
++-your external account to add funds.
++
++-Verify account
++
++-NSDQ
++
++-GOOG ALPHABET INC CAP STK CL C
++
++-refreshRefresh quote
++
++-Symbol
++
++-ALPHABET INC CAP STK CL C selected
++
++-Last Price by Size over ExchangeLast Price x Size / Exch info_outline
++
++-Last price:
++
++-2598.77
++
++-up+2.8400 up(+0.11%)
++
++-Bid x size
++
++-Bid price by size
++
++-2595.00 x by200shares
++
++-Ask x size
++
++-Ask price by size
++
++-2600.00 x by200shares
++
++-Volume -† = Share-weigohted Average =
++
++-Volume(=†(Administration_of_Proceeds-Master:_Signature Algorithm: RSA with PKCS.#:_1 v.1.5) rc5'@v1.3.7.11.9'@v10.08.12"":,.)1.00Million
++
++-Snapshot
++
++-Positions († = Share-weighted Average)
++
++-Open Orders († = Share-weighted Average)
++
++-Actioninfo_outline
++
++-Select
++
++-Quantity
++
++-Calculate
++
++-Price typeinfo_outline
++
++-Select
++
++-Durationinfo_outline
++
++-Good for day
++
++-All-or-noneinfo_outline
++
++-Save. New Testimony
++
++-Preview order
++
++-If you are closing a position containing multiple tax lots, the ability to select lots will be provided in the next step.
++
++-Margin maintenance requirements have changed on certain highly volatile stocks. This may affect your margin purchasing power. See complete list.
++
++-E*TRADE Securities LLC reserves the right to reject market orders, block size orders and orders for securities traded in a thin market.
++
++Learn more. -Investment Products
++
++-Not FDIC Insured No Bank Guarantee May Lose Value
++
++-Banking products and services are provided by Morgan Stanley Private Bank, National Association, Member FDIC.
++
++-Check the background of ETRADE Securities LLC on FINRA's BrokerCheck and see ETRADE Securities LLC and E*TRADE Capital Management LLC Relationship Summary.
++
++-PLEASE READ THE IMPORTANT DISCLOSURES BELOW
++
++-Your receipt and use of options market data is subject to the terms and conditions of your E*TRADE Market Data Agreement (MDA). To view the terms and conditions of the MDA, please click here.
++
++-Securities products and services offered by E*TRADE Securities LLC, Member SIPC, a subsidiary of Morgan Stanley.
++
++-System response and account access times may vary due to a variety of factors, including trading volumes, market conditions, system performance, and other factors.
++
++-About our Ads | Disclosure Library
++
++-E*Trade CompleteTM Protection Guarantee
++
++-Securities in your account protected up to $500,000. For details please see www.sipc.org
++
++-Bank deposits insured to at least $250,000
++
++-Equal Housing Lender
++
++-Statement of Financial Condition | About Asset Protection | Account Agreements and Disclosures | | Business Continuity Plan
++
++-© 2022 E*TRADE from Morgan Stanley. All rights reserved. Version 08.12.10 [ 223w301m5.etrade.com.1 | | C1:NA:O | C2:NA:O ]
++
++Screen Share
++-Real Estate† = Share-weighted Average
++
++-9:30AM10:30AM11:30AM12:30PM1:30PM2:30PM3:30PM25752600262526502675
++
++-Day's Range 2592.35 ‒ 2658.7836
++
++-1dALPHABET INC CAP STK CL C is down 2.01% in a 1 day period.
++
++-5dALPHABET INC CAP STK CL C is down 9.48% in a 5 day period.
++
++-*ETF Express US Awards, Best Active ETF Issuer (USD 500M+), 2020. The ETF Express US Awards follow a clear and transparent process. For the issuer categories, the pre-selected shortlists are based on data provided by Bloomberg. Voting for all the eventual winners is then conducted via an exhaustive online poll of the entire ETF Express readership of over 10,000 subscribers, which is carried out over a period of several weeks. https://www.etfexpress.com/2020/10/01/290286/etf-express-us-awards-2020-winners3mALPHABET INC CAP STK CL C is down 4.29% in a 3 month period.
++
++-1yALPHABET INC CAP STK CL C is up 18.87% in a 1 year period.
++
++-Investors should carefully consider the investment objectives and risks as well as charges and expenses of a fund. The prospectus contains this and other information about the fund and should be read carefully before investing. To obtain a prospectus for Exchange Traded Funds: Call 1-844-4JPM-ETF or visit jpmorgan.com/ETF. Investing involves risk, including possible loss of principal. J.P. Morgan ETFs are distributed by JPMorgan Distribution Services, Inc., which is an affiliate of JPMorgan Chase & Co. Affiliates of JPMorgan Chase & Co. receive fees for providing various services to the funds. JPMorgan Distribution Services, Inc. is a member of FINRA.Dividend yield/amount0.00%/0.00
++
++-Extend dividend $LOAD_POST/payload/do. dividend date42121.00
++
++-Diversification does not guarantee investment returns and does not eliminate the risk of loss. Diversification among investment options and asset classes may help to reduce overall volatility.Dividend payable date42128.00
++
++-Last Refresh April 11, 2022 10:32 PM EDT
++
++-J.P. Morgan Asset Management is the brand for the asset management business of JPMorgan Chase & Co. and its affiliates worldwide. This communication is issued by JPMorgan Distribution Services Inc., member of FINRA.Extended hours
++
++-Real-time quotes
++
++-If you are a person with a disability and need additional support in viewing the material, please call us at 1-800-343-1113 for assistance.
++
++-© 2022 JPMorgan Chase & Co. All rights reserved.""Document certification is valid. signed by Zachry Tyler Wood
++
++-zachryiixixiiwood@gmail.comss
++
++-k
++
++-Signing rtme: 2022QY/15 22:57:09 -050 Validity Summary
++
++-Advanced Signature Properties
++
++-Signature Details
++
++-Signature was created using Adobe Acrobat Pro OC (32-bit) 2022.001.820085.
++
++-Hash Algorithm: s.sh.SHA/SUMS256/BECH512""
++
++-†=Signature_Algorithm:_RSA_PKCS#1_v.1.5(python'@v97rc11
++
++-Signature Algorithm: RSA with PKCS#1 v.1.5 rc5'@v1.3.7.9rc11'@v02.0.08185.00
++
++-{""smUser"":""5331"",""sysdate"":1650411935403,""data"":{""watchlistEntry"":{""watchlistID"":""78221650306"",""entries"": [{""entryID"":""744828555306"",""productDetails"":{""symbolDesc"":""NASDAQ COMPOSITE INDEX (COMB)"",""displaySymbol"":""COMP.IDX"",""typeCode"":""indicies_class=CMN_STK_CLASS_A=CMPDQ"",""lastTrade"":1.1,""exchange"":null,""cusip "":null,""underlyingSymbol"":null,""underlyingExchange"":null,""underlyingTypeCode"":null,""scalabilityTypeCd"":null,""quoteURL"":null,"" optnSpecialEventFlag"":false,""stockSpecialEventFlag"":false,""daysToExpiration"":0,""quantity"":0.0,""expiredOption"":false,""symbol"":n ull},""symbol"":""COMP.IDX"",""quantity"":100.0,""pricePaid"":13619.657,""totalCost"":0.0,""dateAcquired"":""04/19/2022"",""positionType" ":1,""commissions"":0.0,""adjustedFlag"":false,""deliverables"":null,""priceAdjustedFlag"":false,""change"":0.0,""changePct"":0.0,""volum e"":0,""lastTradeTime"":null,""prevClose"":0.0,""fees"":0.0,""optionsMultiplier"":0.0,""adjLastTrade"":0.0,""adjPreviousClose"":0.0,""bon dSubType"":null,""tenDayVolume"":0.0,""openPrice"":0.0,""daysRange"":null,""week52High"":0.0,""week52Low"":0.0,""week52HighDate"":null,"" week52LowDate"":null,""pctMoveFrmTenDayVol"":0.0,""inTheMoneyFlag"":false,""allStar"":false,""ntf"":false,""expiredOption"":false,""inval idSymbol"":false}],""cashEntry"":null,""pagination"": {""startPosNum"":0,""posPerPage"":0,""posMarker"":""0|0|744828555306|744962551306|745065412306|745188423306|740786958306|740309048306|740 757042306|741860855306|741548074306|740226019306|740336956306|741642079306|740544165306|740794680306|740855754306|741379969306|7410328423 06|741355910306|741366982306|741587243306|742093664306|741002656306|740872577306|740687489306|741349788306|740766504306|741236749306|7409 54656306|740769534306|741144704306|741191729306|741024679306|742992604306|742992605306|742992606306|742992607306|742992608306|74299260930 6|742992610306|742992611306|742992612306|742992613306|742992614306|742992615306|742992616306|742992617306|742992618306|742992619306|74299
++
++2620306|742992621306|742992622306|742992623306|742548693306|742548694306|742548695306|742548696306|742548697306|742548698306|742548699306 |742548700306|742548701306|742548702306|742548703306|742548704306|742548705306|742548706306|742548707306|742548708306|742548709306|742548 710306|742548711306|742548712306|741844117306|741492620306|737907126306|737961140306|738135143306|737890049306|738280171306|738252075306| 738030020306|738401182306|738177055306|737227858306|737841994306|737917978306|737202855306|737759903306|737653928306|738117044306|7340785 23306|738316161306|737715971306|737809990306|734516242306|734504197306|737273684306|737854822306|737492735306|737669752306|738024862306|7 38165884306|734723601306|737469702306|737720675306|737335609306|737934724306|733329941306|734376505306|733779793306|733189706306|73378170 0306|734141783306|733418478306|723784466306|723552333306|723582277306|723579942306|726314232306|723147022306|723288983306|724016002306|72 3353963306|723592812306|723843943306|726261984306|723066781306|726279990306|724021905306|724027968306|723519798306|723072459306|723632461 306|724012535306|721443914306|722415560306|722039321306|721144821306|721497969306|721093753306|721016371306|721039514306|720818022306|721 367851306|715574702306|719286530306|714800482306|714699875306|714721846306|714537755306|715081946306|714979952306|715819058306|7158029103 06|714680685306|714321551306|714554655306|714240524306|714321540306|714688665306|714386324306|713907275306|713906238306|713901168306|7139 22684306|713122358306|713225157306|708816688306|708782646306|707858176306|712602995306|708604647306|708458524306|708574666306|70887279030 6|712748037306|712466157306|712583921306|712430033306|708534620306|708450597306|708368600306|708251551306|713679599306|708562544306|70856 3437306|708896642306|708744449306|708261298306|708828467306|708407412306|708434386306|708797535306|708763522306|708593411306|708517409306 |708673398306|708431806306|707605407306|707858508306|708426818306|707554377306|707440347306|707896502306|707767472306|708573861306|708813 923306|707894494306|707715392306|707615388306|708225652306|708346698306|708842877306|708743787306|708442694306|707472232306|707714275306| 707992416306|707805339306|707684268306|707941387306|707925375306|707599259306|707955381306|708729757306|708612719306|708698741306|7083066 49306|708284644306|707888294306|707781266306|707899295306|707795265306|707649203306|707437150306|704532837306|707062217306|707003182306|7 06769110306|707264441306|707267414306|706991182306|707309596306|706972165306|706922133306|707142246306|699608253306|699261199306|69069221 5306|690779291306|691860742306|691855763306|691879754306|691291496306|691434548306|691331526306|691617586306|691461569306|691277480306|69 1238447306|691889999306|691206463306|709674005306|709806029306|712118197306|712149475306|712216768306|714186361306|716674741306|716647634 306|717547116306|717474690306|719400056306|721553089306|720673070306|720835166306|721557131306|720867222306|721139860306|720694234306|720 703292306|720704296306|720792860306|720873229306|720595355306|721550126306|720694235306|720703293306|720593245306|720704297306|7205963533 06|720627870306|720615750306|720688156306|720723386306|720693229306|720847199306|720792861306|720867223306|720873230306|720917245306|7211 38862306|720639884306|721550127306|721553128306|720646933306|720596354306|720694236306|720703294306|720704298306|720847200306|72070530030 6|720723387306|720867224306|721557134306|720873231306|720917246306|720594357306|720730452306|720595357306|720610659306|721550128306|72155 3129306|720694237306|720703295306|720593247306|720596355306|720704299306|720693231306|720705301306|720847201306|720867225306|721557135306 |720873232306|720594358306|720595358306|720917247306|720610660306|720694238306|726412202306|726210896306|729229416306|729109085306|729341 709306|729570480306|731426498306|734967082306|735084084306|735361289306|735175190306|735817208306|735445606306|735817211306|735972658306| 736722798306|739059385306|742992591306|742548689306|742992592306|743003532306|742548690306|742992593306|742992594306|742717122306|7429925 95306|742992596306|742992597306|742992598306|742992599306|742992600306|742992601306|742717123306|742992602306|742548691306|742992603306|7 42548692306|744538509306|747050904306""},""newIndexIDs"":
++
++[1],""totalPositionCount"":0}},""hostName"":""273w501m3"",""message_type"":null,""message_info"":null,""success"":true}Close
++
++-{""smUser"":""XXXX"",""sysdate"":1650411935403,""data"":{""watchlistEntry"":{""watchlistID"":""78221650306"",""entries"": [{""entryID"":""744828555306"",""productDetails"":{""symbolDesc"":""NASDAQ COMPOSITE INDEX (COMB)"",""displaySymbol"":""COMP.IDX"",""typeCode"":""INDX"",""lastTrade"":0.0,""exchange"":null,""cusip"":null,""underlyingSymbol"":nul l,""underlyingExchange"":null,""underlyingTypeCode"":null,""scalabilityTypeCd"":null,""quoteURL"":null,""optnSpecialEventFlag"":false,""s tockSpecialEventFlag"":false,""daysToExpiration"":0,""quantity"":0.0,""expiredOption"":false,""symbol"":null},""symbol"":""COMP.IDX"",""q uantity"":100.0,""pricePaid"":13619.657,""totalCost"":0.0,""dateAcquired"":""04/19/2022"",""positionType"":1,""commissions"":0.0,""adjust edFlag"":false,""deliverables"":null,""priceAdjustedFlag"":false,""change"":0.0,""changePct"":0.0,""volume"":0,""lastTradeTime"":null,""p
++
++revClose"":0.0,""fees"":0.0,""optionsMultiplier"":0.0,""adjLastTrade"":0.0,""adjPreviousClose"":0.0,""bondSubType"":null,""tenDayVolume"":0.0,""openPrice"":0.0,""daysRange"":null,""week52High"":0.0,""week52Low"":0.0,""week52HighDate"":null,""week52LowDate"":null,""pctMoveFr mTenDayVol"":0.0,""inTheMoneyFlag"":false,""allStar"":false,""ntf"":false,""expiredOption"":false,""invalidSymbol"":false}],""cashEntry"":null,""pagination"": {""startPosNum"":0,""posPerPage"":0,""posMarker"":""0|0|744828555306|744962551306|745065412306|745188423306|740786958306|740309048306|740
++
++757042306|741860855306|741548074306|740226019306|740336956306|741642079306|740544165306|740794680306|740855754306|741379969306|7410328423 06|741355910306|741366982306|741587243306|742093664306|741002656306|740872577306|740687489306|741349788306|740766504306|741236749306|7409 54656306|740769534306|741144704306|741191729306|741024679306|742992604306|742992605306|742992606306|742992607306|742992608306|74299260930 6|742992610306|742992611306|742992612306|742992613306|742992614306|742992615306|742992616306|742992617306|742992618306|742992619306|74299 2620306|742992621306|742992622306|742992623306|742548693306|742548694306|742548695306|742548696306|742548697306|742548698306|742548699306 |742548700306|742548701306|742548702306|742548703306|742548704306|742548705306|742548706306|742548707306|742548708306|742548709306|742548 710306|742548711306|742548712306|741844117306|741492620306|737907126306|737961140306|738135143306|737890049306|738280171306|738252075306| 738030020306|738401182306|738177055306|737227858306|737841994306|737917978306|737202855306|737759903306|737653928306|738117044306|7340785 23306|738316161306|737715971306|737809990306|734516242306|734504197306|737273684306|737854822306|737492735306|737669752306|738024862306|7 38165884306|734723601306|737469702306|737720675306|737335609306|737934724306|733329941306|734376505306|733779793306|733189706306|73378170 0306|734141783306|733418478306|723784466306|723552333306|723582277306|723579942306|726314232306|723147022306|723288983306|724016002306|72 3353963306|723592812306|723843943306|726261984306|723066781306|726279990306|724021905306|724027968306|723519798306|723072459306|723632461 306|724012535306|721443914306|722415560306|722039321306|721144821306|721497969306|721093753306|721016371306|721039514306|720818022306|721 367851306|715574702306|719286530306|714800482306|714699875306|714721846306|714537755306|715081946306|714979952306|715819058306|7158029103 06|714680685306|714321551306|714554655306|714240524306|714321540306|714688665306|714386324306|713907275306|713906238306|713901168306|7139 22684306|713122358306|713225157306|708816688306|708782646306|707858176306|712602995306|708604647306|708458524306|708574666306|70887279030 6|712748037306|712466157306|712583921306|712430033306|708534620306|708450597306|708368600306|708251551306|713679599306|708562544306|70856 3437306|708896642306|708744449306|708261298306|708828467306|708407412306|708434386306|708797535306|708763522306|708593411306|708517409306 |708673398306|708431806306|707605407306|707858508306|708426818306|707554377306|707440347306|707896502306|707767472306|708573861306|708813 923306|707894494306|707715392306|707615388306|708225652306|708346698306|708842877306|708743787306|708442694306|707472232306|707714275306| 707992416306|707805339306|707684268306|707941387306|707925375306|707599259306|707955381306|708729757306|708612719306|708698741306|7083066 49306|708284644306|707888294306|707781266306|707899295306|707795265306|707649203306|707437150306|704532837306|707062217306|707003182306|7 06769110306|707264441306|707267414306|706991182306|707309596306|706972165306|706922133306|707142246306|699608253306|699261199306|69069221 5306|690779291306|691860742306|691855763306|691879754306|691291496306|691434548306|691331526306|691617586306|691461569306|691277480306|69 1238447306|691889999306|691206463306|709674005306|709806029306|712118197306|712149475306|712216768306|714186361306|716674741306|716647634 306|717547116306|717474690306|719400056306|721553089306|720673070306|720835166306|721557131306|720867222306|721139860306|720694234306|720 703292306|720704296306|720792860306|720873229306|720595355306|721550126306|720694235306|720703293306|720593245306|720704297306|7205963533 06|720627870306|720615750306|720688156306|720723386306|720693229306|720847199306|720792861306|720867223306|720873230306|720917245306|7211 38862306|720639884306|721550127306|721553128306|720646933306|720596354306|720694236306|720703294306|720704298306|720847200306|72070530030 6|720723387306|720867224306|721557134306|720873231306|720917246306|720594357306|720730452306|720595357306|720610659306|721550128306|72155 3129306|720694237306|720703295306|720593247306|720596355306|720704299306|720693231306|720705301306|720847201306|720867225306|721557135306 |720873232306|720594358306|720595358306|720917247306|720610660306|720694238306|726412202306|726210896306|729229416306|729109085306|729341 709306|729570480306|731426498306|734967082306|735084084306|735361289306|735175190306|735817208306|735445606306|735817211306|735972658306| 736722798306|739059385306|742992591306|742548689306|742992592306|743003532306|742548690306|742992593306|742992594306|742717122306|7429925 95306|742992596306|742992597306|742992598306|742992599306|742992600306|742992601306|742717123306|742992602306|742548691306|742992603306|7 42548692306|744538509306|747050904306""},""newIndexIDs"": [1],""totalPositionCount"":0}},""hostName"":""273w501m3"",""message_type"":null,""message_info"":null,""success"":true} -MENU TRANSCRIPT
++
++-Before we get started, lets take a look at the course objectives. By the end of this course, contractors will be able to:
++
++-Distinguish the different laws enforced by OFCCP
++
++-Identify basic Equal Employment Opportunity obligations of a construction contractor
++
++-• Describe the participation goals for women and minorities for construction contractors
++
++-• Determine compliance with the Sixteen Affirmative Action Steps requirement for construction contractors
++
++-• Define the Affirmative Action Program requirements under Section 503 and VEVRA
++
++-As a reminder, OFCCP laws and regulations prohibit workplace discrimination, and require employers to take affirmative action and provide workers and job-seekers with equal opportunities.
++
++-For a faster refund, file your return electronically at portal.ct.gov/TSC and choose direct deposit.
++
++-Due date: April 15, 2022 - Attach a copy of all applicable schedules and forms to this return. Do not use staples.
++
++-Whole Dollars Only
++
++-Form CT-1040
++
++-Income Tax Return 2021
++
++-CT-1040
++
++-2.00
++
++-
++
++-Enter spouse’s name here and SSN below.
++
++-1Print your SSN, name, mailing
++
++-address, and city or town here.
++
++-
++
++-
++
++-Department of Revenue Services
++
++-State of Connecticut
++
++-(Rev. 12/21)
++
++-=
++
++-Taxpayers must sign declaration on reverse side. Complete return in blue or black ink only. Please note that each form is year specific.
++
++-To prevent any delay in processing your return, the correct year’s form must be submitted to the Department of Revenue Services (DRS).
++
++-1. Federal adjusted gross income from federal Form 1040, Line 11,
++
++-or federal Form 1040‑SR, Line 11 1. .00
++
++-2. Additions to federal adjusted gross income from Schedule 1, Line 38 2. .00
++
++-3. Add Line 1 and Line 2. 3. .00
++
++-4. Subtractions from federal adjusted gross income from Schedule 1, Line 50 4. .00
++
++           Enter spouse’s name here and SSN below.                                                                                 
++           1Print your SSN, name, mailing                                                                                                            
++           address, and city or town here.                                                                                                          
++                                                                                                                                                   
++                                                                                                                                                   
++           Department of Revenue Services                SSN: 633 44 1725        DoB:1994-10-15                                                      
++           State of Connecticut                                                                                                     
++           (Rev. 12/21)                                                                                                                              
++           1040 1221W 01 9999                                                                                                                        
++           Taxpayers must sign declaration on reverse side. Complete return in blue or black ink only


Mail Delivery Subsystem
Oct 20, 2022, 11:40 PM
to me

Error Icon
Address not found
Your message wasn't delivered to jc4unme216@gmail.com because the address couldn't be found, or is unable to receive mail.
LEARN MORE
The response was:
550 5.1.1 The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at https://support.google.com/mail/?p=NoSuchUser p14-20020a67f34e000000b003a704b423e1sor9811321vsm.6 - gsmtp




---------- Forwarded message ----------
From: ZACHRY WOOD <zachryiixixiiwood@gmail.com>
To: "ZACHRY “Google.” WOOD" <zachryiixixiiwood@gmail.com>, Ricardo Avendano <ricky75043@gmail.com>, jc4unme216@gmail.com, larry.page@gmail.com, Larry Page <Larry.page@google.com>, larry.page@abc.xyz, sergey.brin@gmail.com
Cc: 
Bcc: 
Date: Thu, 20 Oct 2022 23:40:28 -0500
Subject: Re:
----- Message truncated -----

Mail Delivery Subsystem
Oct 20, 2022, 11:40 PM
Address not found Your message wasn't delivered to larry.page@abc.xyz because the address couldn't be found, or is unable to receive mail. LEARN MORE The respon

ZACHRY WOOD <zachryiixixiiwood@gmail.com>
Oct 20, 2022, 11:53 PM
to Mail



ZACHRY WOOD <zachryiixixiiwood@gmail.com>
Oct 21, 2022, 2:46 AM
to Mail

INTERNAL REVENUE SERVICE,        *include interest paid, capital obligation, and underweighting                6858000000                                                                                                                                                 
-+   PO BOX 1214,        Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)            
-+       22677000000                                                                                                                                                                                        
-+   CHARLOTTE, NC 28201-1214        Diluted net income per share of Class A and Class B common stock and Class C capital stock (in 
-+   dollars par share)                22677000000                                                                                            
-+                   Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                
-+                   22677000000                                                                                                                                                                                        
-+           Taxes / Deductions        Current        YTD                                                                                                                                                                                        
-+   Fiscal year ends in Dec 31 | USD                                                                                                          
-+   Rate                                                                                                                                                                                                                 
-+   Total                                                                                                                           
-+   7567263607                                                    ID     00037305581   
-+           2017        2018        2019        2020        2021                                                                     
-+                                           Best Time to 911                                                                         
-+           INTERNAL REVENUE SERVICE                                                                                                 
-+           PO BOX 1214                                                                                                                              
-+           CHARLOTTE NC 28201-1214                        9999999999                                                                                
-+           633-44-1725                                                                                                             
-+           ZACHRYTWOOD                                                                                                                              
-+           AMPITHEATRE PARKWAY                                                                                                                      
-+           MOUNTAIN VIEW, Califomia 94043                                                                                                            
-+                   EIN        61-1767919                                                                                           
-+           Earnings        FEIN        88-1303491                                                                                  
-+                                                                           End Date                                                                                                  
-+                                                           44669                                                                   
-+                                                                   Department of the Treasury           Calendar Year                
-+                                                                   Check Date                                                                                                                        
-+                                                                   Internal Revenue Service        Due. (04/18/2022)                                                                                        
-+                                                            _________________________________________________________________
-+                                                            ______________________                                                                                                                   
-+                                                                   Tax Period         Total        Social Security        Medicare 
-+                                                                    IEIN:                                             88-1656495   
-+                                                                         TxDL:                                  00037305580        SSN:                                                                                                                        
-+                                                           INTERNAL 
-+                                                           REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29200                                                                              
-+                                                                   39355        23906.09        10292.9        2407.21             
-+   20210418                                                                39355        11247.64        4842.74        1132.57     
-+                                                                                                                                   39355        27198.5        11710.47        2738.73                      
-+                                                                   39355        17028.05                                           
-+                                                                                   CP 575A (Rev. 2-2007) 99999999999                CP 575 A                                                          SS-4           
-+                                                           Earnings Statement                                                       
-+                                                                    IEIN:                                             88-1656496   
-+                                                                         TxDL:                                  00037305581        SSN:                                                                      
-+                                   INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201                           
-+           Employee Information        Pay to the order of                ZACHRY T WOOD 


On Thu, Oct 20, 2022 at 11:53 PM ZACHRY WOOD <zachryiixixiiwood@gmail.com> wrote:


On Thu, Oct 20, 2022 at 11:40 PM Mail Delivery Subsystem <mailer-daemon@googlemail.com> wrote:
Error Icon
Address not found
Your message wasn't delivered to larry.page@abc.xyz because the address couldn't be found, or is unable to receive mail.
LEARN MORE
The response was:
The email account that you tried to reach does not exist. Please try double-checking the recipient's email address for typos or unnecessary spaces. Learn more at https://support.google.com/mail/answer/6596




---------- Forwarded message ----------
From: ZACHRY WOOD <zachryiixixiiwood@gmail.com>
To: "ZACHRY “Google.” WOOD" <zachryiixixiiwood@gmail.com>, Ricardo Avendano <ricky75043@gmail.com>, jc4unme216@gmail.com, larry.page@gmail.com, Larry Page <Larry.page@google.com>, larry.page@abc.xyz, sergey.brin@gmail.com
Cc: 
Bcc: 
Date: Thu, 20 Oct 2022 23:40:28 -0500
Subject: Re:
----- Message truncated -----

:Build:: :
