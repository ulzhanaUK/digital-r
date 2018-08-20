<template>
  <div>
<table style="width:100%; height:450px;">
<tr>
    <th colspan="2">
    <img style=" width:120px; padding:15px " src="../assets/road.svg">
    </th>
    <th colspan="2">
    <div id="app" v-cloak>
		<div v-if="loading">
			<h5>Loading...</h5>
		</div>
		<div style="color:white;" id="content" v-else>
			<h5 style="float: left; vertical-align: top;" class="a"><small>{{location}}</small></h5>
			<p>
				<h4 style="color:white;" class="temp">{{temp}}&deg;</h4>
        <span class="a" style="float: right; padding: 5px; vertical-align: top;"><small>{{desc}}</small></span>
			</p>
		</div>
	</div>
    </th>
    <th>
    <h5><small>ШИРОТА</small></h5>
    <h4 style="color: white;"><center>{{ dbResult[dbResult.length-1]["lat"] }}</center></h4>
  </th>
    <th style="color: #6621ca;">
    <h5><small>ДОЛГОТА</small></h5>
    <h4 style="color: white; "><center>{{ dbResult[dbResult.length-1]["lon"] }}</center></h4>
  </th>
    <td style="color: #6621ca;">
    <h5><small>СКОРОСТЬ</small></h5>
    <h4 style="color: white; "><center>{{skorost}} км/час</center></h4>
    </td>
  </tr uk-cover>
  <tr>
  <th colspan="4" style="background-color:#6621ca; padding:0px; color: white; font-family: PF Din Text Cond Pro;"><h6 style="color:white">ТЕКУЩИЕ ПОКАЗАТЕЛИ</h6></th>

<th colspan="4" style="background-color:#6621ca; padding:0px; color: white; font-family: PF Din Text Cond Pro;"><h6 style="color:white">КОЛИЧЕСТВО ЯМ</h6></th>
</tr uk-cover>
  <tr>
    <th rowspan="2" colspan="2" style="color: #6621ca;">
    <h5 class="a"><small>УРОВЕНЬ</small></h5>
    <span class="a" style="color:green; float: right"><small>МАЛЕНЬКАЯ ЯМА</small></span>
    <h1 style="color: white;"><center><big>{{ dbResult[dbResult.length-1]['level'] }}</big></center></h1>
    </th>
    <td>
    <h5 class="a"><small>ШИРИНА</small></h5>
    <span class="a" style="float: right;"><small>CM</small></span>
    <h2 style="color: white;"><center>{{ dbResult[dbResult.length-1]['width'] }}</center></h2>
    </td>
    <td>
    <h5 class="a"><small>ДЛИНА</small></h5>
    <span class="a" style="float: right;"><small>CM</small></span>
    <h2 style="color: white;"><center>{{length}}</center></h2>
    </td>
    <th rowspan="2" style="color: #6621ca;">
    <h6><small>ВСЕГО В ГОРОДЕ</small></h6>
    <h1 style="color: white;"><center><big>{{allAmount}}</big></center></h1>
    </th>
    <td style="color: #6621ca;">
    <h5><small>Р-Н "АЛМАТЫ"</small></h5>
    <h2 style="color: white;"><center>{{almaty}}</center></h2>
    </td>
    <td style="color: #6621ca;">
    <h5><small>Р-Н "САРЫАРКА"</small></h5>
    <h2 style="color: white;"><center>{{saryarka}}</center></h2>
    </td>
  </tr>
  <tr>
    <td style="color: #6621ca;">
    <h5 class="a"><small>ГЛУБИНА</small></h5>
    <span class="a" style="float: right;"><small>CM</small></span>
    <h2 style="color: white;"><center>{{depth}}</center></h2>
    </td>
    <td style="color: #6621ca;">
    <h5 class="a"><small>ОБЪЕМ</small></h5>
    <span class="a" style="float: right;"><small>CM^3</small></span>
    <h2 style="color: white;"><center>{{volume}}</center></h2>
    </td>
    <td style="color: #6621ca;">
    <h5><small>Р-Н "ЕСИЛЬ"</small></h5>
    <h2 style="color: white;"><center>{{esyl}}</center></h2>
    </td>
    <td style="color: #6621ca;">
    <h5><small>Р-Н "БАЙКОНЫР"</small></h5>
    <h2 style="color: white;"><center>{{baykonyr}}</center></h2>
    </td>
  </tr>
  <tr>
  <th colspan="4" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;"><h6 style="color:white">РАСХОДЫ НА РЕМОНТ</h6></th>

