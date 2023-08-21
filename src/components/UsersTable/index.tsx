import "./styles.scss";

function UsersTable() {
  return (
    <div className="users-table">
      <div className="table">
        <div className="table-header trow">
          <h3>ID</h3>
          <h3>First Name</h3>
          <h3>Last Name</h3>
          <h3>Title</h3>
          <h3>Date</h3>
          <h3>Age</h3>
          <h3>Actions</h3>
        </div>
        <div className="table-data trow">
          <p>gdc456dfvdfb</p>
          <p>Jennie</p>
          <p>Nicohls</p>
          <p>Miss</p>
          <p>11/02/2023</p>
          <p>30</p>
          <p className="user-link"><a href="/user">View profile</a></p>
        </div>
        
      </div>
    </div>
  )
}

export default UsersTable;