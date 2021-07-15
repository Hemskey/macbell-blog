import React from "react";
import Image from "next/image";
import Link from "next/link";

function SocialMedia({ image, name }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-80 w-80 flex flex-col mb-3 mt-5">
        <Link href="https://www.instagram.com/hellomariko/">
          <a>
            <Image
              src={image}
              layout="fill"
              className="rounded-full"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <h1 className="font-light">{name}</h1>
    </div>
  );
}

export default SocialMedia;
