import PageWrapper, { ManimeStandardContainer, getGlobalProps } from 'components/core/hoc/PageWrapper';
import React, { useEffect } from 'react';
import ManiFittingNew from 'components/fitting/mani';



export default function ManiFittingPage (props) {


  return (
    
    <ManiFittingNew />
    
  )
};
export const getStaticProps = async ({ res, req }) => await getGlobalProps();
