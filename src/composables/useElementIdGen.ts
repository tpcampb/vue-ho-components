import type { InputVm } from '@/types/InputVm.ts'

export function useElementIdGen(inputVm: InputVm) {
  const separator = '_'

  function getElementId(idPrefix?: string, idIndex?: number) {
    if (idPrefix || idIndex) {
      const prefix = idPrefix ? `${idPrefix}${separator}` : ''
      const id = idIndex ? idIndex : 0

      return `${prefix}${id}${separator}${inputVm.group}${separator}${inputVm.name}`
    }

    return undefined
  }

  return {
    getElementId
  };
}