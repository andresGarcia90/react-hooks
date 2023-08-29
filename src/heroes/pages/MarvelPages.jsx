import React from 'react'
import { HeroList } from '../components';

export const MarvelPages = () => {
  const publisher = 'Marvel Comics';
  return (
    <>
      <h2>{publisher}</h2>
      <hr />
      <HeroList publisher={publisher}/>
    </>
  )
}