<th colspan="4" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;"><h6 style="color:white">СОСТОЯНИЕ МАШИНЫ</h6></th>
</tr uk-cover>
    <tr>
      <th rowspan="2" colspan="2" style="color: #6621ca;">
      <h5><small>ОБЩАЯ СУММА</small></h5>
      <h1 style="color: white;"><center><big>{{moneyall}}</big></center></h1>
      </th>
      <td style="color: #6621ca;">
      <h5 class="a"><small>ШЕБЕНЬ</small></h5>
      <span class="a" style="float: right;"><small>КГ</small></span>
      <h2 style="color: white;"><center>{{shiben}}</center></h2>
      </td>
      <td style="color: #6621ca;">
      <h5 class="a"><small>ПЕСОК</small></h5>
      <span class="a" style="float: right;"><small>КГ</small></span>
      <h2 style="color: white;"><center>{{sand}}</center></h2>
      </td>
      <th rowspan="2" style="color: #6621ca;">
      <h6><small>ВРЕМЯ В ПУТИ</small></h6>
      <h1 style="color: white;"><center><big>{{timeroad}}</big></center></h1>
      </th>
      <td style="color: #6621ca;">
      <h5 class="a"><small>БЕНЗИН</small></h5>
      <span class="a" style="float: right;"><small>Л</small></span>
      <h2 style="color: white;"><center>{{benzin}}</center></h2>
      </td>
      <td style="color: #6621ca;">
      <h5 class="a"><small>ДИСТАНЦИЯ</small></h5>
      <span class="a" style="float: right;"><small>КМ</small></span>
      <h2 style="color: white;"><center>{{road}}</center></h2>
      </td>
    </tr>
    <tr>
      <td style="color: #6621ca;">
      <h5 class="a"><small>БИТУМ</small></h5>
      <span class="a" style="float: right;"><small>Л</small></span>
      <h2 style="color: white;"><center>{{bitumen}}</center></h2>
      </td>
      <td style="color: #6621ca;">
      <h5 class="a"><small>ЛЮДИ</small></h5>
      <span class="a" style="float: right;"><small>ЧЕЛ.</small></span>
      <h2 style="color: white;"><center>{{human}}</center></h2>
      </td>
      <td style="color: #6621ca;">
      <h5 class="a"><small>ЗАРЯД БАТАРЕИ</small></h5>
      <span class="a" style="float: right;"><small>%</small></span>
      <h2 style="color: white;"><center>{{battery}}</center></h2>
      </td>
      <td style="color: #6621ca;">
      <h5 class="a"><small>ДАТЧИКИ</small></h5>
      <span class="a" style="float: right;"><small>ШТ</small></span>
      <h2 style="color: white;"><center>{{datchik}}</center></h2>
      </td>
    </tr>
  </tr>
</table>
</div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      dbResult: {},
      skorost: '60',

      level: '2',
      width: '10',
      length: '5',
      depth: '5',
      volume: '300',

      allAmount: '167',
      almaty:'34',
      saryarka:'86',
      esyl: '40',
      baykonyr: '7',

      moneyall: '250',
      shiben: '10',
      sand: '17',
      bitumen: '20',
      human: '3',

      timeroad: '05:32',
      benzin: '27',
      battery: '99%',
      road: '130',
      datchik: '40',
      loading:true,
		lat:null,
		lon:null,
		location:null,
		temp:null
    }
  },
  created() {
  	  let api="http://localhost:3000/images"
  	  this.axios.get(api).then((response) => {
  		this.dbResult = response.data
});
navigator.geolocation.getCurrentPosition(pos => {
			console.log('got coordinates', pos.coords);
			this.lat = pos.coords.latitude;
			this.lon = pos.coords.longitude;
			this.loadWeather();
		});
  },
  methods:{
		loadWeather() {

			axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(${this.lat}%2C${this.lon})%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
			.then(res => {
				let weather = res.data.query.results.channel;
				console.log('response',weather);

				this.location = weather.location.city + ", " + weather.location.region;
				this.temp = weather.item.condition.temp;
				this.desc = weather.item.condition.text;
				this.loading = false;

			})
			.catch(e => {
				console.error(e);
			});

		}
	}
}
</script>
<style>
body {
  background: black;
  height: 650px;
}
html{
  line-height: 1;
}
h5, a, h6 {
top: 0;
color: #6621ca;
font-family: Arial, sans-serif;
}
h6, h4, h5, h3, h1, h2, .a {
    top:0;
    padding: 5px;
    margin-top: 0px;
    margin-bottom: 0px;
}
/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
    .column {
        width: 99%;
    }
}
h3 {
  vertical-align: top;
  color: #eca74c;
  font-family: Arial, sans-serif;
}
.left {
    position: absolute;
    left: 0px;
}
.center {
    position: absolute;
    left: 0;
    text-align: center;
}
[v-cloak] {display: none};
table, th, td {
    border: 1px solid #6621ca;
    border-collapse: collapse;
}
th, td {
    padding: 0px;
    vertical-align: top;
}
span {
  color: grey;
  font-family: PF Din Text Cond Pro;

}
span .a {
  display: inline;
}

</style>
