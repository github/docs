---
title: Configuring Dependabot security updates
intro: 'You can use {% data variables.product.prodname_dependabot_security_updates %} or manual pull requests to easily update vulnerable dependencies.'
shortTitle: Configure security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## About configuring {% data variables.product.prodname_dependabot_security_updates %}

You can enable {% data variables.product.prodname_dependabot_security_updates %} at the repository level or for all repositories owned by your personal account or organization. You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

You can disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository or for all repositories owned by your personal account or organization.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Supported repositories

{% data variables.product.prodname_dotcom %} automatically enables {% data variables.product.prodname_dependabot_security_updates %} for newly created repositories if your personal account or organization has enabled **Automatically enable for new repositories** for {% data variables.product.prodname_dependabot_security_updates %}. For more information, see "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-dependabot-security-updates-for-your-repositories)." 

If you create a fork of a repository that has security updates enabled, {% data variables.product.prodname_dotcom %} will automatically disable {% data variables.product.prodname_dependabot_security_updates %} for the fork. You can then decide whether to enable {% data variables.product.prodname_dependabot_security_updates %} on the specific fork.

If security updates are not enabled for your repository and you don't know why, first try enabling them using the instructions given in the procedural sections below. If security updates are still not working, you can contact {% data variables.contact.contact_support %}.

## Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories

You can enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all qualifying repositories owned by your personal account or organization. For more information, see "[Managing security and analysis settings for your personal account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)." 

You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository.

