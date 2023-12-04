import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Link } from "@radix-ui/themes";

const SocialShareButtons = ({ url, title }: { url: string; title: string }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <>
      <Link
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterLogoIcon width="24" height="24" />
      </Link>
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInLogoIcon width="24" height="24" />
      </Link>
      <Link
        href={`https://www.instagram.com/?url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramLogoIcon width="24" height="24" />
      </Link>
    </>
  );
};

export default SocialShareButtons;
