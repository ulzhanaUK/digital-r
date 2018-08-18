<template>
  <div>
<table style="width:100%; height:500px;">
<tr>
    <th colspan="2">
    <img style=" width:120px; padding:15px " src="../assets/road.svg">
    </th>
    <th colspan="2">
    <h5 align="left"><small>Astana</small></h5>

    </th>
    <th>
    <a><h5><small>ШИРОТА</small></h5>
    <h3 style="color: white;">{{shirota}}</h3></a>
  </th>
    <th style="color: #6621ca;">
    <h5><small>ДОЛГОТА</small></h5>
    <h3 style="color: white; ">{{dolgota}}</h3>
  </th>
    <td style="color: #6621ca;">
    <h5><small>СКОРОСТЬ</small></h5>
    <h3 style="color: white; ">{{scorost}} км/час</h3>
    </td>
  </tr uk-cover>
  <tr>
  <th colspan="4" style="background-color:#6621ca; padding:0px; color: white; font-family: PF Din Text Cond Pro;"><h6 style="color:white">ТЕКУЩИЕ ПОКАЗАТЕЛИ</h6></th>

<th colspan="4" style="background-color:#6621ca; padding:0px; color: white; font-family: PF Din Text Cond Pro;"><h6 style="color:white">КОЛИЧЕСТВО ЯМ</h6></th>
</tr uk-cover>
  <tr>
    <th rowspan="2" colspan="2" style="color: #6621ca;">
    <a><small>УРОВЕНЬ
    <span style="color:green;">МАЛЕНЬКАЯ ЯМА</span></small></a>
    <h3 style="color: white;">{{level}}</h3>
    </th>
    <td>
    <a><small>ШИРИНА
    <span>CM</span></small></a>
    <h3 style="color: white;">{{width}}</h3>
    </td>
    <td>
    <a><small>ДЛИНА
    <span>CM</span></small></a>
    <h3 style="color: white;">{{length}}</h3>
    </td>
    <th rowspan="2" style="color: #6621ca;">
    <h6><small>ВСЕГО В ГОРОДЕ</small></h6>
    <h3 style="color: white;">{{allAmount}}</h3>
    </th>
    <td style="color: #6621ca;">
    <h5><small>Р-Н "АЛМАТЫ"</small></h5>
    <h3 style="color: white;">{{almaty}}</h3>
    </td>
    <td style="color: #6621ca;">
    <h5><small>Р-Н "САРЫАРКА"</small></h5>
    <h3 style="color: white;">{{saryarka}}</h3>
    </td>
  </tr>
  <tr>
    <td style="color: #6621ca;">
    <a><small>ГЛУБИНА
    <span>CM</span></small></a>
    <h3 style="color: white;">{{depth}}</h3>
    </td>
    <td style="color: #6621ca;">
    <a><small>ОБЪЕМ
    <span>CM^3</span></small></a>
    <h3 style="color: white;">{{volume}}</h3>
    </td>
    <td style="color: #6621ca;">
    <h5><small>Р-Н "ЕСИЛЬ"</small></h5>
    <h3 style="color: white;">{{esyl}}</h3>
    </td>
    <td style="color: #6621ca;">
    <h5><small>Р-Н "БАЙКОНЫР"</small></h5>
    <h3 style="color: white;">{{baykonyr}}</h3>
    </td>
  </tr>
  <tr>
  <th colspan="4" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;"><h6 style="color:white">РАСХОДЫ НА РЕМОНТ</h6></th>

<th colspan="4" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;"><h6 style="color:white">СОСТОЯНИЕ МАШИНЫ</h6></th>
</tr uk-cover>
    <tr>
      <th rowspan="2" colspan="2" style="color: #6621ca;">
      <h5><small>ОБЩАЯ СУММА</small></h5>
      <h3 style="color: white;">{{moneyall}}</h3>
      </th>
      <td style="color: #6621ca;">
      <a><small>ШЕБЕНЬ
      <span>КГ</span></small></a>
      <h3 style="color: white;">{{shiben}}</h3>
      </td>
      <td style="color: #6621ca;">
      <a><small>ПЕСОК
      <span>КГ</span></small></a>
      <h3 style="color: white;">{{sand}}</h3>
      </td>
      <th rowspan="2" style="color: #6621ca;">
      <h6><small>ВРЕМЯ В ПУТИ</small></h6>
      <h3 style="color: white;">{{timeroad}}</h3>
      </th>
      <td style="color: #6621ca;">
      <a><small>БЕНЗИН
      <span>Л</span></small></a>
      <h3 style="color: white;">{{benzin}}</h3>
      </td>
      <td style="color: #6621ca;">
      <a><small>ДИСТАНЦИЯ
      <span>КМ</span></small></a>
      <h3 style="color: white;">{{road}}</h3>
      </td>
    </tr>
    <tr>
      <td style="color: #6621ca;">
      <a><small>БИТУМ
      <span>Л</span></small></a>
      <h3 style="color: white;">{{bitumen}}</h3>
      </td>
      <td style="color: #6621ca;">
      <a><small>ЛЮДИ
      <span>ЧЕЛ.</span></small></a>
      <h3 style="color: white;">{{human}}</h3>
      </td>
      <td style="color: #6621ca;">
      <a><small>ЗАРЯД БАТАРЕИ
      <span>%</span></small></a>
      <h3 style="color: white;">{{battery}}</h3>
      </td>
      <td style="color: #6621ca;">
      <a><small>ДАТЧИКИ
      <span>ШТ</span></small></a>
      <h3 style="color: white;">{{datchik}}</h3>
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
      shirota: '43°13"44"',
      dolgota: '76°57"03"',
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
      datchik: '40'
    }
  }
  //mounted(){
  //  let api = ''
  //  this.axios.get(api).then((response) => {
  //  console.log(response.data);
//}, (error) => {
//  console.log("error");
//})
  //}
}
</script>
<style>
body {
  background: black;
  height: 700px;
}
html{
  line-height: 4;
}
h5, a, h6 {
color: #6621ca;
font-family: PF Din Text Cond Pro;
}
h6, h4, h5, h3 {
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
        width: 100%;
    }
}
h3 {
  color: #eca74c;
  font-family: PF Din Text Cond Pro Thin;
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
table, th, td {
    border: 1px solid #6621ca;
    border-collapse: collapse;
}
th, td {
    padding: 0px;
    text-align: left;
}
span {
  color: grey;
  font-family: PF Din Text Cond Pro;

}
</style>
