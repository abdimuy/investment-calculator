import type { Metadata, ResolvingMetadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Flex } from "@radix-ui/themes";
import CustomTheme from "@/components/CustomTheme/CustomTheme";
import { Lang, getDictionary } from "@/dictionaries/getDictionary";

type Props = {
  params: { lang: Lang };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await getDictionary(params.lang);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      type: "website",
      locale: params.lang,
      title: metadata.title,
      description: metadata.description,
      images: ["/screen-capture.png"],
    },
  };
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomTheme>
          <Flex height="100%" justify="center">
            <Flex style={{ maxWidth: "60rem" }}>{children}</Flex>
          </Flex>
        </CustomTheme>
      </body>
    </html>
  );
}

export default RootLayout;
