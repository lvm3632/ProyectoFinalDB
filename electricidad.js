google.charts.load("current", { packages: ["line"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("number", "Meses");
  data.addColumn("number", "Guadalajara");
  data.addColumn("number", "Ciudad de México");
  data.addColumn("number", "Monterrey");

  data.addRows([
    [1, 6005.99, 6468.83, 41.8],
    [2, 5745.39, 6188.51, 32.4],
    [3, 5487.23, 5909.47, 25.7],
    [4, 5339.84, 5750.48, 10.5],
    [5, 5417.63, 5834.07, 10.4],
    [6, 5416.19, 5832.63, 7.7],
    [7, 5276.06, 5680.9, 9.6],
    [8, 5279.06, 5683.9, 10.6],
    [9, 5070.06, 5457.5, 14.8],
    [10, 5147.52, 5540.76, 11.6],
    [11, 5203.52, 5601.4, 4.7],
    [12, 5085.85, 5474.45, 5.2],
    [13, 4948.69, 5326.85, 3.6],
    [14, 4925.38, 5301.22, 3.4],
    [15, 4821.85, 5190.73, 3.4],
    [16, 4826.82, 5196.86, 3.4],
    [17, 4824.31, 5193.19, 3.4],
    [18, 5032.18, 5417.3, 3.4],
    [19, 5018.28, 5402.24, 3.4],
    [20, 5021.78, 5405.74, 3.4],
    [21, 5157.87, 5552.27, 3.4],
    [22, 5334.81, 5743.13, 3.4],
  ]);

  var options = {
    chart: {
      title:
        "Precios en consumo de electricidad para vivienda del 2019/01 al 2020/10",
      subtitle: "Consumo de 1000 KWH",
    },
    vAxis: {
      title: "Precio",
    },
    hAxis: {
      title: "Meses",
    },
  };

  var chart = new google.charts.Line(
    document.getElementById("linechart_material")
  );

  chart.draw(data, google.charts.Line.convertOptions(options));
}
