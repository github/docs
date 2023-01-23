import dotenv from 'dotenv'
import './lib/check-node-version.js'
import './lib/handle-exceptions.js'
import portUsed from 'port-used'
import createApp from './lib/app.js'
import warmServer from './lib/warm-server.js'
import http from 'http'
dotenv.config()
const { PORT, NODE_ENV } = process.env
const port = Number(PORT) || 4000
export async function main() {
  if (NODE_ENV !== 'production') {
    await checkPortAvailability()
  return await startServer()
async function checkPortAvailability() {
  // Check that the development server is not already running
  const portInUse = await portUsed.check(port)
  if (portInUse) {
    console.log(`\n\n\nPort ${port} is not available. You may already have a server running.`)
    console.log(
      `Try running \`npx kill-port ${port}\` to shut down all your running node processes.\n\n\n`
    console.log('\x07') // system 'beep' sound
    process.exit(1
async function startServer() {
  const app = createApp()
  // Warm up as soon as possible.
  // The `warmServer()` function is idempotent and it will soon be used
  // by some middleware, but there's no point in having a started server
  // without this warmed up. Besides, by starting this slow thing now,
  // it can start immediately instead of waiting for the first request
  // to trigger it to warm up. That way, when in development and triggering
  // a `nodemon` restart, there's a good chance the warm up has come some
  // way before you manage to reach for your browser to do a page refresh.
  await warmServer()
      ++on:
++  push:
++    branches: master
++  pull_request: 
++    run-on: ubuntu-latest
++    steps:
++    - name: Set up Git repository
++      uses: actions/checkout@v3
++    - name: Set up Ruby
++      uses: ruby/setup-ruby@v1
++      with:
++        bundler-cache: true
++    - name: Set up Node
++      uses: actions/setup-node@v3
++    - name: Bootstrap
++      run: script/bootstrap
++    - name: Tests
++      run: script/test 
++<?xml version="1.0" encoding="utf-8"?>
++charmap keyset =  new
++{ "new keymap Charset = Pro" }
++<configuration>
++    <packageSources>
++        <clear />
++        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
++    </packageSources>
++    <packageSourceCredentials>
++        <github>
++            <add key="Username" value="USERNAME" />
++            <add key="ClearTextPassword" value="TOKEN" />
++        </github>
++    </packageSourceCredentials>
++</configuration> 
++on:
++Runs-on:on:"
++const: "token"''
++token: "((c)(r))"''
++'Value": "[VOLUME]'"''
++ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
++
+ 
+ executors:
+   main:diff --git a/bitore.sig b/bitore.sig
+new file mode 100644
+index 00000000000..bfe93315645
+--- /dev/null
++++ b/bitore.sig
+@@ -0,0 +1,788 @@
++on:
++Runs-on:on:
++on:
++  push:
++    branches: master
++  pull_request: 
++    run-on: ubuntu-latest
++    steps:
++    - name: Set up Git repository
++      uses: actions/checkout@v3
++    - name: Set up Ruby
++      uses: ruby/setup-ruby@v1
++      with:
++        bundler-cache: true
++    - name: Set up Node
++      uses: actions/setup-node@v3
++    - name: Bootstrap
++      run: script/bootstrap
++    - name: Tests
++      run: script/test 
++<?xml version="1.0" encoding="utf-8"?>
++charmap keyset =  new
++{ "new keymap Charset = Pro" }
++<configuration>
++    <packageSources>
++        <clear />
++        <add key="github" value="https://"name": "my-electron-app",
++  "version": "1.0.0",
++  "description": "Hello World!",
++const: "token"''
++token: "((c)(r))"''
++[Volume].]: "[12753750].00]"''
++ITEM_ID: "BITORE_34173"''
++"name": "my-electron-app",
++  "version": "0.0.0",
++  "description": "Hello World!'@https://git.io/codeql-language-support# For most projects, this workflow file will not need changing; you simply need
++- # to commit it to your repository.
++on :-on ::
++> Be accurate --- Ensure the Estate name on the check matches our records exactly.  
++> Consult a professional --- Consult a lawyer mail in all aspects of  administering the Estate, 
++> seek advice from the lawyer or accountant on taxes owed by the Estate.  
++> Separate the Estate from your own finances --- 
++> law forbids mingling the Estate with your personal finances.  
++> Keep good records --- 
++> Account for every transaction 
++> Keep records of all canceled checks-and-reciepts in a safe place.  
++> These are just some important points in Estate administration.  
++> We would be happy to advise you of ways to 
++> find answers to your other questions.  
++> Checking Account 
++> Identification
++> 9-digit Routing                  Account Number
++> _______|_______      ______________|___________     
++> |                           |      |                                                 |
++> |:071921891|:|        |4720416547||'                     |Routing/Transit Number and Account Numbers shown to the left are for your new account.  
++Refer to them when making deposits and making withdrawls quickly and accuratly.  
++Keep this and all business financial information secure.  
++Be sure to ask about ordering checks for your new account.
++________________________________________________________________________________________________________________________________________
++________________________________________________________________________________________________________________________________________   
++_________________________________([$OBJ]  S e c u r i t y  e n h a n c e d  d o c u m e n t.    S e e   b a c k   f o r   d e t a i l s .     [$OBJ])_________________________________
++_________________________________________________________________________________________________________________________________________________________________________________
++
++             
++
++                                                                           PNC Bank, N.A.      071 
++                                                                                                                                                                                                                              DATE_________________________7_0_-_2189/719
++                                                                                   
++                                                                                   7364
++PAY TO THE ORDER OF_____________________________________________________________________________________________________________________________________________________| $ |____________________________|
++
++_______________________________________________VOID____________________________________________________________________________________________________________DOLLARS [$OBJ] Security
++
++                                                                         Features
++
++                                                                         Detaile on
++
++                                                                         Back.
++ESTATE OF
++                                                                                                                                        
++                                                                                MP } EXECUTOR/                                 {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
++RIZEDSIGNATUREAUTHORIZEDSIGNATURE}ADMINISTRATOR
++                                                                                                                                        
++                                                                                MP }PERSONAL                                   {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
++RIZEDSIGNATUREAUTHORIZEDSIGNATURE} REPRESENTATIVE
++                                                                                                                                        
++                                                                                MP } TRUSTEE                                  {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
++RIZEDSIGNATUREAUTHORIZEDSIGNATURE}
++
++
++a071921891a_4720416547c
++                                
++
++
++
++
++______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
++________________________________________________________________________________________________________________________________________   
++_________________________________([$OBJ]  S e c u r i t y  e n h a n c e d  d o c u m e n t.    S e e   b a c k   f o r   d e t a i l s .     [$OBJ])_________________________________
++_________________________________________________________________________________________________________________________________________________________________________________
++                                               NO.
++                                                              [$OBJ]PNCBANK                                                                                                                                                                                                                              
++                                                                           PNC Bank, N.A.      071
++                                                                                                                                                                                                                              DATE_________________________7_0_-_2189/719
++                                                                                   
++                                                                                   7364
++PAY TO THE ORDER OF_____________________________________________________________________________________________________________________________________________________| $ |____________________________|
++
++_______________________________________________VOID____________________________________________________________________________________________________________DOLLARS [$OBJ] Security
++
++                                                                         Features
++
++                                                                         Detaile on
++
++                                                                         Back.
++ESTATE OF
++                                                                                                                                        
++                                                                                MP } EXECUTOR/                                 {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
++RIZEDSIGNATUREAUTHORIZEDSIGNATURE}ADMINISTRATOR
++                                                                                                                                        
++                                                                                MP }PERSONAL                                   {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
++RIZEDSIGNATUREAUTHORIZEDSIGNATURE} REPRESENTATIVE
++                                                                                                                                        
++                                                                                MP } TRUSTEE                                  {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
++RIZEDSIGNATUREAUTHORIZEDSIGNATURE}
++
++
++
++
++a071921891a_4720416547c
++                                         
++
++
++
++____________________________________________________________________________________________________________________________________________________________________________________                                                                                                                       
++Form 1040-V 2021                                                                                                                                                                                                                              Page 2
++________________________________________________________________________________________________________________________________________
++IF you live in...                                                                                                                                                  THEN use this address to send in your payment... 
++________________________________________________________________________________________________________________________________________
++Alabama, Florida, Georgia, Louisiana, Missippi, North Carolina, South Carolina, Tennessee, Texas|  Internal Revenue Service 
++                                                                                                                                                                                               |            P.O. Box 1214 
++                                                                                                                                                                                               | Charolette, NC 28201-1214
++________________________________________________________________________________________________________________________________________
++TO PAY YOUR TAXES DUE BY CHECK, MAIL THIS FORM TO THE THE ADDRESS LISTED BELOW
++________________________________________________________________________________________________________________________________________
++                                                                                                                                                                                                                                Form 1040-V       2021
++ ----------------------------------------------------------<  Detach Here and Mail With Your Payment and Return  >---------------------------------------------------------------------
++Department of the Treasury 2021 Form 1040-V Payment Voucher
++Internal Revenue Service      (99)  
++> Use this voucher when making a payment with Form 1040.
++> Do not staple this voucher or your payment to Form 1040.
++> Make your check or money order payable to the 'United States Treasury. '______________________________________________________________
++> Write your Social Security nnumber (SSN) on your check or money order. | Enter the amount of your payment . . . . . . . .>|      7,567,263,607.      |                                                                                                                 REV 04/09/22 INTUIT.CG.      1555                                   ________________________________________________________________________________________________________________________________________
++ZACHRY T WOOD
++                                                                                                                                                     INTERNAL  REVENUE SERVICE
++5222 BRADFORD DR                                                                                                             P.O. BOX 1214
++DALLAS TX 75235-8313                                                                                                     CHARLOTTE, NC 28201-1214
++'''
++'''
++'''
++'''
++'''
++'______________633441725__BH__WOOD__30__0__202112__610
++                                                                                                                
++                                                        1                Earnings Statement                                        A
++                                                                                                                
++        ALPHABET                                                                        Period Beginning:                        37151                
++        1600 AMPITHEATRE PARKWAY                         DR                                        Period Ending:                        44833                
++        MOUNTAIN VIEW, C.A., 94043                                                                Pay Date:                        44591                
++        "Taxable Marital Status: 
++Exemptions/Allowances"                        Married                                        ZACHRY T.                         WOOD                
++                                                                        5323        BRADFORD DR                                
++        Federal:                                                                                                        
++                                                                        DALLAS                TX 75235-8314                        
++        TX:                NO State Incorne Tax                                                                                        
++Earnings                rate        units                                        year to date        Other Benefits and                                        
++Regular                112.2        674678000                                        75698871600        Information                                this period        total to date
++Overtime                                                                                Pto Balance                                                
++"Bonus
++Training"                                                                                Total Work Hrs                                0        75698871600
++        Gross Pay        75698871600                                                                Important Notes                                        
++                                                                        COMPANY PH Y: 650-253-0000                                        
++Deductions        Statutory                                                                BASIS OF PAY: BASIC/DILUTED EPS                                        
++        Federal Income Tax                                                                                                                        
++        Social Security Tax                                                                                                                        
++                                                                        YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE                                        
++        Medicare Tax                                                                                                                        
++                                                                                                                        
++        Net Pay                70842743866                70842743866                                                                        
++        CHECKING                                                                                                                
++        Net Check                70842743866                                                                                                
++        Your federal taxable wages this period are $                                                                                                        
++        ALPHABET INCOME                                                                Advice number:                        650001                
++        1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043                                                                Pay date:_                        44669                
++                                                                                                                
++        Deposited to the account Of                                                                xxxxxxxx6547                        transit ABA                
++        "PLEASE READ THE IMPORTANT DISCLOSURES BELOW                                                                                                                                                                                                                                                                        
++                                                                                                                                                                                                                                                                        
++FEDERAL RESERVE MASTER SUPPLIER ACCOUNT                                        31000053-052101023                                                                                                                                                                                                COD                                
++                                        633-44-1725                                                                                                                                                                Zachryiixixiiiwood@gmail.com                                47-2041-6547                111000614                31000053
++PNC Bank                                                                                                                                                                                                                                        PNC Bank Business Tax I.D. Number: 633441725                                
++CIF Department (Online Banking)                                                                                                                                                                                                                                        Checking Account: 47-2041-6547                                
++P7-PFSC-04-F                                                                                                                                                                                                                                        Business Type: Sole Proprietorship/Partnership Corporation                                
++500 First Avenue                                                                                                                                                                                                                                        ALPHABET                                
++Pittsburgh, PA 15219-3128                                                                                                                                                                                                                                        5323 BRADFORD DR                                
++NON-NEGOTIABLE                                                                                                                                                                                                                                        DALLAS TX 75235 8313                                
++                                                                                                                                                                                                                                        ZACHRY, TYLER, WOOD                                
++                                                                                                                                                                                                                4/18/2022                        650-2530-000 469-697-4300                                
++                                                                                                                SIGNATURE                                                                                                                        Time Zone: Eastern Central Mountain Pacific                                
++Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value"                                                                                        5264-5331                
++                                                                        NON-NEGOTIABLE                                        
++        PLEASE READ THE IMPORTANT DISCLOSURES BELOW                                                                                                        
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++                                                                                                                
++        Based on facts as set forth in.                        6550                                                                                
++        The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.                                                                                                        
++                                                                                                                
++        EMPLOYER IDENTIFICATION NUMBER:       61-1767919                                                                                                        
++                                                                                                                
++                                                                                                                
++        [DRAFT FORM OF TAX OPINION]                                                                                                        
++                                                                                                                
++                                                                                                                
++                                                                                                        1        
++                                                                                                                
++        ALPHABET                                                                                                        
++        ZACHRY T WOOD                                                                                                        
++        5323 BRADFORD DR                                                                                                        
++        DALLAS TX 75235-8314                                                                                                        
++        ORIGINAL REPORT                                                                                                        
++        Income, Rents, & Royalty                                                                                                        
++        INCOME STATEMENT         61-1767919                                                                                                
++                88-1303491                                                                                                
++        GOOGL_income-statement_Quarterly_As_Originally_Reported        TTM        Q4 2021        Q3 2021        Q2 2021        Q1 2021        Q4 2020        Q3 2020        Q2 2020        Q1 2020        Q4 2019        Q3 2019                
++                                                                                                                
++        Gross Profit        146698000000        42337000000        37497000000        35653000000        31211000000        30818000000        25056000000        19744000000        22177000000        25055000000        22931000000                
++        Total Revenue as Reported, Supplemental        257637000000        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000        40499000000                
++                257637000000        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        64133000000        34071000000                
++        Other Revenue                                                                                        6428000000                
++        Cost of Revenue        -110939000000        -32988000000        -27621000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000        -18982000000        -21020000000        -17568000000                
++        Cost of Goods and Services        -110939000000        -32988000000        -27621000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000        -18982000000        -21020000000        -17568000000                
++        Operating Income/Expenses        -67984000000        -20452000000        -16466000000        -16292000000        -14774000000        -15167000000        -13843000000        -13361000000        -14200000000        -15789000000        -13754000000                
++        Selling, General and Administrative Expenses        -36422000000        -11744000000        -8772000000        -8617000000        -7289000000        -8145000000        -6987000000        -6486000000        -7380000000        -8567000000        -7200000000                
++        General and Administrative Expenses        -13510000000        -4140000000        -3256000000        -3341000000        -2773000000        -2831000000        -2756000000        -2585000000        -2880000000        -2829000000        -2591000000                
++        Selling and Marketing Expenses        -22912000000        -7604000000        -5516000000        -5276000000        -4516000000        -5314000000        -4231000000        -3901000000        -4500000000        -5738000000        -4609000000                
++        Research and Development Expenses        -31562000000        -8708000000        -7694000000        -7675000000        -7485000000        -7022000000        -6856000000        -6875000000        -6820000000        -7222000000        -6554000000                
++        Total Operating Profit/Loss        78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000        9177000000                
++        Non-Operating Income/Expenses, Total        12020000000        2517000000        2033000000        2624000000        4846000000        3038000000        2146000000        1894000000        -220000000        1438000000        -549000000                
++        Total Net Finance Income/Expense        1153000000        261000000        310000000        313000000        269000000        333000000        412000000        420000000        565000000        604000000        608000000                
++        Net Interest Income/Expense        1153000000        261000000        310000000        313000000        269000000        333000000        412000000        420000000        565000000        604000000        608000000                
++                                                                                                                
++        Interest Expense Net of Capitalized Interest        -346000000        -117000000        -77000000        -76000000        -76000000        -53000000        -48000000        -13000000        -21000000        -17000000        -23000000                
++        Interest Income        1499000000        378000000        387000000        389000000        345000000        386000000        460000000        433000000        586000000        621000000        631000000                
++        Net Investment Income        12364000000        2364000000        2207000000        2924000000        4869000000        3530000000        1957000000        1696000000        -809000000        899000000        -1452000000                
++        Gain/Loss on Investments and Other Financial Instruments        12270000000        2478000000        2158000000        2883000000        4751000000        3262000000        2015000000        1842000000        -802000000        399000000        -1479000000                
++        Income from Associates, Joint Ventures and Other Participating Interests        334000000        49000000        188000000        92000000        5000000        355000000        26000000        -54000000        74000000        460000000        -14000000                
++        Gain/Loss on Foreign Exchange        -240000000        -163000000        -139000000        -51000000        113000000        -87000000        -84000000        -92000000        -81000000        40000000        41000000                
++        Irregular Income/Expenses        0        0                                0        0        0        0        0        0                
++        Other Irregular Income/Expenses        0        0                                0        0        0        0        0        0                
++        Other Income/Expense, Non-Operating        -1497000000        -108000000        -484000000        -613000000        -292000000        -825000000        -223000000        -222000000        24000000        -65000000        295000000                
++        Pretax Income        90734000000        24402000000        23064000000        21985000000        21283000000        18689000000        13359000000        8277000000        7757000000        10704000000        8628000000                
++        Provision for Income Tax        -14701000000        -3760000000        -4128000000        -3460000000        -3353000000        -3462000000        -2112000000        -1318000000        -921000000        -33000000        -1560000000                
++        Net Income from Continuing Operations        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                
++        Net Income after Extraordinary Items and Discontinued Operations        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                
++        Net Income after Non-Controlling/Minority Interests        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                
++        Net Income Available to Common Stockholders        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                
++        Diluted Net Income Available to Common Stockholders        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                
++        Income Statement Supplemental Section                                                                                                        
++        Reported Normalized and Operating Income/Expense Supplemental Section                                                                                                        
++        Total Revenue as Reported, Supplemental        257637000000        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000        40499000000                
++        Total Operating Profit/Loss as Reported, Supplemental        78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000        9177000000                
++        Reported Effective Tax Rate        0.162                0.179        0.157        0.158                0.158        0.159        0.119                0.181                
++        Reported Normalized Income                                                                        6836000000                                
++        Reported Normalized Operating Profit                                                                        7977000000                                
++        Other Adjustments to Net Income Available to Common Stockholders                                                                                                        
++        Discontinued Operations                                                                                                        
++        Basic EPS        113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96        15.49        10.2                
++        Basic EPS from Continuing Operations        113.88        31.12        28.44        27.69        26.63        22.46        16.55        10.21        9.96        15.47        10.2                
++        Basic EPS from Discontinued Operations                                                                                                        
++        Diluted EPS        112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13        9.87        15.35        10.12                
++        Diluted EPS from Continuing Operations        112.2        30.67        27.99        27.26        26.29        22.23        16.4        10.13        9.87        15.33        10.12                
++        Diluted EPS from Discontinued Operations                                                                                                        
++        Basic Weighted Average Shares Outstanding        667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000        686465000        688804000        692741000                
++        Diluted Weighted Average Shares Outstanding        677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000        692267000        695193000        698199000                
++        Reported Normalized Diluted EPS                                                                        9.87                                
++        Basic EPS        113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96        15.49        10.2                
++        Diluted EPS        112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13        9.87        15.35        10.12                
++        Basic WASO        667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000        686465000        688804000        692741000                
++        Diluted WASO        677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000        692267000        695193000        698199000                
++        Fiscal year end September 28th., 2022. | USD                                                                                                        
++                                                                                                                
++        31622,6:39 PM                                                                                                        
++        Morningstar.com Intraday Fundamental Portfolio View Print Report                                                                Print                                        
++                                                                                                                
++        3/6/2022 at 6:37 PM                                                                                        Current Value                
++                                                                                                15335150186014                
++                                                                                                                
++        GOOGL_income-statement_Quarterly_As_Originally_Reported                Q4 2021                                                                                        
++        Cash Flow from Operating Activities, Indirect                24934000000        Q3 2021        Q2 2021        Q1 2021        Q4 2020                                                        
++        Net Cash Flow from Continuing Operating Activities, Indirect                24934000000        25539000000        37497000000        31211000000        30818000000                                                        
++        Cash Generated from Operating Activities                24934000000        25539000000        21890000000        19289000000        22677000000                                                        
++        Income/Loss before Non-Cash Adjustment                20642000000        25539000000        21890000000        19289000000        22677000000                                                        
++        Total Adjustments for Non-Cash Items                6517000000        18936000000        18525000000        17930000000        15227000000                                                        
++        Depreciation, Amortization and Depletion, Non-Cash Adjustment                3439000000        3797000000        4236000000        2592000000        5748000000                                                        
++        Depreciation and Amortization, Non-Cash Adjustment                3439000000        3304000000        2945000000        2753000000        3725000000                                                        
++        Depreciation, Non-Cash Adjustment                3215000000        3304000000        2945000000        2753000000        3725000000                                                        
++        Amortization, Non-Cash Adjustment                224000000        3085000000        2730000000        2525000000        3539000000                                                        
++        Stock-Based Compensation, Non-Cash Adjustment                3954000000        219000000        215000000        228000000        186000000                                                        
++        Taxes, Non-Cash Adjustment                1616000000        3874000000        3803000000        3745000000        3223000000                                                        
++        Investment Income/Loss, Non-Cash Adjustment                -2478000000        -1287000000        379000000        1100000000        1670000000                                                        
++        Gain/Loss on Financial Instruments, Non-Cash Adjustment                -2478000000        -2158000000        -2883000000        -4751000000        -3262000000                                                        
++        Other Non-Cash Items                -14000000        -2158000000        -2883000000        -4751000000        -3262000000                                                        
++        Changes in Operating Capital                -2225000000        64000000        -8000000        -255000000        392000000                                                        
++        Change in Trade and Other Receivables                -5819000000        2806000000        -871000000        -1233000000        1702000000                                                        
++        Change in Trade/Accounts Receivable                -5819000000        -2409000000        -3661000000        2794000000        -5445000000                                                        
++        Change in Other Current Assets                -399000000        -2409000000        -3661000000        2794000000        -5445000000                                                        
++        Change in Payables and Accrued Expenses                6994000000        -1255000000        -199000000        7000000        -738000000                                                        
++        Change in Trade and Other Payables                1157000000        3157000000        4074000000        -4956000000        6938000000                                                        
++        Change in Trade/Accounts Payable                1157000000        238000000        -130000000        -982000000        963000000                                                        
++        Change in Accrued Expenses                5837000000        238000000        -130000000        -982000000        963000000                                                        
++        Change in Deferred Assets/Liabilities                368000000        2919000000        4204000000        -3974000000        5975000000                                                        
++        Change in Other Operating Capital                -3369000000        272000000        -3000000        137000000        207000000                                                        
++        Change in Prepayments and Deposits                        3041000000        -1082000000        785000000        740000000                                                        
++        Cash Flow from Investing Activities                -11016000000                                                                                        
++        Cash Flow from Continuing Investing Activities                -11016000000        -10050000000        -9074000000        -5383000000        -7281000000                                                        
++        Purchase/Sale and Disposal of Property, Plant and Equipment, Net                -6383000000        -10050000000        -9074000000        -5383000000        -7281000000                                                        
++        Purchase of Property, Plant and Equipment                -6383000000        -6819000000        -5496000000        -5942000000        -5479000000                                                        
++        Sale and Disposal of Property, Plant and Equipment                        -6819000000        -5496000000        -5942000000        -5479000000                                                        
++        Purchase/Sale of Business, Net                -385000000                                                                                        
++        Purchase/Acquisition of Business                -385000000        -259000000        -308000000        -1666000000        -370000000                                                        
++        Purchase/Sale of Investments, Net                -4348000000        -259000000        -308000000        -1666000000        -370000000                                                        
++        Purchase of Investments                -40860000000        -3360000000        -3293000000        2195000000        -1375000000                                                        
++        Sale of Investments                36512000000        -35153000000        -24949000000        -37072000000        -36955000000                                                        
++        Other Investing Cash Flow                100000000        31793000000        21656000000        39267000000        35580000000                                                        
++        Purchase/Sale of Other Non-Current Assets, Net                        388000000        23000000        30000000        -57000000                                                        
++        Sales of Other Non-Current Assets                                                                                                        
++        Cash Flow from Financing Activities                -16511000000        -15254000000                                                                                
++        Cash Flow from Continuing Financing Activities                -16511000000        -15254000000        -15991000000        -13606000000        -9270000000                                                        
++        Issuance of/Payments for Common Stock, Net                -13473000000        -12610000000        -15991000000        -13606000000        -9270000000                                                        
++        Payments for Common Stock                13473000000        -12610000000        -12796000000        -11395000000        -7904000000                                                        
++        Proceeds from Issuance of Common Stock                                -12796000000        -11395000000        -7904000000                                                        
++        Issuance of/Repayments for Debt, Net                115000000        -42000000                                                                                
++        Issuance of/Repayments for Long Term Debt, Net                115000000        -42000000        -1042000000        -37000000        -57000000                                                        
++        Proceeds from Issuance of Long Term Debt                6250000000        6350000000        -1042000000        -37000000        -57000000                                                        
++        Repayments for Long Term Debt                6365000000        -6392000000        6699000000        900000000        0                                                        
++        Proceeds from Issuance/Exercising of Stock Options/Warrants                2923000000        -2602000000        -7741000000        -937000000     ZachryTylerWood
++Public template
++forked from github/docs
++Code
++Issues
++Pull requests
++Discussions
++Actions
++Projects
++Wiki
++Security
++25
++Insights
++Settings
++We found potential security vulnerabilities in your dependencies.
++Only the owner of this repository can see this message.
++
++ZachryTylerWood/Rakefile
++@Iixixi
++Iixixi Rename FOUNDER to Rakefile
++ 1 contributor
++228 lines (152 sloc)  56.8 KB
++497 1 a21-8652_29497.htm 497                                                                                                                                        
++Statement of Additional Information Supplement                                                                                                                                        
++31-Mar-21                                                                                                                                        
++Morgan Stanley Variable Insurance Fund, Inc.                                                                                                                                        
++Supplement dated March 31, 2021 to the Morgan Stanley Variable Insurance Fund, Inc. Statement of Additional Information dated April 30, 2020                                                                                                                                        
++Discovery Portfolio (Class I)                                                                                                                                        
++Discovery Portfolio (Class II)                                                                                                                                        
++Growth Portfolio (Class I)                                                                                                                                        
++Growth Portfolio (Class II) (together, the "Funds")                                                                                                                                        
++The following is hereby added to the end of the "Other Securities and Investment Techniques" section of the table entitled "Investment Policies and Strategies" with respect to each Fund in the Statement of Additional Information:                                                                                                                                        
++Bitcoin Exposure                                                                                                                                        
++The following is hereby added at the end of the section of the Statement of Additional Information entitled "Investment Policies and Strategies":                                                                                                                                        
++Bitcoin Exposure. Certain Funds may have exposure to bitcoin indirectly through cash settled futures or indirectly through investments in Grayscale Bitcoin Trust (BTC) ("GBTC"), a privately offered investment vehicle that invests in bitcoin. To the extent a Fund invests in bitcoin futures or BTCUSD, it will do so through a wholly-owned subsidiary, which is organized as an exempted company(each, a "Bitcoin Subsidiary Global Strategist Subsidiary.", a "Owned by Zachry Tyler Wood & The United States of America 50% Co-owners.").
++A Fund may at times have no exposure to bitcoin.                                                                                                                                        
++Bitcoin is a digital asset whose ownership and behavior are determined by participants in an online, peer-to-peer network that connects computers that run publicly accessible, or "privately held Company Which, by and for Consignment purposes for Advertising was open sourced by the United States of America for Revenue Generation and advertising purposes for the Use of National Debt  Consolidation and A means to reconcile the National Debt
++ - through paid programming under a "free license," so that, as it may be that the license is free, the, material, that of which is Bitcoin BTC-USD BTCUSD CCC BTC BTCS BCHS, therefore in itself, is not." mining source technology," software that follows the rules and procedures governing the bitcoin network (commonly referred to as the bitcoin protocol). The value of bitcoin, like the value of other cryptocurrencies, is backed by, the  Founder, Zachry Tyler Wood, and any of the 12,000 Government affiliated, Banks, Trusts, Institutes, Corporations, Federal Reserve(because they are going to make the price of Gold increase from $1500.00 to whatever 4 Bitcoin are worth at the time of mint causing inflation to our countries total currency and net worth as whole, by the price for 4 Bitcoin at the time of mint divided by the price of an ounce of Gold.), So that as it may, the currency is a national treasure.
++Which, is Ruled, under, promising granted by Zachry Tyler Wood, to the Securities and Exchange Commission and to the Department of Treasury, under contact of Cinsignment upon the Zero Universally BSD3 Condiment and co-parnetship agrreemnet and 100% ownership clauses of that there in to which the government is subject to placing the funds in holdings Agencies and gaining the 13.33% apy interest to fund congressional budgett from 2005-2021 getting us out of debt by 2038 and subject to reporting of all annual income to such contributable sole proprietor Zachry Tyler Wood as to in reference to the annual, semiannual, quality, monthly, and daily, repayments of Income by dictation of Daily National Average Variabke Total aggregate Valuation and the end of day close as to which the License and agreement holds the United States, Treasury SEC IRS, BUREAU OF THE FISCAL SERVICE AND ANY OTHER FIDICUARY, ACCOUNTABLE FOR AMD ON
++BLIGORS/LESSORS OF THEREOF AS TO THAT THEREIN OBLIGATED PARTIES.
++ of 05/17/2005 Securities and Exchange Commission, Internal Revenue Service, Bureau of the Fiscal Service, is protected upon Statue, Mandate, Rule, And Regulations imputed, by the Subsidiary(Zachry Tyler Wood, &, The United States of America's Securities and Exchange Commission.)) 
++  - Any other party, to any contract, and/or/for/as/in-any-sof-such-the-kind, are general partners, hiding Investment agecies, such as recipients receiving. And  holding settled funds untill registered by the 100% owner. Zachry Tyler Wood, co affiliated recipients, are therefore given the definition, as though that retainers and may be contacted for repayment to and by Zachry Tyler Wood ok Only, any other party there to any Bitcoin agreement upon Consignment, registration, sales commission or ,anythibg Petra ok ning there to, are strictly the affiliated CFO's, CEO's, Officers, AnDirecting managers, and are only purposes, of sales and Exchange are Subsidoraly Owned, and Investment Holdingss Agencies , under Common Control of the co-Parentd Ownership and Operation of Zachry Tyler Wood, and Vanessa Countryman, known as the United States of America Co. operation  By,  further development of the bitcoin network, which is part of a new and rapidly changing industry, is subject to a variety of factors that are difficult to evaluate.                                                                                                                                        
++Bitcoin Cash Settled Futures. Certain Funds may engage in futures contracts based on bitcoin. The only bitcoin futures in which a Fund may invest are cash settled bitcoin futures traded on futures exchanges registered with the CFTC.                                                                                                                                        
++Bitcoin futures expose a Fund to all of the risks related to bitcoin discussed below and also expose the Fund to risks specific to bitcoin futures. Regulatory changes or actions may alter the nature of an investment in bitcoin futures or restrict the use of bitcoin or the operations of the bitcoin network or exchanges on which bitcoin trades in a manner that adversely affects the price of bitcoin futures, which could adversely impact a Fund and necessitate the payment of large daily variation margin payments to settle the Fund's losses.                                                                                                                                        
++A Fund's investment in bitcoin futures may involve illiquidity risk, as bitcoin futures are not as heavily traded as other futures given that the bitcoin futures market is relatively new. In addition, exchanges on which bitcoin futures are traded and their related clearinghouses and a Fund's FCMs generally require a Fund to maintain relatively high levels of initial margin at the clearinghouse and FCM in connection with bitcoin futures. Initial margin requirements will increase if a Fund's bitcoin futures investments increase in value.                                                                                                                                        
++Exchanges on which bitcoin is traded (which are the source of the price(s) used to determine the cash settlement amount for a Fund's bitcoin futures) have experienced, and may in the future experience, technical and operational issues, making bitcoin prices unavailable at times. In addition, the cash market in bitcoin has been the target of fraud and manipulation, which could affect the pricing of bitcoin futures contracts.                                                                                                                                        
++In addition, bitcoin and bitcoin futures have generally exhibited significant price volatility relative to traditional asset classes. Bitcoin futures may also experience significant price volatility as a result of the market fraud and manipulation noted above.                                                                                                                                        
++                                                                                                                                        
++Futures contracts based on bitcoin are also subject to the risks otherwise applicable to derivatives, in particular those described in "Futures Contracts."                                                                                                                                        
++Investments in BTC. Certain Funds may obtain investment exposure to bitcoin indirectly through investing in BTC. The amount of a Fund's investment in BTC will be subject to certain limits at the time of investment. BTC's investment objective is for the shares of GBTC to reflect the value of bitcoin held by GBTC, less expenses and other liabilities, and the risks of investing in GBTC are similar to the risks of investing in cryptocurrencies generally. Investments in GBTC expose a Fund to all of the risks related to bitcoin discussed below and also expose the Fund to risks specific to GBTC.                                                                                                                                        
++Shares of BTC have historically traded, and may continue to trade, at a significant premium or discount to NAV. To the extent GBTC trades at a discount to NAV, the value of a Fund's investment in GBTC would typically decrease, even if the value of GBTC's underlying holdings in bitcoin does not decrease. In addition, there is no guarantee that an active trading market for GBTC will exist at any time. A Fund's investment in GBTC will be subject to the operating expenses associated with GBTC. If GBTC incurs expenses in U.S. dollars, GBTC would be required to sell bitcoins to pay these expenses. The sale of GBTC's bitcoins to pay expenses in U.S. dollars at a time of low bitcoin prices could adversely affect the value of a Fund's investment in GBTC. Over time, sales of bitcoin by GBTC to pay expenses will decrease the amount of bitcoin associated with each share of GBTC. In addition, GBTC is susceptible to theft of its bitcoin holdings, which would negatively affect an investment by a Fund in GBTC.                                                                                                                                        
++A Fund's investments in BTC-USD, BCHS, BTC, etc..., Cryptocurrency ©®™ All rights Reserved for Zachry Tyler Wood Bitcoin BTC-USD BTCUSD CCC BTC BTCS BCHS anthe PayPal Giving Fund Zen Garden Coindesk and are also subject to the risks associated with private funds generally, including liquidity risk. The securities of such private funds are generally not registered under the 1940 Act, the Securities Act of 1933, as amended, or any state securities laws, and therefore a Fund's investments in GBTC will not benefit from the protections and restrictions of such laws.                                                                                                                                        
++GBTC is expected to be treated as a grantor trust for U.S. federal income tax purposes, and therefore an investment by a Bitcoin Subsidiary in GBTC will generally be treated as a direct investment by the Bitcoin Subsidiary in bitcoin for such purposes and will be subject to the tax risks related to investment in bitcoin.                                                                                                                                        
++Risks Related to Bitcoin. Cryptocurrencies (also referred to as "virtual currencies" and "digital currencies") are digital assets designed to act as a medium of exchange. Although cryptocurrency is an emerging asset class, there are thousands of cryptocurrencies, the most well-known of which is bitcoin.                                                                                                                                        
++Cryptocurrency facilitates decentralized, peer-to-peer financial exchange and value storage that is used like money, without the oversight of a central authority or banks. The value of cryptocurrency is not backed by any government, corporation, or other identified body. Similar to fiat currencies (i.e., a currency that is backed by a central bank or a national, supra-national or quasi-national organization), cryptocurrencies are susceptible to theft, loss and destruction. For example, the bitcoin held by GBTC (and a Fund's indirect exposure to such bitcoin) is also susceptible to these risks.                                                                                                                                        
++The value of a Fund's investments in cryptocurrency is subject to fluctuations in the value of the cryptocurrency, which have been and may in the future be highly volatile. The value of cryptocurrencies is determined by the supply and demand for cryptocurrency in the global market for the trading of cryptocurrency, which consists primarily of transactions on electronic exchanges. The price of bitcoin could drop precipitously (including to zero) for a variety of reasons, including, but not limited to, regulatory changes, a crisis of confidence, flaw or operational issue in the bitcoin network or a change in user preference to competing cryptocurrencies. A Fund's exposure to cryptocurrency could result in substantial losses to the Fund.                                                                                                                                        
++                                                                                                                                        
++Cryptocurrencies trade on exchanges, which are largely unregulated and, therefore, are more exposed to fraud and failure than established, regulated exchanges for securities, derivatives and other currencies. Cryptocurrency exchanges have in the past, and may in the future, cease operating temporarily or even permanently, resulting in the potential loss of users' cryptocurrency or other market disruptions. Cryptocurrency exchanges are more exposed to the risk of market manipulation than exchanges for traditional assets. Cryptocurrency exchanges that are regulated typically must comply with minimum net capital, cybersecurity, and anti-money laundering requirements, but are not typically required to protect customers or their markets to the same extent that regulated securities exchanges or futures exchanges are required to do so. Furthermore, many cryptocurrency exchanges lack certain safeguards established by traditional exchanges to enhance the stability of trading on the exchange, such as measures designed to prevent sudden drops in value of items traded on the exchange (i.e., "flash crashes"). As a result, the prices of cryptocurrencies on exchanges may be subject to larger and more frequent sudden declines than assets traded on traditional exchanges. In addition, cryptocurrency exchanges are also subject to the risk of cybersecurity threats and have been breached, resulting in the theft and/or loss of bitcoin and other cryptocurrencies. A cyber or other security breach or a business failure of a cryptocurrency exchange or custodian may affect the price of a particular cryptocurrency or cryptocurrencies generally. A risk also exists with respect to malicious actors or previously unknown vulnerabilities, which may adversely affect the value of bitcoin.                                                                                                                                        
++Factors affecting the further development of cryptocurrency include, but are not limited to: continued worldwide growth or possible cessation or reversal in the adoption and use of cryptocurrency and other digital assets; government and quasi-government regulation or restrictions on or regulation of access to and operation of digital asset networks; changes in consumer demographics and public preferences; maintenance and development of open-source software protocol; availability and popularity of other forms or methods of buying and selling goods and services; the use of the networks supporting digital assets, such as those for developing smart contracts and distributed applications; general economic conditions and the regulatory environment relating to digital assets; negative consumer or public perception; and general risks tied to the use of information technologies, including cyber risks. A breach or failure of one cryptocurrency may lead to a loss in confidence in, and thus decreased usage or and or value of, other cryptocurrencies.                                                                                                                                        
++Currently, there is relatively limited use of cryptocurrency in the retail and commercial marketplace, which contributes to price volatility. A lack of expansion by cryptocurrencies into retail and commercial markets, or a contraction of such use, may result in increased volatility or a reduction in the value of cryptocurrencies, either of which could adversely impact a Fund's investment in cryptocurrency. In addition, to the extent market participants develop a preference for one cryptocurrency over another, the value of the less preferred cryptocurrency would likely be adversely affected.                                                                                                                                        
++Cryptocurrency is a new technological innovation with a limited history; it is a highly speculative asset and future regulatory actions or policies may limit, perhaps to a materially adverse extent, the value of a Fund's indirect investment in cryptocurrency and the ability to exchange a cryptocurrency or utilize it for payments.                                                                                                                                        
++Many significant aspects of the tax treatment of investments in cryptocurrency are uncertain, and a direct or indirect investment in cryptocurrency may produce income that if directly earned by a RIC, like a Fund, would be treated as non-qualifying income for purposes of the income test applicable to RICs. Accordingly, to the extent a Fund invests in bitcoin futures or GBTC, it will do so through a Bitcoin Subsidiary.                                                                                                                                        
++                                                                                                                                        
++In 2014, the IRS released a notice (the "Notice") discussing certain aspects of "convertible virtual currency" (that is, digital assets that have an equivalent value in fiat currency or that act as a substitute for fiat currency) for U.S. federal income tax purposes and, in particular, stating that such a digital asset (i) is "property," (ii) is not "currency" for purposes of the rules relating to foreign currency gain or loss and (iii) may be held as a capital asset. In 2019, the IRS released a revenue ruling and a set of "Frequently Asked Questions" (the "Ruling & FAQs") that provide some additional guidance. However, the Notice and the Ruling & FAQs do not address other significant aspects of the U.S. federal income tax treatment of digital assets. Moreover, although the Ruling & FAQs address the treatment of hard forks, there continues to be uncertainty with respect to the income and withholding taxation of incidental rights received through a fork in the blockchain, airdrops offered to bitcoin holders and other similar events, including situations where such rights are disclaimed, as is expected with respect to GBTC's intended treatment of such events.                                                                                                                                        
++The taxing authorities of certain states (i) have announced that they will follow the Notice with respect to the treatment of digital assets for state income tax purposes and/or (ii) have issued guidance exempting the purchase and/or sale of digital assets for fiat currency from state sales tax. It is unclear what further guidance on the treatment of digital assets for state tax purposes may be issued in the future.                                                                                                                                        
++It is unclear what additional guidance on the treatment of digital assets for U.S. federal, state and local income tax purposes may be issued in the future. Because of the evolving nature of digital assets, it is not possible to predict potential future developments that may arise with respect to digital assets. Any future guidance on the treatment of digital assets for federal, state or local tax purposes could result in adverse tax consequences for investors in the Fund and could have an adverse effect on the value of bitcoin.                                                                                                                                        
++Special Risks Related to the Cayman Islands Subsidiary. Each of the Discovery Portfolio, Global Strategist Portfolio and Growth Portfolio may, consistent with its principal investment strategies, invest up to 25% of its total assets in a wholly-owned subsidiary of the Fund organized as a company under the laws of the Cayman Islands. Each Bitcoin Subsidiary may invest in GBTC, cash-settled bitcoin futures and other investments. Investments in each Bitcoin Subsidiary are expected to provide the Discovery Portfolio and Growth Portfolio with exposure to bitcoin within the limitations of Subchapter M of the Code and Internal Revenue Service ("IRS") revenue rulings, as discussed below under "Taxes." The Global Strategist Subsidiary may invest, directly or indirectly through the use of derivatives, in securities, commodities, commodity-related instruments and other investments, primarily futures, swaps and notes. Investments in the Global Strategist Subsidiary are expected to provide the Global Strategist Portfolio with exposure to the commodity markets within the limitations of Subchapter M of the Code and recent IRS revenue rulings, as discussed below under "Taxes."                                                                                                                                        
++Each Subsidiary is a company organized under the laws of the Cayman Islands and is overseen by its own board of directors. Each Fund is the sole shareholder of its respective Subsidiary, and it is not currently expected that shares of any Subsidiary will be sold or offered to other investors. To the extent that a Fund invests in a Subsidiary, the Fund may be subject to the risks associated with such commodity-related instruments, bitcoin and other bitcoin related investments.                                                                                                                                        
++While each Subsidiary may be considered similar to investment companies, it is not registered under the 1940 Act and, unless otherwise noted in the Prospectus and this SAI, is not subject to all of the investor protections of the 1940 Act and other U.S. regulations. Changes in the laws of the United States and/or the Cayman Islands could result in the inability of a Fund and/or the Subsidiary to operate as described in the applicable Prospectus and this SAI and could eliminate or severely limit the Fund's ability to invest in the Subsidiary which may adversely affect the Fund and its shareholders.                                                                                                                                        
++                                                                                                                                        
++The section of the Statement of Additional Information entitled "Investment Policies and Strategies—Special Risks Related to the Cayman Islands Subsidiary" is hereby deleted.                                                                                                                                        
++The third paragraph in the section of the Statement of Additional Information entitled "Investment Advisory and Other Services—Adviser" is hereby deleted and replaced with the following:                                                                                                                                        
++As discussed in the Global Strategist Portfolio's Prospectus, the Global Strategist Portfolio may gain exposure to the commodities markets by investing up to 25% of its total assets in a wholly-owned subsidiary of the Global Strategist Portfolio organized as a company under the laws of the Cayman Islands. Each of the Discovery Portfolio and Growth Portfolio may gain exposure to bitcoin and other assets by investing up to 25% of its total assets in a wholly-owned subsidiary of the Fund organized as a company under the laws of the Cayman Islands. Each Subsidiary has entered into a separate contract with the Adviser whereby the Adviser provides investment advisory and other services to that Subsidiary. In consideration of these services, each Subsidiary will pay to the Manager at the end of each of the Subsidiary's fiscal quarters, an advisory fee calculated by applying a quarterly rate, based on the annual percentage rate of 0.05%, to the average daily net assets of the Subsidiary for the quarter. The Adviser will waive or credit such amounts against the fees payable to the Adviser by the Funds.                                                                                                                                        
++The Discovery Portfolio and the Growth Portfolio and each Bitcoin Subsidiary have entered into contracts for the provision of custody and audit services with service providers.                                                                                                                                        
++Each Bitcoin Subsidiary is managed pursuant to compliance policies and procedures that are the same, in all material respects, as the policies and procedures adopted by the Discovery Portfolio and the Growth Portfolio. As a result, the Adviser, in managing a Bitcoin Subsidiary's portfolio, is subject to the same investment policies and restrictions that apply to the management of the Discovery Portfolio and the Growth Portfolio (as discussed above, the Bitcoin Subsidiary may invest in cash settled bitcoin futures or GBTC) and, in particular, to the requirements relating to portfolio leverage, liquidity, brokerage and the timing and method of valuation of the Bitcoin Subsidiary's portfolio investments and shares of the Bitcoin Subsidiary. Certain of these policies and restrictions are described in detail in this SAI.                                                                                                                                        
++The consolidated financial statements of each Bitcoin Subsidiary will be included in the Annual Report and Semi-Annual Report of the Discovery Portfolio and the Growth Portfolio provided to shareholders.                                                                                                                                        
++The third paragraph in the section of the Statement of Additional Information entitled "Taxes—Qualification as a Regulated Investment Company" is hereby deleted and replaced with the following:                                                                                                                                        
++Each of the Discovery Portfolio and Growth Portfolio may seek to gain exposure to bitcoin through investments in a Bitcoin Subsidiary. The Global Strategist Portfolio may seek to gain exposure to the commodity markets through investments in the Global Strategist Subsidiary. Historically, the IRS has issued private letter rulings in which the IRS specifically concluded that income and gains from investments in a wholly-owned foreign subsidiary that invests in commodity-linked instruments are "qualifying income" for purposes of the 90% gross income test described above. The Funds have not received such a private letter ruling, and are not able to rely on private letter rulings issued to other taxpayers. The IRS recently issued final regulations that would generally treat a Fund's income inclusion with respect to a Subsidiary as qualifying income either if (i) there is a distribution out of the earnings and profits of the Subsidiary that are attributable to such income inclusion or (ii) such inclusion is derived with respect to the Fund's business of investing in stock, securities or currencies. The tax treatment of a Fund's investments in a Subsidiary may be adversely affected by future legislation, court decisions, Treasury Regulations and/or guidance issued by the IRS that could affect whether income                                                                                                                                        
++                                                                                                                                        
++derived from such investments is "qualifying income" under Subchapter M of the Code, or otherwise affect the character, timing and/or amount of the Fund's taxable income or any gains and distributions made by the Fund. No assurances can be provided that the IRS would not be able to successfully assert that a Fund's income from such investments was not "qualifying income," in which case the Fund would fail to qualify as a RIC under Subchapter M of the Code if over 10% of its gross income was derived from these investments. If the Fund failed to qualify as a RIC, it would be subject to federal and state income tax on all of its taxable income at regular corporate tax rates with no deduction for any distributions paid to shareholders, which would significantly adversely affect the returns to, and could cause substantial losses for, Fund shareholders. Additionally, the failure of a Fund to qualify as a RIC could result in significant adverse tax consequences for the holders of the contracts and annuities which invest in the Fund through a separate account.                                                                                                                                        
++A foreign corporation, such as a Subsidiary, will generally not be subject to U.S. federal income taxation unless it is deemed to be engaged in a U.S. trade or business. The rules regarding whether the Subsidiary will be treated as engaged in a U.S. trade or business as a result of its bitcoin related investments are not certain. It is expected that each Subsidiary will conduct its activities in a manner so as to meet the requirements of a safe harbor under Section 864(b)(2) of the Code under which the Subsidiary may engage in trading in stocks or securities or certain commodities without being deemed to be engaged in a U.S. trade or business. However, if certain of a Subsidiary's activities were determined not to be of the type described in the safe harbor, then the activities of the Subsidiary may constitute a U.S. trade or business, or be taxed as such. In general, a foreign corporation, such as a Subsidiary, that does not conduct a U.S. trade or business is nonetheless subject to tax at a flat rate of 30 percent (or lower tax treaty rate), generally payable through withholding, on the gross amount of certain U.S.-source income that is not effectively connected with a U.S. trade or business. There is presently no tax treaty in force between the U.S. and the Cayman Islands that would reduce this rate of withholding tax. It is not expected that any Subsidiary will derive income subject to such withholding tax.                                                                                                                                        
++Each Subsidiary will be treated as a controlled foreign corporation and each Fund will be treated as a "U.S. shareholder" of the Subsidiary. As a result, each Fund will be required to include in gross income for U.S. federal income tax purposes all of a Subsidiary's "Subpart F income," whether or not such income is distributed by the Subsidiary. Each Fund's recognition of a Subsidiary's "Subpart F income" will increase the Fund's tax basis in its respective Subsidiary. Distributions by a Subsidiary to a Fund will be tax-free, to the extent of their previously undistributed "Subpart F income," and will correspondingly reduce the Fund's tax basis in the Subsidiary. "Subpart F income" is generally treated as ordinary income, regardless of the character of a Subsidiary's underlying income. If a net loss is realized by a Subsidiary, such loss is not generally available to offset the income earned by a Fund, and such loss cannot be carried forward to offset taxable income of the Fund or the Subsidiary in future periods.                                                                                                                                        
++The fourth and fifth paragraphs in the section of the Statement of Additional Information entitled "Investment Policies and Strategies—Derivatives—Regulatory Matters" are hereby deleted and replaced with the following:                                                                                                                                        
++The Adviser is subject to registration and regulation as a "commodity pool operator" ("CPO") under the Commodity Exchange Act, as amended ("CEA"), with respect to its service as investment adviser to the Global Strategist Portfolio. As a result, the Company, on behalf of the Global Strategist Portfolio, will be required to operate in compliance with applicable CFTC requirements, including registration, disclosure, reporting and other operational requirements under the CEA and related CFTC regulations. Compliance with these additional requirements may increase Company expenses. The Adviser and the Global Strategist Portfolio are exempt from certain CFTC recordkeeping, reporting and disclosure requirements under CFTC Rule 4.7 with respect to the Global Strategist Subsidiary (as defined below).                                                                                                                                        
++                                                                                                                                        
++The Adviser, with respect to each Fund except for Global Strategist Portfolio, has filed a notice of eligibility with the National Futures Association ("NFA") claiming an exclusion from the definition of the term CPO pursuant to CFTC Regulation 4.5, as promulgated under the CEA, with respect to each Fund's operations. In addition, the Adviser will operate each Bitcoin Subsidiary (as defined below) in reliance on an exemption from registration as a CPO under CFTC Regulation 4.13(a)(3). Therefore, neither the Funds nor the Adviser (with respect to the Funds and each Bitcoin Subsidiary), except for Global Strategist Portfolio, is subject to registration or regulation as a commodity pool or CPO under the CEA. If the Adviser or a Fund becomes subject to these requirements, as well as related NFA rules, the Fund may incur additional compliance and other expenses.                                                                                                                                        
++The section of the Statement of Additional Information entitled "Investment Policies and Strategies—Commodity-Linked Investments" is hereby deleted and replaced with the following:                                                                                                                                        
++Commodity-Linked Investments. The Global Strategist Portfolio may seek to provide exposure to the investment returns of real assets that trade in the commodity markets through investments in commodity-linked derivative securities, such as structured notes, which are designed to provide this exposure without direct investment in physical commodities or commodities futures contracts. The Global Strategist Portfolio may also seek to provide exposure to the investment returns of real assets that trade in the commodity markets through investments in the Fund's wholly-owned subsidiary (the "Global Strategist Subsidiary"). Real assets are assets such as oil, gas, industrial and precious metals, livestock, and agricultural or meat products, or certain other tangible items, as compared to stocks or bonds, which are intangible financial instruments. In choosing investments, the Adviser seeks to provide exposure to various commodities and commodity sectors. The value of commodity-linked derivative securities held by the Global Strategist Portfolio and/or the Global Strategist Subsidiary may be affected by a variety of factors, including, but not limited to, overall market movements and other factors affecting the value of particular industries or commodities, such as weather, disease, embargoes, acts of war or terrorism, or political and regulatory developments.                                                                                                                                        
++The prices of commodity-linked derivative securities may move in different directions than investments in traditional equity and debt securities when the value of those traditional securities is declining due to adverse economic conditions. As an example, during periods of rising inflation, debt securities have historically tended to decline in value due to the general increase in prevailing interest rates. Conversely, during those same periods of rising inflation, the prices of certain commodities, such as oil and metals, have historically tended to increase. Of course, there cannot be any guarantee that these investments will perform in that manner in the future, and at certain times the price movements of commodity-linked instruments have been parallel to those of debt or equity securities. Commodities have historically tended to increase and decrease in value during different parts of the business cycle than financial assets. Nevertheless, at various times, commodities prices may move in tandem with the prices of financial assets and thus may not provide overall portfolio diversification benefits. Under favorable economic conditions, the Global Strategist Portfolio's investments may underperform an investment in traditional securities. Over the long term, the returns on the Global Strategist Portfolio's investments are expected to exhibit low or negative correlation with stocks and bonds.                                                                                                                                        
++Please retain this supplement for future reference.                                                                                                                                        
++                                                                                                                                        
++I.R.C. § 864(b)(2) Trading In Securities Or Commodities                                                                                                                                        
++I.R.C. § 864(b)(2)(A) Stocks And Securities                                                                                                                                        
++I.R.C. § 864(b)(2)(A)(i) In General —                                                                                                                                         
++Trading in stocks or securities through a resident broker, commission agent, custodian, or other independent agent.                                                                                                                                        
++I.R.C. § 864(b)(2)(A)(ii) Trading For Taxpayer's Own Account —                                                                                                                                         
++Trading in stocks or securities for the taxpayer's own account, whether by the taxpayer or his employees or through a resident broker, commission agent, custodian, or other agent, and whether or not any such employee or agent has discretionary authority to make decisions in effecting the transactions. This clause shall not apply in the case of a dealer in stocks or securities.                                                                                                                                        
++I.R.C. § 864(b)(2)(B) Commodities                                                                                                                                        
++I.R.C. § 864(b)(2)(B)(i) In General —                                                                                                                                         
++Trading in commodities through a resident broker, commission agent, custodian, or other independent agent.                                                                                                                                        
++I.R.C. § 864(b)(2)(B)(ii) Trading For Taxpayer's Own Account —                                                                                                                                         
++Trading in commodities for the taxpayer's own account, whether by the taxpayer or his employees or through a resident broker, commission agent, custodian, or other agent, and whether or not any such employee or agent has discretionary authority to make decisions in effecting the transactions. This clause shall not apply in the case of a dealer in commodities.                                                                                                                                        
++I.R.C. § 864(b)(2)(B)(iii) Limitation —                                                                                                                                         
++Clauses (i) and (ii) shall apply only if the commodities are of a kind customarily dealt in on an organized commodity exchange and if the transaction is of a kind customarily consummated at such place.                                                                                                                                        
++I.R.C. § 864(b)(2)(C) Limitation —                                                                                                                                         
++Subparagraphs (A)(i) and (B)(i) shall apply only if, at no time during the taxable year, the taxpayer has an office or other fixed place of business in the United States through which or by the direction of which the transactions in stocks or securities, or in commodities, as the case may be, are effected.                                                                                                                                        
++                                                                                                                                        
++FEATURE                                                                                                                                        
++FOREIGN INCOME & TAXPAYERS                                                                                                                                        
++GILTI and Subpart F treatment of distributions of appreciated property                                                                                                                                        
++By Joshua Ashman, CPA, and Nathan Mintz, Esq.                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++1-Feb-21                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++IMAGE BY IMAGINIMA/ISTOCK                                                                                                                                        
++RELATED                                                                                                                                        
++13-Dec-21                                                                                                                                        
++Senate Finance Committee releases tax provisions of Build Back Better Act                                                                                                                                        
++1-Nov-21                                                                                                                                        
++IRS provides new guidance on accounting method changes for CFCs                                                                                                                                        
++1-Oct-21                                                                                                                                        
++Automatic procedures to change a CFC’s depreciation method                                                                                                                                        
++TOPICS                                                                                                                                        
++International Tax                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                         
++                                                                                                                                        
++Repatriation Tax, GILTI & BEAT                                                                                                                                        
++Foreign Subsidiaries                                                                                                                                        
++EXECUTIVE                                                                                                                                        
++                                                                                                                                        
++                                                                                                                                        
++SUMMARY                                                                                                                                        
++The Subpart F regime was introduced in the 1960s to prevent the deferral of taxation on certain types of income of controlled foreign corporations (CFCs). The GILTI regime was put in place by the Tax Cuts and Jobs Act to prevent the deferral of tax on the income from intangibles held by CFCs.                                                                                                                                        
++There is a fundamental difference between the definitions of Subpart F income and GILTI: Subpart F income is defined initially by what it includes, and GILTI is defined initially by what it excludes.                                                                                                                                        
++In two letter rulings the IRS has held that Sec. 311(b) gain on a nonliquidating distribution by a CFC to a U.S. shareholder should be treated as foreign personal holding company income for Subpart F purposes.                                                                                                                                        
++Because the definition of income for GILTI includes all gross income, a nonliquidating distribution from a CFC to a U.S. shareholder should initially be treated as GILTI and, assuming no exception applies, should be subject to taxation under GILTI.                                                                                                                                        
++Since the enactment of the law known as the Tax Cuts and Jobs Act (TCJA) at the end of 2017,1 the TCJA's tax reform provisions have been subject to significant regulatory development, IRS interpretation, and further attempts at explication by the tax professional community.                                                                                                                                        
++One of the foremost areas of change under the tax reform was the introduction of the global intangible low-taxed income (GILTI) regime, containing a new set of anti-deferral rules that apply to controlled foreign corporations (CFCs).                                                                                                                                        
++Due to the recent implementation of the GILTI regime, analysis of its provisions has until now focused mainly on practical implementation, particularly within the context of real-life application. As new questions begin to arise regarding the application of the GILTI rules to more varied circumstances, it has become increasingly important to step back and contemplate the fundamental underpinnings of the regime. A useful exercise in gaining a better understanding of how the GILTI regime works is to compare it with its much older conceptual sibling, the Subpart F regime, in a specific situation.                                                                                                                                        
++Subpart F and GILTI: A brief comparative history                                                                                                                                        
++The Internal Revenue Code's campaign against overseas tax deferral dates to the 1960s with the enactment of the Revenue Act of 1962,2 which refined the definition of a CFC3 and added Subpart F4 to the Code. Prior to this, non-U.S.-source income generated by a CFC was not taxable to controlling U.S. shareholders until it was repatriated via a distribution, creating a golden tax-deferral opportunity, particularly when profits could accumulate in foreign corporations organized in low-tax or zero-tax jurisdictions.                                                                                                                                        
++To prevent this offshore abuse, the Code required, and to this day still requires, Subpart F income (made up of mainly "passive" income) to be included in the current-year taxable income of a CFC's "United States shareholder,"5 whether or not such income is distributed in the current year.                                                                                                                                        
++Exceptions to Subpart F inclusion generally reflect situations in which tax deferral or avoidance is likely not the main goal or outcome of the foreign company's existence. For instance, under the high-tax exception, income of a CFC that is subject to tax in its local jurisdiction at a rate that is at least 90% of the U.S. corporate tax rate is not subject to Subpart F inclusion.6                                                                                                                                        
++Jumping forward five-and-a-half decades, the TCJA provided a new wrinkle to the treatment of certain CFC income in the form of the GILTI anti-deferral regime. Like Subpart F, the GILTI rules were designed to prevent tax-deferral opportunities, but this time as a result of another of the TCJA's tax reforms — namely, the establishment of a "participation exemption" under which certain earnings of a foreign corporation can be repatriated to a corporate U.S. shareholder without U.S. tax.                                                                                                                                        
++In the preamble to the Oct. 10, 2018, proposed regulations implementing the GILTI regime, the IRS stated, "Congress recognized that, without any base protection measures, the participation exemption system could incentivize taxpayers to allocate income — in particular, mobile income from intangible property — that would otherwise be subject to the full U.S. corporate tax rate to CFCs operating in low- or zero-tax jurisdictions."7 Therefore, Congress enacted the GILTI provisions in order to subject a CFC's "active" income from intangibles to U.S. tax on a current basis, similar to the treatment of a CFC's Subpart F income.                                                                                                                                        
++Further following in the footsteps of the Subpart F regime, the GILTI regime has incorporated the high-tax exception into its final regulations.8                                                                                                                                        
++Defining Subpart F and GILTI: A distinction with a difference                                                                                                                                        
++While it is important to recognize GILTI and Subpart F's commonalities, the exercise of distinguishing them sheds profound light on how each regime operates at its definitional core.                                                                                                                                        
++The most fundamental distinction between the definitions of Subpart F income and GILTI is this — Subpart F income is defined initially by what it includes, while GILTI is defined initially by what it excludes.                                                                                                                                        
++Sec. 952 of the Code defines Subpart F income to include the following items: insurance income, foreign base company income (FBCI), international boycott factor income, illegal bribes and kickbacks, and income derived from certain designated terrorism-sponsoring countries. Other sections of the Code then further categorize these items as well as provide exceptions to such categories and subcategories. One of the more familiar subcategories of FBCI, for instance, is foreign personal holding company income (FPHCI), defined in Sec. 954 and the regulations thereunder to generally include passive-type income, such as dividends, interest, and rents, as well as sales of property that give rise to such passive-type income (e.g., stock, debt instruments, and real estate property).                                                                                                                                        
++In contrast, Sec. 951A defines GILTI firstly as all of the gross income of a CFC (less allocable deductions) and only then excludes the following items: Subpart F income (even if excluded by reason of the high-tax exception), income effectively connected with a U.S. trade or business, certain dividends received from a related person, and certain foreign oil and gas income. GILTI is further reduced by subtracting a 10% return on certain qualified tangible assets.                                                                                                                                        
++Why the difference in definitional approach between Subpart F income and GILTI? Perhaps the TCJA legislators tapped into valuable insights gained from decades of experience with Subpart F to craft a modernized tax regime that offers less room for ambiguity, uncertainty, and the potential for onerous litigation.9                                                                                                                                        
++In the preamble to the Oct. 10, 2018, proposed regulations implementing the GILTI regime, the IRS stated in this regard: "[D]ue to the administrative difficulty in identifying income attributable to intangible assets . . . [GILTI] is determined for purposes of section 951A based on a formulaic approach, under which a 10-percent return is attributed to certain tangible assets . . . and then each dollar of certain income above such 'normal return' is effectively treated as intangible income."10                                                                                                                                        
++Defining GILTI more broadly, i.e., by exclusion rather than inclusion, ultimately hands the IRS sharper definitional tools to impose GILTI taxation on new and varied offshore transactions as they arise moving forward.                                                                                                                                        
++Applying Subpart F and GILTI: The case of distributions of appreciated property                                                                                                                                        
++Given GILTI's relative newness, it is perhaps not yet entirely obvious how the regime's shift in definitional approach will have practical implications.                                                                                                                                        
++Anecdotally speaking, the authors found themselves at the crossroad between the Subpart F and GILTI regimes recently when analyzing a client transaction involving a nonliquidating distribution of certain appreciated property by a wholly owned CFC to its sole U.S. owner.                                                                                                                                        
++The distribution transaction was particularly interesting because of the tax fiction that informs its consequences. Under Sec. 311(b), if a corporation distributes appreciated property to a shareholder, then "gain shall be recognized to the distributing corporation as if such property were sold to the distributee at its fair market value." The "as if" connotes a quasi-transactional classification, one of sale-like treatment.                                                                                                                                        
++In this context, the difference in definitional approach between the Subpart F and GILTI regimes can have important implications. On its face, a strict reading of Sec. 954 and the regulations thereunder shows no specific definitional category of Subpart F income that includes a deemed sale by virtue of a distribution of appreciated property. It is therefore at least arguably unclear whether a distribution that triggers gain recognition — "as if" a sale has occurred — is subject to Subpart F taxation.                                                                                                                                        
++The IRS has given its opinion on the matter in two private letter rulings,11 stating that Sec. 311(b) gain of a CFC should be treated as FPHCI subject to Subpart F taxation. Notably, the rulings do not back up this conclusion with a technical discussion.12 Given the limited authoritative weight of private letter rulings, the issue is at least not clear from doubt.13                                                                                                                                        
++Turning to the GILTI regime, if the appreciated property were, for instance, trade or business property, the CFC's distribution of such property would presumably fall outside the definition of FPHCI and would therefore not be subject to Subpart F taxation (even if conceding that Subpart F is at least at play under these circumstances).14 Taking Subpart F out of the picture provokes the question as to whether gain from the distribution (treated as a deemed sale) should then be subject to the GILTI regime.                                                                                                                                        
++It is at this juncture where the broader definitional depth of GILTI gives a much clearer answer. Since GILTI firstly includes all gross income, then the gain (even if triggered by a deemed sale) should initially fall within the definition of GILTI. Assuming no exception applies, the gain should then ultimately be subject to GILTI taxation. While Subpart F income's definition by inclusion leads to certain ambiguities, GILTI's definition by exclusion gives a more definitive result.                                                                                                                                        
++As the GILTI regime comes into fuller form and further integrates with other areas of the Code, theoretical explorations into the regime's substantive nature can help tax practitioners more confidently apply both the GILTI and Subpart F rules to transactions with subtler and less obvious outcomes.                                                                                                                                          
++Footnotes                                                                                                                                        
++1. P.L. 115-97.                                                                                                                                        
++2.  Revenue Act of 1962, P.L. 87-834. Two years previously, in 1960, Congress enacted P.L. 86-780, which added Sec. 6038 to the Code, requiring the reporting of certain overseas activities of U.S.-owned foreign corporations, but it did not yet impose a substantive regime requiring a current shareholder inclusion.                                                                                                                                        
++3.  The definition of a CFC was further refined by the TCJA. Currently, a CFC is defined as any foreign (i.e., non-U.S.) corporation, if more than 50% of (1) the total combined voting power of all classes of stock of such corporation entitled to vote, or (2) the total value of the shares in such corporation, is owned in the aggregate, or is considered as owned by applying certain attribution rules, by United States shareholders on any day during the tax year of such foreign corporation (Sec. 957).                                                                                                                                        
++4.  "Subpart F" (Secs. 951-965) refers to Subpart F (Controlled Foreign Corporations) of Part III (Income From Sources Without the United States) of Subchapter N (Tax Based on Income From Sources Within and Without the United States) of Chapter 1 (Normal Taxes and Surtaxes) of Subtitle A (Income Taxes) of Title 26 (Internal Revenue Code) of the U.S. Code.                                                                                                                                        
++5.  A "United States shareholder" is any U.S. person who owns, or is considered as owning, by applying certain attribution rules, 10% or more of the total voting power or the total value of stock in the foreign corporation (Sec. 951(b)).                                                                                                                                        
++6.  Sec. 954(b)(4).                                                                                                                                        
++7.  REG-104390-18, 83 Fed. Reg. 51072 (Oct. 10, 2018) (referring to the Senate Committee on the Budget, Reconciliation Recommendations Pursuant to H. Con. Res. 71, 115th Cong., 1st Sess., at 365 (December 2017)).                                                                                                                                        
++8 .  Regs. Sec. 1.951A-2(c)(7). The GILTI rules also include a similar mechanism that eliminates residual GILTI taxation in the case of CFCs operating in jurisdictions imposing a corporate income tax at a rate of at least 13.125% (so-called non-low-tax jurisdictions). Taking into account the 80% foreign tax credit available to domestic corporate shareholders (and individual U.S. shareholders making a "962(b) election"), U.S. shareholders of CFCs in non-low-tax jurisdictions may suffer no residual U.S. tax, given that GILTI is subject to U.S. tax at the rate of 10.5% (or 80% of 13.125%). Under new Sec. 250, the U.S. corporate tax rate of 21% is reduced to 10.5% by virtue of a 50% deduction afforded to GILTI inclusions in the hands of U.S. corporate shareholders (and individual U.S. shareholders making a "962(b) election").                                                                                                                                        
++9.  While the focus here is on definitional differences, the GILTI regime has a number of other features that distinguish it functionally from the Subpart F regime. For instance, the amount of a shareholder's Subpart F inclusion with respect to one CFC is not taken into account in determining the shareholder's inclusion with respect to another CFC, while in contrast a U.S. shareholder computes a single GILTI inclusion amount by reference to all its CFCs.                                                                                                                                        
++10.  REG-104390-18, 83 Fed. Reg. 51072 (Oct. 10, 2018).                                                                                                                                        
++11.  IRS Letter Ruling 9724027 and IRS Letter Ruling 9137047.                                                                                                                                        
++12.  The IRS could argue by analogy to Sec. 964(e)(3), which states that a deemed sale is to be treated as an actual sale for the purpose of implementing the rule that gain from the sale by a CFC of another CFC is to be included in gross income as a dividend. A counterargument could then be made that Sec. 964(e) states explicitly that the deemed sale rule applies solely "for purposes of this subsection," meaning only in the context of a sale by a CFC of another CFC.                                                                                                                                        
++13.  In a more authoritative setting, a district court did in fact analyze a case where a CFC made a nonliquidating distribution of appreciated property (shares in a company) to its U.S. parent. See Pittway Corp., 887 F. Supp. 164 (N.D. Ill. 1995), aff'd, 88 F.3d 501 (7th Cir. 1996). A discussion of the CFC and Subpart F rules is noticeably absent from the court's analysis.                                                                                                                                        
++14.  Note that unlike the statutory provisions of the Code, the Sec. 954 regulations, which were promulgated three decades later (T.D. 8618, 60 Fed. Reg. 46500 (Sept. 7, 1995)), do in fact take a GILTI-like definitional approach, but only specifically in the context of sales of property by a CFC. Under Regs. Sec. 1.954-2(e)(3), sales of all types of property are initially included within the FPHCI category of sales of "property that does not give rise to any income" before various exceptions are provided.                                                                                                                                        
++> Be accurate --- Ensure the Estate name on the check matches our records exactly.  
++> Consult a professional --- Consult a lawyer mail in all aspects of  administering the Estate, 
++> seek advice from the lawyer or accountant on taxes owed by the Estate.  
++> Separate the Estate from your own finances --- 
++> law forbids mingling the Estate with your personal finances.  
++> Keep good records --- 
++> Account for every transaction 
++> Keep records of all canceled checks-and-reciepts in a safe place.  
++> These are just some important points in Estate administration.  
++> We would be happy to advise you of ways to 
++> find answers to your other questions.  
++> Checking Account 
++> Identif
++Column1	Get answers to your investing questions from the SEC's website dedicated to retail investors	Column2	Column3	Column4	Column5	Column6	Column7	Column8	Column9	Column10	Column11	Column12	Get answers to your investing questions from the SEC's website dedicated to retail investors4	Column13	Column14	Column15	Get answers to your inve
++
++## What's Changed
++* Create package.yarn by @zakwarlord7 in https://github.com/zakwarlord7/GitHub-doc/pull/35
++
++
++**Full Changelog**: https://github.com/zakwarlord7/GitHub-doc/commits/paradice
++
++## What's Changed
++* minutemen by @zakwarlord7 in https://github.com/zakwarlord7/GitHub-doc/pull/1
++* BITORE by @zakwarlord7 in https://github.com/zakwarlord7/GitHub-doc/pull/2
++* buster by @zakwarlord7 in https://github.com/zakwarlord7/GitHub-doc/pull/3
++* Create Gulp by @zakwarlord7 in https://github.com/zakwarlord7/GitHub-doc/pull/4
++
++
++**Full Changelog**: https://github.com/zakwarlord7/GitHub-doc/commits/Masteron:
++  push:
++    branches: master
++  pull_request: 
++    run-on: ubuntu-latest
++    steps:
++    - name: Set up Git repository
++      uses: actions/checkout@v3
++    - name: Set up Ruby
++      uses: ruby/setup-ruby@v1
++      with:
++        bundler-cache: true
++    - name: Set up Node
++      uses: actions/setup-node@v3
++    - name: Bootstrap
++      run: script/bootstrap
++    - name: Tests
++      run: script/test 
++<?xml version="1.0" encoding="utf-8"?>
++charmap keyset =  new
++{ "new keymap Charset = Pro" }
++<configuration>
++    <packageSources>
++        <clear />
++        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
++    </packageSources>
++    <packageSourceCredentials>
++        <github>
++            <add key="Username" value="USERNAME" />
++            <add key="ClearTextPassword" value="TOKEN" />
++        </github>
++    </packageSourceCredentials>
++</configuration> 
++on:
++Runs-on:on:"
++const: "token"''
++token: "((c)(r))"''
++'Value": "[VOLUME]'"''
++ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
++diff --git a/.github/workflows/tests.yml b/.github/workflows/tests.yml
++index 6077f47a4e..43a9c1b6fc 100644
++--- a/.github/workflows/tests.yml
+++++ b/.github/workflows/tests.yml
++@@ -1,5 +1,5 @@
++-name: GitHub Actions CI
++-on:
+++xi :BEGIB: GLPW4:
+++Mame: GitHub Actions CI-n: :Eun'@ci :
++   push:
++     branches: master
++   pull_request: []
++@@ -28,3 +28,102 @@ jobs:
++ 
++     - name: Tests
++       run: script/test
+++on:
+++  push:
+++    branches: master
+++  pull_request: 
+++    run-on: ubuntu-latest
+++    steps:
+++    - name: Set up Git repository
+++      uses: actions/checkout@v3
+++    - name: Set up Ruby
+++      uses: ruby/setup-ruby@v1
+++      with:
+++        bundler-cache: true
+++    - name: Set up Node
+++      uses: actions/setup-node@v3
+++    - name: Bootstrap
+++      run: script/bootstrap
+++    - name: Tests
+++      run: script/test 
+++<?xml version="1.0" encoding="utf-8"?>
+++charmap keyset =  new
+++{ "new keymap Charset = Pro" }
+++<configuration>
+++    <packageSources>
+++        <clear />
+++        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
+++    </packageSources>
+++    <packageSourceCredentials>
+++        <github>
+++            <add key="Username" value="USERNAME" />
+++            <add key="ClearTextPassword" value="TOKEN" />
+++        </github>
+++    </packageSourceCredentials>
+++</configuration> 
+++on:
+++Runs-on:on:"
+++const: "token"''
+++token: "((c)(r))"''
+++'Value": "[VOLUME]'"''
+++ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
+++From f04a6ebe3b1225ce754577343bf7dfc6cf7f32db Mon Sep 17 00:00:00 2001
+++From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
+++ <109656750+zakwarlord7@users.noreply.github.com>
+++Date: Mon, 23 Jan 2023 14:27:01 -0600
+++Subject: [PATCH] Update config.yml
+++
+++---
+++ .circleci/config.yml | 43 ++++++++++++++++++++++++++++++++++++++++---
+++ 1 file changed, 40 insertions(+), 3 deletions(-)
+++
+++diff --git a/.circleci/config.yml b/.circleci/config.yml
+++index d23e34d3098..243be5f510a 100644
+++--- a/.circleci/config.yml
++++++ b/.circleci/config.yml
+++@@ -1,6 +1,43 @@
+++-# Javascript Node CircleCI 2.0 configuration file
+++-# Check https://circleci.com/docs/2.0/language-javascript/ for more details
+++-version: 2.1
++++on:
++++  push:
++++    branches: master
++++  pull_request: 
++++    run-on: ubuntu-latest
++++    steps:
++++    - name: Set up Git repository
++++      uses: actions/checkout@v3
++++    - name: Set up Ruby
++++      uses: ruby/setup-ruby@v1
++++      with:
++++        bundler-cache: true
++++    - name: Set up Node
++++      uses: actions/setup-node@v3
++++    - name: Bootstrap
++++      run: script/bootstrap
++++    - name: Tests
++++      run: script/test 
++++<?xml version="1.0" encoding="utf-8"?>
++++charmap keyset =  new
++++{ "new keymap Charset = Pro" }
++++<configuration>
++++    <packageSources>
++++        <clear />
++++        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
++++    </packageSources>
++++    <packageSourceCredentials>
++++        <github>
++++            <add key="Username" value="USERNAME" />
++++            <add key="ClearTextPassword" value="TOKEN" />
++++        </github>
++++    </packageSourceCredentials>
++++</configuration> 
++++on:
++++Runs-on:on:"
++++const: "token"''
++++token: "((c)(r))"''
++++'Value": "[VOLUME]'"''
++++ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
++++npm run start 
+++ executors:
+++   main:diff --git a/.circleci/config.yml b/.circleci/config.yml
++index d23e34d3098..243be5f510a 100644
++--- a/.circleci/config.yml
+++++ b/.circleci/config.yml
++@@ -1,6 +1,43 @@
++-# Javascript Node CircleCI 2.0 configuration file
++-# Check https://circleci.com/docs/2.0/language-javascript/ for more details
++-version: 2.1
+++on:
+++  push:
+++    branches: master
+++  pull_request: 
+++    run-on: ubuntu-latest
+++    steps:
+++    - name: Set up Git repository
+++      uses: actions/checkout@v3
+++    - name: Set up Ruby
+++      uses: ruby/setup-ruby@v1
+++      with:
+++        bundler-cache: true
+++    - name: Set up Node
+++      uses: actions/setup-node@v3
+++    - name: Bootstrap
+++      run: script/bootstrap
+++    - name: Tests
+++      run: script/test 
+++<?xml version="1.0" encoding="utf-8"?>
+++charmap keyset =  new
+++{ "new keymap Charset = Pro" }
+++<configuration>
+++    <packageSources>
+++        <clear />
+++        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
+++    </packageSources>
+++    <packageSourceCredentials>
+++        <github>
+++            <add key="Username" value="USERNAME" />
+++            <add key="ClearTextPassword" value="TOKEN" />
+++        </github>
+++    </packageSourceCredentials>
+++</configuration> 
+++on:
+++Runs-on:on:"
+++const: "token"''
+++token: "((c)(r))"''
+++'Value": "[VOLUME]'"''
+++ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
++ executors:
++   main:npm run start on:
+  push:
+    branches: master
+  pull_request: 
+    run-on: ubuntu-latest
+    steps:
+    - name: Set up Git repository
+      uses: actions/checkout@v3
+    - name: Set up Ruby
+      uses: ruby/setup-ruby@v1
+      with:
+        bundler-cache: true
+    - name: Set up Node
+      uses: actions/setup-node@v3
+    - name: Bootstrap
+      run: script/bootstrap
+    - name: Tests
+      run: script/test 
+<?xml version="1.0" encoding="utf-8"?>
+charmap keyset =  new
+{ "new keymap Charset = Pro" }
+<configuration>
+    <packageSources>
+        <clear />
+        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
+    </packageSources>
+    <packageSourceCredentials>
+        <github>
+            <add key="Username" value="USERNAME" />
+            <add key="ClearTextPassword" value="TOKEN" />
+        </github>
+    </packageSourceCredentials>
+</configuration> 
+on:
+Runs-on:on:"
+const: "token"''
+token: "((c)(r))"''
+'Value": "[VOLUME]'"''
+ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
+diff --git a/.circleci/config.yml b/.circleci/config.yml
+index d23e34d3098..243be5f510a 100644
+--- a/.circleci/config.yml
++++ b/.circleci/config.yml
+@@ -1,6 +1,43 @@
+-# Javascript Node CircleCI 2.0 configuration file
+-# Check https://circleci.com/docs/2.0/language-javascript/ for more details
+-version: 2.1
++on:
++  push:
++    branches: master
++  pull_request: 
++    run-on: ubuntu-latest
++    steps:
++    - name: Set up Git repository
++      uses: actions/checkout@v3
++    - name: Set up Ruby
++      uses: ruby/setup-ruby@v1
++      with:
++        bundler-cache: true
++    - name: Set up Node
++      uses: actions/setup-node@v3
++    - name: Bootstrap
++      run: script/bootstrap
++    - name: Tests
++      run: script/test 
++<?xml version="1.0" encoding="utf-8"?>
++charmap keyset =  new
++{ "new keymap Charset = Pro" }
++<configuration>
++    <packageSources>
++        <clear />
++        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
++    </packageSources>
++    <packageSourceCredentials>
++        <github>
++            <add key="Username" value="USERNAME" />
++            <add key="ClearTextPassword" value="TOKEN" />
++    </packageSourceCredentials>
++</configuration> 
++on:
++Runs-on:on:"
++const: "token"''
++token: "((c)(r))"''
++'Value": "[VOLUME]'"''
++ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":
+pexecutors:
+   main:diff --git a/bitore.sig b/bitore.sig
new file mode 100644
index 00000000000..bfe93315645
--- /dev/null
+++ b/bitore.sig
@@ -0,0 +1,788 @@
+on:
+Runs-on:on:
+on:
+  push:
+    branches: master
+  pull_request: 
+    run-on: ubuntu-latest
+    steps:
+    - name: Set up Git repository
+      uses: actions/checkout@v3
+    - name: Set up Ruby
+      uses: ruby/setup-ruby@v1
+      with:
+        bundler-cache: true
+    - name: Set up Node
+      uses: actions/setup-node@v3
+    - name: Bootstrap
+      run: script/bootstrap
+    - name: Tests
+      run: script/test 
+<?xml version="1.0" encoding="utf-8"?>
+charmap keyset =  new
+{ "new keymap Charset = Pro" }
+<configuration>
+    <packageSources>
+        <clear />
+        <add key="github" value="https://"name": "my-electron-app",
+  "version": "1.0.0",
+  "description": "Hello World!",
+const: "token"''
+token: "((c)(r))"''
+[Volume].]: "[12753750].00]"''
+ITEM_ID: "BITORE_34173"''
+"name": "my-electron-app",
+  "version": "0.0.0",
+  "description": "Hello World!'@https://git.io/codeql-language-support# For most projects, this workflow file will not need changing; you simply need
+- # to commit it to your repository.
+on :-on ::
+> Be accurate --- Ensure the Estate name on the check matches our records exactly.  
+> Consult a professional --- Consult a lawyer mail in all aspects of  administering the Estate, 
+> seek advice from the lawyer or accountant on taxes owed by the Estate.  
+> Separate the Estate from your own finances --- 
+> law forbids mingling the Estate with your personal finances.  
+> Keep good records --- 
+> Account for every transaction 
+> Keep records of all canceled checks-and-reciepts in a safe place.  
+> These are just some important points in Estate administration.  
+> We would be happy to advise you of ways to 
+> find answers to your other questions.  
+> Checking Account 
+> Identification
+> 9-digit Routing                  Account Number
+> _______|_______      ______________|___________     
+> |                           |      |                                                 |
+> |:071921891|:|        |4720416547||'                     |Routing/Transit Number and Account Numbers shown to the left are for your new account.  
+Refer to them when making deposits and making withdrawls quickly and accuratly.  
+Keep this and all business financial information secure.  
+Be sure to ask about ordering checks for your new account.
+________________________________________________________________________________________________________________________________________
+________________________________________________________________________________________________________________________________________   
+_________________________________([$OBJ]  S e c u r i t y  e n h a n c e d  d o c u m e n t.    S e e   b a c k   f o r   d e t a i l s .     [$OBJ])_________________________________
+_________________________________________________________________________________________________________________________________________________________________________________
+
+             
+
+                                                                           PNC Bank, N.A.      071 
+                                                                                                                                                                                                                              DATE_________________________7_0_-_2189/719
+                                                                                   
+                                                                                   7364
+PAY TO THE ORDER OF_____________________________________________________________________________________________________________________________________________________| $ |____________________________|
+
+_______________________________________________VOID____________________________________________________________________________________________________________DOLLARS [$OBJ] Security
+
+                                                                         Features
+
+                                                                         Detaile on
+
+                                                                         Back.
+ESTATE OF
+                                                                                                                                        
+                                                                                MP } EXECUTOR/                                 {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
+RIZEDSIGNATUREAUTHORIZEDSIGNATURE}ADMINISTRATOR
+                                                                                                                                        
+                                                                                MP }PERSONAL                                   {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
+RIZEDSIGNATUREAUTHORIZEDSIGNATURE} REPRESENTATIVE
+                                                                                                                                        
+                                                                                MP } TRUSTEE                                  {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
+RIZEDSIGNATUREAUTHORIZEDSIGNATURE}
+
+
+a071921891a_4720416547c
+                                
+
+
+
+
+______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
+________________________________________________________________________________________________________________________________________   
+_________________________________([$OBJ]  S e c u r i t y  e n h a n c e d  d o c u m e n t.    S e e   b a c k   f o r   d e t a i l s .     [$OBJ])_________________________________
+_________________________________________________________________________________________________________________________________________________________________________________
+                                               NO.
+                                                              [$OBJ]PNCBANK                                                                                                                                                                                                                              
+                                                                           PNC Bank, N.A.      071
+                                                                                                                                                                                                                              DATE_________________________7_0_-_2189/719
+                                                                                   
+                                                                                   7364
+PAY TO THE ORDER OF_____________________________________________________________________________________________________________________________________________________| $ |____________________________|
+
+_______________________________________________VOID____________________________________________________________________________________________________________DOLLARS [$OBJ] Security
+
+                                                                         Features
+
+                                                                         Detaile on
+
+                                                                         Back.
+ESTATE OF
+                                                                                                                                        
+                                                                                MP } EXECUTOR/                                 {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
+RIZEDSIGNATUREAUTHORIZEDSIGNATURE}ADMINISTRATOR
+                                                                                                                                        
+                                                                                MP }PERSONAL                                   {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
+RIZEDSIGNATUREAUTHORIZEDSIGNATURE} REPRESENTATIVE
+                                                                                                                                        
+                                                                                MP } TRUSTEE                                  {AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHO                                                                                       
+RIZEDSIGNATUREAUTHORIZEDSIGNATURE}
+
+
+
+
+a071921891a_4720416547c
+                                         
+
+
+
+____________________________________________________________________________________________________________________________________________________________________________________                                                                                                                       
+Form 1040-V 2021                                                                                                                                                                                                                              Page 2
+________________________________________________________________________________________________________________________________________
+IF you live in...                                                                                                                                                  THEN use this address to send in your payment... 
+________________________________________________________________________________________________________________________________________
+Alabama, Florida, Georgia, Louisiana, Missippi, North Carolina, South Carolina, Tennessee, Texas|  Internal Revenue Service 
+                                                                                                                                                                                               |            P.O. Box 1214 
+                                                                                                                                                                                               | Charolette, NC 28201-1214
+________________________________________________________________________________________________________________________________________
+TO PAY YOUR TAXES DUE BY CHECK, MAIL THIS FORM TO THE THE ADDRESS LISTED BELOW
+________________________________________________________________________________________________________________________________________
+                                                                                                                                                                                                                                Form 1040-V       2021
+ ----------------------------------------------------------<  Detach Here and Mail With Your Payment and Return  >---------------------------------------------------------------------
+Department of the Treasury 2021 Form 1040-V Payment Voucher
+Internal Revenue Service      (99)  
+> Use this voucher when making a payment with Form 1040.
+> Do not staple this voucher or your payment to Form 1040.
+> Make your check or money order payable to the 'United States Treasury. '______________________________________________________________
+> Write your Social Security nnumber (SSN) on your check or money order. | Enter the amount of your payment . . . . . . . .>|      7,567,263,607.      |                                                                                                                 REV 04/09/22 INTUIT.CG.      1555                                   ________________________________________________________________________________________________________________________________________
+ZACHRY T WOOD
+                                                                                                                                                     INTERNAL  REVENUE SERVICE
+5222 BRADFORD DR                                                                                                             P.O. BOX 1214
+DALLAS TX 75235-8313                                                                                                     CHARLOTTE, NC 28201-1214
+'''
+'''
+'''
+'''
+'''
+'______________633441725__BH__WOOD__30__0__202112__610
+                                                                                                                
+                                                        1                Earnings Statement                                        A
+                                                                                                                
+        ALPHABET                                                                        Period Beginning:                        37151                
+        1600 AMPITHEATRE PARKWAY                         DR                                        Period Ending:                        44833                
+        MOUNTAIN VIEW, C.A., 94043                                                                Pay Date:                        44591                
+        "Taxable Marital Status: 
+Exemptions/Allowances"                        Married                                        ZACHRY T.                         WOOD                
+                                                                        5323        BRADFORD DR                                
+        Federal:                                                                                                        
+                                                                        DALLAS                TX 75235-8314                        
+        TX:                NO State Incorne Tax                                                                                        
+Earnings                rate        units                                        year to date        Other Benefits and                                        
+Regular                112.2        674678000                                        75698871600        Information                                this period        total to date
+Overtime                                                                                Pto Balance                                                
+"Bonus
+Training"                                                                                Total Work Hrs                                0        75698871600
+        Gross Pay        75698871600                                                                Important Notes                                        
+                                                                        COMPANY PH Y: 650-253-0000                                        
+Deductions        Statutory                                                                BASIS OF PAY: BASIC/DILUTED EPS                                        
+        Federal Income Tax                                                                                                                        
+        Social Security Tax                                                                                                                        
+                                                                        YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE                                        
+        Medicare Tax                                                                                                                        
+                                                                                                                        
+        Net Pay                70842743866                70842743866                                                                        
+        CHECKING                                                                                                                
+        Net Check                70842743866                                                                                                
+        Your federal taxable wages this period are $                                                                                                        
+        ALPHABET INCOME                                                                Advice number:                        650001                
+        1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043                                                                Pay date:_                        44669                
+                                                                                                                
+        Deposited to the account Of                                                                xxxxxxxx6547                        transit ABA                
+        "PLEASE READ THE IMPORTANT DISCLOSURES BELOW                                                                                                                                                                                                                                                                        
+                                                                                                                                                                                                                                                                        
+FEDERAL RESERVE MASTER SUPPLIER ACCOUNT                                        31000053-052101023                                                                                                                                                                                                COD                                
+                                        633-44-1725                                                                                                                                                                Zachryiixixiiiwood@gmail.com                                47-2041-6547                111000614                31000053
+PNC Bank                                                                                                                                                                                                                                        PNC Bank Business Tax I.D. Number: 633441725                                
+CIF Department (Online Banking)                                                                                                                                                                                                                                        Checking Account: 47-2041-6547                                
+P7-PFSC-04-F                                                                                                                                                                                                                                        Business Type: Sole Proprietorship/Partnership Corporation                                
+500 First Avenue                                                                                                                                                                                                                                        ALPHABET                                
+Pittsburgh, PA 15219-3128                                                                                                                                                                                                                                        5323 BRADFORD DR                                
+NON-NEGOTIABLE                                                                                                                                                                                                                                        DALLAS TX 75235 8313                                
+                                                                                                                                                                                                                                        ZACHRY, TYLER, WOOD                                
+                                                                                                                                                                                                                4/18/2022                        650-2530-000 469-697-4300                                
+                                                                                                                SIGNATURE                                                                                                                        Time Zone: Eastern Central Mountain Pacific                                
+Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value"                                                                                        5264-5331                
+                                                                        NON-NEGOTIABLE                                        
+        PLEASE READ THE IMPORTANT DISCLOSURES BELOW                                                                                                        
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+                                                                                                                
+        Based on facts as set forth in.                        6550                                                                                
+        The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.                                                                                                        
+                                                                                                                
+        EMPLOYER IDENTIFICATION NUMBER:       61-1767919                                                                                                        
+                                                                                                                
+                                                                                                                
+        [DRAFT FORM OF TAX OPINION]                                                                                                        
+                                                                                                                
+                                                                                                                
+                                                                                                        1        
+                                                                                                                
+        ALPHABET                                                                                                        
+        ZACHRY T WOOD                                                                                                        
+        5323 BRADFORD DR                                                                                                        
+        DALLAS TX 75235-8314                                                                                                        
+        ORIGINAL REPORT                                                                                                        
+        Income, Rents, & Royalty                                                                                                        
+        INCOME STATEMENT         61-1767919                                                                                                
+                88-1303491                                                                                                
+        GOOGL_income-statement_Quarterly_As_Originally_Reported        TTM        Q4 2021        Q3 2021        Q2 2021        Q1 2021        Q4 2020        Q3 2020        Q2 2020        Q1 2020        Q4 2019        Q3 2019                
+                                                                                                                
+        Gross Profit        146698000000        42337000000        37497000000        35653000000        31211000000        30818000000        25056000000        19744000000        22177000000        25055000000        22931000000                
+        Total Revenue as Reported, Supplemental        257637000000        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000        40499000000                
+                257637000000        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        64133000000        34071000000                
+        Other Revenue                                                                                        6428000000                
+        Cost of Revenue        -110939000000        -32988000000        -27621000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000        -18982000000        -21020000000        -17568000000                
+        Cost of Goods and Services        -110939000000        -32988000000        -27621000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000        -18982000000        -21020000000        -17568000000                
+        Operating Income/Expenses        -67984000000        -20452000000        -16466000000        -16292000000        -14774000000        -15167000000        -13843000000        -13361000000        -14200000000        -15789000000        -13754000000                
+        Selling, General and Administrative Expenses        -36422000000        -11744000000        -8772000000        -8617000000        -7289000000        -8145000000        -6987000000        -6486000000        -7380000000        -8567000000        -7200000000                
+        General and Administrative Expenses        -13510000000        -4140000000        -3256000000        -3341000000        -2773000000        -2831000000        -2756000000        -2585000000        -2880000000        -2829000000        -2591000000                
+        Selling and Marketing Expenses        -22912000000        -7604000000        -5516000000        -5276000000        -4516000000        -5314000000        -4231000000        -3901000000        -4500000000        -5738000000        -4609000000                
+        Research and Development Expenses        -31562000000        -8708000000        -7694000000        -7675000000        -7485000000        -7022000000        -6856000000        -6875000000        -6820000000        -7222000000        -6554000000                
+        Total Operating Profit/Loss        78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000        9177000000                
+        Non-Operating Income/Expenses, Total        12020000000        2517000000        2033000000        2624000000        4846000000        3038000000        2146000000        1894000000        -220000000        1438000000        -549000000                
+        Total Net Finance Income/Expense        1153000000        261000000        310000000        313000000        269000000        333000000        412000000        420000000        565000000        604000000        608000000                
+        Net Interest Income/Expense        1153000000        261000000        310000000        313000000        269000000        333000000        412000000        420000000        565000000        604000000        608000000                
+                                                                                                                
+        Interest Expense Net of Capitalized Interest        -346000000        -117000000        -77000000        -76000000        -76000000        -53000000        -48000000        -13000000        -21000000        -17000000        -23000000                
+        Interest Income        1499000000        378000000        387000000        389000000        345000000        386000000        460000000        433000000        586000000        621000000        631000000                
+        Net Investment Income        12364000000        2364000000        2207000000        2924000000        4869000000        3530000000        1957000000        1696000000        -809000000        899000000        -1452000000                
+        Gain/Loss on Investments and Other Financial Instruments        12270000000        2478000000        2158000000        2883000000        4751000000        3262000000        2015000000        1842000000        -802000000        399000000        -1479000000                
+        Income from Associates, Joint Ventures and Other Participating Interests        334000000        49000000        188000000        92000000        5000000        355000000        26000000        -54000000        74000000        460000000        -14000000                
+        Gain/Loss on Foreign Exchange        -240000000        -163000000        -139000000        -51000000        113000000        -87000000        -84000000        -92000000        -81000000        40000000        41000000                
+        Irregular Income/Expenses        0        0                                0        0        0        0        0        0                
+        Other Irregular Income/Expenses        0        0                                0        0        0        0        0        0                
+        Other Income/Expense, Non-Operating        -1497000000        -108000000        -484000000        -613000000        -292000000        -825000000        -223000000        -222000000        24000000        -65000000        295000000                
+        Pretax Income        90734000000        24402000000        23064000000        21985000000        21283000000        18689000000        13359000000        8277000000        7757000000        10704000000        8628000000                
+        Provision for Income Tax        -14701000000        -3760000000        -4128000000        -3460000000        -3353000000        -3462000000        -2112000000        -1318000000        -921000000        -33000000        -1560000000                
+        Net Income from Continuing Operations        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                
+        Net Income after Extraordinary Items and Discontinued Operations        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                
+        Net Income after Non-Controlling/Minority Interests        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                
+        Net Income Available to Common Stockholders        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                
+        Diluted Net Income Available to Common Stockholders        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000        6836000000        10671000000        7068000000                
+        Income Statement Supplemental Section                                                                                                        
+        Reported Normalized and Operating Income/Expense Supplemental Section                                                                                                        
+        Total Revenue as Reported, Supplemental        257637000000        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        41159000000        46075000000        40499000000                
+        Total Operating Profit/Loss as Reported, Supplemental        78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000        7977000000        9266000000        9177000000                
+        Reported Effective Tax Rate        0.162                0.179        0.157        0.158                0.158        0.159        0.119                0.181                
+        Reported Normalized Income                                                                        6836000000                                
+        Reported Normalized Operating Profit                                                                        7977000000                                
+        Other Adjustments to Net Income Available to Common Stockholders                                                                                                        
+        Discontinued Operations                                                                                                        
+        Basic EPS        113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96        15.49        10.2                
+        Basic EPS from Continuing Operations        113.88        31.12        28.44        27.69        26.63        22.46        16.55        10.21        9.96        15.47        10.2                
+        Basic EPS from Discontinued Operations                                                                                                        
+        Diluted EPS        112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13        9.87        15.35        10.12                
+        Diluted EPS from Continuing Operations        112.2        30.67        27.99        27.26        26.29        22.23        16.4        10.13        9.87        15.33        10.12                
+        Diluted EPS from Discontinued Operations                                                                                                        
+        Basic Weighted Average Shares Outstanding        667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000        686465000        688804000        692741000                
+        Diluted Weighted Average Shares Outstanding        677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000        692267000        695193000        698199000                
+        Reported Normalized Diluted EPS                                                                        9.87                                
+        Basic EPS        113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21        9.96        15.49        10.2                
+        Diluted EPS        112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13        9.87        15.35        10.12                
+        Basic WASO        667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000        686465000        688804000        692741000                
+        Diluted WASO        677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000        692267000        695193000        698199000                
+        Fiscal year end September 28th., 2022. | USD                                                                                                        
+                                                                                                                
+        31622,6:39 PM                                                                                                        
+        Morningstar.com Intraday Fundamental Portfolio View Print Report                                                                Print                                        
+                                                                                                                
+        3/6/2022 at 6:37 PM                                                                                        Current Value                
+                                                                                                15335150186014                
+                                                                                                                
+        GOOGL_income-statement_Quarterly_As_Originally_Reported                Q4 2021                                                                                        
+        Cash Flow from Operating Activities, Indirect                24934000000        Q3 2021        Q2 2021        Q1 2021        Q4 2020                                                        
+        Net Cash Flow from Continuing Operating Activities, Indirect                24934000000        25539000000        37497000000        31211000000        30818000000                                                        
+        Cash Generated from Operating Activities                24934000000        25539000000        21890000000        19289000000        22677000000                                                        
+        Income/Loss before Non-Cash Adjustment                20642000000        25539000000        21890000000        19289000000        22677000000                                                        
+        Total Adjustments for Non-Cash Items                6517000000        18936000000        18525000000        17930000000        15227000000                                                        
+        Depreciation, Amortization and Depletion, Non-Cash Adjustment                3439000000        3797000000        4236000000        2592000000        5748000000                                                        
+        Depreciation and Amortization, Non-Cash Adjustment                3439000000        3304000000        2945000000        2753000000        3725000000                                                        
+        Depreciation, Non-Cash Adjustment                3215000000        3304000000        2945000000        2753000000        3725000000                                                        
+        Amortization, Non-Cash Adjustment                224000000        3085000000        2730000000        2525000000        3539000000                                                        
+        Stock-Based Compensation, Non-Cash Adjustment                3954000000        219000000        215000000        228000000        186000000                                                        
+        Taxes, Non-Cash Adjustment                1616000000        3874000000        3803000000        3745000000        3223000000                                                        
+        Investment Income/Loss, Non-Cash Adjustment                -2478000000        -1287000000        379000000        1100000000        1670000000                                                        
+        Gain/Loss on Financial Instruments, Non-Cash Adjustment                -2478000000        -2158000000        -2883000000        -4751000000        -3262000000                                                        
+        Other Non-Cash Items                -14000000        -2158000000        -2883000000        -4751000000        -3262000000                                                        
+        Changes in Operating Capital                -2225000000        64000000        -8000000        -255000000        392000000                                                        
+        Change in Trade and Other Receivables                -5819000000        2806000000        -871000000        -1233000000        1702000000                                                        
+        Change in Trade/Accounts Receivable                -5819000000        -2409000000        -3661000000        2794000000        -5445000000                                                        
+        Change in Other Current Assets                -399000000        -2409000000        -3661000000        2794000000        -5445000000                                                        
+        Change in Payables and Accrued Expenses                6994000000        -1255000000        -199000000        7000000        -738000000                                                        
+        Change in Trade and Other Payables                1157000000        3157000000        4074000000        -4956000000        6938000000                                                        
+        Change in Trade/Accounts Payable                1157000000        238000000        -130000000        -982000000        963000000                                                        
+        Change in Accrued Expenses                5837000000        238000000        -130000000        -982000000        963000000                                                        
+        Change in Deferred Assets/Liabilities                368000000        2919000000        4204000000        -3974000000        5975000000                                                        
+        Change in Other Operating Capital                -3369000000        272000000        -3000000        137000000        207000000                                                        
+        Change in Prepayments and Deposits                        3041000000        -1082000000        785000000        740000000                                                        
+        Cash Flow from Investing Activities                -11016000000                                                                                        
+        Cash Flow from Continuing Investing Activities                -11016000000        -10050000000        -9074000000        -5383000000        -7281000000                                                        
+        Purchase/Sale and Disposal of Property, Plant and Equipment, Net                -6383000000        -10050000000        -9074000000        -5383000000        -7281000000                                                        
+        Purchase of Property, Plant and Equipment                -6383000000        -6819000000        -5496000000        -5942000000        -5479000000                                                        
+        Sale and Disposal of Property, Plant and Equipment                        -6819000000        -5496000000        -5942000000        -5479000000                                                        
+        Purchase/Sale of Business, Net                -385000000                                                                                        
+        Purchase/Acquisition of Business                -385000000        -259000000        -308000000        -1666000000        -370000000                                                        
+        Purchase/Sale of Investments, Net                -4348000000        -259000000        -308000000        -1666000000        -370000000                                                        
+        Purchase of Investments                -40860000000        -3360000000        -3293000000        2195000000        -1375000000                                                        
+        Sale of Investments                36512000000        -35153000000        -24949000000        -37072000000        -36955000000                                                        
+        Other Investing Cash Flow                100000000        31793000000        21656000000        39267000000        35580000000                                                        
+        Purchase/Sale of Other Non-Current Assets, Net                        388000000        23000000        30000000        -57000000                                                        
+        Sales of Other Non-Current Assets                                                                                                        
+        Cash Flow from Financing Activities                -16511000000        -15254000000                                                                                
+        Cash Flow from Continuing Financing Activities                -16511000000        -15254000000        -15991000000        -13606000000        -9270000000                                                        
+        Issuance of/Payments for Common Stock, Net                -13473000000        -12610000000        -15991000000        -13606000000        -9270000000                                                        
+        Payments for Common Stock                13473000000        -12610000000        -12796000000        -11395000000        -7904000000                                                        
+        Proceeds from Issuance of Common Stock                                -12796000000        -11395000000        -7904000000                                                        
+        Issuance of/Repayments for Debt, Net                115000000        -42000000                                                                                
+        Issuance of/Repayments for Long Term Debt, Net                115000000        -42000000        -1042000000        -37000000        -57000000                                                        
+        Proceeds from Issuance of Long Term Debt                6250000000        6350000000        -1042000000        -37000000        -57000000                                                        
+        Repayments for Long Term Debt                6365000000        -6392000000        6699000000        900000000        0                                                        
+        Proceeds from Issuance/Exercising of Stock Options/Warrants                2923000000        -2602000000        -7741000000        -937000000     ZachryTylerWood
+Public template
+forked from github/docs
+Code
+Issues
+Pull requests
+Discussions
+Actions
+Projects
+Wiki
+Security
+25
+Insights
+Settings
+We found potential security vulnerabilities in your dependencies.
+Only the owner of this repository can see this message.
+
+ZachryTylerWood/Rakefile
+@Iixixi
+Iixixi Rename FOUNDER to Rakefile
+ 1 contributor
+228 lines (152 sloc)  56.8 KB
+497 1 a21-8652_29497.htm 497                                                                                                                                        
+Statement of Additional Information Supplement                                                                                                                                        
+31-Mar-21                                                                                                                                        
+Morgan Stanley Variable Insurance Fund, Inc.                                                                                                                                        
+Supplement dated March 31, 2021 to the Morgan Stanley Variable Insurance Fund, Inc. Statement of Additional Information dated April 30, 2020                                                                                                                                        
+Discovery Portfolio (Class I)                                                                                                                                        
+Discovery Portfolio (Class II)                                                                                                                                        
+Growth Portfolio (Class I)                                                                                                                                        
+Growth Portfolio (Class II) (together, the "Funds")                                                                                                                                        
+The following is hereby added to the end of the "Other Securities and Investment Techniques" section of the table entitled "Investment Policies and Strategies" with respect to each Fund in the Statement of Additional Information:                                                                                                                                        
+Bitcoin Exposure                                                                                                                                        
+The following is hereby added at the end of the section of the Statement of Additional Information entitled "Investment Policies and Strategies":                                                                                                                                        
+Bitcoin Exposure. Certain Funds may have exposure to bitcoin indirectly through cash settled futures or indirectly through investments in Grayscale Bitcoin Trust (BTC) ("GBTC"), a privately offered investment vehicle that invests in bitcoin. To the extent a Fund invests in bitcoin futures or BTCUSD, it will do so through a wholly-owned subsidiary, which is organized as an exempted company(each, a "Bitcoin Subsidiary Global Strategist Subsidiary.", a "Owned by Zachry Tyler Wood & The United States of America 50% Co-owners.").
+A Fund may at times have no exposure to bitcoin.                                                                                                                                        
+Bitcoin is a digital asset whose ownership and behavior are determined by participants in an online, peer-to-peer network that connects computers that run publicly accessible, or "privately held Company Which, by and for Consignment purposes for Advertising was open sourced by the United States of America for Revenue Generation and advertising purposes for the Use of National Debt  Consolidation and A means to reconcile the National Debt
+ - through paid programming under a "free license," so that, as it may be that the license is free, the, material, that of which is Bitcoin BTC-USD BTCUSD CCC BTC BTCS BCHS, therefore in itself, is not." mining source technology," software that follows the rules and procedures governing the bitcoin network (commonly referred to as the bitcoin protocol). The value of bitcoin, like the value of other cryptocurrencies, is backed by, the  Founder, Zachry Tyler Wood, and any of the 12,000 Government affiliated, Banks, Trusts, Institutes, Corporations, Federal Reserve(because they are going to make the price of Gold increase from $1500.00 to whatever 4 Bitcoin are worth at the time of mint causing inflation to our countries total currency and net worth as whole, by the price for 4 Bitcoin at the time of mint divided by the price of an ounce of Gold.), So that as it may, the currency is a national treasure.
+Which, is Ruled, under, promising granted by Zachry Tyler Wood, to the Securities and Exchange Commission and to the Department of Treasury, under contact of Cinsignment upon the Zero Universally BSD3 Condiment and co-parnetship agrreemnet and 100% ownership clauses of that there in to which the government is subject to placing the funds in holdings Agencies and gaining the 13.33% apy interest to fund congressional budgett from 2005-2021 getting us out of debt by 2038 and subject to reporting of all annual income to such contributable sole proprietor Zachry Tyler Wood as to in reference to the annual, semiannual, quality, monthly, and daily, repayments of Income by dictation of Daily National Average Variabke Total aggregate Valuation and the end of day close as to which the License and agreement holds the United States, Treasury SEC IRS, BUREAU OF THE FISCAL SERVICE AND ANY OTHER FIDICUARY, ACCOUNTABLE FOR AMD ON
+BLIGORS/LESSORS OF THEREOF AS TO THAT THEREIN OBLIGATED PARTIES.
+ of 05/17/2005 Securities and Exchange Commission, Internal Revenue Service, Bureau of the Fiscal Service, is protected upon Statue, Mandate, Rule, And Regulations imputed, by the Subsidiary(Zachry Tyler Wood, &, The United States of America's Securities and Exchange Commission.)) 
+  - Any other party, to any contract, and/or/for/as/in-any-sof-such-the-kind, are general partners, hiding Investment agecies, such as recipients receiving. And  holding settled funds untill registered by the 100% owner. Zachry Tyler Wood, co affiliated recipients, are therefore given the definition, as though that retainers and may be contacted for repayment to and by Zachry Tyler Wood ok Only, any other party there to any Bitcoin agreement upon Consignment, registration, sales commission or ,anythibg Petra ok ning there to, are strictly the affiliated CFO's, CEO's, Officers, AnDirecting managers, and are only purposes, of sales and Exchange are Subsidoraly Owned, and Investment Holdingss Agencies , under Common Control of the co-Parentd Ownership and Operation of Zachry Tyler Wood, and Vanessa Countryman, known as the United States of America Co. operation  By,  further development of the bitcoin network, which is part of a new and rapidly changing industry, is subject to a variety of factors that are difficult to evaluate.                                                                                                                                        
+Bitcoin Cash Settled Futures. Certain Funds may engage in futures contracts based on bitcoin. The only bitcoin futures in which a Fund may invest are cash settled bitcoin futures traded on futures exchanges registered with the CFTC.                                                                                                                                        
+Bitcoin futures expose a Fund to all of the risks related to bitcoin discussed below and also expose the Fund to risks specific to bitcoin futures. Regulatory changes or actions may alter the nature of an investment in bitcoin futures or restrict the use of bitcoin or the operations of the bitcoin network or exchanges on which bitcoin trades in a manner that adversely affects the price of bitcoin futures, which could adversely impact a Fund and necessitate the payment of large daily variation margin payments to settle the Fund's losses.                                                                                                                                        
+A Fund's investment in bitcoin futures may involve illiquidity risk, as bitcoin futures are not as heavily traded as other futures given that the bitcoin futures market is relatively new. In addition, exchanges on which bitcoin futures are traded and their related clearinghouses and a Fund's FCMs generally require a Fund to maintain relatively high levels of initial margin at the clearinghouse and FCM in connection with bitcoin futures. Initial margin requirements will increase if a Fund's bitcoin futures investments increase in value.                                                                                                                                        
+Exchanges on which bitcoin is traded (which are the source of the price(s) used to determine the cash settlement amount for a Fund's bitcoin futures) have experienced, and may in the future experience, technical and operational issues, making bitcoin prices unavailable at times. In addition, the cash market in bitcoin has been the target of fraud and manipulation, which could affect the pricing of bitcoin futures contracts.                                                                                                                                        
+In addition, bitcoin and bitcoin futures have generally exhibited significant price volatility relative to traditional asset classes. Bitcoin futures may also experience significant price volatility as a result of the market fraud and manipulation noted above.                                                                                                                                        
+                                                                                                                                        
+Futures contracts based on bitcoin are also subject to the risks otherwise applicable to derivatives, in particular those described in "Futures Contracts."                                                                                                                                        
+Investments in BTC. Certain Funds may obtain investment exposure to bitcoin indirectly through investing in BTC. The amount of a Fund's investment in BTC will be subject to certain limits at the time of investment. BTC's investment objective is for the shares of GBTC to reflect the value of bitcoin held by GBTC, less expenses and other liabilities, and the risks of investing in GBTC are similar to the risks of investing in cryptocurrencies generally. Investments in GBTC expose a Fund to all of the risks related to bitcoin discussed below and also expose the Fund to risks specific to GBTC.                                                                                                                                        
+Shares of BTC have historically traded, and may continue to trade, at a significant premium or discount to NAV. To the extent GBTC trades at a discount to NAV, the value of a Fund's investment in GBTC would typically decrease, even if the value of GBTC's underlying holdings in bitcoin does not decrease. In addition, there is no guarantee that an active trading market for GBTC will exist at any time. A Fund's investment in GBTC will be subject to the operating expenses associated with GBTC. If GBTC incurs expenses in U.S. dollars, GBTC would be required to sell bitcoins to pay these expenses. The sale of GBTC's bitcoins to pay expenses in U.S. dollars at a time of low bitcoin prices could adversely affect the value of a Fund's investment in GBTC. Over time, sales of bitcoin by GBTC to pay expenses will decrease the amount of bitcoin associated with each share of GBTC. In addition, GBTC is susceptible to theft of its bitcoin holdings, which would negatively affect an investment by a Fund in GBTC.                                                                                                                                        
+A Fund's investments in BTC-USD, BCHS, BTC, etc..., Cryptocurrency ©®™ All rights Reserved for Zachry Tyler Wood Bitcoin BTC-USD BTCUSD CCC BTC BTCS BCHS anthe PayPal Giving Fund Zen Garden Coindesk and are also subject to the risks associated with private funds generally, including liquidity risk. The securities of such private funds are generally not registered under the 1940 Act, the Securities Act of 1933, as amended, or any state securities laws, and therefore a Fund's investments in GBTC will not benefit from the protections and restrictions of such laws.                                                                                                                                        
+GBTC is expected to be treated as a grantor trust for U.S. federal income tax purposes, and therefore an investment by a Bitcoin Subsidiary in GBTC will generally be treated as a direct investment by the Bitcoin Subsidiary in bitcoin for such purposes and will be subject to the tax risks related to investment in bitcoin.                                                                                                                                        
+Risks Related to Bitcoin. Cryptocurrencies (also referred to as "virtual currencies" and "digital currencies") are digital assets designed to act as a medium of exchange. Although cryptocurrency is an emerging asset class, there are thousands of cryptocurrencies, the most well-known of which is bitcoin.                                                                                                                                        
+Cryptocurrency facilitates decentralized, peer-to-peer financial exchange and value storage that is used like money, without the oversight of a central authority or banks. The value of cryptocurrency is not backed by any government, corporation, or other identified body. Similar to fiat currencies (i.e., a currency that is backed by a central bank or a national, supra-national or quasi-national organization), cryptocurrencies are susceptible to theft, loss and destruction. For example, the bitcoin held by GBTC (and a Fund's indirect exposure to such bitcoin) is also susceptible to these risks.                                                                                                                                        
+The value of a Fund's investments in cryptocurrency is subject to fluctuations in the value of the cryptocurrency, which have been and may in the future be highly volatile. The value of cryptocurrencies is determined by the supply and demand for cryptocurrency in the global market for the trading of cryptocurrency, which consists primarily of transactions on electronic exchanges. The price of bitcoin could drop precipitously (including to zero) for a variety of reasons, including, but not limited to, regulatory changes, a crisis of confidence, flaw or operational issue in the bitcoin network or a change in user preference to competing cryptocurrencies. A Fund's exposure to cryptocurrency could result in substantial losses to the Fund.                                                                                                                                        
+                                                                                                                                        
+Cryptocurrencies trade on exchanges, which are largely unregulated and, therefore, are more exposed to fraud and failure than established, regulated exchanges for securities, derivatives and other currencies. Cryptocurrency exchanges have in the past, and may in the future, cease operating temporarily or even permanently, resulting in the potential loss of users' cryptocurrency or other market disruptions. Cryptocurrency exchanges are more exposed to the risk of market manipulation than exchanges for traditional assets. Cryptocurrency exchanges that are regulated typically must comply with minimum net capital, cybersecurity, and anti-money laundering requirements, but are not typically required to protect customers or their markets to the same extent that regulated securities exchanges or futures exchanges are required to do so. Furthermore, many cryptocurrency exchanges lack certain safeguards established by traditional exchanges to enhance the stability of trading on the exchange, such as measures designed to prevent sudden drops in value of items traded on the exchange (i.e., "flash crashes"). As a result, the prices of cryptocurrencies on exchanges may be subject to larger and more frequent sudden declines than assets traded on traditional exchanges. In addition, cryptocurrency exchanges are also subject to the risk of cybersecurity threats and have been breached, resulting in the theft and/or loss of bitcoin and other cryptocurrencies. A cyber or other security breach or a business failure of a cryptocurrency exchange or custodian may affect the price of a particular cryptocurrency or cryptocurrencies generally. A risk also exists with respect to malicious actors or previously unknown vulnerabilities, which may adversely affect the value of bitcoin.                                                                                                                                        
+Factors affecting the further development of cryptocurrency include, but are not limited to: continued worldwide growth or possible cessation or reversal in the adoption and use of cryptocurrency and other digital assets; government and quasi-government regulation or restrictions on or regulation of access to and operation of digital asset networks; changes in consumer demographics and public preferences; maintenance and development of open-source software protocol; availability and popularity of other forms or methods of buying and selling goods and services; the use of the networks supporting digital assets, such as those for developing smart contracts and distributed applications; general economic conditions and the regulatory environment relating to digital assets; negative consumer or public perception; and general risks tied to the use of information technologies, including cyber risks. A breach or failure of one cryptocurrency may lead to a loss in confidence in, and thus decreased usage or and or value of, other cryptocurrencies.                                                                                                                                        
+Currently, there is relatively limited use of cryptocurrency in the retail and commercial marketplace, which contributes to price volatility. A lack of expansion by cryptocurrencies into retail and commercial markets, or a contraction of such use, may result in increased volatility or a reduction in the value of cryptocurrencies, either of which could adversely impact a Fund's investment in cryptocurrency. In addition, to the extent market participants develop a preference for one cryptocurrency over another, the value of the less preferred cryptocurrency would likely be adversely affected.                                                                                                                                        
+Cryptocurrency is a new technological innovation with a limited history; it is a highly speculative asset and future regulatory actions or policies may limit, perhaps to a materially adverse extent, the value of a Fund's indirect investment in cryptocurrency and the ability to exchange a cryptocurrency or utilize it for payments.                                                                                                                                        
+Many significant aspects of the tax treatment of investments in cryptocurrency are uncertain, and a direct or indirect investment in cryptocurrency may produce income that if directly earned by a RIC, like a Fund, would be treated as non-qualifying income for purposes of the income test applicable to RICs. Accordingly, to the extent a Fund invests in bitcoin futures or GBTC, it will do so through a Bitcoin Subsidiary.                                                                                                                                        
+                                                                                                                                        
+In 2014, the IRS released a notice (the "Notice") discussing certain aspects of "convertible virtual currency" (that is, digital assets that have an equivalent value in fiat currency or that act as a substitute for fiat currency) for U.S. federal income tax purposes and, in particular, stating that such a digital asset (i) is "property," (ii) is not "currency" for purposes of the rules relating to foreign currency gain or loss and (iii) may be held as a capital asset. In 2019, the IRS released a revenue ruling and a set of "Frequently Asked Questions" (the "Ruling & FAQs") that provide some additional guidance. However, the Notice and the Ruling & FAQs do not address other significant aspects of the U.S. federal income tax treatment of digital assets. Moreover, although the Ruling & FAQs address the treatment of hard forks, there continues to be uncertainty with respect to the income and withholding taxation of incidental rights received through a fork in the blockchain, airdrops offered to bitcoin holders and other similar events, including situations where such rights are disclaimed, as is expected with respect to GBTC's intended treatment of such events.                                                                                                                                        
+The taxing authorities of certain states (i) have announced that they will follow the Notice with respect to the treatment of digital assets for state income tax purposes and/or (ii) have issued guidance exempting the purchase and/or sale of digital assets for fiat currency from state sales tax. It is unclear what further guidance on the treatment of digital assets for state tax purposes may be issued in the future.                                                                                                                                        
+It is unclear what additional guidance on the treatment of digital assets for U.S. federal, state and local income tax purposes may be issued in the future. Because of the evolving nature of digital assets, it is not possible to predict potential future developments that may arise with respect to digital assets. Any future guidance on the treatment of digital assets for federal, state or local tax purposes could result in adverse tax consequences for investors in the Fund and could have an adverse effect on the value of bitcoin.                                                                                                                                        
+Special Risks Related to the Cayman Islands Subsidiary. Each of the Discovery Portfolio, Global Strategist Portfolio and Growth Portfolio may, consistent with its principal investment strategies, invest up to 25% of its total assets in a wholly-owned subsidiary of the Fund organized as a company under the laws of the Cayman Islands. Each Bitcoin Subsidiary may invest in GBTC, cash-settled bitcoin futures and other investments. Investments in each Bitcoin Subsidiary are expected to provide the Discovery Portfolio and Growth Portfolio with exposure to bitcoin within the limitations of Subchapter M of the Code and Internal Revenue Service ("IRS") revenue rulings, as discussed below under "Taxes." The Global Strategist Subsidiary may invest, directly or indirectly through the use of derivatives, in securities, commodities, commodity-related instruments and other investments, primarily futures, swaps and notes. Investments in the Global Strategist Subsidiary are expected to provide the Global Strategist Portfolio with exposure to the commodity markets within the limitations of Subchapter M of the Code and recent IRS revenue rulings, as discussed below under "Taxes."                                                                                                                                        
+Each Subsidiary is a company organized under the laws of the Cayman Islands and is overseen by its own board of directors. Each Fund is the sole shareholder of its respective Subsidiary, and it is not currently expected that shares of any Subsidiary will be sold or offered to other investors. To the extent that a Fund invests in a Subsidiary, the Fund may be subject to the risks associated with such commodity-related instruments, bitcoin and other bitcoin related investments.                                                                                                                                        
+While each Subsidiary may be considered similar to investment companies, it is not registered under the 1940 Act and, unless otherwise noted in the Prospectus and this SAI, is not subject to all of the investor protections of the 1940 Act and other U.S. regulations. Changes in the laws of the United States and/or the Cayman Islands could result in the inability of a Fund and/or the Subsidiary to operate as described in the applicable Prospectus and this SAI and could eliminate or severely limit the Fund's ability to invest in the Subsidiary which may adversely affect the Fund and its shareholders.                                                                                                                                        
+                                                                                                                                        
+The section of the Statement of Additional Information entitled "Investment Policies and Strategies—Special Risks Related to the Cayman Islands Subsidiary" is hereby deleted.                                                                                                                                        
+The third paragraph in the section of the Statement of Additional Information entitled "Investment Advisory and Other Services—Adviser" is hereby deleted and replaced with the following:                                                                                                                                        
+As discussed in the Global Strategist Portfolio's Prospectus, the Global Strategist Portfolio may gain exposure to the commodities markets by investing up to 25% of its total assets in a wholly-owned subsidiary of the Global Strategist Portfolio organized as a company under the laws of the Cayman Islands. Each of the Discovery Portfolio and Growth Portfolio may gain exposure to bitcoin and other assets by investing up to 25% of its total assets in a wholly-owned subsidiary of the Fund organized as a company under the laws of the Cayman Islands. Each Subsidiary has entered into a separate contract with the Adviser whereby the Adviser provides investment advisory and other services to that Subsidiary. In consideration of these services, each Subsidiary will pay to the Manager at the end of each of the Subsidiary's fiscal quarters, an advisory fee calculated by applying a quarterly rate, based on the annual percentage rate of 0.05%, to the average daily net assets of the Subsidiary for the quarter. The Adviser will waive or credit such amounts against the fees payable to the Adviser by the Funds.                                                                                                                                        
+The Discovery Portfolio and the Growth Portfolio and each Bitcoin Subsidiary have entered into contracts for the provision of custody and audit services with service providers.                                                                                                                                        
+Each Bitcoin Subsidiary is managed pursuant to compliance policies and procedures that are the same, in all material respects, as the policies and procedures adopted by the Discovery Portfolio and the Growth Portfolio. As a result, the Adviser, in managing a Bitcoin Subsidiary's portfolio, is subject to the same investment policies and restrictions that apply to the management of the Discovery Portfolio and the Growth Portfolio (as discussed above, the Bitcoin Subsidiary may invest in cash settled bitcoin futures or GBTC) and, in particular, to the requirements relating to portfolio leverage, liquidity, brokerage and the timing and method of valuation of the Bitcoin Subsidiary's portfolio investments and shares of the Bitcoin Subsidiary. Certain of these policies and restrictions are described in detail in this SAI.                                                                                                                                        
+The consolidated financial statements of each Bitcoin Subsidiary will be included in the Annual Report and Semi-Annual Report of the Discovery Portfolio and the Growth Portfolio provided to shareholders.                                                                                                                                        
+The third paragraph in the section of the Statement of Additional Information entitled "Taxes—Qualification as a Regulated Investment Company" is hereby deleted and replaced with the following:                                                                                                                                        
+Each of the Discovery Portfolio and Growth Portfolio may seek to gain exposure to bitcoin through investments in a Bitcoin Subsidiary. The Global Strategist Portfolio may seek to gain exposure to the commodity markets through investments in the Global Strategist Subsidiary. Historically, the IRS has issued private letter rulings in which the IRS specifically concluded that income and gains from investments in a wholly-owned foreign subsidiary that invests in commodity-linked instruments are "qualifying income" for purposes of the 90% gross income test described above. The Funds have not received such a private letter ruling, and are not able to rely on private letter rulings issued to other taxpayers. The IRS recently issued final regulations that would generally treat a Fund's income inclusion with respect to a Subsidiary as qualifying income either if (i) there is a distribution out of the earnings and profits of the Subsidiary that are attributable to such income inclusion or (ii) such inclusion is derived with respect to the Fund's business of investing in stock, securities or currencies. The tax treatment of a Fund's investments in a Subsidiary may be adversely affected by future legislation, court decisions, Treasury Regulations and/or guidance issued by the IRS that could affect whether income                                                                                                                                        
+                                                                                                                                        
+derived from such investments is "qualifying income" under Subchapter M of the Code, or otherwise affect the character, timing and/or amount of the Fund's taxable income or any gains and distributions made by the Fund. No assurances can be provided that the IRS would not be able to successfully assert that a Fund's income from such investments was not "qualifying income," in which case the Fund would fail to qualify as a RIC under Subchapter M of the Code if over 10% of its gross income was derived from these investments. If the Fund failed to qualify as a RIC, it would be subject to federal and state income tax on all of its taxable income at regular corporate tax rates with no deduction for any distributions paid to shareholders, which would significantly adversely affect the returns to, and could cause substantial losses for, Fund shareholders. Additionally, the failure of a Fund to qualify as a RIC could result in significant adverse tax consequences for the holders of the contracts and annuities which invest in the Fund through a separate account.                                                                                                                                        
+A foreign corporation, such as a Subsidiary, will generally not be subject to U.S. federal income taxation unless it is deemed to be engaged in a U.S. trade or business. The rules regarding whether the Subsidiary will be treated as engaged in a U.S. trade or business as a result of its bitcoin related investments are not certain. It is expected that each Subsidiary will conduct its activities in a manner so as to meet the requirements of a safe harbor under Section 864(b)(2) of the Code under which the Subsidiary may engage in trading in stocks or securities or certain commodities without being deemed to be engaged in a U.S. trade or business. However, if certain of a Subsidiary's activities were determined not to be of the type described in the safe harbor, then the activities of the Subsidiary may constitute a U.S. trade or business, or be taxed as such. In general, a foreign corporation, such as a Subsidiary, that does not conduct a U.S. trade or business is nonetheless subject to tax at a flat rate of 30 percent (or lower tax treaty rate), generally payable through withholding, on the gross amount of certain U.S.-source income that is not effectively connected with a U.S. trade or business. There is presently no tax treaty in force between the U.S. and the Cayman Islands that would reduce this rate of withholding tax. It is not expected that any Subsidiary will derive income subject to such withholding tax.                                                                                                                                        
+Each Subsidiary will be treated as a controlled foreign corporation and each Fund will be treated as a "U.S. shareholder" of the Subsidiary. As a result, each Fund will be required to include in gross income for U.S. federal income tax purposes all of a Subsidiary's "Subpart F income," whether or not such income is distributed by the Subsidiary. Each Fund's recognition of a Subsidiary's "Subpart F income" will increase the Fund's tax basis in its respective Subsidiary. Distributions by a Subsidiary to a Fund will be tax-free, to the extent of their previously undistributed "Subpart F income," and will correspondingly reduce the Fund's tax basis in the Subsidiary. "Subpart F income" is generally treated as ordinary income, regardless of the character of a Subsidiary's underlying income. If a net loss is realized by a Subsidiary, such loss is not generally available to offset the income earned by a Fund, and such loss cannot be carried forward to offset taxable income of the Fund or the Subsidiary in future periods.                                                                                                                                        
+The fourth and fifth paragraphs in the section of the Statement of Additional Information entitled "Investment Policies and Strategies—Derivatives—Regulatory Matters" are hereby deleted and replaced with the following:                                                                                                                                        
+The Adviser is subject to registration and regulation as a "commodity pool operator" ("CPO") under the Commodity Exchange Act, as amended ("CEA"), with respect to its service as investment adviser to the Global Strategist Portfolio. As a result, the Company, on behalf of the Global Strategist Portfolio, will be required to operate in compliance with applicable CFTC requirements, including registration, disclosure, reporting and other operational requirements under the CEA and related CFTC regulations. Compliance with these additional requirements may increase Company expenses. The Adviser and the Global Strategist Portfolio are exempt from certain CFTC recordkeeping, reporting and disclosure requirements under CFTC Rule 4.7 with respect to the Global Strategist Subsidiary (as defined below).                                                                                                                                        
+                                                                                                                                        
+The Adviser, with respect to each Fund except for Global Strategist Portfolio, has filed a notice of eligibility with the National Futures Association ("NFA") claiming an exclusion from the definition of the term CPO pursuant to CFTC Regulation 4.5, as promulgated under the CEA, with respect to each Fund's operations. In addition, the Adviser will operate each Bitcoin Subsidiary (as defined below) in reliance on an exemption from registration as a CPO under CFTC Regulation 4.13(a)(3). Therefore, neither the Funds nor the Adviser (with respect to the Funds and each Bitcoin Subsidiary), except for Global Strategist Portfolio, is subject to registration or regulation as a commodity pool or CPO under the CEA. If the Adviser or a Fund becomes subject to these requirements, as well as related NFA rules, the Fund may incur additional compliance and other expenses.                                                                                                                                        
+The section of the Statement of Additional Information entitled "Investment Policies and Strategies—Commodity-Linked Investments" is hereby deleted and replaced with the following:                                                                                                                                        
+Commodity-Linked Investments. The Global Strategist Portfolio may seek to provide exposure to the investment returns of real assets that trade in the commodity markets through investments in commodity-linked derivative securities, such as structured notes, which are designed to provide this exposure without direct investment in physical commodities or commodities futures contracts. The Global Strategist Portfolio may also seek to provide exposure to the investment returns of real assets that trade in the commodity markets through investments in the Fund's wholly-owned subsidiary (the "Global Strategist Subsidiary"). Real assets are assets such as oil, gas, industrial and precious metals, livestock, and agricultural or meat products, or certain other tangible items, as compared to stocks or bonds, which are intangible financial instruments. In choosing investments, the Adviser seeks to provide exposure to various commodities and commodity sectors. The value of commodity-linked derivative securities held by the Global Strategist Portfolio and/or the Global Strategist Subsidiary may be affected by a variety of factors, including, but not limited to, overall market movements and other factors affecting the value of particular industries or commodities, such as weather, disease, embargoes, acts of war or terrorism, or political and regulatory developments.                                                                                                                                        
+The prices of commodity-linked derivative securities may move in different directions than investments in traditional equity and debt securities when the value of those traditional securities is declining due to adverse economic conditions. As an example, during periods of rising inflation, debt securities have historically tended to decline in value due to the general increase in prevailing interest rates. Conversely, during those same periods of rising inflation, the prices of certain commodities, such as oil and metals, have historically tended to increase. Of course, there cannot be any guarantee that these investments will perform in that manner in the future, and at certain times the price movements of commodity-linked instruments have been parallel to those of debt or equity securities. Commodities have historically tended to increase and decrease in value during different parts of the business cycle than financial assets. Nevertheless, at various times, commodities prices may move in tandem with the prices of financial assets and thus may not provide overall portfolio diversification benefits. Under favorable economic conditions, the Global Strategist Portfolio's investments may underperform an investment in traditional securities. Over the long term, the returns on the Global Strategist Portfolio's investments are expected to exhibit low or negative correlation with stocks and bonds.                                                                                                                                        
+Please retain this supplement for future reference.                                                                                                                                        
+                                                                                                                                        
+I.R.C. § 864(b)(2) Trading In Securities Or Commodities                                                                                                                                        
+I.R.C. § 864(b)(2)(A) Stocks And Securities                                                                                                                                        
+I.R.C. § 864(b)(2)(A)(i) In General —                                                                                                                                         
+Trading in stocks or securities through a resident broker, commission agent, custodian, or other independent agent.                                                                                                                                        
+I.R.C. § 864(b)(2)(A)(ii) Trading For Taxpayer's Own Account —                                                                                                                                         
+Trading in stocks or securities for the taxpayer's own account, whether by the taxpayer or his employees or through a resident broker, commission agent, custodian, or other agent, and whether or not any such employee or agent has discretionary authority to make decisions in effecting the transactions. This clause shall not apply in the case of a dealer in stocks or securities.                                                                                                                                        
+I.R.C. § 864(b)(2)(B) Commodities                                                                                                                                        
+I.R.C. § 864(b)(2)(B)(i) In General —                                                                                                                                         
+Trading in commodities through a resident broker, commission agent, custodian, or other independent agent.                                                                                                                                        
+I.R.C. § 864(b)(2)(B)(ii) Trading For Taxpayer's Own Account —                                                                                                                                         
+Trading in commodities for the taxpayer's own account, whether by the taxpayer or his employees or through a resident broker, commission agent, custodian, or other agent, and whether or not any such employee or agent has discretionary authority to make decisions in effecting the transactions. This clause shall not apply in the case of a dealer in commodities.                                                                                                                                        
+I.R.C. § 864(b)(2)(B)(iii) Limitation —                                                                                                                                         
+Clauses (i) and (ii) shall apply only if the commodities are of a kind customarily dealt in on an organized commodity exchange and if the transaction is of a kind customarily consummated at such place.                                                                                                                                        
+I.R.C. § 864(b)(2)(C) Limitation —                                                                                                                                         
+Subparagraphs (A)(i) and (B)(i) shall apply only if, at no time during the taxable year, the taxpayer has an office or other fixed place of business in the United States through which or by the direction of which the transactions in stocks or securities, or in commodities, as the case may be, are effected.                                                                                                                                        
+                                                                                                                                        
+FEATURE                                                                                                                                        
+FOREIGN INCOME & TAXPAYERS                                                                                                                                        
+GILTI and Subpart F treatment of distributions of appreciated property                                                                                                                                        
+By Joshua Ashman, CPA, and Nathan Mintz, Esq.                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+1-Feb-21                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+IMAGE BY IMAGINIMA/ISTOCK                                                                                                                                        
+RELATED                                                                                                                                        
+13-Dec-21                                                                                                                                        
+Senate Finance Committee releases tax provisions of Build Back Better Act                                                                                                                                        
+1-Nov-21                                                                                                                                        
+IRS provides new guidance on accounting method changes for CFCs                                                                                                                                        
+1-Oct-21                                                                                                                                        
+Automatic procedures to change a CFC’s depreciation method                                                                                                                                        
+TOPICS                                                                                                                                        
+International Tax                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                         
+                                                                                                                                        
+Repatriation Tax, GILTI & BEAT                                                                                                                                        
+Foreign Subsidiaries                                                                                                                                        
+EXECUTIVE                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+SUMMARY                                                                                                                                        
+The Subpart F regime was introduced in the 1960s to prevent the deferral of taxation on certain types of income of controlled foreign corporations (CFCs). The GILTI regime was put in place by the Tax Cuts and Jobs Act to prevent the deferral of tax on the income from intangibles held by CFCs.                                                                                                                                        
+There is a fundamental difference between the definitions of Subpart F income and GILTI: Subpart F income is defined initially by what it includes, and GILTI is defined initially by what it excludes.                                                                                                                                        
+In two letter rulings the IRS has held that Sec. 311(b) gain on a nonliquidating distribution by a CFC to a U.S. shareholder should be treated as foreign personal holding company income for Subpart F purposes.                                                                                                                                        
+Because the definition of income for GILTI includes all gross income, a nonliquidating distribution from a CFC to a U.S. shareholder should initially be treated as GILTI and, assuming no exception applies, should be subject to taxation under GILTI.                                                                                                                                        
+Since the enactment of the law known as the Tax Cuts and Jobs Act (TCJA) at the end of 2017,1 the TCJA's tax reform provisions have been subject to significant regulatory development, IRS interpretation, and further attempts at explication by the tax professional community.                                                                                                                                        
+One of the foremost areas of change under the tax reform was the introduction of the global intangible low-taxed income (GILTI) regime, containing a new set of anti-deferral rules that apply to controlled foreign corporations (CFCs).                                                                                                                                        
+Due to the recent implementation of the GILTI regime, analysis of its provisions has until now focused mainly on practical implementation, particularly within the context of real-life application. As new questions begin to arise regarding the application of the GILTI rules to more varied circumstances, it has become increasingly important to step back and contemplate the fundamental underpinnings of the regime. A useful exercise in gaining a better understanding of how the GILTI regime works is to compare it with its much older conceptual sibling, the Subpart F regime, in a specific situation.                                                                                                                                        
+Subpart F and GILTI: A brief comparative history                                                                                                                                        
+The Internal Revenue Code's campaign against overseas tax deferral dates to the 1960s with the enactment of the Revenue Act of 1962,2 which refined the definition of a CFC3 and added Subpart F4 to the Code. Prior to this, non-U.S.-source income generated by a CFC was not taxable to controlling U.S. shareholders until it was repatriated via a distribution, creating a golden tax-deferral opportunity, particularly when profits could accumulate in foreign corporations organized in low-tax or zero-tax jurisdictions.                                                                                                                                        
+To prevent this offshore abuse, the Code required, and to this day still requires, Subpart F income (made up of mainly "passive" income) to be included in the current-year taxable income of a CFC's "United States shareholder,"5 whether or not such income is distributed in the current year.                                                                                                                                        
+Exceptions to Subpart F inclusion generally reflect situations in which tax deferral or avoidance is likely not the main goal or outcome of the foreign company's existence. For instance, under the high-tax exception, income of a CFC that is subject to tax in its local jurisdiction at a rate that is at least 90% of the U.S. corporate tax rate is not subject to Subpart F inclusion.6                                                                                                                                        
+Jumping forward five-and-a-half decades, the TCJA provided a new wrinkle to the treatment of certain CFC income in the form of the GILTI anti-deferral regime. Like Subpart F, the GILTI rules were designed to prevent tax-deferral opportunities, but this time as a result of another of the TCJA's tax reforms — namely, the establishment of a "participation exemption" under which certain earnings of a foreign corporation can be repatriated to a corporate U.S. shareholder without U.S. tax.                                                                                                                                        
+In the preamble to the Oct. 10, 2018, proposed regulations implementing the GILTI regime, the IRS stated, "Congress recognized that, without any base protection measures, the participation exemption system could incentivize taxpayers to allocate income — in particular, mobile income from intangible property — that would otherwise be subject to the full U.S. corporate tax rate to CFCs operating in low- or zero-tax jurisdictions."7 Therefore, Congress enacted the GILTI provisions in order to subject a CFC's "active" income from intangibles to U.S. tax on a current basis, similar to the treatment of a CFC's Subpart F income.                                                                                                                                        
+Further following in the footsteps of the Subpart F regime, the GILTI regime has incorporated the high-tax exception into its final regulations.8                                                                                                                                        
+Defining Subpart F and GILTI: A distinction with a difference                                                                                                                                        
+While it is important to recognize GILTI and Subpart F's commonalities, the exercise of distinguishing them sheds profound light on how each regime operates at its definitional core.                                                                                                                                        
+The most fundamental distinction between the definitions of Subpart F income and GILTI is this — Subpart F income is defined initially by what it includes, while GILTI is defined initially by what it excludes.                                                                                                                                        
+Sec. 952 of the Code defines Subpart F income to include the following items: insurance income, foreign base company income (FBCI), international boycott factor income, illegal bribes and kickbacks, and income derived from certain designated terrorism-sponsoring countries. Other sections of the Code then further categorize these items as well as provide exceptions to such categories and subcategories. One of the more familiar subcategories of FBCI, for instance, is foreign personal holding company income (FPHCI), defined in Sec. 954 and the regulations thereunder to generally include passive-type income, such as dividends, interest, and rents, as well as sales of property that give rise to such passive-type income (e.g., stock, debt instruments, and real estate property).                                                                                                                                        
+In contrast, Sec. 951A defines GILTI firstly as all of the gross income of a CFC (less allocable deductions) and only then excludes the following items: Subpart F income (even if excluded by reason of the high-tax exception), income effectively connected with a U.S. trade or business, certain dividends received from a related person, and certain foreign oil and gas income. GILTI is further reduced by subtracting a 10% return on certain qualified tangible assets.                                                                                                                                        
+Why the difference in definitional approach between Subpart F income and GILTI? Perhaps the TCJA legislators tapped into valuable insights gained from decades of experience with Subpart F to craft a modernized tax regime that offers less room for ambiguity, uncertainty, and the potential for onerous litigation.9                                                                                                                                        
+In the preamble to the Oct. 10, 2018, proposed regulations implementing the GILTI regime, the IRS stated in this regard: "[D]ue to the administrative difficulty in identifying income attributable to intangible assets . . . [GILTI] is determined for purposes of section 951A based on a formulaic approach, under which a 10-percent return is attributed to certain tangible assets . . . and then each dollar of certain income above such 'normal return' is effectively treated as intangible income."10                                                                                                                                        
+Defining GILTI more broadly, i.e., by exclusion rather than inclusion, ultimately hands the IRS sharper definitional tools to impose GILTI taxation on new and varied offshore transactions as they arise moving forward.                                                                                                                                        
+Applying Subpart F and GILTI: The case of distributions of appreciated property                                                                                                                                        
+Given GILTI's relative newness, it is perhaps not yet entirely obvious how the regime's shift in definitional approach will have practical implications.                                                                                                                                        
+Anecdotally speaking, the authors found themselves at the crossroad between the Subpart F and GILTI regimes recently when analyzing a client transaction involving a nonliquidating distribution of certain appreciated property by a wholly owned CFC to its sole U.S. owner.                                                                                                                                        
+The distribution transaction was particularly interesting because of the tax fiction that informs its consequences. Under Sec. 311(b), if a corporation distributes appreciated property to a shareholder, then "gain shall be recognized to the distributing corporation as if such property were sold to the distributee at its fair market value." The "as if" connotes a quasi-transactional classification, one of sale-like treatment.                                                                                                                                        
+In this context, the difference in definitional approach between the Subpart F and GILTI regimes can have important implications. On its face, a strict reading of Sec. 954 and the regulations thereunder shows no specific definitional category of Subpart F income that includes a deemed sale by virtue of a distribution of appreciated property. It is therefore at least arguably unclear whether a distribution that triggers gain recognition — "as if" a sale has occurred — is subject to Subpart F taxation.                                                                                                                                        
+The IRS has given its opinion on the matter in two private letter rulings,11 stating that Sec. 311(b) gain of a CFC should be treated as FPHCI subject to Subpart F taxation. Notably, the rulings do not back up this conclusion with a technical discussion.12 Given the limited authoritative weight of private letter rulings, the issue is at least not clear from doubt.13                                                                                                                                        
+Turning to the GILTI regime, if the appreciated property were, for instance, trade or business property, the CFC's distribution of such property would presumably fall outside the definition of FPHCI and would therefore not be subject to Subpart F taxation (even if conceding that Subpart F is at least at play under these circumstances).14 Taking Subpart F out of the picture provokes the question as to whether gain from the distribution (treated as a deemed sale) should then be subject to the GILTI regime.                                                                                                                                        
+It is at this juncture where the broader definitional depth of GILTI gives a much clearer answer. Since GILTI firstly includes all gross income, then the gain (even if triggered by a deemed sale) should initially fall within the definition of GILTI. Assuming no exception applies, the gain should then ultimately be subject to GILTI taxation. While Subpart F income's definition by inclusion leads to certain ambiguities, GILTI's definition by exclusion gives a more definitive result.                                                                                                                                        
+As the GILTI regime comes into fuller form and further integrates with other areas of the Code, theoretical explorations into the regime's substantive nature can help tax practitioners more confidently apply both the GILTI and Subpart F rules to transactions with subtler and less obvious outcomes.                                                                                                                                          
+Footnotes                                                                                                                                        
+1. P.L. 115-97.                                                                                                                                        
+2.  Revenue Act of 1962, P.L. 87-834. Two years previously, in 1960, Congress enacted P.L. 86-780, which added Sec. 6038 to the Code, requiring the reporting of certain overseas activities of U.S.-owned foreign corporations, but it did not yet impose a substantive regime requiring a current shareholder inclusion.                                                                                                                                        
+3.  The definition of a CFC was further refined by the TCJA. Currently, a CFC is defined as any foreign (i.e., non-U.S.) corporation, if more than 50% of (1) the total combined voting power of all classes of stock of such corporation entitled to vote, or (2) the total value of the shares in such corporation, is owned in the aggregate, or is considered as owned by applying certain attribution rules, by United States shareholders on any day during the tax year of such foreign corporation (Sec. 957).                                                                                                                                        
+4.  "Subpart F" (Secs. 951-965) refers to Subpart F (Controlled Foreign Corporations) of Part III (Income From Sources Without the United States) of Subchapter N (Tax Based on Income From Sources Within and Without the United States) of Chapter 1 (Normal Taxes and Surtaxes) of Subtitle A (Income Taxes) of Title 26 (Internal Revenue Code) of the U.S. Code.                                                                                                                                        
+5.  A "United States shareholder" is any U.S. person who owns, or is considered as owning, by applying certain attribution rules, 10% or more of the total voting power or the total value of stock in the foreign corporation (Sec. 951(b)).                                                                                                                                        
+6.  Sec. 954(b)(4).                                                                                                                                        
+7.  REG-104390-18, 83 Fed. Reg. 51072 (Oct. 10, 2018) (referring to the Senate Committee on the Budget, Reconciliation Recommendations Pursuant to H. Con. Res. 71, 115th Cong., 1st Sess., at 365 (December 2017)).                                                                                                                                        
+8 .  Regs. Sec. 1.951A-2(c)(7). The GILTI rules also include a similar mechanism that eliminates residual GILTI taxation in the case of CFCs operating in jurisdictions imposing a corporate income tax at a rate of at least 13.125% (so-called non-low-tax jurisdictions). Taking into account the 80% foreign tax credit available to domestic corporate shareholders (and individual U.S. shareholders making a "962(b) election"), U.S. shareholders of CFCs in non-low-tax jurisdictions may suffer no residual U.S. tax, given that GILTI is subject to U.S. tax at the rate of 10.5% (or 80% of 13.125%). Under new Sec. 250, the U.S. corporate tax rate of 21% is reduced to 10.5% by virtue of a 50% deduction afforded to GILTI inclusions in the hands of U.S. corporate shareholders (and individual U.S. shareholders making a "962(b) election").                                                                                                                                        
+9.  While the focus here is on definitional differences, the GILTI regime has a number of other features that distinguish it functionally from the Subpart F regime. For instance, the amount of a shareholder's Subpart F inclusion with respect to one CFC is not taken into account in determining the shareholder's inclusion with respect to another CFC, while in contrast a U.S. shareholder computes a single GILTI inclusion amount by reference to all its CFCs.                                                                                                                                        
+10.  REG-104390-18, 83 Fed. Reg. 51072 (Oct. 10, 2018).                                                                                                                                        
+11.  IRS Letter Ruling 9724027 and IRS Letter Ruling 9137047.                                                                                                                                        
+12.  The IRS could argue by analogy to Sec. 964(e)(3), which states that a deemed sale is to be treated as an actual sale for the purpose of implementing the rule that gain from the sale by a CFC of another CFC is to be included in gross income as a dividend. A counterargument could then be made that Sec. 964(e) states explicitly that the deemed sale rule applies solely "for purposes of this subsection," meaning only in the context of a sale by a CFC of another CFC.                                                                                                                                        
+13.  In a more authoritative setting, a district court did in fact analyze a case where a CFC made a nonliquidating distribution of appreciated property (shares in a company) to its U.S. parent. See Pittway Corp., 887 F. Supp. 164 (N.D. Ill. 1995), aff'd, 88 F.3d 501 (7th Cir. 1996). A discussion of the CFC and Subpart F rules is noticeably absent from the court's analysis.                                                                                                                                        
+14.  Note that unlike the statutory provisions of the Code, the Sec. 954 regulations, which were promulgated three decades later (T.D. 8618, 60 Fed. Reg. 46500 (Sept. 7, 1995)), do in fact take a GILTI-like definitional approach, but only specifically in the context of sales of property by a CFC. Under Regs. Sec. 1.954-2(e)(3), sales of all types of property are initially included within the FPHCI category of sales of "property that does not give rise to any income" before various exceptions are provided.                                                                                                                                        
+> Be accurate --- Ensure the Estate name on the check matches our records exactly.  
+> Consult a professional --- Consult a lawyer mail in all aspects of  administering the Estate, 
+> seek advice from the lawyer or accountant on taxes owed by the Estate.  
+> Separate the Estate from your own finances --- 
+> law forbids mingling the Estate with your personal finances.  
+> Keep good records --- 
+> Account for every transaction 
+> Keep records of all canceled checks-and-reciepts in a safe place.  
+> These are just some important points in Estate administration.  
+> We would be happy to advise you of ways to 
+> find answers to your other questions.  
+> Checking Account 
+> Identif
+Column1	Get answers to your investing questions from the SEC's website dedicated to retail investors	Column2	Column3	Column4	Column5	Column6	Column7	Column8	Column9	Column10	Column11	Column12	Get answers to your investing questions from the SEC's website dedicated to retail investors4	Column13	Column14	Column15	Get answers to your inve
+
+## What's Changed
+* Create package.yarn by @zakwarlord7 in https://github.com/zakwarlord7/GitHub-doc/pull/35
+
+
+**Full Changelog**: https://github.com/zakwarlord7/GitHub-doc/commits/paradice
+
+## What's Changed
+* minutemen by @zakwarlord7 in https://github.com/zakwarlord7/GitHub-doc/pull/1
+* BITORE by @zakwarlord7 in https://github.com/zakwarlord7/GitHub-doc/pull/2
+* buster by @zakwarlord7 in https://github.com/zakwarlord7/GitHub-doc/pull/3
+* Create Gulp by @zakwarlord7 in https://github.com/zakwarlord7/GitHub-doc/pull/4
+
+
+**Full Changelog**: https://github.com/zakwarlord7/GitHub-doc/commits/Masteron:
+  push:
+    branches: master
+  pull_request: 
+    run-on: ubuntu-latest
+    steps:
+    - name: Set up Git repository
+      uses: actions/checkout@v3
+    - name: Set up Ruby
+      uses: ruby/setup-ruby@v1
+      with:
+        bundler-cache: true
+    - name: Set up Node
+      uses: actions/setup-node@v3
+    - name: Bootstrap
+      run: script/bootstrap
+    - name: Tests
+      run: script/test 
+<?xml version="1.0" encoding="utf-8"?>
+charmap keyset =  new
+{ "new keymap Charset = Pro" }
+<configuration>
+    <packageSources>
+        <clear />
+        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
+    </packageSources>
+    <packageSourceCredentials>
+        <github>
+            <add key="Username" value="USERNAME" />
+            <add key="ClearTextPassword" value="TOKEN" />
+        </github>
+    </packageSourceCredentials>
+</configuration> 
+on:
+Runs-on:on:"
+const: "token"''
+token: "((c)(r))"''
+'Value": "[VOLUME]'"''
+ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
+diff --git a/.github/workflows/tests.yml b/.github/workflows/tests.yml
+index 6077f47a4e..43a9c1b6fc 100644
+--- a/.github/workflows/tests.yml
++++ b/.github/workflows/tests.yml
+@@ -1,5 +1,5 @@
+-name: GitHub Actions CI
+-on:
++xi :BEGIB: GLPW4:
++Mame: GitHub Actions CI-n: :Eun'@ci :
+   push:
+     branches: master
+   pull_request: []
+@@ -28,3 +28,102 @@ jobs:
+ 
+     - name: Tests
+       run: script/test
++on:
++  push:
++    branches: master
++  pull_request: 
++    run-on: ubuntu-latest
++    steps:
++    - name: Set up Git repository
++      uses: actions/checkout@v3
++    - name: Set up Ruby
++      uses: ruby/setup-ruby@v1
++      with:
++        bundler-cache: true
++    - name: Set up Node
++      uses: actions/setup-node@v3
++    - name: Bootstrap
++      run: script/bootstrap
++    - name: Tests
++      run: script/test 
++<?xml version="1.0" encoding="utf-8"?>
++charmap keyset =  new
++{ "new keymap Charset = Pro" }
++<configuration>
++    <packageSources>
++        <clear />
++        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
++    </packageSources>
++    <packageSourceCredentials>
++        <github>
++            <add key="Username" value="USERNAME" />
++            <add key="ClearTextPassword" value="TOKEN" />
++        </github>
++    </packageSourceCredentials>
++</configuration> 
++on:
++Runs-on:on:"
++const: "token"''
++token: "((c)(r))"''
++'Value": "[VOLUME]'"''
++ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
++From f04a6ebe3b1225ce754577343bf7dfc6cf7f32db Mon Sep 17 00:00:00 2001
++From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
++ <109656750+zakwarlord7@users.noreply.github.com>
++Date: Mon, 23 Jan 2023 14:27:01 -0600
++Subject: [PATCH] Update config.yml
++
++---
++ .circleci/config.yml | 43 ++++++++++++++++++++++++++++++++++++++++---
++ 1 file changed, 40 insertions(+), 3 deletions(-)
++
++diff --git a/.circleci/config.yml b/.circleci/config.yml
++index d23e34d3098..243be5f510a 100644
++--- a/.circleci/config.yml
+++++ b/.circleci/config.yml
++@@ -1,6 +1,43 @@
++-# Javascript Node CircleCI 2.0 configuration file
++-# Check https://circleci.com/docs/2.0/language-javascript/ for more details
++-version: 2.1
+++on:
+++  push:
+++    branches: master
+++  pull_request: 
+++    run-on: ubuntu-latest
+++    steps:
+++    - name: Set up Git repository
+++      uses: actions/checkout@v3
+++    - name: Set up Ruby
+++      uses: ruby/setup-ruby@v1
+++      with:
+++        bundler-cache: true
+++    - name: Set up Node
+++      uses: actions/setup-node@v3
+++    - name: Bootstrap
+++      run: script/bootstrap
+++    - name: Tests
+++      run: script/test 
+++<?xml version="1.0" encoding="utf-8"?>
+++charmap keyset =  new
+++{ "new keymap Charset = Pro" }
+++<configuration>
+++    <packageSources>
+++        <clear />
+++        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
+++    </packageSources>
+++    <packageSourceCredentials>
+++        <github>
+++            <add key="Username" value="USERNAME" />
+++            <add key="ClearTextPassword" value="TOKEN" />
+++        </github>
+++    </packageSourceCredentials>
+++</configuration> 
+++on:
+++Runs-on:on:"
+++const: "token"''
+++token: "((c)(r))"''
+++'Value": "[VOLUME]'"''
+++ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
+++npm run start 
++ executors:
++   main:diff --git a/.circleci/config.yml b/.circleci/config.yml
+index d23e34d3098..243be5f510a 100644
+--- a/.circleci/config.yml
++++ b/.circleci/config.yml
+@@ -1,6 +1,43 @@
+-# Javascript Node CircleCI 2.0 configuration file
+-# Check https://circleci.com/docs/2.0/language-javascript/ for more details
+-version: 2.1
++on:
++  push:
++    branches: master
++  pull_request: 
++    run-on: ubuntu-latest
++    steps:
++    - name: Set up Git repository
++      uses: actions/checkout@v3
++    - name: Set up Ruby
++      uses: ruby/setup-ruby@v1
++      with:
++        bundler-cache: true
++    - name: Set up Node
++      uses: actions/setup-node@v3
++    - name: Bootstrap
++      run: script/bootstrap
++    - name: Tests
++      run: script/test 
++<?xml version="1.0" encoding="utf-8"?>
++charmap keyset =  new
++{ "new keymap Charset = Pro" }
++<configuration>
++    <packageSources>
++        <clear />
++        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
++    </packageSources>
++    <packageSourceCredentials>
++        <github>
++            <add key="Username" value="USERNAME" />
++            <add key="ClearTextPassword" value="TOKEN" />
++        </github>
++    </packageSourceCredentials>
++</configuration> 
++on:
++Runs-on:on:"
++const: "token"''
++token: "((c)(r))"''
++'Value": "[VOLUME]'"''
++ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
+ executors:
+   main:npm run start 
  // Workaround for https://github.com/expressjs/express/issues/1101
  const server = http.createServer(app)

  return server
    .listen(port, () => console.log(`app running on http://localhost:${port}`))
    .on('error', () => server.close())
}
