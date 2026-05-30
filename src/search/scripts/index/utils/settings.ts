import { SNOWBALL_LANGUAGES } from '@/search/scripts/index/utils/constants'

import type { estypes } from '@elastic/elasticsearch'

export function getGeneralSearchSettings(
  language: string,
  verbose: boolean,
): estypes.IndicesIndexSettings {
  const settings: estypes.IndicesIndexSettings = {
    analysis: {
      char_filter: {
        hyphenation_filter: {
          type: 'mapping',
          mappings: ['- => _'],
        },
      },
      analyzer: {
        text_analyzer_explicit: {
          char_filter: ['hyphenation_filter'],
          filter: ['lowercase', 'stop', 'asciifolding'],
          tokenizer: 'standard',
          type: 'custom',
        } as estypes.AnalysisCustomAnalyzer,
        text_analyzer: {
          filter: ['lowercase', 'stop', 'asciifolding'],
          tokenizer: 'standard',
          type: 'custom',
        } as estypes.AnalysisCustomAnalyzer,
      },
      filter: {},
    },
  }

  const snowballLanguage = SNOWBALL_LANGUAGES[language]
  if (snowballLanguage) {
    const textAnalyzer = settings.analysis!.analyzer!
      .text_analyzer as estypes.AnalysisCustomAnalyzer
    ;(textAnalyzer.filter as string[]).push('languaged_snowball')

    settings.analysis!.filter!['languaged_snowball'] = {
      type: 'snowball',
      language: snowballLanguage as estypes.AnalysisSnowballLanguage,
    }
  } else if (verbose) {
    console.warn(`No snowball language for '${language}'`)
  }

  return settings
}

export function getAISearchAutocompleteSettings(
  language: string,
  verbose = false,
): estypes.IndicesIndexSettings {
  const settings: estypes.IndicesIndexSettings = {
    analysis: {
      analyzer: {
        text_analyzer: {
          filter: ['lowercase'],
          tokenizer: 'standard',
          type: 'custom',
        } as estypes.AnalysisCustomAnalyzer,
      },
      filter: {},
    },
  }

  const snowballLanguage = SNOWBALL_LANGUAGES[language]
  if (snowballLanguage) {
    const textAnalyzer = settings.analysis!.analyzer!
      .text_analyzer as estypes.AnalysisCustomAnalyzer
    ;(textAnalyzer.filter as string[]).push('languaged_snowball')

    settings.analysis!.filter!['languaged_snowball'] = {
      type: 'snowball',
      language: snowballLanguage as estypes.AnalysisSnowballLanguage,
    }
  } else if (verbose) {
    console.warn(`No snowball language for '${language}'`)
  }

  return settings
}
