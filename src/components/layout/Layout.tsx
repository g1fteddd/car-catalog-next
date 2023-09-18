import React from 'react'

const Layout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default Layout