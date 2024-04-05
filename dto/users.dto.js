export default class UsersDTO {
    constructor(contact) {
      this.id = contact._id || contact.id;
      this.fullname = `${contact.first_name} ${contact.last_name}`;
      this.role = contact.role;
      this.email = contact.email;
      
    }
  }
  