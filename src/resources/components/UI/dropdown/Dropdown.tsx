import { useField } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";
import { DropdownProps } from "./Dropdown.types";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "@/resources/store/store";
import { useDispatch, useSelector } from "react-redux";
import { closeDropdown, toggleDropdown } from "@/resources/store";

const Dropdown = memo<DropdownProps>(({ name, options }) => {
    const router = useRouter();
    const params = useParams();
    const locale = params.locale;
    const [field, meta, helpers] = useField(name);

    const dispatch = useDispatch();
    const isOpenDropdown = useSelector((state: RootState) => state.dropdown.isOpenDropdown);

    const handleSelect = (value: string, language?: string) => {
        helpers.setValue(value);
        dispatch(closeDropdown());
        helpers.setTouched(true);
        router.push(`/${language}`);
    };

    const selectedOption = options.find((option) => option.title === field.value);

    const localeLanguageSwitch = (locale: string | string[] | undefined) => {
        switch (locale) {
            case "ru":
                return "/assets/icons/flags/ru.svg";
            case "en":
                return "/assets/icons/flags/gb.svg";
            case "cn":
                return "/assets/icons/flags/cn.svg";
            case "de":
                return "/assets/icons/flags/de.svg";
            case "fr":
                return "/assets/icons/flags/fr.svg";
            default:
                return "/assets/icons/flags/gb.svg";
        }
    };

    return (
        <div className="relative  z-30">
            <button
                type="button"
                className="text-left flex items-center gap-2"
                onClick={() => dispatch(toggleDropdown())}
            >
                {selectedOption && typeof selectedOption === "object" ? (
                    <>
                        <Image
                            src={selectedOption.flag}
                            alt={selectedOption.title}
                            className="border rounded"
                            width={35}
                            height={26}
                        />
                    </>
                ) : (
                    <Image
                        src={localeLanguageSwitch(locale)}
                        width={35}
                        height={26}
                        alt="flag"
                        className="border rounded"
                    />
                )}
            </button>

            <AnimatePresence>
                {isOpenDropdown && (
                    <motion.ul
                        className="absolute z-10 mt-2 w-[130px] rounded bg-white shadow-lg right-0 border-2 border-black"
                        style={{ width: "130px" }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 0.6, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {options.map((option, index) => {
                            if (typeof option === "string") {
                                return (
                                    <motion.li
                                        key={index}
                                        className="p-2 hover:bg-gray-100 cursor-pointer "
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => handleSelect(option)}
                                    >
                                        <p className="text-black">{option}</p>
                                    </motion.li>
                                );
                            }

                            return (
                                <motion.li
                                    key={index}
                                    className="p-2 hover:bg-white cursor-pointer flex items-center gap-1"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => handleSelect(option.title, option.language)}
                                >
                                    <Image src={option.flag} alt={option.title} width={35} height={26} />

                                    <p className="text-black">{option.title}</p>
                                </motion.li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>

            {meta.touched && meta.error && <div className="text-red-500 text-sm mt-1">{meta.error}</div>}
        </div>
    );
});

Dropdown.displayName = "Dropdown";
export default Dropdown;
