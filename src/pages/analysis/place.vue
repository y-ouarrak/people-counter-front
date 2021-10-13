<template>
  <div>
    <Breadcrumbs title='Place' />
      <b-toast id='error-toast' title='Error' variant='danger'>
     {{msg}}
    </b-toast>
    <div class='card' style='min-height: 700px;'>
      <div class='card-body'>
            <h5 class='card-title'>Place Data</h5>
        <div class='row'>
          <div class='col-12 col-lg-3 mb-2'>
            <b-form-select
              v-model='area'
              :options='areaOptions'
            ></b-form-select>
          </div>
          <div class='col-12 col-lg-3 mb-2'>
            <b-form-select
            text-field="name"
            value-field="serial"
              v-model='device'
              :options='deviceOptions'
            ></b-form-select>
          </div>
          <div class='col-12 col-lg-3 mb-2'>
            <div>
              <b-form-datepicker
                id='start-date'
                placeholder='Start Date'
                v-model='start'
                class='mb-2'
              ></b-form-datepicker>
            </div>
          </div>
          <div class='col-12 col-lg-3 mb-2'>
            <div>
              <b-form-datepicker
                id='end-date'
                placeholder='End Date'
                v-model='end'
                class='mb-2'
              ></b-form-datepicker>
            </div>
          </div>
          <div class='col-12 mb-2'><b-button variant='primary' @click='showChart'><i class='fa fa-search'></i> Inquire</b-button></div>
        </div>
        <div id='chart'>
        <apexchart v-if='show' height='350' :options='chartOptions' :series='series'></apexchart>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { API } from '@/axios';
  export default {
    data() {
      return {
        area: null,
        device: null,
        start: null,
        end: null,
        show: false,
        msg: '',
        areaOptions: [
          { value: null, text: 'Please select an Area' },
          { value: 1, text: 'Expo 22' },
        ],
        deviceOptions: [{name: 'Please select a Device', serial: null}],
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
    async created(){
      try{
        const { data } = await API.get('/devices');
        let options;
        options = data.docs;
        options.unshift({name: 'Please select a Device', serial: null})
        this.deviceOptions = options;
      }catch(e){
        console.log(e);
      }
    },
    methods: {
      async showChart(){
        if(!this.area)
          this.msg = 'Area field is Empty!';
        else if(!this.device)
          this.msg = 'Device field is Empty!';
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
            const { data } = await API.get('/events', { params: { startDate: this.start, endDate: `${this.end} 23:59:00` , uuid: this.device, perPage: 10000000 } });
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
