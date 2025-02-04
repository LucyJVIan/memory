import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="lg:hidden relative  z-20">
            <button onClick={toggleMenu} className="text-white flex items-center gap-2" aria-label="Toggle Menu">
                <Image src="/assets/icons/burger.svg" alt="menu" width={50} height={25} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -200 }}
                        transition={{ duration: 0.3 }}
                        className="z-10 absolute top-12 left-0 w-[250px] bg-black text-white shadow-lg p-4 rounded"
                    >
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="#about" className="hover:text-gray-300">
                                    О проекте
                                </Link>
                            </li>

                            <li>
                                <Link href="#how" className="hover:text-gray-300">
                                    Как это работает
                                </Link>
                            </li>

                            <li>
                                <Link href="#roadmap">Дорожная карта</Link>
                            </li>

                            <li>
                                <Link href="#contacts" className="hover:text-gray-300">
                                    Обратная связь
                                </Link>
                            </li>

                            <li>
                                <Link href="#buy" className="hover:text-gray-300">
                                    Как купить
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BurgerMenu;
