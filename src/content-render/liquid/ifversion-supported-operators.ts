const ifversionSupportedOperators = ['=', '<', '>', '!='] as const

export type IfversionSupportedOperator = (typeof ifversionSupportedOperators)[number]

export default ifversionSupportedOperators
