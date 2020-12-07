google.charts.load("current", { packages: ["line"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("number", "Meses");
  data.addColumn("number", "Guadalajara");
  data.addColumn("number", "Ciudad de México");
  data.addColumn("number", "Monterrey");

  data.addRows([
    [1, 10.71, 11.23, 9.63],
    [2, 11.2, 11.23, 9.61],
    [3, 11.33, 11.14, 9.2],
    [4, 10.88, 10.89, 8.92],
    [5, 9.78, 10.66, 8.16],
    [6, 9.52, 10.12, 8.11],
    [7, 8.99, 10.15, 8.15],
    [8, 9.1, 10.38, 8.2],
    [9, 9.2, 10.94, 8.5],
    [10, 9.14, 11.23, 8.85],
    [11, 9.06, 11.22, 9.02],
    [12, 8.62, 11.1, 8.77],
    [13, 8.51, 10.98, 8.3],
    [14, 8.67, 10.98, 8.3],
    [15, 8.61, 10.98, 8.38],
    [16, 9.04, 10.98, 9.22],
    [17, 9.47, 11.45, 9.4],
    [18, 9.59, 11.99, 9.4],
    [19, 9.72, 12.22, 9.68],
    [20, 9.49, 12.26, 9.8],
    [21, 9.91, 12.56, 9.99],
  ]);

  var options = {
    chart: {
      title:
        "Precios de consumo en Gas LP para vivienda del 2019/03 al 2020/10",
      subtitle: "Gas, cantidad por litro.",
    },
    vAxis: {
      title: "Precio",
    },
    hAxis: {
      title: "Meses",
    },
  };

  var chart = new google.charts.Line(
    document.getElementById("linechart_material2")
  );

  chart.draw(data, google.charts.Line.convertOptions(options));
}
