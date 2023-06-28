/* eslint jsx-a11y/anchor-is-valid: 0 */
import { forwardRef, useEffect } from 'react'

import { getCookie } from '@bp-community/functions'
import classNames from 'classnames'
import { v4 as uuid } from 'uuid'

import styles from './bp-header.module.scss'

import 'bootstrap'

export interface BpHeaderProps {
  uniqueId?: string
  className?: string
  imgSrc?: string
  headerText?: string
}

const getUserInitials = () => {
  const fName = getCookie('EmpInfo', 'FirstName') || '@@Err'
  const lName = getCookie('EmpInfo', 'LastName') || '@@Err'
  return ` ${fName.slice(0, 1)}${lName.slice(0, 1)} `
}

export const BpHeader = forwardRef<HTMLElement, BpHeaderProps>((props, ref) => {
  const {
    uniqueId = uuid().slice(0, 8),
    imgSrc = '@@Err',
    headerText = '@@Err',
    className,
  } = props

  useEffect(() => {
    const helpMenu = document.querySelector<HTMLElement>('ul.dropdown-menu')
    if (helpMenu) {
      if (helpMenu.style) {
        helpMenu.style.position = 'absolute'
      }
    }
  })

  return (
    <nav
      className={classNames('navbar', 'navbar-dark', 'fixed-top', className, 'bg-primary', 'bg-gradient')}
      id={`bp-header-nav-${uniqueId}`}
      ref={ref}
    >
      <div
        className={classNames('container-lg')}
        id={`bp-header-container-${uniqueId}`}
      >
        <a className={classNames('navbar-brand')} href='#'>
          <img
            src={imgSrc}
            alt='District Logo'
            className={classNames('d-inline-block', 'me-auto')}
            height='40px'
          />
          <span className={classNames('m-0', 'p-3', 'flex-fill')}>
            {headerText}
          </span>
        </a>
        <nav
          className={classNames(
            'nav',
            'navbar-right',
            'navbar-dark',
            'navbar-isolate',
            'text-light'
          )}
        >
          <div className={classNames('dropdown')}>
            <button
              type='button'
              className={classNames(
                'btn',
                'btn-primary',
                'text-light',
                styles['btn-circle']
              )}
              data-bs-toggle='dropdown'
            >
              <div>{getUserInitials()}</div>
            </button>
            <ul
              className={classNames('dropdown-menu', 'dropdown-menu-end')}
              style={{
                width: '240px',
                maxWidth: '350px',
              }}
            >
              <li id='header-user-profile'>
                <a className={classNames('dropdown-item')} href=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='20'
                    fill='currentColor'
                    className={classNames(
                      'bi',
                      'bi-person-vcard',
                      styles['mr-15px']
                    )}
                    viewBox='0 0 16 16'
                  >
                    <path d='M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z' />
                    <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z' />
                  </svg>
                  <span className={classNames('fs-7')}>
                    {getCookie('IFASUserName')?.replace(/"/gim, '')}
                  </span>
                </a>
              </li>
              <li id='header-logout'>
                <a className={classNames('dropdown-item')} href=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='20'
                    fill='currentColor'
                    className={classNames(
                      'bi',
                      'bi-box-arrow-right',
                      styles['mr-15px']
                    )}
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z'
                    />
                    <path
                      fillRule='evenodd'
                      d='M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
                    />
                  </svg>
                  <span className={classNames('fs-7')}>Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  )
})

export default BpHeader
