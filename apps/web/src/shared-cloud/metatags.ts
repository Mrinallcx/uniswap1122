export type MetaTagInjectorInput = {
  title: string
  image?: string
  url: string
  description?: string
}

export function formatTokenMetatagTitleName(symbol: string | undefined, name: string | undefined) {
  if (symbol) {
    return 'Get ' + symbol + ' on BharatX'
  }
  if (name) {
    return 'Get ' + name + ' on BharatX'
  }
  return 'View Token on BharatX'
}
