import "server-only";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { getDictionary } from "@/dictionaries/getDictionary";
import OptionsNavbar from "./OptionsNavbar";
import Form from "./Form";
import { Lang } from "@/dictionaries/getDictionary";
import SocialShareButtons from "./SocialShareButton";

const Home = async ({ params }: { params: { lang: Lang } }) => {
  const { title, description, form, results, share } = await getDictionary(
    params.lang
  );

  return (
    <Flex
      direction="column"
      px={{
        initial: "3",
        xs: "6",
      }}
    >
      <Flex direction="row" justify="between" gap="2" py="6" align="center">
        <Flex direction="column">
          <Heading
            size={{
              initial: "7",
              xs: "9",
            }}
            as="h1"
          >
            {title}
          </Heading>
        </Flex>
        <OptionsNavbar />
      </Flex>
      <Card mb="6" variant="surface">
        <Heading size="3" as="h2" weight="medium">
          {description}
        </Heading>
      </Card>

      <Form form={form} results={results} />

      <Flex mt="6" direction="column" align="center" gap="3">
        <Text size="3" color="gray" weight="bold">
          {share.label}
        </Text>
        <Flex direction="row" gap="2">
          <SocialShareButtons title={title} url="https://google.com" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
