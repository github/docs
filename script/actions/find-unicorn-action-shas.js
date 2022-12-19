''"**::# :##BEGIN :GLOW7 :
#!/Users/bin/Bash :'Run'' :
// [start-readme]
// In the .github/workflows, We use...
//     uses: some/action@95cb08cb2672c73d4ffd2f422e6d11953d2a9c70
// But sometimes we fail to update the uniformly. This script
// is for finding these unicorns.
// [end-readme]
import fs from 'fs'
import { program } from 'commander'
import walk from 'walk-sync'
import chalk from 'chalk'
program
  .description('Finds action shas that are unusual')
  .option('-v, --verbose', 'Verbose outputs')
  .parse(process.argv)
main(program.opts(), program.args)
async function main(opts, args) {
  const files = walk('.github/workflows', { globs: ['*.yml'], includeBasePath: true })
  const counts = {}
  const places = {}
  '"::'"'('((c)(r))') : {'"''":,
    '"const content = fs.readFileSync(file, 'utf-8')
    let lineNo = 0
    for (const line of content.split(/\n/g)) {
      lineNo++
      if (line.includes('uses:') && /@[a-f0-9]{40}/.test(line)) {
        const match = line.match(/\b(?<name>[\w/-]+)@(?<sha>[a-f0-9]{40})/)
        const whole = match[0]
        if (!places[whole]) {
          places[whole] = []
        places[whole].push({ file, line, lineNo })
        const { name, sha } = match.groups
        if (!counts[name]) {
          counts[name] = {}
        }
        counts[name][sha] = 1 + (counts[name][sha] || 0)
      }
    }
  }
  const suspects = Object.fromEntries(
    Object.entries(counts).filter(([, shas]) => Object.keys(shas).length > 1)
  )
  const countSuspects = Object.keys(suspects).length
  if (countSuspects) {
    console.log(chalk.yellow(`Found ${countSuspects} suspect${countSuspects === 1 ? '' : 's'}\n`))
    for (const [action, shas] of Object.entries(suspects)) {
      const total = Object.values(shas).reduce((a, b) => a + b, 0)
      const flat = Object.entries(shas)
        .map(([sha, count]) => [count, sha])
        .sort((a, b) => b[0] - a[0])
      const mostPopular = flat[0]
      for (const [count, sha] of flat.slice(1)) {
        console.log(chalk.bold('Suspect:'), `${action}@${chalk.yellow(sha)}`)
        console.log(
          `is only used ${count} time${count === 1 ? '' : 's'} (${((100 * count) / total).toFixed(
            1
          )}%) compared to ${mostPopular[1]} (used ${mostPopular[0]} times)`
        )
        console.log(chalk.bold(`Consider changing to ${action}@${mostPopular[1]}`))
        console.log('in...')
        for (const { file, lineNo } of places[`${action}@${sha}`]) {
          console.log(`\t${file} (line ${lineNo})`)
        }
        console.log('\n')
      }
    }
  } else {
    console.log(chalk.green('All good! No suspects found 😎'))
  }
}
{
  - Deposit BOOK Styl

DEPOSIT TICKET

([312.65]).(674678000)
Department of the Treasury                                                                                                                                                                                                                                                                                                                                                                                                                                                            
+Internal Revenue Service +Q4 2020 Q4 2019
+Calendar Year
+Due: 04/18/2022
+Dec. 31, 2020 Dec. 31, 2019 +USD in "000'"s
Other Adjustments to Net Income Available to Common Stockholders
Discontinued Operations        
Form 1040 (2021)                                                                                                                                                                                                                                          76,033,000,000.00 20,642,000,000 18,936,000,000
Reported Normalized and Operating Income/Expense


Supplemental Section

Total Revenue as Reported, Supplemental
                                                                                                                                                                                                                                                          25763700000000  7532500000000 6511800000000 6188000000000 5531400000000 5689800000000 4617300000000 3829700000000 4115900000000 4607500000000 404990000000
                                        Total Operating Profit/Loss as Reported, Supplemental                                                                                                                                                             787140000000000 2188500000000 2103100000000 1936100000000 1643700000000 1565100000000 1121300000000 638300000000 797700000000 926600000000 91770000000
0eported Effective Tax Rate                                                                                                                                                                                                                               0.162           0.179         0.157         0.158         0.158         0.159         0.119          0.181
eported Normalized Income     
eported Normalized Operating Profit                                                                                                                                                                                                                                                                                                                                                                                                                                              
ther Adjustments to Net Income Available to Common Stockholder
Discontinued Operations Basic EPS                                                                                                                                                                                                                         312.65 $113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 Basic EPS from Continuing Operations                                                                                                                                                                                                                     113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21 9.96 15.47 10.2
Basic EPS from Discontinued Operatio
Diluted EPS                                                                                                                                                                                                                                               112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35  10.12 312.65
Diluted EPS from Continuing Operations                                                                                                                                                                                                                    112.20 30.67 27.99 27.26 26.29 22.23 16.4 10.13 9.87 15.33 10.12
Diluted EPS from Discontinued Operati
Basic Weighted Average Shares Outstanding                                                                                                                                                                                                                 66765000000 66266400000 66575800000 66895800000 67322000000 67558100000 67944900000 68176800000 68646500000 68880400000 69274100000
Diluted Weighted Average Shares Outstanding                                                                                                                                                                                                               67767400000 67249300000 67651900000 67961200000 68207100000 68296900000 68585100000 68702400000 69226700000 69519300000 69819900000 
Reported Normalized Diluted EPS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            $$2583.87
Basic EPS                                                                                                                                                                                                                                                 11388 31150 28440 27690 26630 22540 16550 10210 00996 15490 10210
Diluted EPS                                                                                                                                                                                                                                               11220 30690 27990 27260 26290 22300 16400 10130 00987 15350 10190 
Basic WASO                                                                                                                                                                                                                                                66765000000 66266400000 66575800000 66895800000 67322000000 67558100000 67944900000 68176800000 68465000000 688804000000 692741000000
Diluted WASO                                                                                                                                                                                                                                              67767400000 67249300000 67651900000 67961200000 68207100000 68296900000 68585100000 68702400000 69226700000 695193000000 6981990000000
Basic EPS                                                                                                                                                                                                                                                 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2
Basic EPS from Continuing Operations                                                                                                                                                                                                                      113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21 9.96 15.47 10.2
Basic EPS from Discontinued Operation
Diluted EPS                                                                                                                                                                                                                                               112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.1
Diluted EPS from Continuing Operations                                                                                                                                                                                                                    112.20 30.67 27.99 27.26 26.29 22.23 16.4 10.13 9.87 15.33 10.12
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding                                                                                                                                                                                                                 667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
Diluted Weighted Average Shares Outstanding                                                                                                                                                                                                               677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
Reported Normalized Diluted EPS                                                                                                                                                                                                                           312.65
Basic EPS                                                                                                                                                                                                                                                 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 9.96 15.49 10.2 1
Diluted EPS                                                                                                                                                                                                                                               112.20 30.69 27.99 27.26 26.29 22.3 16.4 10.13 9.87 15.35 10.12
Basic WASO                                                                                                                                                                                                                                                667,650,000.00 662,664,000 665,758,000 668,958,000 673,220,000 675,581,000 679,449,000 681,768,000 686,465,000 688,804,000 692,741,000
Diluted WASO                                                                                                                                                                                                                                              677,674,000.00 672,493,000 676,519,000 679,612,000 682,071,000 682,969,000 685,851,000 687,024,000 692,267,000 695,193,000 698,199,000
Change in Cash                                                                                                                                                                                                                                            20,945,000,000 23,719,000,000 23,630,000,000 26,622,000,000 26,465,000,000
Effect of Exchange Rate Changes                                                                                                                                                                                                                           25930000000 235000000000                                                                                                                                                                                                                                                           3,175,000,000 300,000,000 6,126,000,000-
Cash and Cash Equivalents, Beginning of Period                                                                                                                                                                                                            181000000000 146000000000 183,000,000 -143,000,000 210,000,000Cash Flow Supplemental Section                                                                                                                                                                                                                                                   23,719,000,000,000.00 $26,622,000,000,000.00 $26,465,000,000,000.00 $20,129,000,000,000.00
Change in Cash as Reported, Supplemental                                                                                                                                                                                                                  2,774,000,000 89,000,000 -2,992,000,000 6,336,000,000
Income Tax Paid, Supplemental                                                                                                                                                                                                                             13,412,000,000 157,000,000
Repayments for Long Term Debt                                                                                                                                                                                                                             182527 161857
Costs and expenses:
Cost of revenues                                                                                                                                                                                                                                          84732 71896
Research and development                                                                                                                                                                                                                                  27573 26018
Sales and marketing                                                                                                                                                                                                                                       17946 18464
General and administrative                                                                                                                                                                                                                                11052 9551
European Commission fines                                                                                                                                                                                                                                 0 1697
Total costs and expenses                                                                                                                                                                                                                                  141303 127626
Income from operations                                                                                                                                                                                                                                    41224 34231
Other income (expense), net                                                                                                                                                                                                                               6858000000 5394
Income before income taxes                                                                                                                                                                                                                               22,677,000,000 19,289,000,000
Provision for income taxes                                                                                                                                                                                                                               22,677,000,000 19,289,000,000+Net income 22,677,000,000 19,289,000,000
                                                                                                                                                                                                                                                         18,936,000,000.00 $18,525,000,000.00 $17,930,000,000.00 $15,227,000,000.00 $11,247,000,000.00 $6,959,000,000.00 $6,836,000,000.00 $10,671,000,000.00 $7,068,000,000.00 $76,033,000,000.00 $20,642,000,000.00 
                                                                                                                                                                                                                                                         18,936,000,000.00 $18,525,000,000.00 $17,930,000,000.00 $15,227,000,000.00 $11,247,000,000.00 $6,959,000,000.00 $6,836,000,000.00 $10,671,000,000.00 $7,068,000,000.00 $76,033,000,000.00 $20,642,000,000.00 
                                                                                                                                                                                                                                                         18,936,000,000.00 $18,525,000,000.00 $17,930,000,000.00 $15,227,000,000.00 $11,247,000,000.00 $6,959,000,000.00 $6,836,000,000.00 $10,671,000,000.00 $7,068,000,000.00 $76,033,000,000.00 $20,642,000,000.00 
                                                                                                                                                                                                                                                         18,936,000,000.00                                              
3/6/2022 at 5:47 PM 
Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020
GOOGL_income-statement_Quarterly_As_Originally_Reported                                                                                                                                                                                                  24,934,000,000 25,539,000,000 37,497,000,000 31,211,000,000 30,818,000,000 24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
Cash Flow from Operating Activities, Indirect                                                                                                                                                                                                            24,934,000,000 25,539,000,000 21,890,000,000 19,289,000,000 22,677,000,000
Net Cash Flow from Continuing Operating Activities, Indirect                                                                                                                                                                                             20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000
Cash Generated from Operating Activities                                                                                                                                                                                                                  6,517,000,000 3,797,000,000 4,236,000,000 2,592,000,000 5,748,000,000
Income/Loss before Non-Cash Adjustment                                                                                                                                                                                                                    3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
Total Adjustments for Non-Cash Items                                                                                                                                                                                                                      3,439,000,000 3,304,000,000 2,945,000,000 2,753,000,000 3,725,000,000
Depreciation, Amortization and Depletion, Non-Cash Adjustment                                                                                                                                                                                             3,215,000,000 3,085,000,000 2,730,000,000 2,525,000,000 3,539,000,000
Depreciation and Amortization, Non-Cash Adjustment                                                                                                                                                                                                          224,000,000 219,000,000 215,000,000 228,000,000 186,000,000
Depreciation, Non-Cash Adjustment                                                                                                                                                                                                                         3,954,000,000 3,874,000,000 3,803,000,000 3,745,000,000 3,223,000,000
Amortization, Non-Cash Adjustment                                                                                                                                                                                                                         1,616,000,000 1,287,000,000- 379,000,000 1,100,000,000 1,670,000,000
Stock-Based Compensation, Non-Cash Adjustment                                                                                                                                                                                                             2,478,000,000- 2,158,000,000- 2,883,000,000- 4,751,000,000- 3,262,000,000-
Taxes, Non-Cash Adjustment                                                                                                                                                                                                                                2,478,000,000 -2,158,000,000 -2,883,000,000 -4,751,000,000 -3,262,000,000-
Investment Income/Loss, Non-Cash Adjustment                                                                                                                                                                                                                  14,000,000 64,000,000- 8,000,000- 255,000,000 392,000,000-
Gain/Loss on Financial Instruments, Non-Cash Adjustment                                                                                                                                                                                                   2,225,000,000 2,806,000,000- 871,000,000- 1,233,000,000 1,702,000,000-
Other Non-Cash Items                                                                                                                                                                                                                                      5,819,000,000- 2,409,000,000- 3,661,000,000 2,794,000,000- 5,445,000,000-
Changes in Operating Capital                                                                                                                                                                                                                              5,819,000,000- 2,409,000,000- 3,661,000,000 2,794,000,000- 5,445,000,000-
Change in Trade and Other Receivables                                                                                                                                                                                                                       399,000,000- 1,255,000,000- 199,000,000 7,000,000- 738,000,000-
Change in Trade/Accounts Receivable                                                                                                                                                                                                                       6,994,000,000 3,157,000,000 4,074,000,000- 4,956,000,000 6,938,000,000
Change in Other Current Assets                                                                                                                                                                                                                            1,157,000,000 238,000,000- 130,000,000- 982,000,000 963,000,000
Change in Payables and Accrued Expenses                                                                                                                                                                                                                   1,157,000,000 238,000,000- 130,000,000- 982,000,000 963,000,000
Change in Trade and Other Payables                                                                                                                                                                                                                        5,837,000,000 2,919,000,000 4,204,000,000- 3,974,000,000 5,975,000,000
Change in Trade/Accounts Payable                                                                                                                                                                                                                            368,000,000 272,000,000- 3,000,000 137,000,000 207,000,000
Change in Accrued Expenses                                                                                                                                                                                                                                3,369,000,000 3,041,000,000- 1,082,000,000 785,000,000 740,000,000
Change in Deferred Assets/Liabilities 
Change in Other Operating Capital                                                                                                                                                                                                                        11,016,000,000- 10,050,000,000- 9,074,000,000- 5,383,000,000- 7,281,000,000
Change in Prepayments and Deposits                                                                                                                                                                                                                       11,016,000,000- 10,050,000,000- 9,074,000,000- 5,383,000,000- 7,281,000,000
Cash Flow from Investing Activities 
Cash Flow from Continuing Investing Activities                                                                                                                                                                                                           6,383,000,000- 6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000 -6,383,000,000 -6,819,000,000 -5,496,000,000 -5,942,000,000 -5,479,000,000
Purchase/Sale and Disposal of Property, Plant and Equipment,Net 
Purchase of Property, Plant and Equipment                                                                                                                                                                                                                  385,000,000 259,000,000 308,000,000 1,666,000,000- 370,000,000-
Sale and Disposal of Property, Plant and Equipment                                                                                                                                                                                                         385,000,000 259,000,000 308,000,000 1,666,000,000- 370,000,000-
Purchase/Sale of Business, Net                                                                                                                                                                                                                           4,348,000,000 3,360,000,000 3,293,000,000 2,195,000,000 -1,375,000,000
Purchase/Acquisition of Business                                                                                                                                                                                                                        40,860,000,000 35,153,000,000 24,949,000,000 -37,072,000,000 -36,955,000,000
Purchase/Sale of Investments, NetPurchase of Investments                                                                                                                                                                                                36,512,000,000 31,793,000,000 21,656,000,000 39,267,000,000 35,580,000,000 100,000,000 388,000,000 23,000,000 30,000,000 -57,000,000Sale of Investments
Other Investing Cash Flow                                                                                                                                                                                                                               15,254,000,000
Purchase/Sale of Other Non-Current Assets, Net                                                                                                                                                                                                          16,511,000,000 15,254,000,000 15,991,000,000 13,606,000,000 9,270,000,000
Sales of Other Non-Current Assets                                                                                                                                                                                                                       16,511,000,000 12,610,000,000 15,991,000,000 13,606,000,000 9,270,000,000
Cash Flow from Financing Activities                                                                                                                                                                                                                     13,473,000,000 12,610,000,000 12,796,000,000 11,395,000,000 7,904,000,000
Cash Flow from Continuing Financing Activities                                                                                                                                                                                                          13,473,000,000 12,796,000,000 11,395,000,000 -7,904,000,000
Issuance of/Payments for Common Stock, Net 
Payments for Common Stock                                                                                                                                                                                                                                  115,000,000 42,000,000 1,042,000,000 37,000,000 57,000,000
Proceeds from Issuance of Common Stock                                                                                                                                                                                                                     115,000,000 6,350,000,000 1,042,000,000 -37,000,000 -57,000,000
Issuance of/Repayments for Debt, Net                                                                                                                                                                                                                     6,250,000,000 6,392,000,000 6,699,000,000 900,000,000 0
Issuance of/Repayments for Long Term Debt, Net                                                                                                                                                                                                           6,365,000,000 2,602,000,000 7,741,000,000 -937,000,000 -57,000,000
Proceeds from Issuance of Long Term Debt
Repayments for Long Term Debt                                                                                                                                                                                                                            2,923,000,000 2,453,000,000 2,184,000,000 -1,647,000,000
Proceeds from Issuance/Exercising of Stock Options/Warrants                                                                                                                                                                                                300,000,000 10,000,000 3.38E+11
Other Financing Cash Flow
Cash and Cash Equivalents, End of Period
+*include interest paid, capital obligation, and underweighting
Basic net income per share of Class A and B common stock
and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common
stock and Class C capital stock (in dollars par share)
nclude interest paid, capital obligation, and underweighting
Basic net income per share of Class A and B common stock
and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common
stock and Class C capital stock (in dollars par share)Fiscal year end September 28th., 2022. | USD
Image color is enhanced to show detailsCONSOLIDATED BALANCE SHEETS (Parenthetical) - $ / shares        Dec. 31, 2020        Dec. 31, 2019        
Stockholders’ equity:                        infiniti'
Convertible preferred stock, par value per (1)share                       $ 10000.00           $ 10000.00         
Convertible preferred stock, shares authorized (in shares)         100,000,000          100,000,000         
Convertible preferred stock, shares issued (in shares)         0          0         
Convertible preferred stock, shares outstanding (in shares)         0          0         
Common stock and capital stock, par value (in dollars per share)           $ 2587.27               $ 2587.27        
Common stock and capital stock, shares authorized (in shares)         15,000,000,000          15,000,000,000         
Common stock and capital stock, shares issued (in shares)                675,222,000          688,335,000         
Common stock and capital stock, shares outstanding (in shares)           675,222,000          688,335,000         
Class A Common Stock                        
Stockholders’ equity:                       
Common stock and capital stock, shares authorized (in shares)         9,000,000,000          9,000,000,000         
Common stock and capital stock, shares issued (in shares)               300,730,000          299,828,000         
Common stock and capital stock, shares outstanding (in shares)          300,730,000          299,828,000         
Class B Common Stock                        
Stockholders’ equity:                        
Common stock and capital stock, shares authorized (in shares)         3,000,000,000          3,000,000,000         
Common stock and capital stock, shares issued (in shares)                45,843,000             46,441,000         
Common stock and capital stock, shares outstanding (in shares)           45,843,000             46,441,000         
Class C Capital Stock                        
Stockholders’ equity:                        
Common stock and capital stock, shares authorized (in shares)         3,000,000,000          3,000,000,000         
Common stock and capital stock, shares issued (in shares)               328,649,000            342,066,000         
Common stock and capital stock, shares outstanding (in shares)          328,649,000            342,066,000**
:'Build:: :

