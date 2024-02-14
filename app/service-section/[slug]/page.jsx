import WebDev from "@/components/services/WebDev";
import Ecommerce from "@/components/services/Ecommerce";
import Mobile from "@/components/services/Mobile";
import DigitalMarketing from "@/components/services/DigitalMarketing";
import Branding from "@/components/services/Branding";
import NewsPortal from "@/components/services/NewsPortal";
import Resturant from "@/components/services/Resturant";

export default function ServiceSection({ params }) {
    const slug = params.slug;

    if (slug == "webdev") {
        return <WebDev></WebDev>;
    } else if (slug == "mobile") {
        return <Mobile></Mobile>;
    } else if (slug == "ecommerce") {
        return <Ecommerce></Ecommerce>;
    } else if (slug == "digital-marketing") {
        return <DigitalMarketing></DigitalMarketing>;
    } else if (slug == "branding") {
        return <Branding></Branding>;
    } else if (slug == "newsportal") {
        return <NewsPortal></NewsPortal>;
    } else {
        return <Resturant></Resturant>;
    }

    return <div></div>;
}
