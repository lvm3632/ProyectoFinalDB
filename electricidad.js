google.charts.load("current", { packages: ["line"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("number", "Meses");
  data.addColumn("number", "Guadalajara");
  data.addColumn("number", "Ciudad de México");
  data.addColumn("number", "Monterrey");

  data.addRows([
    [1, 6005.99, 6468.83, 5916.67],
    [2, 5745.39, 6188.51, 5660.71],
    [3, 5487.23, 5909.47, 5406.03],
    [4, 5339.84, 5750.48, 5260.96],
    [5, 5417.63, 5834.07, 5337.59],
    [6, 5416.19, 5832.63, 5336.15],
    [7, 5276.06, 5680.9, 5197.18],
    [8, 5279.06, 5683.9, 5200.18],
    [9, 5070.06, 5457.5, 4993.5],
    [10, 5147.52, 5540.76, 5069.8],
    [11, 5203.52, 5601.4, 5124.64],
    [12, 5085.85, 5474.45, 5009.29],
    [13, 4948.69, 5326.85, 4874.45],
    [14, 4925.38, 5301.22, 4851.14],
    [15, 4821.85, 5190.73, 4749.93],
    [16, 4826.82, 5196.86, 4754.9],
    [17, 4824.31, 5193.19, 4752.39],
    [18, 5032.18, 5417.3, 4956.78],
    [19, 5018.28, 5402.24, 4942.88],
    [20, 5021.78, 5405.74, 4946.38],
    [21, 5157.87, 5552.27, 5080.15],
    [22, 5334.81, 5743.13, 5254.77],
  ]);

  var options = {
    chart: {
      title:
        "Precios de consumo en electricidad para vivienda del 2019/02 al 2020/10",
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
