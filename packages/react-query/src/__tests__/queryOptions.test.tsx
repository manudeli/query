import { describe, expect, it } from 'vitest'
import { queryOptions } from '../queryOptions'
import type { QueryKey } from '@tanstack/query-core'
import type { UseQueryOptions } from '../types'

describe('queryOptions', () => {
  it('should return the object received as a parameter without any modification.', () => {
    const object: UseQueryOptions<unknown, unknown, unknown, QueryKey> = {
      queryKey: ['key'],
      queryFn: () => Promise.resolve(5),
    } as const

    expect(queryOptions(object)).toStrictEqual(object)
  })
})
