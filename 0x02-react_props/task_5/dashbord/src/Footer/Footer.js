import React from 'react'
import './Footer.css'
import { getFooterCopy, getFullYear }  from '../utils/utils';

function Footer() {
    let footertext = getFooterCopy(true);
    return(
        <div>
            <p>Copyright {getFullYear()} - {footertext}</p>
        </div>
    )

}

export default Footer;