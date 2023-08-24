import Title from "../Title";
import "./styles.scss";

type Props = {
  name: string;
  title: string;
  image: string;
  altImage: string;
}

function UserCard({name, title, image, altImage}: Props) {
  return (
    <div className="card">
      <img src={image} alt={altImage} />
      <Title>{name}</Title>
      <p>{title}</p>
    </div>
  );
}

export default UserCard;