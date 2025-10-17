import Image from "next/image";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul>
      <li>
        <Image
          src={imageSrc}
          alt={`Avatar de ${name}`}
          width={32}
          height={32}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
