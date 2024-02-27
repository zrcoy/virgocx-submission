import { Nunito } from 'next/font/google'
import React from 'react'

import './globals.css'

import { ConfigProvider } from 'antd'
import { GLOBAL_COLORS } from '../constants/stylesConsts'
import StyledComponentsRegistry from '../lib/AntdRegistry'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'VirgoCx - Frontend Developer Test',
  description: 'VirgoCx - Frontend Developer Test',
}

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={nunito.className}>
      <StyledComponentsRegistry>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: GLOBAL_COLORS.primary_dark_purple,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout
