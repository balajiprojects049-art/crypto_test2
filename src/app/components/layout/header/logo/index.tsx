import { getImagePath } from "@/lib/utils/imagePath";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <img
        src={getImagePath("/images/logo/logo.svg")}
        alt="logo"
        style={{ width: "auto", height: "50px" }}
      />
    </Link>
  );
};

export default Logo;
