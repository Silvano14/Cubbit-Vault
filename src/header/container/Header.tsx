import React from 'react';
import { ReactComponent as Logo } from '../../icon/Logo.svg';
import './Header.css';


export const Header = () =>
    <div className='container-header'>
        <div className='logo'><Logo />
        </div>
    </div>