var years = [];
var ncsu = [];
var unc = [];
var ecu = [];
var ncat = [];
var uncc = [];
var uncg = [];
var asu = [];
var fsu = [];
var nccu = [];
var uncp = [];
var uncw = [];
var wcu = [];
var wssu = [];
var unca = [];
var ecsu = [];
var hertford = [];
var mecklenburg = [];
var wilkes = [];
var orange = [];
var onslow = [];
var us = [];
var nc = [];

$(document).ready(function() { //runs the function

  /* PIE CHART THEME */
  Highcharts.theme = {
    /* LINE/BAR/COLUMN/SLICE COLORS - only used for slices for Plex, if we add multiple data sets in future releases, these colors will work with the rendering of other sets */
    colors: ['#DFE9F3', '#B7D6EB', '#8CB8D9', '#6F93B5', '#557193', '#335682', '#203B66'],

    /* CHART TITLE */
    title: {
      style: {
        color: '#444444',
        font: '24px "Oswald", Helvetica, Arial, sans-serif'
      }
    },

    /* CHART SUBTITLE */
    subtitle: {
      style: {
        color: '#666666',
        font: '12px "Oswald", Helvetica, Arial, sans-serif'
      }
    },

    /* LINE CHART COLORS */
    plotOptions: {
      pie: {
        cursor: 'pointer',
        borderColor: '#ffffff',
        borderWidth: 1,
        shadow: false
      }
    }
  };

  // Apply the theme
  var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

  $.ajax({ //loads in xml file
    type: "GET",
    url: "datasets/percent_change.xml",
    dataType: "xml",
    success: parseData
  });

  function parseData(xml) {
    console.log(xml);
    $(xml).find('row').each(function() { //starts loop to find all people, etc
      var $row = $(this);
      years.push(parseInt($row.find('Year').text()));
      // ncsu.push(parseInt($row.find('NCSU').text()));
      unc.push(parseInt($row.find('UNC').text()));
      // ecu.push(parseInt($row.find('ECU').text()));
      // ncat.push(parseInt($row.find('NCAT').text()));
      // uncc.push(parseInt($row.find('UNCC').text()));
      // uncg.push(parseInt($row.find('UNCG').text()));
      // asu.push(parseInt($row.find('ASU').text()));
      // fsu.push(parseInt($row.find('FSU').text()));
      // nccu.push(parseInt($row.find('NCCU').text()));
      // uncp.push(parseInt($row.find('UNCP').text()));
      // uncw.push(parseInt($row.find('UNCW').text()));
      // wcu.push(parseInt($row.find('WCU').text()));
      // wssu.push(parseInt($row.find('WSSU').text()));
      // unca.push(parseInt($row.find('UNCA').text()));
      // ecsu.push(parseInt($row.find('ECSU').text()));
      hertford.push(parseInt($row.find('Hertford_County').text()));
      mecklenburg.push(parseInt($row.find('Mecklenburg_County').text()));
      wilkes.push(parseInt($row.find('Wilkes_County').text()));
      orange.push(parseInt($row.find('Orange_County').text()));
      onslow.push(parseInt($row.find('Onslow_County').text()));
      us.push(parseInt($row.find('United_States').text()));
      nc.push(parseInt($row.find('North_Carolina').text()));
    });

    console.log(years);
    buildLineChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
  }

  function buildLineChart(xml) { //tells how to build chart, but need to add buildChart blah blah in document ready above
    var chart1 = new Highcharts.Chart({
      chart: {
        renderTo: 'percent_change-linechart',
        type: 'line'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: years
      },
      yAxis: {
        title: {
          text: 'Percent of Change'
        }
      },
      plotOptions: {
        marker: {
          enabled: false
        }
      },
      series: [
        // {name: 'NCSU', data: ncsu},
        // {name: 'ECU', data: ecu},
        // {name: 'NCAT', data: ncat},
        // {name: 'UNCC', data: uncc},
        // {name: 'UNCG', data: uncg},
        // {name: 'ASU', data: asu},
        // {name: 'FSU', data: fsu},
        // {name: 'NCCU', data: nccu},
        // {name: 'UNCP', data: uncp},
        // {name: 'UNCW', data: uncw},
        // {name: 'WCU', data: wcu},
        // {name: 'WSSU', data: wssu},
        // {name: 'UNCA', data: unca},
        // {name: 'ECSU', data: ecsu},
        {name: 'UNC', data: unc},
        {name: 'Hertford County', data: hertford},
        {name: 'Mecklenburg County', data: mecklenburg},
        {name: 'Wilkes County', data: wilkes},
        {name: 'Orange County', data: orange},
        {name: 'Onslow County', data: onslow},
        {name: 'United States', data: us},
        {name: 'North Carolina', data: nc}
        ]
    });
  }
});
