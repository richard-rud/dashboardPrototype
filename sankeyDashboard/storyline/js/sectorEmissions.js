    var chart = c3.generate({
    size: {
        height: 400,
        width: 800
    },
    bindto: '#emissionsPie',
    data: {
        
        columns: [
            ['Oil and gas extraction', 27.3],
            ['Industry and mining', 22.3],
            ['Energy supply', 3.1],
            ['Heating in other industries and households', 2.2],
            ['Road traffic', 19],
            ['Aviation, marine, fishing, motorized equipment and more', 11.7],
            ['Agriculture', 8.8],
            ['Other sources', 5.6],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    legend: {
        show: false

    },
    color: {
        //pattern: ['#993404','#004529','#cc4c02','#ec7014','#fe9929','#fec44f','#fee391','#fff7bc']
        pattern: ['#984ea3','#984ea3','#984ea3','#984ea3','#984ea3','#984ea3','#4daf4a','#984ea3']
    }
});



