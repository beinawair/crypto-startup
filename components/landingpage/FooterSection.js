import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer-details">
                    <div className="wiki-details">
                        <Link href="/">
                            <a>
                                <Image src="/image/Logo.svg"
                                    alt="Logo"
                                    width={70}
                                    height={35}
                                />
                            </a>
                        </Link>
                        <p className="text-md">We are building the cryptoeconomy - a more fair, accessible, efficient, and transparent financial system enabled by crypto.</p>
                    </div>
                    <div className="footer-menu">
                        <div className="features">
                        <h4 className="text-lg">Features</h4>
                            <ul className="features-list">
                                <li>
                                    <Link href="#">
                                        <a>Exchage</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Buy Crypto</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Learn Crypto</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="resources">
                        <h4 className="text-lg">Resources</h4>
                            <ul className="resources-list">
                                <li>
                                    <Link href="#">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="follow-us">
                            <h4 className="text-lg">Folllow Us</h4>
                            <ul className="follow-us-list">
                                <li>
                                    <Link href="#">
                                        <a>Instagram</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Facebook</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Twitter</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="line-devider"></div>
                <div className="footer-menu copyright-group">
                    <p className="copyright">@ 2022 Wiki. All rights reserved - by beinawair</p>
                    <div className="privacy-policy">
                        <ul className="footer-menu">
                            <li>
                                <Link href="#">
                                    <a>Privacy Policy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Terms & Condition</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;