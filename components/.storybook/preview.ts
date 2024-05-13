import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import moment from 'moment'
import { http, HttpResponse } from 'msw'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { cookieDecorator } from 'storybook-addon-cookie'
import '@bplus-community/webform-styles'

initialize({
  onUnhandledRequest: 'bypass',
})

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: { source: { type: 'code' } },
  layout: 'fullscreen',
  cookie: {
    'ASP.NET_SessionId': 'ngyif22kswevw3qrixb01pry',
    Associations:
      'EMPLOYEE=E884993&EOADMIN=E884993&FINANCE=&PDINST=E884993&PDPART=E884993&TIMECARD=E884993&TIMEKEEP=E884993',
    bpsession: 'fe075c37-b4c6-457f-9461-c2baa958850a',
    BusinessPLUSAuthentication:
      'Q3plNzFUcHRYYURoYUJ6NkpRSmpTV3dzZTl5WmdKaCt4Mm9GN3NqTzFVRDhMT0FHQ3pTUFRtYjFGeThZWjd5SzFiR1FNL1k3cDh2eHg2Yk94MEQ5cDhFYUtJS1RsYk95UjV6N2pTdUhpNzkxdkIwY0M4UmRvRW5ldkFvdTVwWWg5VnQ4blc3SU1BMnpZcGRLMWRmNU9SRnJYZC96OWdxVjBTR0hNQmxzdEtDdnpOb3R6M2ZxcW5sdnNGaTRiTWd5NkIxdGNjTUszcUF5U25SRm93SDVBazJZTG4wY2RXRHVxRUFCVGI5WUdSVnp0TFZFY1hSSFJDazJ6ZzltaGVDSTZFZlJ0b3J0ZWZHRmhvY05oZ0VmWjFXSmEwdStBNkV5dTU5SjJiSWZOcGZvWFFjbWZxbjJ2YllpdzJsMDZOWERRRkswOHFKMW5lZWp0K1hZNEpSdVVWSS9RRm8vZWVyMDBtdTRCYWxEdGdMMXNXS1J0U3pPTm8vK09tQVhoVVhJWURFSjVrTkpaNmtwdkUzNTZLYVlERC9kWnc4aFpldk1LbE82bitGUGFlTT0=',
    BusinessPLUSSession: 'xKBTf1/nbZVDMTR31Fu00TD3oNexJNj4Fuax4whnEGU=',
    Connection: 'ifas',
    DefaultLedgers: 'GL=GL&JL=JL',
    EmpInfo: `EntityId=ROOT&EmpId=E884993&FirstName=Lotte&LastName=Padberry&Suffix=&Cycle=01&Admin=&ClassOfService=&SessionTimeout=0&Opt1=&Opt2=&Opt3=&Opt4=&EmpmstrUniqueKey=cc11af31-4421-452f-ac4c-2d099e211e693&EOAsOfDate=${moment()
      .date(1)
      .format('MM/DD/YYYY')}`,
    IFASUserID: 'LPADBERRY0',
    IFASUserName: 'Padberry, Lotte',
    MyIFASAuthentication:
      '57A1F735278D0B7EECD9BA713A9E4B4B89339A431C532274CDC097680911E7E15B10826010FC0586A5A39274B05B21B1875572B6415028F3847BC9E21A9F6A740F98CDDB3F3610E8E6A16453904BAC532F7FE897E308FA49554E66C9',
    ORIGSESSIONKEY: 'ZQ504iZW8PQPp9WjR1B8Ksltt43gotO1A2CJG0sfcP8e5Q8QwtAOzA==',
    SBISESSIONKEY:
      'ZQ504iZW8PQPp9WjR1B8Km5nzjWqkK9ZlGToIMxrzX8ceYsZPPFrY6I5gW2pyCx9',
    SecurityToken: 'dUN1u7vpVwlWS8EFJjEfZg==',
    Timeouts: 'Timeout=0&PwTimeout=0&SessionExpiration=',
  },
  msw: {
    handlers: [
      http.get('/screens/api/Navigation/GetConnection', () => {
        return HttpResponse.json('BusinessPlusTest')
      }),
      http.all(/login|error/im, () => {
        return new HttpResponse(null, {
          status: 403,
        })
      }),
    ],
  },
}

export const decorators = [cookieDecorator]
export const preview = [mswLoader]
