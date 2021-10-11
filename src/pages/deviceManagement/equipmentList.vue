<template>
  <div>
    <Breadcrumbs title="Devices" />
    <div class="card">
      <div class="card-body">
         <b-button variant="primary" @click="$bvModal.show('add-device')">Add Device</b-button>
            <b-table class="mt-4" striped :fields="fields" :items="items">
                <template v-slot:cell(creation)="row">
              {{row.value.toLocaleString('en-US')}}
          </template>
          <!-- <template v-slot:cell(organization)='row'>
              {{row.item.organization.name}}
          </template> -->

          <template v-slot:cell(action)='data'>
              <span class='text-info act' @click="edit(data)"><u>Edit</u></span>&nbsp;
              <span class='text-info act' @click="del(data)"><u>Delete</u></span>
          </template>
            </b-table>
      </div>
    </div>
    <b-modal
    id="add-device"
    centered
    title="Add Device"
    @hidden="clearDevice"
  >
   <form class="form theme-form">
    <div class="card-body">
    <div class="row">
        <div class="col">
          <div class="form-group">
                <label>Device Number</label>
                <b-form-input type="text"  v-model="device.number"></b-form-input>
            </div>
            <div class="form-group">
                <label>Device Name</label>
                <b-form-input type="text"  v-model="device.name"></b-form-input>
            </div>
            <div class="form-group">
                <label>Store</label>
                <b-form-select v-model="device.store" :options="stores"></b-form-select>
            </div>
            <div class="form-group">
                <label>Passage Way</label>
                <b-form-input type="text"  v-model="device.passage_way"></b-form-input>
            </div>

        </div>
    </div>
    </div>
        </form>
    <template #modal-footer="{ ok, cancel}">
      <b-button @click="cancel()">
        Cancel
      </b-button>
      <b-button variant="primary" @click="addDevice(ok)">
        Add
      </b-button>
    </template>
  </b-modal>
  <b-modal
      id="delete-dialog"
      centered
      title="Delete Device"
      @ok="confirmDelete"
      @hidden="clearDevice"
    >
      <p class="my-4">
       Delete Device
        <b>{{ device.name }}</b
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
    data(){
      return{
        delIndex: null,
        device: {
          number: "",
          name: "",
          store: "",
          passage_way: "",
        },
        items: [
          { id: 1, number: '12298465498', name: 'Device00', store: { value: 1, text: 'Nextronic' }, 
            passage_way: 'thechnopark',

          },
        ],
        fields: [
          { key: 'number' },
          { key: 'name' },
          { key:'store.text', label:'Store' },
          { key: 'passage_way' },
          { key: 'action' },
        ],
        stores: [
          { value:1, text: 'technopark' },
          { value:2, text: 'Expo' },
        ]
      }
    },
    methods: {
      clearDevice(){
        this.device = {
          number: "",
          name: "",
          store: "",
          passage_way: "",
        };
      },
      addDevice(ok){
        ok();
        console.log(this.device.store);
        const device = {...this.device};
        device.store = this.stores[this.device.store -1];
        this.items.unshift(device);
      },
      del(data){
        console.log(data);
        this.device = data.item;
        this.delIndex = data.index;
        this.$bvModal.show('delete-dialog');
      },
      confirmDelete(){
        this.items.splice(this.delIndex, 1);
      }
    }
  };
</script>

<style></style>
