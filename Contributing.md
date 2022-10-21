# Welcome to GitHub docs contributing guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)


## Getting started

To navigate our codebase with confidence, see [the introduction to working in the docs repository](/contributing/working-in-docs-repository.md) :confetti_ball:. For more information on how we write our markdown files, see [the GitHub Markdown reference](contributing/content-markup-reference.md).

Check to see what [types of contributions](/contributing/types-of-contributions.md) we accept before making changes. Some of them don't even require writing a single line of code :sparkles:.

### Issues

#### Create a new issue

If you spot a problem with the docs, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/github/docs/issues/new/choose). 

#### Solve an issue

Scan through our [existing issues](https://github.com/github/docs/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See [Labels](/contributing/how-to-use-labels.md) for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes in the UI

Click **Make a contribution** at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the `.md` file where you can make your changes and [create a pull request](#pull-request) for a review. 

 <img src="./assets/images/contribution_cta.png" width="300" height="150" /> 

#### Make changes in a codespace

For more information about using a codespace for working on GitHub documentation, see "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."

#### Make changes locally

1. [Install Git LFS](https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage).

2. Fork the repository.
- Using GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

3. Install or update to **Node.js v16**. For more information, see [the development guide](contributing/development.md).

4. Create a working branch and start with your changes!

### Commit your update

Commit the changes once you are happy with them. Don't forget to [self-review](/contributing/self-review.md) to speed up the review process:zap:.

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.
- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request. 
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations :tada::tada: The GitHub team thanks you :sparkles:. 

Once your PR is merged, your contributions will be publicly visible on the [GitHub docs](https://docs.github.com/en). 

Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
+
+   INTERNAL REVENUE SERVICE,        *include interest paid, capital obligation, and underweighting                6858000000                                                                                                                                                 
+   PO BOX 1214,        Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)            
+       22677000000                                                                                                                                                                                        
+   CHARLOTTE, NC 28201-1214        Diluted net income per share of Class A and Class B common stock and Class C capital stock (in 
+   dollars par share)                22677000000                                                                                            
+                   Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                
+                   22677000000                                                                                                                                                                                        
+           Taxes / Deductions        Current        YTD                                                                                                                                                                                        
+   Fiscal year ends in Dec 31 | USD                                                                                                          
+   Rate                                                                                                                                                                                                                 
+   Total                                                                                                                           
+   7567263607                                                    ID     00037305581     SSN     633441725     DoB     1994-10-15            
+year to date :
+
+this period :
+
+   April 18, 2022.                                                                                                                 
+   7567263607                                                                                                                                
+   WOOD  ZACHRY                Tax Period         Total        Social Security        Medicare        Withholding                            
+   Fed 941 Corporate                39355        66986.66        28841.48        6745.18        31400                                        
+   Fed 941 West Subsidiary                39355        17115.41        7369.14        1723.42        8022.85                                
+   Fed 941 South Subsidiary                39355        23906.09        10292.9        2407.21        11205.98                     
+   Fed 941 East Subsidiary                39355        11247.64        4842.74        1132.57        5272.33                       
+   Fed 941 Corp - Penalty                39355        27198.5        11710.47        2738.73        12749.3                                  
+   Fed 940 Annual Unemp - Corp                39355        17028.05                                                                          
+   Pay Date:                                                                                                                       
+   44669                                                                                                                                    
+   6b                633441725                                                                                                              
+   7                ZACHRY T WOOD        Tax Period         Total        Social Security        Medicare        Withholding                  
+   Capital gain or (loss). Attach Schedule D if required. If not required, check here ....▶                
+Fed 941 Corporate 39355 66986.66 28841.48 6745.18 31400
+
+   7                Fed 941 West Subsidiary        39355        17115.41        7369.14        1723.42        8022.85               
+   8                Fed 941 South Subsidiary        39355        23906.09        10292.9        2407.21        11205.98                                                                                                                                                       
+   Other income from Schedule 1, line 10 ..................                Fed 941 East Subsidiary        39355        11247.64        4842.74        1132.57        5272.33                                                                                                          
+   8                Fed 941 Corp - Penalty        39355        27198.5        11710.47        2738.73        12749.3                        
+   9                Fed 940 Annual Unemp - Corp        39355        17028.05                                                                
+   Add lines 1, 2b, 3b, 4b, 5b, 6b, 7, and 8. This is your total income .........▶                TTM        Q4 2021        Q3 2021        Q2
+    2021        Q1 2021        Q4 2020        Q3 2020        Q2 2020        Q1 2020        Q4 2019                                          
+   9
+   10                1.46698E+11        42337000000        37497000000        35653000000        31211000000        30818000000     
+      25056000000        19744000000        22177000000        25055000000                                                                  
+   Adj
+   ustments to income from Schedule 1, line 26 ...............                2.57637E+11        75325000000        65118000000        618800
+   00000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000                  
+   10                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        461730
+   00000        38297000000        41159000000        64133000000                                                                            
+   11                                                                                                                                        
+   Subtract line 10 from line 9. This is your adjusted gross income .........▶                -5.79457E+11        -32988000000        -27621
+   000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000        -18982000000        -210
+   20000000                                                                                                                        
+   11                -1.10939E+11        -32988000000        -27621000000        -26227000000        -24103000000        -26080000
+   000        -21117000000        -18553000000        -18982000000        -21020000000                                                      
+   Standard Deduction for—                -1.10939E+11                        -16292000000        -14774000000        -15167000000        -1
+   3843000000        -13361000000        -14200000000        -15789000000                                                                    
+   • Single or Married filing separately, $12,550                -67984000000        -20452000000        -16466000000        -86170000
+   00        -7289000000        -8145000000        -6987000000        -6486000000        -7380000000        -8567000000                      
+   • Married filing jointly or Qualifying widow(er), $25,100                -36422000000        -11744000000        -8772000000        -33410
+   00000        -2773000000        -2831000000        -2756000000        -2585000000        -2880000000        -2829000000                                                                                                                        
+   • Head of household, $18,800                -13510000000        -4140000000        -3256000000        -5276000000        -45160000
+   00        -5314000000        -4231000000        -3901000000        -4500000000        -5738000000                                        
+   • If you checked any box under Standard Deduction, see instructions.                -22912000000        -7604000000        -5516000000        -7675000000        -7485000000        -7022000000        -6856000000        -6875000000        -6820000000        -72220000
+      00                                                                                                                        
+   1
+   2                -31562000000        -8708000000        -7694000000        19361000000        16437000000        15651000000        11213
+   000000        6383000000        7977000000        9266000000                                                                              
+   a                78714000000        21885000000        21031000000        2624000000        4846000000        3038000000        
+   2146000000        1894000000        -220000000        1438000000                                                                          
+   Standard deduction or itemized deductions (from Schedule A) ..                12020000000        2517000000        2033000000        3130
+   00000        269000000        333000000        412000000        420000000        565000000        604000000                              
+   12a                1153000000        261000000        310000000        313000000        269000000        333000000        412000000
+           420000000        565000000        604000000                                                                                      
+   b       
+            1153000000        261000000        310000000                                                                                    
+   Charitable contributions if you take the standard deduction (see instructions)                                        -76000000 
+          -76000000        -53000000        -48000000        -13000000        -21000000        -17000000                                    
+   12b    
+               -346000000        -117000000        -77000000        389000000        345000000        386000000        460000000        4330
+               00000        586000000        621000000                                                                                                  
+   c           
+        1499000000        378000000        387000000        2924000000        4869000000        3530000000        1957000000        169600000
+        0        -809000000        899000000                                                                                                                        
+   Add l
+   ines 12a and 12b .......................                12364000000        2364000000        2207000000        2883000000        475100000
+   0        3262000000        2015000000        1842000000        -802000000        399000000                                                
+   12c                12270000000        2478000000        2158000000        92000000        5000000        355000000        26000000 
+          -54000000        74000000        460000000                                                                                        
+   13     
+              334000000        49000000        188000000        -51000000        113000000        -87000000        -84000000        -92000000
+                      -81000000        40000000                                                                                                         
+   Qualified business 
+   income deduction from Form 8995 or Form 8995-A .........                -240000000        -163000000        -139000000                    
+       0        0        0        0        0                                                                                                
+   13  
+                               0        0                                0        0        0        0        0                                            
+   14                0        0
+                   -613000000        -292000000        -825000000        -223000000        -222000000        24000000        -65000000
+   Add lines 12c and 13 .......................                -1497000000        -108000000        -484000000        21985000000   
+        21283000000        18689000000        13359000000        8277000000        7757000000        10704000000                            
+   14                90734000000        24402000000        23064000000        -3460000000        -3353000000        -3462000000     
+      -2112000000        -1318000000        -921000000        -33000000                                                                      
+   15 
+                  -14701000000        -3760000000        -4128000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000                                                                                
+   Taxable income.
+    Subtract line 14 from line 11. If zero or less, enter -0- .........                76033000000        20642000000        189360000
+    00        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        1067100000
+    0                                                                                                                        
+   1
+   5                76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        112470
+   00000        6959000000        6836000000        10671000000                                                                              
+   For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                76033000000        206420000
+   00        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        683600000
+   0        10671000000                                                                                                                      
+   Cat. No. 11320B                76033000000        20642000000        18936000000        18525000000        17930000000        152270000
+   00        11247000000        6959000000        6836000000        10671000000                                                              
+   Form 1040 (2021)                76033000000        20642000000        18936000000                                                        
+   Reported Normalized and Operating Income/Expense Supplemental Section                                                                    
+   Total Revenue as Reported, Supplemental                2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000                                      
+   Total Operating Profit/Loss as Reported, Supplemental                78714000000        21885000000        21031000000        193610000
+   00        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000                        
+   Reported Effective Tax Rate                0.16                0.179        0.157        0.158                0.158        0.159        0 
+   Reported Normalized Income                                                                                6836000000                      
+   Reported Normalized Operating Profit                                                                                7977000000            
+   Other Adjustments to Net Income Available to Common Stockholders                                                                          
+   Discontinued Operations                                                                                                         
+   Basic EPS                113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96     
+      15.49                                                                                                                        
+   Basic EPS from Continuing Operations                113.88        31.12        28.44        27.69        26.63        22.46        16.55 
+          10.21        9.96        15.47                                                                                                    
+   Basic E
+   PS from Discontinued Operations                                                                                                          
+   Diluted EPS                112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13        9.87     
+      15.35                                                                                                                        
+   Diluted EPS from Continuing Operations                112.2        30.67        27.99        27.26        26.29        22.23        16.4  
+         10.13        9.87        15.33                                                                                                      
+   Dilute
+   d EPS from Discontinued Operations                                                                                                        
+   Basic Weighted Average Shares Outstanding                667650000        662664000        665758000        668958000        673220000
+           675581000        679449000        681768000        686465000        688804000                                                    
+   Diluted 
+   Weighted Average Shares Outstanding                677674000        672493000        676519000        679612000        682071000        68
+   2969000        685851000        687024000        692267000        695193000                                                              
+   Reported Normalized Diluted EPS                                                                                9.87                      
+   Basic EPS                113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96     
+      15.49                                                                                                                        
+   Diluted EPS                112.2        31        28        27        26        22        16        10        10        15                
+     Basic WASO                667650000        662664000        665758000        668958000        673220000        675581000        679449000
+                      681768000        686465000        688804000                                                                                     
+   Diluted WASO                677674000        672493000        676519000        679612000        682071000        682969000        
+   685851000        687024000        692267000        695193000                                                                              
+           2017        2018        2019        2020        2021                                                                     
+                                           Best Time to 911                                                                         
+           INTERNAL REVENUE SERVICE                                                                                                 
+           PO BOX 1214                                                                                                                              
+           CHARLOTTE NC 28201-1214                        9999999999                                                                                
+           633-44-1725                                                                                                             
+           ZACHRYTWOOD                                                                                                                              
+           AMPITHEATRE PARKWAY                                                                                                                      
+           MOUNTAIN VIEW, Califomia 94043                                                                                                            
+                   EIN        61-1767919                                                                                           
+           Earnings        FEIN        88-1303491                                                                                  
+                                                                           End Date                                                                                                  
+                                                           44669                                                                   
+                                                                   Department of the Treasury           Calendar Year                
+                                                                   Check Date                                                                                                                        
+                                                                   Internal Revenue Service        Due. (04/18/2022)                                                                                        
+                                                            _________________________________________________________________
+                                                            ______________________                                                                                                                   
+                                                                   Tax Period         Total        Social Security        Medicare 
+                                                                    IEIN:                                             88-1656495   
+                                                                         TxDL:                                  00037305580        SSN:                                                                                                                        
+                                                           INTERNAL 
+                                                           REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29200                                                                              
+                                                                   39355        23906.09        10292.9        2407.21             
+   20210418                                                                39355        11247.64        4842.74        1132.57     
+                                                                                                                                   39355        27198.5        11710.47        2738.73                      
+                                                                   39355        17028.05                                           
+                                                                                   CP 575A (Rev. 2-2007) 99999999999                CP 575 A                                                          SS-4           
+                                                           Earnings Statement                                                       
+                                                                    IEIN:                                             88-1656496   
+                                                                         TxDL:                                  00037305581        SSN:                                                                      
+                                   INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201                           
+           Employee Information        Pay to the order of                ZACHRY T WOOD                                             
+                                   AMPITHEATRE PARKWAY,                                                                             
+                                   MOUNTAIN VIEW, California 94043      
