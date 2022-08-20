# 用語集

[ Crowdinの用語集](https://support.crowdin.com/glossary/)は以下のファイルから構成されます。

* `external.yml`には顧客向けの用語集のエントリが含まれます。
  * `external.yml`内の文字列は、Liquid条件演算子をサポートします。 [contributing/liquid-helpers.md](/contributing/liquid-helpers.md)を参照。
* `internal.yml`には、翻訳者だけが使うエントリが含まれます。 これらの用語はCrowdinのUIに表示され、翻訳者に対して翻訳しているものに関する追加の文脈と、その後に対するローカライズされた文字列の提案を提供します。
* `candidates.yml`には、内部的あるいは外部的な用語集に含まれるべきではあるものの、まだ定義されていない用語が含まれます。
