import React from 'react';
import Logo from '../../icon/Logo.svg';
import { Icon } from '../../util/components';
import './Header.css';

export const Header = () =>
    <div className='container-header'>
        <div className='logo'>
            <Icon svg={Logo} />
        </div>
    </div>
