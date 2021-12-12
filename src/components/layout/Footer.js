import React from 'react';

import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'

import './layout.scss';

export const Footer = () => {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <span class="text-muted">&copy; 2021 Mundo Animal, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/mundo.animal777/" target="_blank" rel='noreferrer'><img src={facebook} style={{ height: 30, width: 30 }} alt="" /></a></li>
                <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/mundo.animal777/" target="_blank" rel='noreferrer'><img src={instagram} style={{ height: 30, width: 30 }} alt="" /></a></li>
                <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/mundo.animal777/" target="_blank" rel='noreferrer'><img src={twitter} style={{ height: 30, width: 30 }} alt="" /></a></li>
            </ul>
        </footer>
    )
}
