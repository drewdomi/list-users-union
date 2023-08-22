import "./styles.scss";

function UserTabItems() {
  return (
    <div className="tab-items">
      <ul>
        <li>
          <h4>Name</h4>
          <p>Lisiane Carvalho</p>
        </li>
        <li>
          <h4>BirthDay</h4>
          <p>04/07/1998</p>
        </li>
        <li>
          <h4>Nationalist</h4>
          <p>Brazil</p>
        </li>
        <li>
          <h4>Email</h4>
          <p>lisiane.carvalho@example.com</p>
        </li>
        <li>
          <h4>Phones</h4>
          <p>(54) 8404-6470</p>
          <p>(16) 3943-5872</p>
        </li>
        <li>
          <h4>CPF</h4>
          <p>085.991.343-12</p>
        </li>
      </ul>
    </div>
  );
}

export default UserTabItems;