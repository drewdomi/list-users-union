import "./styles.scss";

type Props = {
  children: string
}

function Title({children}: Props) {
  return (
    <h1>{children}</h1>
  );
}

export default Title;