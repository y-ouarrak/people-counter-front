<template>
  <div>
    <Breadcrumbs title="Areas" />
      <b-toast id="error-toast" title="Error" variant="danger">
     {{msg}}
    </b-toast>
    <div class="card" style="min-height: 700px;">
      <div class="card-body">
            <h5 class="card-title">Area Data</h5>
        <div class="row">
          <div class="col-12 col-lg-4 mb-2">
            <b-form-select
              v-model="area"
              :options="areaOptions"
            ></b-form-select>
          </div>
          <div class="col-12 col-lg-4 mb-2">
            <div>
              <b-form-datepicker
                id="start-date"
                placeholder="Start Date"
                v-model="start"
                class="mb-2"
              ></b-form-datepicker>
            </div>
          </div>
          <div class="col-12 col-lg-4 mb-2">
            <div>
              <b-form-datepicker
                id="end-date"
                placeholder="End Date"
                v-model="end"
                class="mb-2"
              ></b-form-datepicker>
            </div>
          </div>
          <div class="col-12 mb-2"><b-button variant="primary" @click="showChart"><i class="fa fa-search"></i> Inquire</b-button></div>
        </div>
        <div id="chart">
        <apexchart v-if="show" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { API } from "@/axios"
  export default {
    data() {
      return {
        area: null,
        store: null,
        start: null,
        end: null,
        show: false,
        msg: '',
        areaOptions: [
          { value: null, text: 'Please select an Area' },
          { value: 1, text: 'Expo 22' },
        ],
        storeOptions: [
          { value: null, text: 'Please select a Store' },
          { value: 1, text: 'Store 1' },
          { value: 2, text: 'Store 2' },
          { value: 3, text: 'Store 3' },
        ],

        series: [],

        chartOptions: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          colors: ['#7366ff', '#dd3545'],
          xaxis: {
            type: 'datetime',
            categories: []
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      };
    },
    methods: {
      async showChart(){
        this.show = false;
        if(!this.area)
          this.msg = 'Area field is Empty!';
        else if(!this.start)
          this.msg = 'Start Date field is Empty!';
        else if(!this.end)
          this.msg = 'End Date field is Empty!';
        else {
          this.$bvToast.hide('error-toast');
          this.msg = '';

        }
        if(this.msg)
          this.$bvToast.show('error-toast');
        else{
          this.show = false;
          try{
            const { data } = await API.get('/events', { params: { startDate: this.start, endDate: `${this.end} 23:59:00` , perPage: 10000000 } });
            const inArray = data.docs.map((elm) => elm.in);
            const outArray = data.docs.map((elm) => elm.out);
            const timeArray = data.docs.map((elm) => `${elm.date} ${elm.hour}:00:00`);

            this.series[0] = { name: 'In', data: inArray };
            this.series[1] = { name: 'Out', data: outArray };
            this.chartOptions.xaxis.categories = timeArray;
            this.show = true;
          }catch(e){
            console.log(e);
          }
        }
      }
    }
  };
</script>

<style></style>
