<template>
  <div>
    <Breadcrumbs title="Users" />
    <div class="card">
      <div class="card-body">
        <b-button variant="primary" @click="$bvModal.show('add-user')">Add User</b-button>
            <b-table class="mt-4" striped :fields="fields" :items="items">
                <template v-slot:cell(creation)="row">
              {{row.value.toLocaleString('en-US')}}
          </template>
          <template v-slot:cell(organization)='row'>
              {{row.item.organization.name}}
          </template>
          <template v-slot:cell(role)='row'>
              {{row.item.role.name}}
          </template>
          <template v-slot:cell(action)='data'>
              <span class='text-info act' @click="edit(data)"><u>Edit</u></span>&nbsp;
              <span class='text-info act' @click="del(data)"><u>Delete</u></span>
          </template>
            </b-table>
      </div>
    </div> 
    <!-- add User -->
    <b-modal
    id="add-user"
    centered
    title="Add User"
    @hidden="clearUsr"
  >
   <form class="form theme-form">
    <div class="card-body">
    <div class="row">
        <div class="col">
            <div class="form-group">
                <label>Username</label>
                <b-form-input type="text"  v-model="user.userName"></b-form-input>
            </div>
            <div class="form-group">
                <label>Real Name</label>
                <b-form-input type="text"  v-model="user.realName"></b-form-input>
            </div>
            <div class="form-group">
                <label>Email</label>
                <b-form-input type="text"  v-model="user.email"></b-form-input>
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <b-form-input type="text"  v-model="user.phoneNumber"></b-form-input>
            </div>
            <div class="form-group">
                <label>Organization</label>
                <b-form-select v-model="user.organization" :options="orgsOptions"></b-form-select>
            </div>
            <div class="form-group">
                <label>Role</label>
                <b-form-select v-model="user.role" :options="rolesOptions"></b-form-select>
            </div>
        </div>
    </div>
    </div>
        </form>
    <template #modal-footer="{ ok, cancel}">
      <b-button @click="cancel()">
        Cancel
      </b-button>
      <b-button variant="primary" @click="addUsr(ok)">
        Add
      </b-button>
    </template>
  </b-modal>
    <!-- End add User -->
    <!-- edit user -->
    <b-modal
    id="edit-user"
    centered
    title="Edit User"
    @hidden="clearUsr"
  >
  <form class="form theme-form">
    <div class="card-body">
    <div class="row">
        <div class="col">
            <div class="form-group">
                <label>userName</label>
                <b-form-input type="text" placeholder="userName" v-model="user.userName"></b-form-input>
            </div>
            <div class="form-group">
                <label>Real Name</label>
                <b-form-input type="text" placeholder="Real Name" v-model="user.realName"></b-form-input>
            </div>
            <div class="form-group">
                <label>Email</label>
                <b-form-input type="text" placeholder="Email" v-model="user.email"></b-form-input>
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <b-form-input type="text" placeholder="Phone Number" v-model="user.phoneNumber"></b-form-input>
            </div>
            <div class="form-group">
                <label>Organization</label>
                <b-form-select v-model="user.organization" :options="orgsOptions"></b-form-select>
            </div>
            <div class="form-group">
                <label>Role</label>
                <b-form-select v-model="user.role" :options="rolesOptions"></b-form-select>
            </div>
        </div>
    </div>
    </div>
        </form>
    <template #modal-footer="{ ok, cancel}">
      <b-button @click="cancel()">
        Annuler
      </b-button>
      <b-button variant="primary" @click="editUsr(ok)">
        Ajouter
      </b-button>
    </template>
  </b-modal>
  <!-- End edit user -->
  <!-- Delete User -->
  <b-modal
      id="delete-dialog"
      centered
      title="Delete User"
      @ok="confirmDelete"
      @hidden="clearUsr"
    >
      <p class="my-4">
       Delete User
        <b>{{ user.userName }}</b
        ><br />
      </p>
      <template #modal-footer="{ ok, cancel}">
        <b-button @click="cancel()">
          Cancel
        </b-button>
        <b-button variant="danger" @click="ok()">
          Delete
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          id: null,
          userName: '',
          realName: '',
          email: '',
          phoneNumber: '',
          organization: null,
          role: null,
        },
        edited: {},
        deleted: {},
        items: [
          { id: 1, userName: 'abenani', realName: 'Anas Benani', organization: { id: 1, name:'Nextronic' }, role:{ id: 1, name: 'Admin' }, phoneNumber: '0652804197' ,email: 'a.benani@digieye.io', creator: 'Yassine Ourrak', creation: new Date() },
          { id: 2, userName: 'aenani', realName: 'Anas Benani', organization: { id: 1, name:'Nextronic' }, role:{ id: 2, name: 'User' }, phoneNumber: '0652804197' ,email: 'a.benani@digieye.io', creator: 'Yassine Ourrak', creation: new Date() },
        ],
        orgsOptions:[
          { value:1, text: 'nextronic' },
          { value:2, text: 'Aba tech' },
          { value:3, text: 'Intelifix' },
        ],
        rolesOptions:[
          { value:1, text: 'admin' },
          { value:2, text: 'User' },
        ],
        fields: [
          { key: 'userName', label: 'Username' },
          { key: 'realName', label: 'Full Name' },
          { key: 'phoneNumber', label: 'Phone Number' },
          { key: 'organization', label: 'Organization' },
          { key: 'role', label: 'Role' },
          { key: 'creator', label: 'Creator' },
          { key: 'creation', label: 'Creation' },
          { key: 'action' }
        ]
      };
    },
    methods: {
      clearUsr(){
        this.user = {
          userName: '',
          realName: '',
          email: '',
          phoneNumber: '',
          organization: null,
          role: null,
        };
      },
      addUsr(ok){
        console.log(this.user);
        ok();
        //send to Api
        this.clearUsr();
      },
      edit(data){
        this.user = { ...data.item };
        this.user.organization = data.item.organization.id;
        this.user.role = data.item.role.id;
        this.$bvModal.show('edit-user');
      },
      del(data){
        this.user = data.item;
        this.$bvModal.show('delete-dialog');
      },
      confirmDelete(){
        console.log('send to api !');
        console.log(this.user.id);
      },
      editUsr(ok){
        console.log('send Api request!');
        ok();
        this.clearUsr()
      }
    }
  };
</script>

<style>
.act:hover{
    color: black;
    cursor: pointer;
}
</style>
