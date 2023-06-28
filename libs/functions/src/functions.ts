import axios from 'axios'

/**
 * @function getConnection
 *
 * @returns {string} The connection name of the environment
 *
 * @example
 *  const conn = getConnection();
 *
 */
export const getConnection = async (): Promise<string> => {
  const response = await axios.get(`/screens/api/Navigation/GetConnection`)
  const data: string = await response.data
  return data.replace(/['"]+/g, '') || data
}

/**
 * @function getCookie
 *
 * @param {string} name Name of the cookie used to search and return the value
 *
 * @returns {string|undefined} The value of the cookie specified in the parameters
 *
 * @example
 *  const conn = getCookie('IFASUserID');
 *
 */
export function getCookie(name: string, inner?: string): string | undefined {
  const nameLenPlus = name.length + 1
  const cookieVal =
    document.cookie
      .split(';')
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus))
      })[0] || undefined

  if (inner && cookieVal) {
    const innerCookieVal =
      cookieVal
        .split('&')
        .map((c) => c.trim())
        .filter((cookie) => {
          return cookie.substring(0, inner.length + 1) === `${inner}=`
        })
        .map((cookie) => {
          return decodeURIComponent(cookie.substring(inner.length + 1))
        })[0] || undefined
    return innerCookieVal
  }
  return cookieVal?.replace(/"/gm, '')
}

/**
 * @function parseReportFetchResponse
 */
/* eslint-disable-next-line @typescript-eslint/require-await */
export const parseReportFetchResponse = async (xmlDocument: Document) => {
  const detailNode = xmlDocument.querySelectorAll('Detail')
  const reportFetchData: Array<Record<string, unknown>> = []
  detailNode.forEach((objElement, intKey) => {
    const fields = objElement.attributes
    const reportFetchDataObj: Record<string, unknown> = {}
    for (let i = 0; i < fields.length; i += 1) {
      const attr = fields.item(i)
      if (attr) reportFetchDataObj[attr.name] = attr.value
    }
    reportFetchData[intKey] = reportFetchDataObj
  })
  return reportFetchData
}

export function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0')
}

export function formatDate(date: Date) {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join('/')
}

/**
 * @function getBrokerUrl
 */
export function getBrokerURL(sRelativePath?: string): string {
  let ret = '/IFAS7/isapi/btwebrqb.dll'
  if (sRelativePath && sRelativePath.length > 0) {
    ret = sRelativePath
  }
  return ret
}

/**
 * @function setCookie
 */
export function setCookie(cName: string, cValue: string) {
  document.cookie = `${cName}=${cValue}; path=/`
}
