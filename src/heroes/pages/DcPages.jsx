import React from 'react'
import { HeroList } from '../components';

export const DcPages = () => {
  const publisher = 'DC Comics';
  return (
    <>
      <h2>{publisher}</h2>
      <hr />
      <HeroList publisher={publisher}/>
    </>
  )
}
