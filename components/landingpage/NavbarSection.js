import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HeaderSection = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <nav className="container mx-auto navigation">
                {/* mobile menu */}
                <div className={toggle ? "mobile-menu active" : "mobile-menu"}>
                    <div className="logo-image">
                        <Link href="/">
                            <a>
                                <Image src="/image/Logo.svg"
                                    alt="Logo"
                                    width={70}
                                    height={35}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="menu-icon-mobile" onClick={() => setToggle(!toggle)}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="menu-list-mobile">
                        <ul className="list mobile-menus">
                            <li className="menu link-holder">
                                <Link href="#">
                                    <a className="text-link">Exchange</a>
                                </Link>
                            </li>
                            <li className="menu link-holder">
                                <Link href="#">
                                    <a className="text-link">Buy Crypto</a>
                                </Link>
                            </li>
                            <li className="menu link-holder">
                                <Link href="#">
                                    <a className="text-link">Market</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="devider"></div>
                        <ul className="cta-button mobile-menus text-center">
                            <li className="menu mobile-login link-holder">
                                <Link href="#">
                                    <a className="text-link">Login</a>
                                </Link>
                            </li>
                            <li className="menu btn-primary cursor-pointer link-holder">
                                <Link href="#">
                                    <a className="mobile-register text-link">Get Started</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* dekstop menu */}
                <div className="desktop-menu w-100 flex justify-between items-center">
                    <div className="logo-image">
                        <Link href="/">
                            <a>
                                <Image src="/image/Logo.svg"
                                    alt="Logo"
                                    width={70}
                                    height={35}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="menu-lists">
                        <ul className="list flex gap-14">
                            <li className="menu">
                                <Link href="#">
                                    <a>Exchange</a>
                                </Link>
                            </li>
                            <li className="menu">
                                <Link href="#">
                                    <a>Buy Crypto</a>
                                </Link>
                            </li>
                            <li className="menu">
                                <Link href="#">
                                    <a>Market</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="cta-buttons">
                        <ul className="cta-button flex gap-14 items-center">
                            <li className="menu">
                                <Link href="#">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li className="menu btn-primary cursor-pointer">
                                <Link href="#">
                                    <a>Get Started</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderSection;