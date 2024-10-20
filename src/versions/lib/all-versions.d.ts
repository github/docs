import type { AllVersions } from '@/types'

export const allVersionKeys: string[]

export const allVersionShortnames: Record<string, string>

export declare function isApiVersioned(version: string): boolean

export declare function getDocsVersion(openApiVersion: string): string

export declare function getOpenApiVersion(version: string): string

export const allVersions: AllVersions