### Enabling or disabling {% data variables.product.prodname_dependabot_security_updates %} for an individual repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", to the right of "{% data variables.product.prodname_dependabot %} security updates", click **Enable** to enable the feature or **Disable** to disable it. {% ifversion fpt or ghec %}For public repositories, the button is disabled if the feature is always enabled.{% endif %}
  {% ifversion fpt or ghec %}![Screenshot of "Code security and analysis" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![Screenshot of "Code security and analysis" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## Overriding the default behavior with a configuration file

You can override the default behavior of {% data variables.product.prodname_dependabot_security_updates %} by adding a dependabot.yml file to your repository. For more information, see "[Configuration options for the dependabot.yml file](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)." 

If you only require security updates and want to exclude version updates, you can set `open-pull-requests-limit` to `0` in order to prevent version updates for a given `package-ecosystem`. For more information, see "[`open-pull-requests-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)."

```
# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
```

For more information about the configuration options available for security updates, see the table in "[Configuration options for the dependabot.yml file](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file)."

## Further reading

- "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Configuring {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)"{% ifversion fpt or ghec %}
- "[Managing data use settings for your private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)"{% endif %}
- "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"

-' ALPHABET                                                                Period Beginning:                                                                                                
1600 AMPITHEATRE PARKWAY                        DR                                        Period Ending:                                                                                                
MOUNTAIN VIEW, C.A., 94043                                                                Pay Date:                                                                                                
"Taxable Marital Status: 
Exemptions/Allowances"                        Married                                        ZACHRY T.                                                                                                
                                                                5323                                                                                                
Federal:                                                                                                                                                                
                                                                DALLAS                                                                                                
TX:                NO State Incorne Tax                                                                                                                                                
        rate        units                                        year to date        Other Benefits and                                                                                                
        112.2        674678000                                        75698871600        Information                                                                                                
                                                                Pto Balance                                                                                                
                                                                Total Work Hrs                                                                                                
Gross Pay        75698871600                                                        Important Notes                                                                                                
                                                                COMPANY PH Y: 650-253-0000                                                                                                
Statutory                                                                BASIS OF PAY: BASIC/DILUTED EPS                                                                                                
Federal Income Tax                                                                                                                                                                
Social Security Tax                                                                                                                                                                
                                                                YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE                                                                                                
Medicare Tax                                                                                                                                                                
                                                                                                                                                                
Net Pay                70842743866                70842743866                                                                                                                                
CHECKING                                                                                                                                                                
Net Check                70842743866                                                                                                                                                
Your federal taxable wages this period are $                                                                                                                                                                
ALPHABET INCOME                                                                Advice number:                                                                                                
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043                                                                Pay date:_                                                                                                
                                                                                                                                                                
Deposited to the account Of                                                                xxxxxxxx6547                                                                                                
:xxxxx1725                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
Based on facts as set forth in.                        6550                                                                                                                                        
                                                                                                                                                                
The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.                                                                                                                                                                
"Employer
  Employer Identification Number :xxxxx7919"                                                                                                                                                                
"ALPH INC
"                                                                                                                                                                
"Employee
  Employee Identification Number :xxxxx1725"                                                                                                                                                                
ZACH T WOO                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                
        TTM        Q4 2021        Q3 2021        Q2 2021        Q1 2021        Q4 2020        Q3 2020        Q2 2020                                                                                                
                                                                                                                                                                
Gross Profit        146698000000        42337000000        37497000000        35653000000        31211000000        30818000000        25056000000        19744000000                                                                                                
Total Revenue as Reported, Supplemental        257637000000        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000                                                                                                
        257637000000        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000                                                                                                
Other Revenue                                                                                                                                                                
Cost of Revenue        -110939000000        -32988000000        -27621000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000                                                                                                
Cost of Goods and Services        -110939000000        -32988000000        -27621000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000                                                                                                
Operating Income/Expenses        -67984000000        -20452000000        -16466000000        -16292000000        -14774000000        -15167000000        -13843000000        -13361000000                                                                                                
Selling, General and Administrative Expenses        -36422000000        -11744000000        -8772000000        -8617000000        -7289000000        -8145000000        -6987000000        -6486000000                                                                                                
General and Administrative Expenses        -13510000000        -4140000000        -3256000000        -3341000000        -2773000000        -2831000000        -2756000000        -2585000000                                                                                                
Selling and Marketing Expenses        -22912000000        -7604000000        -5516000000        -5276000000        -4516000000        -5314000000        -4231000000        -3901000000                                                                                                
Research and Development Expenses        -31562000000        -8708000000        -7694000000        -7675000000        -7485000000        -7022000000        -6856000000        -6875000000                                                                                                
Total Operating Profit/Loss        78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000                                                                                                
Non-Operating Income/Expenses, Total        12020000000        2517000000        2033000000        2624000000        4846000000        3038000000        2146000000        1894000000                                                                                                
Total Net Finance Income/Expense        1153000000        261000000        310000000        313000000        269000000        333000000        412000000        420000000                                                                                                
Net Interest Income/Expense        1153000000        261000000        310000000        313000000        269000000        333000000        412000000        420000000                                                                                                
                                                                                                                                                                
Interest Expense Net of Capitalized Interest        -346000000        -117000000        -77000000        -76000000        -76000000        -53000000        -48000000        -13000000                                                                                                
Interest Income        1499000000        378000000        387000000        389000000        345000000        386000000        460000000        433000000                                                                                                
Net Investment Income        12364000000        2364000000        2207000000        2924000000        4869000000        3530000000        1957000000        1696000000                                                                                                
Gain/Loss on Investments and Other Financial Instruments        12270000000        2478000000        2158000000        2883000000        4751000000        3262000000        2015000000        1842000000                                                                                                
Income from Associates, Joint Ventures and Other Participating Interests        334000000        49000000        188000000        92000000        5000000        355000000        26000000        -54000000                                                                                                
Gain/Loss on Foreign Exchange        -240000000        -163000000        -139000000        -51000000        113000000        -87000000        -84000000        -92000000                                                                                                
Irregular Income/Expenses        0        0                                0        0        0                                                                                                
Other Irregular Income/Expenses        0        0                                0        0        0                                                                                                
Other Income/Expense, Non-Operating        -1497000000        -108000000        -484000000        -613000000        -292000000        -825000000        -223000000        -222000000                                                                                                
Pretax Income        90734000000        24402000000        23064000000        21985000000        21283000000        18689000000        13359000000        8277000000                                                                                                
Provision for Income Tax        -14701000000        -3760000000        -4128000000        -3460000000        -3353000000        -3462000000        -2112000000        -1318000000                                                                                                
Net Income from Continuing Operations        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000                                                                                                
Net Income after Extraordinary Items and Discontinued Operations        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000                                                                                                
Net Income after Non-Controlling/Minority Interests        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000                                                                                                
Net Income Available to Common Stockholders        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000                                                                                                
Diluted Net Income Available to Common Stockholders        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000                                                                                                
Income Statement Supplemental Section                                                                                                                                                                
Reported Normalized and Operating Income/Expense Supplemental Section                                                                                                                                                                
Total Revenue as Reported, Supplemental        257637000000        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000                                                                                                
Total Operating Profit/Loss as Reported, Supplemental        78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000                                                                                                
Reported Effective Tax Rate        0.162                0.179        0.157        0.158                0.158        0.159                                                                                                
Reported Normalized Income                                                                                                                                                                
Reported Normalized Operating Profit                                                                                                                                                                
Other Adjustments to Net Income Available to Common Stockholders                                                                                                                                                                
Discontinued Operations                                                                                                                                                                
Basic EPS        113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21                                                                                                
Basic EPS from Continuing Operations        113.88        31.12        28.44        27.69        26.63        22.46        16.55        10.21                                                                                                
Basic EPS from Discontinued Operations                                                                                                                                                                
Diluted EPS        112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13                                                                                                
Diluted EPS from Continuing Operations        112.2        30.67        27.99        27.26        26.29        22.23        16.4        10.13                                                                                                
Diluted EPS from Discontinued Operations                                                                                                                                                                
Basic Weighted Average Shares Outstanding        667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000                                                                                                
Diluted Weighted Average Shares Outstanding        677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000                                                                                                
Reported Normalized Diluted EPS                                                                                                                                                                
Basic EPS        113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21                                                                                                
Diluted EPS        112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13                                                                                                
Basic WASO        667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000                                                                                                
Diluted WASO        677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000                                                                                                
Fiscal year end September 28th., 2022. | USD                                                                                                                                                                
                                                                                                                                                                
31622,6:39 PM                                                                                                                                                                
Morningstar.com Intraday Fundamental Portfolio View Print Report                                                                Print                                                                                                
                                                                                                                                                                
3/6/2022 at 6:37 PM
April 18, 2022.                                                                                                                
  2017        2018        2019        2020        2021                                                                    
                                           Best Time to 911                                                                        
           INTERNAL REVENUE SERVICE                                                                                                
           PO BOX 1214                                                                                                                              
           CHARLOTTE NC 28201-1214                        EMPLOYEE NUMBER: 9999999999      ID: 000000000000                                                                                

           633-44-1725                                                                                                            
           ZACHRYTWOOD                                                                                                                              
           AMPITHEATRE PARKWAY                                                                                                                      
           MOUNTAIN VIEW, Califomia 94043                                                                                                            
                   EIN        61-1767919                                                                                          
           Earnings        FEIN        88-1303491                                                                
Department of the Treasury    Calendar Year                                                                                 Check Date: 04/15/2022                                                                                                                        
Internal Revenue Service        Due. (04/18/2022)                                                                                        
_________________________________________________________________ ______________________                                                                                                                  
Note: this Report is generated based on THE payroll data for your reference only. please contact IRS office for special cases such as late Payment, previous overpayment, penalty                                              
Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax. Commission                                                                                                                                                                                                                                                            
           Taxes / Deductions        Current        YTD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
   Total                                                                                                                          
   7567263607                                                    ID     00037305581  
           2017        2018        2019        2020        2021                                                                    
                                           Best Time to 911                                                                
INTERNAL       REVENUE       SERVICE                                                                                                            
PO BOX 1214                                                                                                                              
CHARLOTTE NC 28201-1214
EMPLOYEE-#9999999998       IRS-#88-1303491      Social Security-#633441725                                                                                
                                                                                   
1                                                                                                        
BUSINESS'  TAX IDENTIFICATION NUMBER:       633441725                                                                                                            

                   ZACHRY       T       WOOD                                                                                                                              
                   5323       BRADFORD       DR
                   DALLAS,       TX       7523                        
                                                                                                                                                       FIN:        61-1767919                                                                                          
Earnings                                                                                                                                           EIN:        88-1303491                                                                                                                                                                               
7567263607                                                                                                                               
WOOD  ZACHRY                       Tax Period              Total        Social Security        Medicare        Withholding                            
Fed 941 Corporate                     Sept-30, 2007.       66986.66         28841.48           6745.18                31400                                        
Fed 941 West Subsidiary           Sept-30, 2007.       17115.41           7369.14           1723.42             8022.85                                
Fed 941 South Subsidiary          Sept-30, 2007.       23906.09          10292.9           2407.21            11205.98                    
Fed 941 East Subsidiary            Sept-30, 2007.       11247.64          4842.74            1132.57              5272.33                      
Fed 941 Corp - Penalty              Sept-30, 2007.       27198.5          11710.47           2738.73               12749.3                                  
Fed 940 Annual Unemp - Corp  Sept-30, 2007.       17028.05                                                                          
PAY DATE:                                                                                                                                                                                                               2022-04-27                                                                                                                                    
RETURNED FOR MISSING SIGNATURE OR INFORMATION REQUIRED TO COMPLETE RETURN  SIGNATURE
  6b                633441725                                                                                                              
  7                ZACHRY T WOOD        Tax Period         Total        Social Security        Medicare        Wiages         tips       othernefits    and regular information                
Capital gain or (loss). Attach Schedule D if required. If not required, check here ....     
Other income from Schedule 1, line 10 ..................                                                                                                                      
   8                            
   9                
   Add lines 1, 2b, 3b, 4b, 5b, 6b, 7, and 8. This is your total income .........                 TTM        Q4 2021        Q3 2021        Q22021        Q1 2021        Q4 2020        Q3 2020        Q2 2020        Q1 2020        Q4 2019                                          
   9
   10                1.46698E+11        42337000000       37497000000        35653000000        31211000000        30818000000     25056000000        19744000000        22177000000        25055000000                                                                  
++Adjustments to income from Schedule 1, line 26 ...............                2.57637E+11        75325000000        65118000000        618800 00000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000                  
+++   10                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        461730
+++   00000        38297000000        41159000000        64133000000                                                                            
+++   11                                                                                                                                        
+++   Subtract line 10 from line 9. This is your adjusted gross income .........                 -5.79457E+11        -32988000000        -27621
+++   000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000        -18982000000        -210
+++   20000000                                                                                                                        
+++   11                -1.10939E+11        -32988000000        -27621000000        -26227000000        -24103000000        -26080000
+++   000        -21117000000        -18553000000        -18982000000        -21020000000                                                      
+++   Standard Deduction for—                -1.10939E+11                        -16292000000        -14774000000        -15167000000        -1
+++   3843000000        -13361000000        -14200000000        -15789000000                                                                    
+++   • Single or Married filing separately, $12,550                -67984000000        -20452000000        -16466000000        -8617000000        -7289000000        -8145000000        -6987000000        -6486000000        -7380000000        -8567000000                      
+++   • Married filing jointly or Qualifying widow(er), $25,100                -36422000000        -11744000000        -8772000000        -33410
+++   00000        -2773000000        -2831000000        -2756000000        -2585000000        -2880000000        -2829000000                                                                                                                        
+++   • Head of household, $18,800                -13510000000        -4140000000        -3256000000        -5276000000        -45160000
+++   00        -5314000000        -4231000000        -3901000000        -4500000000        -5738000000                                        
+++   • If you checked any box under Standard Deduction, see instructions.                -22912000000        -7604000000        -5516000000        -7675000000        -7485000000        -7022000000        -6856000000        -6875000000        -6820000000        -72220000
+++      00                                                                                                                        
++1
++2                -31562000000       -8708000000        -7694000000        19361000000         16437000000        15651000000        11213 000000        6383000000        7977000000        9266000000                                                                              
++a                 78714000000      21885000000        21031000000          2624000000           4846000000          3038000000           2146000000        1894000000        -220000000        1438000000                                                                          
++Standard deduction or itemized deductions (from Schedule A) ..      12020000000           2517000000          2033000000             313000000          269000000         333000000          412000000        420000000        565000000        604000000                              
++12a               1153000000           261000000           310000000            313000000             269000000            333000000              412000000          420000000        565000000          604000000                                                                                      
++b                   1153000000           261000000           310000000                                                                                    
++Charitable contributions if you take the standard deduction (see instructions)                                        -76000000           -76000000        -53000000        -48000000        -13000000        -21000000        -17000000                                    
++12b       -346000000        -117000000        -77000000          389000000          345000000          386000000          460000000           433000000        586000000        621000000                                                                                                  
++             1499000000        378000000       387000000        2924000000        4869000000        3530000000        1957000000         1696000000       -809000000        899000000                                                                                                                        
++Add lines 12a and 12b .......................12364000000        2364000000        2207000000        2883000000        4751000000        3262000000        2015000000        1842000000        -802000000        399000000                                                
++12c                12270000000        2478000000        2158000000        92000000        5000000        355000000        26000000           -54000000        74000000        460000000                                                                                        
++13 334000000        49000000        188000000        -51000000        113000000        -87000000        -84000000        -92000000      -81000000        40000000                                                                                                        
++Qualified business income deduction from Form 8995 or Form 8995-A .........-240000000        -163000000        -139000000           0        0        0        0        0                                                                                                
++13                                0        0                                0        0        0        0        0                                            
++14                                                                                  0                           0       -613000000           -292000000           -825000000           -223000000           -222000000            24000000           -65000000
++Add lines 12c and 13 .......................-1497000000        -108000000        -484000000        21985000000         21283000000        18689000000        13359000000        8277000000        7757000000        10704000000     1490734000000        24402000000        23064000000        -3460000000        -3353000000        -3462000000     -2112000000        -1318000000        -921000000        -3300000015          -14701000000        -3760000000       -4128000000      18525000000        17930000000 15227000000        11247000000        6959000000        6836000000        10671000000                                                                                
++Taxable income.
++                                                                                                                                                                  76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                        15                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                              
++For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                                                      
++Cat. No. 11320B                                                                                                                                        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000
++Form 1040 (2021)                                                                                                                                      76033000000        20642000000        18936000000                                                        
++Reported Normalized and Operating Income/Expense Supplemental Section                                                                    
++Total Revenue as Reported, Supplemental                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000                                      
++Total Operating Profit/Loss as Reported, Supplemental                78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000                        
++Reported Effective Tax Rate                                      0.162                0.179        0.157        0.158                0.158        0.159        0
++Reported Normalized Income                                                                                                                  
++Reported Normalized Operating Profit                                                                                          
++Other Adjustments to Net Income Available to Common Stockholders                                                                          
++Discontinued Operations                                                                                                        
++Basic EPS                                                             113.20        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96           15.49                                                                                                                        
++Basic EPS from Continuing Operations                112.20        31.12        28.44        27.69        26.63        22.46        16.55           10.21        9.96        15.47                                                                                                    
++Basic EPS from Discontinued Operations                                                                                                          
++Diluted EPS                                                          113.88        30.69        27.99        27.26        26.29        22.3          16.4           10.13        9.87           15.35                                                                                                                        
++Diluted EPS from Continuing Operations             113.20        30.67        27.99        27.26        26.29        22.23        16.4           10.13        9.87        15.33                                                                                                      
++Diluted EPS from Discontinued Operations                                                                                                        
++Basic Weighted Average Shares Outstanding                667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000        686465000        688804000                                                    
++Diluted Weighted Average Shares Outstanding              677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000        692267000        695193000                                                              
++Reported Normalized Diluted EPS                                                                                9.87                      
++Basic EPS                                                                                  113.88                       31.15                      28.44                    27.69                       26.63                      22.54                      16.55                     10.21                         9.96                      15.49                                                                                                                        
++Basic Earnings Par Share                                                          113.20                       31.15                      28.44                    27.69                       26.63                      22.54                      16.55                     10.21                         9.96                      15.49                                                                                                                        
++Diluted EPS                                                                                112.20                       31.15                      28.44                    27.26                       26.29                      22.30                      16 40                     10.13                       10.00                      15.35                
++Diluted Earnings Par  Share                                                       112.20                       30.69                      27.99                    27.26                       26.29                      22.30                      16.40                     10.13                        9.87                       15.35                                                                                                                        
++Basic WASO                                                                   667650000.00        662664000.00        665758000.00       668958000.00        673220000.00        675581000.00        679449000.00        681768000.00        686465000.00        688804000.00                                                                                    
++Basic Weighted Average Shares Outstanding                667650000.00        662664000.00        665758000.00       668958000.00        673220000.00        675581000.00        679449000.00        681768000.00        686465000.00        688804000.00                                                    
++Diluted WASO                                                                 677674000.00        672493000.00        676519000.00       679612000.00        682071000.00        682969000.00        685851000.00        687024000.00        692267000.00        695193000.00
++Diluted Weighted Average Shares Outstanding              677674000.00        672493000.00        676519000.00       679612000.00        682071000.00        682969000.00        685851000.00        687024000.00        692267000.00        695193000.00
++Deposited to the account Of : PNC Bank Business Tax Identification Number: 633441725    
++___________________________________________________________________                                                                                            04/18/2022
++Investment Products • Not FDIC Insured  •  No Bank Guarantee •  May Loose Value
++PLEASE READ THE IMPORTANT DISCLOSURES BELOW                                      
++                                             
++Time Zone: Eastern Central Mountain Pacific
++CIF Department (Online Banking)  Checking Account: 47-2041-6547 P7-PFSC-04-F                                                                                                                                                                                                                                                                                            
++500 First Avenue
++Pittsburgh, PA 15219-3128    
++Business Type: Sole Proprietorship/Partnership Corporation
++                                                           
++                                                                            5323 BRADFORD DR                                                                   NON-NEGOTIABLE
++                                                                            DALLAS TX 75235 8313
++                                                                            ZACHRY, TYLER, WOOD    
0 Units Q1 TTM Taxes / Deductions Current YTD Q3 70842745000 70842745000 Federal Withholding 00000 00000 Q4 70842745000 70842745000 Federal Withholding 00000 00000 CHECK NO. FICA - Social Security 00000 08854 20210418 FICA - Medicare 00000 0000
++
++1-800-829-4933
++3/6/2022 at 6:37 PM
++Dec. 31, 2020 Dec. 31, 2019
++USD in "000'"s
++Repayments for Long Term Debt 182527 161857
++Costs and expenses:
++Cost of revenues 84732 71896
++Research and development 27573 26018
++Sales and marketing 17946 18464
++General and administrative 11052 9551
++European Commission fines 0 1697
++Total costs and expenses 141303 127626
++Income from operations 41224 34231
++Other income (expense), net 6858000000 5394
++Income before income taxes 22,677,000,000 19,289,000,000
++Provision for income taxes 22,677,000,000 19,289,000,000
++Net income 22,677,000,000 19,289,000,000
++ALPHABET 88-1303491
++5323 BRADFORD DR,
++DALLAS, TX 75235-8314
++Employee Id: 9999999998 IRS No. 000000000000
++INTERNAL REVENUE SERVICE, $20,210,418.00
++PO BOX 1214, Rate Units Total YTD Taxes / Deductions Current YTD
++CHARLOTTE, NC 28201-1214 - - $70,842,745,000.00 $70,842,745,000.00 Federal Withholding $0.00 $0.00
++Earnings FICA - Social Security $0.00 $8,853.60
++Commissions FICA - Medicare $0.00 $0.00
++FUTA $0.00 $0.00
++SUTA $0.00 $0.00
++EIN: 61-1767ID91:900037305581 SSN: 633441725
++$70,842,745,000.00 $70,842,745,000.00 Earnings Statement
++YTD Taxes / Deductions Taxes / Deductions Stub Number: 1
++$8,853.60 $0.00
++YTD Net Pay Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 18-Apr-22
++$70,842,736,146.40 $70,842,745,000.00 XXX-XX-1725 Annually
++INTERNAL REVENUE SERVICE,
++PO BOX 1214,
++CHARLOTTE, NC 28201-1214
++00015                                                                                                                                  
++CP 575A (Rev. 2-2007) 99999999999 CP 575 A SS-4
++INTERNAL REVENUE SERVICE
++PO BOX 1300
++CHARLOTTE, North Carolina, 29201-1300
++Employee Information
++United States Department of the Treasury
++General Counsel
++(Administrative & Law)
++1500 Pennsylvania Avenue
++Washington, D.C. 20220-1219                                                Pay Period 2019-09-28 - 2021-09-29 +
++Room.#: 1402                                                                               Paid Date   2022-04-18                                                                                                           Pay Day    2022-04-1
+++main. +1 (202) 622-2000] EIN xxxxx7919 TIN xxx-xx-1725 DoB 1994-10-15
++- Q1 70842745000 70842745000
+++main. +1 (202) 622-2000] Gross Q2 70842745000 70842745000                                                                                               
Rate 11388  11320
++70842745000 XXX-XX-1725        
++Exemptions/Allowances
++Taxes / Deductions
++Stub Number: 1                                                                                                                                                                            
 Employer Taxes
