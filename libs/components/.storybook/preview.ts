import '@bp-community/scss/styles'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
/*import {
  mockEmployeePayDistributionSearch,
  mockEmployeePaySearch,
  mockEmployeeSearch,
} from '@tools/mocks'*/
import moment from 'moment'
import { rest } from 'msw'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { cookieDecorator } from 'storybook-addon-cookie'
import { v4 as uuid } from 'uuid'

initialize({
  onUnhandledRequest: 'warn',
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
      rest.get('/login/login.aspx', (req, res, ctx) => {
        return res(
          ctx.cookie(
            'SBISESSIONKEY',
            'ZQ504iZW8PQPp9WjR1B8Km5nzjWqkK9ZlGToIMxrzX8ceYsZPPFrY6I5gW2pyCx9'
          )
        )
      }),
      rest.get('/screens/api/Navigation/GetConnection', (req, res, ctx) => {
        return res(ctx.json('BusinessPlusTest'))
      }),
      rest.get('/public/*', (req, _res, _ctx) => {
        return req.passthrough()
      }),
      rest.get('/assets/*', (req, _res, _ctx) => {
        return req.passthrough()
      }),
      rest.get('/*.js', (req, _res, _ctx) => {
        return req.passthrough()
      }),
      rest.get('/*.json', (req, _res, _ctx) => {
        return req.passthrough()
      }),
      rest.post('/IFAS7/isapi/btwebrqb.dll', async (req, res, ctx) => {
        const xmlResponse = req.text().then((value) => {
          return value
        })

        const xmlBody = await xmlResponse

        if (
          xmlBody.includes('<Request Type="ReportFetch">') &&
          xmlBody.includes('<DataObject ProgID="BT20.HREmpmstr">')
        ) {
          /*const xmlSearchResultDoc = mockEmployeeSearch(
            new DOMParser().parseFromString(xmlBody, 'application/xml')
          )*/
          const xmlSearchResultDoc = new DOMParser().parseFromString('<@@Err />', 'application/xml')
          return res(
            ctx.xml(new XMLSerializer().serializeToString(xmlSearchResultDoc))
          )
        }

        if (
          xmlBody.includes('<Request Type="ReportFetch">') &&
          xmlBody.includes('<DataObject ProgID="BT20.HREmppay">')
        ) {
          /*const xmlSearchResultDoc = mockEmployeePaySearch(
            new DOMParser().parseFromString(xmlBody, 'application/xml')
          )*/
          const xmlSearchResultDoc = new DOMParser().parseFromString('<@@Err />', 'application/xml')
          return res(
            ctx.xml(new XMLSerializer().serializeToString(xmlSearchResultDoc))
          )
        }

        if (
          xmlBody.includes('<Request Type="ReportFetch">') &&
          xmlBody.includes('<DataObject ProgID="BT20.HREarndist">')
        ) {
          /*const xmlSearchResultDoc = mockEmployeePayDistributionSearch(
            new DOMParser().parseFromString(xmlBody, 'application/xml')
          )*/
          const xmlSearchResultDoc = new DOMParser().parseFromString('<@@Err />', 'application/xml')
          return res(
            ctx.xml(new XMLSerializer().serializeToString(xmlSearchResultDoc))
          )
        }

        if (xmlBody.includes('<UserID>_SUPPORT</UserID>')) {
          return res(
            ctx.xml(
              `<sbixml>
            <NetSightMessage>
              <Header>
                <UserID>_SUPPORT</UserID>
                <Connection>BusinessPlusTest</Connection>
                <ProcessTime WaitInQueue="0" PreProcessMessage="0" ProcessMessage="172" TotalTimeToResponse="172" ConcurrentRequests="0" ProcessTotalMemory="27226 kB" MemoryChange="+3 MB">${new Date().toLocaleDateString(
                  'en-US',
                  {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric',
                  }
                )}</ProcessTime>
                <MachineName MachineIP="${`${
                  Math.floor(Math.random() * 255) + 1
                }.${Math.floor(Math.random() * 255)}.${Math.floor(
                  Math.random() * 255
                )}.${Math.floor(
                  Math.random() * 255
                )}`}">businessplustest.hps.local</MachineName>
                <QueueInfo AvailableThreads="2" ExistingThreads="3" ProcessId="9999" ThreadId="8888">Screens_high</QueueInfo>
              </Header>
              <Response RequestType="Login">
                <Access Mask="WFFORM">Access OK</Access>
                <ScreenGuid>${uuid()}</ScreenGuid>
              </Response>
            </NetSightMessage>
          </sbixml>`
            )
          )
        }
        return res(
          ctx.xml(`
            <sbixml>@@err</sbixml>
          `)
        )
      }),
    ],
  },
}

export const decorators = [mswDecorator, cookieDecorator]
