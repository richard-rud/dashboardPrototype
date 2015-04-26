var chart = c3.generate({
    size: {
        height: 200,
        width: 600
    },
    bindto: '#foodWasteGlobally',
    data: {
        x : 'x',

        columns: [
            ['x', 'Food waste versus food production'],
            ['Food waste in the developed world', 222],
            ['Total food production in sub-Saharan Africa: 230 million tons/yr', 230]
        ],
        type: 'bar'
    },
    legend: {
        position: 'bottom'
    },
    color: {
        pattern: ['#ffffff', '#969696']
    },
     bar: {
        width: {
            ratio: 0.6 
        }
       
    },
    axis: {
        rotated: true,
        
        x: {
            type: 'category'
        },
        y: {
            show: false,
            tick: {
                format: function(d) { return d + ' (tons/yr)'; }, //Determine unit of measure 

            }
        }
    }
});


