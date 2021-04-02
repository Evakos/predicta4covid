
import React, { useState } from 'react';
import styled from "styled-components"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const MobileLayout = () => {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

 
  return (


    <LayoutWrapper className={isActive ? 'modalActive': null} 
    onClick={toggleClass}>

<FontAwesomeIcon icon={faTimesCircle} style={{ position: 'absolute', top: '2rem', right: '3rem', width: '10%', cursor: 'pointer' }} />


        <img src="/mobile-popup.svg" alt="mobile-layout-image" />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
    display:none;
    @media (max-width:470px) {
        display:flex;
    }
    width:100%;
    height:100vh;
    align-items:center;
    justify-content:center;
    position:fixed;
    background:white;
    z-index:100000000;
    img {
        width: 70%;
        height: auto;
        margin: 0 24px;
    }
`





export default MobileLayout
