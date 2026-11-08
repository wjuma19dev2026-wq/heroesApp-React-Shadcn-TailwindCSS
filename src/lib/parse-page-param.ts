/** Parses a URL page parameter, falling back to the first page when invalid. */
export function parsePageParam(pageParam: string | null | undefined): number {
  if (pageParam == null || pageParam.trim() === '') {
    return 1
  }

  const page = Number(pageParam)
  return Number.isSafeInteger(page) && page > 0 ? page : 1
}
