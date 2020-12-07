google.charts.load("current", { packages: ["line"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("number", "Meses");
  data.addColumn("number", "Guadalajara");
  data.addColumn("number", "Ciudad de México");
  data.addColumn("number", "Monterrey");

  data.addRows([
    [1, 1214.07, 830.99, 1225.56],
    [2, 1214.07, 853.46, 1225.56],
    [3, 1214.07, 853.46, 1225.56],
    [4, 1214.07, 853.46, 1229.34],
    [5, 1214.07, 853.46, 1229.34],
    [6, 1214.07, 853.46, 1247.8],
    [7, 1214.07, 853.46, 1260.97],
    [8, 1214.07, 853.46, 1286.3],
    [9, 1214.07, 853.46, 1288.86],
    [10, 1214.07, 853.46, 1294.98],
    [11, 1214.07, 853.46, 1297.74],
    [12, 1214.07, 853.46, 1297.78],
    [13, 1250.49, 865.53, 1301.01],
    [14, 1250.49, 877.6, 1303.33],
    [15, 1250.49, 877.6, 1323.87],
    [16, 1250.49, 877.6, 1324.45],
    [17, 1250.49, 877.6, 1325.03],
    [18, 1250.49, 877.6, 1339.71],
    [19, 1250.49, 877.6, 1342.57],
    [20, 1250.49, 877.6, 1344.76],
    [21, 1250.49, 877.6, 1345.95],
    [22, 1250.49, 877.6, 1351.64],
  ]);

  var options = {
    chart: {
      title:
        "Precios de consumo promedio en suministro de agua para vivienda del 2019/03 al 2020/10",
      subtitle: "Agua",
    },
    vAxis: {
      title: "Precio (MXN)",
    },
    hAxis: {
      title: "Meses",
    },
  };

  var chart = new google.charts.Line(
    document.getElementById("linechart_material3")
  );

  chart.draw(data, google.charts.Line.convertOptions(options));
}
