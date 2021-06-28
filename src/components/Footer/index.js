import React from 'react';
import footer from "../../assets/footer.png"

function Footer() {
    return(
        <footer>
            <img src={footer} className="my-2 cloudFooter" style={{ width: "100%" }} alt="cover" />
            <p className="footer">made with ❤️ by
                <a className="footerLink" to="route" target="_blank" rel="noopener noreferrer" href="https://github.com/gabrielazalta">  gabriela zalta</a>
            </p>
        </footer>
    );
}

export default Footer;