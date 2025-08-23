import footer from "@/configs/footer.json";
import header from "@/configs/header.json";
import images from "@/configs/images.json";
import pages from "@/configs/pages.json";
import navigator from "@/configs/navigator.json";
import themes from "@/configs/themes.json";

export function useConfiguration() {
    return {
        footer: JSON.parse(JSON.stringify(footer)),
        header: JSON.parse(JSON.stringify(header)),
        images: JSON.parse(JSON.stringify(images)),
        pages: JSON.parse(JSON.stringify(pages)),
        navigator: JSON.parse(JSON.stringify(navigator)),
        themes: JSON.parse(JSON.stringify(themes))
    }
}