import React from 'react'
import { css } from '@emotion/css'

import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners'
import './App.css';


const color = 'red'

const loaderCSS = css`
margin-top: 30px
`

function App() {
  return (
    <div className="App">
      <h1>React Spinners</h1>
      <BounceLoader color={color} size={'50px'}  loading/>
      <BarLoader css={loaderCSS}  color='royalblue' size={'48pz'}    loading/>
      <BeatLoader  css={loaderCSS} color='royalblue' size={'54px'}  loading />
      <div
    className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
    </div>
  );
}

export default App;
