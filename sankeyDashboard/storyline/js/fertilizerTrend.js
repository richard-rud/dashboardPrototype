
    var chart = c3.generate({
    size: {
        height: 400,
        width: 400
    },
    bindto: '#lineChart_Phosphorus',
    data: {
        columns: [
            ['Phosphorus', 7071, 7669, 8901, 8565, 8573, 8836]
        ]
    },
    color: {
        pattern: ['#ffffff']
    },
    axis: {
        x: {
            type: 'category',
            categories: ['2008/2009','2009/2010', '2010/2011', '2011/2012', '2012/2013', '2013/2014'],
            label: 'year'
        },
        y: {
            label: 'Amount',
            tick: {
                format: function(d) { return d + ' (ton)'; }, //Determine unit of measure 

            }
        },
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    },
    transition: {
        duration: 1000
    }
});


    var chart = c3.generate({
    size: {
        height: 400,
        width: 400
    },
    bindto: '#lineChart_Nitrogen',
    data: {
        columns: [
            ['Nitrogen', 79772, 83081, 96851, 95767, 97010, 102238]
        ]
    },
    color: {
        pattern: ['#ffffff']
    },
    axis: {
        x: {
            type: 'category',
            categories: ['2008/2009','2009/2010', '2010/2011', '2011/2012', '2012/2013', '2013/2014'],
            label: 'year'
        },
        y: {
            label: 'Amount',
            tick: {
                format: function(d) { return d + ' (ton)'; }, //Determine unit of measure 

            }
        },
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    },
    transition: {
        duration: 1000
    }
});