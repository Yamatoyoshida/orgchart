//Google Chart APIを使い組織図を描画する


// ライブラリのロード
// name:visualization(可視化),version:バージョン(1),packages:パッケージ(orgchart)
google.load('visualization', '1', {'packages':['orgchart']});     

  
window.addEventListener('DOMContentLoaded', function () {
  // グラフを描画する為のコールバック関数を指定
  google.setOnLoadCallback(drawChart);
 
  // グラフの描画   
  function drawChart() {  
      // メソッドからデータの生成    
      var data = new google.visualization.DataTable();
      data.addColumn('string', '名前');
      data.addColumn('string', '親');
      data.addColumn('string', 'ツールチップ');
   
      data.addRows([
        [{v:'監査役',f:'<strong>監査役</strong><br>監査役太郎'}, '', ''],
        [{v:'取締役会',f:'<strong>取締役会</strong>'},'監査役',''],
        [{v:'代表取締役',f:'<strong>代表取締役</strong><br>社長太郎'},'取締役会',''],

        //部門A
        [{v:'部門A',f:'<strong>部門A</strong><br>取締役部長<br>部門A部長太郎'},'代表取締役',''],
        [{v:'A課',f:'<strong>A課</strong><br>A課花子'},'部門A',''],
        //部門B
        [{v:'部門B',f:'<strong>部門B</strong><br>部門B部長太郎'},'代表取締役',''],
        //部門C
        [{v:'部門C',f:'<strong>部門C</strong><br>部門C本部長太郎<br>部門C本部長花子'},'代表取締役',''],
        [{v:'部門C－あ',f:'<strong>部門C－あ</strong><br>部門C－あ太郎'},'部門C',''],
        [{v:'部門C－あ配下1',f:'部門C－あ配下1'},'部門C－あ',''],
        [{v:'部門C－あ配下2',f:'部門C－あ配下2'},'部門C－あ',''],
        [{v:'部門C－い',f:'<strong>部門C－い</strong><br>部門C－い太郎'},'部門C',''],
        [{v:'部門C－い配下',f:'部門C－い配下'},'部門C－い',''],
      
      ]);      
    
 
    // オプションの設定
    var options = {
      allowHtml: true,  // HTMLを許可する
      allowCollapse: false,
      size:'medium',
      

    };   
             
    // 指定されたIDの要素に組織図を作成
    var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
 
    // グラフの描画
    chart.draw(data, options);
  }
});