export default class Api {
  static URL = "";
  static getUser(id) {
    return new Promise((resolve, reject) => {
        fetch(`${this.URL}/get/${id}`)
          .then((res) => res.json())
          .then((res) => resolve(res))
          .catch(err => reject(err));
    });
  }
  static getUsers() {
    return new Promise((resolve, reject) => {
      fetch(`${this.URL}/get/users`)
        .then((res) => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }
  static addUser(data) {
    return new Promise((resolve, reject) => {
      console.log(data);
      fetch(`${this.URL}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: 'no-cors',
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
    });
  }
  static delUser(data) {
    return new Promise( (resolve, reject) => {
      console.log(data);
      fetch(`${this.URL}/del/${data.id}`, {
        method: "GET"
      })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => {reject(err)})
    });
  }
  static updateUser(data) {
    const { id } = data;
    return new Promise((resolve, reject) => {
      console.log(data);
      fetch(`${this.URL}/update/${id}`, {
        method: 'POST',
        eaders: {
          "Content-Type": "application/json"
        },
        mode: 'no-cors',
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch(err => reject(err))
    })
  }
}
