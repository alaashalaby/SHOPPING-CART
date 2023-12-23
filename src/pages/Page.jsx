import React from 'react';
import useTitle from './../Hooks/useTitle';
const Page = ({ title, children, ...rest }) => {
    useTitle(title)
  return (
    <React.Fragment {...rest}>
      {children}
    </React.Fragment>
  )
}

export default Page
