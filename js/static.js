$(function() {

    char1();

})

const map = new Map();
map.set('Joan Massagué', 'Metastasis;TGF-beta;Stem cell;Signal transduction;Transcription');
map.set(' T. Ince', '');
map.set('A. Bornheim', 'Physics');
map.set('George M. Whitesides', 'Chemical');
map.set('Robert Huber', 'Laser physics');
map.set('E. Sedykh', 'Biophotonics');
map.set('S. Bose', 'Cosmology');
map.set(' M. Ziolkowski', 'Ultracold chemistry');
map.set('N. Saoulidou', 'Experimental High Energy');
map.set('A. Gurtu', 'Business Administration; Supply Chain Management ');
map.set('S. R. Kulkarni', 'Regulatory genomics; Comparative genomics; Bioinformatics');
map.set(' Laurence Zitvogel', 'Cancer; Tumor immunology; Immunology');
map.set('V. Tisserand', 'Particle Physics; Heavy Flavours');
map.set(' S. Vallecorsa', 'particle physics; HPC; Deep Learning; Artificial Intelligence; Quantum Computing');
map.set(' O. Reimer', 'Multimessenger; Astrophysics; Astroparticle Physics - Cosmic Rays; Gamma-ray Astronomy');
map.set('R. J. Cava', 'Solid state chemistry; Superconductivity; Topological insulator');
map.set('P. F. Michelson', 'Physics; Astrophysics; Astronomy; High-energy astrophysics');
map.set('C. Ochando', '');
map.set(' A. CortesGonzalez', 'Peace culture; Communication; Advertising; Institutional politics');
map.set(' T. Speer', 'Biology');
map.set('N. Omodei', 'Astrophysics; Gamma-Ray Bursts;  Solar Flares;  X-Ray Polarimetry');
map.set(' A. Sandoval', 'Ruminant nutrition;   Animal nutrition;  Sheep;  Goat;   Tropical feed evaluation');
map.set('M. Giard', 'Astrophysique');
map.set('C. Bozzi', 'particle physics');
map.set(' D. Pedrini', 'Elementary particle physics');
map.set(' M. Planinic', 'Experimental nuclear physics; Experimental physics of elementary particles Daniel Loss');
map.set(' Daniel Loss', 'Quantum Theory of Condensed');
map.set('Ming Wang', '');
map.set('Hongjie Dai', 'Chemistry;    Materials science;   Physics;   Nanotechnology');
map.set('Charles N. Serhan', 'Resolution of Inflammation;   Chemical Mediators;   Leukocytes');
map.set('David Moher', 'Journalology;   Systematic Reviews');
map.set('D. Loukas', 'experimental particle physics');
map.set('J. Adelman', 'Ecological Immunology;  Disease Ecology');
map.set('Michael Karin', 'Molecular Biology;  Immunology;  Cancer Biology;   Signal Transduction');
map.set(' Panos Deloukas', 'Genetics  Genomics;  Heart Disease5');
map.set('B. Stieger', 'Physics');
map.set(' B. LundJensen', 'Physics');
map.set(' C. Kourkoumelis', 'Physics');
map.set(' Uzi Landman', 'Physics');
map.set('C. B. Netterfield', 'Balloon-borne astrophysics;  Sub-mm astronomy; Cosmic microwave');
map.set('Michael P. Lisanti', 'Senescence; Mitochondria;   Cancer Stem Cells;   Breast Cancer;  Drug Discovery');
map.set('S. Girgis', 'Biology genetics');
map.set('Karl J. Friston', '');
map.set('Teruo Okano', 'Tissue Engineering;  Regenerative Medicine;  Intelligent Polymer; Biomaterials; Drug Delivery Systems');
map.set('S. Yoshida', '');
map.set(' N. Giokaris', '');
map.set(' M. Purohit', 'Algorithms');
map.set(' Albert Hofman', 'Optics Integration;  Optical Packaging  Optical Waveguides;  Laser Material Processing;  Optical Coatings');
map.set(' R. Cavanaugh ', '');
map.set(' R. Claus', 'Particle Physics');

