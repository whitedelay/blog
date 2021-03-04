import { ExtendedRecordMap } from 'notion-types'
import {
  parsePageId,
  uuidToId,
  normalizeTitle,
  getBlockTitle
} from 'notion-utils'

import { inversePageUrlOverrides } from './config'

const getCanonicalPageIdImpl = (
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null => {
  if (!pageId || !recordMap) return null

  const id = uuidToId(pageId)
  const block = recordMap.block[pageId]?.value
  if (block) {
    let slug

    try {
      // get slug property
      slug = block.properties['~rd{'][0][0]
    } catch (err) {
      // get title
      slug = normalizeTitle(getBlockTitle(block, recordMap))
    }
    if (slug) {
      if (uuid) {
        return `${slug}-${id}`
      } else {
        return slug
      }
    }
  }

  return id
}

export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null {
  const cleanPageId = parsePageId(pageId, { uuid: false })
  if (!cleanPageId) {
    return null
  }

  const override = inversePageUrlOverrides[cleanPageId]
  if (override) {
    return override
  } else {
    return getCanonicalPageIdImpl(pageId, recordMap, {
      uuid
    })
  }
}