Net Pay                                                                                                                                                              FUTA 00000 00000 70842745000                                                                                                                                          SUTA 00000 00000                                                          This period /   YTD                                                                                                                                                                                                                                Pay Schedule 70842745000 70842745000                                                                                            Federal Withholding 00000 00000                                                                                           Monthly          70842745000 70842745000                                                                                            Federal Withholding 00000 00000                                                                                          TTM / YTD                                                                                                                                                                                                                                                    
++Q3 70842745000 70842745000                                                                                                               Federal Withholding 00000 00000                                                                                                                        
++Q4 70842745000 70842745000                                                                                                             Federal Withholding 00000 00000
++CHECK NO.                                                                                                                                                  FICA - Social Security 00000 08854
++20210418                                                                                                                                                  FICA - Medicare          00000 0000
++Net Pay                                                                                                                                                            FUTA 00000 00000 70842745000                                                                                                                                        SUTA 00000 00000                                                          This period /   YTD                                                                                                                                                                                                                                Pay Schedule 70842745000 70842745000                                                                                            Federal Withholding 00000 00000                                                                                           Monthly          70842745000 70842745000                                                                                            Federal Withholding 00000 00000                                            ID:      txdl  00037305581      SSN:     xxx-xx-1725    DoB: 1994-10-15                                                                                                                                                                                                                                      
++1-800-829-4933
++3/6/2022 at 6:37 PM
++Dec. 31, 2020 Dec. 31, 2019
++USD in "000'"s
++Repayments for Long Term Debt 182527 161857
++Costs and expenses:
++Cost of revenues 84732 71896
++Research and development 27573 26018
++Sales and marketing 17946 18464
++General and administrative 11052 9551
++European Commission fines 0 1697
++Total costs and expenses 141303 127626
++Income from operations 41224 34231
++Other income (expense), net 6858000000 5394
++Income before income taxes 22,677,000,000 19,289,000,000
++Provision for income taxes 22,677,000,000 19,289,000,000
++Net income 22,677,000,000 19,289,000,000
++ALPHABET 88-1303491
++5323 BRADFORD DR,
++DALLAS, TX 75235-8314
++Employee Id: 9999999998 IRS No. 000000000000
++INTERNAL REVENUE SERVICE, $20,210,418.00
++PO BOX 1214, Rate Units Total YTD Taxes / Deductions Current YTD
++CHARLOTTE, NC 28201-1214 - - $70,842,745,000.00 $70,842,745,000.00 Federal Withholding $0.00 $0.00
++Earnings FICA - Social Security $0.00 $8,853.60
++Commissions FICA - Medicare $0.00 $0.00
++FUTA $0.00 $0.00
++SUTA $0.00 $0.00
++EIN: 61-1767ID91:900037305581 SSN: 633441725
++$70,842,745,000.00 $70,842,745,000.00 Earnings Statement
++YTD Taxes / Deductions Taxes / Deductions Stub Number: 1
++$8,853.60 $0.00
++YTD Net Pay Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 18-Apr-22
++$70,842,736,146.40 $70,842,745,000.00 XXX-XX-1725 Annually
++INTERNAL REVENUE SERVICE,
++PO BOX 1214,
++CHARLOTTE, NC 28201-1214
++00015
curl.cainfo = C:\certificates\conan/ball.yml :<li>perm<li>
