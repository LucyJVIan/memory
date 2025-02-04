import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

const PageRedirect = () => {
    redirect(routing.defaultLocale);
};

export default PageRedirect;
