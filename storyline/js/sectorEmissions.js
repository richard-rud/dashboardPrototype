    var chart = c3.generate({
    size: {
        height: 500,
        width: 1000
    },
    bindto: '#emissionsPie',
    data: {
        
        columns: [
            ['Oil and gas extraction', 13.8],
            ['Industry and mining', 12.1],
            ['Energy supply', 1.8],
            ['Heating in other industries and households', 1.5],
            ['Road traffic', 10.1],
            ['Aviation, marine, fishing, motorized equipment and more', 7],
            ['Agriculture', 4.7],
            ['Other sources', 2.9],
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
        pattern: ['#bdbdbd','#bdbdbd','#bdbdbd','#bdbdbd','#bdbdbd','#bdbdbd','#e31a1c','#bdbdbd']
    }
});