function char1() {

    var myChart = echarts.init($("#char1")[0]);
    myChart.on('click', function(param) {
        console.log(param);
        console.log(param.data);
        console.log(param.name);
        layer.open({
            title: "   ",
            area: ['500px', '300px'],
            shade: 0.2,
            maxmin: true,
            btn: ['Confirm'],
            content: '<div id="table" class="table"><table  style="width: 98%;color: #000000;font-size: 20px; padding:10px;border-collapse:separate;border-spacing:10px"><tr><td  style="width: 50%;">Name:</td><td style="width: 90%;">' + param.name + '</td></tr><tr><td>Data:</td><td>' 
            + param.data + '</td></tr><tr><td>Research areas:</td><td>'
             +map.get(param.name)+ '</td></tr></table></div>',
        });
    });
    option = {
        title: {
            text: '',
            textStyle: {
                color: "#e9ebee"

            },
            x: 'center'

        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    show: true,
                    title: 'DataZoom',
                    yAxisIndex: 'none'
                }, 
                dataView: { 
                    show: true,
                    title: 'Dataview',
                    optionToContent: function (opt) {
                        var axisData = opt.xAxis[0].data;
                        var series = opt.series;
                        var tdHeads = '<td  style="padding:0 10px">Scholar Name</td>';
                        series.forEach(function (item) {
                            tdHeads += '<td style="padding: 0 10px">'+item.name+'</td>';
                        });
                        var table = '<table border="1" style="margin-left:20px;border-collapse:collapse;font-size:14px;text-align:center"><tbody><tr>'+tdHeads+'</tr>';
                        var tdBodys = '';
                        for (var i = 0, l = axisData.length; i < l; i++) {
                            for (var j = 0; j < series.length; j++) {
                                if(typeof(series[j].data[i]) == 'object'){
                                    tdBodys += '<td>'+series[j].data[i].value+'</td>';
                                }else{
                                    tdBodys += '<td>'+ series[j].data[i]+'</td>';
                                }
                            }
                            table += '<tr><td style="padding: 0 10px">'+axisData[i]+'</td>'+ tdBodys +'</tr>';
                            tdBodys = '';
                        }
                        table += '</tbody></table>';
                        return table;
                    },
                    readOnly: false
                }, 
                magicType: {
                    show: true,
                    title: 'Switch to Line Chart',
                    
                    type: ['line','bar'],
                }, 
              
                restore: {
                    title: 'Restore',
                    show: true,
                },  
                saveAsImage: {
                    title: 'SaveAsImage',
                    show: true,
                }   
            }
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['H-index in Google Scholar', 'H-index in Crossref'],
            textStyle: {
                color: "#e9ebee"

            },
        },

        calculable: false,
        xAxis: [{
            type: 'category',
            splitLine: { show: false },
            axisLabel: {
                formatter: '{value} ',
                textStyle: {
                    color: '#a4a7ab',
                    align: 'center'
                }
            },
            data: [
                'Joan Massagué', ' T. Ince', 'A. Bornheim', 'George M. Whitesides', 'Robert Huber', 'E. Sedykh', 'S. Bose', 
                ' M. Ziolkowski', 'N. Saoulidou', 'A. Gurtu', 'S. R. Kulkarni', ' Laurence Zitvogel', 'V. Tisserand', ' S. Vallecorsa', 
                ' O. Reimer', 'R. J. Cava', 'P. F. Michelson', 'C. Ochando', ' A. CortesGonzalez', ' T. Speer', 'N. Omodei', ' A. Sandoval',
                'M. Giard', 'C. Bozzi', ' D. Pedrini', ' M. Planinic', ' Daniel Loss', 'Ming Wang', 'Hongjie Dai', 'Charles N. Serhan', 
                'David Moher', 'D. Loukas', 'J. Adelman', 'Michael Karin', ' Panos Deloukas', 'B. Stieger', ' B. LundJensen', 
                ' C. Kourkoumelis', ' Uzi Landman', 'C. B. Netterfield', 'Michael P. Lisanti', 'S. Girgis', 'Karl J. Friston', 'Teruo Okano',
                 'S. Yoshida', ' N. Giokaris', ' M. Purohit', 'Albert Hofman', ' R. Claus', ' R. Cavanaugh']
        }],
        yAxis: [{
            type: 'value',
            splitLine: { show: false },
            axisLabel: {
                formatter: '{value} ',
                textStyle: {
                    color: '#a4a7ab',
                    align: 'right'
                }
            }
        }],
        grid: {
            show: 'true',
            borderWidth: 0,

        },
        series: [{
                name: 'H-index in Crossref',
                type: 'bar',
                data: [105,83,79,93,80,102,114,94,82,89,76,84,81,110,93,85,82,105,100,83,83,80,83,81,80,81,79,60,100,80,93,85,81,166,79,
                    85,101,87,69,83,100,81,85,83,91,101,103,149,82,103],
                itemStyle: {
                    normal: {
                        color: '#2481ff'
                    }
                },

            },
            {
                name: 'H-index in Google Scholar',
                type: 'bar',
                data: [200, 45, 193, 273, 53, 7, 105, 12, 190, 9, 8, 145, 166, 176, 155, 151, 144, 196, 14, 27, 112, 36, 80, 167, 170, 132
                    , 100, 61, 203, 169, 159, 184, 24, 266, 174, 169, 203, 216, 107, 96, 169, 8, 251, 163, 0, 0, 11, 6, 99, 177],
                itemStyle: {
                    normal: {
                        color: '#1afffd'
                    }
                },


            }
        ]
    };


    myChart.setOption(option);
    window.addEventListener('resize', function() { myChart.resize(); })
}